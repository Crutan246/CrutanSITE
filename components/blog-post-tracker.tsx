"use client";

import { useEffect } from "react";
import { track } from "@/lib/gtm";
import { useScrollDepth } from "@/hooks/use-scroll-depth";

interface Props {
  postTitle: string;
  postSlug: string;
  postCategory: string;
}

/**
 * Fires blog_article_view on mount, tracks scroll depth, and fires
 * blog_article_completed when the user reaches 90% of the article.
 */
export function BlogPostTracker({ postTitle, postSlug, postCategory }: Props) {
  useScrollDepth();

  useEffect(() => {
    track({ event: "blog_article_view", post_title: postTitle, post_slug: postSlug, post_category: postCategory });
  }, [postTitle, postSlug, postCategory]);

  useEffect(() => {
    let fired = false;

    function check() {
      if (fired) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= 0.9) {
        fired = true;
        track({ event: "blog_article_completed", post_title: postTitle, post_slug: postSlug });
      }
    }

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [postTitle, postSlug]);

  return null;
}
