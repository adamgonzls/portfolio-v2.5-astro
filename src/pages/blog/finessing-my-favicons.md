---
layout: "../../layouts/BlogSingle.astro"
pageTitle: Finessing my Favicons
description: Navigating the world of favicons
pubDate: 2024-02-24
updatedDate: 2024-03-14
draft: false
featuredImage:
  url: "/images/blog/stairs-640w.jpg"
  alt: "An icon of a person walking down stairs"
tags: ["favicon", "astro", "svg"]
---

Recently, I've been focusing on refining my web sites. I've been trying to address "little things" that I've put off or delayed due to other items being prioritized. For example on this site, I was using the default Astro favicon. I love the icon and since "Astro" and "Adam" both start with an "A", I was able to keep it as my favicon without it being too obvious that it wasn't "my" icon. As someone who cares about all the little details (and who has dozens of tabs open), I knew I needed to change that.

![Astro favicon](/images/blog/astro-favicon.jpg)

## Finding a Favicon: AI, SVG Icons

Initially, I attempted to generate a favicon via AI. I tried multiple sites and entered multiple prompts on each of those sites similar to `svg favicon size 128px x 128px for a personal portfolio website called "codedbyadam.com"`. Unfortunately, most of the sites either felt spammy, wanted a professional subscription to get results, or provided icons that just weren't that good. Because of this, I decided to go an alternate route.

I navigated to [SVG Repo](https://www.svgrepo.com/) to find the icon that I would ultimately use as my favicon.

## Preparing the Favicon Files

After entering a few search terms, I found my favicon and promptly downloaded the .svg. In order to create all the different required sized icons used the handy [RealFaviconGenerator](https://realfavicongenerator.net/).

## Using the Favicons

I uploaded the `.png`, `.ico`, and `.svg` files provided by RealFaviconGenerator to `public/` (I'm using Astro) and inserted the `<link>` and `<meta>` tags into the `<head>`. After testing the functionality on my local environment and verifying I had a bright new shiny favicon, I pushed to GitHub.

## Taking Favicons Further: Adding an Alternate Favicon to my Development Environment

One of the resources I used while setting up my favicons was Evil Martians' [blog article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs). In their article,
they recommend adding an alternate favicon for staging vs production🤔. I've never considered this but I can immediately remember multiple times where I refreshed a site in vain as I worked on it and it "just wouldn't show the changes I made", only to notice later that I was looking at the deployed version of the site, not my local development environment. With this added feature, the favicon would help serve as a visual cue of what environment I'm currently looking at. <strong>I love this idea</strong>.

## Creating the Alternate Favicon

I opened the favicon in [Inkscape](https://inkscape.org/) and set an alternate fill color.

## Adding the logic to my `<head>`

Once I had the two versions of the favicon, I had to co-opt Evil Martians' code to be used in my Astro environment. That was accomplished as so:

```astro
// Head.astro
<link rel="icon" type="image/png" sizes="32x32" href={
    import.meta.env.MODE === 'production'
    ? '/favicon.ico'
    : '/favicon-dev.ico'
  }>
  <link rel="icon" type="image/svg+xml" href={
    import.meta.env.MODE === 'production'
    ? "/favicon.svg"
    : "/favicon-dev.svg"
  }>
```

**Now, when I work on my dev environment, I see a yellow version of my icon:**

![Astro favicon](/images/blog/prod-favicon-dev-favicon.jpg)
_A screenshot showing on the left, the production favicon, on the right, the development favicon_
