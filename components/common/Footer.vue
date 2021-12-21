<template>
  <footer class="kirito_footer">
    <div>cyptype</div>
  </footer>
</template>

<style lang="scss">
@import 'assets/style/variables.scss';

.kirito_footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: var(--theme);
  @include media-to(xs) {
    display: none;
  }
}
</style>
