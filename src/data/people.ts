// ============================================================
// PERFIS INDIVIDUAIS
// ============================================================

export interface Experience {
  cargo: string;
  empresa: string;
  periodo: string;
  local: string;
  descricao?: string;
}

export interface Language {
  idioma: string;
  nivel: string;
}

export interface Education {
  instituicao: string;
  curso: string;
  periodo: string;
}

export interface ProfileHighlight {
  titulo: string;
  texto: string;
}

export interface CompetenciasArea {
  area: string;
  competencias: string;
}

export interface PersonProfile {
  slug: "victor" | "iris";
  name: string;
  role: string;
  intro: string;
  bio: string;
  partnerName?: string;
  summary: string;

  destaques: ProfileHighlight[];
  competenciasPorArea: CompetenciasArea[];

  social: {
    linkedin?: string;
    whatsapp?: string;
    instagram?: string;
    email?: string;
    catho?: string;
  };

  competencias: string[];
  idiomas: Language[];
  certificacoes: string[];
  formacao: Education[];
  experiencia: Experience[];
}

export const people: Record<"victor" | "iris", PersonProfile> = {
  // ==========================================================
  // VICTOR
  // ==========================================================

  victor: {
    slug: "victor",

    name: "Victor Batista Rocha",

    role: "Tecnologia, Criação e Inteligência Artificial Aplicada",

    intro:
      "Meu trabalho está na interseção entre tecnologia, criatividade, narrativa e inteligência artificial — onde a lógica encontra a inovação, e processos são transformados em experiências.",

    bio:
      "Profissionais multidisciplinares com sólida vivência em operações de alto fluxo, hospitalidade e coordenação de equipes. Nossa trajetória combina gestão eficiente de ambientes dinâmicos com a capacidade de estruturar processos, resolver problemas complexos e garantir padrões rigorosos de qualidade e compliance.",

    partnerName: "Iris Luiza Ribeiro de Oliveira",

    summary:
      "Este perfil apresenta minha trajetória profissional, competências, áreas de interesse e a forma como tecnologia, criação e inteligência artificial aplicada convergem no meu trabalho.",

    destaques: [
      {
        titulo: "Liderança de operações de grande escala",
        texto:
          "Gerenciamento simultâneo de múltiplas unidades em projetos globais, coordenando equipes e fluxos de até 1.800 pessoas/dia com controle logístico de alta precisão.",
      },

      {
        titulo: "Experiência prática em hospitalidade e varejo",
        texto:
          "Atuação como bartender, além de passagens estratégicas em logística e atendimento ao cliente.",
      },

      {
        titulo: "Raciocínio lógico apurado",
        texto:
          "Reconhecido com medalha de ouro na Olimpíada de Matemática do Estado de São Paulo (OMESP).",
      },

      {
        titulo: "Autodidatismo e adaptabilidade",
        texto:
          "Facilidade para absorver novos conhecimentos e familiaridade com ferramentas tecnológicas e IA aplicadas à otimização de rotinas.",
      },

      {
        titulo: "Inglês avançado",
        texto:
          "Inglês avançado e forte orientação para resultados, mantendo alto desempenho mesmo em cenários de forte pressão.",
      },
    ],

    competenciasPorArea: [
      {
        area: "Tecnologia",
        competencias:
          "Programação (computação), Desenvolvimento web, Facilidade de adaptação a novos sistemas",
      },

      {
        area: "IA e Inovação",
        competencias:
          "Ferramentas de Inteligência Artificial, Otimização de processos, Automação de rotinas",
      },

      {
        area: "Gestão",
        competencias:
          "Coordenação de equipes, Logística, Controle de estoque, Gestão de fluxo, Compliance",
      },

      {
        area: "Hospitalidade",
        competencias:
          "Operação de bar, Atendimento ao cliente, Eventos, Preparação de drinks",
      },

      {
        area: "Pessoais",
        competencias:
          "Liderança, Comunicação, Organização, Proatividade, Resolução de conflitos, Pensamento analítico e sistêmico",
      },
    ],

    social: {
      linkedin:
        "https://www.linkedin.com/in/victor-batista-rocha-9a44913a9?utm_source=share_via&utm_content=profile&utm_medium=member_android",

      whatsapp: "https://wa.me/5511997834013",

      instagram: "https://instagram.com/bombomdeoliveira_2",

      email: "victorbatistapb690@gmail.com",
    },

    competencias: [
      "Programação (computação)",
      "Desenvolvimento web",
      "Facilidade de adaptação a novos sistemas",
      "Ferramentas de Inteligência Artificial",
      "Otimização de processos",
      "Automação de rotinas",
      "Coordenação de equipes",
      "Logística",
      "Controle de estoque",
      "Gestão de fluxo",
      "Compliance",
      "Operação de bar",
      "Atendimento ao cliente",
      "Eventos",
      "Preparação de drinks",
      "Liderança",
      "Comunicação",
      "Organização",
      "Proatividade",
      "Resolução de conflitos",
      "Pensamento analítico e sistêmico",
    ],

    idiomas: [
      {
        idioma: "Português",
        nivel: "Nativo",
      },

      {
        idioma: "Inglês",
        nivel: "Avançado (Full Professional)",
      },

      {
        idioma: "Espanhol",
        nivel: "Básico (Limited Working)",
      },
    ],

    certificacoes: [
      "Medalhista de Ouro — OMESP (Olimpíada de Matemática do Estado de São Paulo)",
    ],

    formacao: [
      {
        instituicao: "EE Brigadeiro Gavião Peixoto",
        curso: "Ensino Médio – Regular",
        periodo: "jan/2021 – dez/2025",
      },

      {
        instituicao: "Drinks Terapia",
        curso: "Curso de Drinks como Profissional",
        periodo: "Em andamento",
      },

      {
        instituicao: "Faculdade",
        curso: "Pedagogia",
        periodo: "Em andamento",
      },

      {
        instituicao: "Faculdade",
        curso: "Administração",
        periodo: "Em andamento",
      },
    ],

    experiencia: [
      {
        cargo: "Pessoal da cozinha",
        empresa: "Caluma Buffet e Restaurante",
        periodo: "mai/2026 – Presente",
        local: "São Paulo, SP",
      },

      {
        cargo: "Operador de telemarketing",
        empresa: "Actionline",
        periodo: "nov/2025 – mar/2026",
        local: "São Paulo, SP",
      },

      {
        cargo: "Gerente operacional",
        empresa: "World",
        periodo: "out/2024 – jun/2025",
        local: "São Paulo, SP",
      },

      {
        cargo: "Líder de logística",
        empresa: "Live – Raposo Shopping",
        periodo: "set/2024 – mar/2025",
        local: "São Paulo, SP",
      },

      {
        cargo: "Atendente de balcão / Operacional",
        empresa: "Pizza Hut",
        periodo: "dez/2024 – fev/2025",
        local: "São Paulo, SP",
      },
    ],
  },

  // ==========================================================
  // IRIS
  // ==========================================================

  iris: {
    slug: "iris",

    name: "Iris Luiza Ribeiro de Oliveira",

    role: "Colaboração criativa, narrativa e construção de projetos",

    intro:
      "Colaboradora criativa e parceira na construção de projetos que unem narrativa, tecnologia e experimentação.",

    bio:
      "Iris Luiza Ribeiro de Oliveira participa da construção dos projetos desenvolvidos em conjunto, contribuindo para a dimensão criativa, narrativa e conceitual do laboratório.",

    partnerName: "Victor Batista Rocha",

    summary:
      "Perfil individual em construção. As informações profissionais, acadêmicas e de experiência de Iris serão adicionadas conforme forem definidas, mantendo seus dados separados dos dados de Victor.",

    destaques: [],

    competenciasPorArea: [],

    social: {
      instagram: "https://instagram.com/pompom_batstuts",

      whatsapp: "https://wa.me/5511982322106",

      email: "irisluizarj@gmail.com",

      catho: "https://www.catho.com.br/curriculo",
    },

    competencias: [],

    idiomas: [],

    certificacoes: [],

    formacao: [],

    experiencia: [],
  },
};

// ============================================================
// COMPATIBILIDADE COM O RESTANTE DO PROJETO
// ============================================================

export const profile = people.victor;

export function getPersonBySlug(
  slug: string,
): PersonProfile | undefined {
  if (slug === "victor" || slug === "iris") {
    return people[slug];
  }

  return undefined;
}
