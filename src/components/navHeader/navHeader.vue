<template>
  <header class="clearfix">
    <div class="container">
      <a href="###" class="logo">
        <img src="~Img/logo1.png">
      </a>
      <div class="link">
        <ul>
          <li><route-link to="/">首页</route-link></li>
          <li><route-link to="/designer">找设计师</route-link></li>
          <li><route-link to="/company">找设计公司</route-link></li>
        </ul>
      </div>
      <div class="setting">

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
  header {
    width: 100%;
    height: 50px;
    background: #ffd100;
    .logo {
      display: inline-block;
      float: left;
      width: 15%;
      height: 50px;
      text-align: left;
      vertical-align: middle;
      img {
        width: 30px;
        height: 30px;
        background: cover;
        vertical-align: middle;
        margin-top: 10px;
      }
    }
    .link {
      width: 50%;
      height: 50px;
      line-height: 50px;
      ul {
        li {
          float: left;
          padding: 0 15px;
        }
      }
    }
  }
</style>
