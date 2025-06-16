import * as MarkdownIt from "markdown-it";
import * as shiki from "shiki";
import * as shikiPlugin from "markdown-it-shiki";

import * as debugSticksCommandSyntax from "./textmate-grammar/debugSticksCommandSyntax.json";
import debugSticksCommandSyntaxLightThemeExtension from "./textmate-grammar/debugSticksCommandSyntax.theme_entension-light";
// import debugSticksCommandSyntaxDarkThemeExtension from "./textmate-grammar/debugSticksCommandSyntax.theme_entension-dark.json";

let githubLightTheme = (await shiki.bundledThemes["github-light"]()).default;
const githubDarkTheme = (await shiki.bundledThemes["github-dark"]()).default;

/* Object.entries(debugSticksCommandSyntaxLightThemeExtension).forEach(([key, value]) => {
  if (key in githubLightTheme) {
    debugSticksCommandSyntax[key] = value;
  } else {
    Object.assign(githubLightTheme[key], value);
  }
}); */

githubLightTheme = debugSticksCommandSyntaxLightThemeExtension(githubLightTheme);

export default async function (md: MarkdownIt.default) {
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
  const a = md.options.highlight;
  // Use the existing shiki plugin for code blocks
  md.use(shikiPlugin.default, {
    theme: {
      light: githubLightTheme as shiki.ThemeRegistrationResolved,
      dark: githubDarkTheme as shiki.ThemeRegistrationResolved,
    },
  } satisfies shikiPlugin.Options);
  md.options.highlight = a;
  // Custom rule to highlight inline code
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
}
