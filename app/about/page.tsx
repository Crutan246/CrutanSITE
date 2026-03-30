import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Heart, Target } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const values = [
  {
    icon: Target,
    title: "Clarity over completeness",
    description:
      "We'd rather give you 3 things that matter than 30 things that don't. Every report is edited for signal, not padded for volume.",
  },
  {
    icon: Zap,
    title: "Speed to insight",
    description:
      "Analytics has no value if it takes too long. Your briefing should answer your questions before you've finished your coffee.",
  },
  {
    icon: Shield,
    title: "Read-only, always",
    description:
      "We request the minimum access needed. Read-only access to your GA4 and Search Console. Nothing more. Your data stays yours.",
  },
  {
    icon: Heart,
    title: "Built for operators, not analysts",
    description:
      "Crutan is designed for founders, marketers, and operators — not data scientists. Plain English, actionable, and human.",
  },
];

const stack = [
  { label: "AI", value: "Claude (Anthropic) — Sonnet + Haiku" },
  { label: "Analytics Source", value: "Google Analytics 4 Data API" },
  { label: "SEO Source", value: "Google Search Console API" },
  { label: "Email", value: "Resend" },
  { label: "SMS", value: "Twilio" },
  { label: "Frontend", value: "Next.js, React, Tailwind CSS" },
  { label: "Database & Auth", value: "Supabase (PostgreSQL, Google OAuth)" },
  { label: "Hosting", value: "Vercel" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* Hero */}
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Image
              src="/crutan-logo.svg"
              alt="Crutan"
              width={140}
              height={39}
            />
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold text-bark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Analytics should feel like
            <br />
            <em>clarity, not work.</em>
          </h1>
          <p className="text-xl text-weathered max-w-2xl leading-relaxed mb-8">
            Crutan started from a simple frustration: Google Analytics has
            incredible data, but getting useful answers out of it takes too
            long. Most business owners end up not checking it at all — or
            spending 30 minutes to answer questions that should take 30 seconds.
          </p>
          <p className="text-lg text-weathered max-w-2xl leading-relaxed">
            We built Crutan to close that gap. Connect your GA4 and Search
            Console, tell us about your business, and wake up every morning to
            an AI-written briefing that tells you exactly what happened, what it
            means, and what to do. No dashboards. No data science. Just answers.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-bold text-bark mb-5"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                The problem we&apos;re solving
              </h2>
              <div className="space-y-4 text-weathered leading-relaxed">
                <p>
                  GA4 launched in 2020 and became mandatory in 2023. It&apos;s
                  a more powerful platform than Universal Analytics — but also a
                  more complex one. The data model changed. The reports moved.
                  The interface assumes a certain level of analytical fluency
                  that most business owners don&apos;t have time to develop.
                </p>
                <p>
                  The result: most founders either don&apos;t check their
                  analytics regularly, or they check them reactively — when
                  something feels wrong, rather than as a daily practice. This
                  means they miss the signals that could help them make better
                  decisions: a content piece quietly indexing, a campaign that
                  stopped working, a page with a leaking conversion funnel.
                </p>
                <p>
                  Crutan solves this by doing the analysis for you — every
                  day — and delivering it in a format that takes 2 minutes to
                  read.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  before: "30 minutes clicking through dashboards",
                  after: "2 minutes reading your briefing",
                },
                {
                  before: "Checking analytics when something feels wrong",
                  after: "A daily pulse, every morning",
                },
                {
                  before: "Raw numbers with no context",
                  after: "Comparisons, trends, and what to do",
                },
                {
                  before: "Generic advice from AI tools",
                  after: "Answers grounded in your actual data",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="bg-ember/5 border border-ember/20 rounded-xl p-3 text-sm text-ember leading-snug">
                    {row.before}
                  </div>
                  <div className="bg-sage/5 border border-sage/20 rounded-xl p-3 text-sm text-sage font-medium leading-snug">
                    {row.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-bark mb-10 text-center"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            What we believe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-parchment-surface border border-sand/60 rounded-2xl p-6"
              >
                <div className="w-9 h-9 rounded-xl bg-action/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-action" />
                </div>
                <h3
                  className="font-semibold text-bark mb-2"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-bark mb-8"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Built on best-in-class infrastructure
          </h2>
          <div className="divide-y divide-sand/40">
            {stack.map((row) => (
              <div
                key={row.label}
                className="py-3.5 flex items-center justify-between gap-4"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-weathered">
                  {row.label}
                </span>
                <span className="text-sm text-bark text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-bark mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Privacy and access
          </h2>
          <div className="space-y-4 text-weathered leading-relaxed">
            <p>
              Crutan requests <strong className="text-bark">read-only</strong>{" "}
              access to your Google Analytics and Search Console data. We never
              modify your data, write back to your properties, or change your
              configuration.
            </p>
            <p>
              Your analytics data is never shared with other users or used to
              train AI models. All data is stored in a PostgreSQL database with
              row-level security — every query is scoped to your account only.
            </p>
            <p>
              Email and SMS delivery requires explicit opt-in consent, which is
              recorded with a timestamp. You can disconnect your Google account
              and delete all your data at any time from Settings.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center border-t border-sand/40">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/crutan-symbol-dark-blue.svg"
            alt=""
            width={36}
            height={32}
            className="mx-auto mb-6 opacity-70"
          />
          <h2
            className="text-3xl font-bold text-bark mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Ready to wake up to clarity?
          </h2>
          <p className="text-weathered mb-8">
            Early access is free. No credit card. Setup takes under 5 minutes.
          </p>
          <a
            href="https://app.crutan.com/signup"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-colors shadow-md"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
