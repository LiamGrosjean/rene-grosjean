import './styles/style.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger, SplitText)

let text = new SplitText('.quote', {
  type: 'words',
})

document.addEventListener('DOMContentLoaded', function () {
  let body = document.querySelector('body')
  body.style.backgroundColor = '#45693A'
  body.style.color = '#ccd197'
})

/* Scrollbar animations*/
$('.scrollbar__wrapper').each(function () {
  let triggerElement = $(this)
  let targetElement = $('.scrolling-circle')

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: true,
    },
  })
  tl.from(targetElement, {
    top: '0',
    ease: 'none',
  })
})

console.log(text)
let index
console.log(index)

/* Dark to light bg Color */
$('.section.align-top').each(function () {
  let triggerElement = $(this)
  let targetElement2 = $('body')

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top 50%',
      end: 'top top',
      scrub: 1,
    },
  })
  tl2.fromTo(
    targetElement2,
    {
      backgroundColor: '#45693A',
      color: '#ccd197',
    },
    {
      backgroundColor: '#ccd197',
      color: '#45693A',
    }
  )
})

/* Quote animations*/
$('.section.align-top').each(function () {
  let triggerElement = $(this)
  let targetElement = $(text.words)

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: '.quote-wrapper',
    },
  })
  tl3.from(targetElement, {
    opacity: 0.3,
    stagger: 1,
    ease: 'none',
  })
})

/* 1st image grid bg color animation */
$('.section.is--grid').each(function () {
  let triggerElement = $(this)
  let targetElement = $('body')

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'bottom 25%',
      end: 'bottom 50%',
      scrub: 1,
    },
  })
  tl4.fromTo(
    targetElement,
    {
      backgroundColor: '#ccd197',
      color: '#45693A',
    },
    {
      backgroundColor: '#45693A',
      color: '#ccd197',
    }
  )
})

/* DBP animations*/
$('.section.is--vietnam').each(function () {
  let triggerElement = $(this)
  let targetElement = $('.absolute-image')

  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
  tl5.from(targetElement, {
    y: '100%',
  })
})
