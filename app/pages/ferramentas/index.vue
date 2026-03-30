<script setup lang="ts">
import { useFerramentas } from '~/composables/useFerramentas'

useHead({
  title: 'Ferramentas interativas — sinapiticos',
  meta: [
    {
      name: 'description',
      content:
        'Ferramentas desenvolvidas pelo sinapiticos para facilitar o dia a dia de famílias, educadores e profissionais — gratuitas e sem cadastro.'
    }
  ]
})

const ferramentas = useFerramentas()
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Ferramentas interativas"
    >
      <div
        class="max-w-4xl mx-auto text-center flex flex-col items-center gap-5"
      >
        <EyebrowBadge text="✦ Dentro do sinapiticos" />
        <h1
          class="font-display font-black text-4xl sm:text-5xl text-white leading-tight"
        >
          Ferramentas interativas<br>
          <span class="text-secondary-300">para o seu dia a dia</span>
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Ferramentas desenvolvidas por nós para facilitar o seu dia a dia —
          disponíveis gratuitamente, sem cadastro.
        </p>
      </div>
    </section>

    <!-- Grid de ferramentas -->
    <section
      class="bg-cream py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Lista de ferramentas"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between gap-4 mb-10">
          <div>
            <SectionTitle title="Ferramentas disponíveis" />
            <p class="font-sans text-zinc-500 mt-3 max-w-xl">
              Calculadoras, checklists e guias interativos desenvolvidos pelos
              nossos especialistas — gratuitos e sem cadastro.
            </p>
          </div>
          <UBadge
            color="secondary"
            variant="subtle"
            class="font-display font-bold text-xs uppercase tracking-widest rounded-full h-fit whitespace-nowrap shrink-0"
          >
            Em desenvolvimento
          </UBadge>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <UCard
            v-for="ferramenta in ferramentas"
            :key="ferramenta.title"
            class="bg-white border border-zinc-100 flex flex-col"
          >
            <div class="flex flex-col gap-4 h-full">
              <div class="flex items-start justify-between gap-2">
                <div class="p-3 bg-primary-50 rounded-xl">
                  <UIcon
                    :name="ferramenta.icon"
                    class="text-primary-500 text-2xl"
                  />
                </div>
                <UBadge
                  v-if="ferramenta.status === 'soon'"
                  color="secondary"
                  variant="subtle"
                  size="xs"
                  class="rounded-full font-display font-bold text-[10px] uppercase tracking-wide shrink-0"
                >
                  Em breve
                </UBadge>
                <UBadge
                  v-else
                  color="primary"
                  variant="subtle"
                  size="xs"
                  class="rounded-full font-display font-bold text-[10px] uppercase tracking-wide shrink-0"
                >
                  Disponível
                </UBadge>
              </div>

              <div class="flex flex-col gap-2 flex-1">
                <h3
                  class="font-display font-extrabold text-primary-700 text-base"
                >
                  {{ ferramenta.title }}
                </h3>
                <p class="font-sans text-zinc-500 text-sm leading-relaxed">
                  {{ ferramenta.description }}
                </p>
              </div>

              <UButton
                v-if="ferramenta.status === 'soon'"
                color="primary"
                variant="ghost"
                size="sm"
                disabled
                icon="i-lucide-clock"
                class="w-full justify-center opacity-50"
              >
                Em breve
              </UButton>
              <UButton
                v-else
                :to="`/ferramentas/${ferramenta.slug}`"
                color="primary"
                variant="solid"
                size="sm"
                trailing-icon="i-lucide-arrow-right"
                class="w-full justify-center"
              >
                Acessar ferramenta
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div
          class="bg-primary-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
        >
          <div class="p-4 bg-primary-100 rounded-xl shrink-0">
            <UIcon
              name="i-lucide-lightbulb"
              class="text-primary-500 text-3xl"
            />
          </div>
          <div class="flex-1">
            <h3 class="font-display font-extrabold text-primary-700 text-lg">
              Tem uma sugestão de ferramenta?
            </h3>
            <p class="font-sans text-zinc-500 text-sm mt-1">
              Nos conte qual ferramenta seria mais útil para você — estamos
              sempre desenvolvendo novas funcionalidades.
            </p>
          </div>
          <UButton
            to="/contato"
            color="primary"
            variant="solid"
            size="lg"
            class="shrink-0"
            icon="i-lucide-mail"
          >
            Sugerir ferramenta
          </UButton>
        </div>
      </div>
    </section>
  </main>
</template>
