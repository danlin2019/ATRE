"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}var t,i=function(){function n(){e(this,n)}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-intor").addClass("active")}});TweenMax.to("#section-intor",.5,{autoAlpha:1,delay:0})}},{key:"hide",value:function(){$("#section-intor").removeClass("active");TweenMax.to("#section-intor",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),a=function(){function n(){e(this,n),console.log("Index")}return o(n,[{key:"show",value:function(){TweenMax.fromTo("#section-index",.8,{autoAlpha:0},{autoAlpha:1,delay:0,onComplete:function(){$("#section-index").addClass("active"),TweenMax.fromTo("#section-index .title-dec",.5,{autoAlpha:0,y:30},{autoAlpha:1,y:0,delay:.3}),c.play(),c.fromTo("#section-index .highlight-4",1,{autoAlpha:0},{autoAlpha:1,onComplete:function(){TweenMax.fromTo("#section-index .highlight-4",{autoAlpha:1},{autoAlpha:0})}},1),c.fromTo("#section-index .highlight-2",1,{autoAlpha:0},{autoAlpha:1,onComplete:function(){TweenMax.fromTo("#section-index .highlight-2",{autoAlpha:1},{autoAlpha:0})}},3)}})}},{key:"hide",value:function(){$("#section-index").removeClass("active");c.paused(!0),TweenMax.set("#section-index",{autoAlpha:0,delay:0,onComplete:function(){TweenMax.set("#section-index .title-dec",{alpha:0,y:30})}})}}]),n}(),c=new TimelineMax({repeat:-1}),l=function(){function n(){e(this,n)}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-topic1").addClass("active")}})}},{key:"hide",value:function(){$("#section-topic1").removeClass("active");TweenMax.to("#section-topic1",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),u=function(){function n(){e(this,n)}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-topic2").addClass("active")}})}},{key:"hide",value:function(){$("#section-topic2").removeClass("active");TweenMax.to("#section-topic2",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),s=function(){function n(){e(this,n)}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-topic3").addClass("active")}})}},{key:"hide",value:function(){$("#section-topic3").removeClass("active");TweenMax.to("#section-topic3",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),p=function(){function n(){e(this,n)}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-topic4").addClass("active")}})}},{key:"hide",value:function(){$("#section-topic4").removeClass("active");TweenMax.to("#section-topic4",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),h=function(){function n(){e(this,n)}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-topic5").addClass("active")}})}},{key:"hide",value:function(){$("#section-topic5").removeClass("active");TweenMax.to("#section-topic5",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),f=function(){function n(){e(this,n)}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-topic6").addClass("active")}})}},{key:"hide",value:function(){$("#section-topic6").removeClass("active");TweenMax.to("#section-topic6",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),r=function(){function n(){e(this,n),console.log("Resule")}return o(n,[{key:"show",value:function(){new TimelineMax({onComplete:function(){$("#section-resule").addClass("active")}});TweenMax.to("#section-resule",.5,{autoAlpha:1,delay:0})}},{key:"hide",value:function(){$("#section-resule").removeClass("active");TweenMax.to("#section-resule",.5,{autoAlpha:0,delay:0,onComplete:function(){}})}}]),n}(),d=[];function v(e){var n,o;t&&t.hide(),"Intor"===e?(o=m(i),console.log(i),o>-1?n=d[o]:(n=new i,d.push(n))):"Index"===e?(o=m(a),console.log(a),o>-1?n=d[o]:(n=new a,d.push(n))):"Topic1"===e?(o=m(l),console.log(l),o>-1?n=d[o]:(n=new l,d.push(n))):"Topic2"===e?(o=m(u),console.log(u),o>-1?n=d[o]:(n=new u,d.push(n))):"Topic3"===e?(o=m(s),console.log(s),o>-1?n=d[o]:(n=new s,d.push(n))):"Topic4"===e?(o=m(p),console.log(p),o>-1?n=d[o]:(n=new p,d.push(n))):"Topic5"===e?(o=m(h),console.log(h),o>-1?n=d[o]:(n=new h,d.push(n))):"Topic6"===e?(o=m(f),console.log(f),o>-1?n=d[o]:(n=new f,d.push(n))):"Resule"===e&&(o=m(r),console.log(r),o>-1?n=d[o]:(n=new r,d.push(n)),$("header").addClass("active")),console.log("section :"),console.log(n),n.show(),t=n}function m(e){for(var n=0;n<d.length;n++)if(console.log(d[n]instanceof e),d[n]instanceof e)return n;return-1}location.hostname,v("Resule"),$(".btn-in").on("click",(function(){v("Index")}));
//# sourceMappingURL=index.js.map