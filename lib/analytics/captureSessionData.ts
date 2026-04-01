/**
 * Reads the GA4 client_id and UTM parameters from the current page,
 * then persists them to a cross-subdomain "crutan_attribution" cookie
 * so that app.crutan.com can read the values after signup.
 *
 * Write policy: only write if UTM params are present in the URL OR
 * if no crutan_attribution cookie exists yet — never overwrite a
 * UTM-attributed visit with a direct one.
 */

const COOKIE_NAME = "crutan_attribution";
const MAX_AGE_SECONDS = 90 * 24 * 60 * 60; // 90 days

export interface AttributionData {
  client_id: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  captured_at: string;
}

/** Read a cookie value by name from document.cookie. */
function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null;
}

/**
 * Parse the GA4 client_id out of the _ga cookie.
 * Cookie format: "GA1.1.1234567890.1234567890"
 * We want the last two dot-separated segments: "1234567890.1234567890"
 */
function getGaClientId(): string {
  const raw = readCookie("_ga");
  if (!raw) return "";
  const parts = raw.split(".");
  // Minimum expected length is 4 (GA1.1.XXXX.XXXX)
  if (parts.length >= 4) {
    return `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
  }
  return raw;
}

/** Extract UTM parameters from the current page URL. */
function getUtmParams(): Pick<
  AttributionData,
  "utm_source" | "utm_medium" | "utm_campaign" | "utm_content" | "utm_term"
> {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_content: params.get("utm_content"),
    utm_term: params.get("utm_term"),
  };
}

/** Returns true if any UTM value is non-null. */
function hasUtmParams(
  utms: ReturnType<typeof getUtmParams>
): boolean {
  return Object.values(utms).some((v) => v !== null);
}

/** Write the attribution data as a cross-subdomain cookie. */
function writeAttributionCookie(data: AttributionData): void {
  const value = encodeURIComponent(JSON.stringify(data));
  document.cookie = [
    `${COOKIE_NAME}=${value}`,
    `domain=.crutan.com`,
    `path=/`,
    `max-age=${MAX_AGE_SECONDS}`,
    `SameSite=Lax`,
  ].join("; ");
}

/**
 * Main entry point. Call this once on mount (after a short delay to
 * allow GTM/GA4 to set the _ga cookie).
 */
export function captureSessionData(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const utms = getUtmParams();
  const existingCookie = readCookie(COOKIE_NAME);

  // Don't overwrite an existing good attribution with a direct visit
  if (existingCookie && !hasUtmParams(utms)) return;

  const data: AttributionData = {
    client_id: getGaClientId(),
    ...utms,
    captured_at: new Date().toISOString(),
  };

  writeAttributionCookie(data);
}
