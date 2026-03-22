<script setup lang="ts">
const mascots = [
  {
    src: '/images/neuron.png',
    alt: 'Neuron, mascote do sinapiticos',
    name: 'Neuron',
    tagline: 'O veterano das sinapses',
    description: 'Pioneiro e fiel. Neuron está no instituto desde as primeiras conexões — literalmente: foi um dos primeiros formados na neurulação e jamais perdeu o seu posto. Tem um jeito sereno e organizado de encarar o mundo, mas quando a brincadeira chama, ele larga tudo e mergulha de cabeça. Firme em suas atitudes, mas sempre gentil. O tipo de neurônio que você quer ao seu lado.',
    cardClass: 'bg-primary-50 border border-primary-200',
    nameClass: 'text-primary-700',
    taglineClass: 'text-primary-500'
  },
  {
    src: '/images/dopa.png',
    alt: 'Dopa, mascote do sinapiticos',
    name: 'Dopa',
    tagline: 'A força do circuito dopaminérgico',
    description: 'Energia pura. O nome já entrega tudo: Dopa vem do circuito dopaminérgico — e a ação desse neurotransmissor define cada célula do seu ser. É a primeira a gritar "Vamos!" (geralmente já em movimento antes da resposta). Comunicativa, alegre e impossível de ignorar. Pode ficar hiperativa e um pouco impulsiva quando o circuito dispara forte — mas é exatamente esse alto astral que faz todo mundo amá-la.',
    cardClass: 'bg-secondary-50 border border-secondary-200',
    nameClass: 'text-secondary-700',
    taglineClass: 'text-secondary-500'
  }
]
</script>

<template>
  <section
    class="bg-white py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Nossos mascotes"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Intro -->
      <div class="text-center mb-12 flex flex-col items-center gap-4">
        <EyebrowBadge text="✦ Os piticos do sinapiticos" />
        <SectionTitle
          title="Conheça os nossos mascotes"
          centered
        />
        <p class="font-sans text-zinc-500 text-base leading-relaxed max-w-xl">
          Eles habitam o universo sinapiticos desde sempre — cada um à sua maneira. Neuron e Dopa são a cara e o coração do instituto.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <UCard
          v-for="mascot in mascots"
          :key="mascot.name"
          :class="[mascot.cardClass, 'hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg']"
        >
          <template #header>
            <div class="flex flex-col items-center gap-4 pt-4 pb-2">
              <NuxtImg
                :src="mascot.src"
                :alt="mascot.alt"
                loading="lazy"
                width="200"
                height="200"
                sizes="sm:160px md:200px"
                format="webp"
                quality="85"
                class="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-md"
              />
              <div class="text-center">
                <h3 :class="['font-display font-black text-2xl', mascot.nameClass]">
                  {{ mascot.name }}
                </h3>
                <p :class="['font-sans text-sm italic mt-1', mascot.taglineClass]">
                  {{ mascot.tagline }}
                </p>
              </div>
            </div>
          </template>
          <p class="font-sans text-zinc-600 text-sm leading-relaxed text-center pb-2">
            {{ mascot.description }}
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>
