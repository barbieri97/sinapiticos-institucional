<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  reverse?: boolean
}>()
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8" :class="reverse ? 'bg-white' : 'bg-[#F5F0E8]'" aria-label="Serviço">
    <div class="max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        :class="{ 'lg:flex-row-reverse': reverse }"
      >
        <!-- Icon visual (order swaps on reverse) -->
        <div
          class="flex items-center justify-center"
          :class="reverse ? 'lg:order-2' : 'lg:order-1'"
        >
          <div class="bg-primary-100 rounded-3xl p-16 flex items-center justify-center">
            <UIcon :name="icon" class="text-primary-500 text-8xl" />
          </div>
        </div>

        <!-- Content -->
        <div
          class="flex flex-col gap-5"
          :class="reverse ? 'lg:order-1' : 'lg:order-2'"
        >
          <div class="p-4 bg-primary-100 rounded-2xl w-fit">
            <UIcon :name="icon" class="text-primary-500 text-3xl" />
          </div>
          <h2 class="font-display font-extrabold text-3xl text-primary-700">{{ title }}</h2>
          <p class="font-sans text-zinc-600 text-lg leading-relaxed">{{ description }}</p>
          <UButton
            to="/contato"
            color="primary"
            variant="solid"
            size="lg"
            icon="i-lucide-calendar"
            class="w-fit"
          >
            Agendar consulta
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
