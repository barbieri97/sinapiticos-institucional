<script setup lang="ts">
const navItems = [
  { label: "Home", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Equipe", to: "/equipe" },
  { label: "Ação Social", to: "/acao-social" },
  { label: "Recursos", to: "/recursos" },
  { label: "Contato", to: "/contato" },
];

const drawerOpen = ref(false);
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-[#F5F0E8]/95 backdrop-blur border-b border-primary-100 shadow-sm"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
          <NeuronDeco class="w-8 h-8" />
          <div class="flex flex-col leading-none">
            <span
              class="font-display font-black text-primary-600 text-lg tracking-tight"
              >sinapíticos</span
            >
            <span
              class="font-sans text-zinc-500 text-[10px] uppercase tracking-widest hidden sm:block"
              >instituto de desenvolvimento infantil</span
            >
          </div>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav
          class="hidden lg:flex items-center gap-1"
          aria-label="Navegação principal"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="font-display font-bold text-sm text-zinc-600 hover:text-primary-600 px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors"
            active-class="text-primary-600 bg-primary-50"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Desktop CTA + Mobile hamburger -->
        <div class="flex items-center gap-3">
          <UButton
            to="/contato"
            color="primary"
            size="sm"
            class="hidden lg:flex"
          >
            Agendar consulta
          </UButton>

          <UButton
            icon="i-lucide-menu"
            color="primary"
            variant="ghost"
            aria-label="Abrir menu"
            class="lg:hidden"
            @click="drawerOpen = true"
          />
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile drawer -->
  <UDrawer v-model:open="drawerOpen" direction="left">
    <template #content>
      <div class="p-6 flex flex-col h-full bg-[#F5F0E8]">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-2">
            <NeuronDeco class="w-7 h-7" />
            <span class="font-display font-black text-primary-600 text-base"
              >sinapíticos</span
            >
          </div>
          <UButton
            icon="i-lucide-x"
            color="primary"
            variant="ghost"
            aria-label="Fechar menu"
            @click="drawerOpen = false"
          />
        </div>

        <nav class="flex flex-col gap-1" aria-label="Navegação mobile">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="font-display font-bold text-base text-zinc-700 hover:text-primary-600 px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            active-class="text-primary-600 bg-primary-50"
            @click="drawerOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="mt-auto pt-6">
          <UButton
            to="/contato"
            color="primary"
            size="lg"
            block
            @click="drawerOpen = false"
          >
            Agendar consulta
          </UButton>
        </div>
      </div>
    </template>
  </UDrawer>
</template>
