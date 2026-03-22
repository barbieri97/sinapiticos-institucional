# sinapíticos: instituto de desenvolvimento infantil — Site Institucional

Site institucional do **sinapíticos: instituto de desenvolvimento infantil**, fundado por **André Barbieri** e **Carolina Teixeira**, ambos neuropsicólogos infantis.

O site é narrativo e acolhedor: apresenta a história do instituto, serviços oferecidos, equipe fundadora, ação social e recursos gratuitos para famílias e profissionais — transmitindo que ciência e carinho com os "piticos" caminham juntos.

---

## Stack

- **Nuxt 4** (Vue 3, Composition API, `<script setup lang="ts">`)
- **NuxtUI v3** — biblioteca de componentes principal
- **Tailwind CSS v4** — utilitários e tema customizado (`@theme`)
- **@nuxt/content** — gestão de recursos gratuitos em Markdown
- **@nuxt/image** — otimização de imagens via Vercel Image Optimization
- **@nuxt/fonts** — Nunito (display) + DM Sans (body) via Google Fonts
- **Deploy:** Vercel (SSR com `nuxt build`)

---

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento em http://localhost:3000
pnpm dev

# Build para produção
pnpm build

# Preview do build local
pnpm preview
```

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home |
| `/sobre` | Nossa história e valores |
| `/servicos` | Avaliação, Psicoterapia e Orientação Parental |
| `/equipe` | Equipe fundadora |
| `/acao-social` | Programa de vagas sociais |
| `/recursos` | Recursos gratuitos (artigos, guias, ferramentas, links) |
| `/contato` | Formulário de contato e agendamento |

---

## TODO — Backlog de Desenvolvimento

### Assets & Conteúdo

- [ ] Criar favicon (ícone da aba/navegador) a partir do logo
- [ ] Adicionar fotos reais dos fundadores (André e Carolina) em `/equipe` e na home
- [ ] Criar/revisar os conteúdos reais: artigos, guias e links úteis em `content/recursos/`
- [ ] Expandir o uso do `@nuxt/content` para facilitar a edição de conteúdo de outras seções do site (ex: serviços, valores, equipe)

### Ferramentas Interativas

- [ ] Implementar ferramenta: **Marcos do Desenvolvimento** (checklist por faixa etária)
- [ ] Implementar ferramenta: **Simulação da Neurulação** (visualização interativa)
- [ ] Refatorar arquitetura das ferramentas: mover dados para um composable `useFerramentas` onde cada ferramenta tenha `{ titulo, descricao, link, ativa }` — e o card na página de recursos controlar exibição com base no campo `ativa`

### Home

- [ ] Mudar `HomeResources` para buscar artigos e ferramentas reais via `@nuxt/content` (não hardcoded), mantendo o direcionamento para `/recursos`

### Página de Recursos

- [ ] Adicionar "paginação leve": exibir somente os conteúdos mais recentes em `/recursos` e redirecionar para `/recursos/conteudos` para ver todos
- [ ] Mudar o sistema de categorias: definir categoria(s) nos metadados do próprio arquivo `.md` (ex: `tags: [TDAH, neurodesenvolvimento, linguagem]`) em vez de usar a estrutura de pastas como critério — e adaptar a lógica de filtragem na página de listagem
