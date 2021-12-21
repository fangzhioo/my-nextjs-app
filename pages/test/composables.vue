<template>
  <div>
    <div>
      <div>{{ date }}</div>
      <div>
        <label for="locale-chooser">Locale: </label>
        <select id="locale-chooser" v-model="locale">
          <option v-for="l of locales" :key="l" :value="l">
            {{ l }}
          </option>
        </select>
      </div>
    </div>
    <div>{{ foo }}</div>
  </div>
</template>

<script setup lang="ts">
const dateStr = ref(new Date('2016-10-26'))
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(dateStr)

// composables/useFoo.ts
const foo = useFoo()
</script>

<style></style>
