import{_ as n,e as l,t as e,Q as a,d as i,D as t}from"./chunks/framework.DWeOSq3P.js";const k=JSON.parse('{"title":"Damage","description":"/damage command explained.","frontmatter":{"title":"Damage","category":"Commands","mentions":["BedrockCommands","cda94581"],"description":"/damage command explained."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Arguments","slug":"arguments","link":"#arguments","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"Damage Cause List","slug":"damage-cause-list","link":"#damage-cause-list","children":[]}],"relativePath":"commands/damage.md","filePath":"commands/damage.md"}'),p={name:"commands/damage.md"},r=a('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>Introduced in Minecraft Release <code>1.18.10</code>, the /damage command deals precise damage to specified entities. With this change, the clunky methods like using <code>/effect</code> command to damage entities are rendered obsolete, making maps and other creations more powerful.</p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h2><ul><li>There are two ways the damage command can be used: <ul><li><code>/damage &lt;Target&gt; &lt;Amount&gt; [Cause]</code></li><li><code>/damage &lt;Target&gt; &lt;Amount&gt; &lt;Cause&gt; entity &lt;Damager&gt;</code></li></ul></li></ul><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h2><ul><li>Phrases not contained in angle &lt;&gt; or square [] brackets instruct you to type it as-is.</li><li>Phrases contained within brackets are variables, these need to be replaced: <ul><li><strong><code>&lt;&gt;</code></strong> Angle brackets mean the variable is required.</li><li><strong><code>[]</code></strong> Square brackets mean the variable is optional.</li></ul></li></ul><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><ul><li><p><strong><code>Target</code></strong> This is your typical entity selector, such as <code>@s</code> , <code>@e</code> , or <code>&quot;cda94581&quot;</code> . Multiple entities may be selected at a time to deal the damage to multiple targets.</p></li><li><p><strong><code>Amount</code></strong> This is a whole number, which specifies the amount of damage to deal to the targets. The minimum value is <code>0</code> and the maximum value is <code>2147483647</code>, or the signed 32-bit integer limit.</p></li><li><p><strong><code>Cause</code></strong> This specifies the &quot;reason&quot; the damage was dealt. This cause will appear in death messages (<code>X hit the ground too hard for cause: fall</code>) be used in damage calculation with armor (<code>the value dealt in Amount may be different depending on the worn armor</code>), and used in a large variety of other things, such as in Behavior Pack/Add-ons. A full list of all the damage causes can be found <a href="#damage-cause-list">below</a>.</p></li><li><p><strong><code>Damager</code></strong> If Cause was something to do with entities <code>(such as entity_attack)</code>, this specifies where the damage came from <code>(the entity that dealt the attack)</code>. This is limited to only 1 target. An error will be thrown if multiple targets are found from the selector.</p></li></ul><blockquote><p>Note: the <code>&lt;Cause&gt; entity &lt;Damager&gt;</code> is only required when the Cause has to do with another entity <code>(entity_attack)</code>. Otherwise, follow the first syntax.</p></blockquote><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2>',11),o=a(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Deal 4 damage to all players</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/damage @a 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Deal 3 &#39;fire&#39; damage to all entities of type &#39;sheep&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/damage @e [type=sheep] 3 fire</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Deal 40 &#39;entity attack&#39; damage from a random player to all entities of type &#39;sheep&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/damage @e [type=sheep] 40 entity_attack entity @r</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="damage-cause-list" tabindex="-1">Damage Cause List <a class="header-anchor" href="#damage-cause-list" aria-label="Permalink to &quot;Damage Cause List&quot;">​</a></h2><p>Listed below are all the &#39;damage sources&#39; in MCBE for the <code>/damage</code> command currently available:</p>`,3),c=a(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>all</span></span>
<span class="line"><span>anvil</span></span>
<span class="line"><span>block_explosion</span></span>
<span class="line"><span>campfire</span></span>
<span class="line"><span>charging</span></span>
<span class="line"><span>contact</span></span>
<span class="line"><span>drowning</span></span>
<span class="line"><span>entity_attack</span></span>
<span class="line"><span>entity_explosion</span></span>
<span class="line"><span>fall</span></span>
<span class="line"><span>falling_block</span></span>
<span class="line"><span>fire</span></span>
<span class="line"><span>fire_tick</span></span>
<span class="line"><span>fireworks</span></span>
<span class="line"><span>fly_into_wall</span></span>
<span class="line"><span>freezing</span></span>
<span class="line"><span>lava</span></span>
<span class="line"><span>lightning</span></span>
<span class="line"><span>magic</span></span>
<span class="line"><span>magma</span></span>
<span class="line"><span>none</span></span>
<span class="line"><span>override</span></span>
<span class="line"><span>piston</span></span>
<span class="line"><span>projectile</span></span>
<span class="line"><span>self_destruct</span></span>
<span class="line"><span>ram_attack</span></span>
<span class="line"><span>sonic_boom</span></span>
<span class="line"><span>soul_campfire</span></span>
<span class="line"><span>stalactite</span></span>
<span class="line"><span>stalagmite</span></span>
<span class="line"><span>starve</span></span>
<span class="line"><span>suffocation</span></span>
<span class="line"><span>temperature</span></span>
<span class="line"><span>thorns</span></span>
<span class="line"><span>void</span></span>
<span class="line"><span>wither</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>For an up-to-date list, visit the official add-on documentation page <strong><a href="https://learn.microsoft.com/en-us/minecraft/creator/reference/content/addonsreference/examples/addonentities?view=minecraft-bedrock-stable#entity-damage-source" target="_blank" rel="noreferrer">here</a></strong>.</p>`,2);function d(m,u,h,b,g,_){const s=t("CodeHeader");return i(),l("div",null,[r,e(s),o,e(s),c])}const y=n(p,[["render",d]]);export{k as __pageData,y as default};
