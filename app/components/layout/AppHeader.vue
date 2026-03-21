<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navItems: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Equipe', to: '/equipe' },
  { label: 'Ação Social', to: '/acao-social' },
  { label: 'Recursos', to: '/recursos' },
  { label: 'Contato', to: '/contato' },
]
</script>

<template>
  <UHeader
    class="bg-cream/95 backdrop-blur border-b border-primary-100 shadow-sm"
    :ui="{ container: 'max-w-7xl' }"
  >
    <!-- Logo -->
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
        <NeuronDeco class="w-8 h-8" />
        <div class="flex flex-col leading-none">
          <span class="font-display font-black text-primary-600 text-lg tracking-tight">sinapíticos</span>
          <span class="font-sans text-zinc-500 text-[10px] uppercase tracking-widest hidden sm:block">instituto de desenvolvimento infantil</span>
        </div>
      </NuxtLink>
    </template>

    <!-- Desktop nav (centro) -->
    <UNavigationMenu
      :items="navItems"
      variant="link"
      :ui="{
        link: 'font-display font-bold text-sm text-zinc-600 hover:text-primary-600',
        linkActive: 'text-primary-600',
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
          link: 'font-display font-bold text-base text-zinc-700 hover:text-primary-600',
          linkActive: 'text-primary-600',
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
