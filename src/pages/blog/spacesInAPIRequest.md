---
layout: '../../layouts/BlogPost.astro'
title: I Learned I Could use Spaces in My API Request
description: GitHub's example to query their API taught me something
date: 2022-07-09
---

While I was working on a GitHub integration to feature some of my repos on my website, I found that I could use Topics ([I wrote about it](./gitHubTopics.md))

I was able to get all my repos and I could see a topics property:

```
"topics": ["css","featured-repo","javascript-es6","json-api","localstorage","netlify","react","vite"],
```

I wasn't sure how to include `featured-repo` in my query.

Luckily, I found an [article](https://fusebit.io/blog/github-search-api/?utm_source=www.google.com&utm_medium=referral&utm_campaign=none). In the article, the author gives an example: `q=siddhant in:name type:user`.
That looks weird to me... So a quick google search later, I find that spaces can be used (I later changed spaces to the &plus; symbol). So my query now looked like this: `https://api.github.com/search/repositories?q=adamgonzls in:name topic:featured-repo` (I tried it in my newly installed VS Code extension [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)) and success!
