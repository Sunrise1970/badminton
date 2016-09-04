<template>
  <div class="head" v-if="rebackHead">
    <a v-link="{ path: '/index', activeClass: 'active-border' }">比赛</a>
    <a v-link="{ path: '/activity', activeClass: 'active-border' }">活动</a>
  </div>
  <div class="reback-head clearfix" v-if="!rebackHead">
    <i @click="rebackHandler" class="iconfont ui-icon-return"></i>
    活动
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      rebackHead: false
    }
  },
  computed: {},
  ready: function () {
    let comeFrom = this.$route.path
    if (/index/.test(comeFrom) || /activity/.test(comeFrom)) {
      this.rebackHead = true
    }
  },
  attached: function () {},
  methods: {
    rebackHandler () {
      window.history.back()
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import "../../assets/sass/common";
  @mixin common {
    background-color: $public-bg;
    padding-bottom: 0.05333333333333334rem;
    border-top: 2px solid #fff;
  }
  .head {
    display: flex;
    @include common;
    a {
      display: block;
      flex: 1;
      height: 1.12rem;
      text-align: center;
      line-height: 1.12rem;
      @include font(14px);
      color: $txt-white;
      &.active-border {
        border-bottom: 3px solid #ccc;
      }
      background-size: 100%;
    }
  }
  .reback-head {
    @include common;
    text-align: center;
    height: 1.12rem;
    text-align: center;
    line-height: 1.12rem;
    color: #fff;
    @include font(14px);
  }
</style>
