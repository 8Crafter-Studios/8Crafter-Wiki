import{_ as d}from"./chunks/4.CAMGofWY.js";import{_ as p,e as c,O as a,t as i,D as t,f as n,E as s,A as l,d as u}from"./chunks/framework.BGJJ8CDY.js";const w=JSON.parse('{"title":"On Player Join","description":"This system will run your desired commands on the event that a player joins the world.","frontmatter":{"title":"On Player Join","category":"On Event Systems","mentions":["BedrockCommands","zheaEvyline"],"nav_order":2,"description":"This system will run your desired commands on the event that a player joins the world."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]}],"relativePath":"commands/on-player-join.md","filePath":"commands/on-player-join.md"}'),h={name:"commands/on-player-join.md"};function m(y,e,k,b,f,g){const o=l("CodeHeader"),r=l("FolderView");return u(),c("div",null,[e[2]||(e[2]=a('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>This system will run your desired commands on the event that a player joins the world.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p><em>To be typed in Chat:</em></p><p><code>/scoreboard objectives add joined dummy</code></p><p>If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in <a href="/8Crafter-Wiki/main/commands/on-first-world-load.html">On First World Load.</a></p><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-label="Permalink to &quot;System&quot;">​</a></h2>',8)),i(o,null,{default:t(()=>e[0]||(e[0]=[s("BP/functions/events/player/on_join.mcfunction")])),_:1}),e[3]||(e[3]=a(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Register Players to &#39;joined&#39; Objective Who Joined For First Time or Were Cleared from &#39;joined&#39; Previously</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players add @a joined 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your Commands Here (Example)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tp @a [scores={joined=0}] 0 65 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark Players as Joined</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Clear &#39;joined&#39; score of online and offline players</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players reset * joined</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Set online players score to 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players set @a joined 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="`+d+'" alt="Chain of 4 Command Blocks"></p><p>Here, we have used a <code>/tp</code> command as an example, but you can use any command you prefer and as many as you need.</p><p>Just make sure to follow the given order and properly apply the <code>scores={joined=0}</code> selector argument as shown for your desired commands.</p><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation&quot;">​</a></h2><p>When the player joins, a score of <code>0</code> is added to their <code>joined</code> objective. This allows us to run commands from them using the <code>scores</code> selector argument.</p><p>Immediately after the commands are run, we reset all the scores on the objective using wildcard <strong><code>*</code></strong>. And only the players who stayed online will have their score set to <code>1</code>.</p><p>This way, since our commands only target players with a score of <code>0</code>, the commands won&#39;t repeat for the players who stayed, unless they leave and rejoin or if we run:</p><p><br><code>/scoreboard players set &lt;player&gt; joined 0</code></p><p>This is because <em>adding</em> a score of 0 to a score of 1 will have no change. But adding a score of 0 to players with no score will set their score to 0.</p><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>If you are using functions instead of command blocks, the <code>on_join</code> function must be added to the <code>tick.json</code> in order to loop and run it continuously. Multiple files can be added to the <code>tick.json</code> by placing a comma after each string. Refer to <a href="/8Crafter-Wiki/main/commands/mcfunctions.html#tick-json">Functions</a> documentation for further info.</p>',12)),i(o,null,{default:t(()=>e[1]||(e[1]=[s("BP/functions/tick.json")])),_:1}),e[4]||(e[4]=a(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;values&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;events/player/on_join&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If using functions, your pack folder structure will be as follows:</p>`,2)),i(r,{paths:["BP","BP/functions","BP/pack_icon.png","BP/manifest.json","BP/functions/events","BP/functions/events/player","BP/functions/events/player/on_join.mcfunction","BP/functions/tick.json"]}),e[5]||(e[5]=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"NOTE:"),n("p",null,[s("The scoreboard names (in this case: 'joined') may end up being used by other people. Appending "),n("code",null,"_"),s(" and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the "),n("code",null,".mcfunction"),s(" filenames. Ex:")]),n("ul",null,[n("li",null,[n("code",null,"joined_0fe678")]),n("li",null,[n("code",null,"on_join_0fe678.mcfunction")])])],-1))])}const E=p(h,[["render",m]]);export{w as __pageData,E as default};
