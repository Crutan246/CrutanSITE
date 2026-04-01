import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Brain,
  BarChart3,
  Mail,
  MessageSquare,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  AlertTriangle,
  Search,
  Eye,
  LineChart,
  Sparkles,
  X,
  Check,
  Minus,
  HelpCircle,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Analytics: How AI Is Replacing Dashboards in 2026",
  description:
    "AI analytics tools read your Google Analytics data and deliver plain-English insights automatically. Learn how AI-powered analytics works, why it's replacing dashboards, and how to get started for free.",
  keywords: [
    "AI analytics",
    "AI analytics tool",
    "automated analytics",
    "AI google analytics",
    "AI website analytics",
    "AI-powered analytics",
    "automated GA4 reports",
    "AI analytics platform",
    "google analytics AI",
    "automated website analytics",
  ],
  openGraph: {
    title: "AI Analytics: How AI Is Replacing Dashboards in 2026",
    description:
      "AI analytics tools read your Google Analytics data and deliver plain-English insights automatically. Learn how AI-powered analytics works, why it's replacing dashboards, and how to get started for free.",
    url: "https://crutan.com/ai-analytics",
    siteName: "Crutan",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://crutan.com/ai-analytics",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://crutan.com" },
  { name: "AI Analytics", url: "https://crutan.com/ai-analytics" },
];

const faqItems = [
  {
    question: "Is AI analytics accurate?",
    answer:
      "Yes. AI analytics tools like Crutan read your data directly from the Google Analytics 4 API — the same source of truth as your GA4 dashboard. The AI doesn't guess or estimate. It queries your actual metrics, then uses large language models to interpret the data and generate plain-English insights. The numbers are always your real numbers. The interpretation layer adds context, comparisons, and recommendations that would take a human analyst much longer to produce manually.",
  },
  {
    question: "Does AI analytics replace Google Analytics?",
    answer:
      "No — AI analytics works on top of Google Analytics, not instead of it. You still need GA4 installed on your website to collect data. What AI analytics replaces is the need to log into GA4 every day, build reports, interpret charts, and figure out what the numbers mean. Think of it as an analyst layer that sits between your raw data and your decision-making. Your GA4 property continues collecting data as usual; AI analytics reads that data and translates it into actionable insights.",
  },
  {
    question: "How much does AI analytics cost?",
    answer:
      "Pricing varies by tool. Crutan is currently free during early access — no credit card required, full access to all features including daily AI briefings, live chat with your data, and weekly rollup reports. After early access, Crutan will offer simple, transparent pricing designed for small and mid-size businesses. Enterprise AI analytics platforms can cost $500–$5,000+/month, but tools like Crutan are built to make AI analytics accessible to businesses of all sizes.",
  },
  {
    question: "Is my data safe with AI analytics tools?",
    answer:
      "With Crutan, yes. Crutan requests read-only access to your Google Analytics and Search Console — it cannot modify, delete, or write any data. Your analytics data is stored securely in a database with row-level security, meaning every query is scoped to your account only. Your data is never shared with other users or used to train AI models. You can disconnect your Google account and delete your data at any time from Settings.",
  },
  {
    question: "What data does AI analytics need access to?",
    answer:
      "AI analytics tools typically need read-only access to your Google Analytics 4 property. Crutan specifically reads sessions, users, page views, bounce rate, session duration, conversions, traffic sources, top pages, events, and custom dimensions. If you also connect Google Search Console, Crutan can surface keyword rankings, organic impressions, click-through rates, and SEO performance trends. All access is read-only — nothing is ever modified.",
  },
  {
    question: "Can AI analytics detect problems I wouldn't notice manually?",
    answer:
      "Absolutely. This is one of the biggest advantages of AI analytics. The AI reviews every metric across every dimension every single day — something no human can realistically do. It catches anomalies like a sudden drop in mobile conversion rate, a traffic source that quietly disappeared, or a landing page whose bounce rate spiked 40% overnight. These are patterns that typically go unnoticed for days or weeks when you're checking dashboards manually.",
  },
  {
    question: "How is AI analytics different from Looker Studio or Data Studio?",
    answer:
      "Looker Studio (formerly Data Studio) is a dashboard builder — it visualizes your data in charts and tables, but you still have to build the dashboards, interpret the visuals, and draw your own conclusions. AI analytics eliminates that entire workflow. Instead of building a report and staring at charts, you receive a written briefing that tells you what happened, why it matters, and what to do about it. Looker Studio shows you data. AI analytics tells you what the data means.",
  },
  {
    question:
      "Do I need technical skills to use AI analytics?",
    answer:
      "No. If you can sign in with Google and answer a few questions about your business, you can use AI analytics. Crutan's setup takes under 5 minutes — connect your Google Analytics account, complete a short AI-guided onboarding conversation about your business context, choose your delivery preferences, and you're done. No SQL, no report building, no data science background required. The entire point of AI analytics is to make data accessible to non-technical business owners.",
  },
];

const comparisonRows = [
  {
    feature: "Setup time",
    crutan: "5 minutes",
    ga4: "Ongoing learning curve",
    looker: "Hours to days",
    agency: "1–2 weeks onboarding",
  },
  {
    feature: "Daily insights",
    crutan: "Automatic, every morning",
    ga4: "Manual — you have to log in",
    looker: "Manual — dashboards don't explain",
    agency: "Weekly or monthly cadence",
  },
  {
    feature: "Plain-English analysis",
    crutan: true,
    ga4: false,
    looker: false,
    agency: true,
  },
  {
    feature: "Anomaly detection",
    crutan: "Automatic, daily",
    ga4: "Manual investigation",
    looker: "Requires custom setup",
    agency: "Depends on analyst",
  },
  {
    feature: "Ask follow-up questions",
    crutan: "Live chat, real-time",
    ga4: "Build a new report",
    looker: "Build a new dashboard",
    agency: "Email, wait 24–48 hours",
  },
  {
    feature: "Action items included",
    crutan: true,
    ga4: false,
    looker: false,
    agency: "Sometimes",
  },
  {
    feature: "Cost",
    crutan: "Free (early access)",
    ga4: "Free",
    looker: "Free (limited)",
    agency: "$1,000–$5,000+/month",
  },
  {
    feature: "Technical skill required",
    crutan: "None",
    ga4: "Intermediate to advanced",
    looker: "Intermediate",
    agency: "None",
  },
];

function ComparisonCell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1 text-sage font-semibold text-sm">
        <Check className="w-4 h-4" /> Yes
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center gap-1 text-ember font-semibold text-sm">
        <X className="w-4 h-4" /> No
      </span>
    );
  return <span className="text-sm text-loam">{value}</span>;
}

export default function AIAnalyticsPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />

      {/* ── BREADCRUMB ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-weathered">
          <Link href="/" className="hover:text-action transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-bark font-medium">AI Analytics</span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-28 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 40% 30%, rgba(61,90,115,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-action/10 border border-action/20 text-action text-xs font-semibold mb-8">
            <Brain className="w-3.5 h-3.5" />
            The Complete Guide to AI Analytics
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bark leading-[1.08] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            AI Analytics: How Artificial
            <br className="hidden sm:block" />
            Intelligence Is Replacing
            <br className="hidden sm:block" />
            <span className="text-action">the Dashboard</span>
          </h1>

          <p className="text-lg sm:text-xl text-weathered max-w-3xl mb-6 leading-relaxed">
            Business owners spend an average of{" "}
            <strong className="text-bark">4.5 hours per week</strong> trying to
            understand their website data. Most leave GA4 more confused than when
            they opened it. AI analytics changes that — by reading your data for
            you and delivering insights in plain English.
          </p>

          <p className="text-base text-loam max-w-3xl mb-10 leading-relaxed">
            This guide explains what AI analytics is, how the technology works,
            why it&apos;s replacing traditional dashboards for thousands of
            businesses, and how to get started with an{" "}
            <Link href="/signup" className="text-action font-semibold hover:underline">
              AI analytics tool
            </Link>{" "}
            that connects directly to your Google Analytics 4 account.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-4 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all shadow-md hover:shadow-lg text-base"
            >
              Try AI analytics free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#what-is-ai-analytics"
              className="inline-flex items-center gap-2 px-7 py-4 text-bark font-medium rounded-xl border border-sand hover:border-action/30 hover:bg-parchment-surface transition-all text-base"
            >
              Read the guide
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="py-10 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-5">
            In this guide
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: "What Is AI Analytics?", href: "#what-is-ai-analytics" },
              { label: "Why Traditional Analytics Tools Are Failing", href: "#why-traditional-analytics-fail" },
              { label: "How AI Analytics Works", href: "#how-ai-analytics-works" },
              { label: "5 Ways AI Analytics Changes Your Business", href: "#five-ways" },
              { label: "AI Analytics vs Traditional Dashboards", href: "#comparison" },
              { label: "Getting Started with AI Analytics", href: "#getting-started" },
              { label: "Frequently Asked Questions", href: "#faq" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm text-action hover:text-action-light transition-colors py-1"
              >
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: WHAT IS AI ANALYTICS? ── */}
      <section id="what-is-ai-analytics" className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron/20 bg-saffron/5 text-saffron text-xs font-semibold mb-6">
            <Sparkles className="w-3 h-3" />
            Defining the category
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-8"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            What Is AI Analytics?
          </h2>

          <div className="prose-like space-y-5 text-loam leading-relaxed">
            <p className="text-lg">
              <strong className="text-bark">AI analytics</strong> is a category
              of software that uses artificial intelligence — specifically large
              language models (LLMs) — to automatically read, interpret, and
              explain your website analytics data. Instead of you logging into a
              dashboard and trying to make sense of charts and tables, an AI
              analytics tool does the interpretation for you and delivers
              insights in plain, natural language.
            </p>

            <p>
              Traditional analytics tools like Google Analytics 4 are{" "}
              <em>data collection and reporting platforms</em>. They&apos;re
              extraordinarily powerful at gathering data. But they were designed
              for data analysts — people with the training and time to build
              custom reports, segment audiences, set up explorations, and
              interpret multi-dimensional data. For the 90% of business owners
              who aren&apos;t trained data analysts, GA4 creates more questions
              than it answers.
            </p>

            <p>
              AI analytics closes that gap. It takes the raw data that Google
              Analytics collects and translates it into something a
              non-technical business owner can act on:{" "}
              <em>
                &ldquo;Your organic traffic dropped 22% this week because three
                of your top-ranking pages lost position after a Google algorithm
                update. Here&apos;s what to do about it.&rdquo;
              </em>
            </p>

            <p>
              <Link
                href="https://crutan.com"
                className="text-action font-semibold hover:underline"
              >
                Crutan
              </Link>{" "}
              is an AI analytics tool built specifically for this purpose. It
              connects to your GA4 property and Google Search Console, learns
              about your business during a short onboarding conversation, and
              then delivers a personalized{" "}
              <Link href="/blog" className="text-action font-semibold hover:underline">
                daily AI briefing
              </Link>{" "}
              to your inbox every morning — covering traffic, conversions, top
              pages, traffic sources, anomalies, and specific action items.
            </p>

            <div className="bg-parchment-surface border border-sand/60 rounded-2xl p-6 my-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-action mb-3">
                AI analytics in one sentence
              </p>
              <p
                className="text-xl text-bark font-semibold leading-snug"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                &ldquo;An AI reads your Google Analytics data every day and
                tells you what happened, what it means, and what to do about it
                — so you never have to open a dashboard again.&rdquo;
              </p>
            </div>

            <p>
              The shift from dashboard-based analytics to AI-powered analytics
              mirrors what happened when spreadsheets gave way to visual
              dashboards in the 2010s. Each generation makes data more accessible
              to a wider audience. AI analytics is the next step: making data
              accessible to <em>everyone</em>, regardless of technical skill.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: WHY TRADITIONAL ANALYTICS FAIL ── */}
      <section
        id="why-traditional-analytics-fail"
        className="py-20 sm:py-24 bg-parchment-surface border-y border-sand/40"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Why Traditional Analytics Tools Are Failing Business Owners
          </h2>

          <p className="text-lg text-weathered mb-12 max-w-3xl leading-relaxed">
            Google Analytics 4 is arguably the most powerful free analytics
            platform ever built. It&apos;s also arguably the least accessible.
            Here&apos;s why the people who need analytics insights the most are
            the least likely to get them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: AlertTriangle,
                title: "The GA4 complexity wall",
                body: "When Google sunsetted Universal Analytics in 2023, it replaced it with a platform designed around an event-based data model, explorations, and BigQuery exports. Powerful for enterprise data teams. Impenetrable for the average business owner. The learning curve didn't flatten — it got steeper.",
              },
              {
                icon: Eye,
                title: "Dashboard fatigue is real",
                body: "The average business owner has access to 5–8 analytics dashboards across GA4, Search Console, email platforms, ad managers, and CRMs. Each one shows a different slice of truth. The result isn't clarity — it's decision paralysis. You end up checking everything and understanding nothing.",
              },
              {
                icon: Clock,
                title: "Data without context is noise",
                body: "GA4 can tell you that your bounce rate is 54%. It can't tell you whether that's good or bad for your industry, whether it changed because of a specific traffic source, or what you should do about it. Raw metrics without interpretation are just numbers on a screen.",
              },
              {
                icon: TrendingUp,
                title: "Important changes go unnoticed",
                body: "A conversion rate drop that started three days ago. A referral source that quietly stopped sending traffic. A mobile page that's loading twice as slow as desktop. These changes don't announce themselves in dashboards — they hide in secondary reports until someone goes looking.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-parchment border border-sand/60 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-ember/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-ember" />
                </div>
                <h3
                  className="font-semibold text-bark mb-2 text-base leading-snug"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-loam leading-relaxed">
            <p>
              None of this is a knock on Google Analytics itself — GA4 is an
              exceptional data collection engine. The problem is that data
              collection and data{" "}
              <em>interpretation</em> are fundamentally different jobs.
              GA4 was built for the first. AI analytics was built for the second.
            </p>

            <p>
              For{" "}
              <Link
                href="/for/founders"
                className="text-action font-semibold hover:underline"
              >
                solo founders
              </Link>{" "}
              and small teams, the math simply doesn&apos;t work. You can spend
              45 minutes every morning wrangling GA4 reports, or you can spend 2
              minutes reading an AI-written briefing that surfaces exactly what
              you need to know. The trend toward{" "}
              <strong className="text-bark">automated analytics</strong> isn&apos;t about
              replacing GA4 — it&apos;s about making the data that GA4 collects
              actually usable for the people running the business.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: HOW AI ANALYTICS WORKS ── */}
      <section id="how-ai-analytics-works" className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-action/20 bg-action/5 text-action text-xs font-semibold mb-6">
            <Brain className="w-3 h-3" />
            Under the hood
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            How AI Analytics Works
          </h2>

          <p className="text-lg text-weathered mb-12 max-w-3xl leading-relaxed">
            AI analytics isn&apos;t magic — it&apos;s a well-orchestrated
            pipeline that combines API data access, structured prompting, and
            large language models. Here&apos;s what happens behind the scenes.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                step: "01",
                title: "Data extraction via API",
                body: "The AI analytics platform connects to your Google Analytics 4 property through the GA4 Data API. Every day (or in real time, depending on the feature), it pulls your core metrics: sessions, users, page views, bounce rate, session duration, conversions, traffic sources, top pages, events, and more. This is the same data you'd see in GA4 — pulled programmatically instead of you navigating to it manually.",
                icon: BarChart3,
              },
              {
                step: "02",
                title: "Structured data preparation",
                body: "Raw API responses are structured into a format the AI can reason about efficiently. This includes period-over-period comparisons (yesterday vs. the 7-day average, this week vs. last week), anomaly flagging using statistical thresholds, and enrichment with your business context — the industry, revenue model, audience, and KPIs you provided during onboarding. This context is what separates generic AI output from genuinely useful business analysis.",
                icon: LineChart,
              },
              {
                step: "03",
                title: "LLM interpretation and generation",
                body: "The structured data package is sent to a large language model — Crutan uses Claude by Anthropic — with carefully engineered prompts that instruct the AI to write like a senior analyst. The LLM doesn't hallucinate metrics (the numbers are injected directly from the API). Its job is interpretation: explaining what the data means, identifying patterns and anomalies, comparing against historical baselines, and recommending specific actions based on what it finds.",
                icon: Brain,
              },
              {
                step: "04",
                title: "Delivery and interaction",
                body: "The generated briefing is formatted and delivered to you via email, SMS, or both — on the schedule you chose. But AI analytics doesn't stop at one-way reports. With tools like Crutan, you can ask follow-up questions in a live chat that queries your GA4 and Search Console data in real time, returning answers grounded in your actual numbers.",
                icon: Mail,
              },
            ].map(({ step, title, body, icon: Icon }) => (
              <div key={step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-bark text-parchment flex items-center justify-center font-bold text-sm shadow-md">
                    <span style={{ fontFamily: "var(--font-fraunces)" }}>
                      {step}
                    </span>
                  </div>
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold text-bark mb-2"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-weathered leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-parchment-surface border border-sand/60 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-3">
              Key distinction
            </p>
            <p className="text-base text-loam leading-relaxed">
              The AI in AI analytics doesn&apos;t <em>generate</em> data — it{" "}
              <em>interprets</em> data. Your numbers always come directly from
              the Google Analytics API. The language model&apos;s role is
              translation: turning structured metrics into natural language
              explanations, surfacing what&apos;s important, and recommending
              what to do next. This is why AI analytics is accurate — the data
              source is your actual GA4 property, not a prediction model.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: 5 WAYS AI ANALYTICS CHANGES YOUR BUSINESS ── */}
      <section
        id="five-ways"
        className="py-20 sm:py-24 bg-parchment-surface border-y border-sand/40"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            5 Ways AI Analytics Changes How You Run Your Business
          </h2>

          <p className="text-lg text-weathered mb-14 max-w-3xl leading-relaxed">
            AI-powered analytics isn&apos;t just a more convenient way to read
            your data — it fundamentally changes the relationship between
            business owners and their numbers.
          </p>

          <div className="space-y-12">
            {/* Way 1 */}
            <div className="bg-parchment border border-sand/60 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-action" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-action mb-1">01</p>
                  <h3
                    className="text-xl font-semibold text-bark"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Daily briefings replace morning dashboard rituals
                  </h3>
                </div>
              </div>
              <p className="text-sm text-weathered leading-relaxed mb-4">
                Instead of opening GA4, clicking through reports, building date
                comparisons, and trying to remember what last week&apos;s
                numbers were, you open your inbox. A plain-English summary of
                everything that happened on your site yesterday is already there
                — with context about what the numbers mean for your specific
                business and 1–3 action items you can take today.
              </p>
              <p className="text-sm text-weathered leading-relaxed">
                For{" "}
                <Link
                  href="/for/ecommerce"
                  className="text-action font-semibold hover:underline"
                >
                  ecommerce operators
                </Link>
                , this means knowing exactly what drove yesterday&apos;s revenue
                before you start your day. For{" "}
                <Link
                  href="/for/founders"
                  className="text-action font-semibold hover:underline"
                >
                  founders
                </Link>
                , it means understanding your traffic trends without becoming a
                data analyst. The briefing becomes your daily pulse check — fast,
                clear, and actionable.
              </p>
            </div>

            {/* Way 2 */}
            <div className="bg-parchment border border-sand/60 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-saffron mb-1">02</p>
                  <h3
                    className="text-xl font-semibold text-bark"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Anomaly detection catches problems before they compound
                  </h3>
                </div>
              </div>
              <p className="text-sm text-weathered leading-relaxed mb-4">
                Every day, the AI compares your current metrics against your
                historical baselines — your 7-day averages, your week-over-week
                trends, your typical performance by traffic source. When
                something deviates significantly, it flags it and explains why it
                matters.
              </p>
              <p className="text-sm text-weathered leading-relaxed">
                A 40% spike in mobile bounce rate. A referral source that
                dropped to zero. A landing page whose conversion rate fell off a
                cliff. These are the kinds of problems that cost businesses
                thousands of dollars when they go unnoticed for a week. AI
                analytics catches them on day one.
              </p>
            </div>

            {/* Way 3 */}
            <div className="bg-parchment border border-sand/60 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-sage mb-1">03</p>
                  <h3
                    className="text-xl font-semibold text-bark"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Natural language querying replaces report-building
                  </h3>
                </div>
              </div>
              <p className="text-sm text-weathered leading-relaxed mb-4">
                You shouldn&apos;t need to learn GA4&apos;s report builder to
                answer a simple question like &ldquo;Which blog post drove the
                most signups last month?&rdquo; With AI analytics, you type your
                question in plain English and get a plain-English answer —
                grounded in your actual data.
              </p>
              <p className="text-sm text-weathered leading-relaxed">
                Crutan&apos;s live chat queries the GA4 Data API and Google
                Search Console API in real time when you ask a question. It
                doesn&apos;t guess or use cached data. It runs the query,
                interprets the results, and writes back with specific numbers,
                comparisons, and recommendations. Think of it as having an
                analyst on call 24/7 who can answer any question about your
                website data instantly.
              </p>
            </div>

            {/* Way 4 */}
            <div className="bg-parchment border border-sand/60 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-action" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-action mb-1">04</p>
                  <h3
                    className="text-xl font-semibold text-bark"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Automated reporting saves hours every week
                  </h3>
                </div>
              </div>
              <p className="text-sm text-weathered leading-relaxed mb-4">
                Building analytics reports is tedious, repetitive work.
                Choosing date ranges, selecting metrics, adding comparisons,
                exporting to slides — this is work that{" "}
                <Link
                  href="/for/founders"
                  className="text-action font-semibold hover:underline"
                >
                  founders
                </Link>{" "}
                do themselves at small companies and that{" "}
                <Link
                  href="/for/agencies"
                  className="text-action font-semibold hover:underline"
                >
                  agencies
                </Link>{" "}
                charge premium rates for at larger ones.
              </p>
              <p className="text-sm text-weathered leading-relaxed">
                AI analytics automates the entire cycle. Daily briefings, weekly
                rollups, and ad hoc queries all happen without you building a
                single report. Crutan delivers a comprehensive{" "}
                <Link href="/blog" className="text-action font-semibold hover:underline">
                  weekly rollup
                </Link>{" "}
                every Friday covering trends, channel performance, top content,
                and week-over-week comparisons — the kind of report that used to
                take your team an hour to produce.
              </p>
            </div>

            {/* Way 5 */}
            <div className="bg-parchment border border-sand/60 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-saffron mb-1">05</p>
                  <h3
                    className="text-xl font-semibold text-bark"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Predictive insights help you act before trends solidify
                  </h3>
                </div>
              </div>
              <p className="text-sm text-weathered leading-relaxed mb-4">
                When AI analytics looks at your data every day with full
                historical context, it starts to identify emerging patterns
                before they become obvious trends. A traffic source that&apos;s
                been growing 8% week over week for three weeks. A page whose
                conversion rate is steadily declining. A keyword that&apos;s
                about to break into page 1.
              </p>
              <p className="text-sm text-weathered leading-relaxed">
                These early signals are the difference between reacting to
                changes and anticipating them. Traditional dashboards show you
                what already happened. AI analytics tells you what&apos;s likely
                to happen next — and what you can do about it now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: COMPARISON TABLE ── */}
      <section id="comparison" className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-5"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              AI Analytics vs Traditional Dashboards:
              <br className="hidden sm:block" />
              A Side-by-Side Comparison
            </h2>
            <p className="text-lg text-weathered max-w-2xl mx-auto leading-relaxed">
              How does an AI analytics tool like Crutan stack up against the
              alternatives? Here&apos;s a direct comparison across the metrics
              that matter most to business owners.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-sand/60 bg-parchment">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-sand/60 bg-parchment-surface">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-weathered">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-action">
                    Crutan (AI Analytics)
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-weathered">
                    GA4 Manual
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-weathered">
                    Looker Studio
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-weathered">
                    Agency Reporting
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i < comparisonRows.length - 1
                        ? "border-b border-sand/40"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-bark">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 bg-action/[0.03]">
                      <ComparisonCell value={row.crutan} />
                    </td>
                    <td className="px-6 py-4">
                      <ComparisonCell value={row.ga4} />
                    </td>
                    <td className="px-6 py-4">
                      <ComparisonCell value={row.looker} />
                    </td>
                    <td className="px-6 py-4">
                      <ComparisonCell value={row.agency} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="bg-parchment border border-sand/60 rounded-2xl p-5"
              >
                <p
                  className="text-base font-semibold text-bark mb-4"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {row.feature}
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Crutan (AI Analytics)", value: row.crutan, highlight: true },
                    { label: "GA4 Manual", value: row.ga4, highlight: false },
                    { label: "Looker Studio", value: row.looker, highlight: false },
                    { label: "Agency", value: row.agency, highlight: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                        item.highlight
                          ? "bg-action/[0.05] border border-action/10"
                          : ""
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold ${
                          item.highlight ? "text-action" : "text-weathered"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ComparisonCell value={item.value} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-5 text-loam leading-relaxed max-w-4xl">
            <p>
              The comparison makes the trade-offs clear. GA4 and Looker Studio
              are free and powerful, but they require significant time investment
              and technical skill. Agencies provide human interpretation but at
              enterprise-level pricing and weekly cadence.{" "}
              <strong className="text-bark">AI analytics tools like Crutan</strong>{" "}
              combine the best of both worlds — automated interpretation with the
              depth of human-level analysis, delivered daily, at a fraction of
              the cost.
            </p>

            <p>
              For a deeper look at how Crutan&apos;s pricing compares, visit our{" "}
              <Link
                href="/pricing"
                className="text-action font-semibold hover:underline"
              >
                pricing page
              </Link>
              . Spoiler: it&apos;s free during early access.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: GETTING STARTED ── */}
      <section
        id="getting-started"
        className="py-20 sm:py-24 bg-parchment-surface border-y border-sand/40"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sage/20 bg-sage/5 text-sage text-xs font-semibold mb-6">
            <Zap className="w-3 h-3" />
            Get started in under 5 minutes
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Getting Started with AI Analytics
          </h2>

          <p className="text-lg text-weathered mb-6 max-w-3xl leading-relaxed">
            Ready to stop wrestling with dashboards?{" "}
            <Link
              href="https://crutan.com"
              className="text-action font-semibold hover:underline"
            >
              Crutan
            </Link>{" "}
            makes it simple to start getting AI-powered insights from your
            Google Analytics data. The entire setup takes less than 5 minutes,
            and your first briefing arrives the next morning.
          </p>

          <p className="text-base text-loam mb-14 max-w-3xl leading-relaxed">
            Crutan is purpose-built for{" "}
            <Link
              href="/for/founders"
              className="text-action font-semibold hover:underline"
            >
              founders
            </Link>
            ,{" "}
            <Link
              href="/for/ecommerce"
              className="text-action font-semibold hover:underline"
            >
              ecommerce operators
            </Link>
            , and small teams who want the insight of a senior analyst without
            the cost or complexity. Here&apos;s how it works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-14">
            <div
              className="hidden md:block absolute top-10 left-[calc(33%+40px)] right-[calc(33%+40px)] h-px"
              style={{
                background:
                  "linear-gradient(to right, var(--action), var(--saffron))",
                opacity: 0.3,
              }}
            />

            {[
              {
                number: 1,
                title: "Connect your Google Analytics",
                body: "Sign in with Google and grant Crutan read-only access to your GA4 property. Optionally connect Google Search Console for SEO insights. Takes 60 seconds — no engineering required.",
              },
              {
                number: 2,
                title: "Tell Crutan about your business",
                body: "A short AI-guided onboarding conversation captures your industry, revenue model, target audience, and key metrics. This context is what makes your briefings feel like they were written by an analyst who knows your business.",
              },
              {
                number: 3,
                title: "Wake up to your first briefing",
                body: "Choose your delivery time and format — email, SMS, or both. Tomorrow morning, your first AI analytics briefing arrives. Traffic, conversions, top pages, anomalies, and specific action items — all in plain English.",
              },
            ].map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-bark text-parchment text-xl font-bold mb-5 shadow-lg">
                  <span style={{ fontFamily: "var(--font-fraunces)" }}>
                    {step.number}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold text-bark mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-parchment border border-sand/60 rounded-2xl p-8">
            <div className="space-y-5 text-loam leading-relaxed">
              <p>
                After your first briefing, you&apos;ll also have access to
                Crutan&apos;s{" "}
                <strong className="text-bark">live chat interface</strong> — where
                you can ask any follow-up question about your analytics data and
                get an instant, data-grounded answer. Questions like:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "\"What were my top converting pages last week?\"",
                  "\"How did organic search change month over month?\"",
                  "\"Which traffic source has the highest bounce rate?\"",
                  "\"What should I focus on this week?\"",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-action flex-shrink-0 mt-0.5" />
                    <span className="italic text-weathered">{q}</span>
                  </li>
                ))}
              </ul>
              <p>
                Every Friday, you&apos;ll also receive a weekly rollup covering
                the full 7 days — trends, wins, concerns, and prioritized
                recommendations for the week ahead. It&apos;s the analytics
                equivalent of a senior analyst&apos;s Monday morning brief —
                except it arrives automatically.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-action text-parchment font-bold rounded-xl hover:bg-action-light transition-all shadow-md hover:shadow-lg text-base"
            >
              Start free — your first briefing tomorrow
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-weathered mt-4">
              No credit card · Read-only access · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO AI ANALYTICS IS FOR ── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Who Benefits Most from AI Analytics?
          </h2>
          <p className="text-lg text-weathered mb-12 max-w-3xl leading-relaxed">
            AI analytics is designed for people who need to understand their data
            but don&apos;t have the time, tools, or training to dig through
            dashboards manually. If any of these sound like you, AI analytics is
            worth trying.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Solo founders & small teams",
                body: "You're wearing every hat. Analytics is one more job you didn't sign up for. AI analytics gives you the insight of a full-time data analyst in a 2-minute morning email.",
                link: { href: "/for/founders", label: "Crutan for Founders" },
                icon: Zap,
              },
              {
                title: "Ecommerce operators",
                body: "Revenue, conversion rate, cart abandonment, channel attribution — you need to know what drove yesterday's numbers before you open the store. AI analytics tells you, automatically.",
                link: { href: "/for/ecommerce", label: "Crutan for Ecommerce" },
                icon: TrendingUp,
              },
              {
                title: "Marketing teams & agencies",
                body: "Stop spending Monday mornings building analytics decks. AI analytics generates the report, explains the data, and highlights what changed — so you can jump straight into strategy.",
                link: { href: "/for/agencies", label: "Crutan for Agencies" },
                icon: BarChart3,
              },
              {
                title: "Non-technical business owners",
                body: "You don't need to know what a 'segment' is or how to build an 'exploration' in GA4. AI analytics speaks your language — plain English, focused on business outcomes.",
                link: { href: "/google-analytics-for-small-business", label: "GA4 for Small Business" },
                icon: Shield,
              },
            ].map(({ title, body, link, icon: Icon }) => (
              <div
                key={title}
                className="bg-parchment-surface border border-sand/60 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-action" />
                </div>
                <h3
                  className="font-semibold text-bark mb-2 text-base"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed mb-3">
                  {body}
                </p>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm text-action font-semibold hover:gap-2 transition-all"
                >
                  {link.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section
        id="faq"
        className="py-20 sm:py-24 bg-parchment-surface border-y border-sand/40"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-action/20 bg-action/5 text-action text-xs font-semibold mb-6">
              <HelpCircle className="w-3 h-3" />
              Common questions
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Frequently Asked Questions
              <br />
              About AI Analytics
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="bg-parchment border border-sand/60 rounded-2xl p-6"
              >
                <h3
                  className="text-base font-semibold text-bark mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {item.question}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
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
            Stop staring at dashboards.
            <br />
            Start getting answers.
          </h2>
          <p className="text-lg text-parchment/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Connect your GA4 in under 5 minutes. Tomorrow morning, your first AI
            analytics briefing arrives — written specifically for your business,
            in plain English, with action items you can use immediately.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-parchment text-bark font-bold rounded-xl hover:bg-parchment-surface transition-all duration-200 shadow-xl text-base"
          >
            Get early access — it&apos;s free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-5 text-xs text-parchment/40">
            Free during early access · No credit card · Read-only access ·
            Setup in 5 minutes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
