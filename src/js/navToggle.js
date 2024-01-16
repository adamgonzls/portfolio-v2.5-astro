const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav-items li')
const pageContainer = document.querySelector('.page-container')
const mainNav = document.querySelector('.main-nav')

document.addEventListener('astro:page-load', () => {
  window.addEventListener('load', (event) => {
    mainNav.classList.remove('preload')
  })
  navToggle.addEventListener('click', () => {
    pageContainer.classList.toggle('nav-open')
  })
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      pageContainer.classList.remove('nav-open')
    })
  })
})
