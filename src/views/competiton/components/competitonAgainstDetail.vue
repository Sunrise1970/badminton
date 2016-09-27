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
            <!-- 双打 -->
            <div class="ui-flex-5 ui-border-l">
              <div class="ui-transform-y">
                <div class="ui-text-center ui-common-mg-tb">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>
                  <span class="against-name ui-border-radius">李四端</span>
                </div>
                <div class="ui-text-center ui-common-mg-tb">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>
                  <span class="against-name ui-border-radius">李四端</span>
                </div>
              </div>
            </div>
            <!-- 单打 -->
            <!-- <div class="ui-flex-5 ui-border-l ui-flex-center">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>
              <span class="against-name ui-border-radius">张三丰</span>
            </div> -->
            <div class="ui-flex-2 ui-border-l ui-flex-center ui-just-end"><span class="vs">v</span></div>
            <div class="ui-flex-2 ui-border-dash-l ui-flex-center ui-just-start"><span class="vs">s</span></div>
            <!-- 单打 -->
            <!-- <div class="ui-flex-5 ui-border-l ui-flex-center">
              <div class="ui-avatar-lg ui-vertical-middle">
                <span style="background-image:url(http://placehold.it/100x100)"></span>
              </div>
              <span class="against-name ui-border-radius">李四端</span>
            </div> -->
            <!-- 双打 -->
            <div class="ui-flex-5 ui-border-l">
              <div class="ui-transform-y">
                <div class="ui-text-center ui-common-mg-tb">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>
                  <span class="against-name ui-border-radius">李四端</span>
                </div>
                <div class="ui-text-center ui-common-mg-tb">
                  <div class="ui-avatar-lg ui-vertical-middle">
                    <span style="background-image:url(http://placehold.it/100x100)"></span>
                  </div>
                  <span class="against-name ui-border-radius">李四端</span>
                </div>
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
        张三丰
      </div>
      <div class="ui-flex-1">
        <em class="ui-font-14">2：1</em>
      </div>
      <div class="ui-flex-1">
        李四端
      </div>
    </div>
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">第一局</div>
        <div class="ui-common-pd-r">14：21</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">第二局</div>
        <div class="ui-common-pd-r">21：10</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">第三局</div>
        <div class="ui-common-pd-r">21：20</div>
      </div>
    </div>
    <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p">
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">裁判</div>
        <div class="ui-common-pd-r">王五</div>
      </div>
      <div class="ui-flex-between ui-common-pd-tb ui-border-b">
        <div class="ui-txt-info ui-common-pd-l">场地</div>
        <div class="ui-common-pd-r">2号场</div>
      </div>
    </div>
    <div class="ui-common-pd-tb ui-text-center">
      <span class="ui-win">Win</span> 胜利方:  <em>张三丰</em>
    </div>
  </div>
</template>

<script>
import uiHead from '../../common/head'
import competitonCommonNav from './../components/competitonCommonNav'
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    uiHead,
    competitonCommonNav
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
