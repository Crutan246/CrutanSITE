---
title: "UTM Parameters: The Founder's Guide to Campaign Tracking"
slug: "utm-parameters-guide"
excerpt: "If you're running ads, sending emails, or posting on social media without UTM parameters, you're flying blind. Here's exactly how to use them — and what to do with the data."
date: "2026-03-22"
author: "Austin Diering"
category: "Tutorials"
readTime: "7 min read"
featured: false
---

You launched an email campaign last week. Traffic went up. But when you open GA4, the source shows "direct" — meaning Google has no idea where those visitors came from. You have no way to know if the email drove the spike or if it was something else entirely.

This is the UTM problem, and it's one of the most common and fixable data gaps for growing businesses.

## What UTM Parameters Are

UTM parameters are small pieces of text you append to URLs. They tell GA4 exactly where a click came from — which campaign, which channel, which specific link.

A tagged URL looks like this:

```
https://crutan.com/?utm_source=newsletter&utm_medium=email&utm_campaign=march-launch
```

When someone clicks that link, GA4 records the source (newsletter), medium (email), and campaign name (march-launch) alongside their session. You can then filter every report by those values.

## The Five UTM Parameters

**utm_source** — Where the traffic comes from. Newsletter, google, facebook, twitter, linkedin.

**utm_medium** — The channel type. Email, cpc (paid search), social, banner, affiliate.

**utm_campaign** — The specific campaign name. March-launch, product-update, black-friday.

**utm_content** — Differentiates links within the same campaign. Useful for A/B testing different CTAs in the same email. header-cta vs footer-cta.

**utm_term** — The paid keyword, for search campaigns. Usually auto-populated by Google Ads.

The first three are required for your data to be meaningful. Content and term are optional but useful.

## The Most Common UTM Mistakes

**Not using them consistently.** If half your email links are tagged and half aren't, your data is split. The untagged clicks appear as "direct" and your email numbers look artificially low.

**Using spaces instead of hyphens.** UTM values should use hyphens-between-words. Spaces get URL-encoded into `%20` and make your reports messy.

**Tagging internal links.** UTM parameters are for external traffic only. If you add them to links between your own pages, GA4 will register a new session every time someone clicks, inflating your session counts and breaking attribution.

**Inconsistent capitalization.** GA4 is case-sensitive. `Email`, `email`, and `EMAIL` are three different sources. Pick a convention and stick to it — lowercase everything is the simplest rule.

## Where to Use UTMs

**Every email you send.** This is the highest-priority use case. Email traffic almost always shows up as "direct" without UTMs because email clients don't pass referrer headers.

**Social media posts.** Organic social traffic is also often misattributed. Tag your links so you can actually measure which platform drives conversions.

**Paid ads (manual campaigns).** Google Ads has auto-tagging (gclid) but other platforms require manual UTM tags. Facebook, LinkedIn, and Twitter all need them.

**Partner and affiliate links.** If you're running any partnerships or referral programs, UTM parameters let you track which partners are sending converting traffic.

## Building Your UTM URLs

Google's Campaign URL Builder (search "Google UTM builder") is the simplest tool. You paste in your URL, fill in the parameters, and it generates the tagged URL.

For teams sending lots of emails or running multiple campaigns, a shared spreadsheet of UTM conventions works well. Define your allowed source/medium values upfront so everyone uses the same naming.

## What to Check in GA4

Once your tagged links are live, go to Reports > Acquisition > Traffic Acquisition. Change the primary dimension to "Session campaign" or "Session source / medium." You'll see exactly which campaigns are driving sessions and conversions.

The real insight comes from comparing conversion rate by source. Often you'll find that one channel drives more traffic but another drives more conversions — which should directly inform where you spend your next marketing dollar.

---

UTM parameters take about five minutes to set up and give you attribution data that's otherwise completely missing. If you're investing any time or money in marketing, they're non-negotiable. The discipline is just being consistent: every external link you share should be tagged, every time.
