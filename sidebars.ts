import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    "how-this-space-works",
    "project-page-standard",
    "contribution-guidelines",
    "metadata-standard",

    {
      type: "category",
      label: "Projects",
      items: [
        {
          type: "category",
          label: "IDT",
          items: [
            "projects/idt/index",
            "projects/idt/roadmap",
            "projects/idt/concepts",
            "projects/idt/formalism",
            "projects/idt/validation",
            "projects/idt/open-questions",
            "projects/idt/references",

            {
              type: "category",
              label: "Notes",
              items: ["projects/idt/notes/initial-notes"],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
