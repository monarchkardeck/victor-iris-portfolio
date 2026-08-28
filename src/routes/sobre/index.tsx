import { createFileRoute, Link } from "@tanstack/react-router";
import { people } from "@/data/people";
import { SectionHeader } from "@/components/SectionHeader";

const title = "Quem somos nós? — Victor & Iris";

const description =
  "Conheça a história, a proposta de trabalho e os perfis individuais de Victor e Iris.";

export const Route = createFileRoute("/sobre/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),

  component: SobrePage,
});

const areas = [
  {
    title: "Construção de universos",
    text: "Narrativa, mundo e sistema desenhados juntos, como um só projeto.",
    detail:
      "Criamos universos que não dependem apenas de uma história. Trabalhamos narrativa, geografia, regras, personagens, conflitos e sistemas para que cada parte sustente as outras.",
    to: "/o-que-fazemos/universos" as const,
  },
  {
    title: "Experimentos com IA",
    text: "Protótipos conceituais que exploram linguagem, emoção e interpretação.",
    detail:
      "Testamos ideias de inteligência artificial por meio de protótipos, fluxos e interfaces experimentais, sempre deixando claro o que é conceito, demonstração ou implementação real.",
    to: "/o-que-fazemos/ia" as const,
  },
  {
    title: "Desenvolvimento web",
    text: "Interfaces leves, acessíveis e feitas para durar além do protótipo.",
    detail:
      "Transformamos ideias em interfaces e experiências web com foco em clareza, organização, responsividade, acessibilidade e manutenção.",
    to: "/o-que-fazemos/web" as const,
  },
];

function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeader
        eyebrow="Sobre"
        title="Quem somos nós?"
        description="Somos um laboratório colaborativo onde tecnologia, narrativa e experimentação se encontram. A parceria é compartilhada; as trajetórias pessoais continuam sendo individuais."
      />

      <section className="mt-8 rounded-2xl border border-border bg-card p-7 md:p-9">
        <h2 className="text-2xl font-display">
          Nossa história e nossa proposta
        </h2>

        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Victor e Iris trabalham em conjunto em projetos que misturam
            criação, tecnologia e exploração de ideias. O laboratório existe
            para transformar conceitos em protótipos, experiências e mundos
            que possam ser testados, reescritos e aprofundados ao longo do
            tempo.
          </p>

          <p>
            Em vez de tratar cada projeto como algo isolado, a proposta é
            construir um ecossistema: narrativa pode alimentar tecnologia,
            tecnologia pode viabilizar uma experiência e uma experiência pode
            gerar novas histórias e possibilidades.
          </p>

          <p>
            Aqui, o trabalho conjunto aparece nos projetos e na linguagem do
            laboratório; já as informações profissionais e pessoais de cada
            pessoa ficam separadas em seus próprios perfis.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="O que fazemos"
          title="Um laboratório em constante construção"
          description="Escolha uma área para conhecer melhor nosso processo e o tipo de trabalho que queremos desenvolver."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.title}
              to={area.to}
              className="card-glow group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold">{area.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.text}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                {area.detail}
              </p>

              <span className="mt-5 inline-flex text-sm font-semibold text-cyan">
                Ver explicação completa →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 pb-4">
        <SectionHeader
          eyebrow="Quem somos"
          title="Conheça cada pessoa separadamente"
          description="A parceria é conjunta, mas cada perfil tem sua própria história, experiência, competências e contatos."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            to="/sobre/victor"
            className="card-glow rounded-2xl p-7 transition-transform hover:-translate-y-1"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Perfil individual
            </span>

            <h3 className="mt-3 text-2xl font-display">
              {people.victor.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {people.victor.role}
            </p>

            <span className="mt-6 inline-flex text-sm font-semibold text-cyan">
              Ver perfil →
            </span>
          </Link>

          <Link
            to="/sobre/iris"
            className="card-glow rounded-2xl p-7 transition-transform hover:-translate-y-1"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Perfil individual
            </span>

            <h3 className="mt-3 text-2xl font-display">
              {people.iris.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {people.iris.role}
            </p>

            <span className="mt-6 inline-flex text-sm font-semibold text-cyan">
              Ver perfil →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}