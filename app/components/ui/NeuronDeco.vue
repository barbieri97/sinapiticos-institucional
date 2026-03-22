<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="neuron-pulse"
    :class="$props.class"
    aria-hidden="true"
  >
    <!-- Corpo do neurônio -->
    <circle
      cx="32"
      cy="32"
      r="10"
      fill="#1A7A8A"
    />
    <circle
      cx="32"
      cy="32"
      r="6"
      fill="#E8A020"
    />

    <!-- Dendrites / axônio -->
    <!-- Cima -->
    <line
      x1="32"
      y1="22"
      x2="32"
      y2="8"
      stroke="#1A7A8A"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <circle
      cx="32"
      cy="7"
      r="2.5"
      fill="#1A7A8A"
    />

    <!-- Cima-direita -->
    <line
      x1="39"
      y1="25"
      x2="50"
      y2="14"
      stroke="#1A7A8A"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle
      cx="51"
      cy="13"
      r="2"
      fill="#E8A020"
    />

    <!-- Direita -->
    <line
      x1="42"
      y1="32"
      x2="56"
      y2="32"
      stroke="#1A7A8A"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <circle
      cx="57"
      cy="32"
      r="2.5"
      fill="#1A7A8A"
    />

    <!-- Baixo-direita -->
    <line
      x1="39"
      y1="39"
      x2="50"
      y2="50"
      stroke="#1A7A8A"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle
      cx="51"
      cy="51"
      r="2"
      fill="#E8A020"
    />

    <!-- Baixo -->
    <line
      x1="32"
      y1="42"
      x2="32"
      y2="56"
      stroke="#1A7A8A"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <circle
      cx="32"
      cy="57"
      r="2.5"
      fill="#1A7A8A"
    />

    <!-- Esquerda -->
    <line
      x1="22"
      y1="32"
      x2="8"
      y2="32"
      stroke="#1A7A8A"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle
      cx="7"
      cy="32"
      r="2"
      fill="#E8A020"
    />

    <!-- Cima-esquerda -->
    <line
      x1="25"
      y1="25"
      x2="14"
      y2="14"
      stroke="#1A7A8A"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle
      cx="13"
      cy="13"
      r="2"
      fill="#E8A020"
    />

    <!-- Baixo-esquerda -->
    <line
      x1="25"
      y1="39"
      x2="14"
      y2="50"
      stroke="#1A7A8A"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle
      cx="13"
      cy="51"
      r="2"
      fill="#1A7A8A"
    />
  </svg>
</template>

<style scoped>
.neuron-pulse {
  animation: neuron-scale 3s ease-in-out infinite;
  transform-origin: center;
}

@keyframes neuron-scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
</style>
