<script setup lang="ts">
defineProps<{
  nome: string
  cargo: string
  formacao: string
  frase: string
  imageSrc?: string
  color?: 'primary' | 'secondary'
}>()
</script>

<template>
  <UCard class="hover:-translate-y-1.5 transition-transform duration-200 hover:shadow-lg hover:shadow-primary-500/10">
    <div class="flex flex-col items-center gap-5 py-4 text-center">
      <!-- Foto ou placeholder -->
      <div
        class="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden"
        :class="color === 'secondary' ? 'bg-secondary-100' : 'bg-primary-100'"
      >
        <NuxtImg
          v-if="imageSrc"
          :src="imageSrc"
          :alt="`${nome}, ${cargo}`"
          loading="lazy"
          width="128"
          height="128"
          sizes="128px"
          class="rounded-full object-cover w-full h-full"
          :modifiers="({ fit: 'cover', gravity: 'face' } as Record<string, string>)"
        />
        <UIcon
          v-else
          name="i-lucide-user-round"
          class="text-5xl"
          :class="color === 'secondary' ? 'text-secondary-400' : 'text-primary-400'"
        />
      </div>

      <!-- Info -->
      <div class="flex flex-col gap-1">
        <h3 class="font-display font-extrabold text-xl" :class="color === 'secondary' ? 'text-secondary-700' : 'text-primary-700'">
          {{ nome }}
        </h3>
        <p class="font-display font-bold text-sm text-zinc-500 uppercase tracking-widest">{{ cargo }}</p>
      </div>

      <!-- Formação -->
      <p class="font-sans text-sm text-zinc-500 leading-relaxed">{{ formacao }}</p>

      <!-- Frase pessoal -->
      <blockquote class="border-l-4 border-secondary-400 pl-4 text-left">
        <p class="font-sans font-medium italic text-zinc-600 text-sm leading-relaxed">
          "{{ frase }}"
        </p>
      </blockquote>
    </div>
  </UCard>
</template>
