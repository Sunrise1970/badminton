<template>
  <div class="head ui-nav-box pdb" v-if="rebackHead">
    <!-- <a v-link="{ path: '/index', activeClass: 'active-border' }">活动</a> -->
    <a v-link="{ path: '/competitonList', activeClass: 'active-border' }">铂涛互联网羽联争霸赛</a>
  </div>
  <div class="reback-head clearfix ui-nav-box" v-if="!rebackHead">
    <i @click="rebackHandler" class="iconfont ui-icon-return"></i> {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      rebackHead: false
    }
  },
  computed: {},
  ready: function () {
    let comeFrom = this.$route.path
    if (/index/.test(comeFrom) || /competitonList/.test(comeFrom) || /result/.test(comeFrom)) {
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
@import "../../assets/sass/base/variable";
  @mixin common {
    position: fixed;
    width: 100%;
    z-index: 10000;
    transition: .3s linear;
    -webkit-transition: .3s linear;
    top: 0;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    // border-top: 2px solid #fff;
  }
  .head {
    display: flex;
    @include common;
    a {
      display: block;
      flex: 1;
      color: $txt-white;
      &.active-border {
        border-bottom: 2px solid #ccc;
      }
      background-size: 100%;
    }
  }
  .reback-head {
    @include common;
  }
  .pdb {
    padding-bottom: 0.05333333333333334rem;
  }
</style>
