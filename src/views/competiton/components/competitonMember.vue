<template>
  <div>
    <div class="ui-common-mg-b ui-common-pd-t">
      <p class="ui-common-mg-b ui-common-pd ui-txt-info ui-txt-bg ui-border-tb">
        共报名<em> {{memberList.all}} </em> 人&emsp; 男： <em>{{memberList.man}} </em> 人&emsp; 女： <em>{{memberList.women}} </em> 人
      </p>
      <template v-if="memberList.list && (competitonType == 1 || competitonType == 2) && memberList.list.length !== 0">
        <ul>
          <li v-for="item in memberList.list" class="ui-border-b ui-common-pd">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>&emsp; {{item.users[0].name}}
          </li>
        </ul>
      </template>
      <template v-if="memberList.list && (competitonType == 3 || competitonType == 4 || competitonType == 5) && memberList.list.length !== 0">
        <ul>
          <li v-for="item in memberList.list" class="ui-border-b ui-common-pd">
              <div class="ui-flex-center ui-text-center">
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; {{item.users[0].name}}
                </div>
                <div class="ui-flex-1">
                  <em class="ui-font-14">+</em>
                </div>
                <div class="ui-flex-1">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>&emsp; {{item.users[1].name}}
                </div>
              </div>
          </li>
        </ul>
      </template>
      <p class="ui-no-data" v-if="memberList.list && memberList.list.length === 0">
        赶紧抢沙发！第一个报名会不会是你呢？
      </p>
    </div>
  </div>
</template>

<script>
import { competitonType, memberList } from '../../../vuex/getters/competiton'
export default {
  vuex: {
    getters: {
      competitonType,
      memberList
    }
  },
  data: function () {
    return {}
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
