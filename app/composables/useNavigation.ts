export function useNavigation() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Serviços', to: '/servicos' },
    { label: 'Equipe', to: '/equipe' },
    { label: 'Ação Social', to: '/acao-social' },
    { label: 'Blog', to: '/blog' },
    { label: 'Ferramentas', to: '/ferramentas' },
    { label: 'Contato', to: '/contato' }
  ]

  return { navItems }
}
