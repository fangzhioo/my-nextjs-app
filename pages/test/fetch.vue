<template>
  <div>
    <div>
      {{ data }}
      <button :disabled="pending" @click="handleRefresh">Refresh Data</button>
    </div>
    <hr />
    <div>server respose: {{ data }}</div>
  </div>
</template>

<script setup lang="ts">
const { data, refresh, pending } = await useAsyncData('/api/hello', () =>
  $fetch('/api/hello'),
);

const handleRefresh = () => {
  refresh();
};

const { data: data2 } = await useLazyFetch('/api/nodejs', {
  params: { foo: 'bar' },
});
</script>

<style scoped></style>
