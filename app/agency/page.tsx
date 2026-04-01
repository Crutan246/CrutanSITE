import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  MessageSquare,
  Search,
  Shield,
  BarChart3,
  Mail,
  Clock,
  Zap,
  TrendingUp,
  SwitchCamera,
  FileText,
  Database,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crutan for Agencies — Manage Every Client's Analytics From One Login",
  description:
    "Crutan gives agencies a single account with unlimited client GA4 properties. Each client gets isolated context, daily AI briefings, and a live chat interface scoped to their data. Stop spending hours on manual reports.",
  keywords: [
    "analytics tool for agencies",
    "agency GA4 reporting",
    "client analytics reporting automation",
    "multi-client GA4 management",
    "automated client reports",
    "agency analytics dashboard",
    "GA4 for agencies",
    "client reporting tool",
    "white label analytics reporting",
    "analytics agency software",
    "automated google analytics reports",
    "agency analytics AI",
  ],
  alternates: { canonical: "https://crutan.com/agency" },
  openGraph: {
    title: "Crutan for Agencies — One Login, Every Client, Zero Manual Reports",
    description:
      "Manage every client's Google Analytics from a single Crutan account. Each client gets their own AI briefings, live chat, and isolated context. No more PDF decks.",
    url: "https://crutan.com/agency",
    siteName: "Crutan",
    type: "article",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://crutan.com" },
  { name: "For Agencies", url: "https://crutan.com/agency" },
];

const faqs = [
  {
    question: "How many client properties can I manage in one Crutan account?",
    answer:
      "There is no hard limit. You can connect as many GA4 properties as you need — one per client. Each property is fully independent with its own business context, onboarding, briefing schedule, and conversation history. Switching between clients takes one click.",
  },
  {
    question: "Is client data ever mixed between properties?",
    answer:
      "Never. Crutan's architecture isolates every property at the database level using row-level security. When you're viewing a client, every AI response, briefing, and chat query is scoped exclusively to that client's GA4 property. There is no crossover. This is a core design principle, not a setting.",
  },
  {
    question: "Can I give clients access to their own briefings?",
    answer:
      "Yes. Briefings are delivered directly to the client's email or phone via SMS — you configure the delivery address during onboarding for each property. You can also access all briefings from the Crutan dashboard on their behalf.",
  },
  {
    question: "Does Crutan connect to Google Search Console per client?",
    answer:
      "Yes. Each client property can optionally connect its own Google Search Console account. Once connected, the AI has live access to that client's search queries, keyword rankings, impressions, CTR, and page-level SEO performance — all scoped to that client.",
  },
  {
    question: "How does the per-client business context work?",
    answer:
      "During onboarding for each property, you run a short AI-guided conversation that captures the client's business name, industry, revenue model, target audience, KPIs, and website URL. Crutan also scrapes a summary of the client's site pages. This context is permanently attached to every briefing, chat response, and analysis for that client — so reports for an e-commerce brand read completely differently from reports for a B2B SaaS client, even if the traffic patterns look similar.",
  },
  {
    question: "What GA4 data can the AI access per client?",
    answer:
      "The AI has live access to the full GA4 Data API for each connected property: sessions, users, new users, conversions, bounce rate, session duration, top pages, traffic sources (channel, source/medium, campaign), custom events, and custom dimensions. It can run any combination of metrics and dimensions over any date range. It can also query real-time active users.",
  },
  {
    question: "Is this safe to use for client accounts? What access does Crutan request?",
    answer:
      "Crutan requests read-only OAuth access to GA4 and Search Console. It never writes to, modifies, or deletes any analytics data. The access scope is the minimum required to read reporting data. You can revoke access at any time, per property, from either Crutan's settings or the client's Google account.",
  },
  {
    question: "How is this different from Looker Studio or GA4's built-in reporting?",
    answer:
      "Looker Studio builds dashboards that clients have to interpret themselves. GA4's reporting requires logging in and building queries manually. Crutan writes the briefing, draws the conclusions, and delivers the answer — clients and account managers get a plain-English explanation of what happened and what to do next, without opening a dashboard. And when a client asks a follow-up question, you can answer it in seconds using live chat.",
  },
  {
    question: "Is Crutan white-labelable?",
    answer:
      "White-labeling is not available in the current version. Briefings are sent from Crutan's delivery infrastructure. We're evaluating branded delivery as a future agency feature based on demand.",
  },
  {
    question: "What does the weekly rollup look like for a client?",
    answer:
      "Every Friday, each connected client property receives a 7-day rollup covering traffic trends, channel performance, conversion rate, top content, week-over-week comparisons, and prioritized recommendations for the following week. The rollup is generated from the client's actual GA4 data and filtered through their specific business context — so a retail client's rollup highlights revenue and product performance, while a content site's rollup emphasizes engagement and organic search.",
  },
];

const aiTools = [
  {
    name: "run_report",
    description: "Query any GA4 metric — sessions, conversions, bounce rate, top pages — over any date range for the active client.",
    icon: BarChart3,
  },
  {
    name: "compare_periods",
    description: "Side-by-side metric comparison with percentage changes. This week vs last week, this month vs last month.",
    icon: TrendingUp,
  },
  {
    name: "get_realtime_data",
    description: "Live active users right now, broken down by page and traffic source. Real-time, not cached.",
    icon: Zap,
  },
  {
    name: "get_event_breakdown",
    description: "All custom GA4 events for the active client, by count and user. Understand what actions visitors are taking.",
    icon: Database,
  },
  {
    name: "search_console_query_performance",
    description: "Top search queries, pages, impressions, CTR, and average position. Which keywords are actually driving traffic.",
    icon: Search,
  },
  {
    name: "search_console_compare_periods",
    description: "SEO performance period-over-period. Catch ranking drops or gains before the client notices.",
    icon: FileText,
  },
];

const clientClients = [
  { name: "Hartwell & Co.", industry: "B2B SaaS", active: false },
  { name: "The Good Cup", industry: "Ecommerce", active: true },
  { name: "Studio Webb", industry: "Agency", active: false },
  { name: "Fieldwork Media", industry: "Publishing", active: false },
];

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 15% 60%, rgba(61,90,115,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(196,130,45,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-weathered mb-8">
            <Link href="/" className="hover:text-bark transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-bark font-medium">For Agencies</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-action/10 border border-action/20 text-action text-xs font-semibold mb-8">
            <Users className="w-3 h-3" />
            Built for digital marketing agencies &amp; analytics consultants
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-5xl sm:text-6xl font-bold text-bark leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                One login.
                <br />
                Every client.
                <br />
                <span className="text-action">Zero manual reports.</span>
              </h1>

              <p className="text-lg text-weathered leading-relaxed mb-8 max-w-lg">
                Crutan is built for agencies. Connect every client&apos;s GA4
                property to a single account. Each client gets their own
                isolated context, daily AI-written briefings, and a live chat
                interface backed by real-time data. Your team answers client
                questions in seconds. The reports write themselves.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-all shadow-md hover:shadow-lg text-sm"
                >
                  Get started free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-bark font-medium rounded-xl border border-sand hover:border-action/30 hover:bg-parchment-surface transition-all text-sm"
                >
                  Compare to alternatives
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-xs text-weathered">
                Free during early access · Read-only GA4 access · No credit card
              </p>
            </div>

            {/* Client switcher mockup */}
            <div className="relative">
              <div className="bg-white border border-sand rounded-2xl shadow-xl overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-sand/60 bg-parchment">
                  <div className="flex items-center gap-2">
                    <Image src="/crutan-symbol-dark-blue.svg" alt="Crutan" width={16} height={14} />
                    <span className="text-xs font-semibold text-bark">Crutan Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                    <span className="text-[10px] text-sage font-medium">Live data</span>
                  </div>
                </div>

                <div className="flex">
                  {/* Client sidebar */}
                  <div className="w-44 border-r border-sand/60 bg-parchment-surface py-3 flex-shrink-0">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-weathered px-3 mb-2">
                      Clients
                    </p>
                    {clientClients.map((client) => (
                      <div
                        key={client.name}
                        className={`px-3 py-2 mx-1.5 rounded-lg mb-0.5 cursor-pointer transition-all ${
                          client.active
                            ? "bg-action text-parchment"
                            : "hover:bg-parchment text-weathered"
                        }`}
                      >
                        <p className={`text-[11px] font-semibold ${client.active ? "text-parchment" : "text-bark"}`}>
                          {client.name}
                        </p>
                        <p className={`text-[10px] ${client.active ? "text-parchment/70" : "text-weathered"}`}>
                          {client.industry}
                        </p>
                      </div>
                    ))}
                    <div className="px-3 mt-3 pt-3 border-t border-sand/60">
                      <button className="text-[10px] text-action font-medium hover:text-action-light transition-colors">
                        + Add client
                      </button>
                    </div>
                  </div>

                  {/* Main content area */}
                  <div className="flex-1 p-4 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-saffron flex-shrink-0" />
                      <p className="text-[11px] font-semibold text-bark truncate">The Good Cup — Ecommerce</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {[
                        { label: "Sessions", value: "3,241", delta: "+18%" },
                        { label: "Revenue conv.", value: "2.8%", delta: "+0.4pp" },
                      ].map((m) => (
                        <div key={m.label} className="bg-parchment-surface rounded-lg p-2">
                          <p className="text-base font-bold text-bark">{m.value}</p>
                          <p className="text-[9px] text-weathered">{m.label}</p>
                          <p className="text-[9px] font-semibold text-sage">{m.delta}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-action/5 border border-action/15 rounded-lg p-2.5">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-action mb-1">
                        Today&apos;s Briefing
                      </p>
                      <p className="text-[10px] text-loam leading-relaxed">
                        Strong Thursday. Email campaign drove 34% of revenue at a 3.8% conversion rate —
                        nearly double site average. Mobile checkout drop-off worth investigating before the weekend…
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div
                className="absolute -inset-3 rounded-3xl -z-10 opacity-20 blur-2xl"
                style={{ background: "radial-gradient(ellipse, #3D5A73 0%, transparent 70%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-ember mb-4">
              The agency reporting trap
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-5"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Your team spends hours on work
              <br />
              that shouldn&apos;t require a human.
            </h2>
            <p className="text-base text-weathered leading-relaxed">
              Every week, someone on your team logs into GA4 for each client.
              Pulls metrics. Reformats them into a deck or PDF. Writes a
              summary. Emails it. Then answers three follow-up questions that
              could have been answered in thirty seconds with live data.
              Multiply that by ten clients and you&apos;ve burned a working day
              on something a well-configured AI could handle overnight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                stat: "4–8 hrs",
                description: "Average time agencies spend per week on client analytics reporting, per 10 clients",
                callout: "That's a full working day, every week.",
              },
              {
                stat: "< 5 min",
                description: "Time to onboard a new client property in Crutan and start receiving daily briefings",
                callout: "Per client, one time.",
              },
              {
                stat: "Instant",
                description: "Time to answer a client's follow-up question using Crutan's live GA4 chat",
                callout: "No report-building required.",
              },
            ].map(({ stat, description, callout }) => (
              <div key={stat} className="bg-parchment border border-sand/60 rounded-2xl p-6">
                <p
                  className="text-4xl font-bold text-bark mb-2"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {stat}
                </p>
                <p className="text-sm text-weathered leading-relaxed mb-3">{description}</p>
                <p className="text-xs font-semibold text-action">{callout}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS FOR AGENCIES ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-action mb-4">
              The workflow
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Set it up once.
              <br />
              It runs every morning after that.
            </h2>
            <p className="text-base text-weathered max-w-xl mx-auto leading-relaxed">
              Onboarding a new client takes under five minutes. From there,
              Crutan handles the daily and weekly reporting automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px opacity-25"
              style={{ background: "linear-gradient(to right, #3D5A73, #C4822D)" }}
            />

            {[
              {
                n: "01",
                title: "Connect the client's GA4",
                body: "One OAuth flow. Read-only access. Crutan links to the client's GA4 property and optionally their Search Console.",
                color: "text-action",
              },
              {
                n: "02",
                title: "Set their business context",
                body: "A short AI conversation captures the client's industry, revenue model, audience, and KPIs. This shapes every briefing and chat response.",
                color: "text-saffron",
              },
              {
                n: "03",
                title: "Briefings go out automatically",
                body: "Every morning, Crutan writes and delivers the client's AI briefing. Weekly rollups arrive every Friday. Your team doesn't touch it.",
                color: "text-sage",
              },
              {
                n: "04",
                title: "Answer questions instantly",
                body: "When a client asks a follow-up, open their property in Crutan and query their live data. You have an answer in thirty seconds.",
                color: "text-action",
              },
            ].map(({ n, title, body, color }) => (
              <div key={n} className="relative text-center">
                <div
                  className={`w-14 h-14 rounded-2xl bg-bark flex items-center justify-center mx-auto mb-5 text-xl font-bold text-parchment shadow-lg`}
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {n}
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

      {/* ── MULTI-PROPERTY FEATURE ── */}
      <section className="py-24 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-action/10 border border-action/20 text-action text-xs font-semibold mb-6">
                <SwitchCamera className="w-3 h-3" />
                Core differentiator
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-bark mb-5"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                One account.
                <br />
                Unlimited clients.
                <br />
                Completely isolated.
              </h2>
              <p className="text-base text-weathered leading-relaxed mb-6">
                The account model was designed with agencies in mind from day
                one. A single Crutan login manages every client property you
                connect. Switching between clients in the dashboard is
                instantaneous — one click changes the active property and every
                AI response, report, and conversation thread is immediately
                scoped to that client.
              </p>
              <p className="text-base text-weathered leading-relaxed mb-8">
                Client data is isolated at the database level. There is no
                setting to enable this — it is how the product works. A
                question about one client will never surface data from another.
                A briefing for one client will never reference another&apos;s
                numbers. Each client lives in their own context and it never
                bleeds.
              </p>

              <div className="space-y-3">
                {[
                  "Each client has its own business name, display label, and industry context",
                  "Each client's onboarding is independent — KPIs, audience, revenue model",
                  "Each client's briefings, chat history, and reports are stored separately",
                  "Each client can have its own delivery address and schedule",
                  "Add, pause, or remove clients without affecting others",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-loam">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard isolation visual */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-4">
                Each client property is a sealed context
              </p>

              {[
                {
                  name: "Hartwell & Co.",
                  type: "B2B SaaS",
                  kpi: "MQL conversions",
                  briefing: "Lead gen form completions up 12% vs last week. Organic driving 41% of new MQLs…",
                  color: "border-action/30 bg-action/4",
                  dot: "bg-action",
                },
                {
                  name: "The Good Cup",
                  type: "Ecommerce · Coffee",
                  kpi: "Revenue & AOV",
                  briefing: "Thursday strong. Email campaign at 3.8% conv. rate. Mobile checkout worth investigating…",
                  color: "border-saffron/30 bg-saffron/4",
                  dot: "bg-saffron",
                  active: true,
                },
                {
                  name: "Studio Webb",
                  type: "Creative Agency",
                  kpi: "Portfolio page engagement",
                  briefing: "Case study page up 28%. Top referrer: Dribbble. Time on page avg 4m 12s…",
                  color: "border-sage/30 bg-sage/4",
                  dot: "bg-sage",
                },
              ].map(({ name, type, kpi, briefing, color, dot, active }) => (
                <div
                  key={name}
                  className={`relative border rounded-xl p-4 transition-all ${
                    active
                      ? `${color} ring-1 ring-saffron/30`
                      : "border-sand/60 bg-parchment"
                  }`}
                >
                  {active && (
                    <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider text-saffron bg-saffron/10 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
                    <p className="text-sm font-semibold text-bark">{name}</p>
                    <p className="text-xs text-weathered">· {type}</p>
                  </div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-[10px] font-medium text-weathered bg-parchment-surface border border-sand/60 px-2 py-0.5 rounded-full">
                      KPI: {kpi}
                    </span>
                  </div>
                  <p className="text-xs text-loam leading-relaxed line-clamp-2">{briefing}</p>
                </div>
              ))}

              <p className="text-xs text-weathered text-center pt-1">
                Each property has its own context, briefings, and chat history.
                <br />
                None of it is ever shared between clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PER-CLIENT BRIEFINGS ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Two briefings side by side to show differentiation */}
            <div className="space-y-4">
              {/* SaaS briefing */}
              <div className="bg-white border border-sand rounded-2xl shadow-md overflow-hidden">
                <div className="bg-action px-4 py-3 flex items-center gap-2">
                  <Image src="/crutan-symbol-white.svg" alt="Crutan" width={16} height={14} />
                  <div>
                    <p className="text-parchment font-semibold text-[11px]">Monday Briefing — Hartwell &amp; Co.</p>
                    <p className="text-parchment/60 text-[10px]">B2B SaaS · KPI: MQL conversions</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-bark leading-relaxed mb-3">
                    <strong>Strong week for lead gen.</strong> MQL conversions hit 47 — up 12% vs last week.
                    Your &ldquo;Compare plans&rdquo; page is now your top conversion driver, accounting for 31%
                    of all form completions. Organic is your fastest-growing channel for SQLs.
                  </p>
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold text-action uppercase tracking-wider mb-1.5">Action items</p>
                    {[
                      "Promote the Compare page via LinkedIn — it's already converting well from organic.",
                      "Your enterprise form (bottom of /pricing) has a 78% drop-off. Simplify it to 3 fields.",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 text-[11px] text-loam">
                        <span className="text-action font-bold flex-shrink-0">{i + 1}.</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ecommerce briefing */}
              <div className="bg-white border border-sand rounded-2xl shadow-md overflow-hidden">
                <div className="bg-saffron px-4 py-3 flex items-center gap-2">
                  <Image src="/crutan-symbol-white.svg" alt="Crutan" width={16} height={14} />
                  <div>
                    <p className="text-parchment font-semibold text-[11px]">Monday Briefing — The Good Cup</p>
                    <p className="text-parchment/70 text-[10px]">Ecommerce · KPI: Revenue &amp; AOV</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-bark leading-relaxed mb-3">
                    <strong>Best week of the month.</strong> Revenue hit $18,240 — up 23% vs last week.
                    Your new gift bundle drove 34% of that. AOV is up to $67.40 from $54.20. The issue:
                    mobile checkout completion dropped to 61% on Thursday. Worth fixing before the next campaign.
                  </p>
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold text-saffron uppercase tracking-wider mb-1.5">Action items</p>
                    {[
                      "Investigate mobile checkout on iPhone — 61% completion is unusually low. Check the payment step.",
                      "Extend the gift bundle promotion — it's outperforming everything else by 2x.",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 text-[11px] text-loam">
                        <span className="text-saffron font-bold flex-shrink-0">{i + 1}.</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-weathered text-center pt-1">
                Same data patterns. Same AI. Completely different analysis —
                because each client&apos;s context shapes every word.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-semibold mb-6">
                <Mail className="w-3 h-3" />
                Per-client AI briefings
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-bark mb-5"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                The AI knows which
                client it&apos;s writing for.
              </h2>
              <p className="text-base text-weathered leading-relaxed mb-6">
                A briefing for a B2B SaaS company reads completely differently
                from a briefing for an e-commerce brand — even if their
                traffic numbers look identical. The AI uses each client&apos;s
                business context to decide what matters, what to flag, and what
                to recommend.
              </p>
              <p className="text-base text-weathered leading-relaxed mb-8">
                Context is set once during onboarding and permanently attached
                to every response for that client. Briefings reference the
                client&apos;s specific KPIs, revenue model, and audience —
                not generic analytics advice. Your B2B client&apos;s briefing
                talks about lead quality. Your e-commerce client&apos;s
                briefing talks about conversion rate and AOV.
              </p>

              <div className="bg-parchment-surface border border-sand/60 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-3">
                  What each client context includes
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Business name and display label",
                    "Industry and revenue model (SaaS, ecommerce, services, etc.)",
                    "Target audience and customer type",
                    "Primary and secondary KPIs",
                    "Website URL (with scraped page summary)",
                    "Custom delivery schedule and timezone",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-loam">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE CHAT PER CLIENT ── */}
      <section className="py-24 bg-parchment-surface border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-action/10 border border-action/20 text-action text-xs font-semibold mb-6">
                <MessageSquare className="w-3 h-3" />
                Live chat, scoped per client
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-bark mb-5"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Client sends a question.
                <br />
                You have the answer
                <br />
                in thirty seconds.
              </h2>
              <p className="text-base text-weathered leading-relaxed mb-6">
                Crutan&apos;s live chat queries the active client&apos;s GA4
                data and Search Console in real time. Every question is
                answered with that client&apos;s actual numbers — not estimates,
                not averages, not generic advice.
              </p>
              <p className="text-base text-weathered leading-relaxed mb-6">
                Conversation history is stored per client. Every thread is
                saved to the sidebar, organized by property. Pick up any past
                conversation, reference old analyses, or start a new thread —
                all while staying in the context of the client you&apos;re
                looking at.
              </p>
              <p className="text-base text-weathered leading-relaxed">
                The AI is explicitly anchored to the active client. It will
                never reference another client&apos;s data. Switch to a
                different client and the entire interface — history, context,
                and live queries — switches with it.
              </p>
            </div>

            {/* Chat mockup */}
            <div className="bg-white border border-sand rounded-2xl shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-sand/60 bg-parchment">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-action" />
                  <span className="text-xs font-semibold text-bark">Hartwell &amp; Co. — Chat</span>
                </div>
                <span className="text-[10px] text-weathered">3 conversations saved</span>
              </div>
              <div className="p-4 space-y-3 h-72 overflow-y-auto">
                {[
                  {
                    role: "user",
                    text: "Which landing pages drove the most MQLs last month?",
                  },
                  {
                    role: "ai",
                    text: "Looking at Hartwell & Co.'s conversion data for March:\n\n**Top MQL-driving pages:**\n1. /pricing/compare — 31% of all conversions (up from 18% in Feb)\n2. /features/integrations — 24%\n3. /blog/saas-onboarding — 19% (new entry)\n\nThe Compare page jumped significantly — your February pricing change seems to have made it more compelling to buyers actively evaluating. Worth promoting in campaigns.",
                  },
                  {
                    role: "user",
                    text: "What's the form completion rate on /pricing/compare?",
                  },
                  {
                    role: "ai",
                    text: "Form completion on /pricing/compare: **34.2%** — well above your site average of 18.7%.\n\nPage visitors who scroll past 75% convert at 51%. The drop-off is mostly users who leave before reaching the form. A sticky CTA on mobile could push that significantly.",
                  },
                ].map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[88%] rounded-xl px-3 py-2.5 text-[11px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-action text-parchment"
                          : "bg-parchment border border-sand text-loam"
                      }`}
                    >
                      {msg.text.split("\n\n").map((para, j) => (
                        <p key={j} className={j > 0 ? "mt-1.5" : ""}>
                          {para.split(/\*\*(.*?)\*\*/g).map((part, k) =>
                            k % 2 === 1 ? <strong key={k}>{part}</strong> : part
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
                    placeholder="Ask about Hartwell & Co.'s data…"
                    className="flex-1 text-[11px] bg-transparent outline-none text-weathered"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT AGENCIES GET ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Everything you need.
              <br />
              Per client, not per plan.
            </h2>
            <p className="text-base text-weathered max-w-xl mx-auto">
              Every feature is available for every connected client. No
              tier gates. No add-ons. Add a client, configure their context,
              and they immediately have the full capability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Mail,
                title: "Daily AI briefings",
                desc: "Each client receives a morning briefing written from their specific GA4 data and shaped by their business context. Delivered to their inbox or phone.",
                color: "bg-action/10",
                iconColor: "text-action",
              },
              {
                icon: FileText,
                title: "Weekly rollup reports",
                desc: "Every Friday, a 7-day summary covering trends, channel performance, top content, and recommendations tailored to the client's KPIs.",
                color: "bg-saffron/10",
                iconColor: "text-saffron",
              },
              {
                icon: MessageSquare,
                title: "Live GA4 + Search Console chat",
                desc: "Conversational AI with real-time access to the client's GA4 Data API and Google Search Console. Any question, answered with their actual data.",
                color: "bg-action/10",
                iconColor: "text-action",
              },
              {
                icon: Database,
                title: "Conversation history per client",
                desc: "All chat threads are saved and organized by property. Reference past analyses. Pick up where you left off. Never lose a past answer.",
                color: "bg-sage/10",
                iconColor: "text-sage",
              },
              {
                icon: Clock,
                title: "Configurable delivery schedule",
                desc: "Set delivery time, timezone, and channel (email, SMS, or both) independently per client. Each client gets their briefing on their schedule.",
                color: "bg-saffron/10",
                iconColor: "text-saffron",
              },
              {
                icon: Shield,
                title: "Read-only access, always",
                desc: "Crutan requests the minimum read-only OAuth scope for GA4 and Search Console. Nothing is written. Nothing is modified. Safe to connect on behalf of clients.",
                color: "bg-sage/10",
                iconColor: "text-sage",
              },
            ].map(({ icon: Icon, title, desc, color, iconColor }) => (
              <div key={title} className="bg-parchment-surface border border-sand/60 rounded-2xl p-6">
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3
                  className="font-semibold text-bark mb-2 text-base"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-weathered leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI TOOLS ── */}
      <section className="py-24 bg-bark text-parchment relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(61,90,115,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-parchment/50 mb-4">
                Under the hood
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-parchment mb-5"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Your clients&apos; questions,
                <br />
                answered with live data.
              </h2>
              <p className="text-base text-parchment/70 leading-relaxed mb-6">
                The AI doesn&apos;t work from cached summaries. When a question
                comes in, it calls the right tool against the right client&apos;s
                live APIs and generates an answer grounded in current data.
              </p>
              <p className="text-base text-parchment/70 leading-relaxed mb-8">
                Powered by{" "}
                <span className="text-parchment font-medium">Claude Sonnet</span>{" "}
                (Anthropic) for briefings and deep analysis,{" "}
                <span className="text-parchment font-medium">Claude Haiku</span>{" "}
                for fast tool routing and conversational responses. Every
                response is scoped to the active client&apos;s property.
              </p>
              <Link
                href="/ai-analytics"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-parchment/70 hover:text-parchment transition-colors"
              >
                Learn how AI analytics works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {aiTools.map(({ name, description, icon: Icon }) => (
                <div
                  key={name}
                  className="bg-parchment/5 border border-parchment/10 rounded-xl p-4 flex gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-parchment/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-parchment/60" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-parchment/60 mb-0.5">{name}()</p>
                    <p className="text-xs text-parchment/50 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-parchment-surface border-t border-sand/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Questions agencies ask
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group bg-parchment border border-sand/60 rounded-xl"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-bark list-none gap-4">
                  {question}
                  <ChevronRight className="w-4 h-4 text-weathered transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-weathered leading-relaxed">{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-16 border-t border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-weathered mb-6 text-center">
            Related reading
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/ai-analytics",
                label: "What Is AI Analytics?",
                desc: "How AI is replacing manual dashboards",
              },
              {
                href: "/google-analytics-for-small-business",
                label: "GA4 for Non-Technical Teams",
                desc: "The complete guide to understanding GA4",
              },
              {
                href: "/compare",
                label: "Crutan vs Alternatives",
                desc: "Side-by-side comparison vs Looker Studio",
              },
              {
                href: "/pricing",
                label: "Pricing",
                desc: "Free during early access. Simple after.",
              },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group p-4 bg-parchment-surface border border-sand/60 rounded-xl hover:border-action/30 transition-all"
              >
                <p className="text-sm font-semibold text-bark group-hover:text-action transition-colors mb-1">
                  {label}
                </p>
                <p className="text-xs text-weathered">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-bark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(61,90,115,0.4) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/crutan-symbol-white.svg"
            alt="Crutan"
            width={48}
            height={43}
            className="mx-auto mb-8 opacity-80"
          />
          <h2
            className="text-4xl sm:text-5xl font-bold text-parchment mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Connect your first client.
            <br />
            Their briefing arrives tomorrow.
          </h2>
          <p className="text-lg text-parchment/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Free during early access. No credit card. Each client takes under
            five minutes to onboard. The daily reports write themselves after
            that.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-parchment text-bark font-bold rounded-xl hover:bg-parchment-surface transition-all shadow-xl text-base"
            >
              Get started free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-8 py-4 text-parchment/70 font-medium rounded-xl border border-parchment/20 hover:border-parchment/40 hover:text-parchment transition-all text-sm"
            >
              Compare to alternatives
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-parchment/40">
            Read-only GA4 access · Data isolated per client · Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
