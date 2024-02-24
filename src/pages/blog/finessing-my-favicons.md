---
layout: "../../layouts/BlogSingle.astro"
pageTitle: Finessing my Favicons
description: Navigating the world of favicons
pubDate: 2024-02-24
updatedDate:
draft: false
featuredImage:
  url: "/images/blog/stairs-640w.jpg"
  alt: "An icon of a person walking down stairs"
tags: ["favicon", "astro"]
---

Recently, I've been focusing on refining my web sites. For example on this site, I was using the default Astro favicon. Being someone who cares about all the little details, I knew I needed to change that.

![Astro favicon](/images/blog/astro-favicon.jpg)

## Finding a Favicon: AI, SVG Icons

Initially, I attempted to generate a favicon via AI. After entering multiple prompts similar to `svg favicon size 128px x 128px for a personal portfolio website "codedbyadam.com"`. Unfortunately, any AI website that offered a free .svg download didn't produce relevant results.

I ended up using [SVG Repo](https://www.svgrepo.com/) to find the icon that I would ultimately use as my favicon.

## Preparing the Favicon Files

After finding my favicon, I created the necessary files using [RealFaviconGenerator](https://realfavicongenerator.net/).

## Using the Favicons

I used the code and files provided by RealFaviconGenerator and after testing on my local environment, pushed to GitHub.

## Taking Favicons Further: Adding an Alternate Favicon to my Development Environment

One of the resources I used while setting up my favicons was Evil Martians' [blog article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs). In their article,
they recommend adding an alternate favicon for staging vs production. ...I've never considered this but I can immediately remember multiple times where I refreshed a site I was working on and it "just wouldn't show the changes I made", only to notice later that I was looking at the deployed version of the site. Now, with this added feature, the favicon would help serve as a visual cue of what environment I'm currently looking at. I love this idea.

## Creating the Alternate Favicon

I opened the favicon in [Inkscape](https://inkscape.org/) and set an alternate fill color.

## Adding the logic to my `<head>`

I had to co-opt Evil Martians' code to be used in my Astro environment, that was easily accomplished:

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
