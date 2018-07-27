<template lang="html">
  <div class="index">
    <!-- 头部 -->
    <div class="wrap">
      <nav-header></nav-header>
      <!-- 内容 -->
      <section class="main">
        <!-- 把登录后的数据传给组件 -->
        <router-view :userCookie="userCookie"></router-view>
      </section>
    </div>
    <!-- 底部 -->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader  from '../../components/navHeader/navHeader'
import navFooter  from '../../components/navFooter'
export default {
  data(){
    return{
      Login: true,
      Register: false,
      userCookie:''
    }
  },
  components:{
    navHeader,
    navFooter
  },
  created(){
    // 检查是否登陆
    this.$http.get('/users/checkLogin').then((respond) => {
      if(respond.data.code == 200){
        this.userCookie = respond.data.message;
      }
    })
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
  .index{
    height: 100%;
    width: 100%;
    .wrap {
      min-height: 100%;
      width: 100%;
      padding-bottom: 80px;
      box-sizing: border-box;
    }
  }
</style>
