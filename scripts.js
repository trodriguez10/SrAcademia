window.addEventListener('scroll', () => {
  const viewPort = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  let navBar = document.querySelector('nav');
  let links = document.querySelectorAll('.nav-link')
  let button = document.querySelectorAll('.ham-bars')
  let wppButton = document.getElementById('wpp-button')
  let whiteLogo = document.getElementById('white-logo')
  let logo = document.getElementById('logo')

  if (viewWidth > 700) {
    navBar.classList.toggle('scrolling-active', window.scrollY > 0)
    whiteLogo.classList.toggle('d-none', window.scrollY > 0)
    logo.classList.toggle('d-none', window.scrollY <= 0)
    for (let bars of button) {
      bars.classList.toggle('bg-secondary', window.scrollY <= 0)
    }

    for (let elem of links) {
      elem.classList.toggle('text-secondary', window.scrollY <= 0)

      if (elem.classList.contains('active'))
        elem.classList.toggle('text-white', window.scrollY <= 0)
    }
  } else {
    navBar.classList.add('bg-white')
    whiteLogo.classList.add('d-none')
    logo.classList.remove('d-none')

    for (let elem of links) {
      if (elem.classList.contains('active')) {
        elem.classList.remove('text-white')
        elem.classList.add('text-black')
      }
    }
  }

  wppButton.classList.add('opacity-0', window.scrollY > viewPort * 0.8 )
  wppButton.classList.add('wpp-circle', window.scrollY > viewPort * 0.8 )
})

window.addEventListener('load', () => {
  const viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  let navBar = document.querySelector('nav');
  let links = document.querySelectorAll('.nav-link')
  let button = document.querySelectorAll('.ham-bars')
  let wppButton = document.getElementById('wpp-button')
  let whiteLogo = document.getElementById('white-logo')
  let logo = document.getElementById('logo')


  if (viewWidth <= 700) {
    navBar.classList.add('bg-white')
    whiteLogo.classList.add('d-none')
    logo.classList.remove('d-none')

    for (let elem of links) {
      if (elem.classList.contains('active')) {
        elem.classList.remove('text-white')
        elem.classList.add('text-black')
      }
    }
  }
})
