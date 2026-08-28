import { createFileRoute, Link } from "@tanstack/react-router";
import { getProjectById } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Gallery } from "@/components/Gallery";

const title = "Numbium — Universo narrativo interativo em construção";
const description =
  "Numbium é um projeto de jogo narrativo interativo em pré-produção, com construção de universo, regras, escolhas, consequências, investigação e uma engine própria em desenvolvimento.";

export const Route = createFileRoute("/numbium")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: NumbiumPage,
});

const laws = [
  ["01", "Tudo que vive possui vontades."],
  ["02", "As Vontades são forças reais da natureza."],
  ["03", "Toda Vontade gera outra. Nenhuma Vontade existe completamente sozinha."],
  ["04", "Os Titãs morreram. As Vontades não."],
];

const system = [
  {
    title: "Ressonância",
    text: "Define qual Vontade um indivíduo consegue manifestar. Normalmente, a conexão ocorre uma única vez durante a vida.",
  },
  {
    title: "Conhecimento",
    text: "Determina o que o indivíduo realmente sabe fazer com sua Vontade. A Vontade não substitui conhecimento técnico ou compreensão.",
  },
  {
    title: "Proficiência",
    text: "Representa a capacidade de executar uma manifestação com precisão e controle.",
  },
  {
    title: "Corpo",
    text: "O organismo impõe o limite físico e neurológico. O custo aparece como esforço, sobrecarga e risco real.",
  },
  {
    title: "Comunicação",
    text: "Aprender a interpretar e comunicar necessidades à rede viva de Numbium pode alterar a forma como o planeta responde.",
  },
];

const narrativeLayers = [
  {
    title: "Verdade do universo",
    text: "Aquilo que realmente aconteceu, independentemente de personagens ou jogador conhecerem.",
  },
  {
    title: "O que os personagens acreditam",
    text: "Conhecimento, crenças, memórias, preconceitos e interpretações individuais que podem estar incompletos ou errados.",
  },
  {
    title: "O que o jogador sabe",
    text: "Aquilo que foi efetivamente descoberto durante a experiência — que também pode ser pista, hipótese, rumor ou interpretação equivocada.",
  },
];

const choiceTypes = [
  "Moral",
  "Relacional",
  "Estratégica",
  "Investigativa",
  "Exploratória",
  "Sacrifício",
  "Identidade",
  "Conhecimento",
  "Ação",
];

const engineModules = [
  "Scenes",
  "Choices",
  "Flags",
  "Characters",
  "Inventory",
  "Conditions",
  "Consequences",
  "Knowledge",
  "Relationships",
  "Save / Load",
];

const developmentSteps = [
  "Visão",
  "Bíblia / Universo",
  "Personagens + Mistério",
  "Temporada",
  "Consequências",
  "Engine",
  "Protótipo",
  "Episódio 1",
  "Playtest",
];

function NumbiumPage() {
  const project = getProjectById("numbium");

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <p className="text-muted-foreground">Projeto não encontrado nos dados.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link
        to="/projetos"
        className="text-sm font-semibold text-cyan hover:text-foreground"
      >
        ← Voltar para projetos
      </Link>

      <div className="mt-8">
        <SectionHeader
          eyebrow="Projeto em destaque · Início do desenvolvimento: 17/08/2026"
          title="NUMBIUM"
          description="Universo em construção · Pré-produção · Jogo narrativo interativo · Projeto conjunto de Victor Batista Rocha e Iris Luiza Ribeiro de Oliveira"
        />
      </div>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-7 text-lg leading-relaxed text-foreground">
            Uma história em que cada escolha pode mudar não apenas o destino dos
            personagens, mas aquilo que o jogador acredita ser verdade sobre
            Numbium.
          </p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Numbium é um planeta vivo e ancestral cuja vida está conectada por
              uma gigantesca rede biológica. Dessa conexão surgem as Vontades,
              forças fundamentais da natureza que podem se manifestar através dos
              seres vivos e do próprio planeta.
            </p>
            <p>
              Muito antes da chegada da humanidade, Titãs e Invasores travaram a
              Guerra Antiga. Os Titãs foram destruídos, os Invasores perderam sua
              capacidade de sustentar o futuro da própria espécie e Numbium ficou
              marcado pelos corpos, memórias e cicatrizes desse conflito.
            </p>
            <p>
              Milhões de anos depois, a humanidade chega pelo mesmo motivo que
              levou os Invasores ao planeta: procurar um novo lar.
            </p>
          </div>
        </div>

        <div className="card-glow overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt="Imagem de apresentação de Numbium"
            className="aspect-[3/2] w-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="O mundo"
          title="Um planeta que já existia antes do jogador"
          description="A história de Numbium não começa quando os protagonistas chegam. O mundo possui passado, memória, conflitos e consequências anteriores à narrativa principal."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Vontades",
              text: "Forças fundamentais da natureza. Energia e Vontade são o mesmo fenômeno, não uma reserva de mana separada.",
            },
            {
              title: "Titãs",
              text: "Uma antiga civilização profundamente ligada às Vontades. Seus corpos e vestígios continuam incorporados ao planeta.",
            },
            {
              title: "Invasores",
              text: "Uma espécie que chegou procurando sobrevivência e um novo lar, mas transformou a colonização em uma guerra pela existência.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Leis do universo"
          title="As Vontades não funcionam como magia sem regras"
          description="O sistema foi pensado para que intenção, conhecimento, proficiência, corpo e comunicação limitem de forma consistente aquilo que pode ser realizado."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {laws.map(([number, text]) => (
            <article
              key={number}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan">
                LEI {number}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Sistema de manifestação"
          title="A Vontade oferece a possibilidade. O indivíduo decide o que fazer com ela."
          description="A ressonância normalmente ocorre uma única vez e define qual Vontade o indivíduo consegue utilizar. O resultado depende de outros fatores."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {system.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-secondary/20 p-6 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Limite real:</strong> uma
          manifestação complexa pode causar dor, exaustão, alterações
          sensoriais, perda de controle, danos neurológicos, sequelas, colapso
          ou morte quando ultrapassa o que o organismo consegue sustentar.
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Narrativa"
          title="Verdade, crença e conhecimento não são a mesma coisa"
          description="Numbium separa aquilo que realmente aconteceu daquilo que os personagens acreditam e daquilo que o jogador conseguiu descobrir."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {narrativeLayers.map((layer, index) => (
            <article
              key={layer.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-cyan">
                CAMADA {index + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{layer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {layer.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold">Recontextualização</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A proposta é que grandes revelações não precisem dizer que “tudo
            estava errado”. O jogador pode descobrir que algumas pistas eram
            verdadeiras, mas estavam sendo interpretadas da maneira errada.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Escolhas"
          title="Decisões que podem atravessar a temporada"
          description="As decisões são pensadas em categorias diferentes para que nem toda escolha produza o mesmo tipo de consequência."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {choiceTypes.map((choice) => (
            <span
              key={choice}
              className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground"
            >
              {choice}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            "Escolha",
            "Efeito imediato",
            "Episódio posterior",
            "Nova consequência",
            "Final",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <span className="text-xs font-semibold text-cyan">0{index + 1}</span>
              <p className="mt-2 text-sm font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Engine"
          title="A tecnologia nasce das necessidades da narrativa"
          description="A engine definitiva ainda está em desenvolvimento. A arquitetura planejada prioriza sistemas separados para que escolhas e consequências possam ser testadas sem prender a história a um único fluxo."
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {engineModules.map((module) => (
            <div
              key={module}
              className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-semibold"
            >
              {module}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold">Arquitetura de save</h3>
          <div className="mt-4 grid gap-2 font-mono text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
            {[
              "version",
              "player",
              "currentScene",
              "characters",
              "world",
              "knowledge",
              "inventory",
              "flags",
              "relationships",
              "settings",
            ].map((item) => (
              <span
                key={item}
                className="rounded-md bg-secondary/60 px-3 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Processo"
          title="Numbium está sendo construído em etapas"
          description="A pré-produção organiza o trabalho para evitar que código seja escrito antes de universo, temporada, consequências e arquitetura estarem suficientemente definidos."
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {developmentSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan/40 text-xs font-semibold text-cyan">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Playtest"
          title="O objetivo não é apenas funcionar — é fazer o jogador sentir que suas escolhas importam"
          description="O plano de testes inclui jogadores que ainda não conhecem Numbium, rejogabilidade, consequências, acessibilidade e desempenho."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "O jogador sabia por que estava escolhendo?",
            "Ele percebeu consequências?",
            "Ele faria escolhas diferentes em uma segunda partida?",
            "Alguma escolha pareceu falsa?",
            "Qual mistério despertou curiosidade?",
            "O jogo continua compreensível para quem não conhece o universo?",
          ].map((question) => (
            <div
              key={question}
              className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground"
            >
              {question}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Registros visuais"
          title="Galeria"
          description="Espaços, estruturas e conceitos visuais associados ao universo."
        />

        <div className="mt-8">
          {project.gallery && <Gallery items={project.gallery} />}
        </div>
      </section>

      {project.collaborators && project.collaborators.length > 0 && (
        <section className="mt-12 border-t border-border/50 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Colaboração
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {project.collaborators.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border px-3 py-1.5 text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14 rounded-2xl border border-border bg-secondary/20 p-7 md:p-9">
        <h2 className="text-2xl font-display">Documentação</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          O projeto possui um Caderno de Pré-Produção dedicado à construção do
          universo, regras, narrativa, consequências, arquitetura da engine,
          prototipagem e playtest.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-cyan">
          Versão 1.0 · Pré-produção · Documento de trabalho
        </p>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link
          to="/projetos"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan/60 hover:text-cyan"
        >
          ← Voltar para projetos
        </Link>
        <Link
          to="/contato"
          className="rounded-full bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105"
        >
          Falar sobre Numbium
        </Link>
      </div>
    </div>
  );
}
