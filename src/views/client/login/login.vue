<template>
  <div class="login">
    <div class="right-item">
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
      <p>还没有账号，<router-link class="goRegister" :to="{path: '/register'}">去注册</router-link></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      loginWarnInfo: ''
    }
  },
  methods: {
    login () {
      if(this.username == ''){
        if(this.loginWarnInfo = '用户名不能为空');
        return;
      }
      if(this.password == ''){
        if(this.loginWarnInfo = '密码不能为空');
        return;
      }
      this.$http.post('/users/login', {
        username: this.username,
        password: this.password
      }).then((res => {
        if(res.data.code == 1){
          console.log(res.data);
          this.loginWarnInfo = res.data.message;
          console.log(res.data);
          return;
        }else{
          console.log(res.data);
          this.userCookie = res.data.userInfo;
        }
      }))
    }
  }
}
</script>

<style scoped lang='less'>
  @import './login.less';
</style>
