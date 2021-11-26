# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## 项目结构

### App file
The app.vue file is the main component in your Nuxt 3 applications.

Minimal usage
With Nuxt 3, the pages/ directory is optional. If not present, Nuxt won't include vue-router dependency. This is useful when working on a landing page or an application that does not need routing.

app.vue
```vue
<template>
  <h1>Hello World!</h1>
</template>
```

Usage with pages
If you have a pages/ directory, to display the current page, use the <NuxtPage> component:

app.vue
```vue
<template>
  <div>
    <NuxtPage/>
  </div>
</template>
```

Since Nuxt 3 uses <Suspense> inside <NuxtPage>, we recommend to wrap it into a single root element.
Remember that app.vue acts as the main component of your Nuxt application. Anything you add in it (JS and CSS) will be global and included in every page.
If you want to have the possibility to customize the structure around the page between pages, check out the layouts/ directory.

### Gitignore file
A .gitignore file specifies intentionally untracked files that git should ignore. Learn more about it in the git documentation .

We recommend having a .gitignore file that has at least the following entries present:

```
.gitignore
# Nuxt dev/build outputs
.output
.nuxt
# Node dependencies
node_modules
# System files
*.log
```
### TypeScript configuration file
Nuxt automatically generates a .nuxt/tsconfig.json file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults. You can benefit from this by creating a tsconfig.json in the root of your project with the following content:

```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

As you need to, you can customize the contents of this file. However, note that if you need to customize your paths, this will completely override the auto-generated path aliases. Instead, it is suggested that you add any path aliases you need to the alias property within your nuxt.config, where they will get picked up and added to the autogenerated tsconfig.