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

      {/* ====================================================== */}
      {/* NOSSA HISTÓRIA */}
      {/* ====================================================== */}

      <section className="mt-8 rounded-2xl border border-border bg-card p-7 md:p-9">
        <h2 className="text-2xl font-display">
          Nossa história e nossa proposta
        </h2>

        <div className="mt-6 max-w-4xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* COMO SE CONHECERAM */}

          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Como vocês se conheceram?
            </h3>

            <p>
              A gente se esbarrou pelo algoritmo. Entre 2021 e 2022, o perfil
              da Iris vivia aparecendo em “pessoas que você talvez conheça” e
              nas sugestões para seguir. Até que um dia ela me seguiu e
              respondeu um story com um “kkkkkk”. Dali pra frente, foi só
              história.
            </p>

            <p className="mt-3">
              A gente se chama de Pompom e Bombom — brincadeira interna que
              resume bem o tom: a gente se acha, se cutuca e se completa.
            </p>
          </div>

          {/* PRIMEIRO ENCONTRO */}

          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              E o primeiro encontro?
            </h3>

            <p>
              Foi no nosso primeiro beijo, numa noite em Perus, com o céu
              aberto e uma conversa que não acabava mais.
            </p>

            <p className="mt-3">
              Eu escrevi no diário naquela madrugada:
            </p>

            <blockquote className="mt-3 border-l-2 border-cyan pl-4 italic text-foreground/90">
              “quando ela me beijou foi como se o meu tempo tivesse congelado
              nos lábios dela.”
            </blockquote>

            <p className="mt-3">
              Foi mágico. E continua sendo.
            </p>
          </div>

          {/* TRABALHO */}

          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Como é o trabalho de vocês?
            </h3>

            <p>
              A Iris é a organização; eu sou o caos criativo. Eu tenho
              autismo e hiperfoco em ficção, então vivo mergulhado em ideias;
              ela organiza, lapida e ajuda a transformar em algo possível.
            </p>

            <p className="mt-3">
              A gente discute rindo — quem vê de fora acha que é briga
              combinada, mas é só que as ideias nem sempre batem.
            </p>

            <p className="mt-3">
              Tem música rolando (Rosalía, Maluma, Camilo, Ariana Grande,
              Ebony, Imagine Dragons...), papel rasgado, rabisco e cola.
              Bastante cola.
            </p>
          </div>

          {/* QUANDO UM PROJETO NÃO DÁ CERTO */}

          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              E quando um projeto não dá certo?
            </h3>

            <p>
              A gente insiste até dar certo, mas com pausas pra ficar junto e
              cuidar da saúde mental.
            </p>

            <p className="mt-3">
              O laboratório não é só produção; é também esse espaço de
              respirar.
            </p>
          </div>

          {/* PROPOSTA */}

          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Qual é a proposta de vocês?
            </h3>

            <p>
              Construir um ecossistema onde narrativa alimenta tecnologia,
              tecnologia viabiliza experiências e experiências geram novas
              histórias.
            </p>

            <p className="mt-3">
              Não tratamos cada projeto como algo isolado: tudo conversa.
            </p>

            <p className="mt-3">
              A imagem que a gente gosta é de uma cozinha bagunçada, cheia de
              ingredientes diferentes, da qual sai algo de lamber os beiços.
              Ou duas crianças de barba montando uma estrutura planetária —
              algo maior que a gente.
            </p>
          </div>

          {/* ALIANÇA */}

          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              E essa aliança?
            </h3>

            <p>
              Pra mim, a aliança é como um fio vermelho do destino (
              <em>akai ito</em>); pra Iris, a aliança é a aliança em si.
            </p>

            <p className="mt-3">
              No fim, é isso: uma parceria criativa e romântica, que aparece
              nos projetos e na linguagem do laboratório.
            </p>

            <p className="mt-3">
              As informações profissionais e pessoais de cada um continuam
              separadas nos perfis, mas a história — essa é nossa.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* O QUE FAZEMOS */}
      {/* ====================================================== */}

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
              <h3 className="text-lg font-semibold">
                {area.title}
              </h3>

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

      {/* ====================================================== */}
      {/* PERFIS INDIVIDUAIS */}
      {/* ====================================================== */}

      <section className="mt-16 pb-4">
        <SectionHeader
          eyebrow="Quem somos"
          title="Conheça cada pessoa separadamente"
          description="A parceria é conjunta, mas cada perfil tem sua própria história, experiência, competências e contatos."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* VICTOR */}

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

          {/* IRIS */}

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
