import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
}: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-display">{title}</h2>
      {description && (
        <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}