<script setup lang="ts">
// Conteúdo informativo estático — sem props.
</script>

<template>
  <div class="flex flex-col gap-6">
    <SectionTitle title="Sobre esta ferramenta" />

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-primary-50 rounded-2xl p-5 border border-primary-100 flex gap-4">
        <div class="p-2 bg-primary-100 rounded-xl shrink-0 h-fit">
          <UIcon
            name="i-lucide-clock"
            class="text-primary-500 text-xl"
          />
        </div>
        <div>
          <h4 class="font-display font-extrabold text-primary-700 text-sm">
            O que é idade cronológica
          </h4>
          <p class="font-sans text-zinc-600 text-sm leading-relaxed mt-1">
            É o tempo exato de vida da criança — em anos, meses e dias — contado
            entre o nascimento e a data de referência. É o dado base para
            interpretar testes e comparar o desenvolvimento com o esperado para
            a faixa etária.
          </p>
        </div>
      </div>

      <div class="bg-secondary-50 rounded-2xl p-5 border border-secondary-100 flex gap-4">
        <div class="p-2 bg-secondary-100 rounded-xl shrink-0 h-fit">
          <UIcon
            name="i-lucide-file-check"
            class="text-secondary-600 text-xl"
          />
        </div>
        <div>
          <h4 class="font-display font-extrabold text-secondary-700 text-sm">
            Por que a data da avaliação importa
          </h4>
          <p class="font-sans text-zinc-600 text-sm leading-relaxed mt-1">
            Em laudos e testes padronizados, a idade cronológica é calculada na
            <strong>data da testagem</strong>, não na data em que o relatório é
            escrito. Por isso a data da avaliação é ajustável — garantindo
            precisão na consulta às normas.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-amber-50 rounded-2xl p-5 border border-amber-200 flex gap-4">
      <UIcon
        name="i-lucide-shield-check"
        class="text-amber-500 text-xl shrink-0 mt-0.5"
      />
      <p class="font-sans text-sm text-zinc-700 leading-relaxed">
        <strong class="font-display font-bold">Privacidade:</strong> todo o
        cálculo acontece no seu navegador. Nenhuma data é enviada ou armazenada —
        esta é uma ferramenta de apoio gratuita e sem cadastro.
      </p>
    </div>
  </div>
</template>
