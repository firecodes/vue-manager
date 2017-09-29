import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/dashboard/home.vue'
import I18N from '@/views/i18n/i18n.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {path: 'i18N',component: I18N}
      ]
    },
  ]
})
