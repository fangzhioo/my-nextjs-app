<template>
  <div>
    <ul v-if="user.usedNames.length">
      <li v-for="otherName in user.usedNames" :key="otherName">
        {{ otherName }}
      </li>
    </ul>
    <div>
      <input type="text" v-model="name" @keydown.enter="handleSave" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const user = useUserStore();
const name = ref('');

const handleSave = () => {
  if (name.value) {
    user.setNewName(name.value);
  }
};
</script>
