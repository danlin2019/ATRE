/**
 * ------------------------------------------------------------------------
 * Resule
 * ------------------------------------------------------------------------
 */
class Resule {

  constructor() {
    console.log('Resule')
  }

  show() {
    // console.log('Rule show')
    const tl = new TimelineMax({
      onComplete: () => {
        $('#section-resule').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let delay = 0

    TweenMax.to('#section-resule', 0.5, {autoAlpha: 1, delay: delay})
  }

  hide() {
    // console.log('Rule hide')
    $('#section-resule').removeClass('active')
    let delay = 0
    TweenMax.to('#section-resule', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}