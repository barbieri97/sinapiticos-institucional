<script setup lang="ts">
</script>

<template>
  <section
    class="bg-cream py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Nossa origem"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col gap-6">
          <EyebrowBadge text="✦ Como tudo começou" />
          <SectionTitle title="A nossa história" />
          <div class="flex flex-col gap-4 font-sans text-zinc-600 leading-relaxed">
            <p>
              André Barbieri e Carolina Teixeira são neuropsicólogos infantis — e parceiros. Juntos, perceberam que o modelo de atendimento que queriam oferecer ainda não existia: um lugar onde o rigor científico das técnicas fosse tão presente quanto o carinho com cada criança que cruzasse a porta.
            </p>
            <p>
              Assim nasceu o sinapiticos. Um nome que brinca com "sinápticos" — as conexões do cérebro — e com "piticos", o jeito carinhoso de se referir aos pequenos. Porque aqui, ciência e afeto não são opostos: são a mesma coisa.
            </p>
            <p>
              Cada avaliação, cada sessão, cada orientação é conduzida com a certeza de que por trás de cada criança existe uma família que merece respostas claras, cuidado verdadeiro e parceiros confiáveis nessa jornada.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <UButton
              to="/equipe"
              color="primary"
              variant="solid"
              size="md"
              icon="i-lucide-users"
            >
              Conheça a equipe
            </UButton>
            <UButton
              to="/contato"
              color="primary"
              variant="outline"
              size="md"
              icon="i-lucide-calendar"
            >
              Agendar consulta
            </UButton>
          </div>
        </div>

        <!-- Visual -->
        <div class="flex flex-col gap-4">
          <div class="bg-primary-500 rounded-2xl p-8 text-white">
            <UIcon
              name="i-lucide-quote"
              class="text-primary-200 text-4xl mb-4"
            />
            <p class="font-sans font-medium italic text-lg leading-relaxed text-primary-50">
              "Ciência e afeto não são opostos: são a mesma coisa."
            </p>
            <p class="font-display font-bold text-primary-200 text-sm mt-4">
              — André & Carolina, fundadores
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-2">
              <UIcon
                name="i-lucide-brain"
                class="text-primary-500 text-2xl"
              />
              <p class="font-display font-bold text-primary-700 text-sm">
                Rigor científico
              </p>
            </div>
            <div class="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-2">
              <UIcon
                name="i-lucide-heart"
                class="text-secondary-500 text-2xl"
              />
              <p class="font-display font-bold text-secondary-700 text-sm">
                Cuidado humano
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
