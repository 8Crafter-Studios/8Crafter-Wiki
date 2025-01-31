import { defineConfigWithTheme } from "vitepress";
import taskListsPlugin from "markdown-it-task-lists";

import { ThemeConfig } from "./theme";

import head, { transformHead } from "./head";
import redirects from "./redirects";
import sidebar from "./sidebar";
import tags from "./tags";
// import inlineCodeBlockSyntaxHighlightingPlugin from "./8craftersInlineCodeBlockSyntaxHighlightingPlugin";
import * as shiki from "shiki";

import * as debugSticksCommandSyntax from "./textmate-grammar/debugSticksCommandSyntax.json";
import debugSticksCommandSyntaxLightThemeExtension from "./textmate-grammar/debugSticksCommandSyntax.theme_entension-light";
import debugSticksCommandSyntaxDarkThemeExtension from "./textmate-grammar/debugSticksCommandSyntax.theme_entension-dark";

let githubLightTheme = (await shiki.bundledThemes["github-light"]()).default;
let githubDarkTheme = (await shiki.bundledThemes["github-dark"]()).default;

githubLightTheme = debugSticksCommandSyntaxLightThemeExtension(githubLightTheme);
githubDarkTheme = debugSticksCommandSyntaxDarkThemeExtension(githubDarkTheme);

// import { getDefaultWasmLoader } from "shiki/engine-oniguruma.mjs";
const themes = [] as shiki.ThemeRegistration[];
const languages = [debugSticksCommandSyntax] as shiki.LanguageRegistration[];
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
} /* 
const createHighlighter = shiki.createdBundledHighlighter({
  langs: {
    typescript: () => import("shiki/langs/typescript.mjs"),
    // ...
  },
  themes: {
    nord: () => import("shiki/themes/nord.mjs"),
    // ...
  },
  engine: () => shiki.createOnigurumaEngine(), // or createJavaScriptRegexEngine()
});
createHighlighter({ langs: ["typescript"], themes: ["nord"] }).then((highlighter) => {
  highlighter.codeToHtml("console.log('Hello, World!')", { lang: "typescript", theme: "nord" });
});
await shiki.loadWasm(getDefaultWasmLoader() as any); */

export default Object.assign(
  defineConfigWithTheme<ThemeConfig>({
    title: "8Crafter's Debug Sticks Wiki (UNDER CONSTRUCTION!)",
    description:
      "The wiki for the Minecraft Bedrock Edition Add-On: 8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities.",
    base: "/andexdb/", // Replace with your repository name

    head,
    transformHead,

    srcExclude: isFastBuild ? largePages : undefined,
    // ignoreDeadLinks: isFastBuild,
    ignoreDeadLinks: true /* 
  markdown: {
    highlight: async (code, lang) => {
      const highlighter = await shiki.getHighlighter({ theme: "nord" });
      return highlighter.codeToHtml(code, {});
    },
    config: (m)=>{m.inline},
  }, */,

    themeConfig: {
      url: "https://wiki.8crafter.com/andexdb",
      repository: "https://github.com/8Crafter-Studios/8Crafter-Wiki",
      repository_edit_link_base:
        "https://github.com/8Crafter-Studios/8Crafter-Wiki/blob/wiki/andexdb/", // Replace with your repository name

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
        // md.use(inlineCodeBlockSyntaxHighlightingPlugin, { label: true });
        md.renderer.rules.code_inline = (tokens, idx /* , options, env, slf */) => {
          const code = tokens[idx].content;
          const highlighted = highlighter.codeToHtml(code, {
            lang: tokens[idx].attrGet("lang") ?? "", // or any default language you prefer
            themes: { light: githubLightTheme, dark: githubDarkTheme },
            structure: "inline",
            defaultColor: false,
          });
          return `<code class="shiki">${highlighted}</code>`;
        };
      },
    },
  }) /* ,
  { plugins: [testPlugin] } */
);
