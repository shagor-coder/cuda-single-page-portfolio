// Scroll Spy

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar-nav a')

window.addEventListener('scroll', () => {
  section.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 95
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('current')
        document
          .querySelector('header nav a[href*= ' + id + ']')
          .classList.add('current')
      })
    }
  })
})
// Swiper initialization
var swiper = new Swiper('.mySwiper', {
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
})

$(document).ready(function () {
  $('.button').click(function () {
    var value = $(this).attr('data-filter')
    if (value === 'all') {
      $('.filter').show('1000')
    } else {
      $('.filter')
        .not('.' + value)
        .hide('1000')
      $('.filter')
        .filter('.' + value)
        .show('1000')
    }
  })
})
