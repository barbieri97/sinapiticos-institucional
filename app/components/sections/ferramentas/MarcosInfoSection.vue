<script setup lang="ts">
// Static informational content — no props needed
</script>

<template>
  <div class="flex flex-col gap-6">
    <SectionTitle title="Sobre esta ferramenta" />

    <!-- Info cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-primary-50 rounded-2xl p-5 border border-primary-100 flex gap-4">
        <div class="p-2 bg-primary-100 rounded-xl shrink-0 h-fit">
          <UIcon name="i-lucide-shield-check" class="text-primary-500 text-xl" />
        </div>
        <div>
          <h4 class="font-display font-extrabold text-primary-700 text-sm">Base Científica</h4>
          <p class="font-sans text-zinc-600 text-sm leading-relaxed mt-1">
            Baseado nos marcos revisados do CDC (Centers for Disease Control) e da AAP
            (American Academy of Pediatrics) — as referências científicas mais sólidas
            em vigilância do desenvolvimento infantil.
          </p>
        </div>
      </div>

      <div class="bg-secondary-50 rounded-2xl p-5 border border-secondary-100 flex gap-4">
        <div class="p-2 bg-secondary-100 rounded-xl shrink-0 h-fit">
          <UIcon name="i-lucide-percent" class="text-secondary-600 text-xl" />
        </div>
        <div>
          <h4 class="font-display font-extrabold text-secondary-700 text-sm">Critério dos 75%</h4>
          <p class="font-sans text-zinc-600 text-sm leading-relaxed mt-1">
            Cada marco listado é uma habilidade que pelo menos 75% das crianças
            já apresentam naquela faixa etária — uma referência mais exigente do que
            usar a mediana, o que aumenta a sensibilidade para identificar atrasos.
          </p>
        </div>
      </div>

      <div class="bg-violet-50 rounded-2xl p-5 border border-violet-100 flex gap-4">
        <div class="p-2 bg-violet-100 rounded-xl shrink-0 h-fit">
          <UIcon name="i-lucide-layers" class="text-violet-500 text-xl" />
        </div>
        <div>
          <h4 class="font-display font-extrabold text-violet-700 text-sm">4 Domínios do Desenvolvimento</h4>
          <p class="font-sans text-zinc-600 text-sm leading-relaxed mt-1">
            Os marcos são organizados em <strong>Social-Emocional, Linguagem,
            Cognitivo</strong> e <strong>Motor</strong> — facilitando a vigilância
            em áreas distintas do desenvolvimento infantil.
          </p>
        </div>
      </div>

      <div class="bg-blue-50 rounded-2xl p-5 border border-blue-100 flex gap-4">
        <div class="p-2 bg-blue-100 rounded-xl shrink-0 h-fit">
          <UIcon name="i-lucide-eye" class="text-blue-500 text-xl" />
        </div>
        <div>
          <h4 class="font-display font-extrabold text-blue-700 text-sm">Contexto Antes e Depois</h4>
          <p class="font-sans text-zinc-600 text-sm leading-relaxed mt-1">
            Além dos marcos da faixa selecionada, exibimos habilidades da etapa
            anterior e da próxima — para você entender o continuum do desenvolvimento
            e o que a criança já conquistou ou está prestes a alcançar.
          </p>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="bg-amber-50 rounded-2xl p-5 border border-amber-200 flex gap-4">
      <UIcon name="i-lucide-triangle-alert" class="text-amber-500 text-xl shrink-0 mt-0.5" />
      <p class="font-sans text-sm text-zinc-700 leading-relaxed">
        <strong class="font-display font-bold">Importante:</strong> Esta ferramenta
        é educativa e <strong>não substitui avaliação profissional</strong>. Se você
        tiver dúvidas sobre o desenvolvimento do seu filho, consulte um neuropsicólogo
        infantil ou pediatra. Não atingir um marco não é diagnóstico — é um sinal
        de atenção para conversar com um especialista.
      </p>
    </div>

    <!-- References -->
    <div>
      <h4 class="font-display font-bold text-xs text-zinc-400 uppercase tracking-widest mb-3">
        Referências
      </h4>
      <ul class="flex flex-col gap-2">
        <li class="font-sans text-sm text-zinc-500 pl-3 border-l-2 border-zinc-200">
          Zubler JM, Wiggins LD, Macias MM, et al.
          <em>Evidence-Informed Milestones for Developmental Surveillance Tools.</em>
          Pediatrics. 2022;149(3):e2021052138.
          <a
            href="https://doi.org/10.1542/peds.2021-052138"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary-500 hover:text-primary-600 underline ml-1 inline-flex items-center gap-1"
          >
            doi.org
            <UIcon name="i-lucide-external-link" class="text-xs" />
          </a>
        </li>
        <li class="font-sans text-sm text-zinc-500 pl-3 border-l-2 border-zinc-200">
          CDC. <em>Learn the Signs. Act Early. Developmental Milestones.</em>
          Centers for Disease Control and Prevention.
          <a
            href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary-500 hover:text-primary-600 underline ml-1 inline-flex items-center gap-1"
          >
            cdc.gov
            <UIcon name="i-lucide-external-link" class="text-xs" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
