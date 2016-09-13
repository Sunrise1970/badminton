<template>
  <div class="ui-common-mg-b ui-common-pd-t">
      <div class="ui-flex ui-common-mg-b ui-common-pd-tb ui-txt-info ui-text-center ui-txt-bg ui-border-tb">
        <div class="ui-flex-1" @click="switchItem(1)">
          <span :class="{'ui-tag': competitonProcessType == 1}">对阵全览</sapn>
        </div>
        <div class="ui-flex-1" @click="switchItem(2)">
          <span :class="{'ui-tag': competitonProcessType == 2}">总决赛</sapn>
        </div>
        <div class="ui-flex-1" @click="switchItem(3)">
          <span :class="{'ui-tag': competitonProcessType == 3}">半决赛</sapn>
        </div>
        <div class="ui-flex-1" @click="switchItem(4)">
          <span :class="{'ui-tag': competitonProcessType == 4}">1/4决赛</sapn>
        </div>
      </div>
      <ul>
        <li class="ui-border-tb ui-common-mg-b ui-common-pd">
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
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      competitonProcessType: 1
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    switchItem (type) {
      this.competitonProcessType = type
    }
  },
  components: {}
}
</script>
