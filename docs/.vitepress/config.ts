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
  title: "8Crafter Wiki",
  description: "The wiki for the Minecraft YouTuber and Add-On Creator 8Crafter.",

  head,
  transformHead,

  srcExclude: isFastBuild ? largePages : undefined,
  // ignoreDeadLinks: isFastBuild,
  ignoreDeadLinks: true,

  themeConfig: {
    url: "https://8crafter-studios.github.io/8Crafter-Wiki",
    repository: "https://github.com/8Crafter-Studios/8Crafter-Wiki",

    algolia: {
      appId: "N9ZHAYJQII",
      apiKey: "a664f5a5da631810a08e1a48554fe523",
      indexName: "wiki-8crafter",
      placeholder: "Search 8Crafter Wiki...",
    },

    navigation: [
      {
        text: "Discord",
        link: "/discord",
      },
      {
        text: "Contribute",
        link: "/contribute",
      },
      {
        text: "bedrock.dev",
        link: "https://bedrock.dev",
      },
      {
        text: "MS Learn",
        link: "https://learn.microsoft.com/minecraft/creator/",
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
