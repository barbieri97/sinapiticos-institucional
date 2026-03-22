<script setup lang="ts">
const pilares = [
  {
    icon: 'i-lucide-scale',
    title: 'Além do desconto',
    description: 'Vagas com valor social não são caridade — são um mecanismo para garantir que o direito ao desenvolvimento saudável alcance quem mais precisa. O atendimento tem o mesmo rigor, o mesmo cuidado e a mesma equipe.'
  },
  {
    icon: 'i-lucide-book-open-check',
    title: 'Informação como poder',
    description: 'Muitas famílias desconhecem os direitos que já existem: avaliações pelo SUS, apoio escolar garantido por lei, acomodações razoáveis. Nosso papel é aproximar você dessas informações de forma clara e acessível.'
  },
  {
    icon: 'i-lucide-network',
    title: 'Rede de cuidado',
    description: 'Acreditamos numa rede — conectamos famílias a serviços públicos, CAPS, escolas e profissionais parceiros. Porque nenhuma família deveria navegar sozinha pelo sistema de saúde e educação.'
  }
]
</script>

<template>
  <section
    class="bg-cream py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Nossa visão de acesso"
  >
    <div class="max-w-7xl mx-auto">
      <div class="max-w-3xl mb-14">
        <EyebrowBadge text="✦ Nossa visão" />
        <SectionTitle
          title="Acesso vai além do preço"
          class="mt-4"
        />
        <p class="font-sans text-zinc-600 text-lg leading-relaxed mt-5">
          André e Carolina fundaram o sinapiticos com uma certeza: o que impede famílias de baixa renda de acessar cuidado especializado não é apenas o custo — é também a falta de informação sobre os direitos que já existem, e a ausência de quem as acompanhe nesse caminho.
        </p>
        <p class="font-sans text-zinc-600 text-lg leading-relaxed mt-3">
          Por isso, nossa ação social tem três pilares.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard
          v-for="pilar in pilares"
          :key="pilar.title"
          class="bg-white border-t-4 border-secondary-400 hover:-translate-y-1.5 transition-transform duration-200"
        >
          <div class="flex flex-col gap-4 py-2">
            <div class="p-3 bg-primary-50 rounded-xl w-fit">
              <UIcon
                :name="pilar.icon"
                class="text-primary-500 text-2xl"
              />
            </div>
            <h3 class="font-display font-extrabold text-primary-700 text-lg">
              {{ pilar.title }}
            </h3>
            <p class="font-sans text-zinc-500 leading-relaxed text-sm">
              {{ pilar.description }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
