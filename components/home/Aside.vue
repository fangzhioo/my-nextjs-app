<template>
  <aside class="home_aside">
    <section>
      <img src="/images/error_avatar.jpg" alt="" srcset="" />
    </section>
  </aside>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import 'assets/style/variables.scss';

.home_aside {
  margin-left: 16px;
  padding-bottom: 16px;
  width: 280px;
  max-width: 280px;
  display: none;
  @include media-to(sm) {
    display: block;
  }
}
</style>
