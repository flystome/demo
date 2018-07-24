<template>
  <div class="login">
    <div class="right-item login" v-show="Login">
      <h1>登录</h1>
      <div class="warnInfo">
        {{loginWarnInfo}}
      </div>
      <div class="input-box">
        <p>用户名:</p>
        <input type="text" v-model="username">
      </div>
      <div class="input-box">
        <p>密码:</p>
        <input type="password" v-model="password">
      </div>
      <button type="button" @click="login">登录</button>
      <p>还没有账号，<span class="goLogin" @click="toggleRegisterLogin">去注册</span></p>
    </div>
    <!-- 注册 -->
    <div class="right-item register" v-show="Register">
      <h1>注册</h1>
      <div class="warnInfo">
        {{registerWarnInfo}}
      </div>
      <div class="input-box">
        <p>用户名:</p>
        <input type="text" v-model="username">
      </div>
      <div class="input-box">
        <p>密码:</p>
        <input type="password" v-model="password">
      </div>
      <div class="input-box">
        <p>确认密码:</p>
        <input type="password" v-model="password2">
      </div>
      <button type="button" @click="register">注册</button>
      <p>已有账号，<span class="goLogin" @click="toggleRegisterLogin">去登录</span></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  @import './login.scss'
</style>
