import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
Vue.use(elementUI)
Vue.config.productionTip = false
/*
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
*/
/*  */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: {
    App
  },
  template: '<App/>'
})
