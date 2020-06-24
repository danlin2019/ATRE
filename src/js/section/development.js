var wrapper = new Vue({
  el: '#wrapper',
  data: {
    message: 'Hello Vue!',
    isActive: false
  },
  methods: {
    menuList() {
      console.log(0)
      this.isActive = !this.isActive
      if(this.isActive ) {
        $('.nav-box').stop().fadeIn(200)
      }else{
        $('.nav-box').stop().fadeOut(200)
      }
    }
  },
})