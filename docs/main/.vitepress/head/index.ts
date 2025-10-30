import { HeadConfig } from "vitepress";
export { transformHead, transformPageData } from "./transform";

export default <HeadConfig[]>[
    [
        "link",
        {
            rel: "icon",
            href: "/main/favicon.ico",
        },
    ],
    [
        "meta",
        {
            name: "theme-color",
            content: "#60c3fa",
        },
    ],
    ["script", { src: "/main/assets/js/jquery.min.js" }],
    ["script", { src: "/main/assets/js/jquery-ui-1.14.1.custom/jquery-ui.min.js" }],
    ["script", { src: "/main/assets/js/tabber.js" }],
    ["script", { src: "/main/assets/js/minetip.js" }],
    ["script", { src: "/main/assets/js/cached_animated_pack_icon_image_loader.js" }],
    [
        "script",
        {},
        `if(window.location.href.startsWith("https://wiki.8crafter.com/main/404?")){
const sourceURL = new URLSearchParams(window.location.search).get('404_source_url');
if(!!sourceURL){
  window.history.replaceState({}, '404 | 8Crafter Wiki', sourceURL);
}
}`,
    ],
];
