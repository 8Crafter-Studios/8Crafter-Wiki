import{_ as l,e as o,O as a,t,D as e,A as r,d as p,E as n}from"./chunks/framework.BLb2Gtba.js";const g=JSON.parse('{"title":"Block Traits","description":"Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.","frontmatter":{"title":"Block Traits","description":"Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.","category":"General","nav_order":5,"mentions":["QuazChick","SmokeyStack"]},"headers":[{"level":2,"title":"Applying Traits","slug":"applying-traits","link":"#applying-traits","children":[]},{"level":2,"title":"List of Traits","slug":"list-of-traits","link":"#list-of-traits","children":[{"level":3,"title":"Placement Direction","slug":"placement-direction","link":"#placement-direction","children":[{"level":4,"title":"Provided States","slug":"provided-states","link":"#provided-states","children":[]},{"level":4,"title":"Additional Parameters","slug":"additional-parameters","link":"#additional-parameters","children":[]}]},{"level":3,"title":"Placement Position","slug":"placement-position","link":"#placement-position","children":[{"level":4,"title":"Provided States","slug":"provided-states-1","link":"#provided-states-1","children":[]}]}]}],"relativePath":"blocks/block-traits.md","filePath":"blocks/block-traits.md"}'),d={name:"blocks/block-traits.md"};function h(c,s,k,u,b,E){const i=r("CodeHeader");return p(),o("div",null,[s[3]||(s[3]=a('<div class="tip custom-block"><p class="custom-block-title">FORMAT &amp; MIN ENGINE VERSION <code>1.21.40</code></p><p>Before you learn about block traits, you should be confident with <a href="/8Crafter-Wiki/andexdb/blocks/block-states.html">block states</a>.</p><p>When working with block states, ensure that the <code>min_engine_version</code> in your pack manifest is <code>1.20.20</code> or higher.</p></div><h2 id="applying-traits" tabindex="-1">Applying Traits <a class="header-anchor" href="#applying-traits" aria-label="Permalink to &quot;Applying Traits&quot;">​</a></h2><p>Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.</p>',3)),t(i,null,{default:e(()=>s[0]||(s[0]=[n("BP/blocks/custom_slab.json")])),_:1}),s[4]||(s[4]=a(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.21.40&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;minecraft:block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;identifier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wiki:custom_slab&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;menu_category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;construction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;itemGroup.name.slab&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;traits&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;minecraft:placement_position&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;enabled_states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:vertical_half&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;permutations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><em>This example will set the <code>minecraft:vertical_half</code> block state when placed to either <code>&#39;top&#39;</code> or <code>&#39;bottom&#39;</code> - depending on where the player is looking.</em></p><p><strong>Permutations are still required for this state to make a functional difference, with conditions querying</strong></p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">block_state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;minecraft:vertical_half&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="list-of-traits" tabindex="-1">List of Traits <a class="header-anchor" href="#list-of-traits" aria-label="Permalink to &quot;List of Traits&quot;">​</a></h2><h3 id="placement-direction" tabindex="-1">Placement Direction <a class="header-anchor" href="#placement-direction" aria-label="Permalink to &quot;Placement Direction&quot;">​</a></h3><p>Contains information about the player&#39;s rotation when the block was placed.</p><p><em>Released from experiment <code>Upcoming Creator Features</code> for format versions 1.20.20 and higher.</em></p><h4 id="provided-states" tabindex="-1">Provided States <a class="header-anchor" href="#provided-states" aria-label="Permalink to &quot;Provided States&quot;">​</a></h4><table tabindex="0"><thead><tr><th>State</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td><code>minecraft:cardinal_direction</code></td><td><code>&quot;south&quot;</code> <em>(default)</em><br><code>&quot;north&quot;</code><br><code>&quot;west&quot;</code><br><code>&quot;east&quot;</code></td><td>Cardinal facing direction of player when placed.</td></tr><tr><td><code>minecraft:facing_direction</code></td><td><code>&quot;down&quot;</code> <em>(default)</em><br><code>&quot;up&quot;</code><br><code>&quot;south&quot;</code><br><code>&quot;north&quot;</code><br><code>&quot;west&quot;</code><br><code>&quot;east&quot;</code></td><td>Overall direction of player when placed.</td></tr></tbody></table><h4 id="additional-parameters" tabindex="-1">Additional Parameters <a class="header-anchor" href="#additional-parameters" aria-label="Permalink to &quot;Additional Parameters&quot;">​</a></h4><ul><li><code>y_rotation_offset</code> - This rotation offset only applies to the horizontal state values (north, south, east, west) . Only axis-aligned angles may be specified (e.g. 90, 180, -90).</li></ul>`,12)),t(i,null,{default:e(()=>s[1]||(s[1]=[n("minecraft:block > description > traits")])),_:1}),s[5]||(s[5]=a(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:placement_direction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;enabled_states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:cardinal_direction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;y_rotation_offset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="placement-position" tabindex="-1">Placement Position <a class="header-anchor" href="#placement-position" aria-label="Permalink to &quot;Placement Position&quot;">​</a></h3><p>Contains information about where the player placed the block.</p><p><em>Released from experiment <code>Upcoming Creator Features</code> for format versions 1.20.20 and higher.</em></p><h4 id="provided-states-1" tabindex="-1">Provided States <a class="header-anchor" href="#provided-states-1" aria-label="Permalink to &quot;Provided States&quot;">​</a></h4><table tabindex="0"><thead><tr><th>State</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td><code>minecraft:block_face</code></td><td><code>&quot;down&quot;</code> <em>(default)</em><br><code>&quot;up&quot;</code><br><code>&quot;south&quot;</code><br><code>&quot;north&quot;</code><br><code>&quot;west&quot;</code><br><code>&quot;east&quot;</code></td><td>Face on which the block was placed.</td></tr><tr><td><code>minecraft:vertical_half</code></td><td><code>&quot;top&quot;</code><br><code>&quot;bottom&quot;</code> <em>(default)</em></td><td>The vertical half where the block was placed.</td></tr></tbody></table>`,6)),t(i,null,{default:e(()=>s[2]||(s[2]=[n("minecraft:block > description > traits")])),_:1}),s[6]||(s[6]=a(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:placement_position&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;enabled_states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;minecraft:block_face&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;minecraft:vertical_half&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1))])}const y=l(d,[["render",h]]);export{g as __pageData,y as default};
