<template>
  <div>
      index
      <div> Current locale: {{locale}}</div>
      <ClientOnly>
        <!-- hello 来自 client 插件 -->
        <div>{{$hello()}}</div>
      </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  const { $hello } = useNuxtApp();
  const locale = useState('locale')
</script>

<style>

</style>