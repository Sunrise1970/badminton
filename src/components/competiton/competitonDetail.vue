<template>
  <ui-head title="比赛详情"></ui-head>
  <div class="ui-common-box compeition-detail">
    <!-- <div class="ui-flex competiton-nav ui-border-b">
      <div class="ui-flex-1 ui-border-r ui-active-font-b" v-link="{ path: '/competitonList' }">报名</div>
      <div class="ui-flex-1 ui-border-r" v-link="{ path: '/competitonList' }">人员</div>
      <div class="ui-flex-1 ui-border-r" v-link="{ path: '/competitonList' }">对阵</div>
      <div class="ui-flex-1" v-link="{ path: '/competitonList/result' }">我的</div>
    </div> -->
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div class="ui-font-14">
        【羽毛球】9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">开始时间</div>
        <div><span class="iconfont icon-zhifushijian ui-font-14 ui-txt-highlight"></span> 2016年11月15日 09:00</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">比赛地点</div>
        <div><span class="iconfont icon-dingdandaohangditu ui-font-14 ui-txt-highlight"></span> 石溪羽毛球馆</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">比赛类型</div>
        <div>个人赛</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">已&ensp;报&ensp;名</div>
        <div class="ui-txt-highlight">26人</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">报名费用</div>
        <div>免费</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b ui-arrowlink">
        <div class="ui-txt-info">比赛奖品</div>
        <div><span class="iconfont icon-jingshi ui-font-14 ui-txt-highlight"></span> 点击查看&emsp;</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b ui-arrowlink">
        <div class="ui-txt-info">比赛章程</div>
        <div><span class="iconfont icon-jingshi ui-font-14 ui-txt-highlight"></span> 点击查看&emsp;</div>
      </div>
      <div class="ui-info-head">比赛说明</div>
      <p class="ui-info-txt ui-border-radius">
        无限制报名无限制报名无限制报名无限制报名无限制报名无限制报名无限制报名
      </p>
    </div>
    <div class="compeition-order-btn ui-btn-box" v-link="{ path: '/competitonAttend' }">
      马上报名
    </div>
  </div>
</template>

<script>
import uiHead from '../common/head'
import clubIntro from '../common/clubIntro'
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
  components: {
    uiHead,
    clubIntro
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/common";
.compeition-intro {
  .compeition-intro-head {
    width: 1.6266666666666667rem;
    height: 0.6666666666666666rem;
    border-bottom: 2px solid $txt-highlight;
  }
}
.compeition-order-btn {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
