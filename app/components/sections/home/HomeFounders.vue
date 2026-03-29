<script setup lang="ts">
</script>

<template>
  <section
    class="bg-white py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Os fundadores"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text -->
        <div class="flex flex-col gap-6">
          <EyebrowBadge text="✦ Quem somos" />
          <SectionTitle title="Fundados por amor à ciência e às crianças" />
          <p class="font-sans text-zinc-600 leading-relaxed">
            André Barbieri e Carolina Teixeira são neuropsicólogos infantis — e parceiros. Juntos, perceberam que o modelo de atendimento que queriam oferecer ainda não existia: um lugar onde o rigor científico fosse tão presente quanto o carinho com cada criança.
          </p>
          <p class="font-sans text-zinc-600 leading-relaxed">
            Assim nasceu o sinapiticos — um nome que brinca com "sinápticos", as conexões do cérebro, e com "piticos", o jeito carinhoso de se referir aos pequenos.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <UButton
              to="/sobre"
              color="primary"
              variant="outline"
              size="md"
            >
              Nossa história
            </UButton>
            <UButton
              to="/equipe"
              color="primary"
              variant="ghost"
              size="md"
            >
              Conheça a equipe
            </UButton>
          </div>
        </div>

        <!-- Founder cards -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col items-center gap-3 bg-primary-50 rounded-2xl p-6 text-center">
            <div class="w-20 h-20 rounded-full overflow-hidden">
              <NuxtImg
                src="/images/founders/andre.jpeg"
                alt="André Barbieri, Neuropsicólogo Infantil"
                loading="lazy"
                width="80"
                height="80"
                sizes="80px"
                class="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div>
              <p class="font-display font-extrabold text-primary-700 text-sm">
                André Barbieri
              </p>
              <p class="font-sans text-zinc-500 text-xs mt-1">
                Neuropsicólogo Infantil
              </p>
              <NuxtLink
                to="https://instagram.com/barbieri.psi"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-1 font-sans text-xs text-zinc-400 hover:text-primary-500 transition-colors mt-1"
              >
                <UIcon name="i-lucide-instagram" class="text-sm" />
                @barbieri.psi
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col items-center gap-3 bg-secondary-50 rounded-2xl p-6 text-center">
            <div class="w-20 h-20 rounded-full overflow-hidden">
              <NuxtImg
                src="/images/founders/carol.jpeg"
                alt="Carolina Teixeira, Neuropsicóloga Infantil"
                loading="lazy"
                width="80"
                height="80"
                sizes="80px"
                class="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div>
              <p class="font-display font-extrabold text-secondary-700 text-sm">
                Carolina Teixeira
              </p>
              <p class="font-sans text-zinc-500 text-xs mt-1">
                Neuropsicóloga Infantil
              </p>
              <NuxtLink
                to="https://instagram.com/psicarolinateixeira"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-1 font-sans text-xs text-zinc-400 hover:text-secondary-500 transition-colors mt-1"
              >
                <UIcon name="i-lucide-instagram" class="text-sm" />
                @psicarolinateixeira
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
