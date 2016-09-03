<template>
  <div class="head">
    <a v-link="{ path: '/index', activeClass: 'active-border' }">比赛</a>
    <a v-link="{ path: '/activity', activeClass: 'active-border' }">活动</a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
  },
  components: {}
}
</script>

<style lang="scss">
@import "../../assets/sass/common";
  .head {
    display: flex;
    background-color: $public-bg;
    padding-bottom: 0.05333333333333334rem;
    border-top: 2px solid #fff;
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
</style>
