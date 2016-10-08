<template>
  <div>
    <div class="ui-flex competiton-nav ui-border-tb">
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 1}" @click="switchItem('detailTypeNav', 1)">说明</div>
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 2}" @click="switchItem('detailTypeNav', 2)">人员</div>
      <div class="ui-flex-1 ui-border-r" :class="{active: detailType == 3}" @click="switchItem('detailTypeNav', 3)">对阵</div>
      <div class="ui-flex-1" :class="{active: detailType == 4}" @click="switchItem('detailTypeNav', 4)">我的</div>
    </div>
    <div v-if="detailType === 2 || detailType === 3" class="ui-flex ui-text-center ui-common-mg-t ui-common-pd-tb">
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
    <div v-if="detailType === 3" class="ui-flex ui-common-mg-b ui-common-pd-tb ui-txt-info ui-text-center ui-txt-bg ui-border-tb">
      <div class="ui-flex-1" @click="switchItem('processTypeNav', 1)">
        <span :class="{'ui-tag': processType == 1}">对阵全览</sapn>
      </div>
      <div class="ui-flex-1" @click="switchItem('processTypeNav', 2)">
        <span :class="{'ui-tag': processType == 2}">总决赛</sapn>
      </div>
      <div class="ui-flex-1" @click="switchItem('processTypeNav', 3)">
        <span :class="{'ui-tag': processType == 3}">半决赛</sapn>
      </div>
      <div class="ui-flex-1" @click="switchItem('processTypeNav', 4)">
        <span :class="{'ui-tag': processType == 4}">1/4决赛</sapn>
      </div>
    </div>
  </div>
</template>

<script>
import { setCompetitonIntro, setCompetitonMember, setCompetitonAgainst, setCompetitonUser } from '../../../vuex/actions/competiton'
// import { intro } from '../../../vuex/getters/competiton'
export default {
  vuex: {
    actions: {
      setCompetitonIntro,
      setCompetitonMember,
      setCompetitonAgainst,
      setCompetitonUser
    }
    // getters: {
    //   intro
    // }
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
    switchItem (nav, type) {
      if (nav === 'detailTypeNav') {
        this.detailType = type
      } else if (nav === 'competitonTypeNav') {
        this.competitonType = type
        if (this.detailType === 2) {
          this.setCompetitonMember(type)
              .then((res) => {
                // if (this.member.length !== 0) {
                //   console.log('member success', this.member)
                //   this.state = 'success'
                // } else {
                //   console.log('member noResult', this.member)
                //   this.state = 'noResult'
                // }
              })
              .catch((e) => {
                console.log(e)
                this.state = 'error'
              })
        }
      } else if (nav === 'processTypeNav') {
        this.processType = type
        this.setCompetitonAgainst(type)
            .then((res) => {
              // if (this.against.length !== 0) {
              //   console.log('against success', this.against)
              //   this.state = 'success'
              // } else {
              //   console.log('against noResult', this.against)
              //   this.state = 'noResult'
              // }
            })
            .catch((e) => {
              console.log(e)
              this.state = 'error'
            })
      }
    }
  },
  components: {},
  route: {
    data () {
      // 比赛介绍
      this.setCompetitonIntro()
          .then((res) => {
            if (this.intro !== '') {
              console.log('intro success', this.intro)
              this.state = 'success'
            } else {
              console.log('list noResult', this.intro)
              this.state = 'noResult'
            }
          })
          .catch((e) => {
            console.log(e)
            this.state = 'error'
          })
      // 参赛人员列表
      this.setCompetitonMember()
          .then((res) => {
            // if (this.member.length !== 0) {
            //   console.log('member success', this.member)
            //   this.state = 'success'
            // } else {
            //   console.log('member noResult', this.member)
            //   this.state = 'noResult'
            // }
          })
          .catch((e) => {
            console.log(e)
            this.state = 'error'
          })
      // 对阵信息
      this.setCompetitonAgainst()
          .then((res) => {
            // if (this.against.length !== 0) {
            //   console.log('against success', this.against)
            //   this.state = 'success'
            // } else {
            //   console.log('against noResult', this.against)
            //   this.state = 'noResult'
            // }
          })
          .catch((e) => {
            console.log(e)
            this.state = 'error'
          })
      // 当前用户比赛信息
      this.setCompetitonUser()
          .then((res) => {
            // if (this.user !== '') {
            //   console.log('user success', this.user)
            //   this.state = 'success'
            // } else {
            //   console.log('user noResult', this.user)
            //   this.state = 'noResult'
            // }
          })
          .catch((e) => {
            console.log(e)
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
