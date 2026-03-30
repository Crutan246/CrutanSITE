import Link from "next/link";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/blog";
import { BlogClickTracker } from "@/components/blog-click-tracker";

const categoryColors: Record<string, string> = {
  Analytics: "bg-action/10 text-action",
  Productivity: "bg-saffron/10 text-saffron",
  Tutorials: "bg-sage/10 text-sage",
  SEO: "bg-loam/10 text-loam",
  General: "bg-sand text-weathered",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* Header */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-action" />
            <span className="text-xs font-semibold uppercase tracking-widest text-action">
              Blog
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-bark mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Analytics insights for
            <br />
            founders and operators
          </h1>
          <p className="text-lg text-weathered max-w-xl">
            Plain-English guides to GA4, SEO, and making better decisions with
            your website data.
          </p>
        </div>
      </section>

      {/* Featured posts */}
      {featured.length > 0 && (
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-weathered mb-6">
              Featured
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <BlogClickTracker key={post.slug} postTitle={post.title} postSlug={post.slug} postCategory={post.category} isFeatured={true}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group bg-parchment-surface border border-sand/60 rounded-2xl p-6 card-lift hover:border-action/30 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                          categoryColors[post.category] || categoryColors.General
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-weathered flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-semibold text-bark mb-3 group-hover:text-action transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm text-weathered leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-weathered">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs font-semibold text-action flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </BlogClickTracker>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {rest.length > 0 && (
            <h2 className="text-xs font-semibold uppercase tracking-widest text-weathered mb-6">
              All Posts
            </h2>
          )}
          <div className="grid grid-cols-1 gap-4">
            {rest.map((post) => (
              <BlogClickTracker key={post.slug} postTitle={post.title} postSlug={post.slug} postCategory={post.category} isFeatured={false}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row gap-4 sm:items-start bg-parchment border border-sand/40 rounded-xl p-5 hover:border-action/30 hover:bg-parchment-surface transition-all duration-150"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                          categoryColors[post.category] || categoryColors.General
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-weathered">
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      className="font-semibold text-bark group-hover:text-action transition-colors mb-1"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-xs text-weathered leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 flex-shrink-0">
                    <span className="text-xs text-weathered whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <ArrowRight className="w-4 h-4 text-action opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </BlogClickTracker>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <Tag className="w-8 h-8 text-sand mx-auto mb-3" />
              <p className="text-weathered">Posts coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-parchment-surface border-t border-sand/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-bark mb-3"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Stop reading about analytics.
            <br />
            Start understanding yours.
          </h2>
          <p className="text-weathered text-sm mb-6">
            Connect your GA4 and get your first AI briefing tomorrow morning.
          </p>
          <a
            href="https://app.crutan.com/login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-colors text-sm"
          >
            Get early access free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
