<template>
  <div class="head">
    <a id="index" @click="urlHandler('')">首页</a>
    <a id="index" @click="urlHandler('login')">登录</a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    urlHandler (name) {
      this.$route.router.go({
        path: `/${name}`
      })
    }
  },
  components: {}
}
</script>

<style lang="scss">
</style>
