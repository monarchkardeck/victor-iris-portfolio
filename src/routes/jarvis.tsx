import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { getProjectById } from "@/data/projects";

const title = "JARVIS — Assistente de IA em desenvolvimento";

const description =
  "Conheça o JARVIS, nome provisório de um assistente de inteligência artificial em construção.";

export const Route = createFileRoute("/jarvis")({
  head: () => ({
    meta: [
      { title: `${title} — Victor & Iris` },
      { name: "description", content: description },
    ],
  }),
  component: JarvisPage,
});

function JarvisPage() {
  const project = getProjectById("jarvis");

  if (!project) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-muted-foreground">
          Os dados do projeto JARVIS não foram encontrados.
        </p>
        <Link
          to="/projetos"
          className="mt-4 inline-flex text-sm font-semibold text-cyan hover:text-foreground"
        >
          Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Link
        to="/o-que-fazemos/ia"
        className="text-sm font-semibold text-cyan hover:text-foreground"
      >
        ← Voltar para Experimentos com IA
      </Link>

      <div className="mt-8">
        <SectionHeader
          eyebrow="Experimentos com IA"
          title={project.title}
          description={project.description}
        />
      </div>

      <section className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-2xl border border-border bg-card p-3">
          <img
            src={project.image}
            alt="Capa conceitual do projeto JARVIS"
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
            {project.status}
          </span>

          <h2 className="text-2xl font-display">
            Um assistente em construção
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.fullDescription}
          </p>

          <div>
            <h3 className="mb-3 text-sm font-semibold">
              Tecnologias e áreas de pesquisa
            </h3>

            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          eyebrow="Pesquisa e desenvolvimento"
          title="O que estamos explorando"
          description="O objetivo é aproximar modelos de inteligência artificial, memória e ferramentas digitais em uma arquitetura modular."
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold">Conversação e modelos</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Exploração de modelos de IA locais e serviços externos, conforme
              as configurações e integrações disponíveis.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold">Memória e contexto</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Organização de informações para dar continuidade às interações
              e apoiar tarefas futuras.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold">Ferramentas e automação</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Integração gradual de ferramentas para realizar tarefas digitais
              de acordo com as permissões definidas.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold">Arquitetura modular</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Reorganização dos componentes para facilitar a manutenção,
              os testes e a evolução do assistente.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-border bg-card p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
          Estado atual
        </p>

        <h2 className="mt-3 text-xl font-display">
          Em reestruturação arquitetural
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          O projeto está em desenvolvimento. As capacidades, integrações e
          ferramentas serão apresentadas como disponíveis somente depois de
          serem verificadas e validadas. JARVIS é um nome provisório.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/projetos"
          className="inline-flex rounded-full bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105"
        >
          Ver projetos
        </Link>

        <Link
          to="/o-que-fazemos/ia"
          className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-cyan/60 hover:text-cyan"
        >
          Experimentos com IA
        </Link>
      </div>
    </div>
  );
}