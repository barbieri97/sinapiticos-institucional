<script setup lang="ts">
useHead({
  title: "Recursos gratuitos — sinapiticos",
  meta: [
    {
      name: "description",
      content:
        "Ferramentas interativas, artigos, guias e links úteis para famílias, educadores e profissionais de saúde — tudo gratuito.",
    },
  ],
});

// ── Ferramentas web (internas — em desenvolvimento) ─────────────────────────
const ferramentas = [
  {
    icon: "i-lucide-calculator",
    title: "Calculadora de Idade Cronológica",
    description:
      "Calcule a idade exata da criança em anos, meses e dias — útil para relatórios e laudos que exigem precisão.",
    status: "soon" as const,
  },
  {
    icon: "i-lucide-list-checks",
    title: "Checklist de Marcos de Desenvolvimento",
    description:
      "Verifique se a criança está atingindo os marcos esperados para a idade em áreas como linguagem, motricidade e cognição.",
    status: "soon" as const,
  },
  {
    icon: "i-lucide-graduation-cap",
    title: "Meus Direitos na Escola",
    description:
      "Guia interativo: informe a condição da criança e descubra quais adaptações e apoios a escola é obrigada por lei a oferecer.",
    status: "soon" as const,
  },
  {
    icon: "i-lucide-map-pin",
    title: "Localizador de CAPS Infanto-Juvenil",
    description:
      "Encontre o Centro de Atenção Psicossocial Infanto-Juvenil mais próximo da sua região para atendimento pelo SUS.",
    status: "soon" as const,
  },
];

// ── Conteúdo via @nuxt/content ───────────────────────────────────────────────
const categorias = [
  { key: "todos", label: "Todos", icon: "i-lucide-layout-grid" },
  { key: "artigo", label: "Artigos", icon: "i-lucide-book-open" },
  { key: "guia", label: "Guias", icon: "i-lucide-scroll-text" },
  { key: "link", label: "Links úteis", icon: "i-lucide-link" },
];

// Os tipos de queryCollection são gerados em .nuxt/ após o primeiro `nuxt dev`.
interface Recurso {
  path: string;
  title: string;
  description: string;
  category: "artigo" | "guia" | "link";
  date: string;
  icon?: string;
  externalUrl?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const { data: recursosRaw } = await useAsyncData("recursos", () =>
  (queryCollection as any)("recursos").all(),
);
const recursos = computed<Recurso[]>(() =>
  ((recursosRaw.value ?? []) as Recurso[]).sort((a, b) =>
    b.date.localeCompare(a.date),
  ),
);

const categoriaAtiva = ref("todos");

const recursosFiltrados = computed<Recurso[]>(() => {
  if (categoriaAtiva.value === "todos") return recursos.value;
  return recursos.value.filter((r) => r.category === categoriaAtiva.value);
});

function labelCategoria(cat: string) {
  const map: Record<string, string> = {
    artigo: "Artigo",
    guia: "Guia",
    link: "Link útil",
  };
  return map[cat] ?? cat;
}

function iconCategoria(cat: string) {
  const map: Record<string, string> = {
    artigo: "i-lucide-book-open",
    guia: "i-lucide-scroll-text",
    link: "i-lucide-link",
  };
  return map[cat] ?? "i-lucide-file";
}

function recursoLink(recurso: Recurso): string {
  const relativePath = recurso.path.startsWith("/recursos")
    ? recurso.path.slice("/recursos".length)
    : recurso.path;
  return `/recurso${relativePath}`;
}
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Recursos gratuitos"
    >
      <div
        class="max-w-4xl mx-auto text-center flex flex-col items-center gap-5"
      >
        <EyebrowBadge text="✦ Para você" />
        <h1
          class="font-display font-black text-4xl sm:text-5xl text-white leading-tight"
        >
          Recursos gratuitos<br />
          <span class="text-secondary-300">para famílias e profissionais</span>
        </h1>
        <p class="font-sans text-primary-100 text-lg leading-relaxed max-w-2xl">
          Ferramentas interativas e uma biblioteca de artigos, guias e links —
          porque acesso à informação de qualidade não deveria ter barreiras.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         BLOCO 1 — FERRAMENTAS INTERATIVAS
    ════════════════════════════════════════════════════ -->
    <section
      class="bg-cream py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Ferramentas interativas"
    >
      <div class="max-w-7xl mx-auto">
        <!-- Cabeçalho do bloco -->
        <div
          class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <EyebrowBadge text="✦ Dentro do sinapiticos" />
            <SectionTitle title="Ferramentas interativas" class="mt-4" />
            <p class="font-sans text-zinc-500 mt-3 max-w-xl">
              Ferramentas desenvolvidas por nós para facilitar o seu dia a dia —
              disponíveis gratuitamente, sem cadastro.
            </p>
          </div>
          <UBadge
            color="secondary"
            variant="subtle"
            class="font-display font-bold text-xs uppercase tracking-widest rounded-full h-fit whitespace-nowrap"
          >
            Em desenvolvimento
          </UBadge>
        </div>

        <!-- Grid de ferramentas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  color="secondary"
                  variant="subtle"
                  size="xs"
                  class="rounded-full font-display font-bold text-[10px] uppercase tracking-wide shrink-0"
                >
                  Em breve
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
                color="primary"
                variant="ghost"
                size="sm"
                disabled
                icon="i-lucide-clock"
                class="w-full justify-center opacity-50"
              >
                Em breve
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         BLOCO 2 — BIBLIOTECA DE CONTEÚDO
    ════════════════════════════════════════════════════ -->
    <section
      class="bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Biblioteca de recursos"
    >
      <div class="max-w-7xl mx-auto">
        <!-- Cabeçalho do bloco -->
        <div class="text-center mb-10">
          <EyebrowBadge text="✦ Leve para casa" />
          <SectionTitle
            title="Biblioteca de recursos gratuitos"
            centered
            class="mt-4"
          />
          <p class="font-sans text-zinc-500 mt-3 max-w-xl mx-auto">
            Artigos, guias em PDF e links úteis — produzidos ou selecionados com
            cuidado pela nossa equipe.
          </p>
        </div>

        <!-- Filtro por categoria -->
        <div class="flex flex-wrap gap-2 justify-center mb-10">
          <UButton
            v-for="cat in categorias"
            :key="cat.key"
            :color="categoriaAtiva === cat.key ? 'primary' : 'neutral'"
            :variant="categoriaAtiva === cat.key ? 'solid' : 'ghost'"
            :icon="cat.icon"
            size="sm"
            class="rounded-full"
            @click="categoriaAtiva = cat.key"
          >
            {{ cat.label }}
          </UButton>
        </div>

        <!-- Grid de conteúdo -->
        <div
          v-if="recursosFiltrados.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <template v-for="recurso in recursosFiltrados" :key="recurso.path">
            <!-- Link externo (category: link) -->
            <a
              v-if="recurso.category === 'link' && recurso.externalUrl"
              :href="recurso.externalUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <UCard
                class="bg-cream hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg hover:shadow-primary-500/10 h-full border-l-4 border-secondary-400"
              >
                <div class="flex flex-col gap-3 h-full">
                  <div class="flex items-center gap-2">
                    <div class="p-2 bg-primary-100 rounded-lg">
                      <UIcon
                        :name="recurso.icon ?? iconCategoria(recurso.category)"
                        class="text-primary-500 text-lg"
                      />
                    </div>
                    <UBadge
                      color="secondary"
                      variant="subtle"
                      size="xs"
                      class="rounded-full font-display font-bold uppercase tracking-wide text-[10px]"
                    >
                      {{ labelCategoria(recurso.category) }}
                    </UBadge>
                  </div>

                  <div class="flex flex-col gap-1.5 flex-1">
                    <h3
                      class="font-display font-extrabold text-primary-700 text-base group-hover:text-primary-500 transition-colors leading-snug"
                    >
                      {{ recurso.title }}
                    </h3>
                    <p class="font-sans text-zinc-500 text-sm leading-relaxed">
                      {{ recurso.description }}
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

            <!-- Link interno (artigo ou guia) -->
            <NuxtLink
              v-else
              :to="recursoLink(recurso)"
              class="group"
            >
              <UCard
                class="bg-cream hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg hover:shadow-primary-500/10 h-full border-l-4 border-secondary-400"
              >
                <div class="flex flex-col gap-3 h-full">
                  <div class="flex items-center gap-2">
                    <div class="p-2 bg-primary-100 rounded-lg">
                      <UIcon
                        :name="recurso.icon ?? iconCategoria(recurso.category)"
                        class="text-primary-500 text-lg"
                      />
                    </div>
                    <UBadge
                      color="secondary"
                      variant="subtle"
                      size="xs"
                      class="rounded-full font-display font-bold uppercase tracking-wide text-[10px]"
                    >
                      {{ labelCategoria(recurso.category) }}
                    </UBadge>
                  </div>

                  <div class="flex flex-col gap-1.5 flex-1">
                    <h3
                      class="font-display font-extrabold text-primary-700 text-base group-hover:text-primary-500 transition-colors leading-snug"
                    >
                      {{ recurso.title }}
                    </h3>
                    <p class="font-sans text-zinc-500 text-sm leading-relaxed">
                      {{ recurso.description }}
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
            Nenhum recurso nesta categoria ainda
          </p>
          <p class="font-sans text-zinc-400 text-sm">
            Estamos produzindo novos conteúdos — volte em breve!
          </p>
        </div>

        <!-- CTA para sugestões -->
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
