<template>
  <div id="app">
    <router-view></router-view>
    <toast :show.sync="tipShow" type="text">{{tipMsg}}</toast>
    <loading :show.sync="loadingState"></loading>
  </div>
</template>

<script>
import { Toast, Loading } from './components'
import store from './vuex/store'
import { getUserInfo } from './vuex/actions/userInfo'
import fastclick from 'fastclick'
import { showLoading, showTip } from './vuex/getters/common'

export default {
  vuex: {
    actions: {
      getUserInfo
    },
    getters: {
      showLoading,
      showTip
    }
  },
  data () {
    return {
      tipShow: false,
      tipMsg: '',
      loadingState: false
    }
  },
  store,
  components: {
    Toast,
    Loading
  },
  computed: {
    loadingState () {
      return this.showLoading
    },
    tipShow () {
      return this.showTip.tipShow
    },
    tipMsg () {
      return this.showTip.tipMsg
    }
  },
  ready () {
    fastclick.attach(document.body)
    this.getUserInfo()
  }
}
</script>

<style lang="scss">
@import "./assets/sass/common";
</style>
