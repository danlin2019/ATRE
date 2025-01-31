var wrapper = new Vue({
  el: '#wrapper',
  data: {
    // input
    data: '',
    userName: '',
    test1: '',
    test2: '',
    test3: '',
    test4: '',
    test5: '',
    test6: '',
    num: '',
    numtotal: '',
    isActive: false,
    newsList: [],
    fbShare: ''
  },
  methods: {
    //  開始
    goTest() {
      if (!this.data) {
        alert('請輸入您的名稱')
        
      } else {
        $('#section-intor').stop().fadeIn()
        this.userName = this.data
        $('.header-box').css('background-color','#ffffff')
      }
    },
    goStep() {
      $('.header-box').css('background-color','')
      let btn = $('.btn-in')
      if (btn.hasClass('go-step')) {
        $('#section-intor').stop().fadeOut()
        goto('Topic1')
      } else if (btn.hasClass('go-end')) {
        $('#section-intor').stop().fadeOut()
        const q1 = Number(this.test1)
        const q2 = Number(this.test2)
        const q3 = Number(this.test3)
        const q4 = Number(this.test4)
        const q5 = Number(this.test5)
        const q6 = Number(this.test6)
        this.num = q1 + q2 + q3 + q4 + q5 + q6
        this.numtotal = this.num
        // 判斷狀態
        let num = null
        // https://ithelp.ithome.com.tw/articles/10210319      
        if(this.numtotal === 4) {
          console.log('第四種')
          num = 4
        }else if (this.numtotal === 5 || this.numtotal === 6) {
          console.log('第三種')
          num = 3
        } else if (this.numtotal === 7 || this.numtotal <= 9) {
          console.log('第二種')
          num = 2
        } else if (this.numtotal === 10 || this.numtotal <= 13) {
          console.log('第一種')
          num = 1
        } 
        this.fbShare = num
        // console.log(num)
        goto(`Resule${num}`)
      }
    },
    fbshare(){
      const data = `http://www.danportfolio.url.tw/arte/fb/retuel-${this.fbShare}.html`
      const url = `http://www.facebook.com/share.php?u=${encodeURIComponent(data)}`
      console.log(data)
      console.log(url)
      window.open(url, '_blank')
    },
    goStep1(){
      goto('Topic1')
      // 清空資料
      this.fbShare = ''
      this.numtotal = ''
      this.num = ''
    },
    goHome() {
      $('.hamburger-menu').removeClass('animate')
      $('.nav-box li').removeClass('active')
      $('.nav-box li:eq(0)').addClass('active')
        $('#section-intor').stop().fadeOut()
        this.isActive = false
        $('.nav-box').stop().fadeOut(0)
      $('.header-box').css('background-color','')

        goto('Index')
        this.data =''
        this.userName =''     
        this.fbShare = ''
        this.numtotal = ''
        this.num = ''    
    },
    goNews() {
      this.isActive = false
      goto('News')
      $('.hamburger-menu').removeClass('animate')
      $('.nav-box').stop().fadeOut()
      $('#section-intor').stop().fadeOut()
      $('.header-box').css('background-color','#ffffff')
      $('.nav-box li').removeClass('active')
      $('.nav-box li:eq(1)').addClass('active')
       $('.bg-1').addClass('active')
    },
    goRule() {
      this.isActive = false
      goto('Rule')
      $('.hamburger-menu').removeClass('animate')
      $('#section-intor').stop().fadeOut()
      $('.nav-box').stop().fadeOut()
      $('.header-box').css('background-color','#ffffff')
       $('.bg-1').addClass('active')
    },
    // 選單
    menuList() {
      setTimeout(()=> {
        $('#section-news,#section-rule').scrollTop(0)
        // $('').scrollTop(0)
      },400)

      this.isActive = !this.isActive
      if (this.isActive) {
        $('.hamburger-menu').addClass('animate')
        // $('header').removeClass('no-header')
        $('.nav-box').stop().fadeIn()
        
      } else {
        if($('#section-index').hasClass('active')) {
          // $('header').addClass('no-header')
          $('.nav-box').stop().fadeOut()
          $('.hamburger-menu').removeClass('animate')
          $('.header-box').css('background-color','')
        }
        $('.hamburger-menu').removeClass('animate')
        $('.nav-box').stop().fadeOut()
        
      }
    }
  },
  mounted() {
    axios
      .get('api/newsList1.json')
      .then((response) => {
        this.newsList = response.data
        // console.log(this.newsList)
        this.newsList.forEach((e) => {
          e.content = e.content.replace(/\n/g, '<br />')
        });
      })
      .catch(function (error) { 
        // console.log(error);
      });
  }
})
// $('.nav-box li:eq(0)').addClass('active')
var str = ""
$('.nav-box li').on('click',function(){
  str = $(this).index()
  // console.log(str)
  $('.nav-box li').removeClass('active')
  $('.nav-box li:eq('+str+')').addClass('active')
})

