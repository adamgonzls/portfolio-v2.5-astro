---
layout: "../../layouts/BlogSingle.astro"
pageTitle: Updating My GitHub User Lookup App
description: Promises, TypeScript, Svelte
pubDate: 2024-07-04
updatedDate:
draft: true
featuredImage:
  url: "/images/blog/github-user-lookup-interface-662w.jpg"
  alt: "GitHub user search UI"
tags: ["svelte", "promises", "javascript", "typescript"]
---

<!-- STAR method: -->
<!-- Situtation -->

I wanted to make my GitHub lookup app more user friendly.

<!-- Task -->

To make it more user friendly, I decided to make the lookup a search tool. Version 1 required the user to know the username in order to return results.

<!-- Action -->

To save on API requests, I implemented the search to commence after the user stopped typing for 1 second.

<!-- Result -->

The tool works well, providing enhanced information upon first searching to allow better insight on which user you might actually be searching for.

<!-- content -->

I created a [GitHub lookup tool](https://uilab.netlify.app/06-user-profile) for my on of my 100 days of UI Projects.

### Some things I needed to figure out

- How to wait for the user to stop typing
- How to use promises in order to get the individual user data after receiving the found profiles
- How to use the Svelte built-in click events (for the overlay)

### Useful links:

- [Wait for User to Stop Typing, in JavaScript](https://schier.co/blog/wait-for-user-to-stop-typing-using-javascript)
- [Build a Svelte Popup/Overlay Component using Tailwind CSS in 15 Minutes](https://www.youtube.com/watch?v=ql_-tLTpPKg)
- [Waiting for multiple all API responses to complete with the vanilla JS Promise.all() method](https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/#calling-multiple-apis-in-sequence)
