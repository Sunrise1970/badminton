<template>
  <div>
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div class="ui-font-14">
        <!-- <em>【报名ing...】</em>9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！ -->
        <em>【比赛ing...】</em>9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">开始时间</div>
        <div class="ui-common-pd-r"><span class="iconfont icon-zhifushijian ui-font-14 ui-txt-highlight"></span> 2016年11月15日 09:00</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">比赛地点</div>
        <div class="ui-common-pd-r"><span class="iconfont icon-dingdandaohangditu ui-font-14 ui-txt-highlight"></span> 石溪羽毛球馆</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">比赛类型</div>
        <div class="ui-common-pd-r">个人赛</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b ui-arrowlink">
        <div class="ui-txt-info ui-common-pd-l">已&ensp;报&ensp;名</div>
        <div class="ui-common-pd-r"><em>26人</em> <span class="ui-txt-feeds">点击查看</span></div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">报名费用</div>
        <div class="ui-common-pd-r">免费</div>
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
    <!-- <div class="ui-bottom-btn ui-btn-box" v-link="{ path: '/competitonAttend' }">
      马上报名
    </div> -->
    <div class="ui-bottom-btn ui-btn-box" v-link="{ path: '/scheduleList' }">
      查看赛事
    </div>
  </div>
</template>

<script>
import clubIntro from '../../common/clubIntro'
export default {
  data: function () {
    return {}
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
  },
  components: {
    clubIntro
  }
}
</script>
