
<template>
  <div>
    <slot name="header" />
    <div>Some shared layout content:</div>
    <slot />
    <slot name="footer" />
  </div>
</template>