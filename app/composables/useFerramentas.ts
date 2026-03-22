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
    title: 'Checklist de Marcos de Desenvolvimento',
    description:
      'Verifique se a criança está atingindo os marcos esperados para a idade em áreas como linguagem, motricidade e cognição.',
    status: 'soon'
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
  }
]
