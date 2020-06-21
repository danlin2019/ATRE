/**
 * ------------------------------------------------------------------------
 * Topic5
 * ------------------------------------------------------------------------
 */
class Topic5 {

  constructor() {
    // console.log('Topic5')
  }

  show() {
    // console.log('Rule show')
    const tl = new TimelineMax({
      onComplete: () => {
        $('#section-topic5').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    // TweenMax.to('#section-Topic5', 0.5, {autoAlpha: 0, delay: delay})
  }

  hide() {
    // console.log('Rule hide')
    $('#section-topic5').removeClass('active')
    let delay = 0
    TweenMax.to('#section-topic5', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}