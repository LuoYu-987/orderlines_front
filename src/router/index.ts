import {createRouter, createWebHistory, RouterOptions} from "vue-router";
import {constantRoute} from './router'

const router_config = {
    history: createWebHistory(),
    routes: constantRoute,
    //滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
        }
    }
} as RouterOptions

const router = createRouter(router_config)

export default router