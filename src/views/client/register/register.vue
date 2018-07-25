<template>
  <div class="register">
    <!-- 注册 -->
    <div class="right-item">
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
      <p>已有账号，<router-link class="goLogin" :to="{path: '/login'}">去登录</router-link></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      password2: '',
      registerWarnInfo: ''
    }
  },
  methods: {
    register () {
      if(this.username == ''){
        this.registerWarnInfo = '用户名不能为空';
        return;
      }
      if(this.password == ''){
        this.registerWarnInfo = '密码不能为空';
        return;
      }
      if(this.password !== this.password2){
        this.registerWarnInfo = '两次密码不一样';
        return;
      }
      this.$http.post('/users/register',{
        username: this.username,
        password: this.password,
        password2: this.password2
      }).then((res => {
        if(res.data.code == 1){
          this.registerWarnInfo = res.data.message;
          return;
        }else{
          this.registerWarnInfo = '注册成功，请登录';
        }
      }))
    }
  }
}
</script>

<style scoped lang='less'>
  @import './register.less';
</style>
