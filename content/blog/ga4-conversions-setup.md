---
title: "How to Set Up Conversions in GA4 (The Right Way)"
slug: "ga4-conversions-setup"
excerpt: "Conversion tracking in GA4 works differently than Universal Analytics. Here's exactly how to set it up — from basic goal completion to ecommerce purchases — so your reports actually mean something."
date: "2026-03-07"
author: "Austin Diering"
category: "Tutorials"
readTime: "8 min read"
featured: false
---

If you upgraded from Universal Analytics to GA4 and your conversion numbers look wrong — either zero, or much lower than you expected — you're almost certainly missing this step.

In Universal Analytics, you configured "Goals" in the Admin panel. They tracked automatically after that. In GA4, the concept of goals is gone. Conversions are just events that you've explicitly marked as conversion events. Nothing is tracked as a conversion until you flag it.

Here's how to do it properly.

## What Counts as a Conversion?

Before the technical setup, get clear on what you're tracking. A conversion is any action on your site that directly serves your business goals.

For **ecommerce**, this is typically:
- `purchase` — someone completes a transaction
- `add_to_cart` — someone shows clear purchase intent
- `begin_checkout` — someone starts the checkout flow

For **lead generation**, this is typically:
- `form_submit` or `generate_lead` — someone completes a contact form
- `schedule_demo` — someone books a call
- `email_signup` — someone joins your list

For **content sites**, this might be:
- `scroll` at 75% depth — someone reads most of an article
- `video_complete` — someone watches to the end
- `newsletter_subscribe` — someone opts in

Pick 1-3. More than that and your conversion data gets diluted.

## Method 1: Mark an Existing Event as a Conversion

If GA4 is already tracking the event you want — for example, `purchase` is tracked automatically if you have Enhanced Ecommerce set up — you just need to flag it.

1. Go to **Admin** (gear icon, bottom left)
2. Under "Property", click **Events**
3. Find the event you want to mark (e.g., `purchase`)
4. Toggle on **"Mark as conversion"**

That's it. Within 24-48 hours, this event will start appearing in your conversion reports.

## Method 2: Create a New Event

If the thing you want to track isn't already an event in GA4, you need to create one. There are two ways:

**Option A: Create event in GA4 (no code)**

If you want to track a specific page visit (like a thank-you page) as a conversion:

1. Go to **Admin > Events**
2. Click **"Create event"**
3. Name your event (e.g., `contact_form_complete`)
4. Set the matching condition: `event_name equals page_view` + `page_location contains /thank-you`
5. Save
6. Then mark the new event as a conversion

**Option B: Push a custom event from your code or tag manager**

If you have a developer or use Google Tag Manager, you can fire a custom event on any action:

```javascript
// Google Analytics gtag.js
gtag('event', 'generate_lead', {
  'form_id': 'contact_main',
  'form_destination': '/contact'
});
```

In Tag Manager, create a new GA4 Event tag that fires on the trigger you want (form submission, button click, etc.).

## Method 3: Import Goals from Universal Analytics

If you're migrating from UA and had goals configured there, you can use the GA4 Setup Assistant to import them. This is the fastest path if you have an established goal setup.

Go to **Admin > Setup Assistant** and look for the "Import goals from Universal Analytics" option.

Note: not all goal types translate cleanly. Page-based goals work well. Engagement-based goals (like "10 pages per session") need to be rebuilt as custom events.

## Verifying Your Setup

After marking events as conversions, wait 24-48 hours and then verify:

1. Go to **Reports > Acquisition > Traffic Acquisition**
2. The "Conversions" column should now show numbers
3. Go to **Reports > Engagement > Conversions** for a dedicated conversions view

If you're seeing data, you're set. If conversions still show zero, check:
- Did you toggle the event at the property level (not the data stream level)?
- Is the underlying event actually firing? (Check Realtime > Event count by event name)
- Has it been 48 hours? GA4 processes data with a lag.

## What to Do With Your Conversion Data

Once conversions are tracking, your GA4 reports unlock significantly. You can now see:

- **Which channels convert best** — not just which drive traffic, but which drive actions
- **Which pages lead to conversions** — your high-intent content and your funnel gaps
- **Conversion rate by source** — organic vs. paid vs. email vs. social
- **Conversion trends over time** — is your rate improving or declining?

These are the questions that connect analytics to decisions. Without conversion tracking, you're just counting visitors. With it, you're understanding whether your site is actually working.

---

If you'd rather have all of this surfaced automatically every morning — with context, comparisons, and plain-English analysis — that's exactly what Crutan is built for. Connect your GA4, and your daily briefing will include conversion performance, trend analysis, and specific action items, delivered before you open your laptop.
