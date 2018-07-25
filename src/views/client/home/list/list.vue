<template>
  <div id="list">
    <ul class="clearfix">
      <li v-for="item in items">
        <div class="item">
          <div class="item_img">
            <img :src='item.src' alt="">
          </div>
          <div class="item_detail">
            <p class="title">{{item.title}}</p>
            <p class="kind">{{item.belong1}}-{{item.belong2}}</p>
            <ul class="action clearfix">
              <li><i class="fa fa-comment-alt"></i><span class='num'></span></li>
              <li><i class="fa fa-eye"></i><span class='num'></span></li>
              <li><i class="fa fa-thumbs-up"><span class='num'></span></i></li>
            </ul>
          </div>
          <div class="item_author">
            <p><span class='photo'></span></span><span class="name"></span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('/index/getImg').then((res) => {
        console.log(res.data)
        this.items = res.data.data
        if(res.data.code == 200){
          this.userCookie = res.data.message;
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
  @import './list.less';
</style>
