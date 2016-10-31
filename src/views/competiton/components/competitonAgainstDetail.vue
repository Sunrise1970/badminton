<template>
  <ui-head title="比分详情"></ui-head>
  <div class="ui-common-box">
    <div class="ui-common-mg-b ui-common-pd-t">
      <div class="against-area">
        <div class="ui-border-r">
          <div class="ui-flex area-row1 ui-border-t">
            <div class="ui-flex-1 ui-border-l"></div>
            <div class="ui-flex-5 ui-border-l"></div>
            <div class="ui-flex-2 ui-border-l"></div>
            <div class="ui-flex-2 ui-border-dash-l"></div>
            <div class="ui-flex-5 ui-border-l"></div>
            <div class="ui-flex-1 ui-border-l"></div>
          </div>
          <div class="ui-flex area-row2 ui-border-t">
            <div class="ui-flex-1 ui-border-l"></div>
            <div class="ui-flex-5 ui-border-l">
              <div class="ui-transform-y">
                <template v-for="item in part_a">
                  <div class="ui-text-center ui-common-mg-tb">
                    <div class="ui-avatar-lg ui-vertical-middle">
                      <span style="background-image:url(http://placehold.it/100x100)"></span>
                    </div>
                    <span class="against-name ui-border-radius">{{item.name}}</span>
                  </div>
                </template>
              </div>
            </div>
            <div class="ui-flex-2 ui-border-l ui-flex-center ui-just-end"><span class="vs">v</span></div>
            <div class="ui-flex-2 ui-border-dash-l ui-flex-center ui-just-start"><span class="vs">s</span></div>
            <div class="ui-flex-5 ui-border-l">
              <div class="ui-transform-y">
                <template v-for="item in part_b">
                  <div class="ui-text-center ui-common-mg-tb">
                    <div class="ui-avatar-lg ui-vertical-middle">
                      <span style="background-image:url(http://placehold.it/100x100)"></span>
                    </div>
                    <span class="against-name ui-border-radius">{{item.name}}</span>
                  </div>
                </template>
              </div>
            </div>
            <div class="ui-flex-1 ui-border-l"></div>
          </div>
          <div class="ui-flex area-row1 ui-border-tb">
            <div class="ui-flex-1 ui-border-l"></div>
            <div class="ui-flex-5 ui-border-l"></div>
            <div class="ui-flex-2 ui-border-l"></div>
            <div class="ui-flex-2 ui-border-dash-l"></div>
            <div class="ui-flex-5 ui-border-l"></div>
            <div class="ui-flex-1 ui-border-l"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-flex ui-common-pd-tb ui-text-center ui-txt-bg">
      <div class="ui-flex-1">
        <template v-for="item in againstDetail.part_a_user">
          {{item.users[0].name}}&nbsp;&nbsp;
        </template>
      </div>
      <div class="ui-flex-1">
        <em class="ui-font-14">{{againstDetail.part_a_score}}：{{againstDetail.part_b_score}}</em>
      </div>
      <div class="ui-flex-1">
        <template v-for="item in againstDetail.part_b_user">
          {{item.users[0].name}}&nbsp;&nbsp;
        </template>
      </div>
    </div>
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p" v-if="againstScore && againstScore.length !== 0">
      <div class="ui-flex-between ui-common-pd-tb ui-border-b" v-for="item in againstScore">
        <div class="ui-txt-info ui-common-pd-l">第{{$index+1}}局</div>
        <div class="ui-common-pd-r">{{item}}</div>
      </div>
    </div>
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">裁判</div>
        <div class="ui-common-pd-r">{{againstDetail.judgment}}</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">场地</div>
        <div class="ui-common-pd-r">{{againstDetail.competiton_area}}号场</div>
      </div>
    </div>
    <div class="ui-common-pd-tb ui-text-center">
      <span class="ui-win">Win</span> 胜利方:  <em>{{win}}</em>
    </div>
  </div>
</template>

<script>
import uiHead from '../../common/head'
import competitonCommonNav from './../components/competitonCommonNav'
import { showLoading, hideLoading } from '../../../vuex/actions/common'
import { setAgainstDetail } from '../../../vuex/actions/competiton'
import { againstDetail } from '../../../vuex/getters/competiton'
export default {
  vuex: {
    actions: {
      showLoading,
      hideLoading,
      setAgainstDetail
    },
    getters: {
      againstDetail
    }
  },
  data: function () {
    return {}
  },
  computed: {
    win () {
      let winner = this.againstDetail.part_a_score > this.againstDetail.part_b_score ? 'a' : (this.againstDetail.part_a_score === this.againstDetail.part_b_score ? 'no' : 'b')
      let partA = ''
      let partB = ''
      if (this.againstDetail.part_a_user) {
        for (let item of this.againstDetail.part_a_user) {
          partA += ' ' + item.users[0].name
        }
      }
      if (this.againstDetail.part_b_user) {
        for (let item of this.againstDetail.part_b_user) {
          partB += ' ' + item.users[0].name
        }
      }
      if (winner === 'a') {
        return partA
      } else if (winner === 'b') {
        return partB
      } else {
        return '敬请期待...'
      }
    },
    againstScore () {
      return this.againstDetail.score_detail && this.againstDetail.score_detail.split('_')
    },
    part_a () {
      if (this.againstDetail.part_a_user) {
        return this.againstDetail.part_a_user[0].users
      }
    },
    part_b () {
      if (this.againstDetail.part_b_user) {
        return this.againstDetail.part_b_user[0].users
      }
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    uiHead,
    competitonCommonNav
  },
  route: {
    data () {
      this.showLoading()
      let competitonDetailId = this.$route.query.competitonDetailId
      this.setAgainstDetail(competitonDetailId)
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
@import "../../../assets/sass/base/mixin";
.against-area {
  padding: 0.26666666666666666rem;
  background-color: #1db495;
  .area-row1 {
    height: 0.6666666666666666rem;
  }
  .area-row2 {
    height: 3.066666666666667rem;
  }
  .vs {
    @include font(40px);
    color: #fff;
    font-family:serif;
    font-style: italic;
    display: inline-block;
  }
}
.against-name {
  display: inline-block;
  width: 1.3333333333333333rem;
  margin-left: 0.13333333333333333rem;
  line-height: 0.6666666666666666rem;
  text-align: center;
  background-color: #fff;
}
</style>
