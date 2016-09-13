<template>
  <ui-head title="报名"></ui-head>
  <div class="ui-common-box">
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div class="ui-info-head ui-common-mg-t0">
        基本信息
      </div>
      <div class="form-label-input ui-border-b">
        <label for="name">姓&emsp;&emsp;名</label>
        <input type="text" name="name" value="" placeholder="请输入姓名">
      </div>
      <div class="form-label-input ui-border-b">
        <label for="name">身&ensp;份&ensp;证</label>
        <input type="text" name="name" value="" placeholder="请输入身份证">
      </div>
      <div class="form-label-input ui-border-b">
        <label for="name">手机号码</label>
        <input type="text" name="name" value="" placeholder="请输入手机号码">
      </div>
      <div class="ui-info-head">
        比赛类型
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">男子单打</div>
        <div class="">
          <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info"></span>
        </div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">女子单打</div>
        <div class="">
          <span class="iconfont icon-zhifudanxuanxuanzhong ui-font-14 ui-txt-highlight"></span>
        </div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">男子双打</div>
        <div class="">
          <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info"></span>
        </div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">女子双打</div>
        <div class="">
          <span class="iconfont icon-zhifudanxuanxuanzhong ui-font-14 ui-txt-highlight"></span>
        </div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info">混合双打</div>
        <div class="">
          <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info"></span>
        </div>
      </div>
      <div class="ui-info-head">
        报名说明
      </div>
      <p class="ui-info-txt ui-border-radius">
        每人可以参与一或两类型比赛每人可以参与一或两类型比赛每人可以参与一或两类型比赛每人可以参与一或两类型比赛每人可以参与一或两类型比赛每人可以参与一或两类型比赛每人可以参与一或两类型比赛
      </p>
    </div>
  </div>
  <div class="ui-bottom-btn ui-btn-box">
    下一步
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
</style>
