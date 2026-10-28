import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

const title = "Apoie o projeto — Victor & Iris";
const description =
  "Ajude a manter os projetos, experimentos e protótipos de Victor & Iris.";

const PIX_KEY = "58591292000164";

const amounts = [5, 10, 25, 50, 100];

export const Route = createFileRoute("/apoie")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: ApoiePage,
});

function ApoiePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");

  const hasPixKey = PIX_KEY.trim().length > 0;

  const effectiveAmount =
    customAmount.trim() !== ""
      ? Number(customAmount)
      : selectedAmount;

  const amountLabel =
    effectiveAmount !== null &&
    Number.isFinite(effectiveAmount) &&
    effectiveAmount > 0
      ? effectiveAmount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      : "Escolha um valor";

  function chooseAmount(amount: number) {
    setSelectedAmount(amount);
    setCustomAmount("");
  }

  async function copyPixKey() {
    if (!hasPixKey) return;

    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setCopyError("");
    } catch {
      setCopied(false);
      setCopyError(
        "Não foi possível copiar automaticamente. Tente selecionar e copiar a chave manualmente.",
      );
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
          Apoio independente
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Ajude a manter as ideias em movimento.
        </h1>

        <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
          Por trás de cada projeto existem horas de pesquisa, criação,
          desenvolvimento e experimentação. Seu apoio voluntário ajuda
          Victor & Iris a continuar explorando novas ideias e construindo
          projetos digitais.
        </p>
      </section>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-border/50 bg-card/40 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            01 — Escolha o valor
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Quanto você gostaria de contribuir?
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Escolha uma sugestão ou informe outro valor. A contribuição é
            voluntária.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {amounts.map((amount) => (
              <button
                key={amount}
                type="button"
                aria-pressed={
                  customAmount === "" && selectedAmount === amount
                }
                onClick={() => chooseAmount(amount)}
                className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-colors ${
                  customAmount === "" && selectedAmount === amount
                    ? "border-cyan bg-primary/15 text-foreground"
                    : "border-border/60 text-muted-foreground hover:border-cyan/60 hover:text-foreground"
                }`}
              >
                {amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                })}
              </button>
            ))}
          </div>

          <label
            htmlFor="custom-amount"
            className="mt-6 block text-sm font-medium"
          >
            Ou informe outro valor (R$)
          </label>

          <input
            id="custom-amount"
            type="number"
            min="1"
            step="0.01"
            inputMode="decimal"
            placeholder="Ex.: 15,00"
            value={customAmount}
            onChange={(event) => {
              setCustomAmount(event.target.value);
              setSelectedAmount(null);
            }}
            className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-foreground outline-none transition focus:border-cyan"
          />

          <div className="mt-6 rounded-2xl bg-primary/10 p-4">
            <p className="text-sm text-muted-foreground">
              Valor selecionado
            </p>
            <p className="mt-1 text-2xl font-bold">{amountLabel}</p>
          </div>
        </section>

        <section className="rounded-3xl border border-border/50 bg-card/40 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            02 — Contribua via Pix
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Apoio direto, sem complicação.
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            A chave Pix oficial será disponibilizada aqui depois que
            validarmos esta página.
          </p>

          {hasPixKey ? (
            <div className="mt-6">
              <p className="text-sm font-medium">Chave Pix</p>

              <div className="mt-2 break-all rounded-xl border border-border/60 bg-background p-4 font-mono text-sm">
                {PIX_KEY}
              </div>

              <button
                type="button"
                onClick={copyPixKey}
                className="mt-4 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                {copied ? "Chave copiada" : "Copiar chave Pix"}
              </button>

              {copyError && (
                <p role="alert" className="mt-3 text-sm text-muted-foreground">
                  {copyError}
                </p>
              )}

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                No aplicativo do seu banco, cole a chave e informe o valor
                escolhido antes de confirmar o pagamento.
              </p>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-border p-5">
              <p className="font-semibold">Chave Pix em configuração</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Nenhum pagamento pode ser feito por esta página ainda.
                Adicionaremos sua chave fixa antes de considerar a página pronta.
              </p>
            </div>
          )}

          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            O apoio é voluntário. A página não promete retorno financeiro nem
            representa uma compra de produto ou serviço.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border/40 pt-8">
        <p className="text-sm leading-6 text-muted-foreground">
          Quer conhecer melhor o trabalho antes de contribuir? Explore os
          projetos e acompanhe o desenvolvimento.
        </p>

        <Link
          to="/projetos"
          className="mt-4 inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:border-cyan hover:bg-primary/10"
        >
          Conhecer os projetos
        </Link>
      </div>
    </main>
  );
}