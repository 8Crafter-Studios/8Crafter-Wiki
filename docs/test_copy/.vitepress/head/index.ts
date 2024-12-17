import { HeadConfig } from "vitepress";
export { transformHead } from "./transform";

export default <HeadConfig[]>[
  [
    "link",
    {
      rel: "icon",
      href: "/8Crafter-Wiki/main/favicon.ico",
    },
  ],
  [
    "apple-touch-icon",
    {
      rel: "icon",
      href: "/8Crafter-Wiki/main/assets/images/favicons/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  [
    "mask-icon",
    {
      rel: "icon",
      href: "/8Crafter-Wiki/main/assets/images/favicons/safari-pinned-tab.svg",
      color: "#60c3fa",
    },
  ],
  [
    "meta",
    {
      name: "theme-color",
      content: "#60c3fa",
    },
  ],
];
