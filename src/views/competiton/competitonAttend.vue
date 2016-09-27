<template>
  <div>
    <ui-head title="报名"></ui-head>
    <form v-on:submit.prevent="attendHandler">
      <div class="ui-common-box">
        <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
          <div class="ui-info-head ui-common-mg-t0">
            基本信息
          </div>
          <div class="form-label-input ui-border-b">
            <label for="name">姓&emsp;&emsp;名</label>
            <input type="text" id="name" value="" v-model="attend.name" placeholder="请输入姓名">
          </div>
          <div class="form-label-input ui-border-b">
            <label for="tel">性&emsp;&emsp;别</label>
            <input type="text" id="tel" value="" v-model="attend.tel" placeholder="请输入手机号码">
          </div>
          <div class="form-label-input ui-border-b">
            <label for="card">身&ensp;份&ensp;证</label>
            <input type="text" id="card" value="" v-model="attend.card" placeholder="请输入身份证">
          </div>
          <div class="form-label-input ui-border-b">
            <label for="tel">手机号码</label>
            <input type="text" id="tel" value="" v-model="attend.tel" placeholder="请输入手机号码">
          </div>
          <div class="ui-info-head">
            比赛类型
          </div>
          <div class="ui-flex-between ui-common-pd-tb ui-border-b" @click="selectCompetitonType(1)">
            <div class="ui-txt-info">男子单打</div>
            <div class="">
              <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info" :class="{ 'icon-zhifudanxuanxuanzhong': attend.competitonType == 1 }"></span>
            </div>
          </div>
          <div class="ui-flex-between ui-common-pd-tb ui-border-b" @click="selectCompetitonType(2)">
            <div class="ui-txt-info">女子单打</div>
            <div class="">
              <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info" :class="{ 'icon-zhifudanxuanxuanzhong': attend.competitonType == 2 }"></span>
            </div>
          </div>
          <div class="ui-flex-between ui-common-pd-tb ui-border-b" @click="selectCompetitonType(3)">
            <div class="ui-txt-info">男子双打</div>
            <div class="">
              <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info" :class="{ 'icon-zhifudanxuanxuanzhong': attend.competitonType == 3 }"></span>
            </div>
          </div>
          <div class="ui-flex-between ui-common-pd-tb ui-border-b" @click="selectCompetitonType(4)">
            <div class="ui-txt-info">女子双打</div>
            <div class="">
              <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info" :class="{ 'icon-zhifudanxuanxuanzhong': attend.competitonType == 4 }"></span>
            </div>
          </div>
          <div class="ui-flex-between ui-common-pd-tb ui-border-b" @click="selectCompetitonType(5)">
            <div class="ui-txt-info">混合双打</div>
            <div class="">
              <span class="iconfont icon-zhifudanxuan ui-font-14 ui-txt-info" :class="{ 'icon-zhifudanxuanxuanzhong': attend.competitonType == 5 }"></span>
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
      <input class="ui-bottom-btn ui-btn-box" type="submit" value="提交">
    </form>
  </div>
</template>

<script>
import validator from 'validator'
import uiHead from '../common/head'
import { setAttend } from '../../vuex/actions/competiton'
export default {
  vuex: {
    actions: {
      setAttend
    }
  },
  data: function () {
    return {
      attend: {
        name: '',
        card: '',
        tel: '',
        competitonType: 1
      }
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    attendHandler: function () {
      // 信息验证
      let attendObj
      attendObj = {
        name: validator.trim(this.attend.name),
        card: validator.trim(this.attend.card),
        tel: validator.trim(this.attend.tel),
        competitonType: this.attend.competitonType
      }
      if ([attendObj.name, attendObj.card, attendObj.tel, attendObj.competitonType].some(function (item) { return item === '' })) {
        window.alert('请输入完整的信息')
        return
      }
      if (!validator.isMobilePhone(attendObj.tel, 'zh-CN')) {
        window.alert('手机号码有误')
        return
      }
      console.log('view(attend handler): attend input ', this.attend)
      console.log('view(attend handler): attend input attend.name', this.attend.name)
      this.setAttend(attendObj)
    },
    selectCompetitonType: function (type) {
      this.attend.competitonType = type
    }
  },
  components: {
    uiHead
  }
}
</script>

<style lang="scss">
.icon-zhifudanxuanxuanzhong {
  color: #86c40d;
}
</style>
