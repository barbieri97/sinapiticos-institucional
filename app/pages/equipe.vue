<script setup lang="ts">
useHead({
  title: 'Nossa equipe — sinapiticos',
  meta: [
    {
      name: 'description',
      content: 'Conheça André Barbieri e Carolina Teixeira, neuropsicólogos infantis e fundadores do sinapiticos.'
    }
  ]
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-cream py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Nossa equipe"
    >
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <EyebrowBadge text="✦ Quem cuida dos seus piticos" />
        <h1 class="font-display font-black text-4xl sm:text-5xl text-primary-800 leading-tight">
          Nossa equipe
        </h1>
        <p class="font-sans text-zinc-600 text-lg leading-relaxed max-w-2xl">
          Profissionais comprometidos com o desenvolvimento saudável de cada criança e com o suporte genuíno às famílias.
        </p>
      </div>
    </section>

    <!-- Equipe -->
    <section
      class="bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Membros da equipe"
    >
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MembroCard
            nome="André Barbieri"
            cargo="Neuropsicólogo Infantil"
            formacao="Mestre em Neuropsicologia, especialista em avaliação neuropsicológica infantil e desenvolvimento cognitivo."
            frase="Cada criança é um universo único que merece ser compreendido com ciência e com o coração."
            color="primary"
          />
          <MembroCard
            nome="Carolina Teixeira"
            cargo="Neuropsicóloga Infantil"
            formacao="Doutoranda em Psicologia do Desenvolvimento, especialista em psicoterapia infantil e orientação parental."
            frase="Acredito que quando cuidamos bem de uma criança, cuidamos de toda a família e de toda a sociedade."
            color="secondary"
          />
        </div>

        <div class="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
          <UIcon
            name="i-lucide-users-round"
            class="text-primary-400 text-4xl mb-4"
          />
          <h3 class="font-display font-extrabold text-primary-700 text-xl mb-2">
            Crescendo juntos
          </h3>
          <p class="font-sans text-zinc-500 leading-relaxed max-w-lg mx-auto">
            A equipe do sinapiticos está em expansão. Buscamos sempre profissionais que compartilhem dos nossos valores — ciência com carinho.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
