<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'

// Os tipos de queryCollection são gerados em .nuxt/ após o primeiro `nuxt dev`.
/* eslint-disable @typescript-eslint/no-explicit-any */
const route = useRoute()
const slug = (route.params.slug as string[]).join('/')

const contentPath = `/blog/${slug}`

const { data: post } = await useAsyncData(`blog-${contentPath}`, () =>
  (queryCollection as any)('blog')
    .where('path', '=', contentPath)
    .first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post não encontrado' })
}

const postData = post.value as any

// Links externos: redirecionar diretamente
if (postData.category === 'link' && postData.externalUrl) {
  await navigateTo(postData.externalUrl, { external: true })
}

useHead({
  title: `${postData.title} — sinapiticos`,
  meta: [
    { name: 'description', content: postData.description }
  ]
})

const { labelCategoria } = useBlog()
</script>

<template>
  <main>
    <!-- Hero do post -->
    <section class="bg-primary-600 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto flex flex-col gap-4">
        <NuxtLink
          to="/blog"
          class="font-sans text-primary-200 hover:text-white text-sm transition-colors flex items-center gap-1 w-fit"
        >
          <UIcon
            name="i-lucide-arrow-left"
            class="text-sm"
          />
          Voltar ao blog
        </NuxtLink>

        <UBadge
          color="secondary"
          variant="subtle"
          class="font-display font-bold uppercase tracking-widest text-xs rounded-full w-fit"
        >
          {{ labelCategoria(postData.category) }}
        </UBadge>

        <h1
          class="font-display font-black text-3xl sm:text-4xl text-white leading-tight"
        >
          {{ postData.title }}
        </h1>
        <p class="font-sans text-primary-100 leading-relaxed">
          {{ postData.description }}
        </p>
      </div>
    </section>

    <!-- Conteúdo -->
    <section class="bg-cream py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <UCard class="bg-white">
          <div
            class="prose prose-zinc prose-headings:font-display prose-headings:font-extrabold prose-headings:text-primary-700 prose-a:text-primary-500 prose-strong:text-zinc-800 max-w-none p-2"
          >
            <ContentRenderer :value="postData" />
          </div>
        </UCard>

        <!-- Navegação -->
        <div
          class="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between"
        >
          <UButton
            to="/blog"
            color="primary"
            variant="outline"
            icon="i-lucide-arrow-left"
          >
            Ver todos os posts
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
