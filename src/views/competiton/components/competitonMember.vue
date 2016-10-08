<template>
  <div>
    <div class="ui-common-mg-b ui-common-pd-t">
      <p class="ui-common-mg-b ui-common-pd ui-txt-info ui-txt-bg ui-border-tb">
        共报名<em> 80 </em> 人&emsp; 男： <em>60</em> 人&emsp; 女： <em>20</em> 人
      </p>
      <template v-if="competitonType == 1">
        <ul>
          <li class="ui-border-b ui-common-pd">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; 张三
          </li>
          <li class="ui-border-b ui-common-pd">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; 张三
          </li>
        </ul>
      </template>
      <template v-if="competitonType==2">
        <ul>
          <li class="ui-border-b ui-common-pd">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; 张三
          </li>
          <li class="ui-border-b ui-common-pd">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; 张三
          </li>
        </ul>
      </template>
      <template v-if="competitonType == 3">
        <ul>
          <li class="ui-border-b ui-common-pd">
              <div class="ui-flex-center ui-text-center">
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; 张三
                </div>
                <div class="ui-flex-1">
                  <em class="ui-font-14">+</em>
                </div>
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; 张三
                </div>
              </div>
          </li>
        </ul>
      </template>
      <template v-if="competitonType == 4">
        <ul>
          <li class="ui-border-b ui-common-pd">
              <div class="ui-flex-center ui-text-center">
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; 张三
                </div>
                <div class="ui-flex-1">
                  <em class="ui-font-14">+</em>
                </div>
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; 张三
                </div>
              </div>
          </li>
        </ul>
      </template>
      <template v-if="competitonType == 5">
        <ul>
          <li class="ui-border-b ui-common-pd">
              <div class="ui-flex-center ui-text-center">
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; 张三
                </div>
                <div class="ui-flex-1">
                  <em class="ui-font-14">+</em>
                </div>
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; 张三
                </div>
              </div>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import { memberList } from '../../../vuex/getters/competiton'
export default {
  vuex: {
    getters: {
      memberList
    }
  },
  data: function () {
    return {
      competitonType: 1
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    switchItem (type) {
      this.competitonType = type
    }
  },
  components: {},
  route: {
    data () {}
  }
}
</script>
