import { HeadConfig, TransformContext } from "vitepress";

export function transformHead({ pageData, siteConfig }: TransformContext) {
  const config = siteConfig.site;
  const site = config.title;

  const { frontmatter, relativePath } = pageData;

  const title = frontmatter.title ?? "8Crafter Wiki";
  const description = frontmatter.description ?? config.description;

  const image = `${config.themeConfig.url}/assets/images/homepage/wikilogo.png`;
  const imageAlt = "8Crafter Wiki Logo";

  const path = relativePath.replace(".md", ".html");

  let url = config.themeConfig.url;
  if (path !== "index.html") url += `/${path}`;

  const data = {
    // Open Graph (used by Discord)
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:image:alt": imageAlt,
    "og:url": url,
    "og:site_name": site,
    // Twitter
    "twitter:card": "summary",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:alt": imageAlt,
    "twitter:site": site,
    // other data
    frontmatter: JSON.stringify(frontmatter),
    "docsearch:vitepress_frontmatter": JSON.stringify(frontmatter),
  };

  const out: HeadConfig[] = [];

  Object.entries(data).forEach(([name, content]) => {
    out.push([
      "meta",
      {
        name,
        content,
      },
    ]);
  });
  out.push(
    [
      "meta",
      {
        "http-equiv": "cache-control",
        content: "no-cache",
      },
    ],
    [
      "meta",
      {
        "http-equiv": "expires",
        content: "0",
      },
    ],
    [
      "meta",
      {
        "http-equiv": "pragma",
        content: "no-cache",
      },
    ]
  );

  return out;
}
