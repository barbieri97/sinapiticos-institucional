import { computed, ref } from 'vue'

export interface ResultadoIdade {
  anos: number
  meses: number
  dias: number
  totalMeses: number
  totalDias: number
  totalSemanas: number
}

/**
 * Retorna a data de hoje no formato `YYYY-MM-DD` em horário local.
 * Usado como valor padrão da data de referência (data da avaliação).
 */
export function hojeISO(): string {
  const agora = new Date()
  const ano = agora.getFullYear()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${ano}-${mes}-${dia}`
}

/**
 * Adiciona `meses` a uma data, "grampeando" (clamp) o dia ao último dia
 * válido do mês de destino — em vez de transbordar para o mês seguinte.
 * Ex.: 31/jan + 1 mês → 29/fev (e não 02/mar), garantindo que a diferença
 * de dias nunca fique negativa.
 */
function adicionarMesesClamp(data: Date, meses: number): Date {
  const totalMeses = data.getMonth() + meses
  const anoDestino = data.getFullYear() + Math.floor(totalMeses / 12)
  const mesDestino = ((totalMeses % 12) + 12) % 12
  const diasNoMesDestino = new Date(anoDestino, mesDestino + 1, 0).getDate()
  const dia = Math.min(data.getDate(), diasNoMesDestino)
  return new Date(anoDestino, mesDestino, dia)
}

/**
 * Converte uma string `YYYY-MM-DD` em um Date em horário local.
 * Evita o comportamento de `new Date('YYYY-MM-DD')`, que interpreta a
 * string como UTC e pode deslocar o dia dependendo do fuso.
 */
function parseISOLocal(valor: string): Date | null {
  const partes = valor.split('-').map(Number)
  if (partes.length !== 3 || partes.some(n => Number.isNaN(n))) return null
  const [ano, mes, dia] = partes
  const data = new Date(ano!, mes! - 1, dia!)
  // Valida se a data existe de fato (ex.: 31/02 seria normalizado).
  if (
    data.getFullYear() !== ano
    || data.getMonth() !== mes! - 1
    || data.getDate() !== dia
  ) {
    return null
  }
  return data
}

export function useCalculadoraIdade() {
  const dataNascimento = ref('')
  const dataReferencia = ref(hojeISO())

  const erro = computed<string | null>(() => {
    if (!dataNascimento.value || !dataReferencia.value) return null
    const nasc = parseISOLocal(dataNascimento.value)
    const ref = parseISOLocal(dataReferencia.value)
    if (!nasc || !ref) return 'Data inválida.'
    if (ref.getTime() < nasc.getTime()) {
      return 'A data da avaliação não pode ser anterior à data de nascimento.'
    }
    return null
  })

  const resultado = computed<ResultadoIdade | null>(() => {
    if (!dataNascimento.value || !dataReferencia.value) return null
    const nasc = parseISOLocal(dataNascimento.value)
    const ref = parseISOLocal(dataReferencia.value)
    if (!nasc || !ref) return null
    if (ref.getTime() < nasc.getTime()) return null

    // Conta os meses completos entre nascimento e referência. Se ainda não
    // "fechou" o mês (o dia da referência é anterior ao dia de nascimento),
    // desconta um mês.
    let totalMeses = (ref.getFullYear() - nasc.getFullYear()) * 12
      + (ref.getMonth() - nasc.getMonth())
    if (ref.getDate() < nasc.getDate()) {
      totalMeses -= 1
    }

    // A âncora é o nascimento avançado em `totalMeses` meses (com clamp de
    // dia). Os dias restantes são a diferença entre a âncora e a referência —
    // sempre >= 0, evitando o bug de "dias negativos" em viradas de mês.
    const ancora = adicionarMesesClamp(nasc, totalMeses)
    const msPorDia = 1000 * 60 * 60 * 24
    const dias = Math.round((ref.getTime() - ancora.getTime()) / msPorDia)

    const anos = Math.floor(totalMeses / 12)
    const meses = totalMeses % 12

    // Totais absolutos desde o nascimento.
    const totalDias = Math.round((ref.getTime() - nasc.getTime()) / msPorDia)
    const totalSemanas = Math.floor(totalDias / 7)

    return { anos, meses, dias, totalMeses, totalDias, totalSemanas }
  })

  function usarHoje() {
    dataReferencia.value = hojeISO()
  }

  return {
    dataNascimento,
    dataReferencia,
    erro,
    resultado,
    usarHoje
  }
}
