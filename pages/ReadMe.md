# Pages directory

> 该`pages/`目录是可选的，这意味着如果您只使用`app.vue`，`vue-router`则不会被包含在内，从而减少应用程序的包大小。

Nuxt 会自动将`Vue Router`和 展开`pages/`目录集成到你的应用程序的路由中。

与组件不同，您的页面必须有一个根元素，以允许 Nuxt 在页面之间应用路由转换。

## Dynamic Routes (动态路由)

如果您在方括号内放置任何内容，它将被转换为动态路由参数。您可以在文件名或目录中混合和匹配多个参数甚至非动态文本。

如果你需要一个包罗万象的路由，你可以使用一个名为`[...slug].vue`的文件来创建它。这将匹配该路径下的所有路由，因此它不支持任何非动态文本。

Example
```
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```
鉴于上面的示例，您可以通过`$route`对象访问组件中的 `group`和 `id` ：


```vue
<template>
  {{ $route.params.group }}
  {{ $route.params.id }}
</template>
```
导航到`/users-admins/123`将呈现：

```
admins 123
```

## Navigation (导航)

要在应用程序的页面之间导航，您应该使用该  `<NuxtLink>` 组件。该组件包含在 `Nuxt` 中，因此您不必像导入其他组件一样导入它。它类似于 HTML`<a>`标记，不同之处在于`href="/about"`您使用`to="/about"`. 如果您以前使用`vue-router`过，则可以将其`<NuxtLink>`视为`<RouterLink>`.

指向`pages`文件夹中`index.vue`页面的简单链接：

```vue
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

该`<NuxtLink>`组件应用于所有内部链接。这意味着对于指向您站点内页面的所有链接，您应该使用`<NuxtLink>`. 而`<a>`标签应用于所有外部链接。这意味着如果您有指向其他网站的链接，您应该`<a>`为这些网站使用该标签。

```vue
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </div>
</template>
```

## Nested Routes (嵌套路由)

我们提供了一个类似`RouterView`的组件：`<NuxtChild>`，用于显示的子路由嵌套的组件。

Example:

```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

此文件树将生成以下路由：

```js
[
  {
    path: '/parent',
    component: '~/pages/parent.vue',
    name: 'parent',
    children: [
      {
        path: 'child',
        component: '~/pages/parent/child.vue',
        name: 'parent-child'
      }
    ]
  }
]
```

要显示 `child.vue` 组件，您必须将`<NuxtChild>`组件 插入其中 `pages/parent.vue`：

pages/parent.vue
```vue
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtChild :foobar="123" />
  </div>
</template>
```