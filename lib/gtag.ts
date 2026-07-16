// Helper de evento GA4 · Central do Concreto
// Portado da BJ (lib/gtag.ts). Só o gtagEvent — consent default vive no layout,
// consent update vive no ConsentBanner. Measurement ID hardcodado no layout.

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gtagEvent = (name: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
};
