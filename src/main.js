import './styles/style.css'
import gsap from 'gsap'
import ScrambleText from 'gsap/ScrambleTextPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleText)

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

/* 1st image grid image position */
$('.section.is--grid').each(function () {
  let triggerElement = $(this)
  let targetElement = $('.mt-negative')

  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
  tl6.to(targetElement, {
    marginTop: '-6.5rem',
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
      start: 'bottom 75%',
      end: 'bottom 25%',
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
      end: 'top top',
      scrub: true,
    },
  })
  tl5.from(targetElement, {
    y: '100%',
  })
})

/* Scramble Text */

$('.scramble__text').each(function () {
  let triggerElement = $(this)
  let targetElement = $('.scramble__text')

  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
  })
  tl7.to(targetElement, {
    scrambleText: {
      text: 'Après une lutte acharnée, il se rend maître de la DZ (Drop Zone) permettant la reprise des héliportages.',
      chars: 'lowerCase',
      revealDelay: 0.2,
      tweenLength: true,
    },
  })
})

/* Bullet section full screen image */
$('.bullet__section').each(function () {
  let triggerElement = $(this)
  let targetElement = $('.bullet-image__wrap')

  let tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  })
  tl10.from(targetElement, {
    width: '100%',
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '0rem',
  })
})
