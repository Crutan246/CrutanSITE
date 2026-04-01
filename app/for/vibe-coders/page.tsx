import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Rocket,
  BarChart3,
  TrendingUp,
  MessageSquare,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crutan for Vibe Coders & Indie Hackers — Know If Your App Is Working",
  description:
    "You shipped your app. Now find out if anyone cares. Crutan connects to your GA4 and delivers a daily briefing — active users, retention, top pages, and whether your growth is compounding.",
  keywords: [
    "indie hacker analytics",
    "app analytics for developers",
    "simple analytics for side projects",
    "GA4 for indie hackers",
    "startup metrics dashboard alternative",
    "vibe coder analytics",
  ],
  alternates: { canonical: "https://crutan.com/for/vibe-coders" },
  openGraph: {
    title: "Crutan for Vibe Coders & Indie Hackers",
    description: "You shipped it. Now find out if it's working — without becoming a dashboard person.",
    url: "https://crutan.com/for/vibe-coders",
  },
};

const pains = [
  {
    icon: Rocket,
    title: "You shipped. But is it actually gaining traction?",
    body: "GA4 shows you numbers. It doesn't tell you if those numbers mean your app is working, or if you're just getting bots and bounces. You need signal, not noise.",
  },
  {
    icon: BarChart3,
    title: "You don't want to become a dashboard person",
    body: "You built this thing to ship code, not to spend your mornings clicking through acquisition reports and building funnels in Explore. There has to be a better way.",
  },
  {
    icon: Code2,
    title: "Every deploy could have broken something — you don't always know",
    body: "Conversion rate dropped 40% on Tuesday. Was it the update you pushed? A GA4 bug? Traffic composition changed? Without daily visibility, you find out too late.",
  },
];

const features = [
  {
    title: "Track whether your launch is actually compounding",
    body: "See active users, new vs returning, and engagement rate trending week over week. Know within 24 hours whether your Product Hunt launch, Reddit post, or SEO content is sticking.",
    icon: TrendingUp,
  },
  {
    title: "Catch regressions before your users notice",
    body: "Your briefing flags when key metrics move outside normal ranges — conversion rate drops, engagement spikes or crashes, mobile performance anomalies. You'll know the morning after a deploy if something broke.",
    icon: Zap,
  },
  {
    title: "Ask your data anything, without a dashboard",
    body: "\"Which landing page is converting best from organic search?\" \"How many users hit the pricing page and didn't sign up?\" Live chat with your actual GA4 data — no SQL, no exports, no pivot tables.",
    icon: MessageSquare,
  },
];

const checklist = [
  "Daily briefing: active users, retention, top pages, conversion rate",
  "Automatic anomaly detection — know when something breaks",
  "Live chat with your GA4 data in plain English",
  "Search Console integration — see which keywords are driving signups",
  "Weekly growth summary every Friday",
  "Free during early access — no credit card",
];

const launchChecklist = [
  { event: "Product Hunt launch", metric: "New users: +847", note: "48-hour spike, 31% retained" },
  { event: "SEO post indexed", metric: "Organic: +234%", note: "Ranking page 1 for 2 queries" },
  { event: "Pricing page updated", metric: "Conversion: +1.8pp", note: "Trial-to-paid up from 12% → 16%" },
];

export default function VibeCodersPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 80% 30%, rgba(81,122,88,0.25) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 border border-sage/25 text-sage text-xs font-semibold mb-8">
            <Code2 className="w-3 h-3" />
            Built for vibe coders &amp; indie hackers
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bark leading-[1.05] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            You shipped it.
            <br />
            Now find out
            <br />
            <span className="text-sage">if it&apos;s working.</span>
          </h1>

          <p className="text-xl text-weathered max-w-2xl mb-10 leading-relaxed">
            You built the thing. Deployed it. Shared it. Now you need to know
            if anyone cares — without becoming a dashboard person. Crutan
            connects to your GA4 and sends you a plain-English briefing every
            morning: active users, retention, what&apos;s converting, and what
            the data says to do next.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-4 bg-sage text-parchment font-semibold rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg text-base"
            >
              Connect GA4 — it&apos;s free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-4 text-bark font-medium rounded-xl border border-sand hover:border-sage/40 hover:bg-parchment-surface transition-all text-base"
            >
              See how it works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-weathered">
            Takes 5 minutes to set up · No dashboards · First briefing tomorrow morning
          </p>
        </div>
      </section>

      {/* ── PAIN SECTION ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-10 text-center">
            The post-launch problem
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-parchment border border-sand/60 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-sage" />
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

      {/* ── LAUNCH TRACKER ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">
              What your briefing looks like after a launch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Know within 24 hours if it&apos;s sticking
            </h2>
          </div>

          <div className="bg-white border border-sand rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-bark px-6 py-4 flex items-center gap-3">
              <Image src="/crutan-symbol-white.svg" alt="Crutan" width={20} height={18} />
              <div>
                <p className="text-parchment font-semibold text-sm">Launch Debrief — Crutan</p>
                <p className="text-parchment/60 text-xs">Your app · Wednesday 7:58 AM</p>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-sm text-loam leading-relaxed">
                <strong className="text-bark">Yesterday was your biggest day.</strong> Your Product Hunt
                post drove 847 new users — but here&apos;s what matters: 31% are still active 48
                hours later. That retention rate is strong for cold PH traffic. Your signup flow
                converted at 6.2%, which is nearly double your baseline.
              </p>

              <div className="space-y-3">
                {launchChecklist.map((item) => (
                  <div key={item.event} className="flex items-start gap-4 p-3 bg-parchment-surface rounded-xl">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-weathered uppercase tracking-wide">{item.event}</p>
                      <p className="text-sm font-bold text-bark">{item.metric}</p>
                    </div>
                    <p className="text-xs text-sage font-medium text-right">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-sand/60 pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-2">
                  What to do today
                </p>
                <p className="text-sm text-loam">
                  → The users who signed up from the Product Hunt demo video have a 2× higher 7-day
                  retention than users from the text post. Consider adding a demo video to your
                  homepage — it&apos;s your best-converting asset right now.
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
              Ship fast. Stay informed. Iterate with confidence.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-parchment border border-sand/60 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-sage" />
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

      {/* ── CHECKLIST + CTA ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-10"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Everything you need.
            <br />
            Nothing you don&apos;t.
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-parchment font-bold rounded-xl hover:opacity-90 transition-all shadow-md text-base"
          >
            Connect GA4 — takes 5 minutes
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-weathered mt-4">
            Free during early access · Read-only access · No credit card
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
            Stop guessing if it&apos;s working.
            <br />
            Know by tomorrow.
          </h2>
          <p className="text-parchment/60 mb-8 leading-relaxed">
            Connect your GA4 in under 5 minutes. Your first briefing arrives
            tomorrow morning with everything you need to know about your app.
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
