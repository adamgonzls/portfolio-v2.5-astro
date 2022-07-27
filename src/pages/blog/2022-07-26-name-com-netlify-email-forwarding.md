---
layout: '../../layouts/BlogSingle.astro'
title: Configuring email forwarding on my new site
description: Getting Name.com, Netlify, and Forward Email to work together
date: 2022-07-26
draft: false
featuredImage: '/images/blog/high-five-640.jpg'
featuredImageAlt: 'A man and a woman high-fiving'
---

<img src={frontmatter.featuredImage} alt={frontmatter.featuredImageAlt} />

## {frontmatter.description}

### New portfolio site, a fun domain name, and... a gmail email address???

Through the last couple of weeks, I've been developing my new website. It's been a fun experience. I created a prototype in Figma, I've queried various API's, heck, I even customized my [404 page](/404). I went through all the work of paying attention to the small details, revising my designs over and over and I was gonna tell people to email me at mygmailaddress<span>@</span>gmail.com??? Not so fast there buddy.

### The situation

I bought my domain on Name.com. There were some [helpful resources](https://www.name.com/support/articles/205935517-adding-email-forwarding-to-a-non-name-com-email-account) on Name.com but if you're not using name.com's DNS, this doesn't work. Did I mention that I moved my fancy new domain to Netlify because my site is hosted there? Netlify has some [helpful guides](https://answers.netlify.com/t/support-guide-how-can-i-receive-emails-on-my-domain/178) but, they state that Netlify doesn't provide a forwarding service. I wanted to set this up using "what I had" and really didn't want to sign up for another service (even if it was free).

### Technically, I didn't sign up for another service 😅

I was searching through my mailbox for another non-related task and I stumbled upon an email. **Your email was sent successfully** it stated. Hmmmmm... I opened it up and it's from [ForwardEmail](https://forwardemail.net/). Apparently, I had set up forwarding on one of my old websites. I went ahead and looked up their FAQ's and found this [excellent guide](https://forwardemail.net/en/faq#table-dns-management-by-registrar). As far as documentation goes, this made updating my `MX` and `TXT` records on Netlify very painless. I added the DNS records as described in the doc, then followed their instructions to set up a "Send Mail As" from gmail.

### I'm happy with this finishing touch

As I was updating my signature with my new web address, I wasn't so fond of having @gmail for my contact email. Making this change so I can have both ending with the same domain really improved my confidence. Crazy how something seemingly so insignificant could make such an impact.
