import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  TrendingUp,
  Zap,
  ChevronRight,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crutan for Solo Founders — AI Analytics Briefings",
  description:
    "You built the product, run the marketing, handle support, and still need to understand your analytics. Crutan delivers a plain-English briefing to your inbox every morning so you can lead your business without living in dashboards.",
};

const pains = [
  {
    icon: Clock,
    title: "Analytics is another job you didn't sign up for",
    body: "You're already wearing every hat. Spending 45 minutes in GA4 trying to figure out why traffic dropped — only to end up more confused — isn't a good use of your morning.",
  },
  {
    icon: MessageSquare,
    title: "You don't know what to focus on",
    body: "There's always something moving in the data. Sessions, bounce rate, conversion rate, engagement time. Without context, it's impossible to know which changes matter and which are noise.",
  },
  {
    icon: TrendingUp,
    title: "By the time you notice a trend, you've missed the window",
    body: "A post that blew up last Wednesday. A traffic drop that started five days ago. Most founders find out weeks after the fact, when the opportunity or the damage is already done.",
  },
];

const features = [
  {
    title: "A briefing written for your business, not for analysts",
    body: "Crutan learns your industry, your revenue model, your audience, and your KPIs during onboarding. Every briefing is written with that context — not generic analytics jargon, but observations that are actually relevant to you.",
    icon: Mail,
  },
  {
    title: "Ask follow-up questions without opening a dashboard",
    body: "\"Why did organic traffic drop Thursday?\" \"Which blog post is driving the most signups?\" Type your question in plain English and get an answer grounded in your actual GA4 data — instantly.",
    icon: MessageSquare,
  },
  {
    title: "Know what to prioritise before your first coffee",
    body: "Every briefing ends with 1–3 specific action items. Not vague suggestions — actual things to do today based on what the data shows about your business.",
    icon: Zap,
  },
];

const checklist = [
  "Daily AI briefing — what happened, what it means, what to do",
  "Live chat with your GA4 and Search Console data",
  "Weekly Friday rollup with trend analysis and priorities",
  "Email and SMS delivery — your choice of time and format",
  "Completely free during early access",
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-full opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 20%, rgba(61,90,115,0.15) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Persona label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-action/10 border border-action/20 text-action text-xs font-semibold mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-action animate-pulse" />
            Built for solo founders
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bark leading-[1.05] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Know what&apos;s happening
            <br />
            in your business.
            <br />
            <span className="text-action">Every morning.</span>
          </h1>

          <p className="text-xl text-weathered max-w-2xl mb-10 leading-relaxed">
            You built the product, run the marketing, and handle support. You
            shouldn&apos;t have to spend your best hours in GA4 trying to
            understand your own data. Crutan delivers a plain-English briefing
            to your inbox before you start your day — so you can lead your
            business without living in dashboards.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-4 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all shadow-md hover:shadow-lg text-base"
            >
              Get early access free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-4 text-bark font-medium rounded-xl border border-sand hover:border-action/30 hover:bg-parchment-surface transition-all text-base"
            >
              See how it works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-weathered">
            Free during early access · No credit card · Setup in 5 minutes
          </p>
        </div>
      </section>

      {/* ── PAIN SECTION ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-10 text-center">
            Sound familiar?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map(({ icon: Icon, title, body }) => (
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
        </div>
      </section>

      {/* ── SAMPLE BRIEFING ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-action mb-3">
              What lands in your inbox
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Your briefing for Tuesday, 8:04 AM
            </h2>
          </div>

          <div className="bg-white border border-sand rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-action px-6 py-4 flex items-center gap-3">
              <Image src="/crutan-symbol-white.svg" alt="Crutan" width={20} height={18} />
              <div>
                <p className="text-parchment font-semibold text-sm">Daily Briefing — Crutan</p>
                <p className="text-parchment/60 text-xs">Delivered 8:04 AM · crutan.com</p>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-action mb-2">
                  TL;DR
                </p>
                <p className="text-bark text-sm leading-relaxed">
                  <strong>Strong day yesterday.</strong> Your landing page A/B test is paying
                  off — conversion rate hit 4.1%, up from 2.8% last week. Organic traffic from
                  the new SEO post is compounding. One thing to watch: mobile checkout
                  drop-off spiked 18% — worth investigating before the weekend.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Sessions", value: "1,247", change: "+12%", up: true },
                  { label: "Conversions", value: "51", change: "+46%", up: true },
                  { label: "Mobile drop-off", value: "38%", change: "+18%", up: false },
                ].map((m) => (
                  <div key={m.label} className="bg-parchment-surface rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-bark">{m.value}</p>
                    <p className="text-[10px] text-weathered mb-1">{m.label}</p>
                    <p className={`text-xs font-semibold ${m.up ? "text-sage" : "text-ember"}`}>
                      {m.change}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-sand/60 pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-action mb-3">
                  Your action items for today
                </p>
                <div className="space-y-2">
                  {[
                    "Check mobile checkout flow on iPhone — the drop-off spike suggests a UI bug or slow load on 4G.",
                    "The SEO post about onboarding is ranking page 2 for 3 queries. Add internal links from your homepage to push it up.",
                    "Your best converting traffic source this week: email. Send a follow-up to the last campaign segment.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-loam">
                      <span className="text-action font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Built for the pace of a one-person business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-parchment border border-sand/60 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-action" />
                </div>
                <h3
                  className="font-semibold text-bark mb-2 text-base"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-10"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Everything a solo founder actually needs
          </h2>
          <div className="space-y-3 text-left mb-10 max-w-lg mx-auto">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sm text-loam leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
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
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-bark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image src="/crutan-symbol-white.svg" alt="" width={40} height={36} className="mx-auto mb-6 opacity-80" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-parchment mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Wake up smarter about
            <br />
            your business. Tomorrow.
          </h2>
          <p className="text-parchment/60 mb-8 leading-relaxed">
            Connect your Google Analytics 4 in under 5 minutes. Your first
            briefing arrives tomorrow morning, written specifically for your
            business.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-parchment text-bark font-bold rounded-xl hover:bg-parchment-surface transition-colors shadow-xl"
          >
            Get early access free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
