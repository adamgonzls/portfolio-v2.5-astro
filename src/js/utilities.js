import dateFns from 'date-fns'

export function sortPosts(posts) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date)
    const bDate = new Date(b.frontmatter.date)

    return bDate.getTime() - aDate.getTime()
  })
}

export function getPublishedPosts(posts) {
  return posts.filter((post) => !post.frontmatter.draft)
}

export function readableDate(date) {
  return dateFns.format(new Date(date), 'do MMM yyyy')
}

export function normalizeGitHubRepoName(name) {
  return name.replace(/-/g, ' ').replace(/^./, (x) => x.toUpperCase())
}
