<script setup lang="ts">
defineProps<{
  title: string
  centered?: boolean
}>()
</script>

<template>
  <h2
    class="font-display font-extrabold text-primary-600 text-3xl lg:text-4xl section-title-underline"
    :class="{ centered: centered }"
  >
    {{ title }}
  </h2>
</template>
