/**
 * ------------------------------------------------------------------------
 * Topic4
 * ------------------------------------------------------------------------
 */
class Topic4 {

  constructor() {
    // console.log('Topic4')
    $('.topic4 .topic-radio label').click(() => {
      goto('Topic5')
    })
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        $('.topic4').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('.topic4', 0.5, {autoAlpha: 1, delay: dealy})
  }

  hide() {
    // console.log('Rule hide')
    $('.topic4').removeClass('active')
    let delay = 0
    TweenMax.to('.topic4', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}