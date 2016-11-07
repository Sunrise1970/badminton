<template>
  <div>
    <ui-head title="报名"></ui-head>
    <form v-on:submit.prevent="attendHandler">
      <div class="ui-common-box">
        <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
          <div class="ui-info-head ui-common-mg-t0">
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
            基本信息
          </div>
          <template v-if="attend.competitonType == 3 || attend.competitonType == 4 || attend.competitonType == 5">
            <div class="member-tit">
              队员一
            </div>
          </template>
          <div class="form-label-input ui-border-b">
            <label for="name">姓&emsp;&emsp;名</label>
            <input type="text" id="name" value="" v-model="attend.name" placeholder="请输入姓名">
          </div>
          <div class="form-label-input ui-border-b">
            <label for="card">身&ensp;份&ensp;证</label>
            <input type="text" id="card" value="" v-model="attend.card" placeholder="请输入身份证">
          </div>
          <div class="form-label-input ui-border-b">
            <label for="tel">手机号码</label>
            <input type="text" id="tel" value="" v-model="attend.tel" placeholder="请输入手机号码">
          </div>
          <div class="form-label-input ui-border-b" v-if="attend.competitonType == 5">
            <label for="sex">性&emsp;&emsp;别</label>
            <select id="sex" v-model="attend.sex">
              <option value="1">男</option>
              <option value="2">女</option>
            </select>
          </div>
          <template v-if="attend.competitonType == 3 || attend.competitonType == 4 || attend.competitonType == 5">
            <div class="member-tit ui-common-pd-t">
              队员二
            </div>
            <div class="form-label-input ui-border-b">
              <label for="name">姓&emsp;&emsp;名</label>
              <input type="text" id="name" value="" v-model="attend.name2" placeholder="请输入姓名">
            </div>
            <div class="form-label-input ui-border-b">
              <label for="card">身&ensp;份&ensp;证</label>
              <input type="text" id="card" value="" v-model="attend.card2" placeholder="请输入身份证">
            </div>
            <div class="form-label-input ui-border-b">
              <label for="tel">手机号码</label>
              <input type="text" id="tel" value="" v-model="attend.tel2" placeholder="请输入手机号码">
            </div>
            <div class="form-label-input ui-border-b" v-if="attend.competitonType == 5">
              <label for="sex">性&emsp;&emsp;别</label>
              <select id="sex" v-model="attend.sex2">
                <option value="1">男</option>
                <option value="2">女</option>
              </select>
            </div>
          </template>
          <div class="ui-info-head">
            报名说明
          </div>
          <div class="ui-common-pd ui-border-radius">
            <ul>
              <li>1、为了让尽可能多的人参与此次活动，每人可以参与一或两类型比赛。</li>
              <li>2、身份证号码和手机号码的用途是为参赛人员购买意外险。</li>
            </ul>
          </div>
        </div>
      </div>
      <input class="ui-bottom-btn ui-btn-box" type="submit" value="提交">
    </form>
  </div>
</template>

<script>
import validator from 'validator'
import uiHead from '../common/head'

import { validateIdCard } from '../../untils'
import { setAttend, setUserTel } from '../../vuex/actions/competiton'
import { showLoading, hideLoading, showTip } from '../../vuex/actions/common'
export default {
  vuex: {
    actions: {
      setAttend,
      showLoading,
      hideLoading,
      showTip,
      setUserTel
    }
  },
  data () {
    return {
      attend: {
        name: '',
        card: '',
        tel: '',
        sex: '',
        name2: '',
        card2: '',
        tel2: '',
        sex2: '',
        competitonType: 1,
        competitonId: '',
        hasSubmit: false
      }
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    attendHandler: function () {
      if (this.hasSubmit) {
        this.showTip('你已经提交一次啦！')
        return
      }
      // 信息验证
      let attendObj
      if (this.attend.competitonType === 1 || this.attend.competitonType === 2) {
        if ([this.attend.name, this.attend.card, this.attend.tel].some(function (item) { return item === '' })) {
          this.showTip('请输入完整信息')
          return
        }
        if (!validateIdCard(this.attend.card)) {
          this.showTip('请输入正确的身份证号码')
          return
        }
        if (!validator.isMobilePhone(this.attend.tel, 'zh-CN')) {
          this.showTip('请输入正确的手机号码')
          return
        }
      } else {
        if (this.attend.competitonType === 5) {
          if ([this.attend.name, this.attend.card, this.attend.tel, this.attend.sex, this.attend.name2, this.attend.card2, this.attend.tel2, this.attend.sex2].some(function (item) { return item === '' })) {
            this.showTip('请输入完整信息')
            return
          }
          if (this.attend.sex === this.attend.sex2) {
            this.showTip('两个队员的性别相同')
            return
          }
        } else {
          if ([this.attend.name, this.attend.card, this.attend.tel, this.attend.name2, this.attend.card2, this.attend.tel2].some(function (item) { return item === '' })) {
            this.showTip('请输入完整信息')
            return
          }
        }
        if (!validateIdCard(this.attend.card)) {
          this.showTip('请输入正确的队员一身份证号码')
          return
        }
        if (!validator.isMobilePhone(this.attend.tel, 'zh-CN')) {
          this.showTip('请输入正确的队员一手机号码')
          return
        }
        if (!validateIdCard(this.attend.card2)) {
          this.showTip('请输入正确的队员二身份证号码')
          return
        }
        if (!validator.isMobilePhone(this.attend.tel2, 'zh-CN')) {
          this.showTip('请输入正确的队员二手机号码')
          return
        }
        if (this.attend.card === this.attend.card2) {
          this.showTip('两个队员身份证号码相同')
          return
        }
        if (this.attend.tel === this.attend.tel2) {
          this.showTip('两个队员手机号码相同')
          return
        }
      }
      attendObj = this.returnAttendObj(this.attend.competitonType)
      let userTel = this.attend.tel2 !== '' ? `${this.attend.tel}_${this.attend.tel2}` : this.attend.tel
      let userSex = this.attend.sex2 !== '' ? `${this.attend.sex}_${this.attend.sex2}` : this.attend.sex
      console.log('sex2', this.attend.sex2)
      console.log('sex', userSex)
      this.showLoading()
      this.setAttend(userTel, userSex, attendObj)
          .then((res) => {
            this.hideLoading()
            let tipText = ''
            if (res.data === 'hasOver') {
              this.showTip('此项已报名啦！赶紧报其他项吧！')
            } else if (res.data === 'hasAttendTwo') {
              tipText = (this.attend.competitonType === 1 || this.attend.competitonType === 2) ? '您已经参与了两项比赛啦！' : '至少一个队员已经参与了两项比赛啦！'
              this.showTip(tipText)
            } else if (res.data === 'hasAttendSame') {
              tipText = (this.attend.competitonType === 1 || this.attend.competitonType === 2) ? '您已经参与了这项比赛啦！' : '至少一个队员已经参与了这项比赛啦！'
              this.showTip(tipText)
            } else if (res.data.text === 'gay') {
              if (this.attend.competitonType === 5) {
                tipText = '至少一个队员性别有误'
              } else {
                let tip = ''
                switch (res.data.type) {
                  case 1:
                    tip = '男单'
                    break
                  case 2:
                    tip = '女单'
                    break
                  case 3:
                    tip = '男双'
                    break
                  case 4:
                    tip = '女双'
                    break
                }
                tipText = (this.attend.competitonType === 1 || this.attend.competitonType === 2) ? '您已经参与了' + tip + '比赛啦！' : '至少一个队员已经参与了' + tip + '比赛啦！'
              }
              this.showTip(tipText)
            } else {
              this.hasSubmit = true
              this.setUserTel(userTel, this.$route.query.competitonId)
              this.showTip('恭喜您！报名成功！')
            }
            // setTimeout(() => {
            //   this.$route.router.go({name: 'competiton detail', query: { competitonId: this.$route.query.competitonId }})
            // }, 1500)
          })
          .catch((e) => {
            this.hideLoading()
            this.showTip(e.statusText)
          })
    },
    selectCompetitonType: function (type) {
      this.hasSubmit = false
      this.attend.competitonType = type
    },
    returnAttendObj: function (type) {
      let attendObj
      if (type === 1 || type === 2) {
        attendObj = {
          user: [{
            name: validator.trim(this.attend.name),
            card: validator.trim(this.attend.card),
            tel: validator.trim(this.attend.tel),
            sex: this.returnSex(type, 1),
            lotteryId: 0
          }],
          competitonType: this.attend.competitonType,
          competitonId: this.$route.query.competitonId
        }
      } else {
        attendObj = {
          user: [{
            name: validator.trim(this.attend.name),
            card: validator.trim(this.attend.card),
            tel: validator.trim(this.attend.tel),
            sex: this.returnSex(type, 1),
            lotteryId: 0
          },
          {
            name: validator.trim(this.attend.name2),
            card: validator.trim(this.attend.card2),
            tel: validator.trim(this.attend.tel2),
            sex: this.returnSex(type, 2),
            lotteryId: 0
          }],
          competitonType: this.attend.competitonType,
          competitonId: this.$route.query.competitonId
        }
      }
      return attendObj
    },
    returnSex (type, user) {
      const man = [1, 3]
      const woman = [2, 4]
      let sex
      if (man.indexOf(type) !== -1) {
        this.attend.sex = 1
        sex = 1
        return sex
      } else if (woman.indexOf(type) !== -1) {
        this.attend.sex = 2
        sex = 2
        return sex
      } else {
        if (user === 1) {
          sex = this.attend.sex
        } else {
          sex = this.attend.sex2
        }
        return sex
      }
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
.member-tit {
  height: 0.6666666666666666rem;
  line-height: 0.6666666666666666rem;
  text-align: center;
}
</style>
