<template>
  <div>
    <div>ClientOnly</div>
    <ClientOnly>
        <div>hello 来自 client 插件:</div>
        <div>{{$hello()}}</div>
    </ClientOnly>
     </div>
</template>

<script setup lang="ts">
  const { $hello } = useNuxtApp();
</script>

<style>

</style>