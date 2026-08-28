import { people } from "@/data/people";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50 px-5 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <div>
          <p className="font-display text-base font-semibold text-foreground">
            {people.victor.name} <span className="text-cyan">&</span> {people.iris.name}
          </p>
          <p className="mt-1">Laboratório em constante construção.</p>
        </div>
        <p>© {year} Victor & Iris. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
