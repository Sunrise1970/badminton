<template>
  <div class="ui-common-mg-b ui-common-pd-t">
      <ul>
        <template v-if="processType === 1 || processType === 2">
          <li class="ui-border-tb ui-common-mg-b ui-common-pd" v-for="item in againstList" v-link="{ path: '/competitonAgainstDetail' }">
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
        </template>
        <template v-if="processType === 3 || processType === 4 || processType === 5">
          <li class="ui-border-tb ui-common-mg-b ui-common-pd" v-for="item in againstList">
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
        </template>
      </ul>
    </div>
</template>

<script>
import { againstList } from '../../../vuex/getters/competiton'
export default {
  vuex: {
    getters: {
      againstList
    }
  },
  data: function () {
    return {
      competitonProcessType: 1
    }
  },
  props: {
    processType: {
      type: Number,
      default: 1
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
