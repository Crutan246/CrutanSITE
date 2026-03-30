"use client";

import { track } from "@/lib/gtm";

interface Props {
  postTitle: string;
  postSlug: string;
  postCategory: string;
  isFeatured: boolean;
  children: React.ReactNode;
}

/**
 * Thin client wrapper that fires a blog_post_click event when the user clicks
 * into a post card. The inner Link/content is rendered by the server component.
 */
export function BlogClickTracker({ postTitle, postSlug, postCategory, isFeatured, children }: Props) {
  return (
    <div
      onClick={() =>
        track({
          event: "blog_post_click",
          post_title: postTitle,
          post_slug: postSlug,
          post_category: postCategory,
          is_featured: isFeatured,
        })
      }
    >
      {children}
    </div>
  );
}
