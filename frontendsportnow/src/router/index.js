import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => {
  require.ensure(['@/components/Index'], () => {
    resolve(require('@/components/Index'))
  })
}
const Header = resolve => {
  require.ensure(['@/components/template/Header'], () => {
    resolve(require('@/components/template/Header'))
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        Header
      }
    },
    {
      path: '/toto',
      name: 'Index',
      components: {
        default: Index,
        Header
      }
    }
  ]
})
