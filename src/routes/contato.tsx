import { createFileRoute } from "@tanstack/react-router";
import { people } from "../data/people";
import { SectionHeader } from "@/components/SectionHeader";

const title = "Contato — Victor & Iris";

const description =
  "Fale com Victor e Iris pelo LinkedIn, WhatsApp, Instagram, e-mail ou Catho.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const victor = people.victor;
  const iris = people.iris;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeader
        eyebrow="Entre em contato"
        title="Fale conosco"
        description="A página reúne os contatos individuais e também serve como ponto de entrada para projetos e parcerias em conjunto."
      />

      <section className="mt-12">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Contato individual
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
              Contato individual
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold">
              {victor.name}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {victor.role}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {victor.social.linkedin && (
                <ContactChannel
                  label="LinkedIn"
                  value="Perfil profissional"
                  href={victor.social.linkedin}
                />
              )}

              {victor.social.whatsapp && (
                <ContactChannel
                  label="WhatsApp"
                  value="Conversa direta"
                  href={victor.social.whatsapp}
                />
              )}

              {victor.social.instagram && (
                <ContactChannel
                  label="Instagram"
                  value="@bombomdeoliveira_2"
                  href={victor.social.instagram}
                />
              )}

              {victor.social.email && (
                <ContactChannel
                  label="E-mail"
                  value={victor.social.email}
                  href={`mailto:${victor.social.email}`}
                />
              )}
            </div>

            <a
              href="/sobre/victor"
              className="mt-6 inline-flex text-sm font-semibold text-primary transition-colors hover:text-cyan"
            >
              Ver perfil de Victor →
            </a>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
              Contato individual
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold">
              {iris.name}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {iris.role}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {iris.social.catho && (
                <ContactChannel
                  label="Catho"
                  value="Perfil profissional"
                  href={iris.social.catho}
                />
              )}

              {iris.social.whatsapp && (
                <ContactChannel
                  label="WhatsApp"
                  value="Conversa direta"
                  href={iris.social.whatsapp}
                />
              )}

              {iris.social.instagram && (
                <ContactChannel
                  label="Instagram"
                  value="@pompom_batstuts"
                  href={iris.social.instagram}
                />
              )}

              {iris.social.email && (
                <ContactChannel
                  label="E-mail"
                  value={iris.social.email}
                  href={`mailto:${iris.social.email}`}
                />
              )}
            </div>

            <a
              href="/sobre/iris"
              className="mt-6 inline-flex text-sm font-semibold text-primary transition-colors hover:text-cyan"
            >
              Ver perfil de Iris →
            </a>
          </article>
        </div>
      </section>

      <section className="mt-16">
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Projetos e parcerias
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold">
            Vamos construir algo juntos?
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Para propostas envolvendo o laboratório como um todo,
            entre em contato por um dos canais individuais acima.
            Os projetos mostram no próprio portfólio quem participou
            de cada trabalho.
          </p>

          <a
            href="/projetos"
            className="mt-6 inline-flex rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-all hover:border-primary/50 hover:shadow-glow"
          >
            Ver projetos
          </a>
        </div>
      </section>
    </div>
  );
}

function ContactChannel({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="flex h-full flex-col gap-2 rounded-xl border border-border/70 bg-secondary/20 p-4 transition-all hover:border-primary/50 hover:bg-secondary/40 hover:shadow-glow"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
        {label}
      </span>

      <span className="break-all text-sm text-muted-foreground">
        {value}
      </span>
    </a>
  );
}