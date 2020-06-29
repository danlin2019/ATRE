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
        console.log('Rule show Complete')
      }
    })
    $('.topic3').addClass('active')
    let dealy = 0
    TweenMax.to('.topic3', 0.5, {autoAlpha: 1, delay: dealy})
    tl.fromTo('.topic3 .topic-bg1',{opacity: 0, x: -100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.3)
    tl.fromTo('.topic3 .topic-bg2',0.8,{opacity: 0, x: 100},{opacity: 1 ,x:0, ease: Power2.easeOut},0.3)
    tl.fromTo('.topic3 .topic-item-1',0.8,{opacity: 0, x: -100},{opacity: 1 ,x:0, ease: Power2.easeOut},1)
    tl.fromTo('.topic3 .topic-item-2',0.8,{opacity: 0, x: 100},{opacity: 1 ,x:0, ease: Power2.easeOut},1)
    // tl.fromTo('.topic3 .topic-item-2 .item-box img',3,{opacity: 1,scale:1.03,x:-10 },{opacity: 1 ,scale:1, repeat:-1,x:0,ease:Power3.easeInOuteaseInOut, yoyo:true},1.2)
  }

  hide() {
    // console.log('Rule hide')
    $('.topic3').removeClass('active')
    let delay = 0
    TweenMax.to('.topic3', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('.topic3 .topic-bg1', { opacity: 0,  x: -100 })
        TweenMax.set('.topic3 .topic-bg2',{opacity: 0, x: 100})
        TweenMax.set('.topic3 .topic-item-1',{opacity: 0, x: -100})
        TweenMax.set('.topic3 .topic-item-2',{opacity: 0, x: 100})
        // TweenMax.set('.topic3 .topic-item-2 .item-box img',{opacity: 1,scale:1.03,x:-10 })
      }
    })
  }
}