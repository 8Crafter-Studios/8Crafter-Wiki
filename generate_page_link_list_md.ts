import { readdirSync, writeFileSync } from "fs";
import { /* dirname,  */ join } from "path";
// import { fileURLToPath } from "url";
// console.log(import.meta);
// console.log(directory);
// const __dirname = dirname(fileURLToPath(import.meta.url));
const __dirname = process.cwd();
// console.log(__dirname);
const andexdbOutDir = join(__dirname, "/docs/andexdb/page-link-list.md");
const andexdbPaths = readdirSync(join(__dirname, "/docs/andexdb/"), {
  recursive: true,
  encoding: "ascii",
})
  .filter((v) => v.endsWith(".md"))
  .map((v) => v.replaceAll("\\", "/").slice(0, -3));

const andexdbData = `---
title: Page Link List
description: Links to all of the pages on the wiki.
hidden: true
show_contributors: false
show_edit_link: false
show_outline: false
hide_from_algolia_search: true
---

${andexdbPaths.map((v) => `<a href="${v}">${v}</a>`).join("\n\n")}
`;

writeFileSync(andexdbOutDir, andexdbData, {});

console.log("andexdb: " + JSON.stringify(andexdbPaths, undefined, 2));

const mainOutDir = join(__dirname, "/docs/main/page-link-list.md");
const mainPaths = readdirSync(join(__dirname, "/docs/main/"), {
  recursive: true,
  encoding: "ascii",
})
  .filter((v) => v.endsWith(".md"))
  .map((v) => v.replaceAll("\\", "/").slice(0, -3));

const mainData = `---
title: Page Link List
description: Links to all of the pages on the wiki.
hidden: true
show_contributors: false
show_edit_link: false
show_outline: false
hide_from_algolia_search: true
---

${mainPaths.map((v) => `<a href="${v}">${v}</a>`).join("\n\n")}
`;

writeFileSync(mainOutDir, mainData);

console.log("main: " + JSON.stringify(mainPaths, undefined, 2));

// npx tsx generate_page_link_list_md.ts
