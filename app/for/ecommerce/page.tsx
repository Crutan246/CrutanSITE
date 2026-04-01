import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  DollarSign,
  BarChart3,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crutan for Ecommerce — Daily AI Briefings for Online Store Owners",
  description:
    "Stop guessing why your revenue changed. Crutan connects to your GA4 and delivers a daily plain-English briefing — what drove sales, which channels convert, and what to do before you open the store.",
  keywords: [
    "ecommerce analytics",
    "shopify analytics alternative",
    "daily revenue report",
    "ecommerce GA4 reports",
    "online store analytics",
    "automated ecommerce reporting",
    "AI analytics for ecommerce",
  ],
  alternates: { canonical: "https://crutan.com/for/ecommerce" },
  openGraph: {
    title: "Crutan for Ecommerce — Stop Guessing Why Revenue Changed",
    description: "Know what drove yesterday's sales every morning — revenue by channel, conversion rate, and what to do next.",
    url: "https://crutan.com/for/ecommerce",
  },
};

const pains = [
  {
    icon: TrendingDown,
    title: "Revenue went down. You have no idea why.",
    body: "Was it traffic volume? Conversion rate? A specific product? Your best traffic source drying up? GA4 has the answer — buried somewhere in a report you'd need 30 minutes to build.",
  },
  {
    icon: ShoppingCart,
    title: "You're juggling ads, email, SEO, and social — with no single view",
    body: "Every channel tells you a different story. Your email platform says the campaign was a success. GA4 shows the conversion rate was half your normal. Who's right? And which channel actually drove yesterday's revenue?",
  },
  {
    icon: AlertTriangle,
    title: "Something breaks every week and you find out too late",
    body: "A checkout button that stopped working on mobile. A coupon code that was stacking incorrectly. An ad sending traffic to a 404. Small problems compound fast when you're not watching the right signals daily.",
  },
];

const features = [
  {
    title: "Know exactly what drove yesterday's revenue",
    body: "Every morning briefing attributes your revenue to the channels, campaigns, and products that drove it — with plain-English context. Not just \"email drove 34% of revenue\" but \"your restock email had a 2.3x higher conversion rate than your normal broadcast.\"",
    icon: DollarSign,
  },
  {
    title: "Conversion rate changes explained, not just reported",
    body: "When your conversion rate moves, Crutan tells you why: which device type changed, which traffic source shifted, whether your best-selling product sold out. The difference between data and understanding.",
    icon: TrendingUp,
  },
  {
    title: "Ask your sales data anything",
    body: "\"Which product had the highest add-to-cart rate last week?\" \"How did my paid social ROAS compare to last month?\" \"What's my conversion rate from mobile organic vs desktop organic?\" Instant answers from your actual GA4 data.",
    icon: MessageSquare,
  },
  {
    title: "Weekly rollup every Friday before the weekend",
    body: "A full 7-day scorecard: revenue by channel, top products, conversion funnel health, what worked and what didn't, and specific recommendations for next week's strategy.",
    icon: BarChart3,
  },
];

const checklist = [
  "Daily briefing: revenue, conversion rate, top channels, what changed",
  "Automatic anomaly alerts — know when conversion rate or traffic spikes or crashes",
  "Channel attribution: email, paid, organic, direct — which actually drove sales",
  "Google Search Console integration — organic traffic and keyword trends",
  "Friday weekly rollup with product and channel scorecard",
  "Free during early access — no credit card required",
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(196,130,45,0.2) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron/10 border border-saffron/25 text-saffron text-xs font-semibold mb-8">
            <ShoppingCart className="w-3 h-3" />
            Built for ecommerce store owners
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bark leading-[1.05] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Stop guessing why
            <br />
            your revenue
            <br />
            <span className="text-saffron">went up or down.</span>
          </h1>

          <p className="text-xl text-weathered max-w-2xl mb-10 leading-relaxed">
            Your store generates data 24 hours a day. Crutan turns that data
            into a plain-English morning briefing — explaining what drove
            yesterday&apos;s sales, which channels are converting, where
            customers are dropping off, and exactly what to focus on before you
            open the store.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-4 bg-saffron text-parchment font-semibold rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg text-base"
            >
              Get early access free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-4 text-bark font-medium rounded-xl border border-sand hover:border-saffron/40 hover:bg-parchment-surface transition-all text-base"
            >
              See how it works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-weathered">
            Free during early access · No credit card · Read-only GA4 access
          </p>
        </div>
      </section>

      {/* ── PAIN SECTION ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-10 text-center">
            The daily struggle every store owner knows
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-parchment border border-sand/60 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-saffron" />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-3">
              What lands in your inbox at 7 AM
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Yesterday&apos;s store performance. Explained.
            </h2>
          </div>

          <div className="bg-white border border-sand rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-saffron px-6 py-4 flex items-center gap-3">
              <Image src="/crutan-symbol-white.svg" alt="Crutan" width={20} height={18} />
              <div>
                <p className="text-parchment font-semibold text-sm">Store Briefing — Crutan</p>
                <p className="text-parchment/70 text-xs">Your store · Friday 7:02 AM</p>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-2">
                  Yesterday&apos;s summary
                </p>
                <p className="text-bark text-sm leading-relaxed">
                  <strong>Strong Thursday.</strong> Revenue was $4,280 — 23% above your 7-day average.
                  The difference: your email campaign hit at 9 AM and drove 34% of the day&apos;s
                  revenue with a 3.8% conversion rate (vs. your 2.1% site average). One flag:
                  mobile checkout completion dropped to 61% — your desktop rate is 84%. Worth
                  investigating before the weekend.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Revenue", value: "$4,280", change: "+23%", up: true },
                  { label: "Orders", value: "67", change: "+19%", up: true },
                  { label: "Conv. rate", value: "2.1%", change: "-0.3pp", up: false },
                  { label: "Avg. order", value: "$63.90", change: "+3%", up: true },
                ].map((m) => (
                  <div key={m.label} className="bg-parchment-surface rounded-xl p-3 text-center">
                    <p className="text-base font-bold text-bark">{m.value}</p>
                    <p className="text-[10px] text-weathered mb-0.5">{m.label}</p>
                    <p className={`text-xs font-semibold ${m.up ? "text-sage" : "text-ember"}`}>
                      {m.change}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-2">
                  Revenue by channel
                </p>
                <div className="space-y-2">
                  {[
                    { channel: "Email campaign", rev: "$1,453", pct: 34, color: "bg-saffron" },
                    { channel: "Organic search", rev: "$1,112", pct: 26, color: "bg-action" },
                    { channel: "Direct", rev: "$856", pct: 20, color: "bg-sage" },
                    { channel: "Paid social", rev: "$428", pct: 10, color: "bg-loam" },
                  ].map((ch) => (
                    <div key={ch.channel} className="flex items-center gap-3">
                      <p className="text-xs text-weathered w-28 flex-shrink-0">{ch.channel}</p>
                      <div className="flex-1 h-1.5 bg-sand/40 rounded-full overflow-hidden">
                        <div className={`h-full ${ch.color} rounded-full`} style={{ width: `${ch.pct}%` }} />
                      </div>
                      <p className="text-xs font-semibold text-bark w-14 text-right">{ch.rev}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-sand/60 pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-2">
                  Before you open today
                </p>
                <p className="text-sm text-loam">
                  → Mobile checkout at 61% completion is your biggest lever this weekend. Check
                  the checkout flow on iPhone — a form input issue or slow-loading payment step
                  would explain this drop. Fixing it could add $300–500/day in recovered revenue.
                </p>
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
              Analytics that pay for themselves
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-parchment border border-sand/60 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-bark mb-2 text-base"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-weathered leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST + CTA ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-10"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Open every morning knowing
            <br />
            exactly where you stand
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-saffron text-parchment font-bold rounded-xl hover:opacity-90 transition-all shadow-md text-base"
          >
            Get early access free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-weathered mt-4">
            No credit card · Read-only access · First briefing tomorrow morning
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
            Your store is open 24/7.
            <br />
            Your briefing arrives at 7 AM.
          </h2>
          <p className="text-parchment/60 mb-8 leading-relaxed">
            Connect GA4 in under 5 minutes. No technical setup required.
            Your first briefing arrives tomorrow morning with everything
            that happened in your store overnight.
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
