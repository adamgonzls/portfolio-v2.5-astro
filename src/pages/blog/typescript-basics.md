---
layout: '../../layouts/BlogSingle.astro'
pageTitle: TypeScript Basics
description: Acquainting myself with Typescript
pubDate: 2024-01-31
updatedDate: 2024-02-02
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

Assigning types to objects:

<!-- prettier-ignore -->
```typescript
const musicFan: {
  userName: string;
  isReturning: boolean;
} = {
  userName: 'radioheadfan1',
  isReturning: true,
}
```

Assigning types to arrays:
If an array is going to have just one type, the type can be declared like this:

<!-- prettier-ignore -->
```typescript
// ...other properties
concertsAttended: string[];
```

If an array has different types, they are declared like this:

<!-- prettier-ignore -->
```typescript
const musicFan: {
  userName: string;
  isReturning: boolean;
  concertsAttended: (string | number)[]
} = {
  userName: 'radioheadfan1',
  isReturning: true,
  concertsAttended: ['Radiohead', 1942, 'Chevelle']
}
```

Assigning types to an array of objects:

<!-- prettier-ignore -->
```typescript
const rockFans: {
      firstName: string;
      lastName: string;
      age: number;
      stars: number;
      loyaltyUser: boolean;
      date: string;
  }[] = [
  {
      firstName: 'Wayne',
      lastName: 'Campbell',
      age: 25,
      stars: 5,
      loyaltyUser: true,
      date: '01-04-2021'
  },
  {
      firstName: 'Garth',
      lastName: 'Algar',
      age: 34,
      stars: 3,
      loyaltyUser: false,
      date: '28-03-2021'
  },
  {
      firstName: 'Alice',
      lastName: 'Cooper',
      age: 44,
      stars: 4,
      loyaltyUser: true,
      date: '27-03-2021'
  },
]
```

### Tuples

Tuples can be thought of as arrays where the order data is indexed in is important. Think of them as a way to connect some data, but with less syntax than keyed objects.

```typescript
const concertLocation: [string, string, number] = [
  'Madison Square Garden',
  '7:30pm',
  19500,
]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}`
```

<!-- ### Enum -->

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

In the following function call, I was getting an error under `firstInput.value` and `secondInput.value` stating `Argument of type 'string' is not assignable to parameter of type 'number'`.

```typescript
button.addEventListener('click', () =>
  addNumbers(firstInput.value, secondInput.value)
)
```

I was able to correct this by using the `parseInt()` JavaScript function around each of the arguments.

```typescript
button.addEventListener('click', () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
)
```
