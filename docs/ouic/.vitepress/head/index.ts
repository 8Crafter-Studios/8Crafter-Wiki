import { HeadConfig } from "vitepress";
export { transformHead, transformPageData } from "./transform";

export default <HeadConfig[]>[
    [
        "link",
        {
            rel: "icon",
            type: "image/png",
            sizes: "1024x1024",
            href: "/ouic/favicon.png",
        },
    ],
    [
        "link",
        {
            rel: "icon",
            type: "image/x-icon",
            sizes: "256x256",
            href: "/ouic/favicon.ico",
        },
    ],
    [
        "meta",
        {
            name: "theme-color",
            content: "#60c3fa",
        },
    ],
    ["script", { src: "/ouic/assets/js/jquery.min.js" }],
    ["script", { src: "/ouic/assets/js/jquery-ui-1.14.1.custom/jquery-ui.min.js" }],
    ["script", { src: "/ouic/assets/js/tabber.js" }],
    ["script", { src: "/ouic/assets/js/minetip.js" }],
    ["script", { src: "/ouic/assets/js/cached_animated_pack_icon_image_loader.js" }],
    [
        "script",
        {},
        `if(window.location.href.startsWith("https://wiki.8crafter.com/ouic/404?")){
const sourceURL = new URLSearchParams(window.location.search).get('404_source_url');
if(!!sourceURL){
  window.history.replaceState({}, '404 | Ore UI Customizer Wiki', sourceURL);
}
}`,
    ],
];
