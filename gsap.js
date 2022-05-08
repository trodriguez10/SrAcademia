gsap.registerPlugin(ScrollTrigger)

gsap.from('nav', { y: '-100%', duration: 1,  ease: "power1.Out" })
gsap.from('nav', {duration: 1.3, opacity:0 })
gsap.from('.navbar-brand', {duration: 1.5, delay: 0.7, opacity: 0 })
gsap.from('.nav-item', { delay: 0.9, opacity:0, duration: 1 })
gsap.from('#Background', { scale: 1.05, duration: 1.4, opacity:0.5, ease: 'power1.inOut' })

gsap.to('#wpp-button', {scrollTrigger: '#quienes_somos', opacity: 1, duration: 1.4} )

let section1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#quienes_somos',
    start: '0 80%'
  }
})

let section2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#nosotros',
    start: '0 60%'
  }
})

let section3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#nuestros_alumnos",
    start: '0 70%'
  }
})


// refactor separar titulo de lo otro

if( document.documentElement.clientWidth < 768) {
  console.log('mobile')

  section1.from('#quienes', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section1-p', { y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=0.5')
  .from('#section1-img', { y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1')
  .from('#section1-a',{ y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1' )

  section2.from('#estudia', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section2-p2', { y:20, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1')
  .from('#section2-img', { y: 10, opacity: 0, duration: 1.3, ease: "power1.Out" }, '-=1')

  section3.from('#alumnos', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section3-p2', { y:20, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1')
  .from('#section3-img', { y: 10, opacity: 0, duration: 1.3, ease: "power1.Out" }, '-=1')

} else {
  section1.from('#quienes', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section1-p', { x: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=0.5')
  .from('#section1-img', { x: -10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1')
  .from('#section1-a',{ y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1' )

  section2.from('#estudia', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section2-p', { x: -10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=0.5')
  .from('#section1-p2', { x: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1')
  .from('#section2-img', { x: 10, opacity: 0, duration: 1.3, ease: "power1.Out" }, '-=1')

  section3.from('#alumnos', { y: 40, opacity: 0, duration: 1, ease: "power1.Out" })
  .from('#section3-p', { x: -10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=0.5')
  .from('#section3-img', { x: -10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1')
  .from('#section3-a',{ y: 10, opacity: 0, duration: 1, ease: "power1.Out" }, '-=1' )
}
