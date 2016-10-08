<template>
  <ui-head></ui-head>
  <div class="ui-common-box activity-list ui-whitespace-m">
    <ul>
      <li v-for="item in activityList" v-link="{ path: '/activityDetail' }" class="ui-border-radius">
        <club-intro :hall-avatar="item.hall_avatar" :hall-name="item.hall_name"></club-intro>
        <div class="activity-intro ui-border-t">
          <div class="clearfix">
            <div class="ui-avatar-s">
              <span :style="item.captain_avatar_bg"></span>
            </div>
            <span class="ui-dispaly-ib">&emsp;组织者&emsp;{{item.captain}}&emsp;</span>
            <span class="ui-tag active-time">{{item.date}}</span>
          </div>
          <div class="ui-info-txt ui-border-radius ui-dispaly-ib">
            {{item.info}}
          </div>
          <div class="ui-flex-between">
            <span class="ui-tag-sm">AA</span>
            <p>
              16/{{item.allow_attend}}&emsp;<span class="ui-txt-highlight">{{item.activityState}}</span>
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
import { setActivityList } from '../../vuex/actions/activity'
import { list } from '../../vuex/getters/activity'
import { getDateFormat } from '../../untils'

export default {
  vuex: {
    actions: {
      setActivityList
    },
    getters: {
      list
    }
  },
  data: function () {
    return {}
  },
  computed: {
    activityList () {
      return this.list.map((item) => {
        item.activityState = (item.state === 1) ? '进行中' : '已结束'
        item.allow_attend = (item.allow_attend_num > 0) ? item.allow_attend_num : '无限制'
        item.captain_avatar_bg = item.captain_avatar ? `background-image:url(${item.captain_avatar})` : ''
        item.date = getDateFormat(item.time, 1)
        return item
      })
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    // 设置背景
    setBackGround (bg) {
      return bg ? `background-image:url(${bg})` : ''
    }
  },
  components: {
    uiHead,
    clubIntro
  },
  route: {
    data () {
      this.setActivityList()
          .then((res) => {
            console.log('succcess', this.list)
          })
          .catch((e) => { console.log(e) })
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/base/variable";
.activity-list {
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
    .active-user {
      margin: 0.13333333333333333rem -0.2rem 0 -0.2rem;
      padding: 0.13333333333333333rem 0.2rem 0 0.2rem;
    }
    .icon-dingdanruzhurenmingzi {
      vertical-align: middle;
    }
  }
}
</style>
