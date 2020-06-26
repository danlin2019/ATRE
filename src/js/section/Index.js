/**
 * ------------------------------------------------------------------------
 * Index
 * ------------------------------------------------------------------------
 */
class Index {

  constructor() {
    console.log('Index')
  }

  show() {
    let dealy = 0
    TweenMax.fromTo('#section-index', 0.8, { autoAlpha: 0 }, {autoAlpha: 1, delay: dealy, onComplete: () => {console.log('index show Complete')
    // myAnimation.play()  
        $('#section-intor').addClass('open')
        $('.btn-in').addClass('go-step')
        $('#section-index').addClass('active')
        
      }
    })
  }

  hide() {
    // console.log('product hide')
    $('.btn-in').removeClass('go-step')
    $('#section-index').removeClass('active')
    let delay = 0
    TweenMax.set('#section-index', {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('#section-index .title-dec', { alpha: 0, y: 30 })
      }
    })
  }



}
setTimeout(()=> {
  TweenMax.fromTo('#section-index .title', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0.1, ease: Power2.easeOut })
  a1Open()
},500)
function a1Open() {
  TweenMax.fromTo('.slider-1 .slider-img .person', 0.8, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.4 })
  TweenMax.fromTo('.slider-1 .slider-img .slogan', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.5 })
  TweenMax.fromTo('.slider-1 .bg span:first-child', 0.5, { opacity: 0, x: -500 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.4 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(2)', 0.5, { opacity: 0, x: -200 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.5 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(3)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.6 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(4)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.7 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(5)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, onComplete: a1Close, delay: 0.8 })
}

function a1Close() {
  TweenMax.fromTo('.slider-1 .slider-img .person', 0.6, { opacity: 1, y: 0 }, { opacity: 0, y: 50, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-1 .slider-img .slogan', 0.5, { opacity: 1, y: 0 }, { opacity: 0, y: 30, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-1 .bg span:first-child', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -500, ease: Power2.easeOut, delay: 2 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(2)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -200, ease: Power2.easeOut, delay: 2.1 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(3)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, ease: Power2.easeOut, delay: 2.2 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(4)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, ease: Power2.easeOut, delay: 2.3 })
  TweenMax.fromTo('.slider-1 .bg span:nth-child(5)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, onComplete: a2Open, delay: 2.4 })
}
function a2Open() {
  TweenMax.fromTo('.slider-2 .person', 0.6, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.5 })
  TweenMax.fromTo('.slider-2 .slider-img .slogan', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.5 })
  TweenMax.fromTo('.slider-2 .bg span:first-child', 0.5, { opacity: 0, x: -400 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(2)', 0.5, { opacity: 0, x: -200 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.1 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(3)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.2 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(4)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.3 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(5)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.4 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(6)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, onComplete: a2Close, delay: 0.5 })
}
function a2Close() {
  TweenMax.fromTo('.slider-2 .slider-img .person', 0.6, { opacity: 1, y: 0 }, { opacity: 0, y: 50, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-2 .slider-img .slogan', 0.5, { opacity: 1, y: 0 }, { opacity: 0, y: 30, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-2 .bg span:first-child', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -400, ease: Power2.easeOut, delay: 2 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(2)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -200, ease: Power2.easeOut, delay: 2.1 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(3)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.2 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(4)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.3 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(5)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.2 })
  TweenMax.fromTo('.slider-2 .bg span:nth-child(6)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, onComplete: a3Open, delay: 2.3 })
}
function a3Open() {
  TweenMax.fromTo('.slider-3 .slider-img .person', 0.8, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.5 })
  TweenMax.fromTo('.slider-3 .slider-img .slogan', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.5 })
  TweenMax.fromTo('.slider-3 .bg span:first-child', 0.5, { opacity: 0, x: -400 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(2)', 0.5, { opacity: 0, x: -200 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.1 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(3)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.2 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(4)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.3 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(5)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.4 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(6)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, onComplete: a3Close, delay: 0.5 })
}
function a3Close() {
  TweenMax.fromTo('.slider-3 .slider-img .person', 0.6, { opacity: 1, y: 0 }, { opacity: 0, y: 50, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-3 .slider-img .slogan', 0.5, { opacity: 1, y: 0 }, { opacity: 0, y: 30, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-3 .bg span:first-child', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -400, ease: Power2.easeOut, delay: 2 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(2)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -200, ease: Power2.easeOut, delay: 2.1 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(3)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.2 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(4)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.3 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(5)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.2 })
  TweenMax.fromTo('.slider-3 .bg span:nth-child(6)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, onComplete: a4Open, delay: 2.3 })
}
function a4Open() {
  TweenMax.fromTo('.slider-4 .slider-img .person', 0.8, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.4 })
  TweenMax.fromTo('.slider-4 .slider-img .slogan', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.5 })
  TweenMax.fromTo('.slider-4 .bg span:first-child', 0.5, { opacity: 0, x: -400 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(2)', 0.5, { opacity: 0, x: -200 }, { opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.1 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(3)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.2 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(4)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.3 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(5)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, delay: 0.4 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(6)', 0.5, { opacity: 0, x: -300 }, { opacity: 1, x: 0, onComplete: a4Close, delay: 0.5 })
}
function a4Close() {
  TweenMax.fromTo('.slider-4 .slider-img .person', 0.6, { opacity: 1, y: 0 }, { opacity: 0, y: 50, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-4 .slider-img .slogan', 0.5, { opacity: 1, y: 0 }, { opacity: 0, y: 30, ease: Power2.easeOut, delay: 2.5 })
  TweenMax.fromTo('.slider-4 .bg span:first-child', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -400, ease: Power2.easeOut, onComplete: a1Open, delay: 2 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(2)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -200, ease: Power2.easeOut, delay: 2.1 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(3)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.2 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(4)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.3 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(5)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.2 })
  TweenMax.fromTo('.slider-4 .bg span:nth-child(6)', 0.5, { opacity: 1, x: 0 }, { opacity: 0, x: -300, delay: 2.3 })
}