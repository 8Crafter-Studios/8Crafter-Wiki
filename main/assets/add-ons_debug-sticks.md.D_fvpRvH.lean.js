import{_ as n,e as l,f as t,t as o,D as s,O as r,E as a,A as c,d}from"./chunks/framework.BGJJ8CDY.js";const h="/8Crafter-Wiki/main/assets/images/add-on_cover_art/andexdb.png",b=JSON.parse(`{"title":"Debug Sticks","description":"8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities","frontmatter":{"title":"Debug Sticks","page_title":"8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities","category":"Released","description":"8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities","tags":["BP","RP"],"nav_order":2},"headers":[{"level":2,"title":"General Description","slug":"general-description","link":"#general-description","children":[]},{"level":2,"title":"Main Features","slug":"main-features","link":"#main-features","children":[]},{"level":2,"title":"Next","slug":"next","link":"#next","children":[]}],"relativePath":"add-ons/debug-sticks.md","filePath":"add-ons/debug-sticks.md"}`),u={name:"add-ons/debug-sticks.md"};function m(p,e,f,y,g,w){const i=c("Button");return d(),l("div",null,[e[3]||(e[3]=t("img",{src:h,alt:"8Crafter's Debug Sticks Cover Art",title:"8Crafter's Debug Sticks Cover Art"},null,-1)),o(i,{link:"https://modbay.org/mods/1240-8crafters-debug-sticks.html"},{default:s(()=>e[0]||(e[0]=[a("ModBay")])),_:1}),o(i,{link:"/8Crafter-Wiki/andexdb/",target:"_self"},{default:s(()=>e[1]||(e[1]=[a(" Full Documentation ")])),_:1}),e[4]||(e[4]=r('<p>    This add-on does almost everything. It is one of the most powerful bedrock add-ons that currently exists.</p><h2 id="general-description" tabindex="-1">General Description <a class="header-anchor" href="#general-description" aria-label="Permalink to &quot;General Description&quot;">​</a></h2><p>    This is an add-on that adds the debug stick, as well as an editor stick, which lets you see block info when you crouch and can be used on a block to change the block type (you can even change it to blocks that normally require NBT editors to obtain), change some of the block states of the block, change the raw text of a sign, change the color of the liquid in a cauldron (even for lava and powdered snow), change the potion in a cauldron, set whether or not the block is waterlogged, etc.</p><p>    It also allows you to have chat ranks, change your name in the chat, and have custom colors and formatting codes automatically applied to your messages, it also adds some custom chat commands, it also adds three different debug menus, one for the world details, one for player details, and one for entity details, it also adds a player controller that lets you do things like change a player&#39;s name tag, active selected hotbar slot, change whether or not they have operator permissions, start cooldowns on their items, apply knockback to them, kill them, despawn them, apply damage to them, add effects or tags to them, remove effects or tags from them, teleport them, set them on fire for a certain amount of time, set their spawn point to a very specific point in a specified dimension, etc. Then there is also an entity controller that does a lot of the same stuff as the player controller (except for the stuff that can only be used on the players) but also has a few other features too. Then there is an item modifier that lets you change the lore and name of an item (you can even use multiple lines of text in the lore too), you can also have multiple lines of text in the item names, you can also set the components of an item (like lock in slot, lock in inventory, can destroy, can place on, and also keep on death), you can also trigger item events for custom items, you can also transfer items in between players inventories. Then there is also a world controller that lets you do stuff like send internal client messages, set the weather in a specific dimension, send /tellraw messages to all players without needing to type out the /tellraw command, you can also set the world spawn, absolute world time, current time of day, spawn entities, spawn items, spawn particles with specified molang values (so you can use particles that are normally broken with the /particle command), etc. There is also an explosion creator that lets you create custom explosions at specified coordinates with a specified radius, and you can also specify whether or not it causes fire, whether or not it destroys blocks, whether or not it can explode underwater, and also which entity has caused the explosions.</p><h2 id="main-features" tabindex="-1">Main Features <a class="header-anchor" href="#main-features" aria-label="Permalink to &quot;Main Features&quot;">​</a></h2><ul><li>WorldEdit</li><li>100% Customizable Chat Ranks. Including the option to have colors and formatting codes automatically applied to your chat messages, and even optionally having chat ranks show up on players&#39; name tags. It even optionally can include timestamps in chat, and each user can even configure their time zone to be used for those chat timestamps.</li><li>Allows you to add ANY ENCHANTMENT of ANY LEVEL on to ANY ITEM. For example, you could make a nether reactor core with sharpness 113, fire aspect 113, fortune 2, and knockback 15.</li><li>Allows you to change players&#39; and entities&#39; name tags.</li><li>Script REPL/Script Eval/Allows you to run JаvaScript code/scripts with commands.</li><li>Debug Sticks</li><li>An entire main menu with a ton of admin utilities.</li><li>A map art generator.</li><li>Allows you to get blocks and items that normally require an NBT Editor to obtain, such as Nether Reactors and Cameras.</li><li>Allows you to get stacks of items that are larger than are normally possible, such as a stack of 255 wooden swords.</li><li>Add and change translation strings on signs.</li><li>Wax/Unwax Signs.</li><li>Change the liquid color of water cauldrons, lava cauldrons, potion cauldrons, and even powdered snow cauldrons.</li><li>Waterlog/Unwaterlog blocks.</li><li>A TON of extremely usefull custom commands.</li><li>Allows you to create your own custom commands using minecraft commands and/or JаvaScript.</li><li>Set item names and item lore (allows for newline characters)</li><li>Get a lot of debug information of players, entities, and blocks.</li><li>An editor stick that gives you debug info about blocks when you sneak while holding it and facing the block. Some of this info includes: <ul><li>Block States</li><li>Block Tags</li><li>Block ID</li><li>Redstone Power Level</li><li>Container size and fullness.</li><li>Exact cauldron liquid color.</li><li>Cauldron liquid/potion type and fill level.</li><li>Piston State</li></ul></li><li>The ability to see inside other players inventories with the custom \\invsee command. You can even see inside the inventories of offline players with the \\offlineinvsee command.</li><li>Spawn Items</li><li>Spawn particles with specified molang values (so you can use particles that are normally broken with the /particle command)</li><li>Explosion creator that lets you create custom explosions at specified coordinates with a specified radius, and you can also specify whether or not it causes fire, whether or not it destroys blocks, whether or not it can explode underwater, and also which entity has caused the explosions.</li><li>Ban System</li><li>Anti-Spam System</li><li>Notifications System</li><li>Teleport Request/TPA System</li><li>Home System</li><li>Customizable World Border System</li><li>Customizable Server Shop System</li><li>Customizable Player Shop System</li><li>Hotbar Presets</li><li>Fully Customizable Spawn Protection System. It can optionally prevent block placing, block breaking, interacting with blocks, interacting with entities, explosions, etc. You can even make it so that specific players (like admins) can bypass the spawn protection.</li><li>Allows you to spawn Simulated Players, Simulated Players are fake players that the game treats just like real players. They show up in the player list in the pause menu, they show up in the autofill for commands, you can op/deop them, they show joined game messages in the chat, you can change their game modes, etc.</li><li>Allows you to spawn entities with no AI.</li><li>You can view the tags, dimension, position, inventory, and even game mode of any player even if they are offline.</li><li>Allows you to see inside players ender chests, clear players ender chests, and even clear specific spots of players ender chests.</li><li>Fully re-program any non-stackable item with JаvaScript.</li><li>Run commands on item use.</li><li>Full compatibility with other chat rank add-ons.</li><li>Full compatibility with other chat commands add-ons.</li><li>Allows you to fully re-program it in-game with commands. You can even add other add-on that just use the script api into this add-on in-game with commands.</li></ul>',6)),e[5]||(e[5]=t("div",{class:"video-container"},[t("iframe",{src:"https://www.youtube.com/embed/bszs_vo-1Lc",title:"Web Load Testing with West Wind WebSurge 2",frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",style:{width:"100%",height:"100%"}})],-1)),e[6]||(e[6]=t("h2",{id:"next",tabindex:"-1"},[a("Next "),t("a",{class:"header-anchor",href:"#next","aria-label":'Permalink to "Next"'},"​")],-1)),o(i,{link:"/8Crafter-Wiki/andexdb/",target:"_self"},{default:s(()=>e[2]||(e[2]=[a(" Next: 8Crafter's Debug Sticks Wiki ")])),_:1})])}const v=n(u,[["render",m]]);export{b as __pageData,v as default};
