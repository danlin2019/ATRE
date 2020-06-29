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
        // console.log('Rule show Complete')
      }
    })
    $('.topic4').addClass('active')
    let dealy = 0
    TweenMax.to('.topic4', 0.5, {autoAlpha: 1, delay: dealy})

    tl.fromTo('.topic4 .topic-bg1',1,{opacity: 0, x: -100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.5)
    tl.fromTo('.topic4 .topic-bg2',1,{opacity: 0, x: 100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.5)
    tl.fromTo('.topic4 .topic-item-1',1,{opacity: 0, left: -100},{opacity: 1 ,left:0, ease: Power2.easeOut},0.8)
    tl.fromTo('.topic4 .topic-item-2',1,{opacity: 0, left: -100},{opacity: 1 ,left:0, ease: Power2.easeOut},0.8)
    tl.fromTo('.topic4 .topic-item-3',1,{opacity: 0, y: 50},{opacity: 1 ,y:0, ease: Power2.easeOut},1)
    tl.fromTo('.topic4 .topic-item-4',1,{opacity: 0, y: 50},{opacity: 1 ,y:0, ease: Power2.easeOut},1)
  }

  hide() {
    // console.log('Rule hide')
    $('.topic4').removeClass('active')
    let delay = 0
    TweenMax.to('.topic4', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('.topic4 .topic-bg1',{opacity: 0, x: -100})
        TweenMax.set('.topic4 .topic-bg2',{opacity: 0, x: 100})
        TweenMax.set('.topic4 .topic-item-1',{opacity: 0, left: -100})
        TweenMax.set('.topic4 .topic-item-2',{opacity: 0, left: -100})
        TweenMax.set('.topic4 .topic-item-3',{opacity: 0, y: 50})
        TweenMax.set('.topic4 .topic-item-4',{opacity: 0, y: 50})
      }
    })
  }
}