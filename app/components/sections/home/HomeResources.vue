<script setup lang="ts">
const resources = [
  {
    icon: 'i-lucide-book-open',
    category: 'Artigo',
    title: 'Entendendo o TDAH',
    description: 'Um guia prático para pais e educadores sobre o transtorno de déficit de atenção e hiperatividade em crianças.',
    to: '/blog',
  },
  {
    icon: 'i-lucide-file-down',
    category: 'Guia PDF',
    title: 'Escola Inclusiva',
    description: 'Como garantir os direitos do seu filho na escola e trabalhar em parceria com os professores.',
    to: '/blog',
  },
  {
    icon: 'i-lucide-wrench',
    category: 'Ferramenta',
    title: 'Calculadora de Idade',
    description: 'Calcule a idade cronológica e os marcos de desenvolvimento esperados para a faixa etária da criança.',
    to: '/ferramentas',
  },
]
</script>

<template>
  <section class="bg-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8" aria-label="Recursos gratuitos em destaque">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <EyebrowBadge text="✦ Para você" />
        <SectionTitle title="Recursos gratuitos" centered class="mt-4" />
        <p class="font-sans text-zinc-500 mt-3 max-w-xl mx-auto">
          Materiais criados para apoiar famílias, educadores e profissionais da saúde.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard
          v-for="resource in resources"
          :key="resource.title"
          class="bg-white hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg hover:shadow-primary-500/10"
        >
          <template #header>
            <div class="flex items-center gap-2 p-1">
              <div class="p-2 bg-primary-50 rounded-lg">
                <UIcon :name="resource.icon" class="text-primary-500 text-xl" />
              </div>
              <UBadge color="secondary" variant="subtle" size="xs" class="rounded-full font-display font-bold uppercase tracking-wide text-[10px]">
                {{ resource.category }}
              </UBadge>
            </div>
          </template>
          <div class="flex flex-col gap-2">
            <h3 class="font-display font-extrabold text-primary-700 text-base">{{ resource.title }}</h3>
            <p class="font-sans text-zinc-500 text-sm leading-relaxed">{{ resource.description }}</p>
          </div>
          <template #footer>
            <UButton
              :to="resource.to"
              color="primary"
              variant="ghost"
              size="sm"
              icon="i-lucide-arrow-right"
              trailing
            >
              Acessar
            </UButton>
          </template>
        </UCard>
      </div>

      <div class="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <UButton to="/blog" color="primary" variant="outline" size="lg">
          Ver o blog
        </UButton>
        <UButton to="/ferramentas" color="primary" variant="ghost" size="lg">
          Ver ferramentas
        </UButton>
      </div>
    </div>
  </section>
</template>
