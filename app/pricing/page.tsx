"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Zap,
  Star,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const faqItems = [
  {
    q: "Is Crutan really free right now?",
    a: "Yes. During early access, every feature is completely free. No credit card, no trial period — just full access. We'll give early access users advance notice and special pricing before any paid plans launch.",
  },
  {
    q: "What happens when pricing launches?",
    a: "Early access users will get a grandfathered discount on whatever plan we launch. We haven't finalized pricing yet — it'll depend on feedback from early users like you.",
  },
  {
    q: "What data does Crutan access?",
    a: "Crutan requests read-only access to your Google Analytics 4 property and optionally your Google Search Console. It never writes to your data, never modifies anything, and never shares your data with other users.",
  },
  {
    q: "Do I need Google Search Console?",
    a: "No — Search Console is optional but recommended. If you have it set up, connecting it unlocks organic search intelligence: keyword rankings, impressions, CTR, and SEO trends inside the chat.",
  },
  {
    q: "How long does setup take?",
    a: "Most users complete onboarding in under 5 minutes. Connect your Google account, answer a few questions about your business, choose your delivery time, and you're done.",
  },
  {
    q: "Can I customize what's in my reports?",
    a: "Yes. The business context you provide during onboarding — your industry, revenue model, audience, KPIs — shapes every single report. The AI knows the difference between an ecommerce business and a B2B SaaS, and writes accordingly. You can update your context anytime from Settings.",
  },
  {
    q: "What if I have multiple GA4 properties?",
    a: "The MVP supports one property per account. Multi-property support is coming in a near-term update.",
  },
  {
    q: "Is there a message limit on the chat?",
    a: "During early access, free tier accounts have a daily message limit to ensure fair usage. The limit resets at midnight UTC and is shown as a progress indicator in the chat interface.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. You can disconnect your Google account and delete your data at any time from Settings. Nothing is locked in.",
  },
];

const earlyFeatures = [
  "Daily AI briefings — delivered to your inbox every morning",
  "Weekly rollup reports every Friday",
  "Live chat with your GA4 and Search Console data",
  "Google Search Console organic search intelligence",
  "Email and SMS delivery options",
  "Custom delivery time and timezone",
  "Business context personalization",
  "Full report history",
  "All future features during early access",
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sand/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-semibold text-bark">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-weathered flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm text-weathered leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron/20 bg-saffron/5 text-saffron text-xs font-semibold mb-6">
            <Star className="w-3 h-3" />
            <span>Early access — free while it lasts</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold text-bark mb-5"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Simple, honest pricing.
            <br />
            <span className="text-action">Free for now.</span>
          </h1>
          <p className="text-lg text-weathered leading-relaxed">
            Crutan is in early access. Every feature is free, no credit card
            required. When we launch paid plans, early access users get first
            notice and grandfathered pricing.
          </p>
        </div>
      </section>

      {/* ── PRICING CARD ─────────────────────────────────────────────────── */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Early access card */}
            <div className="bg-action text-parchment rounded-2xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-4 right-4 px-2 py-0.5 bg-saffron text-parchment text-[10px] font-bold uppercase rounded-full">
                Current
              </div>
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-action-light mb-2">
                  Early Access
                </div>
                <div
                  className="text-5xl font-bold text-parchment mb-1"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  $0
                </div>
                <div className="text-parchment/60 text-sm">
                  Forever free during early access
                </div>
              </div>

              <ul className="space-y-2.5 mb-8">
                {earlyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-saffron-muted flex-shrink-0 mt-0.5" />
                    <span className="text-parchment/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.crutan.com/login"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-parchment text-bark font-bold rounded-xl hover:bg-parchment-surface transition-colors text-sm"
              >
                Get early access free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Coming soon card */}
            <div className="bg-parchment-surface border border-sand rounded-2xl p-8">
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-weathered mb-2">
                  Paid Plans
                </div>
                <div
                  className="text-4xl font-bold text-sand mb-1"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Coming soon
                </div>
                <div className="text-weathered text-sm">
                  Pricing based on usage and team size
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm text-weathered leading-relaxed">
                  Paid plans are in design. We&apos;re figuring out the right
                  model based on how early users engage with the product.
                </p>
                <div className="bg-parchment border border-sand/60 rounded-xl p-4">
                  <p className="text-xs font-semibold text-bark mb-2">
                    What we&apos;re considering:
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Individual plan (~$19–29/mo)",
                      "Team plan with shared reports",
                      "Agency plan for multiple clients",
                      "Annual discount option",
                    ].map((item) => (
                      <li
                        key={item}
                        className="text-xs text-weathered flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-sand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-2 justify-center text-sm text-weathered">
                  <HelpCircle className="w-4 h-4" />
                  <span>
                    Early access users get special pricing. Join now.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Value props row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: Zap,
                title: "No credit card",
                desc: "Start immediately. No billing required.",
              },
              {
                icon: CheckCircle2,
                title: "Full access",
                desc: "Every feature, every day. No feature gates.",
              },
              {
                icon: ArrowRight,
                title: "Grandfathered pricing",
                desc: "Early access users lock in discounts.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-4 bg-parchment border border-sand/60 rounded-xl"
              >
                <Icon className="w-4 h-4 text-action mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-bark mb-0.5">
                    {title}
                  </div>
                  <div className="text-xs text-weathered">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-parchment-surface border-t border-sand/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-bark"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Frequently asked questions
            </h2>
          </div>
          <div className="bg-parchment border border-sand/60 rounded-2xl px-6">
            {faqItems.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-bark mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Start free today.
          </h2>
          <p className="text-weathered mb-8 leading-relaxed">
            No credit card. No commitment. Your first briefing arrives tomorrow
            morning.
          </p>
          <a
            href="https://app.crutan.com/login"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-action text-parchment font-semibold rounded-xl hover:bg-action-light transition-colors shadow-md hover:shadow-lg"
          >
            Get early access
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
