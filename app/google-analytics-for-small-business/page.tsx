import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Users,
  MousePointerClick,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Mail,
  MessageSquare,
  ChevronRight,
  BookOpen,
  Target,
  Eye,
  ShoppingCart,
  Search,
  Zap,
  HelpCircle,
  Shield,
  Globe,
  ListChecks,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Google Analytics for Small Business: The Complete 2026 Guide",
  description:
    "Google Analytics doesn't have to be confusing. Learn exactly which GA4 reports matter for your small business, what the numbers mean, and how to get daily insights without touching a dashboard.",
  keywords: [
    "google analytics for small business",
    "GA4 for beginners",
    "simple google analytics",
    "google analytics simplified",
    "GA4 for non-technical",
    "how to use google analytics",
    "google analytics small business guide",
    "GA4 reports for small business",
    "google analytics tips",
    "google analytics 4 tutorial",
  ],
  openGraph: {
    title: "Google Analytics for Small Business: The Complete 2026 Guide",
    description:
      "Google Analytics doesn't have to be confusing. Learn exactly which GA4 reports matter for your small business, what the numbers mean, and how to get daily insights without touching a dashboard.",
    url: "https://crutan.com/google-analytics-for-small-business",
    siteName: "Crutan",
    type: "article",
    images: [
      {
        url: "https://crutan.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Google Analytics for Small Business — The Complete 2026 Guide by Crutan",
      },
    ],
  },
  alternates: {
    canonical: "https://crutan.com/google-analytics-for-small-business",
  },
};

const faqItems = [
  {
    question: "Is Google Analytics free for small business?",
    answer:
      "Yes. Google Analytics 4 (GA4) is completely free for small businesses. There is a paid tier called Google Analytics 360 designed for large enterprises processing billions of events, but the free version has no traffic caps and includes every report and feature most small businesses will ever need.",
  },
  {
    question: "Do I need Google Analytics for my small business website?",
    answer:
      "If you have a website and want to grow your business online, yes. Without analytics, you're guessing which pages work, where visitors come from, and whether your marketing is paying off. Google Analytics gives you the data — the challenge is making sense of it, which is why tools like Crutan exist to translate GA4 data into plain-English briefings.",
  },
  {
    question:
      "What's the difference between Universal Analytics and Google Analytics 4?",
    answer:
      "Universal Analytics (UA) was the previous version of Google Analytics that Google fully sunset in July 2024. GA4 is the current and only version. The biggest differences: GA4 is event-based instead of session-based, it tracks across web and apps, and it has a completely redesigned interface. If you were used to UA, GA4 will feel very different — the reports are structured differently and many familiar metrics have changed names or definitions.",
  },
  {
    question: "How do I install Google Analytics on my website?",
    answer:
      "Create a free GA4 account at analytics.google.com, set up a property for your website, and add the tracking code (called a 'Google tag') to every page. Most website platforms — Shopify, WordPress, Squarespace, Wix — have built-in integrations that let you paste your Measurement ID (starts with G-) into a settings field. If you use a custom site, add the gtag.js snippet to your HTML head tag.",
  },
  {
    question: "What should I track in Google Analytics as a small business?",
    answer:
      "Focus on five things: (1) how many people visit your site (sessions and users), (2) where they come from (traffic sources), (3) which pages they visit most (top pages), (4) whether they take the actions you want (conversions like form submissions, purchases, or sign-ups), and (5) how those numbers trend week over week. Everything else is noise until you've mastered these basics.",
  },
  {
    question: "Why is Google Analytics 4 so confusing?",
    answer:
      "GA4 was designed for data analysts and enterprise teams, not small business owners. The interface uses technical jargon (dimensions, metrics, segments, explorations), buries the most useful reports behind multiple clicks, and presents data in ways that assume you already understand web analytics concepts. Google has improved the UI since launch, but it's still far from intuitive for non-technical users.",
  },
  {
    question: "Can I use Google Analytics without being technical?",
    answer:
      "You can learn the basics, but there's a steep learning curve. The alternative is to use a tool that reads your analytics for you. Crutan, for example, connects to your GA4 account and sends you a daily email briefing that explains your traffic, conversions, and trends in plain English — no dashboards or data skills required.",
  },
  {
    question: "How often should I check Google Analytics?",
    answer:
      "For most small businesses, a daily glance at high-level numbers and a weekly deep dive is the right cadence. Daily checks help you catch problems early (like a broken page or a traffic drop). Weekly reviews reveal trends and help you plan. The trap is spending too much time in the tool without acting on what you find — which is why automated daily briefings can be more effective than manual dashboard checks.",
  },
  {
    question:
      "What are the most important Google Analytics metrics for small business?",
    answer:
      "The five most important metrics are: Sessions (total visits), Users (unique visitors), Conversion Rate (percentage of visitors who take a desired action), Traffic Source breakdown (organic search, direct, social, referral, paid), and Engagement Rate (the percentage of sessions that lasted more than 10 seconds, had a conversion, or viewed multiple pages). These five give you the full picture without drowning in data.",
  },
  {
    question: "Is there a simpler alternative to Google Analytics?",
    answer:
      "There are simpler analytics tools like Plausible and Fathom that offer cleaner dashboards with less data. However, they also give you less insight. A better approach for many small businesses is to keep GA4 as your data source (it's the most powerful free tool available) but use an AI layer like Crutan to interpret the data and deliver insights you can actually act on.",
  },
];

const tocSections = [
  { id: "why-ga-feels-impossible", label: "Why GA Feels Impossible" },
  { id: "what-ga4-tracks", label: "What GA4 Actually Tracks" },
  { id: "5-reports-to-check", label: "5 Reports to Check Weekly" },
  { id: "why-businesses-give-up", label: "Why Businesses Give Up" },
  { id: "easier-way", label: "The Easier Way: AI Analytics" },
  { id: "how-crutan-works", label: "How Crutan Works" },
  { id: "sample-briefing", label: "What a Briefing Looks Like" },
  { id: "faq", label: "FAQ" },
];

export default function GoogleAnalyticsForSmallBusinessPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://crutan.com" },
          {
            name: "Google Analytics for Small Business",
            url: "https://crutan.com/google-analytics-for-small-business",
          },
        ])}
      />
      <JsonLd data={faqJsonLd(faqItems)} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div
          className="absolute top-20 left-1/4 w-72 h-72 opacity-10 pointer-events-none"
          style={{ background: "var(--action)", filter: "blur(90px)" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 opacity-[0.08] pointer-events-none"
          style={{ background: "var(--saffron)", filter: "blur(110px)" }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-weathered">
              <li>
                <Link href="/" className="hover:text-action transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-action transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="text-bark font-medium">
                Google Analytics for Small Business
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-action/20 bg-action/5 text-action text-xs font-semibold mb-6">
            <BookOpen className="w-3 h-3" />
            <span>Complete Guide · 15 min read</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bark leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Google Analytics for
            <br />
            Small Business:{" "}
            <span className="text-action">The Complete 2026 Guide</span>
          </h1>

          <p className="text-lg sm:text-xl text-weathered max-w-3xl leading-relaxed mb-8">
            Google Analytics is the most powerful free analytics tool on the
            planet — and also one of the most confusing. This guide cuts through
            the jargon and shows you exactly which reports matter, what the
            numbers mean, and how to get actionable insights from GA4 without
            a data science degree.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-weathered">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-action" />
              <span>Updated March 2026</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-sand" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-action" />
              <span>Written for non-technical business owners</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ────────────────────────────────────────────── */}
      <section className="py-10 border-y border-sand/40 bg-parchment-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <ListChecks className="w-4 h-4 text-action" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-bark">
              In This Guide
            </h2>
          </div>
          <nav aria-label="Table of contents">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tocSections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-parchment border border-transparent hover:border-sand/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-action w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-loam group-hover:text-bark font-medium transition-colors">
                      {section.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ──────────────────────────────────────────────── */}
      <article className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Section 1: Why GA Feels Impossible ────────────────────────── */}
          <section id="why-ga-feels-impossible" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-saffron" />
              <span className="text-xs font-bold uppercase tracking-widest text-saffron">
                Section 1
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Why Google Analytics Feels Impossible for Small Business Owners
            </h2>

            <div className="prose-crutan space-y-5 text-loam leading-relaxed">
              <p className="text-lg">
                Let&apos;s be honest: if you&apos;ve ever logged into Google
                Analytics 4, stared at the screen for ten minutes, and then
                closed the tab — you&apos;re not alone. You&apos;re the
                majority.
              </p>
              <p>
                GA4 launched in 2020 as Google&apos;s replacement for Universal
                Analytics, and it was a ground-up rebuild. The interface
                changed. The terminology changed. The reports changed. Even
                experienced marketers found themselves lost. For small business
                owners who just want to know &ldquo;are more people visiting my
                website this month?&rdquo; — it felt like Google had built a
                cockpit where a steering wheel would do.
              </p>
              <p>
                The core problem isn&apos;t that you&apos;re not smart enough.
                It&apos;s that GA4 was designed for a different user: the data
                analyst at a Fortune 500 company who builds custom
                &ldquo;explorations&rdquo; and thinks in terms of
                &ldquo;event parameters&rdquo; and &ldquo;user segments.&rdquo;
              </p>

              <div className="bg-parchment-surface border border-sand/60 rounded-2xl p-6 my-8">
                <h3
                  className="text-lg font-semibold text-bark mb-4"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  The small business GA4 experience, in a nutshell:
                </h3>
                <ul className="space-y-3">
                  {[
                    "You log in and see a dashboard of numbers with no context for whether they're good or bad",
                    "You click \"Reports\" and find 30+ report types you didn't know existed",
                    "You try to find how many people visited your site yesterday — and it takes four clicks",
                    "You see terms like \"engagement rate,\" \"events per session,\" and \"user stickiness\" with no explanation",
                    "You wonder if your tracking is even set up correctly in the first place",
                    "You close the tab and tell yourself you'll figure it out next week",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 text-saffron font-bold text-xs">
                        {i + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                This cycle repeats until most business owners simply stop
                checking. A{" "}
                <Link
                  href="/blog"
                  className="text-action underline underline-offset-2 hover:text-action-light transition-colors"
                >
                  recent survey of small business founders
                </Link>{" "}
                found that while 87% have Google Analytics installed, fewer than
                20% check it regularly — and fewer than 5% feel confident
                they&apos;re using it correctly.
              </p>
              <p>
                The result? You&apos;re collecting data 24/7 but never actually
                using it. Your Google Analytics is a security camera you never
                watch. And every day that data sits unused is a day you might be
                missing a broken page, a traffic spike you could capitalize on,
                or a marketing channel that&apos;s quietly outperforming the
                rest.
              </p>
              <p>
                This guide exists to change that. We&apos;re going to demystify
                GA4 in plain English, show you the five reports that actually
                matter for a small business, and then introduce you to a way to
                get those insights without ever opening the dashboard yourself.
              </p>
            </div>
          </section>

          {/* ── Section 2: What GA4 Actually Tracks ──────────────────────── */}
          <section id="what-ga4-tracks" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-action" />
              <span className="text-xs font-bold uppercase tracking-widest text-action">
                Section 2
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              What Google Analytics 4 Actually Tracks (and What the Numbers
              Mean)
            </h2>

            <div className="space-y-5 text-loam leading-relaxed">
              <p className="text-lg">
                Before we get to the reports, let&apos;s build a shared
                vocabulary. GA4 tracks everything as &ldquo;events&rdquo; —
                every page view, every click, every scroll is an event. Here are
                the key metrics translated into English:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Users,
                  metric: "Users",
                  plain: "Unique people who visited",
                  detail:
                    "If one person visits your site 3 times in a week, that's 1 user but 3 sessions. This tells you the size of your audience.",
                },
                {
                  icon: Eye,
                  metric: "Sessions",
                  plain: "Total visits",
                  detail:
                    "Each time someone comes to your site and browses around, that's one session. A session ends after 30 minutes of inactivity.",
                },
                {
                  icon: MousePointerClick,
                  metric: "Engagement Rate",
                  plain: "% of visitors who actually did something",
                  detail:
                    "GA4 counts a session as \"engaged\" if it lasted 10+ seconds, had 2+ page views, or triggered a conversion. A 60% engagement rate means 6 in 10 visitors actually interacted with your site.",
                },
                {
                  icon: TrendingUp,
                  metric: "Conversions",
                  plain: "Visitors who took the action you want",
                  detail:
                    "A conversion is any event you mark as important — a form submission, a purchase, a sign-up. GA4 lets you define up to 30 conversion events.",
                },
                {
                  icon: Globe,
                  metric: "Traffic Sources",
                  plain: "Where your visitors came from",
                  detail:
                    "Organic Search (Google), Direct (typed your URL), Social (Instagram, LinkedIn), Referral (links from other sites), Paid Search (Google Ads), and Email.",
                },
                {
                  icon: Target,
                  metric: "Pages & Screens",
                  plain: "Which pages get the most traffic",
                  detail:
                    "This shows your top-performing content. If your /pricing page gets the most views, that tells you people are considering buying.",
                },
              ].map((item) => (
                <div
                  key={item.metric}
                  className="bg-parchment-surface border border-sand/60 rounded-2xl p-5 hover:border-action/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4 text-action" />
                    <h3 className="text-sm font-bold text-bark">
                      {item.metric}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-action mb-2">
                    = &ldquo;{item.plain}&rdquo;
                  </p>
                  <p className="text-sm text-weathered leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-loam leading-relaxed">
              <p>
                That&apos;s it. Those six metrics are 90% of what you need to
                understand as a small business owner. Everything else in GA4 —
                the explorations, the funnel analyses, the cohort reports — is
                powerful but optional. Master these six first.
              </p>
              <p>
                The problem, of course, is that even these basics are spread
                across multiple screens in GA4, and none of them come with the
                context you need. Seeing &ldquo;2,847 sessions&rdquo; means
                nothing until you know whether that&apos;s up or down from last
                week, and whether it matters for{" "}
                <em>your</em> business. That context is what&apos;s missing from
                the GA4 interface — and what we&apos;ll address later in this
                guide.
              </p>
            </div>
          </section>

          {/* ── Section 3: 5 Reports to Check ────────────────────────────── */}
          <section id="5-reports-to-check" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <ListChecks className="w-4 h-4 text-sage" />
              <span className="text-xs font-bold uppercase tracking-widest text-sage">
                Section 3
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              The 5 GA4 Reports Every Small Business Owner Should Check Weekly
            </h2>

            <div className="space-y-5 text-loam leading-relaxed mb-8">
              <p className="text-lg">
                You don&apos;t need to explore all of GA4. These five reports
                cover the questions that actually drive business decisions. Spend
                15 minutes a week on these and you&apos;ll know more about your
                website performance than most marketing teams.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  icon: TrendingUp,
                  title: "Traffic Overview (Acquisition → Overview)",
                  why: "This tells you how many people are visiting your site and where they come from. It's the 30,000-foot view.",
                  look: "Compare this week to last week. Is total traffic growing? Which sources are driving growth? If organic search is climbing, your SEO is working. If direct is growing, your brand awareness is increasing. If everything is flat or declining, you need to investigate.",
                  tip: "Set your date range to \"Last 7 days\" and compare to \"Previous period\" for an instant week-over-week comparison.",
                },
                {
                  number: "02",
                  icon: Eye,
                  title: "Top Pages (Engagement → Pages and Screens)",
                  why: "This shows which pages on your site get the most views. It reveals what content resonates and where people spend time.",
                  look: "Your homepage will usually be #1. After that, which pages appear? If your /pricing page is in the top 5, that's a buying signal. If a blog post is climbing, consider promoting it on social. If an important page (like /contact) isn't showing up, you might have a navigation problem.",
                  tip: "Sort by \"Average engagement time per session\" to find pages where people actually read vs. pages they bounce from immediately.",
                },
                {
                  number: "03",
                  icon: Search,
                  title:
                    "Search Console Report (if linked) or Acquisition → Traffic Acquisition",
                  why: "This reveals which keywords bring people to your site from Google. It's the foundation of your SEO strategy.",
                  look: "Are you ranking for the keywords you want? Are impressions growing (meaning Google is showing your site to more people)? Are clicks growing with impressions? If impressions are up but clicks are flat, your titles and descriptions may need work.",
                  tip: "Link your Google Search Console to GA4 (it's free). This unlocks keyword data inside Analytics so you don't need to check two tools.",
                },
                {
                  number: "04",
                  icon: ShoppingCart,
                  title: "Conversions (Engagement → Conversions)",
                  why: "This is the money report. It shows whether visitors are actually doing what you want them to do — buying, signing up, filling out forms.",
                  look: "Track your conversion rate over time. If traffic is growing but conversions are flat, something is wrong with your site experience. If conversions are growing faster than traffic, your site is getting more effective. Celebrate that.",
                  tip: "If you haven't set up conversion events yet, that's your #1 priority. Without them, GA4 can't tell you whether your site is actually working.",
                },
                {
                  number: "05",
                  icon: Globe,
                  title:
                    "Geographic & Device Breakdown (User Attributes → Demographics Overview)",
                  why: "Knowing where your visitors are and what devices they use helps you optimize. If 70% of your traffic is mobile but your site isn't mobile-friendly, you're losing visitors.",
                  look: "Check the mobile vs. desktop split. If mobile engagement rate is much lower than desktop, your mobile experience needs work. Look at top countries/cities — are you attracting the right geographic audience?",
                  tip: "For local businesses, check whether your traffic is actually coming from your service area. If you're a Denver bakery getting most traffic from Bangalore, your SEO targeting needs adjustment.",
                },
              ].map((report) => (
                <div
                  key={report.number}
                  className="bg-parchment-surface border border-sand/60 rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-bark text-parchment text-sm font-bold flex-shrink-0">
                      <span style={{ fontFamily: "var(--font-fraunces)" }}>
                        {report.number}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold text-bark"
                        style={{ fontFamily: "var(--font-fraunces)" }}
                      >
                        {report.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-loam leading-relaxed ml-0 sm:ml-14">
                    <p>
                      <strong className="text-bark">Why it matters: </strong>
                      {report.why}
                    </p>
                    <p>
                      <strong className="text-bark">What to look for: </strong>
                      {report.look}
                    </p>
                    <div className="flex items-start gap-2 bg-action/5 border border-action/10 rounded-xl px-4 py-3 mt-3">
                      <Sparkles className="w-4 h-4 text-action flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-action">
                        <strong>Pro tip:</strong> {report.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-5 text-loam leading-relaxed">
              <p>
                If you check these five reports every Monday morning, you&apos;ll
                have a clear picture of your website&apos;s performance. But
                let&apos;s be realistic — most small business owners
                won&apos;t sustain this habit. Here&apos;s why.
              </p>
            </div>
          </section>

          {/* ── Section 4: Why Businesses Give Up ────────────────────────── */}
          <section id="why-businesses-give-up" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-ember" />
              <span className="text-xs font-bold uppercase tracking-widest text-ember">
                Section 4
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Why Most Small Businesses Give Up on Google Analytics
            </h2>

            <div className="space-y-5 text-loam leading-relaxed">
              <p className="text-lg">
                Even after reading a guide like this one, the reality is that
                most small business owners won&apos;t build a sustainable
                analytics habit. It&apos;s not a willpower problem — it&apos;s a
                design problem. GA4 has structural issues that make it hostile to
                casual users.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  {
                    title: "Time cost",
                    description:
                      "Even a \"quick\" check takes 15–20 minutes by the time you log in, navigate to the right reports, set date ranges, and try to make sense of what you're seeing. For a founder juggling product, sales, and operations, that's time you don't have.",
                  },
                  {
                    title: "No interpretation",
                    description:
                      "GA4 shows you data. It doesn't tell you what the data means. Seeing that your bounce rate went from 42% to 47% is useless without knowing whether that's normal seasonal variation or a sign that something broke.",
                  },
                  {
                    title: "No recommendations",
                    description:
                      "Even when you understand the numbers, GA4 never tells you what to do about them. You're left making the leap from data to action on your own — which requires analytics experience most business owners don't have.",
                  },
                  {
                    title: "Constant UI changes",
                    description:
                      "Google updates the GA4 interface regularly. Reports move, features get renamed, and tutorials from six months ago show screenshots that no longer match what you see. It's a moving target.",
                  },
                  {
                    title: "Alert fatigue",
                    description:
                      "GA4's built-in \"Insights\" feature surfaces anomalies, but they're often irrelevant or confusing. After a few false alarms, most people learn to ignore them entirely.",
                  },
                  {
                    title: "No business context",
                    description:
                      "GA4 doesn't know your business model, your goals, or your industry. It treats an e-commerce store and a local plumber's website exactly the same, even though they need completely different metrics.",
                  },
                ].map((pain) => (
                  <div
                    key={pain.title}
                    className="bg-parchment-surface border border-sand/60 rounded-2xl p-5"
                  >
                    <h3
                      className="text-base font-semibold text-bark mb-2"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {pain.title}
                    </h3>
                    <p className="text-sm text-weathered leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                The result is predictable: you install GA4, check it a few
                times, feel overwhelmed, and stop. Meanwhile, the data keeps
                collecting — a growing archive of insights you never see.
              </p>
              <p>
                This is the gap that matters. Small businesses don&apos;t need
                simpler analytics tools (though those exist). They don&apos;t
                need analytics training courses (though those exist too). What
                they need is someone — or some<em>thing</em> — to read the data
                for them and just tell them what&apos;s going on.
              </p>
              <p>
                That&apos;s exactly what AI makes possible in 2026.
              </p>
            </div>
          </section>

          {/* ── Section 5: The Easier Way ────────────────────────────────── */}
          <section id="easier-way" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-saffron" />
              <span className="text-xs font-bold uppercase tracking-widest text-saffron">
                Section 5
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              The Easier Way: Let AI Read Your Analytics For You
            </h2>

            <div className="space-y-5 text-loam leading-relaxed">
              <p className="text-lg">
                Here&apos;s the thing about the five reports we covered above:
                they&apos;re valuable, but they require you to do the reading,
                the comparing, the interpreting, and the deciding. Every single
                week. That&apos;s a habit most people won&apos;t sustain — not
                because they&apos;re lazy, but because they have a business to
                run.
              </p>
              <p>
                What if your analytics could just <em>tell you</em> what&apos;s
                happening? Not a chart. Not a dashboard. Just a few paragraphs
                in plain English, delivered to your inbox every morning, that
                tell you:
              </p>

              <ul className="space-y-3 my-6">
                {[
                  "How your site performed yesterday, compared to your rolling average",
                  "Where your traffic came from and whether the mix is changing",
                  "Which pages are gaining or losing momentum",
                  "Whether your conversion rate is holding, climbing, or slipping",
                  "Specific actions you should take today based on the data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-1" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                That&apos;s the idea behind{" "}
                <Link
                  href="/"
                  className="text-action font-semibold underline underline-offset-2 hover:text-action-light transition-colors"
                >
                  Crutan
                </Link>
                . It connects to your Google Analytics 4 account (read-only —
                it never modifies anything), learns about your business, and
                then sends you a daily AI-generated briefing that reads like it
                was written by an analyst who knows your industry, your goals,
                and your numbers.
              </p>
              <p>
                No more logging in. No more trying to remember which report
                lives where. No more staring at graphs you don&apos;t
                understand. You read a two-minute email. You know exactly
                what&apos;s happening. You get on with your day.
              </p>
              <p>
                Crutan is especially built for{" "}
                <Link
                  href="/for/founders"
                  className="text-action underline underline-offset-2 hover:text-action-light transition-colors"
                >
                  startup founders
                </Link>
                ,{" "}
                <Link
                  href="/for/ecommerce"
                  className="text-action underline underline-offset-2 hover:text-action-light transition-colors"
                >
                  e-commerce operators
                </Link>
                , and anyone who knows their website analytics matter but
                doesn&apos;t have time to become a GA4 expert.
              </p>
            </div>
          </section>

          {/* ── Section 6: How Crutan Works ──────────────────────────────── */}
          <section id="how-crutan-works" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-action" />
              <span className="text-xs font-bold uppercase tracking-widest text-action">
                Section 6
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              How Crutan Works: From GA4 to Your Inbox in 3 Steps
            </h2>

            <div className="space-y-5 text-loam leading-relaxed mb-10">
              <p className="text-lg">
                Setup takes less than five minutes. No technical skills
                required. No code to install. If you can log into Google, you
                can set up Crutan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  step: 1,
                  icon: Shield,
                  title: "Connect Google Analytics",
                  description:
                    "Sign in with your Google account. Crutan requests read-only access to your GA4 property — it can see your data but never change it. Takes about 60 seconds.",
                  accent: "action",
                  bg: "bg-action/5",
                  border: "border-action/15",
                },
                {
                  step: 2,
                  icon: MessageSquare,
                  title: "Tell Us About Your Business",
                  description:
                    "A quick AI-guided conversation captures your industry, business model, audience, and goals. This context is what makes your briefings genuinely useful instead of generic.",
                  accent: "saffron",
                  bg: "bg-saffron/5",
                  border: "border-saffron/15",
                },
                {
                  step: 3,
                  icon: Mail,
                  title: "Get Your First Briefing",
                  description:
                    "Choose email, SMS, or both. Pick your delivery time. Tomorrow morning, your first personalized analytics briefing arrives — and every morning after that.",
                  accent: "sage",
                  bg: "bg-sage/5",
                  border: "border-sage/15",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`${item.bg} border ${item.border} rounded-2xl p-6 text-center`}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-bark text-parchment text-lg font-bold mb-5 shadow-md"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-lg font-semibold text-bark mb-3"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-weathered leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Start free setup — takes 5 minutes
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-3 text-xs text-weathered">
                No credit card required · Read-only access · Cancel anytime
              </p>
            </div>
          </section>

          {/* ── Section 7: Sample Briefing ───────────────────────────────── */}
          <section id="sample-briefing" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-action" />
              <span className="text-xs font-bold uppercase tracking-widest text-action">
                Section 7
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              What a Crutan Briefing Actually Looks Like
            </h2>

            <div className="space-y-5 text-loam leading-relaxed mb-10">
              <p className="text-lg">
                This isn&apos;t a template with your numbers plugged in.
                Every briefing is written from scratch by AI that understands
                your business context. Here&apos;s a real example of what lands
                in your inbox:
              </p>
            </div>

            {/* Briefing mockup */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-parchment-surface border border-sand rounded-2xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-sand/60 bg-parchment">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/crutan-symbol-dark-blue.svg"
                      alt="Crutan"
                      width={18}
                      height={16}
                    />
                    <span className="text-xs font-semibold text-bark">
                      Crutan Daily Briefing
                    </span>
                  </div>
                  <span className="text-xs text-weathered">
                    Monday, 8:02 AM · downtown-bakery.com
                  </span>
                </div>
                <div className="px-5 py-5 space-y-5">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-widest text-action">
                        TL;DR
                      </span>
                    </div>
                    <p className="text-sm text-bark leading-relaxed">
                      <strong>Great weekend.</strong> Your Saturday catering page
                      went semi-viral on Instagram — someone with 14K followers
                      shared your custom cake gallery. That post drove 423
                      sessions on Saturday alone (vs. your typical Saturday
                      average of 85). You got 6 new catering inquiry form
                      submissions. Conversion rate for the weekend was 4.1%,
                      well above your 2.3% average.
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[
                      {
                        label: "Sessions",
                        value: "847",
                        change: "+312%",
                        up: true,
                      },
                      {
                        label: "New Users",
                        value: "691",
                        change: "+287%",
                        up: true,
                      },
                      {
                        label: "Form Fills",
                        value: "11",
                        change: "+450%",
                        up: true,
                      },
                      {
                        label: "Bounce Rate",
                        value: "29%",
                        change: "-18%",
                        up: false,
                      },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="bg-parchment rounded-lg p-2.5 text-center"
                      >
                        <div className="text-base font-bold text-bark">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-weathered mb-0.5">
                          {m.label}
                        </div>
                        <div
                          className={`text-[10px] font-semibold ${m.up ? "text-sage" : "text-ember"}`}
                        >
                          {m.change} vs avg
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-action mb-2">
                      What This Means
                    </div>
                    <p className="text-sm text-loam leading-relaxed">
                      The Instagram referral traffic is high-quality — these
                      visitors are spending 3x longer on your site than average
                      and viewing 4.2 pages per session (vs. your normal 1.8).
                      They&apos;re browsing your cake gallery, reading your
                      catering menu, and then submitting inquiry forms. This is
                      your best traffic source right now.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-action mb-2">
                      Action Items
                    </div>
                    <ul className="space-y-1.5">
                      {[
                        "Reach out to the Instagram account that shared your gallery — a partnership or feature could drive consistent referral traffic",
                        "Your catering inquiry form is converting well. Consider adding a second CTA on the cake gallery page to capture visitors who aren't ready for a full inquiry yet (email list signup?)",
                        "Monday traffic is already trending 40% above your baseline. Make sure your site can handle the load and your contact form is working.",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-loam"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="absolute -inset-4 rounded-3xl -z-10 opacity-20 blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse, var(--action) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="mt-10 space-y-5 text-loam leading-relaxed">
              <p>
                Notice what&apos;s different from a raw GA4 dashboard: the
                briefing tells you <em>what happened</em> (the Instagram share),{" "}
                <em>why it matters</em> (high-quality traffic that converts),
                and <em>what to do about it</em> (reach out, add a CTA, monitor
                load). That&apos;s the difference between data and
                intelligence.
              </p>
              <p>
                You can also{" "}
                <Link
                  href="/"
                  className="text-action underline underline-offset-2 hover:text-action-light transition-colors"
                >
                  chat with Crutan in real time
                </Link>{" "}
                to ask follow-up questions: &ldquo;How many of those Instagram
                visitors were from my city?&rdquo; or &ldquo;What&apos;s my best
                converting page this month?&rdquo; It queries your actual GA4
                data and responds in seconds.
              </p>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-action" />
              <span className="text-xs font-bold uppercase tracking-widest text-action">
                FAQ
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-3 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Frequently Asked Questions About Google Analytics for Small
              Business
            </h2>
            <p className="text-weathered mb-10">
              Quick answers to the most common questions we hear from small
              business owners.
            </p>

            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-parchment-surface border border-sand/60 rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <h3 className="text-base font-semibold text-bark text-left leading-snug">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-weathered flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-sm text-loam leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── Internal links ───────────────────────────────────────────── */}
          <section className="mb-20">
            <h2
              className="text-2xl font-bold text-bark mb-6"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Related Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/for/founders",
                  label: "Crutan for Founders",
                  description:
                    "How startup founders use AI analytics to stay on top of growth metrics without hiring an analyst.",
                },
                {
                  href: "/for/ecommerce",
                  label: "Crutan for E-commerce",
                  description:
                    "Daily revenue reports, conversion tracking, and product performance — delivered to your inbox.",
                },
                {
                  href: "/blog",
                  label: "Blog & Guides",
                  description:
                    "More guides on analytics, SEO, and using data to grow your small business.",
                },
                {
                  href: "/pricing",
                  label: "Pricing",
                  description:
                    "Free during early access. See what's included and what's coming in our paid plans.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-parchment-surface border border-sand/60 rounded-2xl p-5 hover:border-action/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-bark group-hover:text-action transition-colors">
                      {link.label}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-weathered group-hover:text-action transition-colors" />
                  </div>
                  <p className="text-xs text-weathered leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-bark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(61,90,115,0.4) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/crutan-symbol-white.svg"
            alt="Crutan"
            width={52}
            height={47}
            className="mx-auto mb-8 opacity-90"
          />
          <h2
            className="text-3xl sm:text-5xl font-bold text-parchment mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Stop fighting with GA4.
            <br />
            Start understanding your data.
          </h2>
          <p className="text-lg text-parchment/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Connect your Google Analytics in under 5 minutes. Tomorrow morning,
            your first plain-English briefing arrives — personalized to your
            business, your industry, and your goals.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-parchment text-bark font-bold rounded-xl hover:bg-parchment-surface transition-all duration-200 shadow-xl text-base"
          >
            Get your first briefing free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-5 text-xs text-parchment/40">
            Sign in with Google · Read-only access · No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
