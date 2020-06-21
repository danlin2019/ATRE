/**
 * ------------------------------------------------------------------------
 * Rule
 * ------------------------------------------------------------------------
 */
class Rule {

  constructor() {
    // console.log('Rule')
    $('.rule-btn').click(() => {
      window.goto('Game_instructions')
    })
  }

  show() {
    // console.log('Rule show')
    const tl = new TimelineMax({
      onComplete: () => {
        $('#section-rule').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    tl.fromTo('#section-rule', 0.5, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.5)
    tl.fromTo('#section-rule .title-dec', 0.5, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0 }, 0.5)
    tl.fromTo('#section-rule .content-box', 0.5, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0 }, 0.8)
    tl.fromTo('#section-rule .rule-btn', 0.5, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0 }, 1.1)

  }

  hide() {
    // console.log('Rule hide')
    $('#section-rule').removeClass('active')
    let delay = 0
    TweenMax.to('#section-rule', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }

}