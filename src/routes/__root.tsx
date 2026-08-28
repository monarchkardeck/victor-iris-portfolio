import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-cyan">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Página não encontrada.</p>
      <p className="mt-2 text-sm text-muted-foreground">
        O endereço pode estar errado ou a página pode ter sido movida.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-glow-strong"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
