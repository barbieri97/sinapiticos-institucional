<script setup lang="ts">
useHead({
  title: 'Nossa história — sinapiticos',
  meta: [
    {
      name: 'description',
      content: 'Conheça a história do sinapiticos, nossa missão, visão e os valores que guiam nosso trabalho com crianças e famílias.'
    }
  ]
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Sobre nós"
    >
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Texto -->
          <div class="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <EyebrowBadge text="✦ Nossa história" />
            <h1 class="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Um instituto construído com<br>
              <span class="text-secondary-300">ciência e afeto</span>
            </h1>
            <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-lg">
              Conheça a origem do sinapiticos e os valores que guiam cada atendimento.
            </p>
          </div>

          <!-- Dopa -->
          <div class="flex items-center justify-center lg:justify-end">
            <NuxtImg
              src="/images/dopa.png"
              alt="Dopa, mascote do sinapiticos"
              loading="eager"
              fetchpriority="high"
              width="280"
              height="280"
              sizes="sm:200px md:240px lg:280px"
              format="webp"
              quality="90"
              class="w-48 sm:w-56 lg:w-64 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <SobreOrigem />
    <SobreValores />
  </main>
</template>
