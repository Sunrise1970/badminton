<template>
  <div class="info-wrap">
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div>
        <em class="ui-font-14">【{{competitonState}}】</em>为了丰富员工的业余生活，培养员工团队精神，增强员工凝聚力，促进员工之间友谊，营造一个自信、阳光、充满朝气、永不服输的企业氛围，展示员工青春活力。特举办本届羽毛球比赛。
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">开始时间</div>
        <div class="ui-common-pd-r"><span class="iconfont icon-zhifushijian ui-font-14 ui-txt-highlight"></span>&nbsp; {{competitonDate}}</div>
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
      <div class="ui-flex-between ui-common-pd-tb ui-border-b ui-arrowlink">
        <div class="ui-txt-info ui-common-pd-l">比赛奖品</div>
        <div class="ui-common-pd-r" v-link="{ path: '/competitonPrize' }"><span class="iconfont icon-jingshi ui-font-14 ui-txt-highlight"></span> <span class="ui-txt-feeds">点击查看</span></div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b ui-arrowlink">
        <div class="ui-txt-info ui-common-pd-l">比赛章程</div>
        <div class="ui-common-pd-r" v-link="{ path: '/competitonRule' }"><span class="iconfont icon-jingshi ui-font-14 ui-txt-highlight"></span> <span class="ui-txt-feeds">点击查看</span></div>
      </div>
      <div class="ui-info-head">比赛说明</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow info-attention">
        <ul>
          <li>1、 践行“尊敬、思考、正直、狼性、共识”公司文化。</li>
          <li>2、 比赛必须坚持娱乐第一，竞技第二原则。</li>
          <li>3、 要求裁判和队员提前15分钟到达比赛场地热身、以保证球员安全。</li>
          <li>4、 团结互助，参赛选手要严格按照裁判的要求，遵守比赛规则。</li>
          <li>5、 裁判必须严格公正执法；比赛双方队员必须服从裁判的一切判罚，不得攻击、干扰裁判；不得打假球，攻击对方球员；如有上列情况者，视情节严重程度给球员乃至球队予以处罚。</li>
          <li>6、 先报先得，报满即止。男单：16人；女单：8人；男双：12队；女双：6队；混双：8队；</li>
        </ul>
      </div>
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
    competitonDate () {
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
<style lang="scss">
  .info-attention li {
    padding-bottom: 0.18666666666666668rem;
  }
</style>
