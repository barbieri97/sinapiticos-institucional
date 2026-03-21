# CLAUDE.md — sinapíticos: instituto de desenvolvimento infantil — Site Institucional

> Este arquivo orienta o Claude Code no desenvolvimento do site institucional do sinapíticos: instituto de desenvolvimento infantil.
> Leia este documento integralmente antes de escrever qualquer linha de código.

---

## 1. Visão Geral do Projeto

O **sinapíticos: instituto de desenvolvimento infantil** foi fundado por **André Barbieri** e **Carolina Teixeira**, ambos neuropsicólogos infantis. O instituto nasceu do desejo de unir **rigor científico** e **cuidado humano genuíno** — oferecendo às crianças e suas famílias o que há de melhor na ciência, sem abrir mão do carinho com os "piticos".

O site é **institucional e narrativo**: conta a história do instituto, apresenta serviços, equipe fundadora, ação social e recursos gratuitos — transmitindo acolhimento desde o primeiro scroll.

**Stack:**
- Nuxt 4 (Vue 3, Composition API, `<script setup lang="ts">`)
- **NuxtUI v3** como biblioteca de componentes principal
- **Tailwind CSS v4** para utilitários e customizações
- `@nuxt/content` para gestão de recursos gratuitos em Markdown/JSON
- `@nuxt/image` para otimização de imagens com provider Cloudflare
- `@nuxt/fonts` para carregamento de fontes
- **Deploy:** Vercel (SSR com `nuxt build`)

---

## 2. Público-Alvo

| Público | Necessidade principal |
|---|---|
| Pais e responsáveis | Entender se a clínica é confiável e cuidadosa para seu filho |
| Médicos e pediatras | Saber a quem encaminhar pacientes — credibilidade técnica |
| Parceiros e patrocinadores | Compreender a missão social e o impacto do instituto |

**Tom de voz:** Equilibrado entre acolhedor e profissional. Nunca frio ou clínico demais. Nunca infantilizado. A criança é o centro, mas quem lê é o adulto responsável.

---

## 3. Stack & Configuração do Projeto

### 3.1 Instalação e Setup

```bash
# Criar projeto Nuxt 4
npx nuxi@latest init sinapiticos --template ui

# Instalar dependências adicionais
npm install @nuxt/content @nuxt/image @nuxt/fonts
```

### 3.2 `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  // ── Deploy: Vercel (SSR) ─────────────────────────────────────────
  // Nuxt detecta automaticamente o ambiente Vercel via Git integration.
  // O preset vercel é aplicado automaticamente ao fazer push.
  // Para build manual: `npx nuxt build`
  nitro: {
    preset: 'vercel',
  },

  // ── Imagens: provider Vercel ─────────────────────────────────────
  // Usa Vercel Image Optimization via /_vercel/image
  // Otimização automática para WebP/AVIF — sem configuração extra no painel.
  image: {
    provider: 'vercel',
    // Tamanhos responsivos padrão para srcset automático
    screens: {
      sm:  640,
      md:  768,
      lg:  1024,
      xl:  1280,
      '2xl': 1536,
    },
    format: ['webp', 'avif', 'jpeg'],
    quality: 80,
  },

  fonts: {
    families: [
      { name: 'Nunito', provider: 'google', weights: [400, 600, 700, 800, 900] },
      { name: 'DM Sans', provider: 'google', weights: [400, 500], styles: ['normal', 'italic'] },
    ]
  },

  css: ['~/assets/css/main.css'],
})
```

### 3.3 `assets/css/main.css`

Este é o arquivo central de tema. Aqui registramos as cores da identidade visual do Sinapíticos no sistema de design do NuxtUI v3 usando a diretiva `@theme` do Tailwind v4.

```css
@import "tailwindcss";
@import "@nuxt/ui";

/* ─────────────────────────────────────────
   TEMA SINAPÍTICOS
   Paleta extraída do logotipo oficial.
───────────────────────────────────────── */

@theme static {
  /* Fontes */
  --font-display: 'Nunito', sans-serif;
  --font-sans:    'DM Sans', sans-serif;

  /* Cor primária: Teal (azul-petróleo do "Sina" e do neurônio) */
  --color-primary-50:  #f0f9fa;
  --color-primary-100: #d9f0f3;
  --color-primary-200: #b3e1e7;
  --color-primary-300: #7ecad4;
  --color-primary-400: #45aab9;
  --color-primary-500: #1A7A8A;  /* ← cor base do logo */
  --color-primary-600: #125F6D;
  --color-primary-700: #0f4d59;
  --color-primary-800: #0d3f49;
  --color-primary-900: #0a333c;

  /* Cor secundária: Amber (laranja do "píticos") */
  --color-secondary-50:  #fff9ed;
  --color-secondary-100: #fef3dc;
  --color-secondary-200: #fde4a8;
  --color-secondary-300: #fccf6a;
  --color-secondary-400: #fab432;
  --color-secondary-500: #E8A020;  /* ← cor base do logo */
  --color-secondary-600: #c47d0e;
  --color-secondary-700: #9d600a;
  --color-secondary-800: #7d4c0c;
  --color-secondary-900: #653d0d;

  /* Cor neutra: Cream (fundo bege do logo) */
  --color-cream: #F5F0E8;

  /* Border radius padrão */
  --radius-card:   1rem;
  --radius-btn:    0.5rem;
  --radius-badge:  2rem;
}

/* ─────────────────────────────────────────
   VARIÁVEIS SEMÂNTICAS DO NUXTUI
   Mapeamos primary → teal, secondary → amber
───────────────────────────────────────── */
:root {
  --ui-primary:   var(--color-primary-500);
  --ui-secondary: var(--color-secondary-500);
  --ui-radius:    0.5rem;
}

/* ─────────────────────────────────────────
   BASE GLOBAL
───────────────────────────────────────── */
body {
  background-color: var(--color-cream);
  font-family: var(--font-sans);
  color: #2C2C2C;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 800;
}

/* Underline amber decorativo para títulos de seção */
.section-title-underline::after {
  content: '';
  display: block;
  width: 48px;
  height: 4px;
  background-color: var(--color-secondary-500);
  border-radius: 2px;
  margin-top: 0.5rem;
}

.section-title-underline.centered::after {
  margin-left: auto;
  margin-right: auto;
}
```

### 3.4 `app.config.ts`

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary:   'primary',    // teal — cor principal da marca
      secondary: 'secondary',  // amber — destaque e energia
      neutral:   'zinc',
    },
    icons: {
      loading: 'i-lucide-loader-circle',
      search:  'i-lucide-search',
      menu:    'i-lucide-menu',
      close:   'i-lucide-x',
      check:   'i-lucide-check',
    },
    button: {
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
      }
    },
    card: {
      slots: {
        root: 'rounded-[1rem] shadow-sm',
      }
    }
  }
})
```

---

## 4. Identidade Visual & Design System

### 4.1 Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `primary` (teal) | `#1A7A8A` | CTAs principais, títulos, links ativos, neurônio |
| `secondary` (amber) | `#E8A020` | Destaques, badges, underlines, bordas de card |
| `cream` | `#F5F0E8` | Background principal de todas as páginas |
| `white` | `#FFFFFF` | Cards, seções alternadas |
| `charcoal` | `#2C2C2C` | Texto corrido |
| `muted` (zinc-500) | `#6B7280` | Textos secundários e descrições |

**Regras invioláveis:**
- Background de página: sempre `bg-[#F5F0E8]` (cream)
- Nunca usar roxo, nunca gradientes genéricos
- A seção de Ação Social usa fundo `bg-primary-500` com texto branco

### 4.2 Tipografia

| Uso | Fonte | Peso | Classe Tailwind |
|---|---|---|---|
| Títulos / Display | Nunito | 900 | `font-display font-black` |
| Subtítulos / Nav | Nunito | 700 | `font-display font-bold` |
| Badges / Labels | Nunito | 700 | `font-display font-bold text-sm` |
| Corpo / Parágrafos | DM Sans | 400 | `font-sans` |
| Destaque de corpo | DM Sans | 500 italic | `font-sans font-medium italic` |

### 4.3 Componentes NuxtUI usados e suas variantes

#### `UButton`
```vue
<!-- Primário — teal sólido -->
<UButton color="primary" variant="solid" size="lg">Agende uma avaliação</UButton>

<!-- Secundário — outline teal -->
<UButton color="primary" variant="outline" size="lg">Nossa história</UButton>

<!-- Ação Social — amber sólido -->
<UButton color="secondary" variant="solid" size="lg">Saiba como funciona</UButton>
```

#### `UCard`
```vue
<!-- Card de serviço com borda amber à esquerda -->
<UCard class="border-l-4 border-secondary-500 bg-[#F5F0E8] hover:-translate-y-1.5 transition-transform">
  <template #header>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-primary-100 rounded-xl">
        <UIcon name="i-lucide-brain" class="text-primary-500 text-2xl" />
      </div>
      <h3 class="font-display font-extrabold text-primary-600 text-lg">Avaliação Neuropsicológica</h3>
    </div>
  </template>
  <p class="text-zinc-500 leading-relaxed">...</p>
</UCard>
```

#### `UBadge`
```vue
<!-- Eyebrow / label de seção -->
<UBadge color="secondary" variant="subtle" class="font-display font-bold uppercase tracking-widest text-xs rounded-full">
  ✦ Neuropsicologia Infantil
</UBadge>
```

#### `UNavigationMenu` / `UHeader` (nav)
```vue
<UHeader>
  <template #logo>
    <!-- Logo SVG do Sinapíticos -->
  </template>
  <UNavigationMenu :items="navItems" />
  <template #right>
    <UButton color="primary" size="sm">Agendar consulta</UButton>
  </template>
</UHeader>
```

#### `UForm` + `UFormField` + `UInput` (contato)
```vue
<UForm :schema="schema" :state="state" @submit="onSubmit">
  <UFormField label="Nome completo" name="name">
    <UInput v-model="state.name" placeholder="Seu nome" />
  </UFormField>
  <UFormField label="E-mail" name="email">
    <UInput v-model="state.email" type="email" />
  </UFormField>
  <UFormField label="Assunto" name="subject">
    <USelect v-model="state.subject" :items="subjects" />
  </UFormField>
  <UFormField label="Mensagem" name="message">
    <UTextarea v-model="state.message" :rows="5" />
  </UFormField>
  <UButton type="submit" color="primary" size="lg" block>Enviar mensagem</UButton>
</UForm>
```

#### `UTabs` (filtro de recursos)
```vue
<UTabs :items="categorias" color="primary" variant="pill">
  <template #content="{ item }">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <RecursoCard v-for="r in filteredResources(item.key)" :key="r.slug" :resource="r" />
    </div>
  </template>
</UTabs>
```

#### `UIcon`
Usar sempre ícones do pacote Lucide via NuxtUI:
```vue
<UIcon name="i-lucide-brain" />        <!-- Avaliação neuropsicológica -->
<UIcon name="i-lucide-heart" />        <!-- Psicoterapia infantil -->
<UIcon name="i-lucide-users" />        <!-- Orientação parental -->
<UIcon name="i-lucide-book-open" />    <!-- Artigos -->
<UIcon name="i-lucide-file-down" />    <!-- Guias PDF -->
<UIcon name="i-lucide-wrench" />       <!-- Ferramentas web -->
<UIcon name="i-lucide-link" />         <!-- Links úteis -->
<UIcon name="i-lucide-phone" />        <!-- Contato / WhatsApp -->
```

### 4.4 Classes Tailwind v4 da identidade visual

```
/* Backgrounds */
bg-[#F5F0E8]          → cream (background principal)
bg-primary-500        → teal sólido (seção Ação Social)
bg-primary-50         → teal clarinho (cards, seções alt)
bg-secondary-100      → amber claro (badges, destaques suaves)

/* Textos */
text-primary-600      → títulos e links ativos
text-secondary-500    → destaques amber
text-zinc-500         → textos secundários/muted
text-zinc-800         → texto corrido escuro

/* Bordas e destaques */
border-l-4 border-secondary-500   → borda esquerda amber nos cards
border-primary-200                → bordas sutis

/* Tipografia */
font-display          → Nunito (customizado em @theme)
font-black            → peso 900
font-extrabold        → peso 800

/* Animações / interações */
hover:-translate-y-1.5 transition-transform duration-200
hover:shadow-lg hover:shadow-primary-500/20
```

---

## 5. Missão, Visão e Valores

### Missão
Oferecer atendimento neuropsicológico infantil de excelência científica, com cuidado humano genuíno — aproximando famílias do conhecimento e dos mecanismos que garantem os direitos das crianças ao desenvolvimento saudável.

### Visão
Ser referência em neuropsicologia infantil, reconhecida tanto pelo rigor técnico-científico quanto pelo impacto social na comunidade.

### Valores
1. **Ciência com carinho** — o rigor das melhores evidências, entregue com acolhimento
2. **Escuta ativa** — cada criança e família têm uma história única que merece ser ouvida
3. **Acesso como direito** — saúde mental infantil não é privilégio
4. **Transparência** — comunicar de forma clara, sem jargão, o que fazemos e por quê
5. **Parceria com a família** — pais e responsáveis são parte essencial do processo terapêutico

---

## 6. Arquitetura de Páginas

```
/                        → Home
/sobre                   → Sobre nós / Nossa história
/servicos                → Serviços
/equipe                  → Equipe
/acao-social             → Ação Social
/recursos                → Recursos Gratuitos
/contato                 → Contato
```

### Menu de navegação

```
Logo | Sobre | Serviços | Equipe | Ação Social | Recursos | Contato [UButton primary]
```

- Header via `UHeader` do NuxtUI — sticky com sombra ao scroll
- Mobile: drawer via `UDrawer` com lista de links
- CTA: `<UButton color="primary" size="sm">Agendar consulta</UButton>`

---

## 7. Conteúdo por Página

### 7.1 Home (`/`)

**Seções em ordem:**
1. Hero — headline, subtítulo, dois CTAs, neurônio SVG animado
2. Propósito — frase-manifesto em tipografia grande
3. Serviços — 3 `UCard` linkando para `/servicos`
4. Fundadores — bloco resumido linkando para `/sobre` e `/equipe`
5. Ação Social — fundo `bg-primary-500`, texto branco, linkando para `/acao-social`
6. Recursos em destaque — 2–3 cards linkando para `/recursos`
7. CTA final — frase de acolhimento + botões de contato

**Copywriting Hero:**
- Título: `Cuidamos dos piticos com o melhor que a ciência oferece`
- Subtítulo: `O Sinapíticos é uma clínica de neuropsicologia infantil onde rigor científico e cuidado humano caminham juntos — porque sua família merece os dois.`
- CTA 1: `Agende uma avaliação` → `/contato`
- CTA 2: `Nossa história` → `/sobre`

---

### 7.2 Sobre (`/sobre`)

**Seções:**
1. Hero da página com neurônio decorativo
2. A origem — história dos fundadores
3. Missão, Visão e Valores — `UCard` para cada valor
4. CTAs → `/equipe` e `/contato`

**Copywriting — A origem:**
> André Barbieri e Carolina Teixeira são neuropsicólogos infantis — e parceiros. Juntos, perceberam que o modelo de atendimento que queriam oferecer ainda não existia: um lugar onde o rigor científico das técnicas fosse tão presente quanto o carinho com cada criança que cruzasse a porta.
>
> Assim nasceu o Sinapíticos. Um nome que brinca com "sinápticos" — as conexões do cérebro — e com "piticos", o jeito carinhoso de se referir aos pequenos. Porque aqui, ciência e afeto não são opostos: são a mesma coisa.

---

### 7.3 Serviços (`/servicos`)

**Seções:** hero + 3 blocos detalhados (um por serviço) + CTA

**Copywriting:**

*Avaliação Neuropsicológica* (ícone: `i-lucide-brain`)
> Investigação detalhada das funções cognitivas da criança — atenção, memória, linguagem, aprendizagem — para entender como ela pensa e aprende. O resultado é um mapa preciso das potencialidades e dificuldades do seu filho, com orientações claras para escola e família.

*Psicoterapia Infantil* (ícone: `i-lucide-heart`)
> Espaço terapêutico seguro e adaptado à criança, onde ela pode expressar, processar e desenvolver recursos emocionais e comportamentais. Trabalhamos com abordagens baseadas em evidências, respeitando a singularidade de cada pitico.

*Orientação Parental* (ícone: `i-lucide-users`)
> Apoio direto a pais e responsáveis para compreender melhor o desenvolvimento do filho e atuar de forma parceira no dia a dia. Porque o cuidado não termina na sessão — ele continua em casa.

---

### 7.4 Equipe (`/equipe`)

- Grid 2 colunas (desktop) / 1 coluna (mobile)
- `UCard` por membro: foto via `<NuxtImg>`, nome, formação, frase pessoal
- **André Barbieri** e **Carolina Teixeira**
- Espaço reservado para futuras expansões

---

### 7.5 Ação Social (`/acao-social`)

**Seções:**
1. Hero com `bg-primary-500`, texto branco, tom de manifesto
2. Nossa visão de acesso
3. O que oferecemos hoje — vagas com valor social
4. Nosso horizonte — conscientizar sobre direitos
5. Como funciona — informações práticas
6. CTA → `/contato` (assunto pré-selecionado "Ação Social")

**Copywriting — visão:**
> Acreditamos que toda criança tem direito ao desenvolvimento saudável — independente da condição financeira de sua família. Hoje, reservamos vagas com valores sociais para famílias de baixa renda.
>
> Mas nossa visão vai além do consultório. Queremos aproximar a população dos mecanismos e direitos que já existem para garantir o desenvolvimento infantil. Porque muitas vezes, a maior barreira não é a falta de recursos — é a falta de informação.

---

### 7.6 Recursos Gratuitos (`/recursos`)

**Categorias:**

| Key | Label | Ícone |
|---|---|---|
| `artigos` | Artigos | `i-lucide-book-open` |
| `guias` | Guias PDF | `i-lucide-file-down` |
| `ferramentas` | Ferramentas | `i-lucide-wrench` |
| `links` | Links úteis | `i-lucide-link` |

**Implementação:** `@nuxt/content` com arquivos em `content/recursos/`.

```
content/
  recursos/
    artigos/
      entendendo-o-tdah.md         # frontmatter: title, description, date, category
    guias/
      guia-escola-inclusiva.md
    ferramentas/
      calculadora-idade.md
    links/
      links-uteis.json             # [{ titulo, url, descricao, categoria }]
```

Filtro via `UTabs` com key de categoria. Listagem via `queryCollection('recursos')`.

---

### 7.7 Contato (`/contato`)

**Campos do formulário:**
- Nome completo (`UInput`)
- E-mail (`UInput` type=email)
- Telefone/WhatsApp (`UInput`)
- Assunto (`USelect`): Agendamento / Dúvidas / Encaminhamento médico / Ação Social / Outros
- Mensagem (`UTextarea`)

**Hero:** "Que bom ter você aqui" / "Faremos o melhor para cuidar de você e da sua família com o melhor que a ciência nos oferece."

**Envio:** Formspree ou EmailJS — sem backend próprio.

---

## 8. Estrutura de Componentes

```
app/
  components/
    layout/
      AppHeader.vue        # UHeader + UNavigationMenu + UButton CTA
      AppFooter.vue        # Logo, links, redes sociais
      PageHero.vue         # Hero reutilizável (props: title, subtitle, bgColor)
    sections/
      home/
        HomeHero.vue
        HomePurpose.vue
        HomeServices.vue
        HomeFounders.vue
        HomeSocialAction.vue
        HomeResources.vue
        HomeCTA.vue
      sobre/
        SobreOrigem.vue
        SobreValores.vue
      servicos/
        ServicoBlock.vue   # Bloco detalhado por serviço
      equipe/
        MembroCard.vue     # UCard com foto, nome, formação
      acao-social/
        SocialHero.vue
        SocialVisao.vue
        SocialComoFunciona.vue
      recursos/
        RecursoCard.vue
        RecursoFiltro.vue  # UTabs por categoria
      contato/
        ContatoForm.vue    # UForm completo
        ContatoInfo.vue    # WhatsApp, e-mail, endereço
    ui/
      SectionTitle.vue     # h2 + underline amber (section-title-underline)
      EyebrowBadge.vue     # UBadge com estilo padrão de seção
      NeuronDeco.vue       # SVG do neurônio com animação de pulse

  pages/
    index.vue
    sobre.vue
    servicos.vue
    equipe.vue
    acao-social.vue
    recursos.vue
    contato.vue

  assets/
    css/
      main.css             # @theme, variáveis, base global (ver seção 3.3)
    images/
      logo.svg
      neuronio-deco.svg
```

---

## 9. Animações & Microinterações

- **Entrada de seções:** `IntersectionObserver` com `opacity-0 translate-y-6 → opacity-100 translate-y-0` via classes Tailwind + JS simples
- **Transições de página:** fade via `definePageMeta({ pageTransition: { name: 'fade' } })`
- **Cards:** `hover:-translate-y-1.5 transition-transform duration-200`
- **Neurônio:** animação CSS `scale 1→1.04→1` com `animate-pulse` customizado
- **Botões:** `hover:shadow-lg hover:shadow-primary-500/20 transition-shadow`

---

## 10. Responsividade

| Breakpoint | Comportamento |
|---|---|
| `sm` < 640px | Layout coluna única, hero empilhado, nav em `UDrawer` |
| `md` 640–1024px | Grid 2 colunas para cards e equipe |
| `lg` > 1024px | Layout completo — hero 2 colunas, serviços 3 colunas, valores 5 colunas |

---

## 11. SEO — `useHead()` por página

```ts
// pages/index.vue
useHead({
  title: 'Sinapíticos — Clínica de Neuropsicologia Infantil',
  meta: [{ name: 'description', content: 'Avaliação neuropsicológica, psicoterapia infantil e orientação parental com rigor científico e cuidado humano.' }]
})
```

| Página | Title |
|---|---|
| `/` | `Sinapíticos — Clínica de Neuropsicologia Infantil` |
| `/sobre` | `Nossa história — Sinapíticos` |
| `/servicos` | `Serviços — Avaliação, Psicoterapia e Orientação Parental` |
| `/equipe` | `Nossa equipe — Sinapíticos` |
| `/acao-social` | `Ação Social — Sinapíticos` |
| `/recursos` | `Recursos gratuitos para famílias e profissionais — Sinapíticos` |
| `/contato` | `Contato e agendamento — Sinapíticos` |

---

## 12. Regras para o Claude Code

1. **Sempre** usar `<script setup lang="ts">` nos componentes Vue
2. **Preferir componentes NuxtUI** (`UButton`, `UCard`, `UForm`, `UInput`, etc.) antes de criar elementos HTML crus
3. **Sempre** usar classes Tailwind v4 para layout, espaçamento e tipografia — nunca `<style scoped>` para isso
4. **Sempre** referenciar cores via tokens: `text-primary-600`, `bg-secondary-500`, `border-primary-200` — nunca hardcode hex
5. `<style scoped>` apenas para animações complexas não cobertas por Tailwind
6. **Todas as imagens via `<NuxtImg>`** com provider Cloudflare — nunca `<img>` cru (ver seção 12.1 abaixo)
7. Acessibilidade: semântica HTML correta (`<main>`, `<section>`, `<nav>`, `aria-label`)
8. O logotipo é o ativo mais importante — nunca distorcer proporção
9. Conteúdo de recursos via `@nuxt/content` — nunca hardcoded em componentes
10. Cada página deve ter `useHead()` com `title` e `description` únicos
11. Formulário de contato: Formspree ou EmailJS — sem backend
12. Ícones exclusivamente via `UIcon` com prefixo `i-lucide-`

### 12.1 Regras de Imagem com `<NuxtImg>` + Cloudflare

**Nunca usar `<img>` cru.** Sempre `<NuxtImg>` para que a Vercel Image Optimization otimize automaticamente (resize, WebP/AVIF, compressão).

**Padrão obrigatório para toda imagem:**
```vue
<NuxtImg
  src="/images/nome-da-imagem.jpg"
  alt="Descrição clara e acessível da imagem"
  loading="lazy"
  width="800"
  height="600"
  sizes="sm:100vw md:50vw lg:400px"
  format="webp"
  quality="80"
/>
```

**Imagens acima da dobra (hero, logo):** usar `loading="eager"` e `fetchpriority="high"`:
```vue
<NuxtImg
  src="/images/hero.jpg"
  alt="..."
  loading="eager"
  fetchpriority="high"
  width="1200"
  height="800"
  sizes="sm:100vw lg:1200px"
/>
```

**Foto de membro da equipe:**
```vue
<NuxtImg
  src="/images/equipe/andre-barbieri.jpg"
  alt="André Barbieri, Neuropsicólogo Infantil"
  loading="lazy"
  width="400"
  height="400"
  sizes="sm:200px md:300px lg:400px"
  class="rounded-full object-cover"
  :modifiers="{ fit: 'cover', gravity: 'face' }"
/>
```

**Logo SVG:** usar diretamente como `<img>` ou inline — SVG não precisa de `<NuxtImg>`.

**Regras adicionais de imagem:**
- Sempre definir `width` e `height` explícitos para evitar layout shift (CLS)
- Sempre passar `sizes` com breakpoints para srcset automático
- Usar `fit: 'cover'` para fotos de pessoas, `fit: 'contain'` para logos e ilustrações
- Nomear arquivos em `kebab-case` sem espaços ou caracteres especiais
- Armazenar todas as imagens em `public/images/` organizado por contexto:

```
public/
  images/
    equipe/
      andre-barbieri.jpg
      carolina-teixeira.jpg
    og-image.jpg          # Open Graph — 1200×630px
    logo.svg
    neuronio-deco.svg
```

---

## 13. Deploy — Vercel

### 13.1 Estratégia de rendering

O site usa **SSR** (`nuxt build`) na Vercel:
- Rendering server-side no edge — melhor para SEO e conteúdo dinâmico
- Integração nativa com `@nuxt/content` — sem configuração de banco extra
- Nuxt detecta o ambiente Vercel automaticamente via Git integration — sem configuração extra

### 13.2 Configuração no painel Vercel

| Campo | Valor |
|---|---|
| **Framework Preset** | Nuxt.js (detectado automaticamente) |
| **Build command** | `npx nuxt build` |
| **Output directory** | `.output/public` (gerenciado automaticamente) |
| **Node.js version** | `20.x` (definir em Settings → General → Node.js Version) |

### 13.3 Deploy via Git (recomendado)

```bash
# Importar repositório em vercel.com/new
# Vercel detecta Nuxt automaticamente e configura o build

# Após conectar, cada push para main faz deploy de produção automático
git push origin main

# Branches geram preview deployments com URL única — ótimo para testar antes de publicar
git push origin feature/nova-secao
```

### 13.4 Variáveis de ambiente na Vercel

Configurar em **Project → Settings → Environment Variables:**

```
NUXT_PUBLIC_SITE_URL=https://sinapiticos.com.br
```

Se usar Formspree para o formulário de contato:
```
NUXT_PUBLIC_FORMSPREE_ID=seu_id_aqui
```

---

## 14. Fases de Desenvolvimento

| Fase | Escopo |
|---|---|
| **MVP** | Setup do projeto + tema no `main.css` + `app.config.ts` + Home + Sobre + Serviços + Equipe + Contato + deploy Vercel configurado |
| **Fase 2** | Ação Social + Recursos (estrutura `@nuxt/content` + primeiros conteúdos) |
| **Fase 3** | Páginas individuais por serviço, ferramentas web para psicólogos, mapa no contato |

---

*Documento gerado para orientar o desenvolvimento com Claude Code.*
*Fundadores: André Barbieri & Carolina Teixeira — Instituto Sinapíticos*
