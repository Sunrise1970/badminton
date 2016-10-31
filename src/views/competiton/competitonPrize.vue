<template>
  <div class="prize-wrap ui-common-pd-tb">
    <ui-head title="比赛奖品"></ui-head>
    <div class="ui-common-box ui-whitespace-p">
      <div class="ui-info-head">男单、女单奖项</div>
      <div class="ui-common-pd-t ui-border-radius ui-border-shadow ui-text-center con">
        <p>
          冠军：面值200元的JD卡
        </p>
        <img src="../../assets/200.jpg" alt="" />
      </div>
      <div class="ui-common-mg-t ui-common-pd-t ui-border-radius ui-border-shadow ui-text-center con">
        <p>
          亚军：面值150元的JD卡
        </p>
        <img src="../../assets/100.jpg" class="litter-v" alt="" />
        <img src="../../assets/50.jpg" class="litter-v" alt="" />
      </div>
      <div class="ui-common-mg-t ui-common-pd-t ui-border-radius ui-border-shadow ui-text-center con">
        <p>
          亚军：面值100元的JD卡
        </p>
        <img src="../../assets/100.jpg" alt="" />
      </div>
      <div class="ui-info-head">男双、女双、混双奖项</div>
      <div class="ui-common-pd-t ui-border-radius ui-border-shadow ui-text-center con">
        <p>
          冠军：面值400元的JD卡
        </p>
        <img src="../../assets/200.jpg" class="litter-v" alt="" />
        <img src="../../assets/200.jpg" class="litter-v" alt="" />
      </div>
      <div class="ui-common-mg-t ui-common-pd-t ui-border-radius ui-border-shadow ui-text-center con">
        <p>
          亚军：面值300元的JD卡
        </p>
        <img src="../../assets/200.jpg" class="litter-v" alt="" />
        <img src="../../assets/100.jpg" class="litter-v" alt="" />
      </div>
      <div class="ui-common-mg-t ui-common-pd-t ui-border-radius ui-border-shadow ui-text-center con">
        <p>
          亚军：面值200元的JD卡
        </p>
        <img src="../../assets/200.jpg" alt="" />
      </div>
      <div class="ui-info-head">参与即可抽奖</div>
      <div class="lottery-wrap" :class="{ 'playing': playing }">
        <div class="main">
            <div class="wrap">
                <div class="frame">
                    <div class="circle" :style="circleStyle">
                        <template v-for="item in circleList">
                          <p :style="item.style" :class="{ 'light': item.light }"><span>{{item.name}}</span></p>
                        </template>
                    </div>
                    <div class="button" @click="getLoteryIdFromServer">
                        <button>抽奖</button>
                        <p></p>
                    </div>
                </div>
                <div class="bubbles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <mark class="white"></mark>
                <div class="dialog" :class="{ 'show': show, 'hide': !show }">
                    <input type="text" v-model="tel" placeholder="报名时的手机号码" autofocus="">
                    <button @click="inputTelSure">确定</button>
                </div>
            </div>
            <div class="particle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uiHead from '../common/head'
import { showTip } from '../../vuex/actions/common'
import { setLotteryId } from '../../vuex/actions/competiton'
import { lotteryId } from '../../vuex/getters/competiton'
export default {
  vuex: {
    actions: {
      showTip,
      setLotteryId
    },
    getters: {
      lotteryId
    }
  },
  data: function () {
    return {
      tel: '',
      sum: 8, // 奖项总数
      loterry: '', // 中奖的index
      minRotate: 2160, // 最少转动角度
      rotate: 0, // 需要转动的角度
      duration: 2, // 延迟秒数
      light: 0, // 外层闪烁点高亮
      showTime: '', // 叶子停留转动时间
      loterryTime: '', // 旋转时间
      bubblesInterval: '', // 外层闪烁时间
      circleStyle: '', // 转盘转动样式
      playing: false, // 开始转动时震动
      circle: [
        { id: 1, name: '一等将', light: true },
        { id: 2, name: '谢谢参与', light: false },
        { id: 3, name: '二等将', light: false },
        { id: 4, name: '谢谢参与', light: false },
        { id: 5, name: '三等将', light: true },
        { id: 6, name: '谢谢参与', light: false },
        { id: 7, name: '四等将', light: false },
        { id: 8, name: '谢谢参与', light: false }
      ],
      show: false,
      hide: false
    }
  },
  computed: {
    // 将每片叶子按照递增角度旋转
    circleList () {
      return this.circle.map((item, index) => {
        let angle = index * 360 / this.sum
        item.style = `transform: rotate(${angle}deg)`
        return item
      })
    }
  },
  ready: function () {
    // 尚未开始抽奖时，两片叶子一定时间内转动
    this.loterryTime && clearInterval(this.loterryTime)
    this.bubblesInterval && clearInterval(this.bubblesInterval)
    var i = 1
    this.showTime = setInterval(() => {
      this.circle.map((item) => {
        item.light = false
        let arg1 = i
        let arg2 = i + 4
        if (i <= 4) {
          if (item.id === arg1 || item.id === arg2) {
            item.light = true
          }
        } else {
          this.circle[0].light = true
          i = 1
        }
      })
      i++
    }, 800)
  },
  attached: function () {},
  methods: {
    getLoteryIdFromServer () {
      if (!this.tel) {
        this.show = !this.show
      } else {
        console.log('ddd')
        this.setLotteryId(this.tel)
            .then((res) => {
              console.log(this.lotteryId)
              if (res.data) {
                if (res.data !== 'haslottery') {
                  this.loterryStart(this.lotteryId)
                } else {
                  this.showTip('您已经抽过奖了哦！')
                }
              } else {
                this.showTip('您未参与本次比赛哦！')
                this.show = !this.show
              }
            })
      }
    },
    inputTelSure () {
      this.show = !this.show
    },
    // 开始抽奖
    loterryStart (id) {
      this.playing = true
      // this.loterry = Math.floor(Math.random() * this.sum) // 随机数
      this.loterry = id // 随机数
      this.rotate = this.rotate - this.rotate % 360 + this.minRotate + 360 - this.loterry * 360 / this.sum // 需要转动的角度
      this.circleStyle = `transform: rotate(${this.rotate}deg); transition-duration: ${this.duration}s` // 转盘旋转
      this.showTime && clearInterval(this.showTime)
      this.circle.map((item) => {
        item.light = false
      })
      setTimeout(() => {
        this.circle[this.loterry].light = true
        this.playing = false
        if (this.circle[this.loterry].name !== '谢谢参与') {
          setTimeout(() => {
            this.showTip(`恭喜您！抽中了${this.circle[this.loterry].name}`)
          }, 500)
        } else {
          this.showTip(this.circle[this.loterry].name)
        }
      }, this.duration * 1000)
    }
  },
  components: {
    uiHead
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/base/mixin";
.prize-wrap .con {
  background-color: #fff;
}
.prize-wrap .ui-info-head {
  width: 4.5rem;
}
.prize-wrap img {
  width: 5.066666666666666rem;
  height: 4rem;
}
.prize-wrap .litter-v {
  width: 4.533333333333333rem;
  height: 3.5rem;
}
// 大转盘样式 start
@-webkit-keyframes button {
  0% {
    -webkit-box-shadow: 0 0 1.066667rem 0.333333rem #fff;
            box-shadow: 0 0 1.066667rem 0.333333rem #fff; }
  100% {
    -webkit-box-shadow: 0 0 0.266667rem 0.133333rem #fff;
            box-shadow: 0 0 0.266667rem 0.133333rem #fff; } }

@keyframes button {
  0% {
    -webkit-box-shadow: 0 0 1.066667rem 0.333333rem #fff;
            box-shadow: 0 0 1.066667rem 0.333333rem #fff; }
  100% {
    -webkit-box-shadow: 0 0 0.266667rem 0.133333rem #fff;
            box-shadow: 0 0 0.266667rem 0.133333rem #fff; } }

.disabled {
  pointer-events: none; }

@keyframes shake {
  0%{
    transform: translate(-0.013333rem);
  }
  25%{
    transform: translate(0,-0.013333rem);
  }
  50%{
    transform: translate(0.013333rem);
  }
  75%{
    transform: translate(0,0.013333rem);
  }
  100% {
    transform: translate(-0.013333rem);
  }
}

.wrap {
  width: 9.2rem;
  height: 9.2rem;
  margin: auto;
  background: -webkit-radial-gradient(#3c1c01 58%, #b76620 66%, #150a00 75%);
  position: relative;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0.4rem 0.04rem #000;
          box-shadow: 0 0 0.4rem 0.04rem #000;
  margin-top: 1.6rem; }
.playing .wrap {
  animation: shake .1s infinite linear;
}
.animate .wrap {
          animation: shake .05s infinite linear; }

.frame {
  width: 8.133333rem;
  height: 8.133333rem;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0.733333rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 50%;
  background: -webkit-radial-gradient(#ec99ff 50%, #c100ff 70%); }

.circle {
  width: 6.666667rem;
  height: 6.666667rem;
  position: relative;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  -webkit-transition: all 5s cubic-bezier(.68,.01,.13,1);
  transition: all 5s cubic-bezier(.68,.01,.13,1);
  -webkit-box-shadow: 0 0 0.4rem 0px #7d3d00;
          box-shadow: 0 0 0.4rem 0px #7d3d00; }

.circle p {
  width: 0;
  height: 0;
  border: 1.380667rem #ccc solid;
  border-top-width: 3.333333rem;
  border-color: #ffbc20 transparent transparent transparent;
  position: absolute;
  z-index: 1;
  left: 1.952666rem;
  -webkit-transform-origin: 1.380667rem 3.333333rem;
      -ms-transform-origin: 1.380667rem 3.333333rem;
          transform-origin: 1.380667rem 3.333333rem; }

.circle p.light {
  border-top-color: #ffe226; }

.circle p:nth-child(even) {
  /*border-color:#f9c735 transparent transparent transparent;*/ }

.circle span {
  position: absolute;
  left: 50%;
  font-size: 0.346667rem;
  top: -3.2rem;
  -webkit-transform: translate(-50%);
      -ms-transform: translate(-50%);
          transform: translate(-50%); }

.button {
  position: absolute;
  width: 1.733333rem;
  height: 1.733333rem;
  font-size: 0.4rem;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  right: 0;
  text-align: center;
  margin: auto;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
          box-sizing: border-box; }

.button button {
  width: 1.733333rem;
  height: 1.733333rem;
  font-size: 0.4rem;
  background: -webkit-radial-gradient(#fbc575, #f50);
  border-radius: 50%;
  line-height: 1.466667rem;
  border: 0.133333rem #fff solid;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  -webkit-animation: button 2s infinite alternate;
          animation: button 2s infinite alternate; }

@-webkit-keyframes white {
  0% {
    -webkit-box-shadow: 0 0 1.066667rem 0 #fff;
            box-shadow: 0 0 1.066667rem 0 #fff; }
  70% {
    -webkit-box-shadow: 0 0 1.066667rem 4.0rem #fff;
            box-shadow: 0 0 1.066667rem 4.0rem #fff; }
  100% {
    -webkit-box-shadow: 0 0 1.066667rem 0 #fff;
            box-shadow: 0 0 1.066667rem 0 #fff; } }

@keyframes white {
  0% {
    -webkit-box-shadow: 0 0 1.066667rem 0 #fff;
            box-shadow: 0 0 1.066667rem 0 #fff; }
  70% {
    -webkit-box-shadow: 0 0 1.066667rem 4.0rem #fff;
            box-shadow: 0 0 1.066667rem 4.0rem #fff; }
  100% {
    -webkit-box-shadow: 0 0 1.066667rem 0 #fff;
            box-shadow: 0 0 1.066667rem 0 #fff; } }

mark.white {
  position: absolute;
  width: 2px;
  height: 1px;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  /*transition:all 1s ease-in;*/
  z-index: 4; }

.playing mark.white {
  -webkit-animation: white 4s cubic-bezier(.68,.01,.13,1);
          animation: white 4s cubic-bezier(.68,.01,.13,1);
  /*transition:all 1s ease-out;
  box-shadow: 0 0 1.066667rem 5.0rem #fff;*/ }

.button p {
  position: absolute;
  width: 0;
  height: 0;
  border: 0.186667rem #ccc solid;
  border-color: transparent transparent #ff1302 transparent;
  border-bottom-width: 1.466667rem;
  top: -1.2rem;
  left: 0.666667rem;
  z-index: -1; }


.bubbles span {
  display: block;
  position: absolute;
  width: 0.346667rem;
  height: 0.346667rem;
  border-radius: 50%;
  background: -webkit-radial-gradient(#ffc063, #ff8d00);
  left: 0;
  right: 0;
  margin: auto;
  top: 0.066667rem;
  -webkit-transform-origin: 0.173333rem 4.533333rem;
      -ms-transform-origin: 0.173333rem 4.533333rem;
          transform-origin: 0.173333rem 4.533333rem; }

.bubbles span:nth-child(2) {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg); }

.bubbles span:nth-child(3) {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg); }

.bubbles span:nth-child(4) {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg); }

.bubbles span:nth-child(5) {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg); }

.bubbles span:nth-child(6) {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg); }

.bubbles span:nth-child(7) {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg); }

.bubbles span:nth-child(8) {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg); }

.bubbles span:nth-child(9) {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg); }

.bubbles span:nth-child(10) {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg); }

.bubbles span:nth-child(11) {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); }

.bubbles span:nth-child(12) {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); }


@keyframes bubbles1 {
  0%{background: -webkit-radial-gradient(#ffc063, #ff8d00);}
  100% {
    background: -webkit-radial-gradient(#ff9800, #fff);
    box-shadow: 0 0 0.266667rem 0.066667rem #fff;
  }}
@keyframes bubbles2 {
  0%{background: -webkit-radial-gradient(#ff7aee, #ff1ee2);}
  100% {
    background: -webkit-radial-gradient(#ff00df, #fff);
    box-shadow: 0 0 0.266667rem 0.066667rem #fff;
     } }
@keyframes bubbles3 {
  0%{background: -webkit-radial-gradient(#78ff40, #4ce80c);}
  100% {
    background: -webkit-radial-gradient(#4aff00, #fff);
    box-shadow: 0 0 0.266667rem 0.066667rem #fff;
    } }
.bubbles span:nth-child(n) {
          animation: bubbles1 1s infinite steps(2);
        }
.playing .bubbles span.light:nth-child(n){
  background: -webkit-radial-gradient(#ff9800, #fff);
  box-shadow: 0 0 0.266667rem 0.066667rem #fff;
}
.bubbles span:nth-child(2n) {
  background: -webkit-radial-gradient(#ff7aee, #ff1ee2);
          animation: bubbles2 1s .3s infinite steps(2);
  }
.playing .bubbles span.light:nth-child(2n){
  background: -webkit-radial-gradient(#ff00df, #fff);
  box-shadow: 0 0 0.266667rem 0.066667rem #fff;
}

.bubbles span:nth-child(3n) {
  background: -webkit-radial-gradient(#78ff40, #4ce80c);
          animation: bubbles3 1s .6s infinite steps(2);
 }
.playing .bubbles span.light:nth-child(3n){
  background: -webkit-radial-gradient(#4aff00, #fff);
  box-shadow: 0 0 0.266667rem 0.066667rem #fff;
}

.playing .bubbles span {animation:none; }

.dialog {
  position: absolute;
  top: 3.1rem;
  left: 50%;
  transform: translate(-50%);
  display: none;
  z-index: 99;
  width: 5.866667rem;
  background: #fff;
  border-radius: 0.13333333333333333rem;
  padding: 0.533333rem;
  box-sizing: border-box;
  text-align: center;
}

.dialog input {
  width: 92%;
  margin: 0 auto;
  display: inline-block;
  padding: 0.15rem;
  border-radius: 5px;
  @include font(12px);
}

.dialog button {
  display: inline-block;
  width: 1.866667rem;
  height: 0.7rem;
  background: #86c40d;
  text-align: center;
  margin-top: 0.4rem;
  @include font(12px);
  color: #fff;
  border-radius: 5px;
}

@-webkit-keyframes show {
  0% {
    -webkit-transform: translate(-50%) scale(0);
            transform: translate(-50%) scale(0); }
  90% {
    -webkit-transform: translate(-50%) scale(1.4);
            transform: translate(-50%) scale(1.4); }
  100% {
    -webkit-transform: translate(-50%) scale(1);
            transform: translate(-50%) scale(1); } }

@keyframes show {
  0% {
    -webkit-transform: translate(-50%) scale(0);
            transform: translate(-50%) scale(0); }
  90% {
    -webkit-transform: translate(-50%) scale(1.4);
            transform: translate(-50%) scale(1.4); }
  100% {
    -webkit-transform: translate(-50%) scale(1);
            transform: translate(-50%) scale(1); } }

@-webkit-keyframes hide {
  0% {
    -webkit-transform: translate(-50%) scale(1);
            transform: translate(-50%) scale(1); }
  10% {
    -webkit-transform: translate(-50%) scale(1.4);
            transform: translate(-50%) scale(1.4); }
  99% {
    -webkit-transform: translate(-50%) scale(0);
            transform: translate(-50%) scale(0); }
  100% {
    -webkit-transform: translate(-50%) scale(0);
            transform: translate(-50%) scale(0);
    display: none; } }

@keyframes hide {
  0% {
            transform: translate(-50%) scale(1); }
  10% {
            transform: translate(-50%) scale(1.4); }
  99% {
            transform: translate(-50%) scale(0); }
  100% {
            transform: translate(-50%) scale(0);
    display: none; } }

.dialog.show {
  display: block;
  -webkit-animation: show .3s ease-out forwards;
          animation: show .3s ease-out forwards; }

.dialog.hide {
  display: block;
  -webkit-animation: hide .5s forwards;
          animation: hide .5s forwards; }

@keyframes particle{
  100%{
    box-shadow: 0.8rem 0px 0.266667rem 0px #fff,0px 0.8rem 0.266667rem 0px #fff,-0.8rem 0px 0.266667rem 0px #fff,0px -0.8rem 0.266667rem 0px #fff;
  }
}
@keyframes particlerotate{
  100%{
    transform:rotate(1800deg);
  }
}
.particle {
  position: absolute;
  width: 10.0rem;
  height: 12.4rem;
  left: 0;
  right: 0;
  margin:auto;
  top:0;
  z-index: 2;
  overflow:hidden;
  pointer-events:none;
  .playing &{
    animation:particlerotate 5s cubic-bezier(.68,.01,.13,1);
  }
}
.particle span{
    box-shadow: 8.666667rem 0px 0.266667rem 0px #fff,0px 8.666667rem 0.266667rem 0px #fff,-8.666667rem 0px 0.266667rem 0px #fff,0px -8.666667rem 0.266667rem 0px #fff;
    border-radius: 50%;
    height: 0.2rem;
    width: 0.2rem;
    display: block;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .playing &{
        animation:particle 1s 3;
      }
    &:nth-child(2){
      width: 0.266667rem;
      height: 0.266667rem;
      .playing &{
        animation:particle 1s .25s 3;
      }
    }
    &:nth-child(3){
      width: 0.333333rem;
      height: 0.333333rem;
      .playing &{
        animation:particle 1s .5s 3;
      }
    }
     &:nth-child(4){
      width: 0.333333rem;
      height: 0.333333rem;
      .playing &{
        animation:particle 1s .75s 3;
      }
    }
}
// 大转盘样式 end
</style>
