<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navItems: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Equipe', to: '/equipe' },
  { label: 'Ação Social', to: '/acao-social' },
  { label: 'Blog', to: '/blog' },
  { label: 'Ferramentas', to: '/ferramentas' },
  { label: 'Contato', to: '/contato' }
]
</script>

<template>
  <UHeader
    class="bg-cream/95 backdrop-blur border-b border-primary-100 shadow-sm"
    :ui="{ container: 'max-w-7xl' }"
  >
    <!-- Logo -->
    <template #title>
      <NuxtLink
        to="/"
        class="flex items-center shrink-0"
      >
        <NuxtImg
          src="/images/logo-sem-fundo.png"
          alt="sinapiticos: instituto de desenvolvimento infantil"
          loading="eager"
          fetchpriority="high"
          width="160"
          height="48"
          sizes="sm:120px md:140px lg:160px"
          format="webp"
          quality="80"
          class="h-12 lg:h-16 w-auto"
        />
      </NuxtLink>
    </template>

    <!-- Desktop nav (centro) -->
    <UNavigationMenu
      :items="navItems"
      variant="link"
      :ui="{
        link: 'font-display font-bold text-sm text-zinc-600 hover:text-primary-600'
      }"
    />

    <!-- CTA direita -->
    <template #right>
      <UButton
        to="/contato"
        color="primary"
        size="sm"
        class="hidden lg:flex"
      >
        Agendar consulta
      </UButton>
    </template>

    <!-- Menu mobile -->
    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        variant="link"
        class="-mx-2.5"
        :ui="{
          link: 'font-display font-bold text-base text-zinc-700 hover:text-primary-600'
        }"
      />
      <div class="pt-4 mt-4 border-t border-primary-100">
        <UButton
          to="/contato"
          color="primary"
          size="lg"
          block
        >
          Agendar consulta
        </UButton>
      </div>
    </template>
  </UHeader>
</template>

<style scoped>
:deep([data-active]) {
  color: var(--color-primary-600);
}
</style>
