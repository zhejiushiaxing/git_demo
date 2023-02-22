<template>

  <div>
    <!-- 路由挂载区域 -->
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    key () {
      return this.$route.path
    },
    title () {
      return this.$route.meta.title
    },
    model () {
      return this.$route.query.model == 'class' ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>