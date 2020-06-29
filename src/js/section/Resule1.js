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
        $('#section-resule,.resule-1').addClass('active')
        // $('.resule-1').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 1, dealy: dealy})
    TweenMax.to('.resule-1', 0.5, {autoAlpha: 1, delay: dealy})
    tl.fromTo('.resule-1 .edn-p1', 0.8, {opacity: 0, y:100}, {opacity: 1, y:0, ease: Power2.easeOut},0.5)
    tl.fromTo('.resule-1 .edn-p2', 0.8, {opacity: 0, x:100}, {opacity: 1, x:0, ease: Power2.easeOut},0.8)

    
  }

  hide() {
    // console.log('Rule hide')
    $('#section-resule,.resule-1').removeClass('active')
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 0, dealy: dealy})
    TweenMax.to('.resule-1', 0.5, {
      autoAlpha: 0, delay: dealy, onComplete: () => {
        TweenMax.set('.resule-1 .edn-p1', {opacity: 0, y:100})
        TweenMax.set('.resule-1 .edn-p2', {opacity: 0, x:100})
      }
    })
  }
}