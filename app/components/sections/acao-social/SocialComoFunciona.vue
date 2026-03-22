<script setup lang="ts">
const etapas = [
  {
    numero: '01',
    titulo: 'Preencha o cadastro',
    descricao: 'Conte-nos sobre a criança, a família e o motivo da busca por atendimento. Todas as informações são confidenciais.',
  },
  {
    numero: '02',
    titulo: 'Contato da nossa equipe',
    descricao: 'Entraremos em contato em até 5 dias úteis para uma conversa inicial sem compromisso e sem custo.',
  },
  {
    numero: '03',
    titulo: 'Avaliação de elegibilidade',
    descricao: 'Conversaremos sobre a situação socioeconômica e as necessidades da criança para definir juntos o melhor caminho.',
  },
  {
    numero: '04',
    titulo: 'Início do acompanhamento',
    descricao: 'Se elegível para a vaga social, o atendimento começa com o mesmo rigor e cuidado de todos os atendimentos do sinapiticos.',
  },
]
</script>

<template>
  <section class="bg-primary-500 py-20 px-4 sm:px-6 lg:px-8" aria-label="Como funciona">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <EyebrowBadge text="✦ O processo" />
        <h2 class="font-display font-black text-3xl sm:text-4xl text-white leading-tight mt-4">
          Como funciona o programa social
        </h2>
        <p class="font-sans text-primary-100 mt-3 max-w-xl mx-auto">
          Um processo simples, transparente e respeitoso — porque sua família merece ser tratada com dignidade em cada etapa.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="etapa in etapas"
          :key="etapa.numero"
          class="bg-white/10 backdrop-blur rounded-2xl p-6 flex flex-col gap-3 border border-white/20"
        >
          <span class="font-display font-black text-4xl text-secondary-300 leading-none">{{ etapa.numero }}</span>
          <h3 class="font-display font-extrabold text-white text-base">{{ etapa.titulo }}</h3>
          <p class="font-sans text-primary-100 text-sm leading-relaxed">{{ etapa.descricao }}</p>
        </div>
      </div>

      <div class="mt-10 text-center">
        <p class="font-sans text-primary-200 text-sm">
          As vagas sociais são limitadas e renovadas periodicamente. O cadastro não garante vaga, mas garante que entraremos em contato.
        </p>
      </div>
    </div>
  </section>
</template>
