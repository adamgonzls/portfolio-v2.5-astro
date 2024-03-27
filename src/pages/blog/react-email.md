---
layout: "../../layouts/BlogSingle.astro"
pageTitle: Email Templates with React Email
description: Using a new tool
pubDate: 2024-03-19
updatedDate:
draft: true
featuredImage:
  url: "/images/blog/stairs-640w.jpg"
  alt: "An icon of a person walking down stairs"
tags: ["react", "react email", "template"]
---

I've been loving my new gig, the work has been rewarding and the tech I've been working with has been very enjoyable. I thought that all was going to change recently when I was asked to create some email templates for one of our departments😬. As I was preparing to kick this project off by crying silently to myself, I was told to use [React Email](https://react.email/) and decided to hold back the tears for now.

To start off, I was given some high-quality mock-ups, they were close enough to each other visually that I needed to decide if I wanted to create 4 individual templates or one template and conditionally display the unique parts of each.

## Getting Started with Building my Email Template

I decided to start by building one template to get acquainted with the React Email way of doing things.

I started by importing React Email components as such:

```jsx
import { Section, Heading, Text, Link } from "@react-email/components"
```

Even though there are native HTML elements for each of the above elements, I used the React Email components whenever I could.

I styled the elements using embedded stylesheets creating objects that would be imported:

```css
const faqListStyle = {
  marginBottom: '0',
  paddingLeft: '20px',
  fontWeight: 'bold',
  color: '#4e4e4e',
}

const faqItemCopy = {
  marginTop: '20px',
  maxWidth: '100%',
  fontWeight: '300',
}

const faqItemHeader = {
  marginTop: '28px',
}
```

Below is how I used the CSS objects (I particularly liked where I used the spread operator to combine two different CSS objects)

```jsx
<ol style={faqListStyle}>
  <li>
    <Heading as="h3" style={{ ...baseTextStyle, ...faqItemHeader }}>
      Do you offer any sort of payment plan?
    </Heading>
    <Text style={{ ...baseTextStyle, ...faqItemCopy }}>
      Yes. We have flexible payment plan options available whether you'd like to
      use pre-pay or pay as you go.
    </Text>
  </li>
</ol>
```

I spent most of my development time on the 1st template. I thought about creating the other 3 templates by copying the 1st and then adding the unique elements to each but, when I had to make some minor stylistic changes to one of the templates, it became immediately clear that duplicating those changes to other templates would be very tedious (with much potential for errors).

As part of my strategy to use one template, I decided to break the template into smaller pieces. This was pretty easy as I went with the natural flow of content and broke the template into pieces that naturally lent themselves to that.

My template started looking like this: (I thought it looked very pretty)

```jsx
export default function brandWelcome() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Helvetica Neue"
          fallbackFontFamily="Arial"
          fontWeight={300}
        />
      </Head>
      <Preview>We have exciting news! 🚀</Preview>
      <Body style={baseBodyStyle}>
        <Container style={baseContainerStyle}>
          <Header />
          <ActionRequired />
          <ImportantInfo />
          <LocationInfo />
          <BillingFaq />
          <AdditionalQuestions />
        </Container>
      </Body>
    </Html>
  )
}
```

I was thinking of ways where I could choose what content to show. Ideally, I wanted a user interface where the user could choose between some booleans and the appropriate content would appear. Unfortunately, I couldn't find a way to add a layer that wouldn't ultimately be added to the email code. To solve this, I went with a simple solution: add some booleans to the top of the file with the two factors that manipulate the email content. I could use the logical `&&` operator to determine whether certain components show or pass the variable values as props to be used within the component.

```jsx
//***** use the following booleans to determine *****//
//***** which version of the email to create *****//
const isBrandA = true
const isInPerson = true
//***** You shouldn't have to modify anything below this line *****//
```

The biggest drawback to this method is adding commit messages for minor "produced email code for brand B in-person appointment" type of changes.

The resulting markup looks like the following:

```jsx
export default function brandWelcome() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Helvetica Neue"
          fallbackFontFamily="Arial"
          fontWeight={300}
        />
      </Head>
      <Preview>We have exciting news! 🚀</Preview>
      <Body style={baseBodyStyle}>
        <Container style={baseContainerStyle}>
          <Header isBrandA={isBrandA} />
          <ActionRequired
            isBrandA={isBrandA}
            registrationFormUrl={registrationFormUrl}
          />
          <ImportantInfo isBrandA={isBrandA} isInPerson={isInPerson}>
            {isInPerson && <InPersonCheckIn />}
          </ImportantInfo>
          {!isInPerson && <OnlineHowToConnect />}
          {isInPerson && <LocationInfo />}
          <BillingFaq />
          <AdditionalQuestions />
        </Container>
      </Body>
    </Html>
  )
}
```

The components that use props look like this:

```jsx
import * as React from "react"
import { Section, Heading, Text, Link } from "@react-email/components"
import {
  h1Style,
  baseTextStyle,
  bold500,
  brandAButtonLinkStyle,
  brandBButtonLinkStyle,
} from "../../styles/welcome"

export default function ActionRequired({ isBrandA, registrationFormUrl }) {
  const buttonLinkStyle = isBrandA
    ? brandAButtonLinkStyle
    : brandBButtonLinkStyle

  return (
    <Section>
      <Heading as="h1" style={h1Style}>
        Action Required!
      </Heading>
      <Text style={{ ...baseTextStyle, ...actionRequiredTextStyle }}>
        Please click the link below to complete your required forms. Forms must
        be completed at least{" "}
        <strong style={bold500}>
          48 hours prior to your scheduled appointment
        </strong>
      </Text>
      <Link style={buttonLinkStyle} href={registrationFormUrl}>
        Registration Form
      </Link>
    </Section>
  )
}

const actionRequiredTextStyle = {
  marginTop: "28px",
}
```

In the end, working with React Email was an enjoyable experience. It's been some time since I built email templates from scratch and I'm glad I didn't have to be relive all the annoyances associated with it.
