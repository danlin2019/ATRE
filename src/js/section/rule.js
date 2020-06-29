/**
 * ------------------------------------------------------------------------
 * Rule
 * ------------------------------------------------------------------------
 */
class Rule {
  constructor() {
    // console.log('Index')
  }

  show() {
    let dealy = 0
    TweenMax.fromTo('#section-rule', 0.8, { autoAlpha: 0 }, {autoAlpha: 1, delay: dealy, onComplete: () => {
        // console.log('index show Complete')
        $('#section-rule').addClass('active')
      }
    })
  }

  hide() {
    // console.log('product hide')
    $('#section-rule').removeClass('active')
    let delay = 0
    TweenMax.set('#section-rule', {autoAlpha: 0, delay: delay })
  }
}