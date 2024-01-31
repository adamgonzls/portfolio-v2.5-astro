---
layout: '../../layouts/BlogSingle.astro'
pageTitle: TypeScript Basics
description: Acquainting myself with Typescript
pubDate: 2024-01-31
updatedDate:
draft: false
featuredImage:
  url: '/images/blog/typewriter.jpg'
  alt: 'A typewriter'
tags: ['typescript']
---

Recently I started making a concerted effort to learn TypeScript. Below are my notes on the basics.

### Assigning Types:

Assigning types to variables

```typescript
const age: number = 34
const name: string = 'Patrick'
const isCool: boolean = true
```

Assigning types to parameters:

```typescript
function showTotalReviews(reviews: number) {
  // display the reviews here
}
```

### Type Conversion

Type conversion is similar to _type coercion_ because they both convert values from one data type to another with one key difference: _type coercion_ is implicit while _type conversion_ is either implicit or explicit.

In the following function, I was getting an error stating `type 'number' is not assignable to type 'string'`

```typescript
function showReviewTotal(value: number) {
  reviewTotalDisplay.innerHTML = value
}
```

The resolution was to call the `.toString()` method on `value`.

```typescript
function showReviewTotal(value: number) {
  reviewTotalDisplay.innerHTML = `Review total: ${value.toString()}`
}
```

More information on (Type Conversion)[https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion]

### Type Assertions

There will be times when you know information about a DOM element that TypeScript won't know about.

For example, I was getting an error stating `property 'value' does not exist on type 'element'` after selecting an element using `document.querySelector`

The solution to this is to use type assertion when selecting the element:

```typescript
const firstInput = document.querySelector('#firstInput') as HTMLInputElement
```

(The type assertion is the `as HTMLInputElement` part)

More info on [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

### Narrowing

```typescript
button.addEventListener('click', () =>
  addNumbers(firstInput.value, secondInput.value)
)
```

In the preceding function call, I was getting an error under `firstInput.value` and `secondInput.value` stating `Argument of type 'string' is not assignable to parameter of type 'number'`. I was able to correct this by using the `parseInt()` JavaScript function around each of the arguments.
