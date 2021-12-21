# Composables directory

Nuxt 3 supports composables/ directory to automatically import your Vue composables into your application using auto-imports!

Nuxt 3 支持`composables/`目录使用自动导入将您的 Vue 可组合文件自动导入到您的应用程序中！

Example: (using named export)

composables/useFoo.ts

```ts
import { useState } from '#app';

export const useFoo = () => {
  return useState('foo', () => 'bar');
};
```

Example: (using default export)

composables/use-foo.ts or composables/useFoo.ts

```ts
import { useState } from '#app';

// It will be available as useFoo() (pascalCase of file name without extension)
export default function () {
  return 'bar';
}
```

You can now auto-import it:

app.vue

```vue
<template>
  <div>
    {{ foo }}
  </div>
</template>

<script setup>
const foo = useFoo();
</script>
```
