<template>
  <div>
    <slot />
    <ClientOnly> client-only </ClientOnly>
    <button @click="handleChangeCount">
      {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

const handleChangeCount = () => {
  count.value += 1
}
</script>

<style scoped></style>
