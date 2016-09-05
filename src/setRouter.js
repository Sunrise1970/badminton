export function setRouter (router) {
  router.map({
    '/index': {
      name: 'activity list',
      title: '活动列表',
      component: (resolve) => require(['./components/activity/activityList.vue'], resolve)
    },
    '/activityDetail': {
      name: 'activity detail',
      title: '活动详情',
      component: (resolve) => require(['./components/activity/activityDetail.vue'], resolve)
    },
    '/competitonList': {
      name: 'competiton list',
      title: '比赛列表',
      component: (resolve) => require(['./components/competiton/competitonList.vue'], resolve)
    },
    '/competitonList/result': {
      name: 'competiton result',
      title: '比赛结果',
      component: (resolve) => require(['./components/competiton/competitonResult.vue'], resolve)
    },
    '/competitonDetail': {
      name: 'competiton detail',
      title: '比赛详情',
      component: (resolve) => require(['./components/competiton/competitonDetail.vue'], resolve)
    },
    '/competitonAttend': {
      name: 'competiton attned',
      title: '参加比赛',
      component: (resolve) => require(['./components/competiton/competitonAttend.vue'], resolve)
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
