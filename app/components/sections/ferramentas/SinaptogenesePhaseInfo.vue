<script setup lang="ts">
import type { SinaptogenesePhase } from '~/composables/useSinaptogeneseAnimation'

defineProps<{
  phases: SinaptogenesePhase[]
  currentPhase: number
  progress: number
  currentPhaseData: SinaptogenesePhase
}>()

const emit = defineEmits<{
  (e: 'seek-phase', phase: number): void
}>()
</script>

<template>
  <div class="bg-white rounded-2xl border border-zinc-100 p-5 flex flex-col gap-4">
    <!-- Badge + title -->
    <div class="flex items-center gap-3 flex-wrap">
      <UBadge
        color="primary"
        variant="solid"
        class="font-display font-bold text-xs rounded-full shrink-0"
      >
        Fase {{ currentPhase }} de {{ phases.length }}
      </UBadge>
      <h3 class="font-display font-extrabold text-primary-700 text-lg leading-tight">
        {{ currentPhaseData.name }}
      </h3>
    </div>

    <!-- Description -->
    <p class="font-sans text-zinc-600 text-sm leading-relaxed">
      {{ currentPhaseData.desc }}
    </p>

    <!-- Phase dots -->
    <div class="flex items-center gap-2">
      <button
        v-for="phase in phases"
        :key="phase.id"
        :title="phase.name"
        :aria-label="`Ir para fase ${phase.id}: ${phase.name}`"
        class="transition-all duration-300 rounded-full shrink-0 cursor-pointer"
        :class="
          phase.id === currentPhase
            ? 'w-8 h-3 bg-primary-500'
            : phase.id < currentPhase
              ? 'w-3 h-3 bg-primary-300'
              : 'w-3 h-3 bg-zinc-200 hover:bg-zinc-300'
        "
        @click="emit('seek-phase', phase.id)"
      />
    </div>

    <!-- Progress bar -->
    <div class="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
      <div
        class="h-full bg-primary-500 rounded-full"
        :style="{ width: `${Math.min(progress, 1) * 100}%`, transition: 'width 0.1s linear' }"
      />
    </div>
  </div>
</template>
