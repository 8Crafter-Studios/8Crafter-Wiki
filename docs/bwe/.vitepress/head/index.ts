import { HeadConfig } from "vitepress";
export { transformHead, transformPageData } from "./transform";

export default <HeadConfig[]>[
    [
        "link",
        {
            rel: "icon",
            href: "/bwe/favicon.ico",
        },
    ],
    [
        "meta",
        {
            name: "theme-color",
            content: "#60c3fa",
        },
    ],
    ["script", { src: "/bwe/assets/js/jquery.min.js" }],
    ["script", { src: "/bwe/assets/js/jquery-ui-1.14.1.custom/jquery-ui.min.js" }],
    ["script", { src: "/bwe/assets/js/tabber.js" }],
    ["script", { src: "/bwe/assets/js/minetip.js" }],
    ["script", { src: "/bwe/assets/js/cached_animated_pack_icon_image_loader.js" }],
    [
        "script",
        {},
        `if(window.location.href.startsWith("https://wiki.8crafter.com/bwe/404?")){
const sourceURL = new URLSearchParams(window.location.search).get('404_source_url');
if(!!sourceURL){
  window.history.replaceState({}, '404 | Bedrock World Editor Wiki', sourceURL);
}
}`,
    ],
];
