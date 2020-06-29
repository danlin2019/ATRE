/**
 * ------------------------------------------------------------------------
 * Topic6
 * ------------------------------------------------------------------------
 */
class Topic6 {

  constructor() {
    // console.log('Topic6')
    $('.topic6 .topic-radio label').click(() => {
      $('.btn-in').addClass('go-end')
      $('#section-intor').stop().fadeIn()
    })
  }

  show() {
    // console.log('Rule show')
    
    const tl = new TimelineMax({
      onComplete: () => {
        
        // console.log('Rule show Complete')
      }
    })
    $('.topic6').addClass('active')
    let dealy = 0
    TweenMax.to('.topic6', 0.5, {autoAlpha: 1, delay: dealy})
    tl.fromTo('.topic6 .topic-item-2', 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power2.easeOut},0.5)
    tl.fromTo('.topic6 .topic-item-1', 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power2.easeOut},1)

  }

  hide() {
    // console.log('Rule hide')
    $('.topic6').removeClass('active')
    $('.btn-in').removeClass('go-end')

    let delay = 0
    TweenMax.to('.topic6', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('.topic6 .topic-item-2',{autoAlpha: 0})
        TweenMax.set('.topic6 .topic-item-1',{autoAlpha: 0})
    
      }
    })
  }
}