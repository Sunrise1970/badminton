<template>
  <div>
    <div class="ui-flex competiton-nav ui-border-tb">
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 1}" @click="switchItem('detailTypeNav', '', 1)">说明</div>
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 2}" @click="switchItem('detailTypeNav', '', 2)">人员</div>
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 3}" @click="switchItem('detailTypeNav', '', 3)">对阵</div>
      <div class="ui-flex-1" :class="{active: detailType == 4}" @click="switchItem('detailTypeNav', '', 4)">我的</div>
    </div>
    <div v-if="detailType === 2 || detailType === 3" class="ui-flex ui-text-center ui-common-mg-t ui-common-pd-tb">
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', '', 1)">
        <span class="ui-btn" :class="{active: competitonType == 1}">男单</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', '', 2)">
        <span class="ui-btn" :class="{active: competitonType == 2}">女单</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', '', 3)">
        <span class="ui-btn" :class="{active: competitonType == 3}">男双</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', '', 4)">
        <span class="ui-btn" :class="{active: competitonType == 4}">女双</span>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', '', 5)">
        <span class="ui-btn" :class="{active: competitonType == 5}">混双</span>
      </div>
    </div>
    <div v-if="detailType === 3" class="ui-flex ui-common-mg-b ui-common-pd-tb ui-txt-info ui-text-center ui-txt-bg ui-border-tb">
      <!-- <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 'processTypeNav', 1)">
        <span :class="{'ui-tag': processType == 1}">对阵全览</sapn>
      </div> -->
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 'processTypeNav', 1)">
        <span :class="{'ui-tag': processType == 1}">预选赛</sapn>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 'processTypeNav', 2)">
        <span :class="{'ui-tag': processType == 2}">半决赛</sapn>
      </div>
      <div class="ui-flex-1" @click="switchItem('competitonTypeNav', 'processTypeNav', 3)">
        <span :class="{'ui-tag': processType == 3}">总决赛</sapn>
      </div>
    </div>
  </div>
</template>

<script>
import { setCompetitonIntro, setCompetitonMember, setCompetitonAgainst, setCompetitonUser } from '../../../vuex/actions/competiton'
import { showLoading, hideLoading, showTip } from '../../../vuex/actions/common'
export default {
  vuex: {
    actions: {
      setCompetitonIntro,
      setCompetitonMember,
      setCompetitonAgainst,
      setCompetitonUser,
      showLoading,
      hideLoading,
      showTip
    }
  },
  props: {
    detailType: {
      type: Number,
      default: 1
    },
    competitonType: {
      type: Number,
      default: 1
    },
    processType: {
      type: Number,
      default: 1
    }
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    switchItem (nav, twoNav, type) {
      this.showLoading()
      let competitonId = this.$route.query.competitonId
      // 一级导航（说明，人员，对阵，我的）
      if (nav === 'detailTypeNav') {
        this.detailType = type
        this.competitonType = 1
        switch (type) {
          case 1:
            this.hideLoading()
            break
          case 2:
            this.setCompetitonMember(competitonId, 1)
                .then((res) => {
                  this.hideLoading()
                })
                .catch((e) => {
                  this.hideLoading()
                  this.state = 'error'
                  this.showTip(e.statusText)
                })
            break
          case 3:
            this.setCompetitonAgainst(competitonId, 1, 1)
                .then((res) => {
                  this.hideLoading()
                })
                .catch((e) => {
                  this.hideLoading()
                  this.state = 'error'
                  this.showTip(e.statusText)
                })
            break
          case 4:
            this.hideLoading()
            break
        }
      // 二级导航（男单、女单、男双、女双、混双）
      } else if (nav === 'competitonTypeNav') {
        if (this.detailType === 2) {
          this.competitonType = type
          this.setCompetitonMember(competitonId, type)
              .then((res) => {
                this.hideLoading()
              })
              .catch((e) => {
                this.hideLoading()
                this.state = 'error'
              })
        // 三级导航（对阵全览，总结赛，半截赛，1/4决赛）
        } else {
          if (twoNav !== 'processTypeNav') {
            this.processType = 1
            this.competitonType = type
            this.setCompetitonAgainst(competitonId, type, 1)
                .then((res) => {
                  this.hideLoading()
                })
                .catch((e) => {
                  this.hideLoading()
                  this.state = 'error'
                })
          } else {
            this.processType = type
            this.setCompetitonAgainst(competitonId, this.competitonType, type)
                .then((res) => {
                  this.hideLoading()
                })
                .catch((e) => {
                  this.hideLoading()
                  this.state = 'error'
                })
          }
        }
      }
    }
  },
  components: {},
  route: {
    data () {
      // 比赛介绍
      this.setCompetitonIntro()
          .then((res) => {
            this.hideLoading()
          })
          .catch((e) => {
            this.hideLoading()
            this.state = 'error'
          })
    }
  }
}
</script>

<style lang="scss">
.competiton-nav {
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  text-align: center;
}
</style>
