import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGrid } from "@/components/ProjectGrid";

const title = "Projetos — Victor & Iris";
const description =
  "Aplicações web, experimentos de laboratório e projetos de IA desenvolvidos por Victor e Iris.";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjetosPage,
});

const labels: Record<ProjectCategory, string> = {
  web: "Web",
  lab: "Lab",
  ia: "IA",
  destaque: "Destaques",
};

type Filter = ProjectCategory | "todos";

function ProjetosPage() {
  const [filter, setFilter] = useState<Filter>("todos");

  const available = useMemo(() => {
    const order: ProjectCategory[] = ["web", "lab", "ia", "destaque"];
    return order.filter((category) =>
      projects.some((p) => p.category === category)
    );
  }, []);

  const visible = useMemo(() => {
    if (filter === "todos") {
      return projects;
    }
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeader
        eyebrow="Portfólio"
        title="Projetos"
        description="Aplicações, experimentos e protótipos que mostram nosso processo criativo."
      />

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos">
        {(["todos", ...available] as Filter[]).map((option) => {
          const isActive = filter === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(option)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-cyan/60 bg-cyan/10 text-cyan"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {option === "todos" ? "Todos" : labels[option]}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        <ProjectGrid projects={visible} />
      </div>
    </div>
  );
}