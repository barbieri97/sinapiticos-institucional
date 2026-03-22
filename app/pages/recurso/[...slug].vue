<script setup lang="ts">
// Os tipos de queryCollection são gerados em .nuxt/ após o primeiro `nuxt dev`.
/* eslint-disable @typescript-eslint/no-explicit-any */
const route = useRoute()
const slug = (route.params.slug as string[]).join('/')

// O content path é sempre /recursos/<slug> — independente da rota /recurso/<slug>
const contentPath = `/recursos/${slug}`

const { data: recurso } = await useAsyncData(`recurso-${contentPath}`, () =>
  (queryCollection as any)('recursos')
    .where('path', '=', contentPath)
    .first()
)

if (!recurso.value) {
  throw createError({ statusCode: 404, statusMessage: 'Recurso não encontrado' })
}

const recursoData = recurso.value as any

// Links externos: redirecionar diretamente
if (recursoData.category === 'link' && recursoData.externalUrl) {
  await navigateTo(recursoData.externalUrl, { external: true })
}

useHead({
  title: `${recursoData.title} — sinapiticos`,
  meta: [
    { name: 'description', content: recursoData.description },
  ],
})

function labelCategoria(cat: string) {
  const map: Record<string, string> = { artigo: 'Artigo', guia: 'Guia', link: 'Link útil' }
  return map[cat] ?? cat
}
</script>

<template>
  <main>
    <!-- Hero do recurso -->
    <section class="bg-primary-600 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <NuxtLink to="/recursos" class="font-sans text-primary-200 hover:text-white text-sm transition-colors flex items-center gap-1">
            <UIcon name="i-lucide-arrow-left" class="text-sm" />
            Todos os recursos
          </NuxtLink>
        </div>

        <UBadge
          color="secondary"
          variant="subtle"
          class="font-display font-bold uppercase tracking-widest text-xs rounded-full w-fit"
        >
          {{ labelCategoria(recursoData.category) }}
        </UBadge>

        <h1 class="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
          {{ recursoData.title }}
        </h1>
        <p class="font-sans text-primary-100 leading-relaxed">{{ recursoData.description }}</p>
      </div>
    </section>

    <!-- Conteúdo -->
    <section class="bg-cream py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <UCard class="bg-white">
          <div class="prose prose-zinc prose-headings:font-display prose-headings:font-extrabold prose-headings:text-primary-700 prose-a:text-primary-500 prose-strong:text-zinc-800 max-w-none p-2">
            <ContentRenderer :value="recursoData" />
          </div>
        </UCard>

        <!-- Navegação de volta -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <UButton
            to="/recursos"
            color="primary"
            variant="outline"
            icon="i-lucide-arrow-left"
          >
            Ver todos os recursos
          </UButton>
          <UButton
            to="/contato"
            color="primary"
            variant="ghost"
            icon="i-lucide-calendar"
          >
            Agendar avaliação
          </UButton>
        </div>
      </div>
    </section>
  </main>
</template>
