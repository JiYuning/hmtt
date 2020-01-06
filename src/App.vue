<template>
  <div class="app">
    <router-view>
      <!-- 路由出口 -->
    </router-view>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="info">朴素按钮</van-button>
    <van-cell title="单元格" value="内容" size="large" />
<van-cell title="单元格" value="内容" size="large" label="描述信息" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
</style>>
