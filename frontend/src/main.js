import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false
import VuePromiseBtn from 'vue-promise-btn'

Vue.use(VuePromiseBtn)



//require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJlbmUgRGVja2VycyIsImVtYWlsIjoicHJpbW9kZWNrZXJzQGhvdG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU0Mzg1OTQ3MCwiZXhwIjoxNTQ0MTE4NjcwfQ.pekVXgKZ8TzBm4m7BvdlrYch_ByDvFCGNhkIRWlPtSA'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

