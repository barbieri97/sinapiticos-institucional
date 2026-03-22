<script setup lang="ts">
import { useBlog } from "~/composables/useBlog";

useHead({
  title: "Blog — sinapiticos",
  meta: [
    {
      name: "description",
      content:
        "Artigos, guias e links úteis sobre neuropsicologia infantil, desenvolvimento e direitos das crianças — produzidos com cuidado pela nossa equipe.",
    },
  ],
});

const {
  categorias,
  categoriaAtiva,
  postsFiltrados,
  labelCategoria,
  iconCategoria,
  postLink,
} = useBlog();
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Blog sinapiticos"
    >
      <div
        class="max-w-4xl mx-auto text-center flex flex-col items-center gap-5"
      >
        <EyebrowBadge text="✦ Leve para casa" />
        <h1
          class="font-display font-black text-4xl sm:text-5xl text-white leading-tight"
        >
          Conteúdo gratuito<br />
          <span class="text-secondary-300">para famílias e profissionais</span>
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Artigos, guias e links úteis — produzidos ou selecionados com cuidado
          pela nossa equipe porque acesso à informação de qualidade não deveria
          ter barreiras.
        </p>
      </div>
    </section>

    <!-- Conteúdo -->
    <section
      class="bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Biblioteca de conteúdo"
    >
      <div class="max-w-7xl mx-auto">
        <!-- Filtro dinâmico por categoria -->
        <div class="flex flex-wrap gap-2 justify-center mb-10">
          <UButton
            :color="categoriaAtiva === 'todos' ? 'primary' : 'neutral'"
            :variant="categoriaAtiva === 'todos' ? 'solid' : 'ghost'"
            icon="i-lucide-layout-grid"
            size="sm"
            class="rounded-full"
            @click="categoriaAtiva = 'todos'"
          >
            Todos
          </UButton>
          <UButton
            v-for="cat in categorias"
            :key="cat"
            :color="categoriaAtiva === cat ? 'primary' : 'neutral'"
            :variant="categoriaAtiva === cat ? 'solid' : 'ghost'"
            :icon="iconCategoria(cat)"
            size="sm"
            class="rounded-full"
            @click="categoriaAtiva = cat"
          >
            {{ labelCategoria(cat) }}
          </UButton>
        </div>

        <!-- Grid de posts -->
        <div
          v-if="postsFiltrados.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <template v-for="post in postsFiltrados" :key="post.path">
            <!-- Link externo -->
            <a
              v-if="post.category === 'link' && post.externalUrl"
              :href="post.externalUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <UCard
                class="bg-[#F5F0E8] hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg hover:shadow-primary-500/10 h-full border-l-4 border-secondary-400"
              >
                <div class="flex flex-col gap-3 h-full">
                  <div class="flex items-center gap-2">
                    <div class="p-2 bg-primary-100 rounded-lg">
                      <UIcon
                        :name="post.icon ?? iconCategoria(post.category)"
                        class="text-primary-500 text-lg"
                      />
                    </div>
                    <UBadge
                      color="secondary"
                      variant="subtle"
                      size="xs"
                      class="rounded-full font-display font-bold uppercase tracking-wide text-[10px]"
                    >
                      {{ labelCategoria(post.category) }}
                    </UBadge>
                  </div>

                  <div class="flex flex-col gap-1.5 flex-1">
                    <h3
                      class="font-display font-extrabold text-primary-700 text-base group-hover:text-primary-500 transition-colors leading-snug"
                    >
                      {{ post.title }}
                    </h3>
                    <p class="font-sans text-zinc-500 text-sm leading-relaxed">
                      {{ post.description }}
                    </p>
                  </div>

                  <div
                    class="flex items-center gap-1 text-primary-500 text-sm font-display font-bold"
                  >
                    <span>Acessar</span>
                    <UIcon
                      name="i-lucide-external-link"
                      class="text-sm group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </UCard>
            </a>

            <!-- Link interno -->
            <NuxtLink v-else :to="postLink(post)" class="group">
              <UCard
                class="bg-[#F5F0E8] hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg hover:shadow-primary-500/10 h-full border-l-4 border-secondary-400"
              >
                <div class="flex flex-col gap-3 h-full">
                  <div class="flex items-center gap-2">
                    <div class="p-2 bg-primary-100 rounded-lg">
                      <UIcon
                        :name="post.icon ?? iconCategoria(post.category)"
                        class="text-primary-500 text-lg"
                      />
                    </div>
                    <UBadge
                      color="secondary"
                      variant="subtle"
                      size="xs"
                      class="rounded-full font-display font-bold uppercase tracking-wide text-[10px]"
                    >
                      {{ labelCategoria(post.category) }}
                    </UBadge>
                  </div>

                  <div class="flex flex-col gap-1.5 flex-1">
                    <h3
                      class="font-display font-extrabold text-primary-700 text-base group-hover:text-primary-500 transition-colors leading-snug"
                    >
                      {{ post.title }}
                    </h3>
                    <p class="font-sans text-zinc-500 text-sm leading-relaxed">
                      {{ post.description }}
                    </p>
                  </div>

                  <div
                    class="flex items-center gap-1 text-primary-500 text-sm font-display font-bold"
                  >
                    <span>Ler</span>
                    <UIcon
                      name="i-lucide-arrow-right"
                      class="text-sm group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </UCard>
            </NuxtLink>
          </template>
        </div>

        <!-- Estado vazio -->
        <div v-else class="text-center py-16 flex flex-col items-center gap-4">
          <div class="p-4 bg-primary-50 rounded-full">
            <UIcon
              name="i-lucide-library-big"
              class="text-primary-300 text-4xl"
            />
          </div>
          <p class="font-display font-bold text-zinc-400 text-lg">
            Nenhum conteúdo nesta categoria ainda
          </p>
          <p class="font-sans text-zinc-400 text-sm">
            Estamos produzindo novos conteúdos — volte em breve!
          </p>
        </div>

        <!-- CTA -->
        <div
          class="mt-16 bg-primary-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
        >
          <div class="p-4 bg-primary-100 rounded-xl shrink-0">
            <UIcon
              name="i-lucide-lightbulb"
              class="text-primary-500 text-3xl"
            />
          </div>
          <div class="flex-1">
            <h3 class="font-display font-extrabold text-primary-700 text-lg">
              Tem uma sugestão de conteúdo?
            </h3>
            <p class="font-sans text-zinc-500 text-sm mt-1">
              Nos conte que tipo de recurso seria mais útil para você — artigo,
              guia ou ferramenta.
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
            Sugerir conteúdo
          </UButton>
        </div>
      </div>
    </section>
  </main>
</template>
