

<template>
  <div>
    {{$route.params.id}}
    <!-- <div>{{res}}</div> -->
    <my-custom-button>hahahah</my-custom-button>

    <div></div>
  </div>
</template>

<script setup lang="ts">
  import { useAsyncData } from "nuxt3";
  
  // const res = await useAsyncData('count', () => API.pet.findPetsByStatus.request({params: {status: ['pending']}}))
  
</script>

<style scoped>

</style>