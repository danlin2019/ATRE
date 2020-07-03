/**
 * ------------------------------------------------------------------------
 * Index
 * ------------------------------------------------------------------------
 */
class Index {
  constructor() {
    // console.log('Index')
  }

  show() {
    $('#section-intor').removeClass('open2')
    let dealy = 0
    TweenMax.fromTo('#section-index', 0.8, { autoAlpha: 0 }, {autoAlpha: 1, delay: dealy, onComplete: () => {
      // console.log('index show Complete')
        $('#section-intor').addClass('open')
        $('.btn-in').addClass('go-step')
        $('#section-index').addClass('active')
        
      }
    })
  }

  hide() {
    // console.log('product hide')
    $('#section-intor').removeClass('open')
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