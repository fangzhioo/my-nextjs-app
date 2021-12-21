<template>
  <NuxtLayout name="custom">
    <template #header> Some header template content. </template>
    <div>The rest of the page</div>
    <template #footer> footer </template>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  // layout: 'custom',
  layout: false,
}
</script>

<script setup lang="ts"></script>

<style scoped></style>
