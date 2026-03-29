import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  FileText,
  MessageSquare,
  BarChart3,
  ArrowRight,
  ExternalLink,
  Search,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const guides = [
  {
    icon: BarChart3,
    category: "GA4 Fundamentals",
    title: "Setting Up GA4 Conversions the Right Way",
    description:
      "Conversion tracking is the most important thing to get right in GA4. This guide walks you through every method — from marking existing events to creating custom events with Google Tag Manager.",
    readTime: "8 min",
    href: "/blog/ga4-conversions-setup",
    internal: true,
  },
  {
    icon: Search,
    category: "SEO",
    title: "Google Search Console: What Founders Actually Need to Know",
    description:
      "Search Console shows you exactly what people search to find your site. This guide covers the four reports worth checking monthly and how to connect them to GA4 data.",
    readTime: "7 min",
    href: "/blog/search-console-for-founders",
    internal: true,
  },
  {
    icon: FileText,
    category: "Analytics Routines",
    title: "The 5-Minute Morning Analytics Routine",
    description:
      "Most founders check analytics reactively. This structured 5-minute ritual answers the three questions that actually matter — every morning, without the rabbit holes.",
    readTime: "5 min",
    href: "/blog/morning-analytics-routine",
    internal: true,
  },
  {
    icon: MessageSquare,
    category: "GA4 Help",
    title: "Why GA4 Is Hard (And What to Do About It)",
    description:
      "The data model changed, the reports moved, and the jargon is different. This post explains the most common stumbling blocks and how to get past them.",
    readTime: "6 min",
    href: "/blog/why-ga4-is-hard",
    internal: true,
  },
];

const externalLinks = [
  {
    category: "Google Official",
    links: [
      {
        title: "GA4 Help Center",
        url: "https://support.google.com/analytics",
        description: "Official documentation for all GA4 features",
      },
      {
        title: "Search Console Help",
        url: "https://support.google.com/webmasters",
        description: "Google Search Console documentation and guides",
      },
      {
        title: "GA4 Event Reference",
        url: "https://support.google.com/analytics/answer/9267735",
        description: "Recommended and automatically collected events in GA4",
      },
    ],
  },
  {
    category: "Tools",
    links: [
      {
        title: "GA4 Debugger (Chrome Extension)",
        url: "https://chrome.google.com/webstore/detail/google-analytics-debugger",
        description: "Verify your GA4 events are firing correctly",
      },
      {
        title: "GA4 Setup Checklist",
        url: "https://support.google.com/analytics/answer/9304153",
        description: "Official Google checklist for GA4 implementation",
      },
    ],
  },
];

const faqs = [
  {
    q: "How long does Crutan take to set up?",
    a: "Most users complete setup in under 5 minutes. Sign in with Google, connect your GA4 property, answer a few questions about your business, choose your delivery time — done. Your first briefing arrives the next morning.",
  },
  {
    q: "What kind of briefings does Crutan send?",
    a: "Daily briefings cover: a TL;DR of the most important thing that happened, key metrics vs. your 7-day average, traffic source breakdown, top pages, and 1-3 specific action items. Weekly briefings are more comprehensive — a full scorecard, trend analysis, and prioritized recommendations for the week ahead.",
  },
  {
    q: "Can the AI answer follow-up questions?",
    a: "Yes. The live chat interface queries your actual GA4 data and Search Console in real time. You can ask anything: 'What were my top search queries last month?' or 'How did my conversion rate change since we launched the new landing page?' — and get an answer grounded in your real numbers.",
  },
  {
    q: "Does Crutan work without Google Search Console?",
    a: "Yes. GA4 is the only required integration. Search Console is optional but unlocks organic search intelligence — keyword rankings, impressions, CTR, and SEO trends — inside your briefings and the chat interface.",
  },
  {
    q: "What AI model powers Crutan?",
    a: "Crutan uses Claude (Anthropic) for report generation and chat responses. Specifically, Claude Sonnet for deep analysis and high-quality writing, and Claude Haiku for fast routing and onboarding conversations.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* Header */}
      <section className="pt-28 pb-16 sm:pt-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-action" />
            <span className="text-xs font-semibold uppercase tracking-widest text-action">
              Resources
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-bark mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Everything you need to
            <br />
            understand your analytics
          </h1>
          <p className="text-lg text-weathered max-w-xl">
            Guides, references, and tools for founders and operators who want
            to get more from GA4 and Search Console.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-weathered mb-6">
            Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-parchment-surface border border-sand/60 rounded-2xl p-5 card-lift hover:border-action/30 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-action/10 flex items-center justify-center">
                    <guide.icon className="w-4 h-4 text-action" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-action">
                    {guide.category}
                  </span>
                  <span className="ml-auto text-xs text-weathered">
                    {guide.readTime}
                  </span>
                </div>
                <h3
                  className="font-semibold text-bark mb-2 group-hover:text-action transition-colors"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {guide.title}
                </h3>
                <p className="text-xs text-weathered leading-relaxed flex-1 mb-3">
                  {guide.description}
                </p>
                <span className="text-xs font-semibold text-action flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External links */}
      <section className="pb-20 pt-8 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-weathered mb-8">
            External References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {externalLinks.map((section) => (
              <div key={section.category}>
                <h3 className="text-sm font-semibold text-bark mb-4">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group p-3 bg-parchment border border-sand/40 rounded-xl hover:border-action/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-action mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-bark group-hover:text-action transition-colors">
                          {link.title}
                        </div>
                        <div className="text-xs text-weathered mt-0.5">
                          {link.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Common questions about Crutan
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-parchment-surface border border-sand/60 rounded-xl p-5"
              >
                <h3 className="font-semibold text-bark text-sm mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing#faq"
              className="text-sm text-action font-medium flex items-center gap-1 justify-center hover:gap-2 transition-all"
            >
              See all FAQs on the pricing page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image src="/crutan-symbol-white.svg" alt="" width={40} height={36} className="mx-auto mb-5 opacity-80" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-parchment mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Skip the manual work.
            <br />
            Let Crutan do it.
          </h2>
          <p className="text-parchment/60 mb-8 leading-relaxed">
            Everything in these guides — the daily check, the conversion
            analysis, the Search Console review — Crutan does automatically.
            Every morning. In your inbox.
          </p>
          <a
            href="https://app.crutan.com/login"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-parchment text-bark font-bold rounded-xl hover:bg-parchment-surface transition-colors"
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
