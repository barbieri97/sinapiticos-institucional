<script setup lang="ts">
useHead({
  title: 'Contato e agendamento — sinapiticos',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato com o sinapiticos para agendar uma avaliação ou tirar dúvidas sobre nossos serviços.'
    }
  ]
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8" aria-label="Contato">
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <EyebrowBadge text="✦ Estamos aqui para você" />
        <h1 class="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
          Que bom ter você aqui
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Faremos o melhor para cuidar de você e da sua família com o melhor que a ciência nos oferece.
        </p>
      </div>
    </section>

    <!-- Formulário + Info -->
    <section class="bg-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8" aria-label="Formulário de contato">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <!-- Form (ocupa mais espaço) -->
          <div class="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm">
            <ContatoForm />
          </div>
          <!-- Info -->
          <div class="lg:col-span-2">
            <ContatoInfo />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
