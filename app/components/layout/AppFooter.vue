<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const { appVersion } = useRuntimeConfig().public
const contact = useSiteContact()

const columns: FooterColumn[] = [
  {
    label: 'Navegação',
    children: [
      { label: 'Sobre', to: '/sobre' },
      { label: 'Serviços', to: '/servicos' },
      { label: 'Equipe', to: '/equipe' },
      { label: 'Ação Social', to: '/acao-social' },
      { label: 'Recursos', to: '/recursos' },
      { label: 'Contato', to: '/contato' }
    ]
  },
  {
    label: 'Contato',
    children: [
      { label: 'WhatsApp', to: contact.whatsappUrl, target: '_blank', icon: 'i-lucide-phone' },
      { label: contact.email, to: contact.mailtoUrl, icon: 'i-lucide-mail' },
      { label: contact.instagramHandle, to: contact.instagramUrl, target: '_blank', icon: 'i-lucide-instagram' }
    ]
  }
]
</script>

<template>
  <UFooter
    :ui="{
      root: 'bg-primary-900 text-white',
      top: 'py-12 border-b border-primary-700',
      bottom: 'py-4'
    }"
  >
    <template #top>
      <UContainer :ui="{ base: 'max-w-7xl' }">
        <UFooterColumns
          :columns="columns"
          :ui="{
            root: 'xl:grid-cols-[1fr_repeat(2,minmax(0,1fr))]',
            label: 'font-display font-bold text-sm uppercase tracking-widest text-primary-300 mb-4',
            link: 'font-sans text-primary-100 hover:text-secondary-400 text-sm transition-colors'
          }"
        >
          <!-- Brand block -->
          <template #left>
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
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <!-- Copyright -->
    <template #left>
      <p class="font-sans text-primary-400 text-xs">
        © {{ new Date().getFullYear() }} sinapíticos — instituto de desenvolvimento infantil.
        Fundado por André Barbieri &amp; Carolina Teixeira.
      </p>
    </template>

    <!-- Versão -->
    <template #right>
      <p class="font-mono text-primary-600 text-xs">
        v{{ appVersion }}
      </p>
    </template>
  </UFooter>
</template>
