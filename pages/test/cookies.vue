<template>
  <div>
    <div v-if="user">
      <h1>Welcome {{ user.name }}</h1>
      <button @click="logout">Logout</button>
      <hr />
      You have logged in {{ logins }} times!
    </div>
    <div v-else>
      Click here to login:
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Cookie 使用
class User {
  name?: string;
}

const user = useCookie<User>('user');
const logins = useCookie<number>('logins');

const login = () => {
  logins.value = (logins.value || 0) + 1;
  user.value = { name: 'CookieLover.' + new Date().getMilliseconds() };
};

const logout = () => {
  user.value = null;
};
</script>
