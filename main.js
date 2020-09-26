import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
=======
import './utils/aop.js'
>>>>>>> 8b511bdf8bd06d6f08abd17762bbcd2553f6511a
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
