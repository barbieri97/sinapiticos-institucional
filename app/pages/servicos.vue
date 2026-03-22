<script setup lang="ts">
useHead({
  title:
    'Serviços — Avaliação, Psicoterapia e Orientação Parental — sinapiticos',
  meta: [
    {
      name: 'description',
      content:
        'Avaliação neuropsicológica, psicoterapia infantil e orientação parental. Conheça os serviços do sinapiticos.'
    }
  ]
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-cream py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Serviços"
    >
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Texto -->
          <div
            class="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start"
          >
            <EyebrowBadge text="✦ O que oferecemos" />
            <h1
              class="font-display font-black text-4xl sm:text-5xl text-primary-800 leading-tight"
            >
              Serviços pensados para<br>cada fase do desenvolvimento
            </h1>
            <p class="font-sans text-zinc-600 text-lg leading-relaxed max-w-lg">
              Trabalhamos com abordagens baseadas em evidências, respeitando a
              singularidade de cada criança e família.
            </p>
          </div>

          <!-- Neuron -->
          <div class="flex items-center justify-center lg:justify-end">
            <NuxtImg
              src="/images/neuron.png"
              alt="Neuron, mascote do sinapiticos"
              loading="eager"
              fetchpriority="high"
              width="260"
              height="260"
              sizes="sm:200px md:240px lg:260px"
              format="webp"
              quality="90"
              class="w-44 sm:w-52 lg:w-60 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <USeparator
      color="primary"
      class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    />

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
    <section
      class="bg-primary-500 py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Agende sua consulta"
    >
      <div
        class="max-w-3xl mx-auto text-center flex flex-col items-center gap-5"
      >
        <h2 class="font-display font-black text-3xl text-white">
          Pronto para dar o primeiro passo?
        </h2>
        <p class="font-sans text-primary-100 text-lg leading-relaxed">
          Entre em contato e descubra qual serviço é o mais indicado para o seu
          filho.
        </p>
        <UButton
          to="/contato"
          color="secondary"
          variant="solid"
          size="lg"
          icon="i-lucide-calendar"
        >
          Agendar uma consulta
        </UButton>
      </div>
    </section>
  </main>
</template>
