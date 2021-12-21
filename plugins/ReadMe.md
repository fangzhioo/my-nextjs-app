# Plugins directory

Nuxt 将自动读取您`plugins`目录中的文件并加载它们。您可以在文件名中使用`.server`或`.client`后缀来仅在服务器或客户端加载插件。

> 您`plugins/`目录中的所有插件都是自动注册的，因此您不应将它们单独添加到您的`nuxt.config`目录中。

## Creating plugins

传递给插件的唯一参数是`nuxtApp`。

```js
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
});
```

## Automatically providing helpers (小助手功能)

如果您想在`NuxtApp`实例上提供`帮助程序`，只需从一个`provide`键下的插件中返回它即可。 For example:

```js
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: () => 'world',
    },
  };
});
```

In another file you can use this:

<template>
  <div>
    {{ $hello() }}
  </div>
</template>

<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()
</script>

## Typing plugins

如果您从插件返回您的助手，它们将被自动加载；您会发现它们是为返回`useNuxtApp()`模板并在模板中输入的。

如果您需要在另一个插件中使用提供的帮助程序，您可以调用`useNuxtApp()`以获取键入的版本。但总的来说，除非您确定插件的顺序，否则应该避免这种情况。

## Advanced

对于高级用例，您可以像这样声明注入属性的类型：

index.d.ts

```ts
declare module '#app' {
  interface NuxtApp {
    $hello(msg: string): string;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $hello(msg: string): string;
  }
}

export {};
```

## Vue plugins

如果你想使用 Vue 插件，比如`vue-gtag`来添加 Google Analytics 标签，你可以使用 Nuxt 插件来做到这一点。

> 有一个 Open RFC 使这更容易！参见[nuxt/框架#1175](https://github.com/nuxt/framework/discussions/1175)

首先安装你想要的插件。

```bash
yarn add --dev vue-gtag-next
```

然后创建一个插件文件`plugins/vue-gtag.client.js`。

```ts
import { defineNuxtPlugin } from '#app';
import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID',
    },
  });
});
```
