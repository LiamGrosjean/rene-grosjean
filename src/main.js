import './styles/style.css'
import gsap from 'gsap'
import ScrambleText from 'gsap/ScrambleTextPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleText)

document.addEventListener('DOMContentLoaded', function () {
  let body = document.querySelector('body')
  body.style.backgroundColor = '#45693A'
  body.style.color = '#ccd197'
})

let text = new SplitText('.quote', {
  type: 'words',
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

/* Rifle animation */

$('.section.is-bechar').each(function () {
  let triggerElement = $(this)
  let targetElement = $('.rifle__embed')

  let tl11 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top 20%',
      end: 'top top',
      scrub: true,
    },
  })
  tl11.from(targetElement, {
    rotateZ: '50deg',
    y: '100%',
  })
})

/* H2 animations */

// Sélectionnez vos éléments h2
const h2Elements = document.querySelectorAll('h2')

// Parcourez chaque élément h2
h2Elements.forEach((h2Element) => {
  // Divisez le texte en lettres individuelles avec SplitText
  const splitText = new SplitText(h2Element, {
    type: 'chars',
  })

  // Créez une timeline pour l'animation
  const tl = gsap.timeline({ paused: true })

  // Animer chaque lettre
  tl.from(splitText.chars, {
    yPercent: -100,
    opacity: 0,
    stagger: 0.01,
    ease: 'power.inOut',
  })

  // Créez un scrollTrigger pour déclencher l'animation lorsque l'élément h2 entre dans la vue
  gsap.to(h2Element, {
    scrollTrigger: {
      trigger: h2Element,
      start: 'top 80%',
      onEnter: () => tl.play(), // Démarrez l'animation lorsque l'élément est dans la vue
    },
  })
})

/* Quote animations 2 */

const splitText2 = new SplitText('.quote.padding--small.is-second', {
  type: 'words',
})

$('.section.is-quote').each(function () {
  let triggerElement = $(this)
  let targetElement = $(splitText2.words)

  let tl13 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: '.quote-wrapper-content',
    },
  })
  tl13.from(targetElement, {
    opacity: 0.3,
    stagger: 1,
    ease: 'none',
  })
})
