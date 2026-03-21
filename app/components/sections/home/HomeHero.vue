<script setup lang="ts">
</script>

<template>
  <section class="bg-[#F5F0E8] pt-16 pb-20 px-4 sm:px-6 lg:px-8" aria-label="Apresentação">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text content -->
        <div class="flex flex-col gap-6">
          <EyebrowBadge text="✦ Neuropsicologia Infantil" />

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-primary-800 leading-tight">
            Cuidamos dos piticos com o melhor que a ciência oferece
          </h1>

          <p class="font-sans text-zinc-600 text-lg leading-relaxed max-w-xl">
            O sinapíticos é um instituto de desenvolvimento infantil onde rigor científico e cuidado humano caminham juntos — porque sua família merece os dois.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <UButton
              to="/contato"
              color="primary"
              variant="solid"
              size="lg"
              icon="i-lucide-calendar"
            >
              Agende uma avaliação
            </UButton>
            <UButton
              to="/sobre"
              color="primary"
              variant="outline"
              size="lg"
              icon="i-lucide-heart"
            >
              Nossa história
            </UButton>
          </div>
        </div>

        <!-- Neurônio decorativo -->
        <div class="flex items-center justify-center">
          <NeuronDeco class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 drop-shadow-xl" />
        </div>
      </div>
    </div>
  </section>
</template>
