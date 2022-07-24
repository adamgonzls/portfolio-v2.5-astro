---
layout: '../../layouts/BlogSingle.astro'
title: How I got image previews for GitHub projects on my portfolio
description: Out-of-the-box problem-solving for programmatically getting images
date: 2022-07-22
draft: false
featuredImage: '/images/concerned-dog-640.jpg'
featuredImageAlt: 'A dog wearing a jean jacket'
---

<img src={frontmatter.featuredImage} alt={frontmatter.featuredImageAlt} />

## {frontmatter.description}

In v1 and v2 of my portfolio, I was querying repo data from GitHub and displaying it- with one major (to me) omission... I didn't have any sort of "preview image" (or, "feature image"- still working on the name). GitHub offers a lot of information when querying repos including `name`, `homepage`, `topics`, and a ton of other stuff. But no "project image" (still working on the name).

I searched and there is a `Social Preview` described as `an image to customize your repository’s social media preview`. Unfortunately, through my searching and this [Stack Overflow question](https://stackoverflow.com/questions/60381683/how-to-get-the-social-preview-of-a-github-project) and this [GitHub Community Forum post](https://github.community/t/github-api-how-to-get-social-image/138890), there isn't a way to get the image via API.

### I searched for potential solutions

I found a way to [fetch images using GitHub's API](https://stackoverflow.com/questions/59689516/is-there-any-way-to-fetch-images-using-githubs-api). This would result in me having to put a preview image at the same location on all my repos and make separate API calls for each individual repo. I started working on this option to see if it was feasible:

```
<!--- the following gets me the image -->

const repoImage = await fetch(`https://raw.githubusercontent.com/adamgonzls/color-picker/main/src/favicon.svg`)

<!--- then, I'd have to iterate through the original GitHub data (posts) and it'd look something like this: -->

const gitHubPostsImagesData = await Promise.all(
  gitHubPostsData.map(post => {
    return fetch(`https://raw.githubusercontent.com/adamgonzls/{post.name}/main/src/favicon.svg`)
  })
)
```

While certainly possible, it seemed like an over-complicated solution.

### Then I had an idea - maybe JSON?

Why NOT create a JSON file? I could control the images' data within my portfolio, saving me extra API calls and saving me the trouble of having to drill through multiple levels of data. I could add a property to my JSON file that matches the repo name, compare the names and if they match, add a property to the GitHub data for `featureImage`.

My JSON:

```
{
  "projects": [
    {
      "projectName": "color-picker",
      "imageURL": "/images/project-images/color-scheme.jpg"
    },
    ...
  ]
}

```

### I used a .map() and .filter() to find my way to success

To complete my plan, I used .map() to iterate through the data retrieved from the GitHub API. I then used .filter() to find a match in the "name" between the current repo and the .json file. If there's a match, I update the data for that repo and add a new field called "featureImage" with the value from the .json file.

The solution:

```
const postsWithImages = requestedPosts.map(postObject => {
  gitHubProjectImages.projects.filter(imageObject => {
    if (imageObject.projectName === postObject.name) {
      postObject.featureImage = imageObject.imageURL
    }
  });
  return postObject
})
```

### Satisfied with my solution

I'm happy with the way my solution turned out and best of all, I now have images for my GitHub projects! To maintain it, I just need to update my .json file with new data as it comes available.
