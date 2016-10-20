<template>
  <p v-show="list" class="ui-common-mg-tb ui-common-pd ui-txt-info ui-txt-bg ui-border-tb">
    共参与比赛<em> {{competitonUserList.all}} </em> 场&emsp; 胜： <em>{{competitonUserList.win}}</em> 场&emsp; 输： <em>{{competitonUserList.fail}}</em> 场
  </p>
  <ul>
    <li v-for="item in list" class="ui-border-tb ui-common-mg-b ui-common-pd" v-link="{ path: '/competitonAgainstDetail', query:{ competitonDetailId: item._id } }">
        <div class="ui-common-pd-tb ui-border-dash-b">
          <span class="ui-txt-highlight">{{item.competitonState}}</span>
          &emsp;<em> {{item.competiton_area}} </em>号场 / 第<em> {{item.competiton_order}} </em>场&emsp;裁判： <em>{{item.judgment}}</em>
        </div>
        <div class="ui-common-pd-tb ui-flex-center ui-text-center">
          <div class="ui-flex-1">
            <template v-for="items in item.part_a_user">
              <div class="ui-common-pd-tb">
                <div class="ui-avatar-lg ui-vertical-middle">
                  <span style="background-image:url(http://placehold.it/100x100)"></span>
                </div>&emsp; {{items.users[0].name}}
              </div>
            </template>
          </div>
          <div class="ui-flex-1">
            <em class="ui-font-14">{{item.part_a_score}}</em>
            <span class="ui-txt-muted">&emsp;vs&emsp;</span>
            <em class="ui-font-14">{{item.part_b_score}}</em>
          </div>
          <div class="ui-flex-1">
            <template v-for="items in item.part_b_user">
              <div class="ui-common-pd-tb">
                <div class="ui-avatar-lg ui-vertical-middle">
                  <span style="background-image:url(http://placehold.it/100x100)"></span>
                </div>&emsp; {{items.users[0].name}}
              </div>
            </template>
          </div>
        </div>
    </li>
    <!-- <li class="ui-border-tb ui-common-mg-b ui-common-pd" v-link="{ path: '/competitonAgainstDetail' }">
        <div class="ui-common-pd-tb ui-border-dash-b">
          <span class="ui-txt-highlight">进行中</span>
          &emsp;<em> 1 </em>号场 / 第<em> 8 </em>场&emsp;裁判： <em>王五</em>
        </div>
        <div class="ui-common-pd-tb ui-flex-center ui-text-center">
          <div class="ui-flex-1">
            <div class="ui-common-pd-tb">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; 张三
            </div>
          </div>
          <div class="ui-flex-1">
            <em class="ui-font-14">21</em>
            <span class="ui-txt-muted">&emsp;vs&emsp;</span>
            <em class="ui-font-14">20</em>
          </div>
          <div class="ui-flex-1">
            <div class="ui-common-pd-tb">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; 李四
            </div>
          </div>
        </div>
    </li> -->
  </ul>
  <div v-show="!list" class="ui-no-data">
    没有相关比赛呢!
  </div>
</template>

<script>
import { competitonUserList } from '../../../vuex/getters/competiton'
export default {
  vuex: {
    getters: {
      competitonUserList
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    list () {
      return this.competitonUserList.list && this.competitonUserList.list.map((item) => {
        item.competitonState = (item.state === 1) ? '进行中' : '已结束'
        item.user_bg = item.competiton_img ? `background-image:url(${item.competiton_img})` : ''
        return item
      })
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
