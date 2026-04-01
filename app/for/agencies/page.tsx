import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  FileText,
  MessageSquare,
  TrendingUp,
  BarChart3,
  ChevronRight,
  Star,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crutan for Agencies — Client Analytics Reporting That Writes Itself",
  description:
    "Stop spending hours on client reports they skim in 3 minutes. Crutan delivers AI-powered daily analytics briefings to your clients automatically — they stay informed, your team focuses on strategy.",
  keywords: [
    "agency analytics reporting",
    "automated client reports",
    "white label analytics",
    "agency GA4 reporting tool",
    "client reporting automation",
    "analytics for agencies",
    "digital agency reporting tool",
  ],
  alternates: { canonical: "https://crutan.com/for/agencies" },
  openGraph: {
    title: "Crutan for Agencies — Client Reporting That Writes Itself",
    description: "Give every client daily analytics intelligence. Save hours on reporting. Retain clients longer.",
    url: "https://crutan.com/for/agencies",
  },
};

const pains = [
  {
    icon: Clock,
    title: "Your team spends hours on reports that clients spend minutes on",
    body: "A junior analyst spends 4 hours pulling numbers, building slides, writing summaries. The client glances at it for 3 minutes and asks if the traffic went up. There has to be a better model.",
  },
  {
    icon: FileText,
    title: "Clients can't understand GA4 — and they blame you",
    body: "You give them access to the GA4 property. They log in once, see a confusing dashboard, and immediately email you asking what it means. You become the report-on-demand service.",
  },
  {
    icon: Users,
    title: "Proving your value is harder than doing the work",
    body: "You made smart changes last month. Traffic is up 18%. But the client's question is still \"why are we paying this retainer?\" — because no one told them the story behind the numbers.",
  },
];

const features = [
  {
    title: "Daily briefings your clients will actually read",
    body: "Plain-English AI briefings written for non-technical business owners. Your clients wake up every morning knowing what happened to their website — without a single email to your team. The briefing credits your work, not just the algorithm.",
    icon: FileText,
  },
  {
    title: "You own the context. The AI writes the story.",
    body: "During onboarding, you set the business context for each client: industry, revenue model, KPIs, what matters and what doesn't. Every briefing is written through that lens — so the analysis is relevant, not generic.",
    icon: MessageSquare,
  },
  {
    title: "Live chat for clients who want to go deeper",
    body: "\"How did the campaign we launched compare to last month?\" Your client can ask that question at 9 PM and get an answer from their actual GA4 data — without calling you. You remain the strategic layer; the AI handles the data questions.",
    icon: TrendingUp,
  },
  {
    title: "Weekly reports that save your team hours",
    body: "Every Friday, a comprehensive 7-day rollup lands in your client's inbox — trends, wins, areas of concern, and prioritised recommendations for next week. The kind of report your team used to spend a morning writing.",
    icon: BarChart3,
  },
];

const workflow = [
  {
    step: "01",
    title: "You onboard the client",
    body: "Connect their GA4. Set the business context — industry, goals, KPIs, what to highlight. Takes 10 minutes per client.",
  },
  {
    step: "02",
    title: "Crutan writes the briefings",
    body: "Every morning, your client receives a plain-English briefing about their site. Written for them, not for analysts. Branded or co-branded — your call.",
  },
  {
    step: "03",
    title: "You focus on strategy",
    body: "No more \"what does this number mean\" emails. Your client has context. Your calls are about decisions, not data literacy.",
  },
];

const checklist = [
  "Daily AI briefings for each client — automated, personalised, in plain English",
  "Weekly rollup reports every Friday with strategic recommendations",
  "Live chat with GA4 data — clients can self-serve on data questions",
  "Business context personalisation per client — industry, KPIs, tone",
  "Search Console integration — organic performance for every client",
  "Free during early access — no credit card required",
];

const testimonial = {
  quote: "We used to spend Monday mornings pulling together client reports. Now Crutan handles the daily context and we spend Mondays actually doing strategy. Our clients are more engaged than ever because they understand what's happening day to day.",
  name: "Agency founder, 8 clients",
};

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-full h-full opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(92,74,50,0.2) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-loam/10 border border-loam/20 text-loam text-xs font-semibold mb-8">
            <Users className="w-3 h-3" />
            Built for digital agencies &amp; consultants
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bark leading-[1.05] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Client reporting
            <br />
            that writes itself.
            <br />
            <span className="text-loam">Every morning.</span>
          </h1>

          <p className="text-xl text-weathered max-w-2xl mb-10 leading-relaxed">
            Your clients need to understand their data. Your team shouldn&apos;t
            spend hours making that happen. Crutan delivers daily AI-powered
            briefings in plain English — giving each client a clear picture of
            their performance every morning while your team stays focused on
            strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-4 bg-loam text-parchment font-semibold rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg text-base"
            >
              Get early access free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-4 text-bark font-medium rounded-xl border border-sand hover:border-loam/40 hover:bg-parchment-surface transition-all text-base"
            >
              See how it works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-weathered">
            Free during early access · No credit card · Multi-client support coming soon
          </p>
        </div>
      </section>

      {/* ── PAIN SECTION ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-10 text-center">
            The agency reporting trap
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-parchment border border-sand/60 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-loam/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-loam" />
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

      {/* ── HOW IT WORKS FOR AGENCIES ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-loam mb-3">
              The new workflow
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              You set the context.
              <br />
              Crutan handles the daily narrative.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {workflow.map(({ step, title, body }) => (
              <div key={step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-loam/10 flex items-center justify-center mx-auto mb-4 text-loam font-bold text-sm"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {step}
                </div>
                <h3
                  className="font-semibold text-bark mb-2"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Sample client briefing */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-loam mb-3">
              What your client sees every morning
            </p>
          </div>

          <div className="bg-white border border-sand rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-loam px-6 py-4 flex items-center gap-3">
              <Image src="/crutan-symbol-white.svg" alt="Crutan" width={20} height={18} />
              <div>
                <p className="text-parchment font-semibold text-sm">Monday Briefing — Crutan</p>
                <p className="text-parchment/60 text-xs">Client: Hartwell & Co · Monday 8:00 AM</p>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-loam mb-2">
                  Good morning, Sarah.
                </p>
                <p className="text-bark text-sm leading-relaxed">
                  <strong>Strong week overall.</strong> Your organic traffic grew 14% — largely driven by
                  the product page your agency optimised two weeks ago, which is now ranking for 7
                  new keywords. Paid search ROAS held at 3.4×. One area to discuss with your team:
                  the new landing page has a lower mobile conversion rate than desktop (1.8% vs.
                  4.2%) — worth a conversation this week.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Weekly sessions", value: "8,430", change: "+14%", up: true },
                  { label: "Conversions", value: "218", change: "+8%", up: true },
                  { label: "Paid ROAS", value: "3.4×", change: "-0.2×", up: false },
                ].map((m) => (
                  <div key={m.label} className="bg-parchment-surface rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-bark">{m.value}</p>
                    <p className="text-[10px] text-weathered mb-0.5">{m.label}</p>
                    <p className={`text-xs font-semibold ${m.up ? "text-sage" : "text-ember"}`}>
                      {m.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-sand/60 pt-4 bg-parchment-surface rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-loam mb-2">
                  For your agency conversation this week
                </p>
                <p className="text-sm text-loam">
                  → The mobile conversion gap on the new landing page (1.8% vs 4.2% desktop) is
                  worth a specific agenda item. Ask your team to review the mobile layout and
                  CTA placement — this gap typically indicates a form or button visibility issue
                  on smaller screens.
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
              Retain clients by keeping them informed
            </h2>
            <p className="text-weathered mt-3 text-base max-w-xl mx-auto">
              Clients who understand what&apos;s happening with their business don&apos;t churn. They expand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-parchment border border-sand/60 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-loam/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-loam" />
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

      {/* ── TESTIMONIAL ── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-saffron text-saffron" />
            ))}
          </div>
          <blockquote
            className="text-xl text-bark font-medium leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="text-sm text-weathered">— {testimonial.name}</p>
        </div>
      </section>

      {/* ── CHECKLIST + CTA ── */}
      <section className="py-20 bg-parchment-surface border-t border-sand/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-10"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Add daily intelligence to
            <br />
            every client relationship
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-loam text-parchment font-bold rounded-xl hover:opacity-90 transition-all shadow-md text-base"
          >
            Get early access free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-weathered mt-4">
            Free during early access · No credit card · Read-only access to client GA4
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
            Clients who understand
            <br />
            their data don&apos;t churn.
          </h2>
          <p className="text-parchment/60 mb-8 leading-relaxed">
            Give every client daily intelligence about their business.
            Start with one client in early access — free, no credit card,
            first briefing tomorrow morning.
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
