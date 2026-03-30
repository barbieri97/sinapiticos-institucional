<script setup lang="ts">
defineProps<{
  speed: number
  neuronCount: number
  isPaused: boolean
}>()

const emit = defineEmits<{
  (e: 'update:speed', value: number): void
  (e: 'update:neuronCount', value: number): void
  (e: 'toggle-pause'): void
  (e: 'restart'): void
}>()
</script>

<template>
  <div class="bg-white rounded-2xl border border-zinc-100 p-5 flex flex-col gap-5">
    <!-- Header + action buttons -->
    <div class="flex items-center justify-between">
      <h4 class="font-display font-extrabold text-primary-700 text-sm">Controles</h4>
      <div class="flex gap-2">
        <UButton
          :icon="isPaused ? 'i-lucide-play' : 'i-lucide-pause'"
          :color="isPaused ? 'primary' : 'neutral'"
          :variant="isPaused ? 'solid' : 'outline'"
          size="sm"
          :aria-label="isPaused ? 'Retomar animação' : 'Pausar animação'"
          @click="emit('toggle-pause')"
        />
        <UButton
          icon="i-lucide-rotate-ccw"
          color="neutral"
          variant="ghost"
          size="sm"
          aria-label="Reiniciar animação"
          @click="emit('restart')"
        />
      </div>
    </div>

    <!-- Speed slider -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <label class="font-display font-bold text-xs text-zinc-500 uppercase tracking-wider">
          Velocidade
        </label>
        <span class="font-mono text-xs font-bold text-primary-600">{{ speed.toFixed(1) }}×</span>
      </div>
      <input
        type="range"
        :value="speed"
        min="0.5"
        max="3"
        step="0.5"
        class="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-primary-500 bg-zinc-100"
        aria-label="Velocidade da animação"
        @input="emit('update:speed', Number(($event.target as HTMLInputElement).value))"
      />
      <div class="flex justify-between font-sans text-[10px] text-zinc-400">
        <span>Lento</span>
        <span>Rápido</span>
      </div>
    </div>

    <!-- Neuron count slider -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <label class="font-display font-bold text-xs text-zinc-500 uppercase tracking-wider">
          Neurônios
        </label>
        <span class="font-mono text-xs font-bold text-primary-600">{{ neuronCount }}</span>
      </div>
      <input
        type="range"
        :value="neuronCount"
        min="5"
        max="20"
        step="1"
        class="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-primary-500 bg-zinc-100"
        aria-label="Número de neurônios na animação"
        @input="emit('update:neuronCount', Number(($event.target as HTMLInputElement).value))"
      />
      <div class="flex justify-between font-sans text-[10px] text-zinc-400">
        <span>Menos</span>
        <span>Mais</span>
      </div>
    </div>
  </div>
</template>
