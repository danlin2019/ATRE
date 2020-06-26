/**
 * ------------------------------------------------------------------------
 * Topic1
 * ------------------------------------------------------------------------
 */
class Topic3 {

  constructor() {
    // console.log('Topic3')
    $('.topic3 .topic-radio label').click(() => {
      goto('Topic4')
    })
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        $('.topic3').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('.topic3', 0.5, {autoAlpha: 1, delay: dealy})
  }

  hide() {
    // console.log('Rule hide')
    $('.topic3').removeClass('active')
    let delay = 0
    TweenMax.to('.topic3', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}