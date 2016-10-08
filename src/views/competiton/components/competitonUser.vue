<template>
  <p class="ui-common-mg-tb ui-common-pd ui-txt-info ui-txt-bg ui-border-tb">
    共参与比赛<em> 5 </em> 场&emsp; 胜： <em>3</em> 场&emsp; 输： <em>2</em> 场
  </p>
  <ul>
    <li v-for="item in competitonUserList" class="ui-border-tb ui-common-mg-b ui-common-pd">
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
              </div>&emsp; 张三
            </div>
            <div class="ui-common-pd-tb">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; 张三
            </div>
          </div>
        </div>
    </li>
    <li class="ui-border-tb ui-common-mg-b ui-common-pd" v-link="{ path: '/competitonAgainstDetail' }">
        <div class="ui-common-pd-tb ui-border-dash-b">
          <span class="ui-txt-highlight">进行中</span>
          &emsp;<em> 1 </em>号场 / 第<em> 8 </em>场&emsp;裁判： <em>王五</em>
        </div>
        <div class="ui-common-pd-tb ui-flex-center ui-text-center">
          <div class="ui-flex-1">
            <div class="ui-avatar-lg ui-vertical-middle">
              <span style="background-image:url(http://placehold.it/100x100)"></span>
            </div>&emsp; 张三
          </div>
          <div class="ui-flex-1">
            <em class="ui-font-14">21</em>
            <span class="ui-txt-muted">&emsp;vs&emsp;</span>
            <em class="ui-font-14">20</em>
          </div>
          <div class="ui-flex-1">
            <div class="ui-avatar-lg ui-vertical-middle">
              <span style="background-image:url(http://placehold.it/100x100)"></span>
            </div>&emsp; 李四
          </div>
        </div>
    </li>
  </ul>
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
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
