---
layout: "../../layouts/BlogSingle.astro"
pageTitle: "Ditch the Boring Radios: Create a Star Rating System with Just HTML, CSS & JavaScript"
description: Create an interactive, accessible star rating component without relying on frameworks.
pubDate: 2025-05-03
updatedDate:
draft: false
featuredImage:
  url: "/images/blog/rating-star-cartoon-people-1536w.png"
  alt: "A cartoon file folder with a mischievous face"
tags: ["css", "javascript"]
---

## Default Inputs Wouldn't Cut It

While working on our website, I needed a clean and user-friendly way for users to leave a rating. The default radio buttons just didn’t look or feel right for a 5-star system.

## The Goal: Eye-catching and Functional

I wanted to replace standard radio inputs with an interactive star rating component that users could easily click or tap. It had to meet three key criteria:

- ✅ Accessible to screen readers and keyboard users
- ✅ Simple to style and customize
- ✅ Compatible with standard HTML forms

## The Approach: HTML, CSS, and Just a Bit of JavaScript

### 1. The HTML

I started with five `<input type="radio">` elements (one for each star), each paired with a `<label>` that would contain the `<svg>` of the star. Here's the basic structure:

```html
<fieldset class="star-rating">
  <legend>Rating</legend>
  <input type="radio" name="rating" id="star1" value="1" />
  <label for="star1">
    <svg></svg>
  </label>
  <!-- repeat for stars 2 - 5 -->
</fieldset>
```

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="emmMZPv" data-pen-title="Vanilla HTML, CSS, JavaScript Star Rating - step 1" data-user="adamgonzls" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/adamgonzls/pen/emmMZPv">
  Vanilla HTML, CSS, JavaScript Star Rating - step 1</a> by Adam Gonzales (<a href="https://codepen.io/adamgonzls">@adamgonzls</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## The Result: A Simple, Accessible and Functional Rating Component

The custom star rating UI improved the user experience significantly. It looked great across devices, felt intuitive, and was easy to maintain. Plus, it's fully accessible and fits right into any form-based interaction.

## Conclusion

If you're looking to elevate your form UI, replacing default radio buttons with a star rating is a quick win. It’s approachable even for beginners, and with just a bit of CSS and JavaScript, you can build something that looks and feels polished.

### Key Takeaways

- **Updating the config file:** This only takes a few minutes to do.
- **Updating existing imports** The syntax is straight forward and easy to implement.

### Useful links:

- <a href="https://www.youtube.com/watch?v=0q6neX8jd44" target="_blank">How To Create A Simple Star Rating Using HTML &amp; CSS</a>
