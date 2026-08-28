import { Link } from "@tanstack/react-router";
import type { PersonProfile } from "@/data/people";
import { SectionHeader } from "@/components/SectionHeader";

function ContactLink({
  label,
  href,
}: {
  label: string;
  href?: string;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-cyan/60 hover:text-cyan"
    >
      {label}
    </a>
  );
}

export function PersonPage({
  person,
}: {
  person: PersonProfile;
}) {
  const hasDetails =
    person.competencias.length > 0 ||
    person.idiomas.length > 0 ||
    person.certificacoes.length > 0 ||
    person.formacao.length > 0 ||
    person.experiencia.length > 0;

  const hasContacts =
    !!person.social.linkedin ||
    !!person.social.catho ||
    !!person.social.whatsapp ||
    !!person.social.instagram ||
    !!person.social.email;

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
          eyebrow="Perfil individual"
          title={person.name}
          description={person.role}
        />
      </div>

      {/* INTRODUÇÃO */}
      <section className="mt-8 rounded-2xl border border-border bg-card p-7 md:p-9">
        <p className="text-lg leading-relaxed text-foreground">
          {person.intro}
        </p>

        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          {person.bio}
        </p>

        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          {person.summary}
        </p>
      </section>

      {/* ====================================================== */}
      {/* DESTAQUES */}
      {/* ====================================================== */}

      {person.destaques.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-display">
            Destaques da trajetória
          </h2>

          <div className="mt-6 space-y-4">
            {person.destaques.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold">
                  {item.titulo}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ====================================================== */}
      {/* COMPETÊNCIAS POR ÁREA */}
      {/* ====================================================== */}

      {person.competenciasPorArea.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-display">
            Competências
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <div className="hidden grid-cols-[180px_1fr] border-b border-border bg-secondary/40 px-5 py-3 text-sm font-semibold md:grid">
              <span>Área</span>
              <span>Competências</span>
            </div>

            {person.competenciasPorArea.map((item) => (
              <div
                key={item.area}
                className="grid gap-2 border-b border-border/60 px-5 py-4 last:border-b-0 md:grid-cols-[180px_1fr]"
              >
                <span className="font-semibold text-foreground">
                  {item.area}
                </span>

                <span className="text-sm leading-relaxed text-muted-foreground">
                  {item.competencias}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ====================================================== */}
      {/* DEMAIS DETALHES */}
      {/* ====================================================== */}

      {hasDetails ? (
        <>
          {/* COMPETÊNCIAS E IDIOMAS */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {person.competencias.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xl font-display">
                  Competências adicionais
                </h2>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {person.competencias.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border/70 bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {person.idiomas.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xl font-display">
                  Idiomas
                </h2>

                <ul className="mt-4 space-y-1 text-sm">
                  {person.idiomas.map(({ idioma, nivel }) => (
                    <li
                      key={idioma}
                      className="flex justify-between gap-4 border-b border-border/40 py-2"
                    >
                      <span>{idioma}</span>

                      <span className="text-right text-muted-foreground">
                        {nivel}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* CERTIFICAÇÕES */}
          {person.certificacoes.length > 0 && (
            <section className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-display">
                Certificações
              </h2>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {person.certificacoes.map((cert) => (
                  <li key={cert}>• {cert}</li>
                ))}
              </ul>
            </section>
          )}

          {/* EXPERIÊNCIA */}
          {person.experiencia.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-display">
                Trajetória profissional
              </h2>

              <div className="mt-6 space-y-4">
                {person.experiencia.map((exp) => (
                  <article
                    key={`${exp.empresa}-${exp.cargo}`}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {exp.cargo}
                      </h3>

                      <span className="text-xs text-muted-foreground">
                        {exp.periodo}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-cyan">
                      {exp.empresa}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {exp.local}
                    </p>

                    {exp.descricao && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {exp.descricao}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* FORMAÇÃO */}
          {person.formacao.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-display">
                Formação Acadêmica
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {person.formacao.map((form) => (
                  <article
                    key={`${form.instituicao}-${form.curso}`}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <h3 className="text-base font-semibold">
                      {form.curso}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {form.instituicao}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {form.periodo}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="mt-12 rounded-2xl border border-dashed border-border bg-card p-7 text-sm leading-relaxed text-muted-foreground">
          Este perfil está sendo preenchido. As informações serão adicionadas
          aqui conforme forem definidas.
        </section>
      )}

      {/* ====================================================== */}
      {/* CONTATO */}
      {/* ====================================================== */}

      <section className="mt-12 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-display">
          Contato
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Entre em contato diretamente por um dos canais disponíveis neste
          perfil.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <ContactLink
            label="LinkedIn"
            href={person.social.linkedin}
          />

          <ContactLink
            label="Catho"
            href={person.social.catho}
          />

          <ContactLink
            label="WhatsApp"
            href={person.social.whatsapp}
          />

          <ContactLink
            label="Instagram"
            href={person.social.instagram}
          />

          <ContactLink
            label="E-mail"
            href={
              person.social.email
                ? `mailto:${person.social.email}`
                : undefined
            }
          />

          {!hasContacts && (
            <span className="text-sm text-muted-foreground">
              Contatos ainda não cadastrados.
            </span>
          )}
        </div>
      </section>
    </div>
  );
}