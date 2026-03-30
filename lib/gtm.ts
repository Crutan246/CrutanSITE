import { sendGTMEvent } from "@next/third-parties/google";

// ─── Typed event catalog ────────────────────────────────────────────────────
export type GtmEvent =
  | { event: "cta_click";           cta_text: string; cta_location: string; destination: string }
  | { event: "nav_click";           link_text: string; link_href: string }
  | { event: "sign_in_click";       location: string }
  | { event: "hero_search_submit";  query_text: string }
  | { event: "google_auth_click";   location: string }
  | { event: "blog_post_click";     post_title: string; post_slug: string; post_category: string; is_featured: boolean }
  | { event: "blog_article_view";   post_title: string; post_slug: string; post_category: string }
  | { event: "blog_article_completed"; post_title: string; post_slug: string }
  | { event: "scroll_depth";        depth: number; page_path: string }
  | { event: "faq_open";            question: string }
  | { event: "pricing_cta_click";   cta_text: string; plan: string };

export function track(payload: GtmEvent) {
  sendGTMEvent(payload);
}
