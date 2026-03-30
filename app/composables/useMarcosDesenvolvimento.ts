import { ref, computed } from 'vue'

// ── Types ─────────────────────────────────────────────────────────────────────

export type DomainKey = 'social' | 'language' | 'cognitive' | 'motor'

export interface AgeMilestones {
  label: string
  social: string[]
  language: string[]
  cognitive: string[]
  motor: string[]
}

export type MilestonesData = Record<string, AgeMilestones>

export interface DomainConfig {
  key: DomainKey
  label: string
  icon: string
  desc: string
  bgClass: string
  iconClass: string
  titleClass: string
  dotClass: string
  borderClass: string
}

// ── Static config ──────────────────────────────────────────────────────────────

export const AGE_ORDER = [
  '2m', '4m', '6m', '9m', '12m', '15m', '18m', '24m', '30m', '3a', '4a', '5a'
]

export const DOMAINS: DomainConfig[] = [
  {
    key: 'social',
    label: 'Social-Emocional',
    icon: 'i-lucide-heart',
    desc: 'Vínculos, emoções e interação social',
    bgClass: 'bg-pink-50',
    iconClass: 'text-pink-500',
    titleClass: 'text-pink-700',
    dotClass: 'bg-pink-400',
    borderClass: 'border-l-4 border-pink-400'
  },
  {
    key: 'language',
    label: 'Linguagem e Comunicação',
    icon: 'i-lucide-message-circle',
    desc: 'Fala, sons, gestos e compreensão',
    bgClass: 'bg-violet-50',
    iconClass: 'text-violet-500',
    titleClass: 'text-violet-700',
    dotClass: 'bg-violet-400',
    borderClass: 'border-l-4 border-violet-400'
  },
  {
    key: 'cognitive',
    label: 'Cognitivo',
    icon: 'i-lucide-brain',
    desc: 'Atenção, memória e resolução de problemas',
    bgClass: 'bg-primary-50',
    iconClass: 'text-primary-500',
    titleClass: 'text-primary-700',
    dotClass: 'bg-primary-500',
    borderClass: 'border-l-4 border-primary-400'
  },
  {
    key: 'motor',
    label: 'Motor',
    icon: 'i-lucide-activity',
    desc: 'Motricidade grossa e fina',
    bgClass: 'bg-secondary-100',
    iconClass: 'text-secondary-600',
    titleClass: 'text-secondary-700',
    dotClass: 'bg-secondary-500',
    borderClass: 'border-l-4 border-secondary-400'
  }
]

// ── Milestone data ─────────────────────────────────────────────────────────────
// Fonte: Zubler JM et al. Evidence-Informed Milestones for Developmental
// Surveillance Tools. Pediatrics. 2022;149(3):e2021052138 (CDC/AAP)

const milestonesData: MilestonesData = {
  '2m': {
    label: '2 meses',
    social: [
      'Acalma-se quando o cuidador fala ou o pega no colo',
      'Olha para o rosto do cuidador',
      'Parece feliz ao ver o cuidador se aproximar',
      'Sorri quando o cuidador fala ou sorri para ele'
    ],
    language: [
      'Produz sons além do choro',
      'Reage a sons altos'
    ],
    cognitive: [
      'Acompanha com o olhar o movimento do cuidador de um lado para o outro',
      'Olha para um brinquedo por vários segundos'
    ],
    motor: [
      'Levanta a cabeça quando de bruços',
      'Move os dois braços e as duas pernas',
      'Abre brevemente as mãos'
    ]
  },

  '4m': {
    label: '4 meses',
    social: [
      'Sorri espontaneamente para chamar atenção',
      'Ri quando tentam fazê-la rir',
      'Olha, se move ou faz sons para obter atenção do cuidador'
    ],
    language: [
      'Produz sons como "oooo" e "aahh" (arrulhos)',
      'Produz sons em resposta quando o cuidador fala',
      'Vira a cabeça em direção à voz do cuidador'
    ],
    cognitive: [
      'Abre a boca ao ver o seio ou mamadeira (com fome)',
      'Olha para as próprias mãos com interesse'
    ],
    motor: [
      'Mantém a cabeça estável sem apoio quando segurado',
      'Segura um brinquedo colocado em sua mão',
      'Usa o braço para bater em brinquedos suspensos',
      'Leva as mãos à boca',
      'Apoia-se nos cotovelos/antebraços quando de bruços'
    ]
  },

  '6m': {
    label: '6 meses',
    social: [
      'Reconhece pessoas familiares',
      'Gosta de se olhar no espelho',
      'Ri'
    ],
    language: [
      'Reveza sons com o cuidador ("conversa")',
      'Faz "barulho de framboesa" (língua + sopro)',
      'Emite sons agudos de alegria'
    ],
    cognitive: [
      'Leva objetos à boca para explorá-los',
      'Alcança para pegar um brinquedo que quer',
      'Fecha os lábios para indicar que não quer mais comida'
    ],
    motor: [
      'Rola de barriga para cima para de bruços',
      'Empurra-se com os braços esticados de bruços',
      'Apoia-se nas mãos para ficar sentado'
    ]
  },

  '9m': {
    label: '9 meses',
    social: [
      'Fica tímido, grudento ou com medo de estranhos',
      'Demonstra várias expressões faciais (feliz, triste, raiva, surpresa)',
      'Olha quando chamado pelo nome',
      'Reage quando o cuidador vai embora',
      'Sorri ou ri ao brincar de "esconde-esconde"'
    ],
    language: [
      'Produz sons variados como "mamamama" e "babababa"',
      'Levanta os braços para ser pegado no colo'
    ],
    cognitive: [
      'Procura objeto que caiu e saiu do campo visual',
      'Bate duas coisas juntas'
    ],
    motor: [
      'Fica sentado sem apoio',
      'Movimenta-se de bruços para buscar brinquedos',
      'Usa os dedos para "varrer" comida em direção a si',
      'Passa objetos de uma mão para a outra'
    ]
  },

  '12m': {
    label: '12 meses (1 ano)',
    social: [
      'Brinca de bater palminhas ou acenar com o cuidador'
    ],
    language: [
      'Acena "tchau"',
      'Chama o cuidador de "mamã", "papá" ou outro nome especial',
      'Entende "não" (pausa ou para quando dito)'
    ],
    cognitive: [
      'Coloca algo dentro de um recipiente',
      'Procura objetos escondidos pelo cuidador'
    ],
    motor: [
      'Puxa-se para ficar em pé',
      'Anda segurando nos móveis',
      'Bebe de um copo sem tampa com ajuda',
      'Pega objetos entre polegar e indicador (pinça)'
    ]
  },

  '15m': {
    label: '15 meses',
    social: [
      'Imita outras crianças brincando',
      'Mostra ao cuidador um objeto que gosta',
      'Bate palmas quando está animado',
      'Abraça boneco ou brinquedo',
      'Demonstra afeto (abraços, carinhos, beijos) a pessoas familiares'
    ],
    language: [
      'Tenta dizer 1 ou 2 palavras além de mamã/papá',
      'Olha para objeto familiar quando nomeado',
      'Segue instruções com gesto e palavra juntos',
      'Aponta para pedir algo ou pedir ajuda'
    ],
    cognitive: [
      'Tenta usar objetos da forma correta (telefone, copo, escova)',
      'Empilha pelo menos 2 objetos pequenos'
    ],
    motor: [
      'Dá alguns passos sozinho',
      'Usa os dedos para se alimentar'
    ]
  },

  '18m': {
    label: '18 meses',
    social: [
      'Afasta-se do cuidador mas verifica se ele está por perto',
      'Aponta para mostrar algo interessante ao cuidador',
      'Estende as mãos para que o cuidador as lave',
      'Olha algumas páginas de um livro junto com o cuidador',
      'Ajuda a se vestir (empurra braço pela manga, etc.)'
    ],
    language: [
      'Tenta dizer ≥3 palavras além de mamã/papá',
      'Segue instruções de 1 passo sem gestos ("Pega o sapato")'
    ],
    cognitive: [
      'Imita o cuidador fazendo tarefas domésticas simples',
      'Brinca com brinquedos de maneira simples (empurra carrinho)'
    ],
    motor: [
      'Anda sem se segurar em nada',
      'Rabisca',
      'Bebe de um copo sem tampa (pode derramar)',
      'Alimenta-se com os próprios dedos',
      'Tenta usar uma colher',
      'Sobe e desce do sofá/cadeira sem ajuda'
    ]
  },

  '24m': {
    label: '2 anos (24 meses)',
    social: [
      'Percebe quando outros estão machucados ou chateados (olha e para o que está fazendo)',
      'Olha para o rosto do cuidador em situações novas para avaliar como reagir'
    ],
    language: [
      'Aponta para coisas em um livro quando perguntado',
      'Diz pelo menos 2 palavras juntas ("Mais leite", "Cadê papá?")',
      'Aponta pelo menos 2 partes do corpo quando pedido',
      'Usa mais gestos além de acenar e apontar (diz adeus com a mão, assente com a cabeça)'
    ],
    cognitive: [
      'Segura algo com 1 mão enquanto usa a outra',
      'Tenta usar interruptores, botões ou manivelas de brinquedo',
      'Brinca com mais de 1 brinquedo ao mesmo tempo (coloca comida no prato de brinquedo)'
    ],
    motor: [
      'Chuta uma bola',
      'Corre',
      'Sobe alguns degraus sem escalar (pode precisar de apoio)',
      'Come com colher'
    ]
  },

  '30m': {
    label: '30 meses (2½ anos)',
    social: [
      'Brinca ao lado de outras crianças e às vezes junto',
      'Mostra suas capacidades dizendo "Olha para mim!"',
      'Segue rotinas simples quando instruído ("Guarda os brinquedos antes do jantar")'
    ],
    language: [
      'Diz ≥50 palavras',
      'Diz ≥2 palavras com 1 verbo de ação ("Cachorro corre", "Quero mais")',
      'Nomeia objetos em um livro quando apontados',
      'Usa palavras como "eu", "meu" ou "nós"'
    ],
    cognitive: [
      'Usa objetos para fingir (alimenta boneco com bloco como se fosse comida)',
      'Demonstra resolução simples de problemas sem tentar ao acaso',
      'Segue instruções de 2 passos ("Pega o casaco e coloca na bolsa")',
      'Identifica pelo menos 1 cor quando perguntado'
    ],
    motor: [
      'Usa as mãos para torcer (maçanetas, tampas, torneiras)',
      'Tira algumas roupas sozinho',
      'Salta com os dois pés do chão',
      'Vira páginas de um livro uma de cada vez'
    ]
  },

  '3a': {
    label: '3 anos',
    social: [
      'Acalma-se em até 10 minutos após a saída do cuidador',
      'Percebe outras crianças e se junta a elas para brincar'
    ],
    language: [
      'Conversa com ≥2 trocas consecutivas',
      'Faz perguntas com "quem", "o quê", "onde" ou "por quê"',
      'Descreve o que está acontecendo em uma figura',
      'Diz o primeiro nome quando perguntado',
      'Fala de forma compreensível para outras pessoas na maior parte do tempo'
    ],
    cognitive: [
      'Desenha um círculo quando demonstrado',
      'Evita tocar objetos quentes quando advertido'
    ],
    motor: [
      'Enfia objetos em um fio (contas grandes, macarrão)',
      'Veste algumas roupas sozinho',
      'Usa garfo'
    ]
  },

  '4a': {
    label: '4 anos',
    social: [
      'Finge ser outra coisa ou outra pessoa durante a brincadeira',
      'Pede para brincar com outras crianças',
      'Conforta outros que estão machucados ou tristes',
      'Evita perigos (não pula de alturas claramente perigosas)',
      'Gosta de ser "ajudante"',
      'Muda o comportamento conforme o ambiente (mais quieto na biblioteca, mais ativo no parque)'
    ],
    language: [
      'Diz frases com ≥4 palavras',
      'Diz algumas palavras de uma música, história ou poesia familiar',
      'Conta sobre algo que aconteceu durante o dia',
      'Responde perguntas simples sobre a utilidade de objetos comuns ("Para que serve?")'
    ],
    cognitive: [
      'Nomeia algumas cores de objetos comuns',
      'Diz o que vem a seguir em uma história conhecida',
      'Desenha uma pessoa com ≥3 partes do corpo'
    ],
    motor: [
      'Pega uma bola grande lançada a ele na maior parte das vezes',
      'Se serve de comida ou despeja água com supervisão',
      'Desabotoa alguns botões',
      'Segura lápis/giz entre os dedos (não em punho fechado)'
    ]
  },

  '5a': {
    label: '5 anos',
    social: [
      'Segue regras ou reveza em jogos com outras crianças',
      'Canta, dança ou dramatiza para o cuidador',
      'Realiza tarefas simples em casa (arrumar a mesa, recolher brinquedos)'
    ],
    language: [
      'Conta uma história com pelo menos 2 eventos em sequência',
      'Responde perguntas simples sobre um livro ou história ouvida',
      'Mantém conversa com mais de 3 trocas consecutivas',
      'Usa ou reconhece rimas simples'
    ],
    cognitive: [
      'Conta até 10',
      'Nomeia alguns números entre 1 e 5 quando escritos',
      'Usa palavras de tempo ("ontem", "amanhã", "manhã", "noite")',
      'Mantém atenção por 5 a 10 minutos em atividade de interesse',
      'Escreve algumas letras do próprio nome',
      'Nomeia algumas letras do alfabeto quando apontadas'
    ],
    motor: [
      'Abotoa alguns botões',
      'Pula em um pé só'
    ]
  }
}

// ── Composable ─────────────────────────────────────────────────────────────────

export function useMarcosDesenvolvimento() {
  const selectedAge = ref<string>('12m')

  const selectedIndex = computed(() => AGE_ORDER.indexOf(selectedAge.value))

  const prevAge = computed<string | null>(() =>
    selectedIndex.value > 0 ? AGE_ORDER[selectedIndex.value - 1] : null
  )

  const nextAge = computed<string | null>(() =>
    selectedIndex.value < AGE_ORDER.length - 1
      ? AGE_ORDER[selectedIndex.value + 1]
      : null
  )

  const currentMilestones = computed<AgeMilestones>(
    () => milestonesData[selectedAge.value]
  )

  const prevMilestones = computed<AgeMilestones | null>(() =>
    prevAge.value ? milestonesData[prevAge.value] : null
  )

  const nextMilestones = computed<AgeMilestones | null>(() =>
    nextAge.value ? milestonesData[nextAge.value] : null
  )

  return {
    AGE_ORDER,
    DOMAINS,
    milestonesData,
    selectedAge,
    selectedIndex,
    prevAge,
    nextAge,
    currentMilestones,
    prevMilestones,
    nextMilestones
  }
}
