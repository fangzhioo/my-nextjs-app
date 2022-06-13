<template>
  <div class="layout_default">
    <home-header />
    <main class="kirito_container layout_default-main">
      <slot />
    </main>
    <home-footer />
  </div>
</template>

<script setup lang="ts">
// 默认的首页配置
</script>

<style lang="scss">
.layout_default {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  &-main {
    flex: 1;
    margin-top: 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 16px;
  }
}
</style>
