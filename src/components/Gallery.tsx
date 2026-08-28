import type { GalleryItem } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";

export function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <figure key={idx} className="overflow-hidden rounded-xl border border-border">
          <ProjectImage
            src={item.image}
            alt={item.caption}
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="p-3 text-xs leading-relaxed text-muted-foreground">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}