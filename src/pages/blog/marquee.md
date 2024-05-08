---
layout: "../../layouts/BlogSingle.astro"
pageTitle: Creating a Scrolling Marquee with HTML and CSS
description: Challenging myself with more complex components
pubDate: 2024-05-08
updatedDate:
draft: false
featuredImage:
  url: "/images/blog/searching-records-640w.jpg"
  alt: "Searching for records"
tags: ["css", "svelte", "javascript"]
---

## Our team needed a way to produce text strings uniformly

I recently created a tool to help standardize data our users enter for our marketing campaigns.

What was happening was that users were entering data that would essentially mean the same thing but get reported differently for example:

```
utm_source=facebook
utm_source=facebook.com
```

My tool took the user input and standardized the entered text to:

```
{/* the desired string */}
utm_source=facebook
{/* the entire string */}
https://www.example.com/some-name/?utm_source=facebook
```

The tool was a great improvement over the previous method of entering data, but we saw the opportunity to improve the user experience even more.

## We decided Algolia InstantSearch would be a great fit

In the recently created tool, a user entered a URL in a text field and the tool would create a URL string with UTM parameters. This was a vast improvement over the previous method and helped ensure data was entered consistently.
It was determined that we could improve the user experience by improving upon the text input and instead incorporate Algolia InstantSearch. I'd switch the input and instead use a search bar that would allow users to search for the records and use that selected data for the URL string.

## I switched the text input to instead use Algolia

I immediately started researching Algolia InstantSearch and how I could incorporate it into the tool. I found that Algolia had a JavaScript InstantSearch library that would be perfect for my needs.

I started by creating a container with the two elements I needed: the searchbox and the hits (results) container.

```html
<div class="wrapper">
  <div id="searchbox"></div>
  <div id="hits" class="mt-4 border-2 rounded-md"></div>
</div>
```

Next, I imported the API client, UI library, widgets and the necessary app ID, search key, and search index.

```js
const appId = import.meta.env.PUBLIC_ALGOLIA_APP_ID
const searchKey = import.meta.env.PUBLIC_ALGOLIA_SEARCH_KEY
const searchIndex = import.meta.env.PUBLIC_ALGOLIA_SEARCH_INDEX
import algoliasearch from "algoliasearch"
import instantsearch from "instantsearch.js"
import { searchBox, hits, configure } from "instantsearch.js/es/widgets"
```

To create the search interface, I used the following code:

```js
const searchClient = algoliasearch(appId, searchKey)
const search = instantsearch({
  indexName: searchIndex,
  searchClient,
  future: {
    preserveSharedStateOnUnmount: true,
  },
})
search.addWidgets([
  searchBox({
    container: "#searchbox",
    showSubmit: false,
    showReset: false,
    placeholder: "Start typing to search for a record",
    cssClasses: {
      form: "border text-primary",
      input: "p-5 bg-primary block w-full rounded-md border-2 font-semibold",
    },
  }),
  hits({
    container: "#hits",
    cssClasses: {
      item: "border-b-2 border-dashed last:border-none",
    },
    templates: {
      item: (hit, { html }) => html`
        <div
          class="flex gap-4 items-center hover:cursor-copy hover:bg-primary p-4"
          onClick="${() => setSelection(hit)}"
        >
          <img
            class="object-cover rounded-full w-12 h-12"
            src="${hit.imgSrc}"
          />
          <h2 class="text-lg">${hit.name}${" "}${hit.title}</h2>
        </div>
      `,
    },
  }),
  configure({
    hitsPerPage: 50,
  }),
])

search.start()
```

## An elegant solution that makes user's lives easier

The result was a much-improved user experience. Users could now search for records from our database, click the found record, and paste the generated URL String. This was a great quality of life improvement over the previous method of entering data manually and the team is elated.

### Useful links

[You Can't Find a Better Infinite Marquee](https://www.youtube.com/watch?v=ZMCNin2VjxU)
[The Shapes of CSS](https://css-tricks.com/the-shapes-of-css/)
