import Vue from 'vue'
import App from './App'
import phenix from '@/plugins/phenix.js'

import mixinsCommon from '@/mixins/index.js'
//将 mixinsCommon 挂载到uni上， 方便使用
uni.$mixinsCommon = mixinsCommon
Vue.use(phenix)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
