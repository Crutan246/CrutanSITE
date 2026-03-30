"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Clock,
  ChevronRight,
  Star,
  Search,
  TrendingUp,
  Globe,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { DataSwarm } from "@/components/data-swarm";
import { track } from "@/lib/gtm";
import { useScrollDepth } from "@/hooks/use-scroll-depth";

const sampleQuestions = [
  "Why did my traffic drop last week?",
  "What's my best converting page?",
  "How did my organic search perform this month?",
  "What should I focus on today?",
  "Which campaigns are driving the most revenue?",
];

const features = [
  {
    icon: Mail,
    symbol: "/crutan-symbol-dark-blue.svg",
    title: "Daily AI Briefings",
    description:
      "Wake up to a plain-English summary of everything that happened on your site yesterday — sessions, conversions, top pages, and what to do about it.",
    color: "action",
    bg: "rgba(61,90,115,0.08)",
  },
  {
    icon: MessageSquare,
    symbol: "/crutan-symbol-orange.svg",
    title: "Live Chat with Your Data",
    description:
      "Ask anything about your analytics and get answers grounded in your actual GA4 data. Real-time queries, no dashboards required.",
    color: "saffron",
    bg: "rgba(196,130,45,0.08)",
  },
  {
    icon: Search,
    symbol: "/crutan-symbol-light-blue.svg",
    title: "Search Console Intelligence",
    description:
      "See which keywords are driving impressions, clicks, and rankings. Track your SEO performance week over week without logging in.",
    color: "sage",
    bg: "rgba(107,143,168,0.1)",
  },
  {
    icon: TrendingUp,
    symbol: "/crutan-symbol-tan.svg",
    title: "Weekly Rollups",
    description:
      "Every Friday, a comprehensive 7-day report lands in your inbox. Trends, wins, concerns, and prioritized recommendations for next week.",
    color: "action",
    bg: "rgba(206,195,178,0.25)",
  },
  {
    icon: Globe,
    symbol: "/crutan-symbol-brown.svg",
    title: "Delivered Your Way",
    description:
      "Choose email, SMS, or both. Pick your delivery time. Get your briefing when you actually want it, in the format that fits your morning.",
    color: "saffron",
    bg: "rgba(42,31,20,0.06)",
  },
  {
    icon: Shield,
    symbol: "/crutan-symbol-dark-blue.svg",
    title: "Read-Only, Always",
    description:
      "Crutan only requests read access to your data. Nothing is modified, shared with other users, or used to train AI models.",
    color: "sage",
    bg: "rgba(61,90,115,0.08)",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect Google Analytics",
    description:
      "Sign in with Google. Crutan requests read-only access to your GA4 property and Search Console. Takes 60 seconds.",
    detail: "No credit card required during early access.",
  },
  {
    number: "02",
    title: "Tell Us About Your Business",
    description:
      "A quick AI-guided conversation captures your industry, revenue model, audience, and KPIs. This is what makes your reports feel personal.",
    detail: "Takes about 3 minutes. You can update it anytime.",
  },
  {
    number: "03",
    title: "Wake Up to Clarity",
    description:
      "Choose your delivery time. Tomorrow morning your first briefing arrives — written like an analyst wrote it, not generated from a template.",
    detail: "Most users get their first report in under 24 hours.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Studio",
    avatar: "SC",
    quote:
      "I used to spend 30 minutes in GA4 every morning. Now I read Crutan's briefing in 2 minutes and immediately know what to work on. It's like having an analyst on staff.",
  },
  {
    name: "Marcus Webb",
    role: "Head of Growth, Sable Commerce",
    avatar: "MW",
    quote:
      "The weekly reports are absurdly good. It catches patterns I would have missed — like when organic search quietly became our #1 channel while we were focused on paid.",
  },
  {
    name: "Priya Nair",
    role: "CEO, Fieldwork Agency",
    avatar: "PN",
    quote:
      "My team used to fight over who had to build the Monday morning analytics deck. Crutan killed that problem entirely. The reports land in everyone's inbox before standup.",
  },
];

const stats = [
  { value: "< 5 min", label: "Setup time" },
  { value: "8 AM", label: "Your daily briefing" },
  { value: "100%", label: "Read-only access" },
  { value: "24/7", label: "Chat available" },
];

function AnimatedCounter({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div
        className="text-3xl sm:text-4xl font-bold text-bark mb-1"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {value}
      </div>
      <div className="text-sm text-weathered font-medium">{label}</div>
    </div>
  );
}

function TypewriterPlaceholder() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = sampleQuestions[idx];
    const delay = isDeleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx <= 0) {
          setIsDeleting(false);
          setIdx((i) => (i + 1) % sampleQuestions.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, idx, isDeleting]);

  return (
    <span className="text-weathered">
      {displayed}
      <span className="animate-pulse text-action">|</span>
    </span>
  );
}

export default function HomePage() {
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useScrollDepth();

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    track({ event: "hero_search_submit", query_text: question.trim() || "(placeholder click)" });
    window.location.href = "/signup";
  };

  const handleQuestionKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleQuestionSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden hero-mesh">
        {/* Data swarm — transparent ambient background layer */}
        <DataSwarm />

        {/* Soft radial gradient blobs (sit above swarm, below content) */}
        <div
          className="absolute top-20 left-1/4 w-72 h-72 opacity-10 animate-blob pointer-events-none"
          style={{ background: "var(--action)", filter: "blur(90px)" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 opacity-8 animate-blob animation-delay-2000 pointer-events-none"
          style={{ background: "var(--saffron)", filter: "blur(110px)" }}
        />
        <div className="grid-texture absolute inset-0 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Fix #4 — Prominent early access badge with pulsing green dot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sage/10 border border-sage/25 text-sage text-sm font-semibold mb-8 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-sage animate-pulse flex-shrink-0" />
            Free during early access — no credit card required
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bark leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Wake up to clarity,
            <br />
            <span className="text-shimmer">not confusion.</span>
          </h1>

          {/* Fix #2 — Lead with benefit, not with "connect GA4" */}
          <p className="text-lg sm:text-xl text-weathered max-w-2xl mx-auto mb-10 leading-relaxed">
            Every morning, Crutan analyses your website overnight and delivers
            a plain-English briefing to your inbox — telling you exactly what
            happened, what it means, and what to do next. No dashboards. No
            data science. Just answers.
          </p>

          {/* Fix #5 — Labelled search input to clarify the interaction */}
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-3">
            Try asking Crutan a question:
          </p>
          <form onSubmit={handleQuestionSubmit} className="mb-5">
            <div className="relative max-w-2xl mx-auto">
              <div className="relative flex items-center bg-white border-2 border-sand rounded-xl shadow-sm hover:border-action/40 focus-within:border-action transition-all duration-200 overflow-hidden">
                <MessageSquare className="absolute left-4 w-5 h-5 text-sand flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={handleQuestionKeyDown}
                  className="flex-1 pl-12 pr-4 py-4 text-base bg-transparent outline-none text-bark placeholder:text-transparent"
                  placeholder=" "
                  aria-label="Ask a question about your analytics"
                />
                {question === "" && (
                  <span className="absolute left-12 pointer-events-none text-base select-none">
                    <TypewriterPlaceholder />
                  </span>
                )}
                <button
                  type="submit"
                  className="flex items-center gap-2 m-1.5 px-5 py-3 bg-action text-parchment text-sm font-semibold rounded-lg hover:bg-action-light transition-colors flex-shrink-0"
                >
                  <span className="hidden sm:inline">Ask Crutan</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>

          <p className="text-xs text-weathered mb-10">
            Type any question → sign up free → connect GA4 → your first briefing arrives tomorrow morning
          </p>

          {/* Fix #1 — Primary CTA goes to /signup, secondary to sign in */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              href="/signup"
              onClick={() => track({ event: "cta_click", cta_text: "Get early access free", cta_location: "hero_primary", destination: "/signup" })}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all duration-200 shadow-md hover:shadow-lg text-base"
            >
              Get early access free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => track({ event: "nav_click", link_text: "See how it works", link_href: "/#how-it-works" })}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-bark font-medium rounded-xl border border-sand hover:border-action/30 hover:bg-parchment-surface transition-all duration-200 text-base"
            >
              See how it works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Fix #3 — Social proof trust bar above the fold */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {["SC","MW","PN","JT"].map((initials) => (
                  <div
                    key={initials}
                    className="w-7 h-7 rounded-full bg-action/10 border-2 border-parchment flex items-center justify-center text-[9px] font-bold text-action"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-weathered font-medium">
                Joined by <span className="text-bark font-semibold">200+ founders</span> in early access
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-sand" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-saffron text-saffron" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-weathered ml-1">
                &ldquo;Like having an analyst on staff.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Mock briefing card */}
        <div className="relative max-w-3xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <div className="bg-parchment-surface border border-sand rounded-2xl shadow-xl overflow-hidden">
            {/* Card header */}
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
                Today, 8:03 AM · your-site.com
              </span>
            </div>
            {/* Card body */}
            <div className="px-5 py-5 space-y-4">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-action">
                    TL;DR
                  </span>
                </div>
                <p className="text-sm text-bark leading-relaxed">
                  <strong>Strong day.</strong> Organic traffic surged 34% vs
                  your 7-day average — a new blog post about pricing indexed
                  overnight and drove 847 sessions. Conversion rate held at
                  3.2%, putting you on pace for your best month yet.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Sessions", value: "2,847", change: "+34%", up: true },
                  { label: "Users", value: "2,104", change: "+28%", up: true },
                  { label: "Conversions", value: "91", change: "+12%", up: true },
                  { label: "Bounce Rate", value: "38%", change: "-4%", up: false },
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
                  Action Items
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Share the pricing post on LinkedIn — it's already indexing well",
                    "Your /contact page bounce rate jumped to 68%. Check the form.",
                    "Email campaign from Monday is still converting at 5.1% — extend it",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-loam">
                      <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div
            className="absolute -inset-4 rounded-3xl -z-10 opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse, var(--action) 0%, transparent 70%)",
            }}
          />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-sand/40 bg-parchment-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <AnimatedCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron/20 bg-saffron/5 text-saffron text-xs font-semibold mb-5">
              <BarChart3 className="w-3 h-3" />
              <span>Everything you need, nothing you don&apos;t</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-bark mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Your analytics, finally
              <br />
              <em className="not-italic text-action">making sense</em>
            </h2>
            <p className="text-lg text-weathered max-w-xl mx-auto">
              Crutan turns the endless noise of GA4 into a clear, actionable
              signal — delivered the way you want it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-parchment-surface border border-sand/60 rounded-2xl p-6 card-lift hover:border-action/30"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Image
                    src={feature.symbol}
                    alt=""
                    width={20}
                    height={18}
                  />
                </div>
                <h3
                  className="text-lg font-semibold text-bark mb-2"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-24 sm:py-32 bg-parchment-surface"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-action/20 bg-action/5 text-action text-xs font-semibold mb-5">
              <Zap className="w-3 h-3" />
              <span>Up and running in under 5 minutes</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-bark mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Three steps to your
              <br />
              first briefing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-12 left-[calc(33%+32px)] right-[calc(33%+32px)] h-px"
              style={{
                background:
                  "linear-gradient(to right, var(--action), var(--saffron))",
                opacity: 0.3,
              }}
            />

            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-bark text-parchment text-xl font-bold mb-5 shadow-lg">
                  <span style={{ fontFamily: "var(--font-fraunces)" }}>
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-sand" />
                  )}
                </div>
                <h3
                  className="text-xl font-semibold text-bark mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-action font-medium">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start setup — it&apos;s free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHAT DEMO ────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron/20 bg-saffron/5 text-saffron text-xs font-semibold mb-6">
                <MessageSquare className="w-3 h-3" />
                <span>Live chat with your analytics</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-bark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Ask anything.
                <br />
                Get real answers.
              </h2>
              <p className="text-lg text-weathered mb-6 leading-relaxed">
                Crutan&apos;s live chat queries your actual GA4 data in real
                time. Not generic advice — specific answers about your numbers,
                your pages, your campaigns.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Compares time periods automatically",
                  "Cites actual page paths and traffic sources",
                  "Surfaces anomalies you didn't know to look for",
                  "Suggests what to do based on what it finds",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-loam">
                    <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 text-action font-semibold text-sm hover:gap-3 transition-all"
              >
                Try it with your data <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Chat mockup */}
            <div className="bg-parchment-surface border border-sand rounded-2xl shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-parchment border-b border-sand">
                <Image
                  src="/crutan-symbol-dark-blue.svg"
                  alt="Crutan"
                  width={16}
                  height={14}
                />
                <span className="text-xs font-semibold text-bark">
                  Crutan Chat
                </span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                  <span className="text-xs text-sage">Live</span>
                </div>
              </div>
              <div className="p-4 space-y-3 h-80 overflow-y-auto">
                {[
                  {
                    role: "user",
                    text: "Why did my sessions drop 22% last Tuesday?",
                  },
                  {
                    role: "assistant",
                    text: "Good catch. Looking at your data for last Tuesday (March 18):\n\n**Organic search dropped 31%** — your 3 top landing pages all saw significant decline in clicks from Google. This aligns with a Google core algorithm update that rolled out on the 17th.\n\n**Direct traffic was flat** (+2%), which means your brand hasn't been impacted.\n\n**Recommendation:** Run a Search Console comparison for March 10-17 vs March 17-24. I'd focus on /blog/pricing and /features — those two pages account for 60% of your organic drop.",
                  },
                  {
                    role: "user",
                    text: "Has it recovered since?",
                  },
                  {
                    role: "assistant",
                    text: "Partially. As of yesterday (March 28):\n\n↑ Organic is back to **-8% vs your pre-update baseline**, up from -31% at the low point. /blog/pricing recovered fastest — it's now within 5% of its prior average. /features is still lagging at -18%.",
                  },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-action text-parchment"
                          : "bg-parchment border border-sand text-loam"
                      }`}
                    >
                      {msg.text.split("\n\n").map((para, j) => (
                        <p key={j} className={j > 0 ? "mt-2" : ""}>
                          {para.split(/\*\*(.*?)\*\*/g).map((part, k) =>
                            k % 2 === 1 ? (
                              <strong key={k} className="font-semibold">
                                {part}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-parchment border border-sand rounded-xl px-3 py-2.5">
                  <input
                    type="text"
                    placeholder="Ask about your analytics..."
                    className="flex-1 text-xs bg-transparent outline-none text-bark placeholder:text-sand"
                    readOnly
                    onClick={() =>
                      (window.location.href = "/signup")
                    }
                  />
                  <button
                    className="p-1.5 bg-action text-parchment rounded-lg"
                    onClick={() =>
                      (window.location.href = "/signup")
                    }
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-parchment-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-saffron text-saffron"
                />
              ))}
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Founders who stopped
              <br />
              opening GA4
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-parchment border border-sand/60 rounded-2xl p-6 card-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-action/10 flex items-center justify-center text-action text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-bark">
                      {t.name}
                    </div>
                    <div className="text-xs text-weathered">{t.role}</div>
                  </div>
                </div>
                <blockquote className="text-sm text-loam leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────────────── */}
      <section className="py-20 border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-8">
            Powered by best-in-class infrastructure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              "Google Analytics 4",
              "Google Search Console",
              "Claude AI",
              "Resend",
              "Twilio",
              "Vercel",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-sand hover:text-weathered transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron/20 bg-saffron/5 text-saffron text-xs font-semibold mb-6">
            <Clock className="w-3 h-3" />
            <span>Early access pricing</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-bark mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Free during early access.
            <br />
            Simple pricing after.
          </h2>
          <p className="text-lg text-weathered mb-10 leading-relaxed">
            Right now, Crutan is completely free for early access users. No
            credit card. No commitment. Full access to every feature while we
            finalize our pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Join free — no card needed
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-action hover:text-action-light transition-colors"
            >
              View pricing details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
            className="text-4xl sm:text-5xl font-bold text-parchment mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Your first briefing
            <br />
            is tomorrow morning.
          </h2>
          <p className="text-lg text-parchment/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Connect your GA4 in under 5 minutes. Tell Crutan about your
            business. Wake up tomorrow to a briefing written just for you.
          </p>
          <Link
            href="/signup"
            onClick={() => track({ event: "cta_click", cta_text: "Get early access — it's free", cta_location: "homepage_bottom_cta", destination: "/signup" })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-parchment text-bark font-bold rounded-xl hover:bg-parchment-surface transition-all duration-200 shadow-xl text-base"
          >
            Get early access — it&apos;s free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-5 text-xs text-parchment/40">
            Sign in with Google · Read-only access · Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
