import{_ as a,k as t,a6 as i,j as l}from"./chunks/framework.Bul4SA1j.js";const m=JSON.parse('{"title":"v1.28.5","description":"The changelog for v1.28.5.","frontmatter":{"title":"v1.28.5","page_title":"v1.28.5 Changelog","description":"The changelog for v1.28.5."},"headers":[{"level":2,"title":"Additions","slug":"additions","link":"#additions","children":[{"level":3,"title":"Settings","slug":"settings","link":"#settings","children":[]}]},{"level":2,"title":"Fixes","slug":"fixes","link":"#fixes","children":[{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]},{"level":3,"title":"Technical","slug":"technical","link":"#technical","children":[]},{"level":3,"title":"Chat Ranks","slug":"chat-ranks","link":"#chat-ranks","children":[]}]}],"relativePath":"changelogs/v1.28.5.md","filePath":"changelogs/v1.28.5.md"}'),n={name:"changelogs/v1.28.5.md"};function s(o,e,d,r,c,h){return l(),t("div",null,e[0]||(e[0]=[i('<h2 id="additions" tabindex="-1">Additions <a class="header-anchor" href="#additions" aria-label="Permalink to &quot;Additions&quot;">​</a></h2><h3 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h3><ul><li>Added a new <code class="shiki"><span>pvpCooldownToTeleport</span></code> option to stop players from teleporting away while in a PVP battle.</li></ul><h2 id="fixes" tabindex="-1">Fixes <a class="header-anchor" href="#fixes" aria-label="Permalink to &quot;Fixes&quot;">​</a></h2><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h3><ul><li>Fixed the <code class="shiki"><span>\\spawn</span></code> command.</li></ul><h3 id="technical" tabindex="-1">Technical <a class="header-anchor" href="#technical" aria-label="Permalink to &quot;Technical&quot;">​</a></h3><ul><li>Fixed a bug where if the z coordinate passed into the <code class="shiki"><span>vTStr</span></code> function was 0 then it would treat it as a <code class="shiki"><span>Vector2</span></code> instead of a <code class="shiki"><span>Vector3</span></code> and not display the z coordinate.</li></ul><h3 id="chat-ranks" tabindex="-1">Chat Ranks <a class="header-anchor" href="#chat-ranks" aria-label="Permalink to &quot;Chat Ranks&quot;">​</a></h3><ul><li>Fixed a bug where the nameColor:red would not apply the red name color &quot;§c&quot; because its color code value was set to &quot;§&quot; instead of &quot;§c&quot;.</li><li>Updated the chat ranks to include the nameFormatting before the player&#39;s name.</li><li>Updated the default message template string to include the nameFormatting property before the player&#39;s name.</li></ul>',10)]))}const p=a(n,[["render",s]]);export{m as __pageData,p as default};
