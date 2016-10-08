<template>
  <div>
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div class="ui-font-14">
        <em>【{{competitonState}}】</em>9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">开始时间</div>
        <div class="ui-common-pd-r"><span class="iconfont icon-zhifushijian ui-font-14 ui-txt-highlight"></span> {{date}}</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">比赛地点</div>
        <div class="ui-common-pd-r"><span class="iconfont icon-dingdandaohangditu ui-font-14 ui-txt-highlight"></span> {{intro.hall_name}}</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">举办单位</div>
        <div class="ui-common-pd-r">{{intro.company}}</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">比赛类型</div>
        <div class="ui-common-pd-r">{{type}}</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">已&ensp;报&ensp;名</div>
        <div class="ui-common-pd-r">{{intro.attend_num}} 人</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b ui-arrowlink">
        <div class="ui-txt-info ui-common-pd-l">比赛奖品</div>
        <div class="ui-common-pd-r"><span class="iconfont icon-jingshi ui-font-14 ui-txt-highlight"></span> <span class="ui-txt-feeds">点击查看</span></div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b ui-arrowlink">
        <div class="ui-txt-info ui-common-pd-l">比赛章程</div>
        <div class="ui-common-pd-r"><span class="iconfont icon-jingshi ui-font-14 ui-txt-highlight"></span> <span class="ui-txt-feeds">点击查看</span></div>
      </div>
      <div class="ui-info-head">比赛说明</div>
      <p class="ui-info-txt ui-border-radius">
        无限制报名无限制报名无限制报名无限制报名无限制报名无限制报名无限制报名
      </p>
    </div>
    <div class="ui-bottom-btn ui-btn-box" v-link="{ path: '/competitonAttend', query:{ competitonId: competitonId } }">
      马上报名
    </div>
  </div>
</template>

<script>
import clubIntro from '../../common/clubIntro'
import { intro } from '../../../vuex/getters/competiton'
import { getDateFormat } from '../../../untils'

export default {
  vuex: {
    getters: {
      intro
    }
  },
  data: function () {
    return {}
  },
  props: {
    competitonId: String
  },
  computed: {
    competitonState () {
      return this.intro.state === 1 ? '报名ing...' : '已结束'
    },
    date () {
      return getDateFormat(this.intro.competiton_date)
    },
    type () {
      let typeStr = ''
      if (this.intro.competiton_type === 1) {
        typeStr = '大型赛'
      } else if (this.intro.competiton_type === 2) {
        typeStr = '个人赛'
      } else {
        typeStr = '8人转'
      }
      return typeStr
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
  },
  components: {
    clubIntro
  },
  route: {
    data () {}
  }
}
</script>
