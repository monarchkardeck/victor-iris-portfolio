import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

const title = "Desenvolvimento web";

const description =
  "Interfaces, experiências interativas e projetos construídos para funcionar além do protótipo.";

// ============================================================
// LINK DO JOGO
// ============================================================
//
// Depois que o Numbium Dungeon estiver hospedado,
// coloque aqui a URL pública dele.
//
// Exemplo:
// https://seuusuario.github.io/numbium-dungeon/
//
const GAME_URL =
  "https://monarchkardeck.github.io/numbium-dungeon/";

export const Route = createFileRoute("/o-que-fazemos/web")({
  head: () => ({
    meta: [
      { title: `${title} — Victor & Iris` },
      {
        name: "description",
        content: description,
      },
    ],
  }),

  component: AreaPage,
});

function AreaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">

      {/* VOLTAR */}
      <Link
        to="/sobre"
        className="text-sm font-semibold text-cyan hover:text-foreground"
      >
        ← Voltar para Quem somos nós?
      </Link>

      {/* CABEÇALHO */}
      <div className="mt-8">
        <SectionHeader
          eyebrow="O que fazemos"
          title={title}
          description={description}
        />
      </div>

      {/* ====================================================== */}
      {/* INTRODUÇÃO */}
      {/* ====================================================== */}

      <section className="mt-8 rounded-2xl border border-border bg-card p-7 md:p-9">
        <div className="max-w-4xl space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Transformamos ideias em experiências web organizadas,
            responsivas e interativas.
          </p>

          <p>
            Trabalhamos com interfaces, sistemas, protótipos e experiências
            executadas diretamente no navegador, buscando uma base que possa
            continuar evoluindo depois da primeira versão.
          </p>

          <p>
            Um dos projetos que representa essa abordagem é o{" "}
            <strong className="text-foreground">
              Numbium Dungeon
            </strong>
            , um jogo independente desenvolvido como experimento de sistemas,
            interação e desenvolvimento web.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TECNOLOGIAS / ABORDAGEM */}
      {/* ====================================================== */}

      <section className="mt-14">
        <h2 className="text-2xl font-display">
          Como trabalhamos nessa área
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Interfaces responsivas",
            "Componentização",
            "Interação e sistemas",
            "Acessibilidade e manutenção",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* JOGO DESTAQUE */}
      {/* ====================================================== */}

      <section className="mt-16">
        <div className="rounded-3xl border border-border bg-card p-7 md:p-9">

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
                Projeto em destaque
              </p>

              <h2 className="mt-2 text-3xl font-display">
                Numbium Dungeon
              </h2>
            </div>

            <span className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              Protótipo jogável
            </span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* VISUAL */}
            <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-border bg-black/30 p-8">
              <div className="text-center">
                <p className="text-5xl">🎮</p>

                <p className="mt-4 text-lg font-semibold">
                  Numbium Dungeon
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Dungeon tática por turnos
                </p>
              </div>
            </div>

            {/* TEXTO */}
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Um protótipo jogável desenvolvido para navegador,
                combinando exploração, combate, habilidades, gerenciamento
                de recursos, inimigos com diferentes comportamentos e
                sistemas inspirados no universo de Numbium.
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  Tecnologias
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Vite",
                    "Canvas",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTÃO DO JOGO */}
              <div className="mt-8 flex flex-wrap gap-3">

                <a
  href={GAME_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex rounded-full bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50"
>
  ▶ Jogar agora
</a>

                <Link
                  to="/numbium"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan/60 hover:text-cyan"
                >
                  Conhecer Numbium
                </Link>

              </div>
            </div>
          </div>

          {/* MECÂNICAS */}
          <div className="mt-10 border-t border-border/70 pt-8">

            <h3 className="text-xl font-display">
              Elementos do protótipo
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Exploração",
                "Combate por turnos",
                "IA de inimigos",
                "Habilidades",
                "Energia",
                "Vontades",
                "Gestão de recursos",
                "Condição de vitória",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTATO */}
      {/* ====================================================== */}

      <div className="mt-12 flex flex-wrap gap-3">

        <Link
          to="/projetos"
          className="rounded-full bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105"
        >
          Ver projetos
        </Link>

        <Link
          to="/contato"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-cyan/60 hover:text-cyan"
        >
          Falar conosco
        </Link>

      </div>
    </div>
  );
}
