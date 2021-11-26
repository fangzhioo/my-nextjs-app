

<template>
  <NuxtLayout name="custom">
        <template #header> Some header template content. </template>
        <div>The rest of the page</div>
        <div>
            pet list - {{foo}}
        </div>
        <template #footer> footer </template>
    </NuxtLayout>
</template>

<script lang="ts">
export default {
    // layout: 'custom',
    layout: false,
}
</script>

<script setup lang="ts">
    // composables/useFoo.ts
    const foo = useFoo();
    
</script>

<style scoped>

</style>