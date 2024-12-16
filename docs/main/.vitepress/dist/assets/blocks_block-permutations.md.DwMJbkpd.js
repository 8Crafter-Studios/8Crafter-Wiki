import{_ as l,e as p,O as i,t as n,D as t,A as o,d as r,E as e}from"./chunks/framework.BGJJ8CDY.js";const g=JSON.parse('{"title":"Block Permutations","description":"Block permutations represent all state configurations that blocks can possibly be in.","frontmatter":{"title":"Block Permutations","description":"Block permutations represent all state configurations that blocks can possibly be in.","category":"General","nav_order":7,"mentions":["QuazChick","SmokeyStack"]},"headers":[{"level":2,"title":"What are Permutations?","slug":"what-are-permutations","link":"#what-are-permutations","children":[{"level":3,"title":"Misconceptions","slug":"misconceptions","link":"#misconceptions","children":[]}]},{"level":2,"title":"Conditionally Applying Components","slug":"conditionally-applying-components","link":"#conditionally-applying-components","children":[{"level":3,"title":"Permutation Conditions","slug":"permutation-conditions","link":"#permutation-conditions","children":[]}]},{"level":2,"title":"Permutation Limits","slug":"permutation-limits","link":"#permutation-limits","children":[{"level":3,"title":"Maximum Amount Per Block","slug":"maximum-amount-per-block","link":"#maximum-amount-per-block","children":[]},{"level":3,"title":"Maximum Amount Per World","slug":"maximum-amount-per-world","link":"#maximum-amount-per-world","children":[]}]}],"relativePath":"blocks/block-permutations.md","filePath":"blocks/block-permutations.md"}'),h={name:"blocks/block-permutations.md"};function k(d,s,c,u,m,E){const a=o("CodeHeader");return r(),p("div",null,[s[2]||(s[2]=i('<div class="tip custom-block"><p class="custom-block-title">FORMAT &amp; MIN ENGINE VERSION <code>1.21.40</code></p><p>Before you learn about block permutations, you should be confident with <a href="/8Crafter-Wiki/main/blocks/block-states.html">block states</a>.</p><p>When working with block states, ensure that the <code>min_engine_version</code> in your pack manifest is <code>1.20.20</code> or higher.</p></div><h2 id="what-are-permutations" tabindex="-1">What are Permutations? <a class="header-anchor" href="#what-are-permutations" aria-label="Permalink to &quot;What are Permutations?&quot;">​</a></h2><p>Block permutations represent all state value configurations that each block can possibly be in.</p><p>For example, if you added a custom block with two boolean states…</p>',4)),n(a,null,{default:t(()=>s[0]||(s[0]=[e("minecraft:block")])),_:1}),s[3]||(s[3]=i(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;identifier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wiki:permutations_example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;wiki:first_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;wiki:second_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>…the 4 following block permutations would be added to the world:</p><table tabindex="0"><thead><tr><th>Block Identifier</th><th>wiki:first_state</th><th>wiki:second_state</th></tr></thead><tbody><tr><td>wiki:permutations_example</td><td>false</td><td>false</td></tr><tr><td>wiki:permutations_example</td><td>true</td><td>false</td></tr><tr><td>wiki:permutations_example</td><td>false</td><td>true</td></tr><tr><td>wiki:permutations_example</td><td>true</td><td>true</td></tr></tbody></table><p>To calculate how many permutations your block has, multiply the amount of valid state values each state has together. For instance, the calculation for the example above would be 2 × 2, meaning this block has 4 permutations.</p><h3 id="misconceptions" tabindex="-1">Misconceptions <a class="header-anchor" href="#misconceptions" aria-label="Permalink to &quot;Misconceptions&quot;">​</a></h3><ul><li>All blocks have permutations, even blocks with no states have 1 permutation that is simply made up of the block identifier.</li><li>The number of permutations your block has is based on the states it has, not the number of items in the <code>permutations</code> array.</li></ul><h2 id="conditionally-applying-components" tabindex="-1">Conditionally Applying Components <a class="header-anchor" href="#conditionally-applying-components" aria-label="Permalink to &quot;Conditionally Applying Components&quot;">​</a></h2><p>The block <code>permutations</code> array provides a way of conditionally applying components (including tags) to a block based on its current permutation.</p><p>Components within the <code>permutations</code> array can override the block&#39;s base components, as well as those of other component lists. The latest component list in the <code>permutations</code> array takes priority.</p><p><em>Released from experiment <code>Holiday Creator Features</code> for format versions 1.19.70 and higher.</em></p>`,10)),n(a,null,{default:t(()=>s[1]||(s[1]=[e("BP/blocks/custom_block.json")])),_:1}),s[4]||(s[4]=i(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.21.40&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;minecraft:block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;identifier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wiki:custom_block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;wiki:integer_state_example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;wiki:boolean_state_example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;wiki:string_state_example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;green&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;permutations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q.block_state(&#39;wiki:integer_state_example&#39;) == 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;minecraft:friction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q.block_state(&#39;wiki:boolean_state_example&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;minecraft:friction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Overrides previous permutation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q.block_state(&#39;wiki:string_state_example&#39;) == &#39;red&#39; &amp;&amp; !q.block_state(&#39;wiki:boolean_state_example&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;minecraft:geometry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;geometry.pig&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="permutation-conditions" tabindex="-1">Permutation Conditions <a class="header-anchor" href="#permutation-conditions" aria-label="Permalink to &quot;Permutation Conditions&quot;">​</a></h3><p>When evaluated as truthy (not false or 0), the involved component list is applied.</p><p>Permutation conditions are written as Molang expression strings, and have very limited context:</p><ul><li>Conditions are purely based on the block&#39;s permutation, therefore only have access to the <code>q.block_state</code> query function.</li><li>This also means that conditions cannot have side effects. <ul><li>The following math functions may not be used: <code>math.die_roll</code>, <code>math.die_roll_integer</code>, <code>math.random</code>, <code>math.random_integer</code>.</li><li>Variables (including <code>temp</code> variables) cannot be assigned.</li></ul></li></ul><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">block_state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wiki:integer_state_example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">block_state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wiki:boolean_state_example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="permutation-limits" tabindex="-1">Permutation Limits <a class="header-anchor" href="#permutation-limits" aria-label="Permalink to &quot;Permutation Limits&quot;">​</a></h2><p>As with all things blocks, some limitations have been put in place by Mojang to prevent undesirable behavior.</p><h3 id="maximum-amount-per-block" tabindex="-1">Maximum Amount Per Block <a class="header-anchor" href="#maximum-amount-per-block" aria-label="Permalink to &quot;Maximum Amount Per Block&quot;">​</a></h3><p>A block <em>cannot</em> have more than 65,536 permutations (equivalent to 4 states with 16 values each). Exceeding this limit will result in a content log error and some states being absent from your block.</p><h3 id="maximum-amount-per-world" tabindex="-1">Maximum Amount Per World <a class="header-anchor" href="#maximum-amount-per-world" aria-label="Permalink to &quot;Maximum Amount Per World&quot;">​</a></h3><p>A world <em>should</em> not have more than 65,536 block permutations registered (not necessarily placed). Exceeding this limit will result in the following content log warning:</p><blockquote><p>World with over 65536 block permutations may degrade performance. Current world has XXXXX permutations.</p></blockquote>`,13))])}const y=l(h,[["render",k]]);export{g as __pageData,y as default};
