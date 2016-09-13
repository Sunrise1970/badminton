<template>
  <ui-head></ui-head>
  <div class="ui-common-box">
    <!-- <div class="ui-flex competiton-nav ui-border-b">
      <div class="ui-flex-1 ui-border-r ui-active-font-b" v-link="{ path: '/attendList.vue' }">报名</div>
      <div class="ui-flex-1" v-link="{ path: '/competitonList.vue' }">赛事</div>
    </div> -->
    <div class="competiton-list ui-whitespace-m">
    <ul class="clearfix">
      <li v-link="{ path: '/competitonDetail' }" class="ui-border-radius">
        <div class="ui-common-pd">
          <div class="ui-flex">
            <div class="competiton-tag ui-tag">
              大型赛
            </div>
            <div class="ui-flex-1 ui-border-r ui-text-center">
              11月15日 09:00
            </div>
            <div class="ui-flex-1 ui-text-center">
              石溪羽毛球馆
            </div>
          </div>
          <h2 class="ui-font-14 ui-common-pd-tb" style="vertical-align: middle">铂涛互联网羽毛球比赛</h2>
          <section class="ui-placehold-img">
            <span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span>
          </section>
          <div class="ui-flex-between ui-common-pd-t">
            <div class="ui-vertical-middle">
              <div class="ui-avatar-s">
                <span style="background-image:url(http://placehold.it/80x80)"></span>
              </div> 铂涛信息技术（广州）公司
            </div>
            <div>
              88/无限制&emsp;<span class="ui-txt-highlight">报名中</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
@import "../../assets/sass/base/variable";
.competiton-nav {
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  text-align: center;
}
.competiton-list {
  li {
    box-shadow:  0 1px 3px rgba(167,167,167,.4);
    margin-top: 0.4rem;
    padding: 0.13333333333333333rem 0.2rem;
    background-color: $default-bg;
  }
}
.competiton-tag {

}
</style>
