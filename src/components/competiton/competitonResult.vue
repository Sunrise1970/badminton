<template>
  <ui-head title="赛绩"></ui-head>
  <div class="ui-common-box">
    <div class="ui-flex competiton-nav ui-border-b">
      <div class="ui-flex-1 ui-border-r" v-link="{ path: '/competitonList' }">报名</div>
      <div class="ui-flex-1 ui-active-font-b" v-link="{ path: '/competitonList/result' }">赛绩</div>
    </div>
  </div>
</template>

<script>
import uiHead from '../common/head'
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    uiHead
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/common";
.competiton-nav {
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  text-align: center;
}
</style>
