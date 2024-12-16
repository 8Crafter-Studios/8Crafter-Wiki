import{_ as d,e as p,O as n,t as a,D as t,A as l,d as r,E as e}from"./chunks/framework.BGJJ8CDY.js";const h="/8Crafter-Wiki/main/assets/images/concepts/sounds/sound_graph.png",q=JSON.parse('{"title":"Sounds","description":"Add custom sounds without overwriting any vanilla ones.","frontmatter":{"title":"Sounds","tags":["intermediate"],"mentions":["SirLich","solvedDev","Joelant05","aexer0e","MedicalJewel105","Justash01","DasEtwas","TheItsNameless","ThomasOrs"],"description":"Add custom sounds without overwriting any vanilla ones."},"headers":[{"level":3,"title":"Folder Structure","slug":"folder-structure","link":"#folder-structure","children":[]},{"level":2,"title":"sound_definitions.json","slug":"sound-definitions-json","link":"#sound-definitions-json","children":[{"level":3,"title":"/playsound volume notes","slug":"playsound-volume-notes","link":"#playsound-volume-notes","children":[]},{"level":3,"title":"Top Level Keys","slug":"top-level-keys","link":"#top-level-keys","children":[{"level":4,"title":"Categories","slug":"categories","link":"#categories","children":[]},{"level":4,"title":"min_distance","slug":"min-distance","link":"#min-distance","children":[]},{"level":4,"title":"max_distance","slug":"max-distance","link":"#max-distance","children":[]}]},{"level":3,"title":"Sound definitions","slug":"sound-definitions","link":"#sound-definitions","children":[{"level":4,"title":"name","slug":"name","link":"#name","children":[]},{"level":4,"title":"stream","slug":"stream","link":"#stream","children":[]},{"level":4,"title":"volume","slug":"volume","link":"#volume","children":[]},{"level":4,"title":"load_on_low_memory","slug":"load-on-low-memory","link":"#load-on-low-memory","children":[]},{"level":4,"title":"pitch","slug":"pitch","link":"#pitch","children":[]},{"level":4,"title":"is3D","slug":"is3d","link":"#is3d","children":[]},{"level":4,"title":"interruptible","slug":"interruptible","link":"#interruptible","children":[]}]},{"level":3,"title":"weight","slug":"weight","link":"#weight","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"sounds.json","slug":"sounds-json","link":"#sounds-json","children":[{"level":3,"title":"Adding Entity Sounds","slug":"adding-entity-sounds","link":"#adding-entity-sounds","children":[]},{"level":3,"title":"Example","slug":"example-1","link":"#example-1","children":[]}]},{"level":2,"title":"Adding sounds to Animations","slug":"adding-sounds-to-animations","link":"#adding-sounds-to-animations","children":[]},{"level":2,"title":"Adding sounds to Animation Controllers","slug":"adding-sounds-to-animation-controllers","link":"#adding-sounds-to-animation-controllers","children":[]}],"relativePath":"concepts/sounds.md","filePath":"concepts/sounds.md"}'),u={name:"concepts/sounds.md"};function k(c,s,m,E,g,b){const o=l("FolderView"),i=l("CodeHeader");return r(),p("div",null,[s[8]||(s[8]=n('<p>In bedrock, we can add custom sounds without overwriting any vanilla sounds. This is done by adding files to the resource pack.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The best way to learn about sounds is by downloading and playing around with the default resource pack.</p></div><h3 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h3><p>There are two main files that we edit when we want to add sounds. Note how <code>sound_definition</code> is nested inside <code>sounds</code>.</p><p>Sound files themselves are added inside of the <code>sounds</code> folder, and can be any of the following formats.</p>',5)),a(o,{paths:["RP/sounds.json","RP/sounds/sound_definitions.json","RP/sounds/example.wav","RP/sounds/example.ogg","RP/sounds/example.fsb"]}),s[9]||(s[9]=n('<h2 id="sound-definitions-json" tabindex="-1">sound_definitions.json <a class="header-anchor" href="#sound-definitions-json" aria-label="Permalink to &quot;sound_definitions.json&quot;">​</a></h2><p><code>sound_definitions.json</code> is where we define new sound short-names. This should be thought of as typing a <code>short-name</code> or <code>id</code> to a physical sound path. Here is an example, <code>sound_definitions.json</code>, that adds a new trumpet sound called <code>example.toot</code>:</p>',2)),a(i,null,{default:t(()=>s[0]||(s[0]=[e("RP/sounds/sound_definitions.json")])),_:1}),s[10]||(s[10]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.14.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;sound_definitions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;example.toot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neutral&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;sounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sounds/trumpet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Sounds added in this way can be triggered using <code>/playsound</code>. Please note that <code>playsound</code> does not auto-correct, so you will need to be careful in your typing.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>New files referenced by file path, such as sounds, DO need a complete client restart to load. This means that if sounds don&#39;t work, you should restart your entire MC client rather than just reloading the world.</p></div><h3 id="playsound-volume-notes" tabindex="-1">/playsound volume notes <a class="header-anchor" href="#playsound-volume-notes" aria-label="Permalink to &quot;/playsound volume notes&quot;">​</a></h3><p>The game will clamp the sound volume to at most 1.0 before multiplying it with the sound definition&#39;s volume.</p><p>For <code>/playsound</code>, the maximum hearable range of a sound is given by <code>min(max_distance, max(volume * 16, 16))</code>. If <code>&quot;max_distance&quot;</code>is not given in the sound&#39;s definition, it is equivalent to <code>playsound_volume * 16</code>.</p><p>Approximate sound attenuation by distance. The actual graph might not be linear.</p><p><img src="`+h+'" alt=""></p><p>Shown above is the approximate sound attenuation factor by distance <strong>for playing sounds with a volume parameter greater than or equal to 1</strong>. Notice how the playsound <code>&lt;volume&gt;</code> limits the sound&#39;s audible range. The axis <code>distance</code> is the distance of the sound listener (player) to the sound source. The corresponding <code>volume</code> axis&#39; value is the factor for the playsound volume capped to 1, multiplied by the sound definition&#39;s volume to get the final volume of the sound you hear. As an expression this could be written as: <code>final_volume = min(playsound_volume, 1) * graph_volume * sound_definition_volume</code>.</p><p><strong>Note:</strong> Attenuation by distance of the hearable sound&#39;s volume is not affected by the volume parameter given in the command.</p><p>For example, <code>mob.ghast.affectionate_scream</code> sets <code>&quot;min_distance&quot;: 100.0</code>, but can only be heard from at most 16 blocks away when using <code>/playsound</code> with volume 1 to play it. Specifying a greater volume value increases the audible range. When using a large enough volume to hear the sound farther away, the sound will get quieter only after a distance of more than 100.0.</p><p>To make a sound which can be heard far away but also drops in volume continuously over distance, one can add e.g. <code>&quot;volume&quot;: 0.01</code>and use large <code>&lt;volume&gt;</code> values in the playsound command. The high value for the <code>/playsound</code> volume will produce a large audible range (e.g. a volume of 4 is 64 blocks as calculated above), while the low volume will prevent the played sound from capping at 1.0 too soon.</p><h3 id="top-level-keys" tabindex="-1">Top Level Keys <a class="header-anchor" href="#top-level-keys" aria-label="Permalink to &quot;Top Level Keys&quot;">​</a></h3><p>In the example above, I showed two <code>top-level</code> fields: <code>category</code> and <code>sounds</code>. Sounds will be discussed in further detail below, but the other <code>top-level</code> keys will be discussed here:</p><h4 id="categories" tabindex="-1">Categories <a class="header-anchor" href="#categories" aria-label="Permalink to &quot;Categories&quot;">​</a></h4><p>Categories are used internally by the engine to decide how each sound is played. We can utilize different channels to get other effects.</p><table tabindex="0"><thead><tr><th>Category</th><th>Note</th></tr></thead><tbody><tr><td>weather</td><td></td></tr><tr><td>block</td><td></td></tr><tr><td>bucket</td><td></td></tr><tr><td>bottle</td><td></td></tr><tr><td>ui</td><td>Sounds in this category will ignore range limit</td></tr><tr><td>player</td><td></td></tr><tr><td>hostile</td><td></td></tr><tr><td>music</td><td></td></tr><tr><td>record</td><td></td></tr><tr><td>neutral</td><td></td></tr></tbody></table><h4 id="min-distance" tabindex="-1">min_distance <a class="header-anchor" href="#min-distance" aria-label="Permalink to &quot;min_distance&quot;">​</a></h4><p>The distance from the sound source after which sound volume is attenuated. Default value: 0.0. It must be a float (eg. 1.0), or the property will be ignored.</p><h4 id="max-distance" tabindex="-1">max_distance <a class="header-anchor" href="#max-distance" aria-label="Permalink to &quot;max_distance&quot;">​</a></h4><p>The distance from the sound source after which the sound volume is the quietest (if in range). It must be a float (eg. 1.0), or the property will be ignored.</p><h3 id="sound-definitions" tabindex="-1">Sound definitions <a class="header-anchor" href="#sound-definitions" aria-label="Permalink to &quot;Sound definitions&quot;">​</a></h3><p>In the example above, I showed <code>sounds</code> as simply a list with a single path. This is good for simple sounds but does not have much power. For starts, I can add multiple sounds to the list. These sounds will be randomized when played:</p>',23)),a(i,null,{default:t(()=>s[1]||(s[1]=[e("RP/sounds/sound_definitions.json")])),_:1}),s[11]||(s[11]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.14.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;sound_definitions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;example.toot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neutral&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;sounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;sounds/trumpet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;sounds/trumpet2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;sounds/trumpet3&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Additionally, we can define each sound as an object instead of a string. This allows us finer control and unlocks some new settings. The string/object style can be mixed and matched.</p><h4 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h4><p>The path to the file, such as: <code>&quot;sounds/music/game/creative/creative1&quot;</code></p><h4 id="stream" tabindex="-1">stream <a class="header-anchor" href="#stream" aria-label="Permalink to &quot;stream&quot;">​</a></h4><p>Limits the sound only to be played a limited number of instances at a time. Will cause the game to not load the entire sound data into memory while playing, but rather in smaller parts while playing, thus using less memory. Good for improving performance on sound heavy worlds.</p><h4 id="volume" tabindex="-1">volume <a class="header-anchor" href="#volume" aria-label="Permalink to &quot;volume&quot;">​</a></h4><p>How loud the sound should play, from <code>0.0</code> to <code>1.0</code>. Sounds cannot be made more audible than initially encoded. Set to <code>1.0</code> by default. Sounds in custom resource packs can have working values greater than 1.0.</p><h4 id="load-on-low-memory" tabindex="-1">load_on_low_memory <a class="header-anchor" href="#load-on-low-memory" aria-label="Permalink to &quot;load_on_low_memory&quot;">​</a></h4><p>Forces the loading of the sound even when nearing low memory. &quot;load_on_low_memory&quot; is now deprecated as of 1.16.0</p><h4 id="pitch" tabindex="-1">pitch <a class="header-anchor" href="#pitch" aria-label="Permalink to &quot;pitch&quot;">​</a></h4><p>The pitch of the sound (how low/high it sounds). Should be a positive value. For example, <code>2.3</code> will let the sound play 2.3 times as quickly and thus at higher pitch. Set to <code>1.0</code> by default.</p><h4 id="is3d" tabindex="-1">is3D <a class="header-anchor" href="#is3d" aria-label="Permalink to &quot;is3D&quot;">​</a></h4><p><code>true</code> makes the sound directional. Set to <code>true</code> for all sounds by default. Ignored for <code>music</code> and <code>ui</code> sounds. Only sounds with <code>false</code> will play stereo sound.</p><h4 id="interruptible" tabindex="-1">interruptible <a class="header-anchor" href="#interruptible" aria-label="Permalink to &quot;interruptible&quot;">​</a></h4><p>Set to <code>true</code> by default.</p><h3 id="weight" tabindex="-1">weight <a class="header-anchor" href="#weight" aria-label="Permalink to &quot;weight&quot;">​</a></h3><p>If there is more than one sound in the list, the sound to be played is chosen randomly. <code>&quot;weight&quot;</code> (integer value like 5) will give the relative chance that this sound is chosen from the list. For example, if there are two sounds in the list, one with <code>&quot;weight&quot;: 10</code> and the other with <code>&quot;weight&quot;: 2</code>, the first will be played approximately 5 times more likely than the second (accurately: <code>10 / (10 + 2) = 83.3%</code> chance vs. <code>2 / (10 + 2) = 16.7%</code> chance) . Set to <code>1</code> by default.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Here is a more realistic example containing these options:</p>`,20)),a(i,null,{default:t(()=>s[2]||(s[2]=[e("RP/sounds/sound_definitions.json#sound_definitions")])),_:1}),s[12]||(s[12]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;block.beehive.drip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_distance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;sounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sounds/block/beehive/drip1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;load_on_low_memory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;sounds/block/beehive/drip2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;sounds/block/beehive/drip3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;sounds/block/beehive/drip4&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="sounds-json" tabindex="-1">sounds.json <a class="header-anchor" href="#sounds-json" aria-label="Permalink to &quot;sounds.json&quot;">​</a></h2><p>If we want our sounds to run automatically, we can add them into the <code>sounds.json</code> file. This will tie the sound definitions directly to game events and cause them to play without needing to trigger with <code>/playsound</code>.</p><p>Sounds can be added into various categories:</p><table tabindex="0"><thead><tr><th>Category</th><th>Note</th></tr></thead><tbody><tr><td>individual_event_sounds</td><td>Contains sounds like beacon activation, chest-close, or explode</td></tr><tr><td>block_sounds</td><td>Contains hit, step, and break sounds for blocks</td></tr><tr><td>entity_sounds</td><td>Contains death, ambient, hurt, etc. sounds for entities (Including custom ones!)</td></tr><tr><td>interactive_sounds</td><td>WIP</td></tr></tbody></table><h3 id="adding-entity-sounds" tabindex="-1">Adding Entity Sounds <a class="header-anchor" href="#adding-entity-sounds" aria-label="Permalink to &quot;Adding Entity Sounds&quot;">​</a></h3><p>I assume that sounds can be added in other categories, but I personally only have experience adding sounds into the <code>entities</code> category. Entity sounds are automatically played at various points in the entities life-cycle.</p><p>Common events:</p><table tabindex="0"><thead><tr><th>Events</th><th>Note</th></tr></thead><tbody><tr><td>ambient</td><td>Played randomly, such as grunts, clucks, or ghast noises</td></tr><tr><td>hurt</td><td>Played when damaged</td></tr><tr><td>death</td><td>Played when it dies</td></tr><tr><td>step</td><td>Played when the entity moves along the ground</td></tr><tr><td>fall.big</td><td>For hitting the ground from a high height</td></tr><tr><td>fall.small</td><td>For hitting the ground from a low height</td></tr><tr><td>splash</td><td>For splashing in the water</td></tr><tr><td>attack</td><td>For melee attacking</td></tr><tr><td>shoot</td><td>For shooting projectiles</td></tr><tr><td>cast.spell</td><td>For starting summon</td></tr><tr><td>prepare.attack</td><td>For finishing summon</td></tr><tr><td>roar</td><td>For roaring</td></tr></tbody></table><p>There are also many sound events, which <em>most likely</em> trigger automatically, but which I don&#39;t have details for, such as:</p><table tabindex="0"><thead><tr><th>Unknown Categories</th></tr></thead><tbody><tr><td>breathe</td></tr><tr><td>splash</td></tr><tr><td>swim</td></tr><tr><td>ambient.in.water</td></tr><tr><td>death.in.water</td></tr><tr><td>jump</td></tr><tr><td>eat</td></tr><tr><td>hurt.in.water</td></tr><tr><td>mad</td></tr><tr><td>stare</td></tr><tr><td>sniff</td></tr><tr><td>sleep</td></tr><tr><td>spit</td></tr><tr><td>warn</td></tr><tr><td>scream</td></tr></tbody></table><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3>`,12)),a(i,null,{default:t(()=>s[3]||(s[3]=[e("RP/sounds.json")])),_:1}),s[13]||(s[13]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;entity_sounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;entities&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;wiki:elephant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">				&quot;volume&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">				&quot;pitch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">				&quot;events&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">					&quot;step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">						&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;elephant.step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">						&quot;volume&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">						&quot;pitch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">					&quot;ambient&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">						&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;elephant.trumpet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">						&quot;volume&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">						&quot;pitch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="adding-sounds-to-animations" tabindex="-1">Adding sounds to Animations <a class="header-anchor" href="#adding-sounds-to-animations" aria-label="Permalink to &quot;Adding sounds to Animations&quot;">​</a></h2><p>Sounds played in animations function based off of <code>short-name</code> definitions in the RP entity file.</p><p>This example shows playing a wing-flap sound, synced with an animation.</p>`,4)),a(i,null,{default:t(()=>s[4]||(s[4]=[e("RP/entities/dragon.json#minecraft:client_entity/description")])),_:1}),s[14]||(s[14]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound_effects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;wing_flap&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wiki.dragon.wing_flap&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //where wiki.dragon.roar is a sound defined in sound_definitions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1)),a(i,null,{default:t(()=>s[5]||(s[5]=[e("RP/animations/dragon.json#animations/animation.dragon.flying")])),_:1}),s[15]||(s[15]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound_effects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;3.16&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;effect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wing_flap&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="adding-sounds-to-animation-controllers" tabindex="-1">Adding sounds to Animation Controllers <a class="header-anchor" href="#adding-sounds-to-animation-controllers" aria-label="Permalink to &quot;Adding sounds to Animation Controllers&quot;">​</a></h2><p>You can play sounds within animation controllers in a similar way that animations can be.</p><p>This example shows playing an explosion sound, synced using an animation controller.</p>`,4)),a(i,null,{default:t(()=>s[6]||(s[6]=[e("RP/entities/custom_tnt.json#minecraft:client_entity/description")])),_:1}),s[16]||(s[16]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound_effects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;explosion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wiki.custom_tnt.explosion&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //where wiki.custom_tnt.explosion is a sound defined in sound_definitions just like animation sounds.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1)),a(i,null,{default:t(()=>s[7]||(s[7]=[e("RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt")])),_:1}),s[17]||(s[17]=n(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;transitions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;explode_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q.mark_variant == 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;explode_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;sound_effects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;effect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;explosion&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;transitions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q.mark_variant == 0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1))])}const v=d(u,[["render",k]]);export{q as __pageData,v as default};
