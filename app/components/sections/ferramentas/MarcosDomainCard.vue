<script setup lang="ts">
import type { DomainConfig } from '~/composables/useMarcosDesenvolvimento'

interface MilestoneBucket {
  items: string[]
  label: string
  type: 'prev' | 'current' | 'next'
}

defineProps<{
  domain: DomainConfig
  prev: MilestoneBucket | null
  current: MilestoneBucket
  next: MilestoneBucket | null
}>()
</script>

<template>
  <div class="bg-white rounded-2xl border border-zinc-100 overflow-hidden" :class="domain.borderClass">
    <!-- Header -->
    <div class="flex items-center gap-3 px-5 py-4 border-b border-zinc-100">
      <div class="p-2 rounded-xl" :class="domain.bgClass">
        <UIcon :name="domain.icon" class="text-xl" :class="domain.iconClass" />
      </div>
      <div>
        <h3 class="font-display font-extrabold text-sm" :class="domain.titleClass">
          {{ domain.label }}
        </h3>
        <p class="font-sans text-xs text-zinc-400">{{ domain.desc }}</p>
      </div>
    </div>

    <!-- Milestone lists -->
    <div class="p-5 flex flex-col gap-4">
      <!-- Previous age -->
      <div v-if="prev && prev.items.length > 0">
        <p class="font-display font-bold text-xs text-secondary-600 uppercase tracking-wider mb-2">
          {{ prev.label }} — etapa anterior
        </p>
        <ul class="flex flex-col gap-1.5">
          <li
            v-for="item in prev.items"
            :key="item"
            class="flex items-start gap-2.5"
          >
            <span class="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-secondary-400 block" />
            <span class="font-sans text-sm text-zinc-500 leading-snug">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Current age — prominent -->
      <div v-if="current.items.length > 0">
        <p class="font-display font-bold text-xs text-primary-600 uppercase tracking-wider mb-2">
          {{ current.label }} — esperado agora
        </p>
        <ul class="flex flex-col gap-1.5">
          <li
            v-for="item in current.items"
            :key="item"
            class="flex items-start gap-2.5"
          >
            <span class="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary-500 block" />
            <span class="font-sans text-sm text-zinc-800 font-medium leading-snug">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Next age -->
      <div v-if="next && next.items.length > 0">
        <p class="font-display font-bold text-xs text-blue-600 uppercase tracking-wider mb-2">
          {{ next.label }} — próxima etapa
        </p>
        <ul class="flex flex-col gap-1.5">
          <li
            v-for="item in next.items"
            :key="item"
            class="flex items-start gap-2.5"
          >
            <span class="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-blue-400 block" />
            <span class="font-sans text-sm text-zinc-500 leading-snug">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
