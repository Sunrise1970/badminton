<template>
  <div>
    <div class="ui-flex competiton-nav ui-border-tb">
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 1}" @click="switchItem('detailTypeNav', 1)">说明</div>
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 2}" @click="switchItem('detailTypeNav', 2)">人员</div>
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 3}" @click="switchItem('detailTypeNav', 3)">对阵</div>
      <div class="ui-flex-1" :class="{active: detailType == 4}" @click="switchItem('detailTypeNav', 4)">我的</div>
    </div>
    <div v-if="showCompetitonType" class="ui-flex ui-text-center ui-common-mg-t ui-common-pd-tb">
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 1)">
        <span class="ui-btn" :class="{active: competitonType == 1}">男单</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 2)">
        <span class="ui-btn" :class="{active: competitonType == 2}">女单</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 3)">
        <span class="ui-btn" :class="{active: competitonType == 3}">男双</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 4)">
        <span class="ui-btn" :class="{active: competitonType == 4}">女双</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 5)">
        <span class="ui-btn" :class="{active: competitonType == 5}">混双</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailType: {
      type: Number,
      default: 1
    },
    competitonType: {
      type: Number,
      default: 1
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    showCompetitonType () {
      if (this.detailType === 2 || this.detailType === 3) {
        return true
      }
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    switchItem (nav, type) {
      if (nav === 'detailTypeNav') {
        this.detailType = type
      } else {
        this.competitonType = type
      }
    }
  },
  components: {}
}
</script>

<style lang="scss">
.competiton-nav {
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  text-align: center;
}
</style>
