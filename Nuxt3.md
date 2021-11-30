# Data Fetching （数据请求）

Nuxt提供`useFetch`，`useLazyFetch`，`useAsyncData`和`useLazyAsyncData`处理数据应用程序中获取。

> `useFetch`, `useLazyFetch`, `useAsyncData` 和 `useLazyAsyncData` 只能在 setup 或者 Lifecycle Hooks 中生效。

## useAsyncData

在您的页面、组件和插件中，您可以`useAsyncData`用来访问异步解析的数据。

### Usage

```ts
const {
  data: Ref<DataT>,
  pending: Ref<boolean>,
  refresh: (force?: boolean) => Promise<void>,
  error?: any
} = useAsyncData(
  key: string,
  fn: () => Object,
  options?: { lazy: boolean, server: boolean }
)
```

- `key`: 一个唯一的键，以确保数据提取可以跨请求正确去重。
- `fn`: 一个返回值的异步函数。(一般就是fetch函数)。
- `options`:
    + `lazy`: 是否在加载路由后，再解析异步函数，而不是阻塞导航（默认为false）。
    + `default`: 在异步函数解析之前，设置数据默认值的函数，在`lazy: true` 比较有用。
    + `server`: 是否在服务器端获取数据（默认为true）。
    + `transform`: 可用于在解析后更改 `fn` 结果的函数。
    + `pick`: 仅从 `fn` 结果中选择此数组中的指定键。

`useAsyncData` 返回具有以下属性的对象:

- `data`: 传入的异步函数的结果
- `pending`: 一个布尔值，指示是否正在获取数据。类似loading
- `refresh`: 可用于强制刷新数据的函数
- `error`: 数据获取失败时的错误对象

在后台，`lazy: false`用于`<Suspense>`在获取数据之前阻止路由的加载。考虑使用`lazy: true`和实现加载状态来获得更快速的用户体验。(比如骨架屏方案？)

### Example
server/api/count.ts
```ts
let counter = 0
export default () => {
  counter++
  return JSON.stringify(counter)
}
```

app.vue
```vue
<script setup>
const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<template>
  Page visits: {{ data }}
</template>
```

## useLazyAsyncData

这等同于`useAsyncData`与`lazy: true`选项集。换句话说，异步函数不会阻止导航。这意味着您需要处理数据所在的情况null（或您在自定义默认值函数中提供的任何值）。

## useFetch

在您的页面、组件和插件中，您可以使用`useFetch`从任何 URL 获取数据。

这里提供了一个方便的包装器`useAsyncData`和`$fetch`。它会根据 URL 和 fetch 选项自动生成一个密钥，并推断 API 响应类型。

### Usage
```ts
const {
  data: Ref<DataT>,
  pending: Ref<boolean>,
  refresh: (force?: boolean) => Promise<void>,
  error?: any
} = useFetch(url: string, options?)
```

Available options:

- key: 提供自定义键
- Options: [ohmyfetch](https://github.com/unjs/ohmyfetch)的options
    + method: 请求方法
    + params: 查询参数
    + baseURL: 请求的基本 URL
- Options: `useAsyncData`的options，含义在上面👆
    + lazy
    + server
    + default
    + pick
    + transform

`useFetch`返回的对象与`useAsyncData`返回的对象具有相同的属性。

### Example
app.vue
```vue
<script setup>
const { data } = await useFetch('/api/count')
</script>

<template>
  Page visits: {{ data.count }}
</template>
```

## useLazyFetch

这可组合的行为等同于`useFetch`与`lazy: true`选项集。换句话说，异步函数不会阻止导航。这意味着您需要处理数据所在的情况null（或您在自定义default工厂函数中提供的任何值）。

## Best practices (最佳实践)

这些可组合项返回的数据将存储在页面负载中。这意味着返回的每个未在您的组件中使用的键都将添加到有效负载中。

> 我们强烈建议您只选择您将在组件中使用的键。

想象一下，`/api/mountains/everest`返回以下对象：

```json
{
  "title": "Mount Everest",
  "description": "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
  "height": "8,848 m",
  "countries": [
    "China",
    "Nepal"
  ],
  "continent": "Asia",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg"
}
```
如果您打算只在您的组件中使用`title`和`description`，您可以通过链接`$fetch`或`pick`选项的结果来选择键：

```vue
<script setup>
const { data: mountain } = await useFetch('/api/mountains/everest', { pick: ['title', 'description'] })
</script>

<template>
  <h1>{{ mountain.title }}</h1>
  <p>{{ mountain.description }}</p>
</template>
```

## Using async setup

如果正在使用`async setup()`，当前组件实例将在第一个之后丢失`await`。（这是 Vue 3 的限制。）如果要使用多个异步操作，例如多次调用`useFetch`，则需要`<script setup>`在设置结束时一起使用或等待它们。

> 建议使用`<script setup>`，因为它消除了采用顶级的await的限制。[查看更多](https://v3.vuejs.org/api/sfc-script-setup.html#top-level-await).

```vue
<script>
export default defineComponent({
  async setup() {
    const [{ data: organization }, { data: repos }] = await Promise.all([
      useFetch(`https://api.github.com/orgs/nuxt`),
      useFetch(`https://api.github.com/orgs/nuxt/repos`)
    ])

    return {
      organization,
      repos
    }
  }
})
</script>

<template>
  <header>
    <h1>{{ organization.login }}</h1>
    <p>{{ organization.description }}</p>
  </header>
</template>
```

--- 

# State
Nuxt 提供`useState`可组合来创建跨组件的反应式和 SSR 友好的共享状态。

`useState`是 SSR 友好的`ref`替代品。它的值将在服务器端渲染后（在客户端混合（hydration）期间）保留，并使用唯一键在所有组件之间共享。

## Signature

```ts
useState<T>(key: string, init?: () => T): Ref<T>
```

- key: 一个唯一的键，确保数据提取可以跨请求正确去重
- init: 一个函数，它在状态未启动时为状态提供初始值
- T: (在typescript中) 泛型

> `useState`仅在`setup`或`Lifecycle Hooks`期间有效。

## Best practices (最佳实践)

> 🚨 永远不要定义`const state = ref()`在`<script setup>`或`setup()`外部。这种状态将在访问您网站的所有用户之间共享，并可能导致内存泄漏！
> ✅ 而是使用 `const useX = () => useState('x')`

## Examples
### 基本用法

在此示例中，我们使用组件本地计数器状态。使用的任何其他组件`useState('counter')`共享相同的反应状态。

app.vue
```vue
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>
```

[Open on StackBlitz](https://stackblitz.com/github/nuxt/framework/tree/main/examples/use-state?terminal=dev)

### 进阶

在这个例子中，我们使用了一个可组合的，它从 HTTP 请求标头中检测用户的默认语言环境并保持它的locale状态。

[Open on StackBlitz](https://stackblitz.com/github/nuxt/framework/tree/main/examples/locale?terminal=dev)

### 状态共享

通过使用**自动导入的组合项**，我们可以定义全局类型安全状态并在整个应用程序中导入它们。

composables/states.ts
```ts
export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
```

app.vue
```vue
<script setup>
const color = useColor() // Same as useState('color')
</script>

<template>
  <p>Current color: {{ color }}</p>
</template>
```

--- 

# Meta Tags 

您可以通过几种不同的方式为您的网站自定义 `meta`。（比较常用的设置，如`keywords`已获得更好的SEO）。

## useMeta Composable (钩子函数)

在您的`setup`函数中，您可以`useMeta`使用元属性的对象调用与元标记对应的键：`title`, `base`, `script`, `style`, `meta` 和 `link`, 以及`htmlAttrs` 和 `bodyAttrs`。或者，您可以传递一个返回响应式元数据对象的函数。

For example:

```ts
export default {
  setup () {
    useMeta({
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      bodyAttrs: {
        class: 'test'
      }
    })
  }
}
```

## Meta Components （组件）

Nuxt提供`<Title>`，`<Base>`，`<Script>`，`<Style>`，`<Meta>`，`<Link>`，`<Body>`，`<Html>`和`<Head>`组件，以便您可以直接与您的组件的模板中的元数据进行交互。

由于这些组件名称与原生 HTML 元素匹配，因此在模板中将它们**大写**非常重要。

`<Head>`并且`<Body>`可以接受嵌套元标记（出于审美原因），但这对嵌套元标记在最终 `HTML`中的呈现位置没有影响。

For example:

app.vue

```vue
<template>
  <div>
    Hello World
    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Title>{{ dynamic }} title</Title>
        <Meta name="description" :content="`My page's ${dynamic} description`" />
        <Link rel="preload" href="/test.txt" as="script" />
      </Head>
    </Html>

    <button class="blue" @click="dynamic = Math.random() * 100">
      Click me
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({ dynamic: 49 })
}
</script>
```

---

# NuxtApp
在 Nuxt 3 中，您可以在`composables`、`components`和`plugins`中访问运行时应用程序上下文。
在 Nuxt 2 中，这被称为[Nuxt context](https://nuxtjs.org/docs/internals-glossary/context/#the-context)。

## Accessing NuxtApp (访问NuxtApp)

在`composables`、`components`和`plugins`中，您可以使用`useNuxtApp`访问`nuxtApp`。

```ts
import { useNuxtApp } from '#app'

function useMyComposable () {
  const nuxtApp = useNuxtApp()
  // access runtime nuxt app instance
}
```
为方便起见，`nuxtApp`也作为第一个参数接收。

> `useNuxtApp`（在服务器端）仅在`setup`、`Nuxt plugins`或`Lifecycle Hooks`中使用.

## Providing helpers (定义全局助手)

您可以提供可用于所有`composables`和`application`的助手。这通常在`Nuxt plugin`中。

```ts
const nuxtApp = useNuxtApp()
nuxtApp.provide('hello', (name) => `Hello ${name}!`)

console.log(nuxtApp.$hello('name')) // Prints "Hello name!"
```

在 Nuxt 2 插件中，这被称为注入函数。

> 可以通过返回一个带有provide键的对象来注入助手。

## NuxtApp interface (advanced) 

`nuxtApp` 具有以下属性：（注意：这是一个内部接口，某些属性可能会在稳定发布之前发生变化）

```ts
const nuxtApp = {
  vueApp, // the global Vue application: https://v3.vuejs.org/api/application-api.html

  // These let you call and add runtime NuxtApp hooks
  // https://github.com/nuxt/framework/blob/main/packages/nuxt3/src/app/nuxt.ts#L18
  hooks,
  hook,
  callHook,

  // Only accessible on server-side
  ssrContext: {
    url,
    req,
    res,
    runtimeConfig,
    noSSR,
  },

  // This will be stringified and passed from server to client
  payload: {
    serverRendered: true,
    data: {},
    state: {}
  }

  provide: (name: string, value: any) => void
}
```
有关更多信息，请查看[源代码](https://github.com/nuxt/framework/blob/main/packages/nuxt3/src/app/nuxt.ts#L28-L53)。


--- 

# Runtime Config（运行时配置）

Nuxt 提供了一个 API 来定义运行时配置 应用程序 和 API 路由。

## Exposing runtime config （暴露配置）

要将配置和环境变量公开给应用程序的其余部分，您需要在`nuxt.config`文件中定义运行时配置，使用`privateRuntimeConfig`或`publicRuntimeConfig`选项（基于您是否希望它在应用程序的客户端部分可访问） ）。

### Example:

nuxt.config.ts
```ts
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_BASE: '/api'
  },
  privateRuntimeConfig: {
    API_SECRET: '123'
  }
})
```

添加`API_BASE`到`publicRuntimeConfig`时，Nuxt 将其添加到页面的有效负载中。这样我们就可以在服务器和浏览器中普遍访问`API_BASE`。

## Environment Variables （环境变量）

提供配置的最常见方法是使用环境变量。`Nuxt CLI` 具有内置的`dotenv`支持。除了任何进程环境变量之外，如果您`.env`的项目根目录中有一个文件，它将自动加载`process.env`到您的`nuxt.config`文件和`modules`中，并可以在其中访问。

### Example:

.env
```yaml
BASE_URL=https://nuxtjs.org
API_SECRET=api_secret_token
```

nuxt.config.ts
```ts
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    API_SECRET: process.env.API_SECRET
  }
})
```
> 💡 提示：虽然没有必要，但通过使用相同的运行时配置名称作为 `env` 变量，您可以在生产中使用平台环境变量轻松覆盖它们。

## Accessing runtime config （访问运行时配置）
### Vue app

在 Nuxt 应用程序的 Vue 部分，您需要调用`useRuntimeConfig()`以访问运行时配置。

注意：客户端和服务器端的行为是不同的：

- 在客户端， 只有`publicRuntimeConfig`可用，并且对象可读写。
- 在服务器端，`publicRuntimeConfig`和`privateRuntimeConfig`被合并，并且对象是只读的，以避免上下文共享。

```vue
<template>
  <div>
    <div>Token: {{ config.API_AUTH_TOKEN }}</div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>
```

> 🛑 安全注意事项：如果`API_AUTH_TOKEN`是私有配置，切勿使用上面的示例。即使您使用privateRuntimeConfig，您仍然必须小心不要将此类配置公开给有效负载或 html！

> `useRuntimeConfig`仅在`setup`或`Lifecycle Hooks` 期间有效。

## API routes （路由）

在 API 路由中，您可以通过直接从 `virtual` 导入来访问运行时配置`#config`.

```ts
import config from '#config'

export default async () => {
  const result = await $fetch('https://my.api.com/test', {
    headers: {
      Authorization: `Bearer ${config.API_AUTH_TOKEN}`
    }
  })
  return result
}
```
### Typing runtime config (键入运行时配置)

目前可以手动键入运行时配置。

index.d.ts
```ts
declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    testConfig: string
  }
  interface PrivateRuntimeConfig {
    token: string
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
```

--- 

# Cookies
Nuxt 提供了一个 SSR 友好的可组合来读取和写入`cookie`。

## Usage

在您的`pages`, `components` 和 `plugins`中，您可以`useCookie`用来创建绑定到特定 `cookie` 的反应式引用。

```ts
const cookie = useCookie(name, options)
```

> `useCookie`仅在`setup`或`Lifecycle Hooks`期间有效。
> `useCookie ref` 将自动将 `cookie` 值序列化和反序列化为 `JSON`。

## Example

下面的示例创建了一个名为 `counter` 的 `cookie` 。如果 `cookie` 不存在，它最初被设置为一个随机值。每当我们更新`counter`变量时，`cookie` 都会相应地更新。
```vue
<template>
  <div>
    <h1> Counter: {{ counter || '-' }}</h1>
    <button @click="counter = null">
      reset
    </button>
    <button @click="counter--">
      -
    </button>
    <button @click="counter++">
      +
    </button>
  </div>
</template>

<script setup>
const counter = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)
</script>
```

[Open on StackBlitz](https://stackblitz.com/github/nuxt/framework/tree/main/examples/use-cookie?terminal=dev)

## Options

Cookie 可组合接受多个选项，可让您修改 cookie 的行为。大多数选项将直接传递给cookie包。

### maxAge / expires (最大年龄/过期时间)

`maxAge`: 指定 **数字（以秒为单位）** 作为`Max-Age` `Set-Cookie`属性的值。给定的数字将通过四舍五入转换为整数。默认情况下，没有设置最大年龄。
`expires`: 指定 **Date对象** 作为`Expires` `Set-Cookie`属性的值。默认情况下，没有设置过期时间。大多数客户端会认为这是“non-persistent cookie”，并会在退出 Web 浏览器应用程序等条件下将其删除。

> 注：该cookie的存储模型规范规定，如果同时设置`expires`和 `maxAge`，此时`maxAge`优先，但不是所有的客户端可以遵循这一点，所以如果同时设置，就应该指向同一日期和时间！
> 如果expires和maxAge都没有设置，cookie 将仅用于会话并在用户关闭浏览器时删除。

### httpOnly

指定**boolean值**作为 `HttpOnly` `Set-Cookie`属性的值。如果为真，则设置该属性；否则不设置。默认情况下，未设置该属性。

> 注意：将此设置为 `true` 时要小心，因为兼容的客户端将不允许客户端通过JavaScript在document.cookie查看.

### secure

指定**boolean值**作为`Secure` `Set-Cookie`属性的值。如果为真，则设置该属性；否则不是。默认情况下，未设置该属性。

> 注意：将此设置为 `true` 时要小心，因为如果浏览器没有 `HTTPS` 连接，兼容客户端将来不会将 `cookie` 发送回服务器。这会导致混合错误。

### domain

指定**任意类型**作为`Domain` `Set-Cookie`属性的值。默认情况下，没有设置域，大多数客户端会考虑仅将 `cookie` 应用于当前域。

### path

指定**任意类型**作为`Path` `Set-Cookie`属性的值。默认情况下，该路径被视为“default path”。

### sameSite
Specifies the boolean or string value for the SameSite Set-Cookie attribute .
指定**boolean或string值**作为`SameSite` `Set-Cookie` [属性](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7)的值。

- `true` 将`SameSite`属性设置`Strict`为严格的同站点强制执行。
- `false` 不会设置`SameSite`属性。
- `'lax'`将`SameSite`属性设置`Lax`为宽松 “same-site”。
- `'none'`将`SameSite`属性设置`None`为显式 “cross-site”。
- `'strict'`将`SameSite`属性设置`Strict`为严格的同站点强制执行。
可以在[规范](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7)中找到有关不同实施级别的更多信息。

### encode

指定将用于编码 `cookie` 值的函数。由于 `cookie` 的值具有有限的字符集（并且必须是简单的字符串），因此该函数可用于将值编码为适合 `cookie` 值的字符串。
默认编码器是 `JSON.stringify` + `encodeURIComponent`。

### decode

指定将用于解码 `cookie` 值的函数。由于 `cookie` 的值具有有限的字符集（并且必须是简单的字符串），因此该函数可用于将先前编码的 `cookie` 值解码为 JavaScript 字符串或其他对象。
默认解码器是 `decodeURIComponent` + `destr`。

> 如果此函数抛出错误，原始的、未解码的 cookie 值将作为 cookie 的值返回。

## Handling cookies in API routes (处理 API 路由中的 cookie)
您可以从 `h3` 包中使用`useCookie`和`setCookie` ，在服务器 API 路由中设置 cookie。
### Example:

```ts
import { useCookie, setCookie } from 'h3'

export default (req, res) => {
  // Read counter cookie
  let counter = useCookie(req, 'counter') || 0

  // Increase counter cookie by 1
  setCookie(res, 'counter', ++counter)

  // Send JSON response
  return { counter }
}
```