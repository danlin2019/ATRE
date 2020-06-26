/**
 * ------------------------------------------------------------------------
 * Resule1
 * ------------------------------------------------------------------------
 */
class Resule1 {

  constructor() {
    // console.log('Resule1')
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        $('#section-resule').addClass('active')
        // $('.resule-1').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 1, dealy: dealy})
    TweenMax.to('.resule-1', 0.5, {autoAlpha: 1, delay: dealy})
  }

  hide() {
    // console.log('Rule hide')
    $('#section-resule').removeClass('active')
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 0, dealy: dealy})
    TweenMax.to('.resule-1', 0.5, {
      autoAlpha: 0, delay: dealy, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}