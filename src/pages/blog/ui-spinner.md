---
layout: "../../layouts/BlogSingle.astro"
pageTitle: "Smarter Weather Search: Adding a Spinner and Debounced API Call"
description: Improving My Weather Lookup App UX with a Spinner and Debounced API Calls
pubDate: 2025-07-05
updatedDate:
draft: false
featuredImage:
  url: "/images/blog/ui-spinner-1280.png"
  alt: "Screenshot of the user interface for WeatherVane"
tags: ["ux", "javascript", "api"]
---

## Little Details Make a Big Difference

In my weather lookup app, I recently added a small but meaningful feature: a loading spinner that appears after the user stops typing, giving them a short delay before an API call is made.

## The User wasn't Being Given Sufficient Feedback

While testing my weather lookup app, I noticed something: as soon as the user began typing, API calls fired off immediately—sometimes multiple times for a single query. This wasn’t just inefficient; it could feel sluggish or erratic for users, especially if they typed slowly or made corrections. I also realized that if a city wasn't found, I didn't give the user any feedback.

## I Wanted to Improve User Feedback and API Efficiency

I wanted to make the experience smoother and more deliberate. Specifically, I needed:

- To avoid unnecessary API calls while the user was typing.
- To show visual feedback after the user pauses typing, so they know something is happening.
- Feedback to the user if the search failed.
- To ensure the interaction felt responsive.

## Debounce Input and Add a Spinner

I implemented a debounce function with a short delay (~1s). This meant the API call would only be made after the user stopped typing for that duration.

Here’s what I did:

Debounced the API request using a timeout that resets every time the input changes.

Added a loading spinner that appears when the debounce timer starts and disappears once the data loads.

## Smoother UX and Better Performance

This small change made a noticeable difference:

API calls dropped significantly, improving performance and reducing server load.

The spinner added a visual cue that felt intuitive and responsive.

The whole input flow felt more polished and professional.

Users now feel more in control, and the app no longer overloads the backend with every keystroke.

## Conclusion

Improving user experience isn’t always about big changes—sometimes, a small debounce and a thoughtful loading indicator go a long way. This update helped the weather lookup app feel smoother, faster, and more human.

If you're building a search or lookup feature, I highly recommend adding debounced API calls with a subtle spinner. It's a small touch that makes a big impact.
