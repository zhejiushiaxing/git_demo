<template>
  <div class="app-wrapper">
    <!-- 头部导航区域 -->
    <topbar></topbar>
    <!-- 内容区域 -->
    <main-vue></main-vue>
  </div>
</template>

<script>
import mainVue from './components/main.vue'
import topbar from './components/topbar.vue'
export default {
  components: {
    topbar,
    mainVue
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f8f7fc;
}
</style>