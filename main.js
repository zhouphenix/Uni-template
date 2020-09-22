import Vue from 'vue'
import App from './App'
import './utils/aop.js'
import phenix from '@/plugins/phenix.js'

import mixinsCommon from '@/mixins/index.js'

window.$mixinsCommon = mixinsCommon
Vue.use(phenix)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
