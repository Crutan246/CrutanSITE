---
title: "How to Read Your GA4 Acquisition Report Without Getting Lost"
slug: "ga4-acquisition-report"
excerpt: "The Acquisition report is the most important report in GA4 for most businesses. Here's how to navigate it, what each dimension actually means, and which numbers to pay attention to."
date: "2026-03-12"
author: "Austin Diering"
category: "Tutorials"
readTime: "7 min read"
featured: false
---

If you only look at one GA4 report regularly, it should be the Acquisition report. It answers the most fundamental question in marketing analytics: where is my traffic coming from, and which sources are actually driving results?

But the GA4 Acquisition report has two modes — User Acquisition and Traffic Acquisition — and they're measuring different things. Most people don't realise there's a difference.

## User Acquisition vs. Traffic Acquisition

**User Acquisition** answers: how did each user first find my site? It attributes the user to the channel that drove their very first visit, ever.

**Traffic Acquisition** answers: where did the traffic come from during this time period? It attributes sessions to the channel that drove each individual session.

For most business decisions, **Traffic Acquisition is more useful** — it tells you what's driving visitors right now, regardless of how they originally found you. User Acquisition is valuable for understanding long-term channel performance but can be misleading for short-term decisions.

Go to Reports > Acquisition > Traffic Acquisition. This is your working report.

## Understanding the Dimensions

The default view shows **Session default channel group** — a GA4-classified bucket like "Organic Search," "Direct," "Organic Social," "Paid Search," "Email," "Referral," and "Unassigned."

These buckets are assigned by GA4 based on the source/medium of the session. They're useful for high-level overview but imprecise — "Direct" can include email traffic that wasn't tagged, bookmarks, and traffic from apps that strip referrers.

To get more specific, change the primary dimension:

**Session source / medium** shows individual combinations: google / organic, newsletter / email, facebook.com / referral. This is the most granular useful breakdown.

**Session campaign** shows your UTM campaign names. Only works if you're tagging your marketing links.

**Session source** shows just the source: google, facebook, newsletter, etc.

## The Four Numbers That Matter

For each channel row, focus on these:

**Sessions** — total traffic volume from this source. Trend matters more than absolute number.

**Engagement rate** — what percentage of sessions were engaged (10+ seconds, or a conversion, or 2+ pages). A low engagement rate on a high-traffic channel often means you're attracting the wrong audience.

**Conversions** — how many conversion events were triggered from this source. If you haven't set up conversions in GA4 yet, this column will be empty — fix this first.

**Conversion rate** — conversions divided by sessions. The most important number for comparing channels. High traffic with low conversion rate vs. low traffic with high conversion rate tells you completely different things.

## Reading the Story in the Data

The Acquisition report isn't just a table — it tells a story about where your marketing is working.

**If organic search is your #1 source with a healthy conversion rate**: your content strategy is working and your SEO is rewarding you. Focus on producing more content that matches your high-converting queries.

**If direct is disproportionately high**: either you have strong brand awareness (good), or you have attribution gaps because your email campaigns aren't tagged with UTMs (worth fixing).

**If paid search drives high volume but low conversion rate**: your keyword targeting may be too broad, or your landing page messaging doesn't match the ad copy. A landing page audit is usually the first step.

**If referral traffic converts better than everything else**: find out exactly which sites are sending you those referrals. They're your best partners. Invest in getting more links from them.

## Comparing Periods

The single most useful feature in the Acquisition report is date comparison. Click the date picker in the top right and enable "Compare."

Compare this week to last week. This month to last month. Year over year if you have enough history.

You're looking for: which channels are growing? Which are shrinking? Are any channels converting better or worse than they were?

A channel that used to drive 30% of your conversions and now drives 15% is worth investigating — even if the absolute numbers stayed flat, something changed.

## Common Mistakes

**Trusting "Unassigned" traffic.** Unassigned sessions are ones GA4 couldn't classify. This often happens when UTM parameters are set up incorrectly, when traffic comes from apps, or when the session has unusual properties. High unassigned traffic suggests a tracking issue.

**Ignoring engagement rate differences by channel.** If you're making budget decisions based on session volume alone, you may be over-investing in channels that drive bouncing traffic and under-investing in channels that drive buyers.

**Comparing numbers across different attribution windows.** GA4's default is data-driven attribution. If you change this in Admin, your historical numbers will look different from your current numbers.

---

The Acquisition report is the map of your marketing. Spend 5 minutes in it each week and you'll quickly build an intuition for what normal looks like — and you'll notice when something shifts before it becomes a crisis or before a missed opportunity passes.
