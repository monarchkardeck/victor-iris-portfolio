// ============================================================
// PROJETOS
// ============================================================

export type ProjectCategory = "destaque" | "ia" | "web" | "lab";

export type ProjectStatus =
  | "Em desenvolvimento"
  | "Concluído"
  | "Protótipo";

export interface GalleryItem {
  image: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  status: ProjectStatus;
  linkProject?: string;
  linkCode?: string;
  route?: string;
  gallery?: GalleryItem[];
  collaborators?: string[];
}

// ============================================================
// CAMINHO BASE DAS IMAGENS
// ============================================================
//
// Usa o BASE_URL do Vite para funcionar tanto:
//
// Local:
// http://localhost:5173/victor-iris-portfolio/
//
// GitHub Pages:
// https://monarchkardeck.github.io/victor-iris-portfolio/
//
// ============================================================

const imageBase = `${import.meta.env.BASE_URL}images/numbium/`;

// Adicione aqui apenas os nomes das pessoas que participaram
// de cada projeto.

export const projects: Project[] = [
  {
    id: "numbium",

    title: "Numbium – Um universo em construção",

    category: "destaque",

    description:
      "Um universo interativo que une narrativa, tecnologia, IA e construção de mundos.",

    fullDescription:
      "Numbium é um universo experimental em construção que combina narrativa, tecnologia, exploração de ideias, inteligência artificial e desenvolvimento de experiências interativas.",

    // ========================================================
    // CAPA
    // ========================================================

    image: `${imageBase}capa.webp`,

    technologies: [
      "React",
      "TypeScript",
      "IA",
      "Narrativa Interativa",
    ],

    status: "Em desenvolvimento",

    // Ainda não há links externos definidos.
    linkProject: "#",
    linkCode: "#",

    route: "/numbium",

    collaborators: [
      "Victor Batista Rocha",
      "Iris Luiza Ribeiro de Oliveira",
    ],

    // ========================================================
    // GALERIA
    // ========================================================

    gallery: [
      {
        image: `${imageBase}conceito do planeta.webp`,
        caption:
          "Conceito do planeta Numbium — um mundo vivo e ancestral que serve como base para o universo.",
      },

      {
        image: `${imageBase}amanita.webp`,
        caption:
          "Amanita — conceito de criatura pertencente ao ecossistema de Numbium.",
      },

      {
        image: `${imageBase}kael.webp`,
        caption:
          "Kael — conceito de personagem do universo de Numbium.",
      },

      {
        image: `${imageBase}izan.webp`,
        caption:
          "Izan — conceito de personagem do universo de Numbium.",
      },

      {
        image: `${imageBase}juba.webp`,
        caption:
          "Juba — conceito de personagem do universo de Numbium.",
      },

      {
        image: `${imageBase}maya.webp`,
        caption:
          "Maya — conceito de personagem do universo de Numbium.",
      },

      {
        image: `${imageBase}paris.webp`,
        caption:
          "Paris — conceito de personagem do universo de Numbium.",
      },

      {
        image: `${imageBase}puf-espinhoso.webp`,
        caption:
          "Puf Espinhoso — conceito de criatura do ecossistema de Numbium.",
      },

      {
        image: `${imageBase}puf.webp`,
        caption:
          "Puf — conceito de criatura do ecossistema de Numbium.",
      },

      {
        image: `${imageBase}dedos de morto conceito 1.webp`,
        caption:
          "Dedos de Morto — conceito de criatura de Numbium.",
      },

      {
        image: `${imageBase}dedos de morto conceito 2.webp`,
        caption:
          "Dedos de Morto — variação de conceito da criatura.",
      },

      {
        image: `${imageBase}dente de sangue conceito 1.webp`,
        caption:
          "Dente de Sangue — conceito de criatura de Numbium.",
      },

      {
        image: `${imageBase}dente de sangue conceito 2.webp`,
        caption:
          "Dente de Sangue — variação de conceito da criatura.",
      },
    ],
  },
    {
    id: "jarvis",

    title: "JARVIS — Assistente de IA em desenvolvimento",

    category: "ia",

    description:
      "Um assistente de inteligência artificial em construção, com foco em memória, ferramentas e integração com serviços digitais.",

    fullDescription:
      "JARVIS é o nome provisório de um assistente de inteligência artificial para computador. O projeto explora uma arquitetura modular que reúne conversação, memória, integração com modelos de IA locais e em nuvem e ferramentas para executar tarefas digitais com controle de permissões. Atualmente, está passando por uma reestruturação arquitetural, com funcionalidades e integrações sendo avaliadas conforme seu desenvolvimento.",

    image: `${import.meta.env.BASE_URL}images/jarvis/capa.svg`,

    technologies: [
      "Python",
      "Inteligência Artificial",
      "SQLite",
      "Automação",
      "Integrações",
    ],

    status: "Em desenvolvimento",

    route: "/jarvis",
  },
];

// ============================================================
// FUNÇÕES UTILITÁRIAS
// ============================================================

export const getProjectById = (
  id: string,
): Project | undefined =>
  projects.find((project) => project.id === id);

export const getProjectsByCategory = (
  ...categories: ProjectCategory[]
): Project[] =>
  projects.filter((project) =>
    categories.includes(project.category),
  );