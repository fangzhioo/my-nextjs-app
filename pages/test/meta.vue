<template>
  <div>
    <div>Hello World !!</div>
    <Html :lang="dynamic > 50 ? 'zh-CN' : 'en-US'">
      <Head>
        <Title>{{ dynamic }} title</Title>
        <Meta
          name="description"
          :content="`My page's ${dynamic} description`"
        />
        <Link rel="preload" href="/test.txt" as="script" />
      </Head>
    </Html>

    <button class="blue" @click="handleRandom">Click me</button>
  </div>
</template>

<script lang="ts">
export default {
  head: {
    title: 'Another title',
  },
};
</script>
<script setup lang="ts">
// __vite_ssr_import_1__.useMeta is not a function ????
// useMeta({
//     bodyAttrs: {
//         class: 'test'
//     }
// })
const dynamic = useState('dynamic', () => 49);

const handleRandom = () => {
  dynamic.value = Math.random() * 100;
};
</script>

<style scoped></style>
