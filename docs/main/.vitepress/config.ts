import { defineConfigWithTheme } from "vitepress";
import taskListsPlugin from "markdown-it-task-lists";

import { ThemeConfig } from "./theme";

import head, { transformHead, transformPageData } from "./head";
import redirects from "./redirects";
import sidebar from "./sidebar";
import tags from "./tags";
// import inlineCodeBlockSyntaxHighlightingPlugin from "./8craftersInlineCodeBlockSyntaxHighlightingPlugin";
import * as shiki from "shiki";

import * as debugSticksCommandSyntax from "./textmate-grammar/debugSticksCommandSyntax.json";
import debugSticksCommandSyntaxLightThemeExtension from "./textmate-grammar/debugSticksCommandSyntax.theme_entension-light";
import debugSticksCommandSyntaxDarkThemeExtension from "./textmate-grammar/debugSticksCommandSyntax.theme_entension-dark";

import * as tmLanguage_mcfunction from "./textmate-grammar/mcfunction.tmLanguage.json";

let lightTheme = (await shiki.bundledThemes["light-plus"]()).default;
let darkTheme = (await shiki.bundledThemes["dark-plus"]()).default;

lightTheme = debugSticksCommandSyntaxLightThemeExtension(lightTheme);
darkTheme = debugSticksCommandSyntaxDarkThemeExtension(darkTheme);

// import { getDefaultWasmLoader } from "shiki/engine-oniguruma.mjs";
const themes = [] as shiki.ThemeRegistration[];
const languages = [debugSticksCommandSyntax, tmLanguage_mcfunction] as shiki.LanguageRegistration[];
for await (const theme of Object.values(shiki.bundledThemes)) {
  themes.push((await theme()).default);
}
for await (const language of Object.values(shiki.bundledLanguages)) {
  languages.push((await language()).default[0]);
}
const highlighter = shiki.createHighlighterCoreSync({
  engine: shiki.createJavaScriptRegexEngine(),
  themes: themes,
  langs: languages,
});

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
  title: "8Crafter Wiki (UNDER CONSTRUCTION!)",
  description: "The wiki for the Minecraft YouTuber and Add-On Creator 8Crafter.",
  base: "/main/", // Replace with your repository name

  head,
  transformHead,
  transformPageData,

  srcExclude: isFastBuild ? largePages : undefined,
  // ignoreDeadLinks: isFastBuild,
  ignoreDeadLinks: true,

  themeConfig: {
    url: "https://wiki.8crafter.com/main",
    repository: "https://github.com/8Crafter-Studios/8Crafter-Wiki",
    repository_edit_link_base:
      "https://github.com/8Crafter-Studios/8Crafter-Wiki/blob/wiki/docs/main/",

    algolia: {
      appId: "97Y3M3Y6BI",
      apiKey: "84dd07d78c878c93eac11f7ed88ad9b8",
      indexName: "main",
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
    languages: languages,
    theme: { light: lightTheme, dark: darkTheme },
    config(md) {
      md.use(taskListsPlugin, { label: true });

      md.renderer.rules.code_inline = (tokens, idx) => {
        const code = tokens[idx].content;
        const highlighted = highlighter.codeToHtml(code, {
          lang: tokens[idx].attrGet("lang") ?? "",
          themes: { light: lightTheme, dark: darkTheme },
          structure: "inline",
          defaultColor: false,
        });
        return `${
          (tokens[idx].attrGet("noLeftCodeBlock") ?? "false") === "true"
            ? ""
            : '<code class="shiki">'
        }${highlighted}${
          (tokens[idx].attrGet("noRightCodeBlock") ?? "false") === "true" ? "" : "</code>"
        }`;
      };
    },
  },
});
