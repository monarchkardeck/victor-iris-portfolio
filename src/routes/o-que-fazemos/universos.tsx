import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

const title = "Construção de universos";
const description = "Narrativa, mundo e sistema desenhados juntos, como um só projeto.";

export const Route = createFileRoute("/o-que-fazemos/universos")({
  head: () => ({
    meta: [
      { title: `${title} — Victor & Iris` },
      { name: "description", content: description },
    ],
  }),
  component: AreaPage,
});

function AreaPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Link
        to="/sobre"
        className="text-sm font-semibold text-cyan hover:text-foreground"
      >
        ← Voltar para Quem somos nós?
      </Link>

      <div className="mt-8">
        <SectionHeader
          eyebrow="O que fazemos"
          title={title}
          description={description}
        />
      </div>

      <section className="mt-8 rounded-2xl border border-border bg-card p-7 md:p-9">
        <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p key="paragraph-0">Construímos universos a partir da relação entre narrativa, ambiente, personagens, conflitos e regras internas.</p>
            <p key="paragraph-1">A intenção é que o mundo não seja apenas um cenário. Ele precisa sustentar a história, gerar possibilidades e criar consequências para quem vive dentro dele.</p>
            <p key="paragraph-2">Numbium é o principal exemplo desse processo no portfólio atual: um projeto em construção contínua, no qual tecnologia e narrativa caminham juntas.</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-display">Como trabalhamos nessa área</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div key="0" className="rounded-xl border border-border bg-card p-5"><h3 className="font-semibold">Construção de mundo</h3></div>
            <div key="1" className="rounded-xl border border-border bg-card p-5"><h3 className="font-semibold">Narrativa e lore</h3></div>
            <div key="2" className="rounded-xl border border-border bg-card p-5"><h3 className="font-semibold">Sistemas e regras</h3></div>
            <div key="3" className="rounded-xl border border-border bg-card p-5"><h3 className="font-semibold">Personagens e conflitos</h3></div>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
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
