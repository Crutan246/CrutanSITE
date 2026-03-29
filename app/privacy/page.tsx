import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />
      <section className="pt-28 pb-20 sm:pt-36">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-weathered hover:text-bark transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1
            className="text-4xl font-bold text-bark mb-3"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-weathered mb-12">
            Last updated: March 2026
          </p>

          <div className="prose-crutan space-y-8">
            {[
              {
                title: "What We Collect",
                body: "Crutan collects your Google account information (name, email, profile photo) when you sign in via Google OAuth. We store read-only access tokens to query your Google Analytics 4 and Google Search Console data on your behalf. We also store the business context you provide during onboarding, your delivery preferences, generated report content, and chat message history.",
              },
              {
                title: "How We Use Your Data",
                body: "We use your data exclusively to provide the Crutan service — generating your daily and weekly analytics briefings, answering your chat questions, and delivering reports to the email or phone number you specify. We do not sell your data, share it with other users, or use it to train AI models.",
              },
              {
                title: "Google Data Access",
                body: "Crutan requests read-only access to your Google Analytics 4 property and optionally your Google Search Console properties. We request the minimum scopes necessary (analytics.readonly). We never modify your data, create events, or change your Google Analytics configuration.",
              },
              {
                title: "Data Storage",
                body: "Your data is stored in a PostgreSQL database hosted by Supabase with row-level security — every database query is scoped to your user ID. Your data is never accessible to other Crutan users. Access tokens are stored encrypted.",
              },
              {
                title: "AI Processing",
                body: "Report generation and chat responses are powered by Claude (Anthropic). Your analytics data and business context are sent to Anthropic's API for processing. Anthropic's privacy policy governs how they handle API data. Your data is not used to train Anthropic's models.",
              },
              {
                title: "Email and SMS",
                body: "If you opt in to email delivery, your reports are sent via Resend. If you opt in to SMS, they are sent via Twilio. Opt-in consent is recorded with a timestamp. You can disable delivery at any time from Settings.",
              },
              {
                title: "Your Rights",
                body: "You can disconnect your Google account, update your business context, and change delivery preferences at any time from the Settings page. You can request complete deletion of your account and all associated data by contacting us at privacy@crutan.com. Deletion is processed within 30 days.",
              },
              {
                title: "Contact",
                body: "Questions about this policy? Contact us at privacy@crutan.com.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2
                  className="text-xl font-semibold text-bark mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {section.title}
                </h2>
                <p className="text-loam leading-relaxed text-sm">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
