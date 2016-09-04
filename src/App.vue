<template>
  <div id="app">
    <router-view></router-view>
    <!-- <loading></loading>
    <tip></tip> -->
  </div>
</template>

<script>
import Loading from './components/common/loading'
import Tip from './components/common/tip'
import store from './vuex/store'
import { getUserInfo } from './vuex/actions/userInfo'
import fastclick from 'fastclick'

export default {
  vuex: {
    actions: {
      getUserInfo
    }
  },
  store,
  components: {
    Loading,
    Tip
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
