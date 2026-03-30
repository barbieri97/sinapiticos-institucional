<script setup lang="ts">
import type { DomainConfig, AgeMilestones, MilestonesData } from '~/composables/useMarcosDesenvolvimento'

const props = defineProps<{
  domains: DomainConfig[]
  selectedAge: string
  milestones: MilestonesData
  currentMilestones: AgeMilestones
  prevMilestones: AgeMilestones | null
  nextMilestones: AgeMilestones | null
  prevAge: string | null
  nextAge: string | null
}>()
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Legend -->
    <div class="flex flex-wrap items-center gap-4 px-5 py-3 bg-white rounded-2xl border border-zinc-100">
      <span class="font-display font-bold text-xs text-zinc-500 uppercase tracking-wider">Legenda:</span>
      <span v-if="prevAge" class="flex items-center gap-1.5 font-sans text-xs text-zinc-600">
        <span class="w-2.5 h-2.5 rounded-full bg-secondary-400 inline-block shrink-0" />
        Etapa anterior ({{ milestones[prevAge].label }})
      </span>
      <span class="flex items-center gap-1.5 font-sans text-xs text-zinc-800 font-medium">
        <span class="w-2.5 h-2.5 rounded-full bg-primary-500 inline-block shrink-0" />
        Esperado agora ({{ milestones[selectedAge].label }})
      </span>
      <span v-if="nextAge" class="flex items-center gap-1.5 font-sans text-xs text-zinc-600">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block shrink-0" />
        Próxima etapa ({{ milestones[nextAge].label }})
      </span>
    </div>

    <!-- Domain cards grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <MarcosDomainCard
        v-for="domain in domains"
        :key="domain.key"
        :domain="domain"
        :prev="prevMilestones && prevAge ? {
          items: prevMilestones[domain.key],
          label: milestones[prevAge].label,
          type: 'prev'
        } : null"
        :current="{
          items: currentMilestones[domain.key],
          label: milestones[selectedAge].label,
          type: 'current'
        }"
        :next="nextMilestones && nextAge ? {
          items: nextMilestones[domain.key],
          label: milestones[nextAge].label,
          type: 'next'
        } : null"
      />
    </div>
  </div>
</template>
