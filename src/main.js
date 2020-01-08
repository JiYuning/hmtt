import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 动态设置 REM基准值
import 'amfe-flexible'

// 注册Vant组件
import './utils/register-vant'

// 样式文件要引在vant文件之后
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
