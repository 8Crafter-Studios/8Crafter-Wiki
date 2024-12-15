import{_ as s,e,t as n,C as a,f as r,E as t,Q as o,D as i,d as l}from"./chunks/framework.DWeOSq3P.js";const E=JSON.parse('{"title":"Block Sounds","description":"Block sounds refers to the sound property in your block entry inside blocks.json.","frontmatter":{"title":"Block Sounds","description":"Block sounds refers to the sound property in your block entry inside blocks.json.","category":"Documentation","show_outline":false,"mentions":["MedicalJewel105","TheItsNameless","QuazChick"]},"headers":[],"relativePath":"blocks/block-sounds.md","filePath":"blocks/block-sounds.md"}'),p={name:"blocks/block-sounds.md"},c=r("p",null,[t("Block sounds refers to the sound property in your block entry inside "),r("code",null,"blocks.json"),t(". This property is used to determine general block sounds, such as the mining sound, step on sound, breaking sound, and placement sound. You can apply sound to your block this way:")],-1),_=o(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.21.40&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;wiki:custom_log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wood&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Define sound here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The following are valid values for the sound property:</p><table tabindex="0"><thead><tr><th><em>Last updated for 1.21.50</em></th></tr></thead><tbody><tr><td>amethyst_block</td></tr><tr><td>amethyst_cluster</td></tr><tr><td>ancient_debris</td></tr><tr><td>anvil</td></tr><tr><td>azalea</td></tr><tr><td>azalea_leaves</td></tr><tr><td>bamboo</td></tr><tr><td>bamboo_sapling</td></tr><tr><td>bamboo_wood</td></tr><tr><td>bamboo_wood_hanging_sign</td></tr><tr><td>basalt</td></tr><tr><td>big_dripleaf</td></tr><tr><td>bone_block</td></tr><tr><td>calcite</td></tr><tr><td>candle</td></tr><tr><td>cave_vines</td></tr><tr><td>chain</td></tr><tr><td>cherry_leaves</td></tr><tr><td>cherry_wood</td></tr><tr><td>cherry_wood_hanging_sign</td></tr><tr><td>chiseled_bookshelf</td></tr><tr><td>cloth</td></tr><tr><td>comparator</td></tr><tr><td>copper</td></tr><tr><td>copper_bulb</td></tr><tr><td>copper_grate</td></tr><tr><td>coral</td></tr><tr><td>creaking_heart</td></tr><tr><td>decorated_pot</td></tr><tr><td>deepslate</td></tr><tr><td>deepslate_bricks</td></tr><tr><td>dirt_with_roots</td></tr><tr><td>dripstone_block</td></tr><tr><td>eyeblossom</td></tr><tr><td>frog_spawn</td></tr><tr><td>froglight</td></tr><tr><td>fungus</td></tr><tr><td>glass</td></tr><tr><td>glow_lichen</td></tr><tr><td>grass</td></tr><tr><td>gravel</td></tr><tr><td>hanging_roots</td></tr><tr><td>hanging_sign</td></tr><tr><td>heavy_core</td></tr><tr><td>honey_block</td></tr><tr><td>itemframe</td></tr><tr><td>ladder</td></tr><tr><td>lantern</td></tr><tr><td>large_amethyst_bud</td></tr><tr><td>lever</td></tr><tr><td>lodestone</td></tr><tr><td>mangrove_roots</td></tr><tr><td>medium_amethyst_bud</td></tr><tr><td>metal</td></tr><tr><td>mob_spawner</td></tr><tr><td>moss_block</td></tr><tr><td>moss_carpet</td></tr><tr><td>mud</td></tr><tr><td>mud_bricks</td></tr><tr><td>muddy_mangrove_roots</td></tr><tr><td>nether_brick</td></tr><tr><td>nether_gold_ore</td></tr><tr><td>nether_sprouts</td></tr><tr><td>nether_wart</td></tr><tr><td>nether_wood</td></tr><tr><td>nether_wood_hanging_sign</td></tr><tr><td>netherite</td></tr><tr><td>netherrack</td></tr><tr><td>nylium</td></tr><tr><td>packed_mud</td></tr><tr><td>pale_hanging_moss</td></tr><tr><td>pink_petals</td></tr><tr><td>pointed_dripstone</td></tr><tr><td>polished_tuff</td></tr><tr><td>powder_snow</td></tr><tr><td>resin</td></tr><tr><td>resin_brick</td></tr><tr><td>roots</td></tr><tr><td>sand</td></tr><tr><td>scaffolding</td></tr><tr><td>sculk</td></tr><tr><td>sculk_catalyst</td></tr><tr><td>sculk_sensor</td></tr><tr><td>sculk_shrieker</td></tr><tr><td>sculk_vein</td></tr><tr><td>shroomlight</td></tr><tr><td>slime</td></tr><tr><td>small_amethyst_bud</td></tr><tr><td>snow</td></tr><tr><td>soul_sand</td></tr><tr><td>soul_soil</td></tr><tr><td>sponge</td></tr><tr><td>spore_blossom</td></tr><tr><td>stem</td></tr><tr><td>stone</td></tr><tr><td>suspicious_gravel</td></tr><tr><td>suspicious_sand</td></tr><tr><td>sweet_berry_bush</td></tr><tr><td>trial_spawner</td></tr><tr><td>tuff</td></tr><tr><td>tuff_bricks</td></tr><tr><td>turtle_egg</td></tr><tr><td>vault</td></tr><tr><td>vines</td></tr><tr><td>web</td></tr><tr><td>wet_sponge</td></tr><tr><td>wood</td></tr></tbody></table>`,3);function h(u,k,b,g,m,y){const d=i("CodeHeader");return l(),e("div",null,[c,n(d,null,{default:a(()=>[t("RP/blocks.json")]),_:1}),_])}const v=s(p,[["render",h]]);export{E as __pageData,v as default};
