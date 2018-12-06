import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false




require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJlbmUgRGVja2VycyIsImVtYWlsIjoicHJpbW9kZWNrZXJzQGhvdG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU0NDExODc3NSwiZXhwIjoxNTQ0Mzc3OTc1fQ.0Lco2ST4tCM7nQmyIQUcm04bWxMTSvQpZ5OwfO33CNY'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')




