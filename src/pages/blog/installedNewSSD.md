---
layout: '../../layouts/BlogPost.astro'
title: Upgraded the SSD on my 2015 MBP
description: Better performance in less than 20 minutes
date: 2022-06-20
---

I was working on my website and I wanted to add a feature to query my GitHub repos but, I didn't want ALL of my repos to be returned.

The first thing I did was look for a way to query repos so only _some_ would be returned. I noticed `Topics` within the About section. After looking around a bit, I found that Topics were available through the GitHub API and could be used within a (search)[https://docs.github.com/en/search-github/searching-on-github/searching-topics#search-repositories-by-topic].

Success! After some experimenting, I was able to return only repos that had `featured-repo` as one of the topics.
