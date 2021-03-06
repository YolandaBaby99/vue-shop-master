import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

/* 导入字体图标 */
import './assets/fonts/iconfont.css'
/* 导入全局样式表 */
import './assets/css/global.css'

/*样式问题 */
import 'element-ui/lib/theme-chalk/index.css'
/*导入表格树 */
import treeTable from 'vue-table-with-tree-grid'


import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
    //添加请求拦截器
axios.interceptors.request.use(function(config) {
    //为请求头对象，添加token验证的Authorization 字段
    // console.log(config);
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.component('tree-table', treeTable)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')