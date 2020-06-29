/**
 * ------------------------------------------------------------------------
 * Topic1
 * ------------------------------------------------------------------------
 */
class Topic2 {

  constructor() {
    // console.log('Topic2')
    $('.topic2 .topic-radio label').click(() => {
      goto('Topic3')
    })
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        // console.log('Rule show Complete')
      }
    })
    $('.topic2').addClass('active')
    let dealy = 0
    TweenMax.to('.topic2', 0.5, {autoAlpha: 1, delay: dealy})
    tl.fromTo('.topic2 .topic-bg1',0.8,{opacity: 0, x: 100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.5)
    tl.fromTo('.topic2 .topic-bg2',0.8,{opacity: 0, x: -100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.5 )
    tl.fromTo('.topic2 .topic-item-1-box',1,{opacity: 0},{opacity: 1, ease: Power2.easeOut},1.1)

  }

  hide() {
    // console.log('Rule hide')
    $('.topic2').removeClass('active')
    let delay = 0
    TweenMax.to('.topic2', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('.topic2 .topic-bg1', { opacity: 0, x: -100 })
        TweenMax.set('.topic2 .topic-bg2', { opacity: 0, x: 100 })
        TweenMax.set('topic-item-1-box', {opacity: 0 })
      }
    })
  }
}