<script setup lang="ts">
const props = defineProps<{
  initCanvas: (canvas: HTMLCanvasElement) => void
  destroyCanvas: () => void
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvasRef.value) {
    props.initCanvas(canvasRef.value)
  }
})

onUnmounted(() => {
  props.destroyCanvas()
})
</script>

<template>
  <div class="canvas-wrapper rounded-2xl overflow-hidden">
    <canvas
      ref="canvasRef"
      class="w-full h-full block"
      aria-label="Animação interativa das fases da sinaptogênese neural"
      role="img"
    />
  </div>
</template>

<style scoped>
.canvas-wrapper {
  background-color: var(--color-primary-900);
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
