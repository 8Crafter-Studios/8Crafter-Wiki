import{_ as e,e as t,d as a,Q as o}from"./chunks/framework.DWeOSq3P.js";const i="/8Crafter-Wiki/assets/images/commands/selectors/volume.png",l="/8Crafter-Wiki/assets/images/commands/selectors/x-rotation.png",s="/8Crafter-Wiki/assets/images/commands/selectors/y-rotation.png",f=JSON.parse('{"title":"Understanding Selectors","description":"Understanding target selectors in commands.","frontmatter":{"title":"Understanding Selectors","category":"General","mentions":["Science-geek42","Brougud","MedicalJewel105","SmokeyStack","Sprunkles137","Hatchibombotar","SpacebarNinja","jeanmajid"],"description":"Understanding target selectors in commands."},"headers":[{"level":2,"title":"Selector Variables","slug":"selector-variables","link":"#selector-variables","children":[]},{"level":2,"title":"Selector Arguments","slug":"selector-arguments","link":"#selector-arguments","children":[{"level":3,"title":"Type","slug":"type","link":"#type","children":[]},{"level":3,"title":"Count","slug":"count","link":"#count","children":[]},{"level":3,"title":"Position","slug":"position","link":"#position","children":[]},{"level":3,"title":"Distance","slug":"distance","link":"#distance","children":[]},{"level":3,"title":"Volume","slug":"volume","link":"#volume","children":[]},{"level":3,"title":"Scores","slug":"scores","link":"#scores","children":[]},{"level":3,"title":"Name","slug":"name","link":"#name","children":[]},{"level":3,"title":"Tag","slug":"tag","link":"#tag","children":[]},{"level":3,"title":"Family","slug":"family","link":"#family","children":[]},{"level":3,"title":"Rotation","slug":"rotation","link":"#rotation","children":[]},{"level":3,"title":"Level","slug":"level","link":"#level","children":[]},{"level":3,"title":"Game Mode","slug":"game-mode","link":"#game-mode","children":[]},{"level":3,"title":"Items","slug":"items","link":"#items","children":[]}]}],"relativePath":"commands/selectors.md","filePath":"commands/selectors.md"}'),n={name:"commands/selectors.md"},r=o(`<p>Target selectors are used in commands to target who you want to execute a command on without explicitly setting a target, such as a player&#39;s name. A target selector is comprised of a selector variable, and optionally a list of selector arguments.</p><h2 id="selector-variables" tabindex="-1">Selector Variables <a class="header-anchor" href="#selector-variables" aria-label="Permalink to &quot;Selector Variables&quot;">​</a></h2><p>The selector variable defines the broad list of entities to select. There are six selector variables to choose from:</p><ul><li><code>@a</code> - Target all players</li><li><code>@p</code> - Target the nearest player</li><li><code>@r</code> - Target a random player</li><li><code>@e</code> - Target all entities</li><li><code>@s</code> - Target the executor</li><li><code>@initiator</code> - Target the player interacting with an NPC</li></ul><h2 id="selector-arguments" tabindex="-1">Selector Arguments <a class="header-anchor" href="#selector-arguments" aria-label="Permalink to &quot;Selector Arguments&quot;">​</a></h2><p>Selector arguments can narrow down a list of target candidates to those who meet certain conditions. In order to use selector arguments, you must first have a selector variable. To start with selector arguments you must add square brackets <code>[]</code> to the end of the chosen target selector like this: <code>kill @e[]</code>. Multiple selector arguments can be used by separating them with commas.</p><h3 id="type" tabindex="-1">Type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;Type&quot;">​</a></h3><p>Limits the selection of targets by their identifier. Negating the argument selects entities without that identifier. This argument cannot be repeated unless negated, since a given entity can only have one identifier. This argument can be used with the selector <code>@r</code> to select entities randomly.</p><ul><li><code>type=&lt;identifier&gt;</code>—Include only entities with the given identifier.</li><li><code>type=!&lt;identifier&gt;</code>—Exclude any entities with the given identifier.</li></ul><p><strong>Examples:</strong></p><p>Affect all pigs with levitation:</p><ul><li><code>/effect @e[type=pig] levitation</code></li></ul><p>Kill all entities that are not arrows and snowballs:</p><ul><li><code>/kill @e[type=!arrow,type=!snowball]</code></li></ul><h3 id="count" tabindex="-1">Count <a class="header-anchor" href="#count" aria-label="Permalink to &quot;Count&quot;">​</a></h3><p>Limits the number of selected entities, following selector sorting rules.</p><p>The selectors <code>@a</code>, <code>@p</code>, and <code>@e</code> sort by increasing distance, while <code>@r</code> sorts randomly. For the variables <code>@p</code> and <code>@r</code>, this argument defaults to 1. Negating this argument reverses the sorting order; random sorting cannot be negated.</p><ul><li><code>c=&lt;count&gt;</code>—Select up to <code>&lt;count&gt;</code> entities.</li></ul><p><strong>Examples:</strong></p><p>Clear stone from the closest five players:</p><ul><li><code>/clear @a[c=5] stone</code></li></ul><p>Damage the furthest two skeletons:</p><ul><li><code>/damage @e[type=skeleton,c=-2] 2</code></li></ul><h3 id="position" tabindex="-1">Position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;Position&quot;">​</a></h3><p>Changes the position a selector starts its search at. It also modifies where the distance and volume arguments are positioned. Leaving any undefined defaults to the command&#39;s current position.</p><p><a href="/8Crafter-Wiki/commands/relative-coordinates.html#relative-coordinates">Relative coordinates</a> can be used to define a relative offset from the command&#39;s position.</p><ul><li><code>x=&lt;value&gt;</code>, <code>y=&lt;value&gt;</code>, and <code>z=&lt;value&gt;</code>—Defines a position for the target selector.</li></ul><p><strong>Examples:</strong></p><p>Teleport the closest player to (140, 64, -200) ten blocks up:</p><ul><li><code>/teleport @p[x=140, y=64, z=-200] ~ ~10 ~</code></li></ul><h3 id="distance" tabindex="-1">Distance <a class="header-anchor" href="#distance" aria-label="Permalink to &quot;Distance&quot;">​</a></h3><p>Limits the selection of targets by their spherical distance from the selector. This selects entities by their feet.</p><ul><li><code>rm=&lt;value&gt;</code> and <code>r=&lt;value&gt;</code>—Selects entities between the minimum and maximum number of blocks away, inclusive and respectively.</li></ul><p><strong>Examples:</strong></p><p>Kill all chickens between two and six blocks away:</p><ul><li><code>/kill @e[type=chicken, rm=2, r=6]</code></li></ul><p>Enchant the held item with Sharpness for all players within one block of (0, 100, 0):</p><ul><li><code>/enchant @a[x=0, y=100, z=0, r=1] sharpness</code></li></ul><h3 id="volume" tabindex="-1">Volume <a class="header-anchor" href="#volume" aria-label="Permalink to &quot;Volume&quot;">​</a></h3><p>Limits the selection of targets to those within or intersecting a specified cuboid volume (bounding box). There are three arguments, each determining the size of the box along their respective axes. If at least one argument is defined, any remaining arguments left undefined are assumed to be 0. This selects entities by their hitbox.</p><p>The general formula for calculating the volume between two positions can be viewed as:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dx = x2 - x1</span></span>
<span class="line"><span>dy = y2 - y1</span></span>
<span class="line"><span>dz = z2 - z1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>dx=&lt;value&gt;</code>, <code>dy=&lt;value&gt;</code>, and <code>dz=&lt;value&gt;</code>—Selects entities inside the given bounding box.</li></ul><p><strong>Examples:</strong></p><p>List all entities within a 12x30x2 box:</p><ul><li><code>/say @e[dx=12, dz=30, dy=2]</code></li></ul><p>Add the &quot;lobby&quot; tag to all players between (-400, 0, -350) and (-150, 256, 50):</p><ul><li><code>/tag @a[x=-400, y=0, z=-350, dx=250, dy=256, dz=400] add lobby</code></li></ul><p>Add the &quot;warp&quot; tag to all entities between (-1.5, 0, -2) and (1, 0, 1.5):</p><ul><li><code>/tag @a[x=-1.5, y=0, z=-2, dx=2.5, dz=3.5] add warp</code></li></ul><div class="info custom-block"><p class="custom-block-title">NOTE:</p><p>The target will still be selected even if their hitbox is only partially contained within the volume.</p><p><img src="`+i+'" alt=""></p><p>In this visual representation, we can see that the horse with a larger hitbox is selected, while the player with a smaller hitbox is not selected, despite standing at the same point.</p></div><p>Considering the above note, if we want to detect players exactly at a certain Y level (e.g., Y=10) and not partially, we can use a command like this:</p><ul><li><code>/execute as @a at @s if entity @s[y=10, r=1] unless entity @s[y=9, r=1] run say found player</code></li></ul><h3 id="scores" tabindex="-1">Scores <a class="header-anchor" href="#scores" aria-label="Permalink to &quot;Scores&quot;">​</a></h3><p>Limits the selection of targets by their score value. This argument is represented as an object, with key-value pairs for a scoreboard objective and a value. The value can represent a range of numbers, using the range syntax. The value of a score can be negated to test if the entity does not have a score value within that range.</p><ul><li><code>scores={&lt;objective&gt;=&lt;value&gt;}</code>—Selects entities whose score under the given objective matches the given value.</li></ul><p>The range syntax works as follows:</p><ul><li><code>N..</code> is any number greater than or equal to N.</li><li><code>..N</code> is any number less than or equal to N.</li><li><code>N..M</code> is any number between N and M, inclusive.</li></ul><p><strong>Examples:</strong></p><p>Set the &quot;points&quot; score for all players with a &quot;points&quot; score of ten to 0:</p><ul><li><code>/scoreboard players set @p[scores={points=10}] points 0</code></li></ul><p>Add the &quot;start&quot; tag to armor stands with both a &quot;started&quot; score of one, and a &quot;timer&quot; score of 20 or less:</p><ul><li><code>/tag @e[type=armor_stand, scores={started=1, timer=..20}] add start</code></li></ul><h3 id="name" tabindex="-1">Name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;Name&quot;">​</a></h3><p>Limits the selection of targets by name. Negating the argument selects entities whose name does not match.</p><ul><li><code>name=&lt;name&gt;</code>—Include only entities with the given name.</li><li><code>name=!&lt;name&gt;</code>—Exclude any entities with the given name.</li></ul><p><strong>Examples:</strong></p><p>List all zombies named Shadow:</p><ul><li><code>/say @e[type=zombie, name=&quot;Shadow&quot;]</code></li></ul><p>Give one level to players both not named Steve and not named Alex:</p><ul><li><code>/xp 1L @a[name=!Steve, name=!&quot;Alex&quot;]</code></li></ul><h3 id="tag" tabindex="-1">Tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;Tag&quot;">​</a></h3><p>Limits the selection of targets by their tags. This argument can be repeated to test for multiple tags, and all filters must pass for an entity to be selected. Negating this argument selects entities without that tag.</p><ul><li><code>tag=&lt;tag&gt;</code>—Include only entities with the given tag.</li><li><code>tag=!&lt;tag&gt;</code>—Exclude any entities with the given tag.</li></ul><p><strong>Examples:</strong></p><p>Kill all mobs with the tag &quot;marked&quot;, and without the tag &quot;exempt&quot;:</p><ul><li><code>/kill @e[tag=marked, tag=!exempt]</code></li></ul><h3 id="family" tabindex="-1">Family <a class="header-anchor" href="#family" aria-label="Permalink to &quot;Family&quot;">​</a></h3><p>Limits the selection of targets by type family. This argument can be repeated to test for multiple families, and all filters must pass for an entity to be selected. Negating this argument selects entities whose type family does not match.</p><ul><li><code>family=&lt;family&gt;</code>—Include only entities with the given type family.</li><li><code>family=!&lt;family&gt;</code>—Exclude any entities with the given type family.</li></ul><p><strong>Examples:</strong></p><p>Affect all entities in the &quot;monster&quot; family with Regeneration:</p><ul><li><code>/effect @e[family=monster] regeneration</code></li></ul><h3 id="rotation" tabindex="-1">Rotation <a class="header-anchor" href="#rotation" aria-label="Permalink to &quot;Rotation&quot;">​</a></h3><p>Limits the selection of targets by their rotation. There are two types of rotation: x-rotation, which is vertical rotation around the x-axis; and y-rotation, which is horizontal rotation around the y-axis. X-rotation ranges between -90 and 90 (180° total), going from looking up to down; and y-rotation ranges between -180 and 180 (360° total), starting and ending at North, wrapping around clockwise.</p><ul><li><code>rxm=&lt;value&gt;</code> and <code>rx=&lt;value&gt;</code>—Selects entities whose x-rotation is between the minimum and maximum values, inclusive and respectively.</li><li><code>rym=&lt;value&gt;</code> and <code>ry=&lt;value&gt;</code>—Selects entities whose y-rotation is between the minimum and maximum values, inclusive and respectively.</li></ul><p><em>x-rotation diagram shared by @SpacebarNinja:</em></p><img src="'+l+'" width="400"><p><em>y-rotation diagram shared by @SpacebarNinja:</em></p><img src="'+s+'" width="400"><p><strong>Examples:</strong></p><p>Affect all players looking at or above the horizon with Blindness for one second:</p><ul><li><code>/effect @a[rx=0] blindness 1</code> (0 or less)</li></ul><p>Damage all players facing generally south:</p><ul><li><code>/damage @a[rym=-45, ry=45] 1</code></li></ul><p><strong>All Facing Directions:</strong></p><table tabindex="0"><thead><tr><th>Facing Direction</th><th>Range (<code>ry</code>, <code>rym</code>)</th></tr></thead><tbody><tr><td>North</td><td><code>[ry=-135, rym=135]</code></td></tr><tr><td>South</td><td><code>[ry=45, rym=-45]</code></td></tr><tr><td>East</td><td><code>[ry=-45, rym=-135]</code></td></tr><tr><td>West</td><td><code>[ry=135, rym=45]</code></td></tr><tr><td>North West</td><td><code>[ry=180, rym=90]</code></td></tr><tr><td>North East</td><td><code>[ry=-90, rym=-180]</code></td></tr><tr><td>South West</td><td><code>[ry=90, rym=0]</code></td></tr><tr><td>South East</td><td><code>[ry=0, rym=-90]</code></td></tr></tbody></table><h3 id="level" tabindex="-1">Level <a class="header-anchor" href="#level" aria-label="Permalink to &quot;Level&quot;">​</a></h3><p>Limits the selection of targets by experience levels. Only players can have EXP, so this filters out non-player targets.</p><ul><li><code>lm=&lt;amount&gt;</code> and <code>l=&lt;amount&gt;</code>—Selects players whose EXP levels are between the minimum and maximum values specified, inclusive and respectively.</li></ul><p><strong>Examples:</strong></p><p>Give all players who have nine or less levels a gold ingot:</p><ul><li><code>/give @a[lm=9] iron_ingot</code></li></ul><p>Give all players who have ten or more levels a gold ingot:</p><ul><li><code>/give @a[l=10] gold_ingot</code></li></ul><p>Give all players who have between ten and twenty levels a diamond:</p><ul><li><code>/give @a[lm=10, l=20] diamond</code></li></ul><h3 id="game-mode" tabindex="-1">Game Mode <a class="header-anchor" href="#game-mode" aria-label="Permalink to &quot;Game Mode&quot;">​</a></h3><p>Limits the selection of targets by game mode. Only players can use game mode, so this filters out non-player targets. Negating the argument selects targets whose game mode does not match.</p><ul><li><code>m=&lt;gamemode&gt;</code>—Selects players by their game mode.</li></ul><p><strong>All Game Mode Values:</strong></p><table tabindex="0"><thead><tr><th>Game Mode</th><th>Values</th></tr></thead><tbody><tr><td>Survival</td><td><code>0</code>, <code>s</code>, <code>survival</code></td></tr><tr><td>Creative</td><td><code>1</code>, <code>c</code>, <code>creative</code></td></tr><tr><td>Adventure</td><td><code>2</code>, <code>a</code>, <code>adventure</code></td></tr><tr><td>Spectator</td><td><code>spectator</code></td></tr><tr><td>Default</td><td><code>d</code>, <code>default</code></td></tr></tbody></table><p><strong>Examples:</strong></p><p>List all players in Creative mode:</p><ul><li><code>/say @a[m=creative]</code></li></ul><p>Set the game mode to Creative mode for players both not in Survival mode, and not in Adventure mode:</p><ul><li><code>/gamemode creative @a[m=!survival, m=!adventure]</code></li></ul><h3 id="items" tabindex="-1">Items <a class="header-anchor" href="#items" aria-label="Permalink to &quot;Items&quot;">​</a></h3><p>Limits the selection of targets by what items they have in their inventory. This argument is represented as an object, or an array of objects, with up to one each of the following parameters:</p><ul><li><code>item=&lt;string&gt;</code>—The identifier of the item to test for, and the only required argument. This can accept custom identifiers too.</li><li><code>quantity=&lt;int&gt;</code>—The amount of the item to test for. Accepts a <a href="/8Crafter-Wiki/commands/selectors.html#scores">range</a> for a value. This argument can also be negated.</li><li><code>data=&lt;int&gt;</code>—The data value of the item to test for. Defaults to -1. <strong>Currently not functional:</strong> <a href="https://bugs.mojang.com/browse/MCPE-151920" target="_blank" rel="noreferrer">MCPE-151920</a></li><li><code>location=&lt;string&gt;</code>—The slot the item should be located in. Accepts the same arguments as the slotType argument in the <code>/replaceitem</code> command.</li><li><code>slot=&lt;int&gt;</code>—The index of the slot used in the &quot;location&quot; argument, and can only be used with &quot;location&quot;. Accepts a range for a value. This argument can be negated.</li></ul><p><strong>Examples:</strong></p><p>Checks for players who have a netherite sword in their inventory:</p><ul><li><code>/testfor @a[hasitem={item=netherite_sword}]</code></li></ul><p>Clears 2 apples for players that have four or more apples:</p><ul><li><code>/clear @a[hasitem={item=apple,quantity=4..}] apple 2</code></li></ul><p>Checks for players who have two sticks and two diamonds:</p><ul><li><code>/testfor @a[hasitem=[{item=diamond,quantity=2},{item=stick,quantity=2}]]</code></li></ul><p>Checks for players who doesn&#39;t have a stick:</p><ul><li><code>/testfor @a[hasitem=[{item=stick,quantity=0}]</code></li></ul>',129),d=[r];function c(h,u,m,p,g,y){return a(),t("div",null,d)}const v=e(n,[["render",c]]);export{f as __pageData,v as default};
