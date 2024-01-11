---
layout: '../../layouts/BlogSingle.astro'
title: Version 2 of my portfolio delivered
description: Adding an "Adam Facts" component was part of it
date: 2022-07-18
draft: false
featuredImage:
  url: '/images/blog/gardening-transplant.jpg'
  alt: 'Gardening'
---

Last week, I presented version 1 of my portfolio as documented [here](./2022-07-15-presented-my-portfolio.md). After a weekend of focused work, I released version 2 of my portfolio.

### I had to make choices

I knew when I presented my portfolio to my peers last week, I wouldn't be able to deliver every feature I wanted. I had to balance my minimum viable product, the amount of time I had, and which features were necessary so it wouldn't feel incomplete when I presented.

### Features that I added in v2

I wanted to have a complete functioning navigation (rather than linking to id's on the home page) so, I created and styled the [main blog page](../blog.astro), the [about page](../about.astro), and the [experience page](../experience.astro).

I then took the time to make the individual blogs more visually appealing, making code snippets look nicer.

I also had a bug with the hamburger menu on the home page... This one was confusing at first because when I'd click on the hamburger button on the home page, it performed as expected. When I clicked other anchor tags on the home page, I'd see the mobile navigation menu flash. After some investigation, and some good ol' `console.log`s, I found the following:
![Screenshot of an error](/images/blog/hamburger-menu-js-issue.jpg)

After reading the Astro [documentation](https://docs.astro.build/en/core-concepts/astro-components/#client-side-scripts), I modified the script to `type=module` and success, no more issue.

Lastly, I had a fun idea and decided to create an "adam facts" component. I made another JSON file, through some JavaScript to grab a random fact and add it to the DOM. It wasn't necessary, but it was a fun addition.

![Adam Fact Component](/images/blog/adam-fact-component.jpg)

### There's still more to do

Next things to work on my portfolio are:

- Make GitHub project names more human readable (currently, snake-cased and lowercase)
- Add preview images to GitHub projects
- Domain name
- Highlight nav element for current page
