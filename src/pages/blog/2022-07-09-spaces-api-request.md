---
layout: '../../layouts/BlogSingle.astro'
title: I learned I could use spaces in my API request
description: GitHub's example to query their API taught me something
date: 2022-07-09
draft: false
featuredImage: '/images/open-space-640.jpg'
featuredImageAlt: 'A person laying in a desolate landscape'
---

<img src={frontmatter.featuredImage} alt={frontmatter.featuredImageAlt} />

## {frontmatter.description}

While I was working on a GitHub integration to feature some of my repos on my website, I found that I could use Topics (<a class="brand-link brand-link--callout" href="./2022-07-08-using-github-topics">I wrote about it</a>).

In the response, I was able to see all my repos and I could see a `topics` property:

```js
"topics": ["css","featured-repo","javascript-es6","json-api","localstorage","netlify","react","vite"],
```

I wasn't sure how to include `featured-repo` in my query.

I did some searching and I found an <a target="_blank" class="brand-link" href="https://fusebit.io/blog/github-search-api">article</a>. In the article, the author gives an example:

```js
q=siddhant in:name type:user
```

That looks weird to me... So a quick google search later, I find that spaces can be used. Seeing the spaces created a mental block but, I'm glad to know that they are ok to use (although, I'll probably opt to use the &plus; symbol in the future).

```js
// My functioning request URL initially looked like this:
https://api.github.com/search/repositories?q=adamgonzls in:name topic:featured-repo

// I later changed spaces to the + symbol:
https://api.github.com/search/repositories?q=adamgonzls+in:name+topic:featured-repo
```

I tested out my query in <a target="_blank" class="brand-link" href="https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client">Thunder Client</a> and success!
