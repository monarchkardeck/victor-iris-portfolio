import { createFileRoute, Link } from "@tanstack/react-router";
import { getProjectById, projects } from "@/data/projects";
import { profile } from "@/data/people";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { StatusBadge } from "@/components/StatusBadge";

const title = "Victor Batista Rocha & Iris Luiza — Tecnologia, criatividade e IA";

const description =
  "Laboratório de Victor e Iris: desenvolvimento web, inteligência artificial, narrativa e construção de universos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),

  component: Home,
});

const areas = [
  {
    title: "Construção de universos",
    text: "Narrativa, mundo e sistema desenhados juntos, como um só projeto.",
    icon: "✦",
    to: "/o-que-fazemos/universos" as const,
  },

  {
    title: "Experimentos com IA",
    text: "Protótipos conceituais que exploram linguagem, emoção e interpretação.",
    icon: "◈",
    to: "/o-que-fazemos/ia" as const,
  },

  {
    title: "Desenvolvimento web",
    text: "Interfaces leves, acessíveis e feitas para durar além do protótipo.",
    icon: "⬢",
    to: "/o-que-fazemos/web" as const,
  },
];

function Home() {
  const numbium = getProjectById("numbium");

  const others = projects.filter(
    (project) => project.id !== "numbium",
  );

  return (
    <>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Laboratório pessoal
          </p>

          <h1 className="text-5xl font-display font-bold leading-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-foreground via-primary to-cyan bg-clip-text text-transparent">
              {profile.name}
            </span>{" "}
            &<br />
            <span className="bg-gradient-to-r from-foreground via-primary to-cyan bg-clip-text text-transparent">
              {profile.partnerName}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground">
            Tecnologia, criatividade, narrativa e IA.
          </p>

          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projetos"
              className="rounded-full bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50"
            >
              Ver projetos
            </Link>

            <Link
              to="/sobre"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              Conhecer quem somos
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* NUMBIUM — PROJETO DESTAQUE */}
      {/* ===================================================== */}

      {numbium && (
        <section className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeader
            eyebrow="Projeto destaque"
            title={numbium.title}
            description="Um universo narrativo em construção, desenvolvido como projeto conjunto de Victor Batista Rocha e Iris Luiza Ribeiro de Oliveira."
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* ================================================= */}
            {/* CAPA COMPLETA */}
            {/* ================================================= */}

            <div className="group relative overflow-hidden rounded-3xl border border-border bg-black/30 p-3 shadow-2xl shadow-primary/10">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan/10 opacity-70" />

  <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl bg-black/50 p-5 sm:min-h-[520px] lg:min-h-[620px]">
    <img
      src={numbium.image}
      alt={`Capa de apresentação do projeto ${numbium.title}`}
      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
    />
  </div>
</div>

            {/* ================================================= */}
            {/* INFORMAÇÕES */}
            {/* ================================================= */}

            <div>
              <StatusBadge status={numbium.status} />

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {numbium.fullDescription}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {numbium.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <Link
                to="/numbium"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50"
              >
                Explorar o universo
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================== */}
      {/* OUTROS PROJETOS */}
      {/* ===================================================== */}

      {others.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <SectionHeader
            eyebrow="Projetos"
            title="Outros projetos"
            description="Aplicações, interfaces e experiências construídas para testar ideias na prática."
          />

          <div className="mt-8">
            <ProjectGrid projects={others.slice(0, 3)} />
          </div>
        </section>
      )}

      {/* ===================================================== */}
      {/* O QUE FAZEMOS */}
      {/* ===================================================== */}

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <SectionHeader
          eyebrow="O que fazemos"
          title="Um laboratório em constante construção"
          description="Cada área pode ser explorada separadamente para entender como transformamos ideias em projetos."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {areas.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="card-glow group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 text-3xl text-cyan transition-transform group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>

              <span className="mt-5 inline-flex text-sm font-semibold text-cyan">
                Explorar área →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}