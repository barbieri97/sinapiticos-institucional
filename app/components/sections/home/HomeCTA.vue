<script setup lang="ts">
</script>

<template>
  <section class="bg-white py-20 px-4 sm:px-6 lg:px-8" aria-label="Entre em contato">
    <div class="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
      <EyebrowBadge text="✦ Estamos aqui" />

      <h2 class="font-display font-black text-3xl sm:text-4xl text-primary-700 leading-tight">
        Que bom ter você aqui
      </h2>

      <p class="font-sans text-zinc-600 text-lg leading-relaxed">
        Faremos o melhor para cuidar de você e da sua família com o melhor que a ciência nos oferece. Entre em contato e agende uma conversa.
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
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener"
          color="secondary"
          variant="outline"
          size="lg"
          icon="i-lucide-phone"
        >
          Falar pelo WhatsApp
        </UButton>
      </div>
    </div>
  </section>
</template>
