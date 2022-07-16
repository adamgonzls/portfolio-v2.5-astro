---
layout: '../../layouts/BlogSingle.astro'
title: 'UI/UX: Coming up with new link styles'
description: Some links needed to stick out and others needed to provide feedback
date: 2022-07-11
draft: false
featuredImage: '/images/wireframes-640.jpg'
featuredImageAlt: 'Wireframe of a web app'
---

<img src={frontmatter.featuredImage} alt={frontmatter.featuredImageAlt} />

## {frontmatter.description}

I've been learning more about UI and UX and I decided to apply some of my knowledge to my website.

The goal was to make some links more noticeable among text and headers and then make other links really stand out.

I decided on the following styles:

### Default link:

<p><a href="#">This is a default link</a></p>

### Standard link:

<p><a href="#" class='brand-link'>This is a standard link</a></p>

### Callout link:

<p><a href="#" class='brand-link brand-link--callout'>This is a callout link</a></p>

My callout solution was influenced by the following CodePen: [Pure CSS Link with Rainbow Underline Effect](https://codepen.io/cssparadise/pen/ExxayxM)
