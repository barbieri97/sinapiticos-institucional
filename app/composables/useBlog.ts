export interface BlogPost {
  path: string;
  title: string;
  description: string;
  category: string;
  date: string;
  icon?: string;
  externalUrl?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useBlog = () => {
  // Não usa await — useAsyncData é reativo por natureza e o Nuxt resolve
  // todos os fetches antes de renderizar. Criar computed APÓS await quebra
  // o rastreamento de dependências do Vue 3.
  const { data: postsRaw } = useAsyncData("blog", () =>
    (queryCollection as any)("blog").all(),
  );

  const posts = computed<BlogPost[]>(() =>
    [...((postsRaw.value ?? []) as BlogPost[])].sort((a, b) =>
      (b.date ?? "").localeCompare(a.date ?? ""),
    ),
  );

  // Categorias extraídas dinamicamente do conteúdo — sem hardcode
  const categorias = computed<string[]>(() => {
    const unique = [
      ...new Set(posts.value.map((p) => p.category).filter(Boolean)),
    ];
    return unique.sort();
  });

  const categoriaAtiva = ref("todos");

  const postsFiltrados = computed<BlogPost[]>(() => {
    if (categoriaAtiva.value === "todos") return posts.value;
    return posts.value.filter((p) => p.category === categoriaAtiva.value);
  });

  function labelCategoria(cat: string): string {
    if (!cat) return "";
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }

  function iconCategoria(cat: string): string {
    const icons: Record<string, string> = {
      artigo: "i-lucide-book-open",
      guia: "i-lucide-scroll-text",
      link: "i-lucide-link",
      neurodesenvolvimento: "i-lucide-brain-circuit",
    };
    return icons[cat] ?? "i-lucide-file-text";
  }

  function postLink(post: BlogPost): string {
    const relativePath = post.path.startsWith("/blog")
      ? post.path.slice("/blog".length)
      : post.path;
    return `/blog${relativePath}`;
  }

  return {
    posts,
    categorias,
    categoriaAtiva,
    postsFiltrados,
    labelCategoria,
    iconCategoria,
    postLink,
  };
};
