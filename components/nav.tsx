"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { track } from "@/lib/gtm";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const solutionsLinks = [
  {
    label: "Solo Founders",
    href: "/for/founders",
    description: "Daily briefings for one-person businesses",
  },
  {
    label: "Vibe Coders",
    href: "/for/vibe-coders",
    description: "Know if your shipped app is gaining traction",
  },
  {
    label: "Ecommerce",
    href: "/for/ecommerce",
    description: "Revenue, conversion, and channel clarity",
  },
  {
    label: "Agencies",
    href: "/agency",
    description: "One login, every client, zero manual reports",
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
                onClick={() => track({ event: "nav_click", link_text: link.label, link_href: link.href })}
                className="px-3 py-2 text-sm font-medium text-weathered hover:text-bark rounded-lg hover:bg-parchment-surface transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}

            {/* Solutions dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-weathered hover:text-bark rounded-lg hover:bg-parchment-surface transition-all duration-150"
              >
                Solutions
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-parchment border border-sand rounded-xl shadow-xl py-2 z-50">
                  <div className="px-3 pb-2 mb-1 border-b border-sand/60">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-weathered">
                      Built for every team
                    </p>
                  </div>
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setSolutionsOpen(false);
                        track({ event: "nav_click", link_text: link.label, link_href: link.href });
                      }}
                      className="flex flex-col px-3 py-2.5 hover:bg-parchment-surface rounded-lg mx-1 transition-colors group"
                    >
                      <span className="text-sm font-medium text-bark group-hover:text-action transition-colors">
                        {link.label}
                      </span>
                      <span className="text-xs text-weathered mt-0.5">{link.description}</span>
                    </Link>
                  ))}
                  <div className="px-3 pt-2 mt-1 border-t border-sand/60">
                    <Link
                      href="/compare"
                      onClick={() => {
                        setSolutionsOpen(false);
                        track({ event: "nav_click", link_text: "Compare tools", link_href: "/compare" });
                      }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-action hover:text-action-light transition-colors py-1"
                    >
                      Compare Crutan vs alternatives →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.crutan.com/login"
              onClick={() => track({ event: "sign_in_click", location: "nav_desktop" })}
              className="text-sm font-medium text-action hover:text-action-light transition-colors"
            >
              Sign in
            </a>
            <a
              href="/signup"
              onClick={() => track({ event: "cta_click", cta_text: "Get early access", cta_location: "nav_desktop", destination: "/signup" })}
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
                  onClick={() => { setMenuOpen(false); track({ event: "nav_click", link_text: link.label, link_href: link.href }); }}
                  className="px-4 py-3 text-sm font-medium text-weathered hover:text-bark hover:bg-parchment-surface rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Solutions accordion */}
              <button
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-weathered hover:text-bark hover:bg-parchment-surface rounded-lg transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSolutionsOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l-2 border-sand/60 pl-3">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => { setMenuOpen(false); setMobileSolutionsOpen(false); track({ event: "nav_click", link_text: link.label, link_href: link.href }); }}
                      className="py-2 text-sm font-medium text-weathered hover:text-bark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/compare"
                    onClick={() => { setMenuOpen(false); setMobileSolutionsOpen(false); track({ event: "nav_click", link_text: "Compare tools", link_href: "/compare" }); }}
                    className="py-2 text-sm font-medium text-action hover:text-action-light transition-colors"
                  >
                    Compare tools →
                  </Link>
                </div>
              )}

              <div className="mt-2 pt-4 border-t border-sand/40 flex flex-col gap-2 px-4">
                <a
                  href="https://app.crutan.com/login"
                  onClick={() => track({ event: "sign_in_click", location: "nav_mobile" })}
                  className="text-center py-3 text-sm font-medium text-action border border-action/30 rounded-lg hover:bg-action/5 transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="/signup"
                  onClick={() => track({ event: "cta_click", cta_text: "Get early access", cta_location: "nav_mobile", destination: "/signup" })}
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
