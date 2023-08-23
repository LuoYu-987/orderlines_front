import {createApp} from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import globalComponent from './components/index';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from '@/router/index'
import pinia from "@/store";
import App from '@/App.vue'


const app = createApp(App);


//安装element-plus插件
app.use(
    ElementPlus, {
        locale: zhCn
    }
)
// 安装自定义插件
app.use(globalComponent)
//安装仓库
app.use(pinia)
//注册模板路由
app.use(router)
//将应用挂载到挂载点上
app.mount('#app')