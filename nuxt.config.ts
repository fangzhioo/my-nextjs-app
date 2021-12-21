import { defineNuxtConfig } from 'nuxt3';
import { resolve } from 'pathe';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    images: resolve(__dirname, './assets/images'),
    style: resolve(__dirname, './assets/style'),
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  css: ['assets/style/global.scss'],
  //   buildModules: ['@vueuse/core/nuxt', '@pinia/nuxt'],
  vite: {
    logLevel: 'info',
  },
});
