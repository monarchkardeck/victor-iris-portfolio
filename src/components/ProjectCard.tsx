import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { ProjectImage } from "./ProjectImage";

const collaboratorLinks: Record<string, "/sobre/victor" | "/sobre/iris"> = {
  "Victor Batista Rocha": "/sobre/victor",
  "Iris Luiza Ribeiro de Oliveira": "/sobre/iris",
};

function ExternalAction({
  href,
  label,
  primary = false,
}: {
  href?: string;
  label: string;
  primary?: boolean;
}) {
  const base = "rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const look = primary
    ? "bg-primary text-primary-foreground hover:bg-primary/85"
    : "border border-border text-foreground hover:border-cyan/50 hover:text-cyan";

  if (!href || href === "#") {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed border border-border/60 text-muted-foreground`}
        title="Link em breve"
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${look}`}
    >
      {label}
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const route = project.route;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-glow">
      <div className="aspect-[3/2] overflow-hidden bg-secondary">
        <ProjectImage
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-lg leading-snug">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border/70 bg-secondary/60 px-2 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.collaborators && project.collaborators.length > 0 && (
          <div className="border-t border-border/50 pt-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Colaboração
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {project.collaborators.map((name) => {
                const href = collaboratorLinks[name];

                return href ? (
                  <Link
                    key={name}
                    to={href}
                    className="text-cyan transition-colors hover:text-foreground"
                  >
                    {name}
                  </Link>
                ) : (
                  <span key={name} className="text-muted-foreground">
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {route ? (
            <Link
              to={route}
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Ver projeto
            </Link>
          ) : (
            <ExternalAction href={project.linkProject} label="Ver projeto" primary />
          )}
          <ExternalAction href={project.linkCode} label="Ver código" />
        </div>
      </div>
    </article>
  );
}
