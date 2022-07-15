---
layout: '../../layouts/BlogSingle.astro'
title: Using GitHub Topics for my Website
description: I used GitHub Topics to query GitHub's API
date: 2022-07-08
draft: false
---

I was working on my website and I wanted to add a feature to query my GitHub repos but, I didn't want ALL of my repos to be returned.

The first thing I did was look for a way to query repos so only _some_ would be returned. On the repo's screen, in the `About` section, I noticed `Topics`. After looking around a bit, I found that Topics were available through the GitHub API and could be used within a <a target="_blank" class="brand-link" href="https://docs.github.com/en/search-github/searching-on-github/searching-topics#search-repositories-by-topic" >search</a>.

Success! After some experimenting, I was able to return only repos that had `featured-repo` as one of the topics.