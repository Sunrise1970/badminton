<template>
  <div>
    <div class="mask-transparent" v-show="show"></div>
    <div class="toast fade-transition" :style="{width: width}" :class="toastClass" v-show="show">
      <p class="toast-content" v-if="text" v-html="text"></p>
      <p class="toast-content" v-else><slot></slot></p>
    </div>
  </div>
</template>

<script>
import { hideTip } from '../vuex/actions/common'
import { showTip } from '../vuex/getters/common'
export default {
  vuex: {
    actions: {
      hideTip
    },
    getters: {
      showTip
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 1200
    },
    type: {
      type: String,
      default: 'success'
    },
    width: {
      type: String,
      default: '7.6em'
    },
    text: String
  },
  data () {
    return {}
  },
  computed: {
    toastClass () {
      return {
        'toast-warn': this.type === 'warn',
        'toast-cancel': this.type === 'cancel',
        'toast-success': this.type === 'success',
        'toast-text': this.type === 'text'
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        clearTimeout(tm)
        let tm = setTimeout(() => {
          this.hideTip()
          this.show = this.showTip.tipShow
        }, this.time)
      }
    }
  },
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scope>
.mask-transparent {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5001;
  background: rgba(40,40,40,.35);
}
.toast {
  position: fixed;
  min-width: 4.5rem;
  top: 50%;
  left: 50%;
  margin-top: -.6rem;
  transform: translateX(-50%);
  background: rgba(40,40,40,.75);
  text-align: center;
  border-radius: 0.06666666666666667rem;
  color: #fff;
  z-index: 50000;
}
.fade-transition {
  opacity: 1;
  transition: opacity .2s linear;
}
.toast-icon {
  margin: 0.29333333333333333rem 0 0;
  display: block;
}
.toast-content {
  margin: 0.2rem;
}
.toast-text .toast-content {
  margin: 0;
  padding: 0.13333333333333333rem;
  border-radius: 0.2rem;
}
</style>
