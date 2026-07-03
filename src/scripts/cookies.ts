// Lógica de consentimiento de cookies, compartida entre el banner
// (CookieBanner.astro) y el panel de preferencias de /politica-cookies.
// Guardamos la elección en localStorage: a efectos de RGPD/ePrivacy se
// trata igual que una cookie (es información guardada en el dispositivo
// del usuario), así que también se documenta como tal en la política.
export const CONSENT_KEY = "velzory_cookie_consent";

export interface CookieConsent {
  essential: true;
  analytics: boolean;
  decidedAt: string;
}

export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): CookieConsent {
  const consent: CookieConsent = { essential: true, analytics, decidedAt: new Date().toISOString() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  return consent;
}
