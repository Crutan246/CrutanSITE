import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { BlogPostTracker } from "@/components/blog-post-tracker";
import { SignupButton } from "@/components/signup-button";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://crutan.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://crutan.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const rendered: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      rendered.push(
        <h2
          key={i}
          className="text-2xl font-bold text-bark mt-10 mb-4"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      rendered.push(
        <h3
          key={i}
          className="text-lg font-semibold text-bark mt-8 mb-3"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      rendered.push(
        <p key={i} className="font-semibold text-bark mt-4 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      rendered.push(
        <ul key={i} className="space-y-1.5 my-4 pl-4">
          {items.map((item, j) => (
            <li key={j} className="text-loam text-base leading-relaxed flex items-start gap-2">
              <span className="text-action mt-1.5 flex-shrink-0">·</span>
              <span dangerouslySetInnerHTML={{ __html: inlineMarkdown(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("```")) {
      const lang = line.slice(3);
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      rendered.push(
        <pre key={i} className="my-6 bg-bark text-parchment/80 rounded-xl p-5 overflow-x-auto text-sm font-mono leading-relaxed">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
    } else if (line.startsWith("---")) {
      rendered.push(<hr key={i} className="my-8 border-sand" />);
    } else if (line.trim() === "") {
      // skip
    } else {
      rendered.push(
        <p
          key={i}
          className="text-loam text-base leading-[1.8] mb-4"
          dangerouslySetInnerHTML={{ __html: inlineMarkdown(line) }}
        />
      );
    }
    i++;
  }

  return rendered;
}

function inlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, '<code class="bg-parchment-surface px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-action underline underline-offset-2">$1</a>');
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-parchment">
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          author: post.author,
          slug: post.slug,
          category: post.category,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://crutan.com" },
          { name: "Blog", url: "https://crutan.com/blog" },
          { name: post.title, url: `https://crutan.com/blog/${post.slug}` },
        ])}
      />
      <BlogPostTracker postTitle={post.title} postSlug={post.slug} postCategory={post.category} />
      <Nav />

      <article className="pt-28 pb-20 sm:pt-36">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-weathered hover:text-bark transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Post meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-action bg-action/10 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-weathered flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="text-xs text-weathered">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl font-bold text-bark mb-5 leading-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-weathered leading-relaxed mb-8 border-l-2 border-saffron pl-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 mb-12 pb-8 border-b border-sand">
            <div className="w-8 h-8 rounded-full bg-action/10 flex items-center justify-center text-action text-xs font-bold">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span className="text-sm font-medium text-bark">{post.author}</span>
          </div>

          {/* Content */}
          <div className="prose-crutan">
            {renderMarkdown(post.content)}
          </div>
        </div>
      </article>

      {/* CTA inline */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-action rounded-2xl p-8 text-center">
          <p
            className="text-xl font-bold text-parchment mb-2"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Put this into practice automatically.
          </p>
          <p className="text-parchment/70 text-sm mb-5">
            Connect your GA4 and wake up tomorrow to an AI briefing that does
            all of this for you — every morning.
          </p>
          <SignupButton location="blog_article_cta" />
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="pb-20 border-t border-sand/40 pt-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-weathered" />
              <span className="text-xs font-semibold uppercase tracking-widest text-weathered">
                Related Posts
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group p-4 bg-parchment-surface border border-sand/60 rounded-xl hover:border-action/30 transition-all"
                >
                  <h3
                    className="font-semibold text-sm text-bark group-hover:text-action transition-colors mb-1"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-weathered line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
