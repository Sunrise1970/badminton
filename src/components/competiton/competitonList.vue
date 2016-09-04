<template>
  <ui-head></ui-head>
  <div class="competiton-list ui-whitespace-m">
    <ul>
      <li v-link="{ path: '/competitonDetail' }" class="ui-border-radius">
        <club-intro></club-intro>
        <div class="activity-intro ui-border-t clearfix">
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <span>&emsp;组织者&emsp;教练&emsp;</span>
          <span class="ui-tag ui-border-radius active-time">20:00</span>
          <div class="activity-txt ui-border-radius">
            【羽毛球】9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！
          </div>
          <div class="ui-flex-between">
            <span class="ui-tag-sm ui-border-radius">AA</span>
            <p>
              16/18&emsp;<span class="ui-txt-highlight">报名中</span>
            </p>
          </div>
          <div class="ui-border-t active-user">
            <span class="iconfont icon-dingdanruzhurenmingzi"></span>&emsp;
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
            <div class="ui-avatar-s">
              <span style="background-image:url(http://placehold.it/80x80)"></span>
            </div>
          </div>
        </div>
      </li>
      <li v-link="{ path: '/competitonDetail' }" class="ui-border-radius">
        <club-intro></club-intro>
        <div class="activity-intro ui-border-t clearfix">
          <div class="ui-avatar-s">
            <span style="background-image:url(http://placehold.it/80x80)"></span>
          </div>
          <span>&emsp;组织者&emsp;教练&emsp;</span>
          <span class="ui-tag ui-border-radius active-time">20:00</span>
          <div class="activity-txt ui-border-radius">
            【羽毛球】9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！
          </div>
          <div class="ui-flex-between">
            <span class="ui-tag-sm ui-border-radius">AA</span>
            <p>
              16/18&emsp;<span class="ui-txt-highlight">报名中</span>
            </p>
          </div>
          <div class="ui-border-t active-user">
            <span class="iconfont icon-dingdanruzhurenmingzi"></span>&emsp;
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
            <div class="ui-avatar-s">
              <span style="background-image:url(http://placehold.it/80x80)"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
  methods: {},
  components: {
    uiHead,
    clubIntro
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/common";
.competiton-list {
  margin: 0.5333333333333333rem 0.26666666666666666rem;
  li {
    box-shadow:  0 1px 3px rgba(167,167,167,.4);
    margin-top: 0.4rem;
    padding: 0.13333333333333333rem 0.2rem;
    background-color: $default-bg;
    .activity-intro {
      padding-top: 0.26666666666666666rem;
    }
    .active-time {
      float: right;
    }
    .activity-txt {
      margin-top: 0.2rem;
      margin-bottom: 0.13333333333333333rem;
      padding: 0.13333333333333333rem;
      background-color: #f7f7f7;
      color: #333;
    }
    .active-user {
      margin: 0.13333333333333333rem -0.2rem 0 -0.2rem;
      padding: 0.13333333333333333rem 0.2rem 0 0.2rem;
    }
  }
}
</style>
