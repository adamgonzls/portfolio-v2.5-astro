---
layout: '../../layouts/BlogSingle.astro'
pageTitle: Changing My Domain Name to CodedByAdam.com
description: A marketing problem
pubDate: 2024-01-12
updatedDate:
draft: true
featuredImage:
  url: '/images/blog/unpredictable-door-640.jpg'
  alt: 'Keep back. This door is unpredictable.'
tags: ['astro', 'portfolio', 'dns']
---

### A-Damn-Good-Coder:

When I went through the process of rebuilding my portfolio, I wanted a punny domain name. I fell in love with `adamgoodcoder.com`. Get it? **a-damn-good-coder**. I love it. People that I articulated it to love it, too. But, I think I have to change it...

### The problem

I think **a-damn-good-coder** is a great domain... When pronounced like that. The problem I've observed is that people read it as "adam-good-coder" which... sounds awkward.

### Luckily Astro supports MDX in addition to Markdown

Looking through the Astro docs, I found that Astro supports MDX with the installation of the [MDX integration](https://docs.astro.build/en/guides/markdown-content/).

### Adding the integration seemed easy enough...

The [Astro docs](https://docs.astro.build/en/guides/integrations-guide/mdx/) explain how to add the integration, and it seems simple enough: `npx astro add mdx`

### I needed to update Node and Astro

After typing the command in my terminal, I was prompted with an error:

```
Node.js v18.4.0 is not supported by Astro! Please upgrade Node.js to a supported version: ">=18.14.1"
```

So, I updated Node using [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)

### Astro was then updated

I started using Astro before there was a version 1. I checked my version of Astro after updating Node via NVM, I was on Astro version 4. I launched my dev environment and saw that some of my images were't working but other than that everything seemed fairly intact.

For many of my images which I imported, I now need to use `variableName.src` in the src of `<img />` tags (it was simply `variableName` before).

### Conclusion: I'm glad I updated Astro

Overall, I'm glad I finally updated my version of Astro to something more current. I'm still trying to figure out how to get my Markdown and MDX files to recognize images in `src/images` but in the meantime, having blog images in `/public` is ok.

### Conclusion part 2: An error deploying to Netlify

When I deployed my site to Netlify, the build failed with the following error:

```
Failed during stage 'building site': Build script returned non-zero exit code: 2
```

I thought back to the fact that I updated Node on my local environment and thought a likely culprit was that perhaps I needed to update Node in the site configuration on Netlify. I checked the deploy log and found some evidence to support that theory:

```
Node.js v16.20.2 is not supported by Astro!
Please upgrade Node.js to supported version: ">=18.14.1"
```

What a clue right? Sure enough, I updated the Node.js dependency to 20.x, redeployed and got my site up and running again.

### Useful links

[Netlify Manage Dependencies](https://docs.netlify.com/configure-builds/manage-dependencies/)
