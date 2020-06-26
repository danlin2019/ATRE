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
        $('.topic6').addClass('active')
        // console.log('Rule show Complete')
      }
    })
    let dealy = 0
    TweenMax.to('.topic6', 0.5, {autoAlpha: 1, delay: dealy})
  }

  hide() {
    // console.log('Rule hide')
    $('.topic6').removeClass('active')
    $('.btn-in').removeClass('go-end')

    let delay = 0
    TweenMax.to('.topic6', 0.5, {
      autoAlpha: 0, delay: delay, onComplete: () => {
        // TweenMax.set('#section-rule .title-dec', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .content-box', { alpha: 0, y: 30 })
        // TweenMax.set('#section-rule .rule-btn', { alpha: 0, y: 30 })
      }
    })
  }
}