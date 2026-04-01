import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Minus,
  Clock,
  DollarSign,
  Brain,
  BarChart3,
  MessageSquare,
  Mail,
  ChevronRight,
  Zap,
  Users,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crutan vs GA4 vs Looker Studio vs Agency Reporting — Comparison",
  description:
    "Compare Crutan AI analytics briefings to Google Analytics 4 dashboards, Looker Studio reports, and traditional agency reporting. Find out which approach actually helps you understand your data.",
  keywords: [
    "GA4 alternative",
    "Looker Studio alternative",
    "google analytics alternative for small business",
    "simple analytics tool",
    "analytics reporting tool comparison",
    "AI analytics vs dashboards",
    "automated analytics reports",
    "crutan vs google analytics",
  ],
  alternates: { canonical: "https://crutan.com/compare" },
  openGraph: {
    title: "Crutan vs GA4 vs Looker Studio — Which Is Right for You?",
    description:
      "Side-by-side comparison of analytics approaches for business owners who need answers, not dashboards.",
    url: "https://crutan.com/compare",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://crutan.com" },
  { name: "Compare", url: "https://crutan.com/compare" },
];

const comparisonRows: {
  feature: string;
  crutan: string;
  ga4: string;
  looker: string;
  agency: string;
}[] = [
  {
    feature: "Time to first insight",
    crutan: "Tomorrow morning",
    ga4: "Hours to weeks",
    looker: "Days to weeks",
    agency: "1–2 weeks",
  },
  {
    feature: "Technical skill needed",
    crutan: "None",
    ga4: "Intermediate–Advanced",
    looker: "Advanced",
    agency: "None (but depends on agency)",
  },
  {
    feature: "Daily insights",
    crutan: "Automated AI briefing",
    ga4: "Manual login required",
    looker: "Scheduled email (raw data)",
    agency: "Weekly/monthly reports",
  },
  {
    feature: "Plain-English explanations",
    crutan: "Yes — every insight",
    ga4: "No",
    looker: "No",
    agency: "Yes (if analyst is good)",
  },
  {
    feature: "Action items",
    crutan: "1–3 per briefing",
    ga4: "None",
    looker: "None",
    agency: "Varies",
  },
  {
    feature: "Ask follow-up questions",
    crutan: "Live chat with your data",
    ga4: "Not possible",
    looker: "Not possible",
    agency: "Email/call (hours–days)",
  },
  {
    feature: "Anomaly detection",
    crutan: "Automatic, daily",
    ga4: "Manual setup",
    looker: "Manual setup",
    agency: "If they check",
  },
  {
    feature: "Cost",
    crutan: "Free (early access)",
    ga4: "Free",
    looker: "Free",
    agency: "$1,500–$10,000+/mo",
  },
  {
    feature: "Setup time",
    crutan: "5 minutes",
    ga4: "Already have it",
    looker: "4–20 hours",
    agency: "1–4 weeks onboarding",
  },
  {
    feature: "Business context",
    crutan: "Learns your business",
    ga4: "Generic for everyone",
    looker: "Generic for everyone",
    agency: "Depends on relationship",
  },
];

const Check = () => <CheckCircle2 className="w-4 h-4 text-sage" />;
const X = () => <XCircle className="w-4 h-4 text-ember/50" />;
const Partial = () => <Minus className="w-4 h-4 text-saffron" />;

const quickCompare: {
  label: string;
  crutan: React.ReactNode;
  ga4: React.ReactNode;
  looker: React.ReactNode;
  agency: React.ReactNode;
}[] = [
  { label: "No technical skill needed", crutan: <Check />, ga4: <X />, looker: <X />, agency: <Check /> },
  { label: "Daily automated insights", crutan: <Check />, ga4: <X />, looker: <Partial />, agency: <X /> },
  { label: "Plain-English explanations", crutan: <Check />, ga4: <X />, looker: <X />, agency: <Check /> },
  { label: "Actionable recommendations", crutan: <Check />, ga4: <X />, looker: <X />, agency: <Partial /> },
  { label: "Live Q&A with your data", crutan: <Check />, ga4: <X />, looker: <X />, agency: <Partial /> },
  { label: "Automatic anomaly alerts", crutan: <Check />, ga4: <Partial />, looker: <Partial />, agency: <Partial /> },
  { label: "Under $50/month", crutan: <Check />, ga4: <Check />, looker: <Check />, agency: <X /> },
  { label: "Setup in under 10 minutes", crutan: <Check />, ga4: <Check />, looker: <X />, agency: <X /> },
];

const approaches = [
  {
    icon: BarChart3,
    name: "Google Analytics 4 (DIY)",
    verdict: "Powerful but overwhelming",
    description:
      "GA4 is free and comprehensive, but it was built for data analysts. Most small business owners log in, see a confusing dashboard, and close the tab. The data is all there — but extracting meaning from it requires skills most founders don't have time to learn.",
    bestFor: "Data-savvy teams with dedicated analytics staff",
    color: "action",
  },
  {
    icon: BarChart3,
    name: "Looker Studio",
    verdict: "Prettier dashboards, same problem",
    description:
      "Looker Studio lets you build custom dashboards that pull from GA4. The dashboards look better, but someone still needs to build them, maintain them, and — most importantly — interpret what they show. Dashboards don't explain why your traffic dropped.",
    bestFor: "Teams that already have a reporting workflow",
    color: "saffron",
  },
  {
    icon: Users,
    name: "Agency Reporting",
    verdict: "Great if you can afford it",
    description:
      "A good analytics agency or consultant will give you exactly what you need: context, explanations, recommendations. The problem is cost. Even a junior analyst costs $1,500+/month. Most small businesses can't justify the spend.",
    bestFor: "Businesses with $5K+/month marketing budgets",
    color: "loam",
  },
  {
    icon: Brain,
    name: "Crutan (AI Briefings)",
    verdict: "Agency-level insights at a fraction of the cost",
    description:
      "Crutan connects to your GA4, learns your business context, and writes a plain-English briefing every morning. It's like having an analyst on staff who works overnight and has your report ready before coffee. Ask follow-up questions anytime via live chat.",
    bestFor: "Solo founders, small teams, ecommerce owners, agencies",
    color: "sage",
  },
];

const faqs = [
  {
    question: "Is Crutan a replacement for Google Analytics?",
    answer:
      "No. Crutan sits on top of Google Analytics 4 — it reads your GA4 data and translates it into plain-English insights. You keep GA4 running as your data source; Crutan is the intelligence layer that makes it useful without requiring you to log into dashboards.",
  },
  {
    question: "Can Crutan do everything Looker Studio does?",
    answer:
      "They serve different purposes. Looker Studio builds visual dashboards for people who want to explore data manually. Crutan proactively tells you what matters — no exploration required. For most small business owners, Crutan delivers more actionable value in less time.",
  },
  {
    question: "Why would I use Crutan instead of hiring an analyst?",
    answer:
      "A junior analytics hire costs $4,000–$8,000/month. Crutan delivers daily briefings with the same kind of context and recommendations for a fraction of the cost. It won't replace a senior data scientist, but for daily reporting and quick answers, it's a better fit for most small businesses.",
  },
  {
    question: "Does Crutan work with Shopify / WooCommerce / WordPress?",
    answer:
      "If your website has Google Analytics 4 installed, Crutan works with it — regardless of your platform. Shopify, WooCommerce, WordPress, Webflow, custom-built sites — if GA4 is collecting data, Crutan can read it.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Crutan requests read-only access to your GA4 data via Google's OAuth 2.0. It never writes to your analytics, never shares your data with other users, and never uses your data to train AI models. You can revoke access anytime.",
  },
  {
    question: "What happens when free early access ends?",
    answer:
      "Early access users will get advance notice and grandfathered pricing when paid plans launch. We're designing pricing based on feedback from real users — expect it to be significantly cheaper than any analytics service or agency.",
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-parchment">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-weathered mb-8">
            <Link href="/" className="hover:text-bark transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-bark font-medium">Compare</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-action/10 border border-action/20 text-action text-xs font-semibold mb-6">
            <BarChart3 className="w-3 h-3" />
            Analytics approach comparison
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bark leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            You don&apos;t need a better dashboard.
            <br />
            <span className="text-action">You need answers.</span>
          </h1>

          <p className="text-lg text-weathered max-w-2xl mb-10 leading-relaxed">
            There are a dozen ways to look at your analytics. Most of them
            assume you have time, technical skill, and patience you don&apos;t
            have. Here&apos;s an honest comparison of four approaches — and
            which one actually fits the way you work.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all shadow-md hover:shadow-lg text-sm"
            >
              Try Crutan free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#detailed-comparison"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-bark font-medium rounded-xl border border-sand hover:border-action/30 hover:bg-parchment-surface transition-all text-sm"
            >
              Jump to comparison table
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOUR APPROACHES ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Four ways to understand your analytics
            </h2>
            <p className="text-weathered mt-3 max-w-xl mx-auto">
              An honest look at the options — what they&apos;re good at, what they&apos;re not, and who they&apos;re actually for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approaches.map(({ icon: Icon, name, verdict, description, bestFor, color }) => (
              <div
                key={name}
                className={`bg-parchment border rounded-2xl p-6 ${
                  name.includes("Crutan")
                    ? "border-sage/40 ring-2 ring-sage/20"
                    : "border-sand/60"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-${color}/10 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${color}`} />
                  </div>
                  {name.includes("Crutan") && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sage bg-sage/10 px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <h3
                  className="font-semibold text-bark text-lg mb-1"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {name}
                </h3>
                <p className="text-xs font-semibold text-saffron mb-3">{verdict}</p>
                <p className="text-sm text-weathered leading-relaxed mb-4">{description}</p>
                <p className="text-xs text-loam">
                  <span className="font-semibold">Best for:</span> {bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK COMPARE CHECKMARKS ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-10 text-center"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Feature comparison at a glance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-sand/60">
                  <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-weathered">Feature</th>
                  <th className="text-center py-3 px-3 text-xs font-bold uppercase tracking-wider text-sage">Crutan</th>
                  <th className="text-center py-3 px-3 text-xs font-semibold uppercase tracking-wider text-weathered">GA4</th>
                  <th className="text-center py-3 px-3 text-xs font-semibold uppercase tracking-wider text-weathered">Looker</th>
                  <th className="text-center py-3 px-3 text-xs font-semibold uppercase tracking-wider text-weathered">Agency</th>
                </tr>
              </thead>
              <tbody>
                {quickCompare.map(({ label, crutan, ga4, looker, agency }) => (
                  <tr key={label} className="border-b border-sand/30">
                    <td className="py-3 pr-4 text-bark font-medium">{label}</td>
                    <td className="py-3 px-3 text-center"><div className="flex justify-center">{crutan}</div></td>
                    <td className="py-3 px-3 text-center"><div className="flex justify-center">{ga4}</div></td>
                    <td className="py-3 px-3 text-center"><div className="flex justify-center">{looker}</div></td>
                    <td className="py-3 px-3 text-center"><div className="flex justify-center">{agency}</div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DETAILED COMPARISON ── */}
      <section id="detailed-comparison" className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-10 text-center"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Detailed comparison
          </h2>

          <div className="space-y-4">
            {comparisonRows.map(({ feature, crutan, ga4, looker, agency }) => (
              <div key={feature} className="bg-parchment border border-sand/60 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-3">
                  {feature}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-sage/5 border border-sage/20 rounded-lg p-3">
                    <p className="text-[10px] font-bold uppercase text-sage mb-1">Crutan</p>
                    <p className="text-sm text-bark font-medium">{crutan}</p>
                  </div>
                  <div className="bg-parchment-surface rounded-lg p-3">
                    <p className="text-[10px] font-bold uppercase text-weathered mb-1">GA4</p>
                    <p className="text-sm text-loam">{ga4}</p>
                  </div>
                  <div className="bg-parchment-surface rounded-lg p-3">
                    <p className="text-[10px] font-bold uppercase text-weathered mb-1">Looker Studio</p>
                    <p className="text-sm text-loam">{looker}</p>
                  </div>
                  <div className="bg-parchment-surface rounded-lg p-3">
                    <p className="text-[10px] font-bold uppercase text-weathered mb-1">Agency</p>
                    <p className="text-sm text-loam">{agency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE REAL QUESTION ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The real question isn&apos;t which tool.
            <br />
            It&apos;s whether you&apos;ll actually use it.
          </h2>
          <p className="text-lg text-weathered leading-relaxed mb-10 max-w-2xl mx-auto">
            Most business owners have Google Analytics installed. Very few
            actually look at it. Even fewer extract insights they can act on.
            The best analytics tool is the one that puts answers in front of
            you without asking you to go looking for them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Mail, label: "Arrives in your inbox", detail: "Before your first coffee" },
              { icon: MessageSquare, label: "Written in English", detail: "Not metrics and charts" },
              { icon: Zap, label: "Tells you what to do", detail: "Not just what happened" },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="bg-parchment-surface border border-sand/60 rounded-xl p-5 text-center">
                <Icon className="w-5 h-5 text-action mx-auto mb-3" />
                <p className="text-sm font-semibold text-bark">{label}</p>
                <p className="text-xs text-weathered mt-1">{detail}</p>
              </div>
            ))}
          </div>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-action text-parchment font-bold rounded-xl hover:bg-action-light transition-all shadow-md text-base"
          >
            Try Crutan free — first briefing tomorrow
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-weathered mt-4">
            No credit card · 5-minute setup · Read-only access
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-10 text-center"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group bg-parchment border border-sand/60 rounded-xl"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-bark list-none">
                  {question}
                  <ChevronRight className="w-4 h-4 text-weathered transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-sm text-weathered leading-relaxed">{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-6 text-center">
            Learn more
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/google-analytics-for-small-business", label: "Google Analytics for Small Business Guide", desc: "The complete 2026 guide to understanding GA4" },
              { href: "/ai-analytics", label: "What Is AI Analytics?", desc: "How AI is replacing dashboards for business owners" },
              { href: "/for/founders", label: "Crutan for Solo Founders", desc: "Daily AI briefings built for one-person businesses" },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group p-4 bg-parchment-surface border border-sand/60 rounded-xl hover:border-action/30 transition-all"
              >
                <p className="text-sm font-semibold text-bark group-hover:text-action transition-colors mb-1">{label}</p>
                <p className="text-xs text-weathered">{desc}</p>
              </Link>
            ))}
          </div>
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
            Stop comparing tools.
            <br />
            Start getting answers.
          </h2>
          <p className="text-parchment/60 mb-8 leading-relaxed">
            Connect your GA4 in 5 minutes. Your first AI briefing arrives
            tomorrow morning — plain English, action items included.
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
