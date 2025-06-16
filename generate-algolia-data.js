import { readdirSync, statSync, readFileSync } from "fs";
import { resolve, join } from "path";
import { load } from "cheerio";
import { algoliasearch } from "algoliasearch";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Replace with your Algolia App ID and Admin API Key
const client = algoliasearch("97Y3M3Y6BI", "API_KEY");

// Path to the VitePress build output folder
console.log(import.meta.url.slice(8));
console.log(__dirname);
const distPath = resolve(__dirname, "docs/andexdb/.vitepress/dist");

// Recursive function to get all HTML files
function getHtmlFiles(dir) {
  let results = [];
  const list = readdirSync(dir);
  list.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith(".html")) {
      results.push(filePath);
    }
  });
  return results;
}

// Parse each HTML file and extract content for Algolia
function parseHtmlFile(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const $ = load(content);

  // Customize these selectors based on your VitePress site's structure
  // const bodyText = $("body").text().trim();
  // const rawHTML = $()._root.html().trim();
  let frontmatter = {};
  // console.log(filePath, rawHTML.slice(0, 1000));
  try {
    frontmatter = JSON.parse($("meta[name=frontmatter]").attr("content") ?? "{}");
  } catch (e) {
    try {
      console.error(e, e.stack, $("meta[name=frontmatter]").attr("content"));
    } catch (e) {
      console.error(e, e.stack, "Unable to get frontmatter meta text.");
    }
  }
  const title = frontmatter?.title ?? ($("title").text() || "Untitled");
  const page_title =
    frontmatter?.page_title ?? frontmatter?.title ?? ($("title").text() || "Untitled");
  const headings = $("h1, h2, h3")
    .map((i, el) => $(el).text())
    .get();

  return {
    objectID: filePath, // Unique identifier
    url: filePath.replace(distPath, ""), // Relative URL
    title,
    page_title,
    headings,
    category: frontmatter.category,
    description: frontmatter.description,
    tags: frontmatter.tags,
    nav_order: frontmatter.nav_order,
    algolia_priority: frontmatter.algolia_priority ?? 0,
    frontmatter: frontmatter,
    // content: bodyText,
  };
}

// Main function to generate and upload data to Algolia
async function generateAlgoliaData() {
  const htmlFiles = getHtmlFiles(distPath);
  const records = htmlFiles.map(parseHtmlFile);

  try {
    await client.saveObjects({ indexName: "andexdb", objects: records });
    console.log("Data successfully indexed to Algolia!");
  } catch (error) {
    console.error("Error indexing data to Algolia:", error);
  }
}

/* const htmlFiles = getHtmlFiles(distPath);
const records = htmlFiles.map(parseHtmlFile);
console.log(records); */
// Run the script
generateAlgoliaData();
