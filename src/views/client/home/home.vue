<template>
  <div id="home">
    <Banner></Banner>
    <section class='container'>
      <ul class="tab clearfix">
        <li v-for='(item, index) in tabs' @click='curIndex = index' :class="{'cur': curIndex === index}">{{item}}</li>
      </ul>
      <List></List>
    </section>
  </div>
</template>

<script>
import Banner from './banner/banner'
import List from './list/list'

export default {
  name: 'home',
  data () {
    return {
      tabs: ['风格', '空间', '户型'],
      curIndex: 0
    }
  },
  components: {
    Banner,
    List
  }
}
</script>

<style scoped lang="less">
  @import 'home.less';
</style>
