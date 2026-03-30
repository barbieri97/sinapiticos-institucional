<script setup lang="ts">
import { useMarcosDesenvolvimento } from '~/composables/useMarcosDesenvolvimento'

useHead({
  title: 'Marcos do Desenvolvimento — sinapiticos',
  meta: [
    {
      name: 'description',
      content:
        'Visualize os marcos de desenvolvimento esperados por faixa etária em linguagem, cognição, motricidade e social-emocional — baseado em CDC e AAP.'
    }
  ]
})

const {
  AGE_ORDER,
  DOMAINS,
  milestonesData,
  selectedAge,
  prevAge,
  nextAge,
  currentMilestones,
  prevMilestones,
  nextMilestones
} = useMarcosDesenvolvimento()
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Marcos do desenvolvimento infantil"
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
          Marcos do Desenvolvimento
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Selecione a faixa etária e veja os marcos esperados em cada área do
          desenvolvimento — baseado nos checklists revisados do CDC e da AAP.
        </p>
      </div>
    </section>

    <!-- Tool body -->
    <section
      class="bg-[#F5F0E8] py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Checklist de marcos do desenvolvimento"
    >
      <div class="max-w-7xl mx-auto flex flex-col gap-10">
        <!-- Age selector -->
        <MarcosAgeSelector
          :age-order="AGE_ORDER"
          :milestones="milestonesData"
          :selected-age="selectedAge"
          @select="selectedAge = $event"
        />

        <!-- Results -->
        <MarcosResults
          :domains="DOMAINS"
          :selected-age="selectedAge"
          :milestones="milestonesData"
          :current-milestones="currentMilestones"
          :prev-milestones="prevMilestones"
          :next-milestones="nextMilestones"
          :prev-age="prevAge"
          :next-age="nextAge"
        />

        <!-- Info + references -->
        <MarcosInfoSection />
      </div>
    </section>
  </main>
</template>
