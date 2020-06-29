/**
 * ------------------------------------------------------------------------
 * Topic1
 * ------------------------------------------------------------------------
 */
class Topic1 {

  constructor() {
    // console.log('Topic1')
    $('.topic1 .topic-radio label').click(() => {
      goto('Topic2')
    })
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        
        // console.log('Rule show Complete')
      }
    })
    $('.topic1').addClass('active')
    let dealy = 0
    TweenMax.to('.topic1', 0.5, {autoAlpha: 1, delay: dealy})
    tl.fromTo('.topic1 .topic-bg1',0.6,{opacity: 0, x: -100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.5)
    tl.fromTo('.topic1 .topic-bg2',0.6,{opacity: 0, x: 100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.5)
    tl.fromTo('.topic1 .topic-item-1',1,{opacity: 0,x: -100},{opacity: 1,x: 0, ease: Power2.easeOut},0.9)
    tl.fromTo('.topic1 .topic-item-3',1,{opacity: 0,x: 100},{opacity: 1,x: 0, ease: Power2.easeOut},0.9)
    tl.fromTo('.topic1 .topic-item-2',1,{opacity: 0,x: -50},{opacity: 1,x: 0, ease: Power2.easeOut},1.3)
    tl.fromTo('.topic1 .topic-item-4',1,{opacity: 0,x: 50},{opacity: 1,x: 0, ease: Power2.easeOut},1.3)
    tl.fromTo('.topic1 .topic-item-5',1,{opacity: 0,x: -50},{opacity: 1,x: 0, ease: Power2.easeOut},1.3)
  }

  hide() {
    // console.log('Rule hide')
    $('.topic1').removeClass('active')
    let delay = 0
    TweenMax.to('.topic1', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('.topic1 .topic-bg1', { alpha: 0, x: -100 })
        TweenMax.set('.topic1 .topic-bg2', { alpha: 0, x: -100 })
        TweenMax.set('.topic1 .topic-item-1', { alpha: 0, x: -100 })
        TweenMax.set('.topic1 .topic-item-2', { alpha: 0, x: -50 })
        TweenMax.set('.topic1 .topic-item-3', { alpha: 0, x: 100 })
        TweenMax.set('.topic1 .topic-item-4', { alpha: 0, x: 50 })
        TweenMax.set('.topic1 .topic-item-5', { alpha: 0, x: -50 })

      }
    })
  }
}