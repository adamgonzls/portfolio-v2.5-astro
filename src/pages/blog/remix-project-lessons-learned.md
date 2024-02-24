---
layout: "../../layouts/BlogSingle.astro"
pageTitle: My First Remix Project
description: Lessons while Building with Remix, Tailwind and TypeScript
pubDate: 2024-02-10
updatedDate: 2024-02-15
draft: false
featuredImage:
  url: "/images/blog/boombox-640w.jpg"
  alt: "A construction zone"
tags: ["typescript", "CSS", "tailwind", "remix"]
---

## My First Project in my New Position

First of all, HOORAY! 🎉 I recently accepted a position as a web developer at a great company. As my first assignment, my boss gave me a high-quality mockup in Figma and asked me to build it in code. He said all decisions where mine to make, except he did ask that I use Tailwind.

I could have built the layout with HTML and CSS but, thinking about the possibility that this ad-hoc page could turn into more pages or possibly a full-on site, I thought a framework wouldn't be a bad idea. Seizing the opportunity to experience a new framework while I built this page was an added bonus.

## The Task: Build a Complex Layout Using Technology of my Choice

The page was static but the layout was rather intricate with many small details.

## Remix, Tailwind, and TypeScript

I decided to use [Remix](https://remix.run/) to build the page. Another benefit of choosing a framework for this project is that it future- and feature-proofs our page should we need to add to it. Now that that decision has been made, I started to break down the page into digestible pieces.

I made components out of similar functioning and looking pieces and passed props containing the unique information for each.

The basic component usage:

```jsx
// index.tsx
<SectionHeader
  headerText="Patient Satisfaction"
  imgSrc={blueEgg}
  bodyCopy="Our patients rate us the highest in the industry"
  tileClass="tile--light"
/>
```

The basic component structure:

```jsx
// SectionHeader.tsx
export default function SectionHeader(props: {
  headerText: string,
  imgSrc: string,
  bodyCopy: string,
  tileClass: string,
}) {
  const theme = props.tileClass ? props.tileClass : ""
  return (
    <div className={theme}>
      <div className="py-[3.125rem] md:py-[5.125rem] flex flex-col items-center px-4">
        <h2 className="text-2xl/[130%]">{props.headerText}</h2>
        <img className="mt-3.5 h-[30px]" src={props.imgSrc} alt="" />
        <p className="mt-4 text-center">{props.bodyCopy}</p>
      </div>
    </div>
  )
}
```

This strategy worked on the mobile view, building the layout piece-by-piece but I got a sense of foreshadowing when I added and used the `tileClass` prop. When I focused more on the desktop view, which I felt would be best positioned using `grid` (more on that learning experience later) I noticed I needed to pass more props for those uniquely positioned items.

**My component now looked like this:**

```jsx
// index.tsx
<SectionSubHeader
  headerText="Patient Satisfaction"
  imgSrc={blueEgg}
  bodyCopy="Our patients rate us the highest in the industry"
  tileClass="tile--light"
  gridLocation="patient-satisfaction"
/>
```

**And my CSS for the grid container:**

```css
/* styles.css */
.grid-container {
  border: 2px solid red;
  grid-template-areas:
    "patient-satisfaction medical-care"
    "medical-devices pharmacy"
    "pickup delivery"
    "customer-service respect"
    "mutual-relationships long-term";
}
```

I really realized how different the spacing of some of the same-looking items were in the desktop view... I thought: "No problem, I can pass the component-specific unique additional classes to each individual component as props"

**My component props really started to grow:**

```jsx
// index.tsx
<SectionSubHeader
  headerText="Patient Satisfaction"
  imgSrc={blueEgg}
  bodyCopy="Our patients rate us the highest in the industry"
  tileClass="tile--light"
  gridLocation="patient-satisfaction"
  tailwindClasses="border-b border-dashed pt-8 md:pt-11 pb-6"
/>
```

**After spending hours building this way, I noticed a few things I didn't like about the direction this project was going:**

- I didn't like having some CSS applied using Tailwind classes as a prop AND on the component itself.
- I also didn't like using 2 (really 3) sources (Tailwind classes on elements, the stylesheet, and Tailwind props) to control the CSS on these elements.

At that point, I knew that I needed to reevaluate my strategy.

### I Decided to Change my Approach

I liked using React components to build the page but as I started adding on more and more props, especially to style the elements, I started thinking this project was becoming overly complicated. I didn't like having multiple "sources of truth" for the CSS and I felt that at least one of the initial reasons for creating components was being lost.

After making these changes, my markup looked more like this:

```jsx
// index.tsx
<div className="py-[3.125rem] md:py-[5.125rem] flex flex-col items-center px-4 border-b border-dashed pt-8 md:pt-11 pb-6">
  <h2>Patient Satisfaction</h2>
  <img src={blueEgg} alt="">
  <p>Our patients rate us the highest in the industry</p>
</div>
```

My page became a lot easier to style after switching from components to an HTML-like layout. By doing this, I was able to have more insight into Tailwind classes, remove extra files, and simplify my code overall.
