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
      }
    },
    goStep() {
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
        console.log('this.num')
        console.log(this.num)
        console.log('this.numtotal')
        console.log(this.numtotal)
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
        console.log(num)
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
      
        $('#section-intor').stop().fadeOut()
        this.isActive = false
        $('.nav-box').stop().fadeOut(0)
        $('#section-rule').stop().fadeOut(0)
        $('#section-news').stop().fadeOut(0)
        goto('Index')
        this.data =''
        this.userName =''     
        this.fbShare = ''
        this.numtotal = ''
        this.num = ''    
  
      // if($('#section-intor').hasClass('open')) {
      //   $('#section-intor').stop().fadeOut()        
      // }
    },
    goHome2() {
      $('#section-intor').stop().fadeOut()
      this.isActive = false
      $('.nav-box').stop().fadeOut(0)
      $('#section-rule').stop().fadeOut(0)
      $('#section-news').stop().fadeOut(0)
      goto('Index')
      this.data =''
      this.userName =''     
      this.fbShare = ''
      this.numtotal = ''
      this.num = ''
    },
    goNews() {
      this.isActive = false
      $('header').removeClass('no-header')
      $('#section-news').stop().fadeIn()
      $('#section-rule').stop().fadeOut()
      $('.nav-box').stop().fadeOut()
    },
    goRule() {
      this.isActive = false
      $('header').removeClass('no-header')
      $('#section-rule').stop().fadeIn()
      $('#section-news').stop().fadeOut()
      $('.nav-box').stop().fadeOut()
    },
    // 選單
    menuList() {
      console.log(0)
      this.isActive = !this.isActive
      if (this.isActive) {
        $('header').removeClass('no-header')
        $('.nav-box').stop().fadeIn()
      } else {
        if($('#section-index').hasClass('active')) {
          $('header').addClass('no-header')
        }
        $('.nav-box').stop().fadeOut()
      }
    }
  },
  mounted() {
    axios
      .get('api/newsList1.json')
      .then((response) => {
        this.newsList = response.data
        console.log(this.newsList)
        this.newsList.forEach((e) => {
          e.content = e.content.replace(/\n/g, '<br />')
        });
      })
      .catch(function (error) { // 请求失败处理
        // console.log(error);
      });
  }
})


