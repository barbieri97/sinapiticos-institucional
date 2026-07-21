<script setup lang="ts">
useHead({
  title: 'Calculadora de Idade Cronológica — sinapiticos',
  meta: [
    {
      name: 'description',
      content:
        'Calcule a idade cronológica exata da criança em anos, meses e dias — com data de avaliação ajustável. Ferramenta gratuita para relatórios e laudos que exigem precisão.'
    }
  ]
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Calculadora de Idade Cronológica"
    >
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-5">
        <NuxtLink
          to="/ferramentas"
          class="font-sans text-primary-200 hover:text-white text-sm transition-colors flex items-center gap-1.5 self-start"
        >
          <UIcon
            name="i-lucide-arrow-left"
            class="text-sm"
          />
          Voltar às ferramentas
        </NuxtLink>
        <EyebrowBadge text="✦ Ferramenta interativa" />
        <h1 class="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
          Calculadora de Idade Cronológica
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Calcule a idade exata da criança em anos, meses e dias — útil para
          relatórios e laudos que exigem precisão. Ajuste a data da avaliação
          quando necessário.
        </p>
      </div>
    </section>

    <!-- Tool body -->
    <section
      class="bg-[#F5F0E8] py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Cálculo de idade cronológica"
    >
      <div class="max-w-3xl mx-auto flex flex-col gap-10">
        <CalculadoraIdadeForm />
        <CalculadoraIdadeInfo />
      </div>
    </section>
  </main>
</template>
