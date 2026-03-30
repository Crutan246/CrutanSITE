---
title: "How to Track Email Newsletter Performance in GA4"
slug: "email-analytics-ga4"
excerpt: "Open rates and click rates are vanity metrics if you don't know what subscribers do after they land on your site. Here's how to close the loop between your email platform and GA4."
date: "2026-02-28"
author: "Austin Diering"
category: "Tutorials"
readTime: "6 min read"
featured: false
---

Every email marketing platform will show you open rates, click rates, and unsubscribe rates. What they won't show you is what happened after the click: did those subscribers actually sign up? Buy something? Read three more blog posts?

Connecting your email to GA4 closes that loop. Here's exactly how to do it.

## Step 1: Tag Every Link in Every Email

The foundation is UTM parameters on every link you include in emails. Without them, GA4 assigns email traffic to "direct" — indistinguishable from people who typed your URL.

A standard email UTM setup looks like this:

- **utm_source**: your newsletter name (e.g., `crutan-weekly`)
- **utm_medium**: `email`
- **utm_campaign**: the specific email (e.g., `march-product-update`)
- **utm_content**: the specific link, if there are multiple (e.g., `hero-cta`, `footer-link`)

Most email platforms (Mailchimp, ConvertKit, Klaviyo, Beehiiv) have UTM auto-tagging built in. Turn it on, but also set your own campaign names manually — the defaults are usually meaningless strings.

## Step 2: Set Up Email-Specific Conversions

In GA4, mark your key conversion events (signups, purchases, demo requests) as conversions if you haven't already. Go to Admin > Events and toggle the conversion switch.

Once you've done this, you can see conversions by email campaign in the Traffic Acquisition report — which campaigns are driving revenue-relevant actions, not just clicks.

## Step 3: Analysing Email Performance in GA4

Go to Reports > Acquisition > Traffic Acquisition. Change the primary dimension to **Session source / medium**. Look for rows showing `your-newsletter / email` or whatever source/medium you used.

For deeper analysis, change the dimension to **Session campaign**. Now you can see each individual email campaign's downstream performance:

- How many sessions did this email drive?
- What was the engagement rate of those sessions?
- How many conversions?
- What was the conversion rate compared to your overall average?

An email that drove 400 clicks but a 0.5% conversion rate is performing very differently from one that drove 80 clicks but a 6% conversion rate. The second email, despite lower volume, was sent to a more aligned audience or had a clearer offer.

## Step 4: Build an Email Explore Report

For a dedicated email performance view, go to Explore > Blank and build a custom report:

**Rows**: Session campaign (filter to only campaigns where medium = email)

**Columns**: Sessions, Engagement rate, Conversions, Conversion rate, Average engagement time

**Filters**: Filter to sessions where medium exactly matches "email"

Save this exploration. You now have a dedicated email analytics dashboard inside GA4 that shows every campaign's downstream performance in one view.

## Tracking Individual Link Performance Within Emails

If your emails contain multiple links (different CTAs, sidebar links, social links), use `utm_content` to distinguish them.

For example, if your email has a hero CTA, a product feature link, and a footer CTA, tag them:
- `utm_content=hero-cta`
- `utm_content=feature-link`
- `utm_content=footer-cta`

In GA4, filter Traffic Acquisition by your campaign name and add a secondary dimension of **Session manual ad content** to see which specific link in the email drove each conversion.

This is the data that tells you where to put your most important offer in future emails — and it's only available if you tag your links.

## What to Do With High Open Rate, Low Site Engagement

If your email platform shows strong open rates and click rates but GA4 shows low engagement (short session durations, low engagement rate), the problem is usually one of three things:

**The landing page didn't match the promise.** The email described something specific; the link went to a generic page. The visitor looked around, didn't find what they expected, and left.

**The content wasn't scannable enough for this audience.** Email subscribers are often in a reading mode when they click through. A landing page heavy on images and sparse on text can underperform for email audiences.

**You're comparing to the wrong baseline.** Email engagement is often lower than organic search because subscribers click out of curiosity or loyalty, not active search intent. Compare email performance to your email historical average, not to organic search.

## Integrating Email Revenue Data

If you're an ecommerce business, take this one step further: send revenue data to GA4 via purchase events. When you combine UTM-tagged email traffic with transaction data, you can see the exact revenue attributable to each email campaign.

This is where email marketing goes from "soft" (opens and clicks) to "hard" (revenue per email sent) — the number that actually justifies investment in the channel.

---

Email analytics is one of the highest-ROI improvements you can make to your analytics setup, and it requires nothing more than consistent UTM tagging and a conversion in GA4. Once it's in place, you'll have data that your email platform's dashboard can never show you: what subscribers do after they click, which campaigns drive real outcomes, and which emails are being clicked by the wrong audience. That's the information you need to actually improve your email program.
