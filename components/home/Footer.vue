<template>
  <footer class="kirito_footer">
    <div>桐人@2022</div>
  </footer>
</template>

<style lang="scss">
@import 'assets/style/variables.scss';

.kirito_footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--sub-background);
  @include media-to(xs) {
    display: none;
  }
}
</style>
