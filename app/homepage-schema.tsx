import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";

const homepageFaqs = [
  {
    question: "What is Crutan?",
    answer:
      "Crutan is an AI analytics tool that connects to your Google Analytics 4 account and delivers a plain-English daily briefing to your inbox every morning. It tells you what happened on your website, what it means, and what to do — without requiring you to open a dashboard.",
  },
  {
    question: "How does Crutan work?",
    answer:
      "You sign in with Google and grant Crutan read-only access to your GA4 property. Crutan analyzes your data overnight and generates a personalized briefing that arrives by email or SMS at your chosen time. You can also chat with your data in real time.",
  },
  {
    question: "Is Crutan free?",
    answer:
      "Yes. Crutan is currently in free early access. All features are available at no cost with no credit card required. Early access users will receive grandfathered pricing when paid plans launch.",
  },
  {
    question: "Does Crutan replace Google Analytics?",
    answer:
      "No. Crutan reads your Google Analytics 4 data and translates it into plain-English insights. You keep GA4 as your data source — Crutan is the intelligence layer that makes it useful without requiring dashboard expertise.",
  },
  {
    question: "Is my data safe with Crutan?",
    answer:
      "Crutan requests read-only access to your GA4 data. It never modifies your analytics, never shares data with other users, and never uses your data to train AI models. You can revoke access at any time.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most users complete setup in under 5 minutes. Sign in with Google, answer a few questions about your business, choose your delivery time, and you're done. Your first briefing arrives the next morning.",
  },
  {
    question: "What does a Crutan briefing include?",
    answer:
      "Each briefing includes a TL;DR summary, key metrics (sessions, users, conversions, bounce rate), notable changes and anomalies, traffic source breakdown, and 1-3 specific action items for the day.",
  },
  {
    question: "Can I ask Crutan questions about my data?",
    answer:
      "Yes. Crutan includes a live chat feature where you can ask questions in plain English — like 'Why did my traffic drop last week?' or 'What's my best converting page?' — and get answers grounded in your actual GA4 data.",
  },
];

export function HomepageSchema() {
  return (
    <>
      <JsonLd data={howToJsonLd()} />
      <JsonLd data={faqJsonLd(homepageFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://crutan.com" },
        ])}
      />
    </>
  );
}
