---
layout: '../../layouts/BlogSingle.astro'
title: Configuring email forwarding on my new site
description: Getting Name.com, Netlify, and Forward Email to work together
date: 2022-07-26
draft: true
featuredImage: '/images/blog/high-five-640.jpg'
featuredImageAlt: 'A man and a woman high-fiving'
---

<img src={frontmatter.featuredImage} alt={frontmatter.featuredImageAlt} />

## {frontmatter.description}

### New portfolio site, a fun domain name, and... a gmail email address???

I went through all the time of creating a new portfolio site and I was telling people email me at somename@gmail.com???

### I did some searching

Name.com had some [resources](https://www.name.com/support/articles/205935517-adding-email-forwarding-to-a-non-name-com-email-account) but if you're not using name.com's DNS, this doesn't work. I moved my fancy new domain to Netlify and they also had some [helpful guides](https://answers.netlify.com/t/support-guide-how-can-i-receive-emails-on-my-domain/178). I wanted to set this up using "what I had" and really didn't want to sign up for another service (even if it was free).

I added the DNS records from [ForwardEmail](https://forwardemail.net/), then followed their instructions to set up a "Send Mail As" from gmail.

### I feel like my email address represents me

some words about how happy I am
