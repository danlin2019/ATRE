/**
 * ------------------------------------------------------------------------
 * News
 * ------------------------------------------------------------------------
 */
class News {
  constructor() {
    // console.log('Index')
  }

  show() {
     $('#section-news').addClass('active')
    let dealy = 0
    TweenMax.fromTo('#section-news', 0.8, { autoAlpha: 0 }, {autoAlpha: 1, delay: dealy})
  }

  hide() {
    // console.log('product hide')
    $('#section-news').removeClass('active')
    let delay = 0
    TweenMax.set('#section-news', {autoAlpha: 0, delay: delay })
  }
}