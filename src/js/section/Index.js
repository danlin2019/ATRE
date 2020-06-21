/**
 * ------------------------------------------------------------------------
 * Index
 * ------------------------------------------------------------------------
 */
class Index {

  constructor() {
    console.log('Index')
  }

  show() {
    let dealy = 0
  
    TweenMax.fromTo('#section-index', 0.8, { autoAlpha: 0 }, {
      autoAlpha: 1, delay: dealy, onComplete: () => {
        // console.log('product show Complete')
        $('#section-index').addClass('active')

        TweenMax.fromTo('#section-index .title-dec', 0.5, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, delay: 0.3 })

        
        tl.play()
        tl.fromTo('#section-index .highlight-4', 1, { autoAlpha: 0 }, { autoAlpha: 1, onComplete: () => {
            TweenMax.fromTo('#section-index .highlight-4', { autoAlpha: 1 }, { autoAlpha: 0 })
          }
        }, 1)

        tl.fromTo('#section-index .highlight-2', 1, { autoAlpha: 0 }, {
          autoAlpha: 1, onComplete: () => {
            TweenMax.fromTo('#section-index .highlight-2', { autoAlpha: 1 }, { autoAlpha: 0 })
          }
        }, 3)
      }
    })

  }

  hide() {
    // console.log('product hide')
    $('#section-index').removeClass('active')
    let delay = 0
    tl.paused(true)
    TweenMax.set('#section-index', {
      autoAlpha: 0, delay: delay, onComplete: () => {
        TweenMax.set('#section-index .title-dec', { alpha: 0, y: 30 })
      }
    })
  }

}

const tl = new TimelineMax({
  repeat: -1
})