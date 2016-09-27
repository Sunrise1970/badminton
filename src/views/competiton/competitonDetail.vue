<template>
  <ui-head title="比赛详情"></ui-head>
  <div class="ui-common-box compeition-detail">
    <competiton-common-nav :detail-type.sync="detailType" :competiton-type.sync="competitonType">{{this.detailType}}</competiton-common-nav>
    <template v-if="detailType==1">
      <competiton-intro></competiton-intro>
    </template>
    <template v-if="detailType==2">
      <competiton-member></competiton-member>
    </template>
    <template v-if="detailType==3">
      <competiton-against></competiton-against>
    </template>
    <template v-if="detailType==4">
      <competiton-user></competiton-user>
    </template>
  </div>
</template>

<script>
import uiHead from '../common/head'
import clubIntro from '../common/clubIntro'
import competitonCommonNav from './components/competitonCommonNav'
import competitonIntro from './components/competitonIntro'
import competitonMember from './components/competitonMember'
import competitonAgainst from './components/competitonAgainst'
import competitonUser from './components/competitonUser'
export default {
  data: function () {
    return {
      detailType: 1,
      competitonType: 1
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
  },
  components: {
    uiHead,
    clubIntro,
    competitonCommonNav,
    competitonIntro,
    competitonMember,
    competitonAgainst,
    competitonUser
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/base/variable";
.compeition-intro {
  .compeition-intro-head {
    width: 1.6266666666666667rem;
    height: 0.6666666666666666rem;
    border-bottom: 2px solid $txt-highlight;
  }
}
.competiton-nav {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
</style>
