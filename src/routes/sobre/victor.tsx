import { createFileRoute } from "@tanstack/react-router";
import { people } from "@/data/people";
import { PersonPage } from "@/components/PersonPage";

export const Route = createFileRoute("/sobre/victor")({
  head: () => ({
    meta: [
      { title: "Victor Batista Rocha — Perfil" },
      {
        name: "description",
        content: "Perfil individual de Victor Batista Rocha.",
      },
    ],
  }),

  component: () => <PersonPage person={people.victor} />,
});