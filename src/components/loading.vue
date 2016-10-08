<template>
  <div class="loading-toast" v-show="show">
    <div class="mask-transparent"></div>
    <div class="loading-wrap" :style="{position: position}">
      <div class="loading">
        <div class="loading-leaf" v-for="i in 12" :class="['loading-leaf-' + i]"></div>
      </div>
        <p class="toast-content">{{text}}<slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '加载中...'
    },
    position: String
  }
}
</script>

<style lang="scss" scope>
@import "../assets/sass/base/mixin";
.mask {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #f8f8f8;
}
.mask-transparent {
    position: fixed;
    z-index: 5001;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.mask-transition {
    display: none;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0);
    transition:background .3s;
}
.fade-toggle {
    background: rgba(0,0,0,.6);
}
.loading-wrap {
  position: fixed;
  min-width: 2.4rem;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -1.2rem;
  background: rgba(40,40,40,.75);
  text-align: center;
  border-radius: 0.06666666666666667rem;
  color: #fff;
  z-index: 50000;
}
.toast-text .toast-content {
  margin: 0;
  padding-top: 0.13333333333333333rem;
  padding-bottom: 0.13333333333333333rem;
  border-radius: 0.2rem;
}
.loading-toast{
    .toast-content{
      margin-top:64%;
      padding-top: 0.13333333333333333rem;
      @include font(12px);
    }
}
.loading{
    position: absolute;
    width: 0px;
    z-index: 1;
    left: 50%;
    top: 38%;
}
.loading-leaf{
    position: absolute;
    top: -1px;
    opacity: 0.25;
    &:before{
        content:" ";
        position: absolute;
        width: 10px;
        height: 2px;
        background: rgb(209, 209, 213);
        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;
        border-radius: 1px;
        transform-origin: left 50% 0px;
    }
    &-0{
        animation: opacity-60-25-0-12 1.25s linear infinite;
        &:before{
            transform: rotate(0deg) translate(7.92px, 0px);
        }
    }
    &-1{
        animation: opacity-60-25-1-12 1.25s linear infinite;
        &:before{
            transform: rotate(30deg) translate(7.92px, 0px);
        }
    }
    &-2{
        animation: opacity-60-25-2-12 1.25s linear infinite;
        &:before{
            transform: rotate(60deg) translate(7.92px, 0px);
        }
    }
    &-3{
        animation: opacity-60-25-3-12 1.25s linear infinite;
        &:before{
            transform: rotate(90deg) translate(7.92px, 0px);
        }
    }
    &-4{
        animation: opacity-60-25-4-12 1.25s linear infinite;
        &:before{
            transform: rotate(120deg) translate(7.92px, 0px);
        }
    }
    &-5{
        animation: opacity-60-25-5-12 1.25s linear infinite;
        &:before{
            transform: rotate(150deg) translate(7.92px, 0px);
        }
    }
    &-6{
        animation: opacity-60-25-6-12 1.25s linear infinite;
        &:before{
            transform: rotate(180deg) translate(7.92px, 0px);
        }
    }
    &-7{
        animation: opacity-60-25-7-12 1.25s linear infinite;
        &:before{
            transform: rotate(210deg) translate(7.92px, 0px);
        }
    }
    &-8{
        animation: opacity-60-25-8-12 1.25s linear infinite;
        &:before{
            transform: rotate(240deg) translate(7.92px, 0px);
        }
    }
    &-9{
        animation: opacity-60-25-9-12 1.25s linear infinite;
        &:before{
            transform: rotate(270deg) translate(7.92px, 0px);
        }
    }
    &-10{
        animation: opacity-60-25-10-12 1.25s linear infinite;
        &:before{
            transform: rotate(300deg) translate(7.92px, 0px);
        }
    }
    &-11{
        animation: opacity-60-25-11-12 1.25s linear infinite;
        &:before{
            transform: rotate(330deg) translate(7.92px, 0px);
        }
    }
}
@-webkit-keyframes opacity-60-25-0-12 {
  0% { opacity: 0.25; }
  0.01% { opacity: 0.25; }
  0.02% { opacity: 1; }
  60.01% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-1-12 {
  0% { opacity: 0.25; }
  8.34333% { opacity: 0.25; }
  8.35333% { opacity: 1; }
  68.3433% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-2-12 {
  0% { opacity: 0.25; }
  16.6767% { opacity: 0.25; }
  16.6867% { opacity: 1; }
  76.6767% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-3-12 {
  0% { opacity: 0.25; }
  25.01% { opacity: 0.25; }
  25.02% { opacity: 1; }
  85.01% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-4-12 {
  0% { opacity: 0.25; }
  33.3433% { opacity: 0.25; }
  33.3533% { opacity: 1; }
  93.3433% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-5-12 {
  0% { opacity: 0.270958333333333; }
  41.6767% { opacity: 0.25; }
  41.6867% { opacity: 1; }
  1.67667% { opacity: 0.25; }
  100% { opacity: 0.270958333333333; }
}@-webkit-keyframes opacity-60-25-6-12 {
  0% { opacity: 0.375125; }
  50.01% { opacity: 0.25; }
  50.02% { opacity: 1; }
  10.01% { opacity: 0.25; }
  100% { opacity: 0.375125; }
}@-webkit-keyframes opacity-60-25-7-12 {
  0% { opacity: 0.479291666666667; }
  58.3433% { opacity: 0.25; }
  58.3533% { opacity: 1; }
  18.3433% { opacity: 0.25; }
  100% { opacity: 0.479291666666667; }
}@-webkit-keyframes opacity-60-25-8-12 {
  0% { opacity: 0.583458333333333; }
  66.6767% { opacity: 0.25; }
  66.6867% { opacity: 1; }
  26.6767% { opacity: 0.25; }
  100% { opacity: 0.583458333333333; }
}@-webkit-keyframes opacity-60-25-9-12 {
  0% { opacity: 0.687625; }
  75.01% { opacity: 0.25; }
  75.02% { opacity: 1; }
  35.01% { opacity: 0.25; }
  100% { opacity: 0.687625; }
}@-webkit-keyframes opacity-60-25-10-12 {
  0% { opacity: 0.791791666666667; }
  83.3433% { opacity: 0.25; }
  83.3533% { opacity: 1; }
  43.3433% { opacity: 0.25; }
  100% { opacity: 0.791791666666667; }
}@-webkit-keyframes opacity-60-25-11-12 {
  0% { opacity: 0.895958333333333; }
  91.6767% { opacity: 0.25; }
  91.6867% { opacity: 1; }
  51.6767% { opacity: 0.25; }
  100% { opacity: 0.895958333333333; }
}
</style>
