/**
 * ------------------------------------------------------------------------
 * Topic5
 * ------------------------------------------------------------------------
 */
class Topic5 {

  constructor() {
    // console.log('Topic5')
    $('.topic5 .topic-radio label').click(() => {
      goto('Topic6')
    })
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        
        // console.log('Rule show Complete')
      }
    })
    $('.topic5').addClass('active')
    let dealy = 0
    TweenMax.to('.topic5', 0.5, {autoAlpha: 1, delay: dealy})
    tl.fromTo('.topic5 .topic-item-1', 1, {autoAlpha: 0,y:30}, {autoAlpha: 1,y:0, ease: Power2.easeOut},0.2)
    tl.fromTo('.topic5 .topic-item-2', 1, {autoAlpha: 0,y:30}, {autoAlpha: 1,y:0, ease: Power2.easeOut},0.2)
  }

  hide() {
    // console.log('Rule hide')
    $('.topic5').removeClass('active')
    let delay = 0
    TweenMax.to('.topic5', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('.topic5 .topic-item-1',{autoAlpha: 0,y:30})
        TweenMax.set('.topic5 .topic-item-2',{autoAlpha: 0,y:30})
      }
    })
  }
}