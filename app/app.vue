<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt-BR',
    class: 'light'
  }
})
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
