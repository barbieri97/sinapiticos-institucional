<script setup lang="ts">
useHead({
  title: 'Nossa história — sinapíticos',
  meta: [
    {
      name: 'description',
      content: 'Conheça a história do sinapíticos, nossa missão, visão e os valores que guiam nosso trabalho com crianças e famílias.'
    }
  ]
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8" aria-label="Sobre nós">
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <EyebrowBadge text="✦ Nossa história" />
        <h1 class="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
          Um instituto construído com<br />
          <span class="text-secondary-300">ciência e afeto</span>
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Conheça a origem do sinapíticos e os valores que guiam cada atendimento.
        </p>
        <NeuronDeco class="w-24 h-24 mt-2 opacity-80" />
      </div>
    </section>

    <SobreOrigem />
    <SobreValores />
  </main>
</template>
