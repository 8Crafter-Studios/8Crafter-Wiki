/* import { readdirSync, statSync, readFileSync } from "fs";
import { resolve, join } from "path";
import { load } from "cheerio"; */
import { algoliasearch } from "algoliasearch";
/* import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url)); */

// Replace with your Algolia App ID and Admin API Key
const client = algoliasearch("97Y3M3Y6BI", "cae2d11fe9d1258dde264081811e2cfc");

const searchResults = await client.searchSingleIndex({
  indexName: "andexdb",
  searchParams: {
    query: "a",
  },
});
console.log(searchResults);
