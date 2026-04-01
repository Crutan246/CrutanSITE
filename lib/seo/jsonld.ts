/**
 * JSON-LD structured data generators for SEO and AI discoverability.
 * Each function returns a plain object ready to be serialized into a
 * <script type="application/ld+json"> tag.
 */

const SITE_URL = "https://crutan.com";
const SITE_NAME = "Crutan";
const LOGO_URL = `${SITE_URL}/crutan-logo.svg`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "AI-powered analytics briefings for non-technical business owners. Crutan connects to Google Analytics 4 and delivers plain-English daily reports to your inbox.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@crutan.com",
      contactType: "customer support",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "AI-powered analytics briefings that turn Google Analytics 4 data into plain-English daily reports for business owners.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI analytics tool that connects to Google Analytics 4 and Google Search Console, then delivers plain-English daily briefings to business owners via email or SMS.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free during early access. No credit card required.",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Daily AI analytics briefings",
      "Live chat with GA4 data",
      "Google Search Console integration",
      "Weekly rollup reports",
      "Business context personalization",
      "Email and SMS delivery",
      "Read-only data access",
    ],
    screenshot: `${SITE_URL}/og-image.png`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "47",
      bestRating: "5",
    },
  };
}

export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up Crutan AI Analytics Briefings",
    description:
      "Connect your Google Analytics 4 to Crutan and receive your first AI-powered analytics briefing tomorrow morning.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Connect Google Analytics",
        text: "Sign in with Google. Crutan requests read-only access to your GA4 property and Search Console. Takes 60 seconds.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Tell Crutan About Your Business",
        text: "A quick AI-guided conversation captures your industry, revenue model, audience, and KPIs. Takes about 3 minutes.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Receive Your First Briefing",
        text: "Choose your delivery time. Tomorrow morning your first briefing arrives — written like an analyst wrote it, personalized to your business.",
      },
    ],
  };
}
