"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md shadow-sm border-b border-sand/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/crutan-logo.svg"
              alt="Crutan"
              width={120}
              height={33}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-weathered hover:text-bark rounded-lg hover:bg-parchment-surface transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.crutan.com/login"
              className="text-sm font-medium text-action hover:text-action-light transition-colors"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-action text-parchment text-sm font-semibold rounded-lg hover:bg-action-light transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get early access
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-bark hover:bg-parchment-surface transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-sand/40 bg-parchment py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-weathered hover:text-bark hover:bg-parchment-surface rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-4 border-t border-sand/40 flex flex-col gap-2 px-4">
                <a
                  href="https://app.crutan.com/login"
                  className="text-center py-3 text-sm font-medium text-action border border-action/30 rounded-lg hover:bg-action/5 transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="/signup"
                  className="flex items-center justify-center gap-1.5 py-3 bg-action text-parchment text-sm font-semibold rounded-lg hover:bg-action-light transition-colors"
                >
                  Get early access
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
