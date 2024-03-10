
let movePage = document.querySelectorAll('.swiper-btn')

console.log(movePage)


const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// let currentPage = swiper.activeIndex;
for(let i=0; i<movePage.length; i++) {
  movePage[i].addEventListener('click', () => {
    if(swiper.activeIndex == 0) {
      tl.restart()
    } else if (swiper.activeIndex == 1) {
      tl2.restart()
    } else if (swiper.activeIndex == 2) {
      tl3.restart()
    } else if (swiper.activeIndex == 3) {
      tl4.restart()
    }
  })
}



// btnLeft.addEventListener('click', () => {
//   if(swiper.activeIndex == 0) {
//     tl.restart()
//   } else if (swiper.activeIndex == 1) {
//     tl2.restart()
//   } else if (swiper.activeIndex == 2) {
//     tl3.restart()
//   }
// })





// slide01

let tl = gsap.timeline();
tl.to('.li-first', {
  delay: 1,
  opacity: 1,
  stagger: 0.5,
  duration: .2,
})

tl.to('.ball1', {
  left: 1150,
  duration: .8
})


// slide02

let tl2 = gsap.timeline({paused: true});

tl2.from(".ball2", { 
  x: -350,
  y: 270,
  z: 1600,
  duration: .7,
  delay: .5,
  ease: ' CustomEase.create("custom", "M0,0 C0.46, 0 0.2, 0.4 0.6, 0.5 0.8, .55 0.9, .8 1,1 ")',
})

tl2.to('.ball2', {
  rotation: 1080,
  delay: .1,
  duration: .6,
  ease: 'ease',
},'<')

tl2.to('.ball2', {
  opacity: 0,
  duration: 0.02,
})

tl2.to('.crack-area', {
  opacity: 1,
  duration: 0.1
}, '-=0.15')



//slide03

let tl3 = gsap.timeline({paused: true}); 

tl3.to('.li-person', {
  delay: 1,
  opacity: 1,
  stagger: 0.3,
  duration: 0.1
})

tl3.to('.ball-area3', {
  left: 1040,
  duration: 1.75
},'<')

tl3.to('.ball3', {
  rotation: 1080,
  duration: 1.75
},'<')

tl3.to('.line3', {
  left: 0,
  duration: .3,
  ease: 'linear'
},'<')

tl3.to('.line2', {
  left: 341,
  duration: .3,
  ease: 'linear',
},'>')

tl3.to('.line1', {
  left: 684,
  duration: .4,
  ease: 'linear',
},'>')



//slide04

let tl4 = gsap.timeline({paused: true})

tl4.from('.counter', {
  textContent: 0,
  duration: 1,
  delay: 0.3,
  ease: "power1.in",
  snap: { textContent: 75 },
  stagger: {
    each: 1.0,
    onUpdate: function() {
      this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
    },
  }
});


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}