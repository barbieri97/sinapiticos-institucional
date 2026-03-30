export interface Ferramenta {
  icon: string
  title: string
  description: string
  status: 'soon' | 'available'
  slug?: string
}

export const useFerramentas = (): Ferramenta[] => [
  {
    icon: 'i-lucide-calculator',
    title: 'Calculadora de Idade Cronológica',
    description:
      'Calcule a idade exata da criança em anos, meses e dias — útil para relatórios e laudos que exigem precisão.',
    status: 'soon'
  },
  {
    icon: 'i-lucide-list-checks',
    title: 'Marcos do Desenvolvimento',
    description:
      'Visualize os marcos esperados por faixa etária em linguagem, motricidade, cognição e desenvolvimento social-emocional — baseado em CDC e AAP.',
    status: 'available',
    slug: 'marcos-desenvolvimento'
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: 'Meus Direitos na Escola',
    description:
      'Guia interativo: informe a condição da criança e descubra quais adaptações e apoios a escola é obrigada por lei a oferecer.',
    status: 'soon'
  },
  {
    icon: 'i-lucide-map-pin',
    title: 'Localizador de CAPS Infanto-Juvenil',
    description:
      'Encontre o Centro de Atenção Psicossocial Infanto-Juvenil mais próximo da sua região para atendimento pelo SUS.',
    status: 'soon'
  },
  {
    icon: 'i-lucide-zap',
    title: 'Sinaptogênese Neural',
    description:
      'Animação interativa das 5 fases do desenvolvimento neural — da proliferação neuronal à poda sináptica. Explore a neurociência do desenvolvimento infantil.',
    status: 'available',
    slug: 'sinaptogenese'
  }
]
