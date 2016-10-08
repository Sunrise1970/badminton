
<template>
  <div class="club-intro ui-font-14" :style="setBackGround(hallAvatar)">
    {{hallName}}
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  props: {
    hallName: {
      type: String
    },
    hallAvatar: {
      type: String
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    setBackGround (bg) {
      return bg ? `background:url(${bg}) no-repeat left center;background-size: 0.6666666666666666rem;` : ''
    }
  },
  components: {}
}
</script>

<style lang="scss">
.club-intro {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  text-indent: 1rem;
}
</style>
