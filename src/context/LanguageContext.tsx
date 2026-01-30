import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export type Language = 'es' | 'en' | 'fr';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'ryg_lang';
const SUPPORTED_LANGUAGES: Language[] = ['es', 'en', 'fr'];

const normalizeLanguage = (value?: string | null): Language | null => {
  if (!value) {
    return null;
  }
  return SUPPORTED_LANGUAGES.includes(value as Language) ? (value as Language) : null;
};

const detectBrowserLanguage = (): Language => {
  if (typeof navigator === 'undefined') {
    return 'es';
  }
  const [primary] = navigator.language.toLowerCase().split('-');
  return normalizeLanguage(primary) ?? 'es';
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('es');

  const queryLanguage = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return normalizeLanguage(params.get('lang'));
  }, [location.search]);

  useEffect(() => {
    const stored = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
    const next = queryLanguage ?? stored ?? detectBrowserLanguage();
    if (next !== language) {
      setLanguageState(next);
    }
    if (next !== stored) {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, [language, queryLanguage]);

  const setLanguage = useCallback(
    (next: Language) => {
      setLanguageState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      const params = new URLSearchParams(location.search);
      params.set('lang', next);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
      trackEvent('language_change', { language: next });
    },
    [location.pathname, location.search, navigate],
  );

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
