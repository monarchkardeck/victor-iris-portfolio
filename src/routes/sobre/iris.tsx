import { createFileRoute } from "@tanstack/react-router";
import { people } from "@/data/people";
import { PersonPage } from "@/components/PersonPage";

export const Route = createFileRoute("/sobre/iris")({
  head: () => ({
    meta: [
      { title: "Iris Luiza Ribeiro de Oliveira — Perfil" },
      {
        name: "description",
        content:
          "Perfil individual de Iris Luiza Ribeiro de Oliveira.",
      },
    ],
  }),

  component: () => <PersonPage person={people.iris} />,
});