import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, string> = {
  "Em desenvolvimento": "border-primary/40 text-foreground bg-primary/15",
  Concluído: "border-cyan/40 text-cyan bg-cyan/10",
  Protótipo: "border-border text-muted-foreground bg-muted/40",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}