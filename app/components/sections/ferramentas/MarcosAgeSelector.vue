<script setup lang="ts">
import type { MilestonesData } from '~/composables/useMarcosDesenvolvimento'

const props = defineProps<{
  ageOrder: string[]
  milestones: MilestonesData
  selectedAge: string
}>()

const emit = defineEmits<{
  (e: 'select', age: string): void
}>()
</script>

<template>
  <div class="bg-white rounded-2xl border border-zinc-100 p-6 flex flex-col gap-4">
    <div>
      <h2 class="font-display font-extrabold text-primary-700 text-lg">
        Selecione a faixa etária
      </h2>
      <p class="font-sans text-zinc-500 text-sm mt-1">
        Escolha uma idade para visualizar os marcos esperados nessa fase do desenvolvimento.
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="age in ageOrder"
        :key="age"
        class="px-4 py-2 rounded-full font-display font-bold text-sm border-2 transition-all duration-150 cursor-pointer"
        :class="
          selectedAge === age
            ? 'bg-primary-500 border-primary-500 text-white shadow-sm shadow-primary-500/30'
            : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50'
        "
        @click="emit('select', age)"
      >
        {{ milestones[age].label }}
      </button>
    </div>
  </div>
</template>
