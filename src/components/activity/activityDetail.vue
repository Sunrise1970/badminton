<template>
  <ui-head title="活动详情"></ui-head>
  <div class="ui-common-box activity-detail">
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p ui-bg-white">
      <p class="ui-text-indent ui-txt-highlight ui-font-14">
        【羽毛球】9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！
      </p>
      <div class="ui-flex-between">
        <div>
          <span class="ui-tag-sm">AA</span> AA活动
        </div>
        <div>
          报名情况 <em>16/18</em>
        </div>
      </div>
      <div class="ui-common-mg-tb ui-common-height ui-flex-center ui-border-tb">
        <div class="ui-flex-1 ui-text-center ui-border-r">
          <span class="iconfont icon-zhifushijian ui-txt-highlight"></span> 09月03日 19:00 - 21:00
        </div>
        <div class="ui-flex-1 ui-text-center">
          <span class="iconfont icon-renminbi ui-txt-highlight"></span> 20元/人
        </div>
      </div>
      <club-intro></club-intro>
    </div>
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p ui-bg-white">
      <div class="ui-flex ui-border-b ui-common-pd-tb">
        <div class="ui-flex-1 ui-border-r">
          <div class="ui-txt-muted">场地</div>
          <div class="ui-font-14">
            石溪羽毛球馆1、3、5
          </div>
        </div>
        <div class="ui-width-80 ui-text-center">
          <span class="iconfont icon-xiangqingditu ui-display-b ui-txt-highlight"></span>
          <em>导航</em>
        </div>
      </div>
      <div class="ui-flex ui-border-b ui-common-pd-tb">
        <div class="ui-flex-1 ui-border-r">
          <div class="ui-txt-muted">组织者</div>
          <div class="ui-font-14">
            汤教练 13800138000
          </div>
        </div>
        <div class="ui-width-80 ui-text-center">
          <a href="tel:13800138000">
            <span class="iconfont icon-dingdanlianxidianhua ui-display-b ui-txt-highlight"></span>
            <em>拨打</em>
          </a>
        </div>
      </div>
      <div class="ui-common-pd-tb">
        <div class="ui-txt-muted">已报名会员</div>
        <div class="ui-common-pd-tb ui-arrowlink">
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-common-mg-b ui-whitespace-p ui-bg-white">
      <div class="activity-intro ui-common-pd-tb">
        <div class="ui-info-head ui-font-14">
          活动介绍
        </div>
        <p class="ui-common-pd-tb ui-text-indent">
          9月7号（周三）晚上七点到九点石溪羽毛球活动，现在接受报名，已预订两个场，预计12人封顶，请自备球拍。
        </p>
      </div>
    </div>
    <div class="activity-order-btn ui-btn-box">
      活动进行中
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
.activity-detail {
  padding-top: 0.2rem;
}
.activity-order-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  box-sizing: border-box;
}
</style>
