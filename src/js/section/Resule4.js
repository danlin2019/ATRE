/**
 * ------------------------------------------------------------------------
 * Resule3
 * ------------------------------------------------------------------------
 */
class Resule4 {

  constructor() {
    // console.log('Resule4')
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
         $('#section-resule,.resule-4').addClass('active')
        // $('.resule-4').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 1, dealy: dealy})
    TweenMax.to('.resule-4', 0.5, {autoAlpha: 1, delay: dealy})
    tl.fromTo('.resule-4 .edn-p1', 0.8, {opacity: 0, y:100}, {opacity: 1, y:0, ease: Power2.easeOut},0.5)
    tl.fromTo('.resule-4 .edn-p2', 2, {opacity: 0, x:150}, {opacity: 1, x:0,ease: Bounce.easeOut},0.7)
  }


  hide() {
    // console.log('Rule hide')
    $('#section-resule,.resule-4').removeClass('active')
    let dealy = 0
    TweenMax.to('#section-resule', 0.5, {autoAlpha: 0, dealy: dealy})
    TweenMax.to('.resule-4', 0.5, {
      autoAlpha: 0, delay: dealy, onComplete: () => {
        TweenMax.set('.resule-4 .edn-p1', { opacity: 0, y:100 })
        TweenMax.set('.resule-4 .edn-p2', { opacity: 0, x:150 })
      }
    })
  }
}