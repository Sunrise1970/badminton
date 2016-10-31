export function setRouter (router) {
  // 映射路由
  router.map({
    // '/index': {
    //   name: 'activity list',
    //   title: '活动列表',
    //   component: (resolve) => require(['./views/activity/activityList.vue'], resolve)
    // },
    // '/activityDetail': {
    //   name: 'activity detail',
    //   title: '活动详情',
    //   component: (resolve) => require(['./views/activity/activityDetail.vue'], resolve)
    // },
    '/index': {
      name: 'competiton list',
      title: '比赛列表',
      component: (resolve) => require(['./views/competiton/competitonList.vue'], resolve)
    },
    '/competitonDetail': {
      name: 'competiton detail',
      title: '比赛详情',
      component: (resolve) => require(['./views/competiton/competitonDetail.vue'], resolve)
    },
    '/competitonAttend': {
      name: 'competiton attend',
      title: '比赛报名',
      component: (resolve) => require(['./views/competiton/competitonAttend.vue'], resolve)
    },
    '/competitonAgainstDetail': {
      name: 'competiton attend',
      title: '比赛对阵详情',
      component: (resolve) => require(['./views/competiton/components/competitonAgainstDetail.vue'], resolve)
    },
    '/competitonPrize': {
      name: 'competiton prize',
      title: '比赛奖品',
      component: (resolve) => require(['./views/competiton/competitonPrize.vue'], resolve)
    },
    '/competitonRule': {
      name: 'competiton rule',
      title: '比赛规则',
      component: (resolve) => require(['./views/competiton/competitonRule.vue'], resolve)
    }
  })
  // 重定向到index，防止首次运行页面空白
  router.redirect({
    '/': '/index'
  })
}
