import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

let hosts = 'http://127.0.0.1:3000'

// 活动列表
export const activityList = Vue.resource(hosts + '/activity/activityList')

// 比赛报名
export const attend = Vue.resource(hosts + '/competiton/attend')

// 比赛列表
export const competitonList = Vue.resource(hosts + '/competiton/competitonList')

// 比赛详情
export const competitonIntro = Vue.resource(hosts + '/competiton/competitonInfo')
