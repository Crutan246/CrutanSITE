import Link from "next/link";
import Image from "next/image";

const footerColumns: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Compare Tools", href: "/compare" },
    { label: "Changelog", href: "/blog" },
  ],
  Solutions: [
    { label: "Solo Founders", href: "/for/founders" },
    { label: "Vibe Coders", href: "/for/vibe-coders" },
    { label: "Ecommerce", href: "/for/ecommerce" },
    { label: "Agencies", href: "/for/agencies" },
  ],
  Learn: [
    { label: "GA4 for Small Business", href: "/google-analytics-for-small-business" },
    { label: "What Is AI Analytics?", href: "/ai-analytics" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/pricing#faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bark text-parchment/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group mb-4">
              <Image
                src="/crutan-symbol-white.svg"
                alt="Crutan"
                width={28}
                height={25}
                className="opacity-80 transition-opacity group-hover:opacity-100 mr-2.5"
              />
              <span
                className="text-parchment/90 font-medium text-xl tracking-tight transition-colors group-hover:text-parchment"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Crutan
              </span>
            </Link>
            <p className="text-sm text-parchment/60 leading-relaxed max-w-xs mb-6">
              Wake up to clarity, not confusion. AI-powered analytics briefings
              for founders and operators.
            </p>
            <a
              href="https://app.crutan.com/signup"
              className="inline-flex items-center px-5 py-2.5 bg-action text-parchment text-sm font-semibold rounded-lg hover:bg-action-light transition-colors"
            >
              Get early access →
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerColumns).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-parchment/40 mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-parchment/60 hover:text-parchment transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-parchment/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-parchment/40">
            © {new Date().getFullYear()} Crutan. All rights reserved.
          </p>
          <p className="text-xs text-parchment/40">
            Powered by{" "}
            <span className="text-parchment/60">Claude AI (Anthropic)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
