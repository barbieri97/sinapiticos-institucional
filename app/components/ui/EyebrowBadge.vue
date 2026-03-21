<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <UBadge
    color="secondary"
    variant="subtle"
    class="font-display font-bold uppercase tracking-widest text-xs rounded-full"
  >
    {{ text }}
  </UBadge>
</template>
