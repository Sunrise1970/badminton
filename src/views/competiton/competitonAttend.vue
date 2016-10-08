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
            <label for="sex">性&emsp;&emsp;别</label>
            <select id="sex" v-model="attend.sex">
              <option selected value="1">男</option>
              <option value="2">女</option>
            </select>
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
    <toast :show.sync="tipShow" type="text">{{tipMsg}}</toast>
    <loading :show.sync="loadingShow"></loading>
  </div>
</template>

<script>
import validator from 'validator'
import uiHead from '../common/head'
import { Toast, Loading } from '../../components'

import { setAttend } from '../../vuex/actions/competiton'
export default {
  vuex: {
    actions: {
      setAttend
    }
  },
  data () {
    return {
      attend: {
        name: '',
        card: '',
        tel: '',
        competitonType: 1
      },
      tipShow: false,
      tipMsg: '',
      loadingShow: false
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
        competitonType: this.attend.competitonType,
        competitonId: this.$route.query.competitonId
      }
      if ([attendObj.name, attendObj.card, attendObj.tel, attendObj.competitonType, attendObj.competitonId].some(function (item) { return item === '' })) {
        this.tipShow = true
        this.tipMsg = '请输入完整信息'
        return
      }
      if (!validator.isMobilePhone(attendObj.tel, 'zh-CN')) {
        this.tipShow = true
        this.tipMsg = '手机号码有误'
        return
      }
      console.log('view(attend handler): attend input ', this.attend)
      console.log('view(attend handler): attend input attend.name', this.attend.name)
      this.loadingShow = true
      this.setAttend(attendObj)
          .then((res) => {
            this.loadingShow = false
          })
          .catch((e) => {
            this.loadingShow = false
            this.tipShow = true
            this.tipMsg = e
          })
    },
    selectCompetitonType: function (type) {
      this.attend.competitonType = type
    }
  },
  components: {
    uiHead,
    Toast,
    Loading
  }
}
</script>

<style lang="scss">
.icon-zhifudanxuanxuanzhong {
  color: #86c40d;
}
</style>
