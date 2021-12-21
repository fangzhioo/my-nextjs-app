import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: () => 'hello from client!!',
    },
  }
})
