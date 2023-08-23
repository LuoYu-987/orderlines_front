<template>
  <div class="login">

    <!-- 登录的表单 -->
    <el-form class="login_form" :model="loginForm">
      <br>
      <h3>welcome to orderlines</h3>
      <el-form-item prop="username" class="item">
        <el-input prefix-icon="User" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item prop="password" class="item">
        <el-input prefix-icon="Lock" type="password" show-password v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item class="item">
        <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {useRouter, useRoute} from 'vue-router'
import useUserStore from '@/store/modules/user'
import {ElNotification} from "element-plus";

let $router = useRouter()
let $route = useRoute()

let useStore = useUserStore()
let loginForm = reactive({username: 'admin', password: 'atguigu123'})

//定义变量控制按钮加载效果
let loading = ref(false);

const login = async () => {
  try {
    await useStore.userLogin(loginForm)
    let redirect: any = $route.query.redirect
    $router.push({path: redirect || '/home'})
    ElNotification({
      type: 'success',
      message: '欢迎回来',
    })
    //登录成功加载效果也消失
    loading.value = false
  } catch (error) {
    //登录失败加载效果消息
    loading.value = false
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin: unset;
  width: 100%;
  height: 98vh;
  background: url("src/assets/images/bj.jpg") no-repeat;
  overflow: hidden;
  background-size: cover;
}

.login_form {
  text-align: center; /*让div内部文字居中*/
  background-color: rgba(255, 255, 255, 0.91);
  border-radius: 25px;
  width: 30%;
  height: 30%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.login_btn {
  width: 100%;
}

.item {
  padding-left: 15px;
  padding-right: 15px;
}


</style>