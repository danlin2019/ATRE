/**
 * ------------------------------------------------------------------------
 * Resule2
 * ------------------------------------------------------------------------
 */
class Resule2 {

  constructor() {
    // console.log('Resule2')
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        $('#section-resule').addClass('active')
        // $('.resule-2').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 1, dealy: dealy})
    TweenMax.to('.resule-2', 0.5, {autoAlpha: 1, delay: dealy})
  }

  hide() {
    // console.log('Rule hide')
    $('#section-resule').removeClass('active')
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 0, dealy: dealy})
    TweenMax.to('.resule-2', 0.5, {
      autoAlpha: 0, delay: dealy, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}