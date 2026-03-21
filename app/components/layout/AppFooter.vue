<script setup lang="ts">
const { appVersion } = useRuntimeConfig().public

const pageLinks = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Equipe', to: '/equipe' },
  { label: 'Ação Social', to: '/acao-social' },
  { label: 'Recursos', to: '/recursos' },
  { label: 'Contato', to: '/contato' },
]
</script>

<template>
  <footer class="bg-primary-900 text-white mt-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Brand -->
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <NeuronDeco class="w-8 h-8 opacity-90" />
            <div class="flex flex-col leading-none">
              <span class="font-display font-black text-white text-lg">sinapíticos</span>
              <span class="font-sans text-primary-200 text-[10px] uppercase tracking-widest">instituto de desenvolvimento infantil</span>
            </div>
          </div>
          <p class="font-sans text-primary-200 text-sm leading-relaxed max-w-xs">
            Rigor científico e cuidado humano no desenvolvimento de cada pitico.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-display font-bold text-sm uppercase tracking-widest text-primary-300 mb-4">Navegação</h3>
          <ul class="flex flex-col gap-2">
            <li v-for="link in pageLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="font-sans text-primary-100 hover:text-secondary-400 text-sm transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-display font-bold text-sm uppercase tracking-widest text-primary-300 mb-4">Contato</h3>
          <div class="flex flex-col gap-3">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 font-sans text-primary-100 hover:text-secondary-400 text-sm transition-colors"
            >
              <UIcon name="i-lucide-phone" class="text-secondary-400 shrink-0" />
              WhatsApp
            </a>
            <a
              href="mailto:contato@sinapiticos.com.br"
              class="flex items-center gap-2 font-sans text-primary-100 hover:text-secondary-400 text-sm transition-colors"
            >
              <UIcon name="i-lucide-mail" class="text-secondary-400 shrink-0" />
              contato@sinapiticos.com.br
            </a>
            <a
              href="https://instagram.com/sinapiticos"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 font-sans text-primary-100 hover:text-secondary-400 text-sm transition-colors"
            >
              <UIcon name="i-lucide-instagram" class="text-secondary-400 shrink-0" />
              @sinapiticos
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-primary-700 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="font-sans text-primary-400 text-xs">
          © {{ new Date().getFullYear() }} sinapíticos — instituto de desenvolvimento infantil.
          Fundado por André Barbieri &amp; Carolina Teixeira.
        </p>
        <p class="font-sans text-primary-600 text-xs font-mono">
          v{{ appVersion }}
        </p>
      </div>
    </div>
  </footer>
</template>
