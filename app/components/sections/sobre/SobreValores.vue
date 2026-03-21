<script setup lang="ts">
const valores = [
  {
    icon: 'i-lucide-flask-conical',
    title: 'Ciência com carinho',
    description: 'O rigor das melhores evidências, entregue com acolhimento genuíno.',
  },
  {
    icon: 'i-lucide-ear',
    title: 'Escuta ativa',
    description: 'Cada criança e família têm uma história única que merece ser ouvida.',
  },
  {
    icon: 'i-lucide-unlock',
    title: 'Acesso como direito',
    description: 'Saúde mental infantil não é privilégio — é um direito de toda criança.',
  },
  {
    icon: 'i-lucide-message-circle',
    title: 'Transparência',
    description: 'Comunicamos de forma clara, sem jargão, o que fazemos e por quê.',
  },
  {
    icon: 'i-lucide-handshake',
    title: 'Parceria com a família',
    description: 'Pais e responsáveis são parte essencial do processo terapêutico.',
  },
]

const missaoVisao = [
  {
    icon: 'i-lucide-target',
    label: 'Missão',
    text: 'Oferecer atendimento neuropsicológico infantil de excelência científica, com cuidado humano genuíno — aproximando famílias do conhecimento e dos mecanismos que garantem os direitos das crianças ao desenvolvimento saudável.',
    color: 'bg-primary-50 border-primary-200',
    iconColor: 'text-primary-500',
  },
  {
    icon: 'i-lucide-telescope',
    label: 'Visão',
    text: 'Ser referência em neuropsicologia infantil, reconhecida tanto pelo rigor técnico-científico quanto pelo impacto social na comunidade.',
    color: 'bg-secondary-50 border-secondary-200',
    iconColor: 'text-secondary-500',
  },
]
</script>

<template>
  <section class="bg-white py-20 px-4 sm:px-6 lg:px-8" aria-label="Missão, visão e valores">
    <div class="max-w-7xl mx-auto flex flex-col gap-16">
      <!-- Missão e Visão -->
      <div>
        <div class="text-center mb-10">
          <EyebrowBadge text="✦ Por que existimos" />
          <SectionTitle title="Missão e Visão" centered class="mt-4" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in missaoVisao"
            :key="item.label"
            class="rounded-2xl border p-6 flex flex-col gap-4"
            :class="item.color"
          >
            <div class="flex items-center gap-2">
              <UIcon :name="item.icon" class="text-2xl" :class="item.iconColor" />
              <h3 class="font-display font-extrabold text-zinc-800 text-lg">{{ item.label }}</h3>
            </div>
            <p class="font-sans text-zinc-600 leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </div>

      <!-- Valores -->
      <div>
        <div class="text-center mb-10">
          <EyebrowBadge text="✦ O que nos guia" />
          <SectionTitle title="Nossos valores" centered class="mt-4" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <UCard
            v-for="valor in valores"
            :key="valor.title"
            class="bg-[#F5F0E8] border-t-4 border-secondary-400 hover:-translate-y-1.5 transition-transform duration-200 text-center"
          >
            <div class="flex flex-col items-center gap-3 py-2">
              <div class="p-3 bg-primary-100 rounded-xl">
                <UIcon :name="valor.icon" class="text-primary-500 text-2xl" />
              </div>
              <h3 class="font-display font-extrabold text-primary-700 text-sm">{{ valor.title }}</h3>
              <p class="font-sans text-zinc-500 text-xs leading-relaxed">{{ valor.description }}</p>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
