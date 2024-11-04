---
layout: "../../layouts/BlogSingle.astro"
pageTitle: "Revamping My GitHub User Lookup App: A Dive into Promises, TypeScript and Svelte"
description: How I Enhanced Functionality and Performance with Modern Web Development Techniques
pubDate: 2024-07-04
updatedDate:
draft: false
featuredImage:
  url: "/images/blog/github-user-lookup-interface-662w.jpg"
  alt: "GitHub user search UI"
tags: ["svelte", "promises", "javascript", "typescript"]
---

## Realizing the Limitations of My GitHub Lookup App

My original GitHub lookup app achieved its basic purpose: you’d enter a username, hit search, and receive information on that user. However, after using it a while, I found limitations that affected its usability. I envisioned turning it into a dynamic search tool—one that was not only responsive but could handle more complex interactions and return richer information.

## Transforming the App into a More Robust Search Tool

My goal was to enhance this app’s functionality, making it a full-fledged, user-friendly search tool. This meant reducing unnecessary API calls, refining the returned data for more detail, and ensuring a smooth user experience without overloading the interface.

## Implementing Advanced Techniques with Svelte, TypeScript, and Promises

When I began implementing these changes, I faced several challenges that pushed me to explore new techniques in Svelte, TypeScript, and JavaScript.

- Debounced Search to Optimize Performance: To prevent the app from triggering a search on every keystroke, I implemented a debounce function that waits for the user to stop typing for 1 second before sending a request. This preserves API limits and improves performance.
- Enhanced Data Fetching with Promises: The GitHub API’s search endpoint doesn’t return extensive user data by default, so I needed to find a way to retrieve more. Using Promise.all, I queried the users’ endpoint in sequence to fetch additional details for each returned account. This asynchronous approach allowed me to compile enriched user profiles without compromising performance. I also appended an extra_data property to each result for easy access to these details.
- Dynamic UI with Svelte for a Better User Experience: Svelte’s built-in event handling came in handy for managing overlays and other interactive elements. Setting up click events and overlays was simpler and kept the UI clean.

## A More Efficient and User-Friendly GitHub Lookup Tool

The revamped app performs much better, providing users with a smooth search experience and detailed user profiles, all in one query. This improvement saves API resources and makes it easier for users to differentiate between profiles when searching.

### Key Takeaways

- **Debouncing API calls:** Limiting requests to after the user has stopped typing can significantly improve performance and user experience.
- **Promises for Multiple API Calls:** Using `Promise.all` for sequential API requests allows you to aggregate data effectively while maintaining efficiency.
- **Event Handling in Svelte:** Built-in events make it easy to create dynamic interfaces without adding extra libraries.

### Check Out the GitHub Lookup Tool:

- [GitHub Lookup Tool](https://uilab.netlify.app/06-user-profile)

### Useful links:

- [Wait for User to Stop Typing, in JavaScript](https://schier.co/blog/wait-for-user-to-stop-typing-using-javascript)
- [Build a Svelte Popup/Overlay Component using Tailwind CSS in 15 Minutes](https://www.youtube.com/watch?v=ql_-tLTpPKg)
- [Waiting for multiple all API responses to complete with the vanilla JS Promise.all() method](https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/#calling-multiple-apis-in-sequence)
- [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [How to use promise in forEach loop of array to populate an object](https://stackoverflow.com/questions/38362231/how-to-use-promise-in-foreach-loop-of-array-to-populate-an-object)
