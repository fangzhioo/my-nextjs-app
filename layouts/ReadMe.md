# Layouts directory

Nuxt 提供了一个可定制的布局框架，您可以在整个应用程序中使用它，非常适合将常见的 UI 或代码模式提取到可重用的布局组件中。

页面布局放置在`layouts/`目录中，使用时将通过异步导入自动加载。如果您创建一个，`layouts/default.vue`这将用于您应用程序中的所有页面。通过将`layout`属性设置为组件选项的一部分来使用其他布局。

如果您的应用程序中只有一个布局，您也可以使用`app.vue`。

## Example: a custom layout

-| layouts/
---| custom.vue

在布局文件中，您需要使用`<slot />`来定义布局页面内容的加载位置。例如：

```vue
<template>
  <div>
    Some shared layout content:
    <slot />
  </div>
</template>
```

鉴于上面的示例，您可以使用这样的自定义布局：

```vue
<script>
export default {
  layout: 'custom',
};
</script>
```

## Example: using with slots

您还可以通过使用`<NuxtLayout>`组件（在整个应用程序中全局可用）,并在组件选项中进行设置 `layout: false`来完全控制（例如，使用插槽）。

You can also take full control (for example, with slots) by using the <NuxtLayout> component (which is globally available throughout your application) and set layout: false in your component options.

```vue
<template>
  <NuxtLayout name="custom">
    <template #header> Some header template content. </template>

    The rest of the page
  </NuxtLayout>
</template>
```

<script>
export default {
  layout: false,
};
</script>

## Example: using with <script setup>

If you are utilizing Vue <script setup> compile-time syntactic sugar , you can use a secondary <script> tag to set layout options as needed.

Learn more about <script setup> and <script> tags co-existing in the Vue docs.
Assuming this directory structure:

-| layouts/
---| custom.vue
-| pages/
---| my-page.vue

And this custom.vue layout:

<template>
  <div>
    Some shared layout content:
    <slot />
  </div>
</template>

You can set a page layout in my-page.vue — alongside the <script setup> tag — like this:

<script>
export default {
  layout: "custom",
};
</script>

<script setup>
// your setup script
</script>
