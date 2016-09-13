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
    '/competitonDetail': {
      name: 'competiton detail',
      title: '比赛详情',
      component: (resolve) => require(['./components/competiton/competitonDetail.vue'], resolve)
    },
    // '/competitonDetail/competitonIntro': {
    //   name: 'competiton detail competitonIntro',
    //   title: '比赛详情 说明',
    //   component: (resolve) => require(['./components/competiton/components/competitonIntro.vue'], resolve)
    // },
    // '/competitonDetail/competitonMember': {
    //   name: 'competiton detail competitonMember',
    //   title: '比赛详情 人员',
    //   component: (resolve) => require(['./components/competiton/components/competitonMember.vue'], resolve)
    // },
    // '/competitonDetail/competitonAgainst': {
    //   name: 'competiton detail competitonAgainst',
    //   title: '比赛详情 对阵',
    //   component: (resolve) => require(['./components/competiton/components/competitonAgainst.vue'], resolve)
    // },
    // '/competitonDetail/competitonUser': {
    //   name: 'competiton detail competitonUser',
    //   title: '比赛详情 我的',
    //   component: (resolve) => require(['./components/competiton/components/competitonUser.vue'], resolve)
    // },
    '/competitonAttend': {
      name: 'competiton attend',
      title: '比赛报名',
      component: (resolve) => require(['./components/competiton/competitonAttend.vue'], resolve)
    },
    '/competitonAgainstDetail': {
      name: 'competiton attend',
      title: '比赛报名',
      component: (resolve) => require(['./components/competiton/components/competitonAgainstDetail.vue'], resolve)
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
