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
        console.log('index show Complete')
        $('#section-index').addClass('active')

        TweenMax.fromTo('#section-index .title', 0.5, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, delay: 0.3 })


        tl.play()
        // tl.fromTo('#section-index .slider-1', 1, { autoAlpha: 0 }, { autoAlpha: 1}, 0.8)
        tl.fromTo('.slider-1 .bg span:first-child', 0.5, { autoAlpha: 0, x: -300 }, { autoAlpha: 1, x: 0 }, 0.8)
        tl.fromTo('.slider-1 .bg span:nth-child(2)', 0.5, { autoAlpha: 0, x: -200 }, { autoAlpha: 1, x: 0 }, 1)
        tl.fromTo('.slider-1 .bg span:nth-child(3)', 0.5, { autoAlpha: 0, x: -400 }, { autoAlpha: 1, x: 0 }, 1)
        // 用一個無用的div去拖時間
        tl.fromTo('.slider-1 .bg ', 0.5, { autoAlpha: 1 }, {
          autoAlpha: 1, delay: 2, onComplete: () => {

            TweenMax.fromTo('.slider-1 .bg span:first-child', 0.5, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: -200 })
            TweenMax.fromTo('.slider-1 .bg span:nth-child(2)', 0.5, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: 200 })
            TweenMax.fromTo('.slider-1 .bg span:nth-child(3)', 0.5, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: -400})
          }
        }, 2)




        // tl.fromTo('#section-index .slider-2', 1, { autoAlpha: 0 }, {
        //   autoAlpha: 1, onComplete: () => {
        //     TweenMax.fromTo('#section-index .slider-2',1, { autoAlpha: 1 }, { autoAlpha: 0})
        //   }
        // }, 4.6)
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
