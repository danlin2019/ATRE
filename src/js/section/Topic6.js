/**
 * ------------------------------------------------------------------------
 * Topic6
 * ------------------------------------------------------------------------
 */
class Topic6 {

  constructor() {
    // console.log('Topic6')
  }

  show() {
    // console.log('Rule show')
    const tl = new TimelineMax({
      onComplete: () => {
        $('#section-topic6').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    // TweenMax.to('#section-Topic6', 0.5, {autoAlpha: 0, delay: delay})
  }

  hide() {
    // console.log('Rule hide')
    $('#section-topic6').removeClass('active')
    let delay = 0
    TweenMax.to('#section-topic6', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}