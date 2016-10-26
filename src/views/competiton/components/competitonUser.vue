<template>
  <div class="user-competiton-wrap">
    <div class="user-search">
      <form v-on:submit.prevent="searchHandler">
        <input type="text" v-model="tel" placeholder="请输入报名时的手机号码进行查询" autofocus />
        <input type="submit" value="查询">
      </form>
    </div>
    <div class="user-competiton-list" v-if="list && list.length !== 0">
      <p v-show="list" class="ui-common-mg-tb ui-common-pd ui-txt-info ui-txt-bg ui-border-tb">
        共参与比赛<em> {{competitonUserList.all}} </em> 场&emsp; 胜： <em>{{competitonUserList.win}}</em> 场&emsp; 输： <em>{{competitonUserList.fail}}</em> 场
      </p>
      <ul>
        <li v-for="item in list" class="ui-border-tb ui-common-mg-b ui-common-pd" v-link="{ path: '/competitonAgainstDetail', query:{ competitonDetailId: item._id } }">
            <div class="ui-common-pd-tb ui-border-dash-b">
              <span class="ui-txt-highlight">{{item.competitonState}}</span>
              &emsp;<em> {{item.competiton_area}} </em>号场 / 第<em> {{item.competiton_order}} </em>场&emsp;裁判： <em>{{item.judgment}}</em>
            </div>
            <div class="ui-common-pd-tb ui-flex-center ui-text-center">
              <div class="ui-flex-1">
                <template v-for="items in item.part_a_user">
                  <div class="ui-common-pd-tb">
                    <div class="ui-avatar-lg ui-vertical-middle">
                      <span style="background-image:url(http://placehold.it/100x100)"></span>
                    </div>&emsp; {{items.users[0].name}}
                  </div>
                </template>
              </div>
              <div class="ui-flex-1">
                <em class="ui-font-14">{{item.part_a_score}}</em>
                <span class="ui-txt-muted">&emsp;vs&emsp;</span>
                <em class="ui-font-14">{{item.part_b_score}}</em>
              </div>
              <div class="ui-flex-1">
                <template v-for="items in item.part_b_user">
                  <div class="ui-common-pd-tb">
                    <div class="ui-avatar-lg ui-vertical-middle">
                      <span style="background-image:url(http://placehold.it/100x100)"></span>
                    </div>&emsp; {{items.users[0].name}}
                  </div>
                </template>
              </div>
            </div>
        </li>
      </ul>
    </div>
    <div v-show="list && list.length === 0" class="ui-no-data">
      没有相关比赛呢!
    </div>
  </div>
</template>

<script>
import validator from 'validator'
import { setCompetitonUser } from '../../../vuex/actions/competiton'
import { setCookie, getCookie, removeCookie } from '../../../untils'
import { competitonUserList } from '../../../vuex/getters/competiton'
import { showLoading, hideLoading, showTip } from '../../../vuex/actions/common'
export default {
  vuex: {
    actions: {
      showLoading,
      hideLoading,
      showTip,
      setCompetitonUser
    },
    getters: {
      competitonUserList
    }
  },
  data: function () {
    return {
      tel: getCookie('tel')
    }
  },
  computed: {
    list () {
      return this.competitonUserList.list && this.competitonUserList.list.map((item) => {
        item.competitonState = (item.state === 1) ? '进行中' : '已结束'
        item.user_bg = item.competiton_img ? `background-image:url(${item.competiton_img})` : ''
        return item
      })
    }
  },
  ready: function () {
    if (getCookie('tel')) {
      this.showLoading()
      this.setCompetitonUser(this.tel, this.$route.query.competitonId)
          .then((res) => {
            this.hideLoading()
          })
          .catch((e) => {
            this.hideLoading()
            this.showTip(e.statusText)
          })
    }
  },
  attached: function () {},
  methods: {
    searchHandler: function () {
      // 信息验证
      if ([this.tel].some(function (item) { return item === '' })) {
        this.showTip('请输入完整信息')
        return
      }
      if (!validator.isMobilePhone(this.tel, 'zh-CN')) {
        this.showTip('请输入正确的手机号码')
        return
      }
      let tel = getCookie('tel')
      console.log(tel)
      console.log(this.tel)
      let competitonId = this.$route.query.competitonId
      // 未设cookie
      if (this.tel !== tel) {
        this.showLoading()
        this.setCompetitonUser(this.tel, competitonId)
            .then((res) => {
              this.hideLoading()
            })
            .catch((e) => {
              this.hideLoading()
              this.showTip(e.statusText)
            })
        removeCookie('tel')
        let telCookie = {
          key: 'tel',
          value: this.tel,
          expireDays: 1
        }
        setCookie(telCookie)
      }
    }
  },
  components: {}
}
</script>
<style scoped>
  .user-search {
    margin-top: 0.26666666666666666rem;
    text-align: center;
  }
  .user-search input[type="text"] {
    display: inline-block;
    width: 70%;
    padding: 0.2rem;
    border-radius: 5px;
  }
  .user-search input[type="submit"] {
    display: inline-block;
    width: 20%;
    margin-left: 0.13333333333333333rem;
    padding: 0.2rem;
    background-color: #86c40d;
    color: #fff;
    border-radius: 5px;
  }
</style>
