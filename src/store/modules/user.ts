import {defineStore} from "pinia";
import {loginFormData, loginResponseData} from "@/api/user/type";
import {GET_TOKEN, SET_TOKEN} from "@/utils/token";
import {reqLogin} from "@/api/user";

const useUserStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(),
        }
    },
    //异步|逻辑的地方
    actions: {
        //用户登录的方法
        async userLogin(data: loginFormData) {
            //登录请求
            const result: loginResponseData = await reqLogin(data)
            //登录请求:成功200->token
            //登录请求:失败201->登录失败错误的信息
            if (result.code == 200) {
                //pinia仓库存储一下token
                //由于pinia|vuex存储数据其实利用js对象
                this.token = result.data as string
                //本地存储持久化存储一份
                SET_TOKEN(result.data as string)
                //能保证当前async函数返回一个成功的promise
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data))
            }
        }

    },
    getters: {},
})

export default useUserStore

