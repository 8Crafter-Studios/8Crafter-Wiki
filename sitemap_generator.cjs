/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
const SitemapGenerator = require("sitemap-generator");

// create generator
const generator = SitemapGenerator("https://wiki.8crafter.com/", {
  stripQuerystring: false,
  scanSubdomains: true,
  ignore: (url) => {
    // Prevent URLs from being added that contain `<pattern>`.
    return /^https:\/\/wiki\.8crafter\.com\/$/g.test(url);
  },
});

const crawler = generator.getCrawler();
const sitemap = generator.getSitemap();

crawler.queueURL("https://wiki.8crafter.com/andexdb/index.html");

// sitemap.addURL("https://wiki.8crafter.com/andexdb/");

generator.on("add", (url) => {
  console.log(url);
  // log url
});

// register event listeners
generator.on("done", () => {
  // sitemaps created
});

// start the crawler
generator.start();
