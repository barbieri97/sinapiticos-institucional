<script setup lang="ts">
const direitos = [
  {
    icon: 'i-lucide-stethoscope',
    titulo: 'Avaliação pelo SUS',
    texto: 'Toda criança tem direito à avaliação neuropsicológica pela rede pública de saúde, via encaminhamento médico para os CAPS ou Ambulatórios de Saúde Mental.',
    base: 'Lei 8.080/1990 — Lei Orgânica da Saúde'
  },
  {
    icon: 'i-lucide-school',
    titulo: 'Apoio escolar (AEE)',
    texto: 'Crianças com necessidades educacionais especiais têm direito ao Atendimento Educacional Especializado (AEE) na escola pública, sem custo e sem precisar de laudo prévio para solicitá-lo.',
    base: 'LBI — Lei 13.146/2015 e Decreto 7.611/2011'
  },
  {
    icon: 'i-lucide-file-check',
    titulo: 'Laudo e relatório escolar',
    texto: 'A escola é obrigada a adaptar o ensino para crianças com dificuldades documentadas. O relatório do neuropsicólogo é o instrumento que formaliza esse direito perante a instituição.',
    base: 'LDB — Lei 9.394/1996, Art. 59'
  },
  {
    icon: 'i-lucide-heart-pulse',
    titulo: 'Planos de saúde',
    texto: 'Planos de saúde são obrigados a cobrir avaliação neuropsicológica e psicoterapia infantil, conforme o rol de procedimentos obrigatórios da ANS. Se o seu plano nega, há mecanismos de contestação.',
    base: 'RN ANS 465/2021 e atualizações'
  }
]
</script>

<template>
  <section
    class="bg-white py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Direitos que você precisa conhecer"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <EyebrowBadge text="✦ Conhecimento é poder" />
        <SectionTitle
          title="Direitos que existem — e poucos conhecem"
          centered
          class="mt-4"
        />
        <p class="font-sans text-zinc-500 mt-3 max-w-2xl mx-auto">
          Antes de qualquer coisa, queremos que você saiba: existem mecanismos legais que garantem acesso ao cuidado especializado. Conheça seus direitos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="direito in direitos"
          :key="direito.titulo"
          class="flex gap-4 p-6 rounded-2xl bg-cream border border-primary-100"
        >
          <div class="p-3 bg-primary-100 rounded-xl h-fit shrink-0">
            <UIcon
              :name="direito.icon"
              class="text-primary-500 text-xl"
            />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-display font-extrabold text-primary-700 text-base">
              {{ direito.titulo }}
            </h3>
            <p class="font-sans text-zinc-600 text-sm leading-relaxed">
              {{ direito.texto }}
            </p>
            <span class="font-sans text-zinc-400 text-xs italic">{{ direito.base }}</span>
          </div>
        </div>
      </div>

      <div class="mt-10 p-6 rounded-2xl bg-secondary-50 border border-secondary-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <UIcon
          name="i-lucide-info"
          class="text-secondary-500 text-2xl shrink-0"
        />
        <p class="font-sans text-zinc-700 text-sm leading-relaxed">
          <strong class="font-display font-bold">Não sabe por onde começar?</strong>
          Parte do nosso trabalho de ação social é orientar famílias sobre esses caminhos.
          No cadastro abaixo, você pode nos contar sua situação e te ajudamos a mapear as opções disponíveis.
        </p>
      </div>
    </div>
  </section>
</template>
