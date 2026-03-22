<script setup lang="ts">
const services = [
  {
    icon: 'i-lucide-brain',
    title: 'Avaliação Neuropsicológica',
    description: 'Investigação detalhada das funções cognitivas da criança — atenção, memória, linguagem, aprendizagem — para entender como ela pensa e aprende.'
  },
  {
    icon: 'i-lucide-heart',
    title: 'Psicoterapia Infantil',
    description: 'Espaço terapêutico seguro e adaptado à criança, onde ela pode expressar, processar e desenvolver recursos emocionais e comportamentais.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Orientação Parental',
    description: 'Apoio direto a pais e responsáveis para compreender melhor o desenvolvimento do filho e atuar de forma parceira no dia a dia.'
  }
]
</script>

<template>
  <section
    class="bg-cream py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Nossos serviços"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <EyebrowBadge text="✦ O que fazemos" />
        <SectionTitle
          title="Serviços"
          centered
          class="mt-4"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard
          v-for="service in services"
          :key="service.title"
          class="border-l-4 border-secondary-500 bg-white hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg hover:shadow-primary-500/10"
        >
          <template #header>
            <div class="flex items-center gap-3 p-1">
              <div class="p-3 bg-primary-100 rounded-xl shrink-0">
                <UIcon
                  :name="service.icon"
                  class="text-primary-500 text-2xl"
                />
              </div>
              <h3 class="font-display font-extrabold text-primary-600 text-base leading-tight">
                {{ service.title }}
              </h3>
            </div>
          </template>
          <p class="font-sans text-zinc-500 text-sm leading-relaxed">
            {{ service.description }}
          </p>
          <template #footer>
            <UButton
              to="/servicos"
              color="primary"
              variant="ghost"
              size="sm"
              icon="i-lucide-arrow-right"
              trailing
            >
              Saiba mais
            </UButton>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>
