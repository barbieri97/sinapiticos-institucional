<script setup lang="ts">
useHead({
  title: 'Serviços — Avaliação, Psicoterapia e Orientação Parental — sinapíticos',
  meta: [
    {
      name: 'description',
      content: 'Avaliação neuropsicológica, psicoterapia infantil e orientação parental. Conheça os serviços do sinapíticos.'
    }
  ]
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="bg-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8" aria-label="Serviços">
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <EyebrowBadge text="✦ O que oferecemos" />
        <h1 class="font-display font-black text-4xl sm:text-5xl text-primary-800 leading-tight">
          Serviços pensados para<br />cada fase do desenvolvimento
        </h1>
        <p class="font-sans text-zinc-600 text-lg leading-relaxed max-w-2xl">
          Trabalhamos com abordagens baseadas em evidências, respeitando a singularidade de cada criança e família.
        </p>
      </div>
    </section>

    <ServicoBlock
      icon="i-lucide-brain"
      title="Avaliação Neuropsicológica"
      description="Investigação detalhada das funções cognitivas da criança — atenção, memória, linguagem, aprendizagem — para entender como ela pensa e aprende. O resultado é um mapa preciso das potencialidades e dificuldades do seu filho, com orientações claras para escola e família."
    />

    <ServicoBlock
      icon="i-lucide-heart"
      title="Psicoterapia Infantil"
      description="Espaço terapêutico seguro e adaptado à criança, onde ela pode expressar, processar e desenvolver recursos emocionais e comportamentais. Trabalhamos com abordagens baseadas em evidências, respeitando a singularidade de cada pitico."
      :reverse="true"
    />

    <ServicoBlock
      icon="i-lucide-users"
      title="Orientação Parental"
      description="Apoio direto a pais e responsáveis para compreender melhor o desenvolvimento do filho e atuar de forma parceira no dia a dia. Porque o cuidado não termina na sessão — ele continua em casa."
    />

    <!-- CTA final -->
    <section class="bg-primary-500 py-16 px-4 sm:px-6 lg:px-8" aria-label="Agende sua consulta">
      <div class="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <h2 class="font-display font-black text-3xl text-white">Pronto para dar o primeiro passo?</h2>
        <p class="font-sans text-primary-100 text-lg leading-relaxed">
          Entre em contato e descubra qual serviço é o mais indicado para o seu filho.
        </p>
        <UButton to="/contato" color="secondary" variant="solid" size="lg" icon="i-lucide-calendar">
          Agendar uma consulta
        </UButton>
      </div>
    </section>
  </main>
</template>
