---
title: "Sessions, Users, Active Users: What GA4 Is Actually Telling You"
slug: "ga4-sessions-users-explained"
excerpt: "GA4 uses 'users' and 'active users' interchangeably in some reports, sessions mean something slightly different from before, and new vs. returning users got complicated. Here's what you actually need to know."
date: "2026-03-19"
author: "Austin Diering"
category: "Analytics"
readTime: "6 min read"
featured: false
---

Open any GA4 report and you'll see numbers labeled "users," "active users," "new users," and "sessions." They all sound like they should be straightforward. They're not — at least not if you're coming from Universal Analytics or if you care about precision.

Here's what each term actually means and how to use them without confusing yourself.

## Users vs. Active Users

In GA4, "users" in most reports actually means **active users** — people who had an engaged session (10+ seconds, a conversion, or 2+ pageviews) or triggered any event with the session_start or first_visit parameter.

In contrast, **total users** counts everyone who had any event triggered, even a single-pixel load that lasted zero seconds.

This distinction matters in Explore reports where you can choose between the two. For most business purposes, active users is the more meaningful number — it filters out bot traffic and immediate bounces.

**Practical takeaway:** When you see "users" in a default GA4 report, it means active users. When you're building an Explore report, be intentional about which metric you choose.

## What a "Session" Means in GA4

A session starts when a user arrives on your site and ends after 30 minutes of inactivity (or at midnight). This is similar to Universal Analytics.

The key difference: in GA4, a session doesn't restart if a user's traffic source changes mid-visit. In UA, if someone came from Google, then clicked a direct link, that would start a new session. In GA4, it doesn't. This makes GA4 session counts slightly lower than UA counts for the same traffic.

Sessions also don't carry attribution. Each individual event carries its own source information, which is more accurate but also more complex to analyze.

## New Users vs. Returning Users

GA4 identifies new vs. returning users based on a first_visit event. The first time GA4 sees a device/browser combination, it fires first_visit. Every subsequent visit is a returning user.

The complication: GA4 uses device-based tracking, not logged-in user tracking (unless you implement User-ID). Someone who visits on their phone and then on their laptop is counted as two new users.

**What this means practically:** Your "new user" numbers are probably higher than the true count of first-time visitors, because cross-device visits get counted multiple times. Don't obsess over the exact number. Use it as a relative measure — is new user acquisition trending up or down week over week?

## Engaged Sessions (and Why Engagement Rate Replaced Bounce Rate)

GA4 replaced bounce rate with **engagement rate** — the percentage of sessions that were "engaged." An engaged session is one that:

- Lasted more than 10 seconds, OR
- Had a conversion event, OR
- Had 2 or more pageviews

An **engaged session rate** of 60% means 60% of your sessions involved some meaningful interaction. The inverse — 40% — is your "bounce rate equivalent."

Is 60% good? It depends entirely on your content and traffic sources. Blog traffic from social media tends to have lower engagement. Direct traffic from people who know your brand tends to be higher. The number matters less than the trend.

## The Metric That Actually Predicts Revenue: Engaged Sessions Per User

This is an underused metric. It tells you how many engaged sessions each user is having on average.

A high number (2+) suggests your content or product is compelling enough to bring people back or keep them exploring. A low number (close to 1) means most of your users see one thing and leave.

You can find this in the default Overview report. Watch it over time — it's one of the better leading indicators of audience quality.

## Sessions vs. Event Count

One more distinction worth knowing: **event count** is the total number of events fired across all sessions. Because GA4 tracks everything as events (pageviews, scrolls, clicks, form interactions), your event count will always be much higher than your session count.

Don't use event count to measure traffic volume. Use sessions or active users. Event count is useful for specific analyses — "how many times did users click this button?" — not as a general traffic health metric.

---

The shift from UA's session-centric model to GA4's event-centric model was jarring for a lot of people. But once you understand what GA4 is measuring, the data is actually richer. Sessions and users are your volume metrics. Engagement rate tells you quality. Engaged sessions per user tells you stickiness. Together, they give you a complete picture of what's happening — without needing to click through a dozen reports.
