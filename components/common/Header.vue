<template>
  <Html :data-mode="theme"></Html>
  <header class="kirito_header">
    <!-- 正常头部导航 -->
    <div class="kirito_header__above">
      <div class="kirito_header__above-logo">logo</div>
      <div class="kirito_header__above-nav">
        <ul class="kirito_header__above-nav-list">
          <li>导航一</li>
          <li>导航二</li>
          <li>导航三</li>
        </ul>
      </div>
      <div class="kirito_header__above-theme">
        <span @click="handleChangeTheme">{{ theme }}</span>
      </div>
      <div class="kirito_header__above-search">search</div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const theme = useTheme()

onBeforeMount(() => {
  theme.value = useDefaultTheme().value
  useMeta({
    htmlAttrs: {
      'data-mode': theme.value,
    },
  })
})

const handleChangeTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  useMeta({
    htmlAttrs: {
      'data-mode': theme.value,
    },
  })
}
</script>

<style lang="scss">
@import 'assets/style/variables.scss';

.kirito_header {
  top: 0;
  z-index: 100;
  height: 60px;
  transition: top 0.4s;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  &__above {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 30px;
    height: 100%;
    &-logo {
      color: var(--theme);
    }
    &-nav {
      flex: 1;
      @include media-to(xs) {
        display: none;
      }
      &-list {
        display: flex;
      }
    }
    &-search {
      @include media-to(xs) {
        display: none;
      }
    }
  }
}
</style>
