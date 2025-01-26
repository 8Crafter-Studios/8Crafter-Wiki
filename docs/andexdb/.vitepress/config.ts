import { defineConfigWithTheme } from "vitepress";
import taskListsPlugin from "markdown-it-task-lists";

import { ThemeConfig } from "./theme";

import head, { transformHead } from "./head";
import redirects from "./redirects";
import sidebar from "./sidebar";
import tags from "./tags";

const isFastBuild = process.env.FAST_BUILD?.trim() === "true";

const largePages = [
  "entities/vanilla-usage-components.md",
  "entities/vanilla-usage-spawn-rules.md",
  "entities/vuc-full.md",
  "entities/vusr-full.md",
];

if (isFastBuild) {
  console.log(
    "[FAST_BUILD] Excluding the following large pages from this build:",
    largePages,
    "\n"
  );
}

export default defineConfigWithTheme<ThemeConfig>({
  title: "8Crafter's Debug Sticks Wiki (UNDER CONSTRUCTION!)",
  description:
    "The wiki for the Minecraft Bedrock Edition Add-On: 8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities.",
  base: "/andexdb/", // Replace with your repository name

  head,
  transformHead,

  srcExclude: isFastBuild ? largePages : undefined,
  // ignoreDeadLinks: isFastBuild,
  ignoreDeadLinks: true,

  themeConfig: {
    url: "https://wiki.8crafter.com/andexdb",
    repository: "https://github.com/8Crafter-Studios/8Crafter-Wiki",
    repository_edit_link_base: "/andexdb/", // Replace with your repository name

    algolia: {
      appId: "97Y3M3Y6BI",
      apiKey: "84dd07d78c878c93eac11f7ed88ad9b8",
      indexName: "andexdb",
      placeholder: "Search 8Crafter's Debug Sticks Wiki...",
    },

    navigation: [
      {
        text: "Home",
        link: "/../main/",
        target: "_self",
      },
      {
        text: "Discord",
        link: "/../main/discord",
        target: "_self",
      },
      {
        text: "Contribute",
        link: "/../main/contribute",
        target: "_self",
      },
      {
        text: "ModBay",
        link: "https://modbay.org/mods/1240-8crafters-debug-sticks.html",
      },
    ],

    redirects,
    sidebar,
    tags,
  },

  markdown: {
    anchor: {
      level: [2, 3, 4, 5, 6],
    },
    headers: {
      level: [2, 3, 4, 5, 6],
    },
    lineNumbers: true,
    config(md) {
      md.use(taskListsPlugin, { label: true });
    },
  },
});
