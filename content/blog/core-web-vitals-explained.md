---
title: "Core Web Vitals Explained: What They Are and Why They Affect Your Rankings"
slug: "core-web-vitals-explained"
excerpt: "Google uses page experience signals — including Core Web Vitals — as ranking factors. Here's what LCP, INP, and CLS actually measure, what good scores look like, and how to diagnose problems."
date: "2026-02-25"
author: "Austin Diering"
category: "SEO"
readTime: "8 min read"
featured: false
---

Core Web Vitals are Google's attempt to quantify "is this website a good experience?" and use the answer as a ranking signal. Since 2021, they've been a confirmed part of Google's Page Experience ranking criteria — meaning poor scores can hold your rankings back even if your content is excellent.

The good news: you don't need to be a developer to understand what they measure. You do need to know what scores to aim for and where to find them.

## The Three Core Web Vitals

### LCP — Largest Contentful Paint

**What it measures:** How long it takes for the largest visible element on the page to load and render. This is usually a hero image, a large heading, or a featured video.

**Why it matters:** LCP is the metric most closely correlated with how fast a page "feels" to users. When the largest visible element loads, the user perceives the page as ready, even if background processes are still running.

**Good score:** Under 2.5 seconds.
**Needs improvement:** 2.5–4.0 seconds.
**Poor:** Over 4.0 seconds.

**Common culprits:** Unoptimised hero images, slow server response times, render-blocking resources (JavaScript and CSS that delay page rendering), and missing image preloading.

### INP — Interaction to Next Paint

**What it measures:** How quickly the page responds to user input — clicks, taps, keyboard interactions. It replaced FID (First Input Delay) in 2024 and measures overall responsiveness across the full page lifetime, not just the first interaction.

**Why it matters:** A page that loads quickly but lags when you try to use it is still a bad experience. INP captures this.

**Good score:** Under 200 milliseconds.
**Needs improvement:** 200–500 milliseconds.
**Poor:** Over 500 milliseconds.

**Common culprits:** Heavy JavaScript execution, large event handlers, blocking the main thread with complex rendering logic.

### CLS — Cumulative Layout Shift

**What it measures:** How much the visible content unexpectedly shifts around as the page loads. If you've ever been reading text and had an ad load above it, pushing everything down — that's a layout shift.

**Why it matters:** Layout shifts cause mis-taps, loss of reading position, and general frustration. They're measurable and fixable.

**Good score:** Under 0.1.
**Needs improvement:** 0.1–0.25.
**Poor:** Over 0.25.

**Common culprits:** Images without explicit dimensions, embeds that inject dynamic content (ads, chat widgets, iframes), and fonts that change layout as they load.

## Where to Check Your Scores

**Google Search Console > Core Web Vitals report:** This is the most important source because it shows your real-user data (called "field data") from actual visitors, not simulated tests. It's also where Google gets the data it uses for rankings.

**PageSpeed Insights (pagespeed.web.dev):** Tests a single URL and shows both field data (if available) and lab data. Lab data is a simulated test that gives you diagnostic information even when field data is sparse.

**Chrome DevTools > Lighthouse:** Run a local Lighthouse audit for any page in Chrome. Gives detailed diagnostics and recommendations. Good for developers investigating specific issues.

## Field Data vs. Lab Data

This distinction matters a lot:

**Field data** comes from real users visiting your site. It's collected by Chrome via the Chrome User Experience Report (CrUX). It's the most accurate reflection of your actual user experience — but it requires enough traffic to have a statistically meaningful sample.

**Lab data** is a simulated test run in controlled conditions. It's faster to get and more detailed in its diagnostics, but it won't always match your real-user experience (especially if your users have slower connections or older devices than the test conditions assume).

Google uses **field data** for ranking. If you only have lab data (because your site doesn't have enough traffic to populate CrUX), Google may use nearby pages or similar pages to estimate your Core Web Vitals.

## Diagnosing Specific Issues

**Poor LCP from images:** Add `loading="eager"` and `fetchpriority="high"` to your hero image. Make sure the image is served in a modern format (WebP or AVIF) and at the right resolution for the device.

**Poor LCP from slow server:** This is usually TTFB (Time to First Byte). Consider a CDN, better hosting, or caching. Google considers TTFB under 800ms acceptable; under 200ms is good.

**Poor INP:** Profile your JavaScript execution in Chrome DevTools' Performance tab. Long tasks (anything over 50ms) are the primary cause of poor INP. Look for unnecessary JavaScript running on page interaction events.

**Poor CLS:** Always specify width and height attributes on images and iframes. Use `font-display: swap` or `font-display: optional` for web fonts. Reserve space for ads and embeds before they load.

## The Business Case for Fixing Core Web Vitals

Google's own research suggests a direct relationship between page speed and conversion rates. A 100ms improvement in LCP can improve conversion rates by up to 1%. For a site doing meaningful revenue, that's a straightforward ROI calculation.

Beyond rankings, real users actually leave slower sites. Google's research shows that as page load time goes from 1s to 3s, the probability of bounce increases by 32%. From 1s to 5s, it's 90%.

You don't need to chase perfect scores. But if your Core Web Vitals are in the "poor" range — especially LCP — they're costing you ranking positions and conversions. The fixes are usually technical but rarely require a full site rebuild. A few image optimisations, removing a couple of render-blocking scripts, and fixing your largest layout shifts will often move scores from poor to good.

---

Core Web Vitals are the bridge between technical performance and business outcomes. They're not abstract engineering metrics — they measure the same things your users are experiencing every time they load a page. When you improve them, you improve rankings, reduce bounce, and increase conversion. When you ignore them, your competitors who don't will quietly outrank you over time.
