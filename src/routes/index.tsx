import { createFileRoute, redirect } from "@tanstack/react-router";

// The CraveHub site is a hand-built static HTML/CSS/JS project served from
// /cravehub. The app root simply hands visitors over to it.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CraveHub — Premium Fast Food | Every Bite Tells a Story" },
      {
        name: "description",
        content:
          "CraveHub serves premium burgers, pizza and crispy chicken across Pakistan, with deals and an AI meal matcher.",
      },
      { property: "og:title", content: "CraveHub — Every Bite Tells a Story" },
      {
        property: "og:description",
        content: "Premium fast food, crafted fresh. Explore the menu, grab a deal or ask CraveBot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/cravehub/index.html" });
  },
  component: () => null,
});
