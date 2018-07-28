<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import vue from 'vue'
import List from './views/client/common/list/list'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style lang="less">

</style>
