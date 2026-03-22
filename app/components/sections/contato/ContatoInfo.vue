<script setup lang="ts">
const contact = useSiteContact()

const infos = [
  {
    icon: 'i-lucide-phone',
    label: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: contact.whatsappUrl,
    target: '_blank'
  },
  {
    icon: 'i-lucide-mail',
    label: 'E-mail',
    value: contact.email,
    href: contact.mailtoUrl,
    target: undefined
  },
  {
    icon: 'i-lucide-instagram',
    label: 'Instagram',
    value: contact.instagramHandle,
    href: contact.instagramUrl,
    target: '_blank'
  },
  {
    icon: 'i-lucide-map-pin',
    label: 'Localização',
    value: 'São Paulo, SP',
    href: undefined,
    target: undefined
  }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <EyebrowBadge text="✦ Como nos encontrar" />
      <h2 class="font-display font-extrabold text-2xl text-primary-700 mt-3">
        Informações de contato
      </h2>
    </div>

    <ul class="flex flex-col gap-4">
      <li
        v-for="info in infos"
        :key="info.label"
      >
        <component
          :is="info.href ? 'a' : 'div'"
          :href="info.href"
          :target="info.target"
          :rel="info.target === '_blank' ? 'noopener' : undefined"
          class="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary-100 hover:border-primary-300 transition-colors"
          :class="{ 'cursor-pointer hover:bg-primary-50': info.href }"
        >
          <div class="p-3 bg-primary-100 rounded-xl shrink-0">
            <UIcon
              :name="info.icon"
              class="text-primary-500 text-xl"
            />
          </div>
          <div>
            <p class="font-display font-bold text-xs text-zinc-400 uppercase tracking-widest">
              {{ info.label }}
            </p>
            <p class="font-sans text-zinc-700 font-medium">
              {{ info.value }}
            </p>
          </div>
        </component>
      </li>
    </ul>
  </div>
</template>
