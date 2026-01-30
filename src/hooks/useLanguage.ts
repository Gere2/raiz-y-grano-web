import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'es' | 'en' | 'fr';

const LANG_STORAGE_KEY = 'raiz-grano-language';
const LANGS: Language[] = ['es', 'en', 'fr'];

const normalizeLanguage = (value: string | null): Language | null => {
  if (!value) {
    return null;
  }
  return LANGS.includes(value as Language) ? (value as Language) : null;
};

const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('es');

  const queryLang = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return normalizeLanguage(params.get('lang'));
  }, [location.search]);

  useEffect(() => {
    const stored = normalizeLanguage(window.localStorage.getItem(LANG_STORAGE_KEY));
    setLanguageState(queryLang ?? stored ?? 'es');
  }, [queryLang]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    const params = new URLSearchParams(location.search);
    params.set('lang', next);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return { language, setLanguage };
};

export default useLanguage;
