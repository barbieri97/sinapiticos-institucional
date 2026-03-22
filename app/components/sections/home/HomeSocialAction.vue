<script setup lang="ts">
</script>

<template>
  <section
    class="bg-primary-500 py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Ação social"
  >
    <div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
      <EyebrowBadge text="✦ Acesso como direito" />

      <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
        Toda criança merece cuidado de qualidade
      </h2>

      <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
        Acreditamos que saúde mental infantil não é privilégio. Por isso, reservamos vagas com valores sociais para famílias de baixa renda — e trabalhamos para aproximar as famílias dos direitos que já existem para garantir o desenvolvimento saudável das crianças.
      </p>

      <UButton
        to="/acao-social"
        color="secondary"
        variant="solid"
        size="lg"
        icon="i-lucide-heart-handshake"
      >
        Saiba como funciona
      </UButton>
    </div>
  </section>
</template>
