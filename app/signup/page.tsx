import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Lock, Clock, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Early Access — Crutan",
  description:
    "Join Crutan free during early access. Connect your GA4, tell us about your business, and wake up tomorrow to your first AI analytics briefing.",
};

const benefits = [
  "Daily AI briefing delivered to your inbox every morning",
  "Live chat with your actual GA4 and Search Console data",
  "Weekly rollup reports every Friday",
  "Setup in under 5 minutes — no technical knowledge needed",
];

const trustSignals = [
  { icon: Lock, label: "Read-only access. We never modify your data." },
  { icon: Clock, label: "Setup takes under 5 minutes." },
  { icon: Zap, label: "First briefing arrives tomorrow morning." },
];

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      {/* Minimal header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-sand/40">
        <Link href="/" className="flex items-center group">
          <Image
            src="/crutan-logo.svg"
            alt="Crutan"
            width={110}
            height={30}
            priority
          />
        </Link>
        <a
          href="https://app.crutan.com/login"
          className="text-sm text-weathered hover:text-bark transition-colors"
        >
          Already have an account? <span className="text-action font-medium">Sign in →</span>
        </a>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — value prop */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 border border-sage/20 text-sage text-xs font-semibold mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              Free during early access — no credit card required
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-bark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Your analytics
              <br />
              briefing starts
              <br />
              <em className="not-italic text-action">tomorrow morning.</em>
            </h1>

            <p className="text-weathered leading-relaxed mb-8">
              Connect your Google Analytics 4, tell Crutan about your business,
              and wake up tomorrow to a plain-English summary of exactly what
              happened on your site — and what to do about it.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-loam">
                  <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Mini briefing preview */}
            <div className="bg-parchment-surface border border-sand rounded-xl p-4 text-xs">
              <div className="flex items-center gap-1.5 mb-2">
                <Image src="/crutan-symbol-dark-blue.svg" alt="" width={12} height={11} />
                <span className="font-semibold text-bark">Example briefing — 8:03 AM</span>
              </div>
              <p className="text-loam leading-relaxed">
                <strong>Strong day.</strong> Organic traffic up 34% vs your 7-day average.
                A blog post indexed overnight and drove 847 sessions.
                Conversion rate held at 3.2% — your best week yet is in reach.
              </p>
              <div className="mt-2 pt-2 border-t border-sand/60 text-action font-medium">
                → Share the pricing post on LinkedIn — it&apos;s already indexing well
              </div>
            </div>
          </div>

          {/* Right — signup card */}
          <div>
            <div className="bg-white border border-sand rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 pt-8 pb-6">
                <h2
                  className="text-2xl font-bold text-bark mb-1"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Create your account
                </h2>
                <p className="text-sm text-weathered mb-8">
                  Sign in with Google to get started. Takes 60 seconds.
                </p>

                {/* Google OAuth button */}
                <a
                  href="https://app.crutan.com/login"
                  className="flex items-center justify-center gap-3 w-full py-3.5 px-5 bg-bark text-parchment font-semibold rounded-xl hover:bg-bark/90 transition-colors text-sm shadow-sm"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </a>
              </div>

              {/* Trust signals */}
              <div className="px-8 py-5 bg-parchment-surface border-t border-sand/60 space-y-2.5">
                {trustSignals.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 text-xs text-weathered">
                    <Icon className="w-3.5 h-3.5 text-action flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-weathered mt-4">
              By signing up you agree to our{" "}
              <Link href="/terms" className="text-action hover:underline">Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-action hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-4 px-6 border-t border-sand/40 text-center">
        <p className="text-xs text-weathered">
          © {new Date().getFullYear()} Crutan ·{" "}
          <Link href="/" className="hover:text-bark transition-colors">
            Back to home
          </Link>
        </p>
      </footer>
    </div>
  );
}
