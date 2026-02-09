type AnalyticsProvider = 'plausible' | 'umami' | 'none';

type AnalyticsEventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: AnalyticsEventProps }) => void;
    umami?: { track: (event: string, props?: AnalyticsEventProps) => void };
  }
}

const getProvider = (): AnalyticsProvider => {
  const provider = (import.meta.env.VITE_ANALYTICS_PROVIDER as AnalyticsProvider | undefined)?.toLowerCase();
  if (provider === 'plausible' || provider === 'umami' || provider === 'none') {
    return provider;
  }
  return 'none';
};

const getDomain = () => import.meta.env.VITE_ANALYTICS_DOMAIN as string | undefined;

export const trackEvent = (name: string, props?: AnalyticsEventProps) => {
  const provider = getProvider();
  if (provider === 'plausible') {
    window.plausible?.(name, { props });
    return;
  }
  if (provider === 'umami') {
    window.umami?.track(name, props);
  }
};

export const trackPageView = (path: string) => {
  const provider = getProvider();
  if (provider === 'none') {
    return;
  }
  const domain = getDomain();
  const payload = {
    path,
    domain,
  };
  trackEvent('page_view', payload);
};
