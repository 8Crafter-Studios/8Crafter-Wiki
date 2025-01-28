import { Tags } from "./theme";

// Alphabetical order please :)
export default {
  alpha: {
    color: "red",
  },
  beginner: {
    color: "blue",
  },
  beta: {
    color: "yellow",
  },
  command_alpha: {
    color: "yellow",
    sidebar: {
      text: "Non-Functional",
    },
    text: "Non-Functional",
  },
  command_beta: {
    color: "blue",
    sidebar: {
      text: "Non-Functional",
    },
    text: "Non-Functional",
  },
  command_deprecated: {
    color: "orange",
    sidebar: {
      text: "Deprecated",
    },
    text: "Deprecated",
  },
  command_nonfunctional: {
    color: "red",
    sidebar: {
      text: "Non-Functional",
    },
    text: "Non-Functional",
  },
  deprecated: {
    color: "red",
  },
  easy: {
    color: "blue",
  },
  experimental: {
    color: "orange",
  },
  expert: {
    color: "red",
  },
  guide: {
    color: "green",
    sidebar: true,
  },
  help: {
    color: "blue",
    sidebar: true,
  },
  info: {
    color: "blue",
    sidebar: true,
  },
  intermediate: {
    color: "orange",
  },
  method: {
    color: "orange",
  },
  outdated: {
    color: "red",
    sidebar: true,
  },
  scripting: {
    color: "yellow",
    sidebar: {
      text: "Scripts",
    },
  },
  system: {
    color: "blue",
    sidebar: true,
  },
  released: {
    color: "green",
    sidebar: {
      text: "Released",
    },
  },
  upcoming: {
    color: "purple",
    sidebar: {
      text: "Upcoming",
    },
  },
  BP: {
    color: "red",
    sidebar: true,
  },
  RP: {
    color: "blue",
    sidebar: true,
  },
} satisfies Tags;
