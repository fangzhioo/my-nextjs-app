<template>
    <div class="layout_default">
        <common-header />
        <main class="kirito_container layout_default-main">
            <slot />
        </main>
        <common-footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.layout_default {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    &-main {
        flex: 1;
        margin-top: 20px;
        margin-bottom: 30px;
        box-sizing: border-box;
        padding: 16px;
    }
}
</style>