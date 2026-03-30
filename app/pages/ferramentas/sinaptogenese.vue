<script setup lang="ts">
import { useSinaptogeneseAnimation } from '~/composables/useSinaptogeneseAnimation'

useHead({
  title: 'Sinaptogênese Neural — sinapiticos',
  meta: [
    {
      name: 'description',
      content:
        'Animação interativa das 5 fases do desenvolvimento neural — da proliferação neuronal à poda sináptica. Explore a neurociência do desenvolvimento infantil.'
    }
  ]
})

const animation = useSinaptogeneseAnimation()

function handleSeekPhase(phase: number) {
  animation.seekPhase(phase)
}
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Sinaptogênese Neural"
    >
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-5">
        <NuxtLink
          to="/ferramentas"
          class="font-sans text-primary-200 hover:text-white text-sm transition-colors flex items-center gap-1.5 self-start"
        >
          <UIcon name="i-lucide-arrow-left" class="text-sm" />
          Voltar às ferramentas
        </NuxtLink>
        <EyebrowBadge text="✦ Ferramenta interativa" />
        <h1 class="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
          Sinaptogênese Neural
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Explore as 5 fases do desenvolvimento neural — da multiplicação das
          primeiras células à formação das conexões que tornam a criança quem ela é.
        </p>
      </div>
    </section>

    <!-- Tool body -->
    <section
      class="bg-[#F5F0E8] py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Animação de sinaptogênese"
    >
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <!-- Canvas + phase info (2/3 width on lg) -->
          <div class="lg:col-span-2 flex flex-col gap-5">
            <ClientOnly>
              <SinaptogeneseCanvas
                :init-canvas="animation.initCanvas"
                :destroy-canvas="animation.destroyCanvas"
              />
              <template #fallback>
                <div class="canvas-fallback rounded-2xl flex items-center justify-center">
                  <UIcon name="i-lucide-loader-circle" class="text-primary-300 text-4xl animate-spin" />
                </div>
              </template>
            </ClientOnly>

            <SinaptogenesePhaseInfo
              :phases="animation.PHASES"
              :current-phase="animation.currentPhase.value"
              :progress="animation.progress.value"
              :current-phase-data="animation.currentPhaseData.value"
              @seek-phase="handleSeekPhase"
            />
          </div>

          <!-- Controls sidebar (1/3 width on lg) -->
          <div class="flex flex-col gap-5">
            <SinaptogeneseControls
              :speed="animation.speed.value"
              :neuron-count="animation.neuronCount.value"
              :is-paused="animation.isPaused.value"
              @update:speed="animation.speed.value = $event"
              @update:neuron-count="animation.neuronCount.value = $event"
              @toggle-pause="animation.togglePause()"
              @restart="animation.restart()"
            />

            <!-- Legend -->
            <div class="bg-white rounded-2xl border border-zinc-100 p-5 flex flex-col gap-4">
              <h4 class="font-display font-extrabold text-primary-700 text-sm">
                O que você está vendo
              </h4>
              <ul class="flex flex-col gap-3">
                <li class="flex items-center gap-3 font-sans text-sm text-zinc-600">
                  <span class="w-4 h-4 rounded-full bg-primary-400 shrink-0" />
                  Neurônios (corpos celulares / soma)
                </li>
                <li class="flex items-center gap-3 font-sans text-sm text-zinc-600">
                  <span class="w-4 h-0.5 bg-primary-300 shrink-0 rounded-full" />
                  Dendritos e axônios
                </li>
                <li class="flex items-center gap-3 font-sans text-sm text-zinc-600">
                  <span class="w-4 h-4 rounded-full bg-secondary-400 shrink-0" />
                  Sinapses e pulsos de sinalização
                </li>
                <li class="flex items-center gap-3 font-sans text-sm text-zinc-500">
                  <span class="w-4 h-4 rounded-full bg-zinc-400 shrink-0 opacity-40" />
                  Neurônios sem conexão (apoptose)
                </li>
              </ul>
            </div>

            <!-- Why it matters -->
            <div class="bg-primary-50 rounded-2xl border border-primary-100 p-5 flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-info" class="text-primary-500 text-lg shrink-0" />
                <h4 class="font-display font-extrabold text-primary-700 text-sm">
                  Por que isso importa?
                </h4>
              </div>
              <p class="font-sans text-xs text-zinc-600 leading-relaxed">
                A qualidade das sinapses formadas nos primeiros anos de vida determina
                a capacidade cognitiva, emocional e motora da criança. Experiências
                ricas em estímulo fortalecem conexões; a ausência de estímulo leva
                à poda precoce — um dos fundamentos da neuroplasticidade infantil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.canvas-fallback {
  background-color: var(--color-primary-900);
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 1rem;
}
</style>
