<script setup lang="ts">
import { useCalculadoraIdade } from '~/composables/useCalculadoraIdade'

const { dataNascimento, dataReferencia, erro, resultado, usarHoje }
  = useCalculadoraIdade()

// Pluraliza uma unidade de tempo (ex.: 1 ano / 2 anos).
function plural(valor: number, singular: string, plural: string): string {
  return `${valor} ${valor === 1 ? singular : plural}`
}

const idadeFormatada = computed(() => {
  const r = resultado.value
  if (!r) return ''
  const partes: string[] = []
  if (r.anos > 0) partes.push(plural(r.anos, 'ano', 'anos'))
  if (r.meses > 0) partes.push(plural(r.meses, 'mês', 'meses'))
  // Sempre mostra os dias, inclusive quando zero, para deixar explícito.
  partes.push(plural(r.dias, 'dia', 'dias'))
  if (partes.length === 1) return partes[0]
  const ultimo = partes.pop()
  return `${partes.join(', ')} e ${ultimo}`
})
</script>

<template>
  <div class="bg-white rounded-2xl border border-zinc-100 p-6 sm:p-8 flex flex-col gap-6">
    <div>
      <EyebrowBadge text="✦ Calcule a idade" />
      <h2 class="font-display font-extrabold text-2xl text-primary-700 mt-3">
        Dados da criança
      </h2>
      <p class="font-sans text-zinc-500 text-sm mt-1">
        Informe a data de nascimento. A data da avaliação já vem preenchida com
        hoje — ajuste conforme a data da testagem, se necessário.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <UFormField
        label="Data de nascimento"
        name="dataNascimento"
        required
      >
        <UInput
          v-model="dataNascimento"
          type="date"
          icon="i-lucide-cake"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Data da avaliação"
        name="dataReferencia"
        hint="Padrão: hoje"
      >
        <UInput
          v-model="dataReferencia"
          type="date"
          icon="i-lucide-calendar-check"
          size="lg"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="flex justify-end -mt-2">
      <UButton
        color="primary"
        variant="ghost"
        size="sm"
        icon="i-lucide-calendar"
        @click="usarHoje"
      >
        Usar data de hoje
      </UButton>
    </div>

    <!-- Erro -->
    <div
      v-if="erro"
      class="bg-amber-50 rounded-2xl p-5 border border-amber-200 flex gap-3 items-start"
    >
      <UIcon
        name="i-lucide-triangle-alert"
        class="text-amber-500 text-xl shrink-0 mt-0.5"
      />
      <p class="font-sans text-sm text-zinc-700 leading-relaxed">
        {{ erro }}
      </p>
    </div>

    <!-- Resultado -->
    <div
      v-else-if="resultado"
      class="bg-primary-50 rounded-2xl p-6 sm:p-8 border border-primary-100 flex flex-col gap-4"
    >
      <div class="flex items-center gap-2">
        <UIcon
          name="i-lucide-baby"
          class="text-primary-500 text-lg shrink-0"
        />
        <span
          class="font-display font-bold text-primary-600 text-xs uppercase tracking-widest"
        >
          Idade cronológica
        </span>
      </div>

      <p class="font-display font-black text-primary-700 text-3xl sm:text-4xl leading-tight">
        {{ idadeFormatada }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-primary-100">
        <div class="flex flex-col">
          <span class="font-display font-extrabold text-primary-700 text-xl">
            {{ resultado.totalMeses }}
            <span class="font-sans font-normal text-zinc-500 text-sm">meses</span>
          </span>
          <span class="font-sans text-zinc-500 text-xs">
            {{ resultado.totalMeses }} {{ resultado.totalMeses === 1 ? 'mês' : 'meses' }}
            e {{ resultado.dias }} {{ resultado.dias === 1 ? 'dia' : 'dias' }}
          </span>
        </div>
        <div class="flex flex-col">
          <span class="font-display font-extrabold text-primary-700 text-xl">
            {{ resultado.totalSemanas }}
            <span class="font-sans font-normal text-zinc-500 text-sm">semanas</span>
          </span>
          <span class="font-sans text-zinc-500 text-xs">no total</span>
        </div>
        <div class="flex flex-col">
          <span class="font-display font-extrabold text-primary-700 text-xl">
            {{ resultado.totalDias }}
            <span class="font-sans font-normal text-zinc-500 text-sm">dias</span>
          </span>
          <span class="font-sans text-zinc-500 text-xs">no total</span>
        </div>
      </div>
    </div>

    <!-- Estado vazio -->
    <div
      v-else
      class="bg-cream rounded-2xl p-6 border border-zinc-100 border-dashed flex gap-3 items-center justify-center text-center"
    >
      <UIcon
        name="i-lucide-calculator"
        class="text-primary-300 text-2xl shrink-0"
      />
      <p class="font-sans text-sm text-zinc-500">
        Informe a data de nascimento para ver a idade cronológica.
      </p>
    </div>
  </div>
</template>
