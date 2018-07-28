<template>
  <div id="detail">
    <div class="author_detail clearfix">
      <div class="container">
        <div class="works">
          <h2>{{detail.title}}</h2>
          <p class="time">{{detail.time}}前发布</p>
          <div class="works_info">
            <span>{{detail.itself}}</span>/
            <span>{{detail.belong1}}</span>/
            <span>{{detail.belong2}}</span>
            <ul class="action fr clearfix">
              <li><img src='~Img/card-liulan.svg'><span class='num'>{{detail.see}}</span></li>
              <li><img src='~Img/card-pinglun.svg'><span class='num'>{{detail.sms}}</span></li>
              <li><img src='~Img/card-zan.svg'><span class='num'>{{detail.praise}}</span></i></li>
            </ul>
          </div>
        </div>
        <div class="author">
          <div class="photo">
            <img :src="detail.photoBig" alt="">
          </div>
          <div class="author_info">
            <h3>{{detail.author}}</h3>
            <p><span>{{detail.city}}</span><span class='mlr3'>|</span><span>{{detail.job}}</span></p>
            <router-link class="toMain" to="/private">进入他的主页</router-link>
          </div>
        </div>
      </div>     
    </div>
    <div class="imgs container clearfix">
      <ul>
        <li v-for='item in detail.works'>
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      detail: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('/index/detail').then((res) => {
        if(res.data.code == 200){
          this.detail = res.data.data[0]
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
  @import './detail.less';
</style>
