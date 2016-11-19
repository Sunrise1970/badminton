<template>
  <ui-head></ui-head>
  <div class="ui-common-box">
    <!-- <div class="ui-flex competiton-nav ui-border-b">
      <div class="ui-flex-1 ui-border-r ui-active-font-b" v-link="{ path: '/attendList.vue' }">报名</div>
      <div class="ui-flex-1" v-link="{ path: '/competitonList.vue' }">赛事</div>
    </div> -->
    <div class="competiton-list ui-whitespace-m">
      <ul class="clearfix" v-if="state==='success'">
        <li v-for="item in competitonList" v-link="{ path: '/competitonDetail', query:{ competitonId: item._id } }" class="ui-item-box ui-border-radius">
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
              <img src="../../assets/plateno.jpg" class="ui-border-radius" alt="" />
            </section>
            <div class="ui-flex-between ui-common-pd-t">
              <div class="ui-vertical-middle">
                  <img src="../../assets/planote-logo.png" class="logo" alt="" /> {{item.company}}
              </div>
              <div>
                <span class="ui-txt-highlight">比赛{{item.competitonState}}</span> &nbsp;&nbsp;<span class="ui-tag">报名入口</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="ui-flex-center" v-if="state==='noResult'">暂无比赛信息噢</div>
      <div class="ui-flex-center" v-if="state==='error'">哎呦，网络有点故障呢</div>
    </div>
    <div class="gaoxiao ui-common-mg-tb ui-whitespace-m">
      <img src="../../assets/gaoxiao_shouye.gif" class="ui-border-radius" alt="" />
    </div>
    <div class="ui-item-box ui-whitespace-m ui-border-radius project-intro">
      <div class="ui-info-head">
        项目心得
      </div>
      <p class="ui-text-indent">
        一直想尝试使用vue+node+mongoose开发，心血来潮，一不小心就跳进了这个坑。感谢教练、敏敏、镜子、纸黄、小马哥、小鹏等小伙伴的热心解答！
      </p>
      <p class="ui-common-pd-tb">
        感兴趣的同学可以通过github获<span class="ui-gary">(跳)</span>取<span class="ui-gary">(进)</span>源<span class="ui-gary">(深)</span>码<span class="ui-gary">(坑)</span>。
      </p>
      <p>
        前端：<a href="https://github.com/Sunrise1970/badminton">https://github.com/Sunrise1970/badminton</a>
      </p>
      <p>
        后端：<a href="https://github.com/Sunrise1970/badminton-server">https://github.com/Sunrise1970/badminton-server</a>
      </p>
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
      state: ''
    }
  },
  computed: {
    competitonList () {
      return this.list.map((item) => {
        item.competitonState = (item.state === 1) ? '进行中' : '已结束'
        item.competiton_bg = item.competiton_img ? `background-image:url(${item.competiton_img})` : ''
        // item.company_bg = item.company_logo ? `background-image:url(${item.company_logo})` : ''
        item.date = getDateFormat(item.competiton_date)
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
            console.log(this.list.length)
            if (this.list.length !== 0) {
              console.log('list success', this.list)
              this.state = 'success'
            } else {
              console.log('list noResult', this.list)
              this.state = 'noResult'
            }
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
@import "../../assets/sass/base/variable";
.entry {

}
.competiton-nav {
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  text-align: center;
}
.competiton-list {
  h2 {
    display: inline-block;
  }
}
.ui-item-box {
  box-shadow:  0 1px 3px rgba(167,167,167,.4);
  margin-top: 0.4rem;
  padding: 0.13333333333333333rem 0.2rem;
  background-color: $default-bg;
}
.gaoxiao img {
  display: inline-block;
  width: 100%;
}
.logo {
  width: 0.53333rem;
  height: 0.53333rem;
  display: inline-block;
  -webkit-border-radius: 2.66667rem;
  overflow: hidden;
  vertical-align: middle;
  background-color: #f7f7f7;
  background-size: 100%;
}
.ui-info-head {
  margin-top: 0.21333333333333335rem;
}
.project-intro {
  padding-bottom: 0.5333333333333333rem;
}
</style>
