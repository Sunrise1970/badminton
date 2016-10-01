<template>
  <ui-head></ui-head>
  <div class="ui-common-box">
    <!-- <div class="ui-flex competiton-nav ui-border-b">
      <div class="ui-flex-1 ui-border-r ui-active-font-b" v-link="{ path: '/attendList.vue' }">报名</div>
      <div class="ui-flex-1" v-link="{ path: '/competitonList.vue' }">赛事</div>
    </div> -->
    <div class="competiton-list ui-whitespace-m">
    <ul class="clearfix">
      <li v-for="item in competitonList" v-link="{ path: '/competitonDetail', query:{ competitonId: item._id } }" class="ui-border-radius">
        <div class="ui-common-pd">
          <div class="ui-flex">
            <div class="competiton-tag ui-tag">
              大型赛
            </div>
            <div class="ui-flex-1 ui-border-r ui-text-center">
              {{item.date}}
            </div>
            <div class="ui-flex-1 ui-text-center">
              {{item.hall_name}}
            </div>
          </div>
          <h2 class="ui-font-14 ui-common-pd-tb" style="vertical-align: middle">{{item.competiton_name}}</h2>
          <section class="ui-placehold-img">
            <span :style="item.competiton_bg"></span>
          </section>
          <div class="ui-flex-between ui-common-pd-t">
            <div class="ui-vertical-middle">
              <div class="ui-avatar-s">
                <span :style="item.company_bg"></span>
              </div> {{item.company}}
            </div>
            <div>
              {{item.attend_num}}/无限制&emsp;<span class="ui-txt-highlight">{{item.competitonState}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import uiHead from '../common/head'
import { setCompetitonList } from '../../vuex/actions/competiton'
import { list } from '../../vuex/getters/competiton'
import { getDateFormat } from '../../untils'
export default {
  vuex: {
    actions: {
      setCompetitonList
    },
    getters: {
      list
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    competitonList () {
      return this.list.map((item) => {
        item.competitonState = (item.state === 1) ? '进行中' : '已结束'
        item.competiton_bg = item.competiton_img ? `background-image:url(${item.competiton_img})` : ''
        item.company_bg = item.company_logo ? `background-image:url(${item.company_logo})` : ''
        item.date = getDateFormat(item.competiton_date, 1)
        return item
      })
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    uiHead
  },
  route: {
    data () {
      this.setCompetitonList()
          .then((res) => {
            console.log('list success', this.list)
          })
          .catch((e) => { console.log(e) })
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/base/variable";
.competiton-nav {
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  text-align: center;
}
.competiton-list {
  li {
    box-shadow:  0 1px 3px rgba(167,167,167,.4);
    margin-top: 0.4rem;
    padding: 0.13333333333333333rem 0.2rem;
    background-color: $default-bg;
  }
  h2 {
    display: inline-block;
  }
}
.competiton-tag {

}
</style>
