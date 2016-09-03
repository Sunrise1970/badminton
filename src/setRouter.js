export function setRouter (router) {
  router.map({
    '/index': {
      name: 'competiton list',
      title: '比赛列表',
      component: (resolve) => require(['./components/competiton/competitonList.vue'], resolve)
    },
    '/activity': {
      name: 'activity list',
      title: '活动列表',
      component: (resolve) => require(['./components/activity/activityList.vue'], resolve)
    }
  })

  router.redirect({
    '/': '/index'
  })
  /**
   * fix ios title刷新不了的bug
   * @iframeLoad
   * @author hiluluke
   */
  // const iframeLoad = function (src) {
  //   let iframe = document.createElement('iframe')
  //   iframe.style.display = 'none'
  //   iframe.src = src
  //   document.body.appendChild(iframe)
  //   iframe.addEventListener('load', function () {
  //     setTimeout(function () {
  //       iframe.remove()
  //     }, 0)
  //   })
  // }
  // // document title change
  // router.afterEach((transition) => {
  //   document.title = transition.to.title || 'CNode.js'
  //   if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
  //     let src = '/static/fixrouter.html?' + Math.random()
  //     iframeLoad(src)
  //   }
  // })
}
