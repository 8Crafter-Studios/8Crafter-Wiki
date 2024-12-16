import{_ as s,e as n,t,D as i,O as r,A as c,d as l,E as o}from"./chunks/framework.BGJJ8CDY.js";const w=JSON.parse(`{"title":"Debug Sticks","description":"8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities","frontmatter":{"title":"Debug Sticks","page_title":"8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities","category":"Released","description":"8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities","tags":["BP","RP"],"nav_order":2},"headers":[{"level":2,"title":"What are add-ons?","slug":"what-are-add-ons","link":"#what-are-add-ons","children":[]},{"level":2,"title":"What's the difference between a Behavior Pack & a Resource Pack?","slug":"what-s-the-difference-between-a-behavior-pack-a-resource-pack","link":"#what-s-the-difference-between-a-behavior-pack-a-resource-pack","children":[{"level":3,"title":"Resource Pack","slug":"resource-pack","link":"#resource-pack","children":[]},{"level":3,"title":"Behavior Pack","slug":"behavior-pack","link":"#behavior-pack","children":[]},{"level":3,"title":"Communication between packs","slug":"communication-between-packs","link":"#communication-between-packs","children":[]}]},{"level":2,"title":"Next","slug":"next","link":"#next","children":[]}],"relativePath":"add-ons/debug-sticks.md","filePath":"add-ons/debug-sticks.md"}`),d={name:"add-ons/debug-sticks.md"};function h(u,e,k,m,p,b){const a=c("Button");return l(),n("div",null,[t(a,{link:"https://modbay.org/mods/1240-8crafters-debug-sticks.html"},{default:i(()=>e[0]||(e[0]=[o("ModBay")])),_:1}),t(a,{link:"/../andexdb/"},{default:i(()=>e[1]||(e[1]=[o("Full Documentation")])),_:1}),e[3]||(e[3]=r('<h2 id="what-are-add-ons" tabindex="-1">What are add-ons? <a class="header-anchor" href="#what-are-add-ons" aria-label="Permalink to &quot;What are add-ons?&quot;">​</a></h2><p>Add-ons allow us to modify the contents of our Minecraft Experience by <em>modifying</em> or <em>removing</em> existing content and <em>adding</em> our own. Add-ons are very powerful and allow us to create custom entities, items, and blocks, as well as things like custom loot tables and crafting recipes. Your imagination is the limit!</p><p>Add-ons are primarily written in <a href="https://wiki.bedrock.dev/guide/understanding-json" target="_blank" rel="noreferrer">json</a>, which is a structured data-format. An add-on is essentially a collection of json files, images, and sounds, which modify or add to the game in some way.</p><div class="tip custom-block"><p class="custom-block-title">Javascripting</p><p>Since this guide was written, the definition of &#39;Add-On&#39; has expanded to include the Javascript scripting API. You can learn more about this API elsewhere on this site.</p></div><h2 id="what-s-the-difference-between-a-behavior-pack-a-resource-pack" tabindex="-1">What&#39;s the difference between a Behavior Pack &amp; a Resource Pack? <a class="header-anchor" href="#what-s-the-difference-between-a-behavior-pack-a-resource-pack" aria-label="Permalink to &quot;What&#39;s the difference between a Behavior Pack &amp; a Resource Pack?&quot;">​</a></h2><p>Add-ons are split into two pack types: Resource Packs, and Behavior Packs. Both can function independently, but they are most commonly used together. When you have both a Resource Pack and Behavior Pack, this is referred to as an <em>add-on</em>.</p><h3 id="resource-pack" tabindex="-1">Resource Pack <a class="header-anchor" href="#resource-pack" aria-label="Permalink to &quot;Resource Pack&quot;">​</a></h3><p>The Resource Pack, also known as the <em>client</em>, or RP, is responsible for the <em>visuals</em> and <em>sounds</em> in your add-on. This includes things like:</p><ul><li>Textures</li><li>Sounds</li><li>Geometry</li><li>Animations</li><li>Particles</li></ul><h3 id="behavior-pack" tabindex="-1">Behavior Pack <a class="header-anchor" href="#behavior-pack" aria-label="Permalink to &quot;Behavior Pack&quot;">​</a></h3><p>The Behavior Pack, also known as the <em>server</em>, or BP, is responsible for the <em>logic</em> of your add-on. This can include things like:</p><ul><li>How your entity acts</li><li>Crafting recipes</li><li>Loot tables</li><li>Custom functions</li></ul><h3 id="communication-between-packs" tabindex="-1">Communication between packs <a class="header-anchor" href="#communication-between-packs" aria-label="Permalink to &quot;Communication between packs&quot;">​</a></h3><p>In most cases, you will have both a RP and a BP together. These packs can communicate with or will require each other for them to function properly, in the sense that assets defined in one can be accessed in the other. For example, when creating a custom entity, you need two files:</p><ul><li>An RP entity definition, which describes how your entity will <em>look</em></li><li>A BP entity definition, which describes how your entity will <em>act</em></li></ul><h2 id="next" tabindex="-1">Next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;Next&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">What you have learned</p><ul class="contains-task-list"><li class="task-list-item"><label><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Add-ons modify Minecraft content or add their own</label></li><li class="task-list-item"><label><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Add-ons are written in json</label></li><li class="task-list-item"><label><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> An add-on is split into the <strong>Resource Pack</strong> and the <strong>Behavior Pack</strong>: - Resource Packs contain Textures, Sounds, ... and control how the game looks - Behavior Packs contain entity-files, crafting recipes, ... and control the logic of your game</label></li></ul></div>',17)),t(a,{link:"/guide/software-preparation"},{default:i(()=>e[2]||(e[2]=[o("Next: Software and preparation")])),_:1})])}const g=s(d,[["render",h]]);export{w as __pageData,g as default};
