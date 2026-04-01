"use client";

import { useEffect } from "react";
import { captureSessionData } from "@/lib/analytics/captureSessionData";

/**
 * Invisible component that captures GA4 client_id + UTM parameters
 * on every page load and stores them in the crutan_attribution cookie.
 *
 * The 500ms delay gives GTM/GA4 time to set the _ga cookie before
 * we attempt to read it.
 */
export function AttributionCapture() {
  useEffect(() => {
    const timer = setTimeout(captureSessionData, 500);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
