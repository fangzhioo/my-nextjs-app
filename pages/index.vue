<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-btn @click="handleChange">theme{{ $vuetify.theme.dark }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  methods: {
    handleChange() {
      console.log(this)
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
