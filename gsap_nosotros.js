gsap.registerPlugin(ScrollTrigger)

gsap.from('nav', { y: '-100%', duration: 1,  ease: "power1.Out" })
gsap.from('nav', {duration: 1.3, opacity:0 })
gsap.from('.navbar-brand', {duration: 1.5, delay: 0.7, opacity: 0 })
gsap.from('.nav-item', { delay: 0.9, opacity:0, duration: 1 })

gsap.from('#wpp-button',  { scale: 0.2, duration: 1.4, opacity:0, ease: 'power1.inOut' })


let section1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#section1-title',
    start: '0 80%'
  }
})

let section2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#section2',
    start: '0 80%'
  }
})

section1.from('#section1-title', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section1-p', { y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=0.5')
  .from('#section1-img', { y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1')

  section2.from('#section2-img', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section2-p', { y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=0.5')

