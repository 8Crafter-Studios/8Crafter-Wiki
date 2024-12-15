import{_ as o}from"./chunks/7.58FQPVLC.js";import{_ as t}from"./chunks/5._6hWkrs4.js";import{_ as p,e as c,t as s,C as a,Q as e,D as l,d,E as i}from"./chunks/framework.CuLWBCQE.js";const m="/assets/images/commands/movement-detections/moving.gif",h="/assets/images/commands/commandBlockChain/10.png",g="/assets/images/commands/movement-detections/sleeping.jpg",u="/assets/images/commands/movement-detections/sneaking.png",k="/assets/images/commands/movement-detections/crawling.png",b="/assets/images/commands/movement-detections/issue2.png",y="/assets/images/commands/movement-detections/issue3.png",_="/assets/images/commands/commandBlockChain/9.png",j=JSON.parse(`{"title":"Movement Detections","description":"These command-techniques allow you to detect certain player/entity 'states' and subsequently execute your desired commands.","frontmatter":{"title":"Movement Detections","category":"Techniques","mention":["BedrockCommands","zheaEvyline"],"description":"These command-techniques allow you to detect certain player/entity 'states' and subsequently execute your desired commands."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"is_moving","slug":"is-moving","link":"#is-moving","children":[]},{"level":2,"title":"Differentiating Walking And Sprinting","slug":"differentiating-walking-and-sprinting","link":"#differentiating-walking-and-sprinting","children":[]},{"level":2,"title":"is_sleeping","slug":"is-sleeping","link":"#is-sleeping","children":[]},{"level":2,"title":"is_sneaking","slug":"is-sneaking","link":"#is-sneaking","children":[]},{"level":2,"title":"is_crawling","slug":"is-crawling","link":"#is-crawling","children":[]},{"level":2,"title":"Differentiating Crawling, Gliding And Swimming","slug":"differentiating-crawling-gliding-and-swimming","link":"#differentiating-crawling-gliding-and-swimming","children":[]},{"level":2,"title":"Folder Structure","slug":"folder-structure","link":"#folder-structure","children":[]}],"relativePath":"commands/movement-detections.md","filePath":"commands/movement-detections.md"}`),w={name:"commands/movement-detections.md"},f=e('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p><a href="https://minecraft.wiki/" target="_blank" rel="noreferrer">Image Credits: Unofficial Minecraft Wiki - </a><strong><a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" rel="noreferrer">CC BY-NC-SA 3.0</a></strong></p><p>These command-techniques allow you to detect certain player/entity &#39;states&#39; and subsequently execute your desired commands.</p><blockquote><p>Note: For a more performant and high-accuracy approach, it is advisable to use <a href="/animation-controllers/animation-controllers-intro.html">Animation Controllers</a></p></blockquote><h2 id="is-moving" tabindex="-1">is_moving <a class="header-anchor" href="#is-moving" aria-label="Permalink to &quot;is_moving&quot;">​</a></h2><p>This technique allows you to detect when your target is/isn&#39;t moving, accounting for even subtle movements.</p><p><img src="'+m+'" alt=""></p><div class="warning custom-block"><p class="custom-block-title">Known Issues:</p><ol><li>Does not account for movement while the spyglass is zoomed in or when Slowness Level 6 or higher is in effect.</li><li>Jumping causes the detection to trigger twice.</li></ol></div><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_moving</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_moving dummy</code></li></ul></li></ul>',11),v=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Movement Detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as not moving</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s positioned ~~10000~ if entity @e [type=leash_knot, r=0.1252] run scoreboard players set @s is_moving 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as moving</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s positioned ~~10000~ unless entity @e [type=leash_knot, r=0.1252] run scoreboard players add @s is_moving 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Update Point</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Delete previous point</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e [type=leash_knot] at @s unless entity @s [y=-80, dy=9974] run kill @s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark current point</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute at @a positioned ~~10000~ run summon leash_knot ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_moving=0}] run say I&#39;m not moving</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_moving=1}] run say I started moving</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_moving=1..}] run say I&#39;m still moving</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img src="`+o+'" alt="commandBlockChain7"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_moving=0</code></strong> target is <em>not</em> moving.</li><li><strong><code>is_moving=1</code></strong> target started moving. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_moving=1..</code></strong> target is still moving. (used for repeating actions)</li></ul><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If there is a Leash Knot above them, it means they have not moved from their &quot;point&quot; from the previous game-tick. Marking them as <em>not</em> moving (0) <ul><li>Leash Knot is a Vanilla entity with anti-gravity behaviour which serves as a static entity for this system.</li></ul></li><li><strong>Command 2:</strong> If there <em>isn&#39;t</em> a Leash Knot above them, it means they have displaced from their &quot;point&quot; from the previous game-tick. Marking them as <em>moving</em> (1) by adding a score. <ul><li>The score will keep incrementing if they keep moving without pause. Allowing us to use single-execution commands each time they start moving.</li></ul></li><li><strong>Command 3:</strong> We need to delete all previous &quot;points&quot; (kill old Leash Knots) to minimise entity lag. We will also avoid affecting any Leash Knots below the ~10000 height not involved in this system. <ul><li>we are using the volume filter instead of a simple name filter to do that, because Leash Knots cannot be named.</li></ul></li><li><strong>Command 4:</strong> We will summon a new Leash Knot ~10000 blocks above the player to mark the point they are currently at, which we will test-for in command 1 &amp; 2, in the next game tick. (when this command block chain loops/repeats)</li><li><strong>Command 5, 6, 7:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="differentiating-walking-and-sprinting" tabindex="-1">Differentiating Walking And Sprinting <a class="header-anchor" href="#differentiating-walking-and-sprinting" aria-label="Permalink to &quot;Differentiating Walking And Sprinting&quot;">​</a></h2><p>If you desperately need to detect walking and sprinting separately <strong>solely using commands</strong>, you may use this technique below.</p><div class="warning custom-block"><p class="custom-block-title">Known Issue:</p><p>Walk/Sprint Detection may not work as intended with effects &amp; enchantments.</p></div>',10),C=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Movement Detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as not moving</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s positioned ~~10000~ if entity @e [type=leash_knot, r=0.1252] run scoreboard players set @s is_moving 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as moving</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s positioned ~~10000~ unless entity @e [type=leash_knot, r=0.1252] run scoreboard players add @s is_moving 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Walk Detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as not walking</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players set @a is_walking 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as walking</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s positioned ~~10000~ if entity @e [type=leash_knot, rm=0.21585, r=0.2805] run scoreboard players set @s is_walking 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Sprint Detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as not sprinting</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players set @a is_sprinting 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as sprinting</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s positioned ~~10000~ if entity @e [type=leash_knot, rm=0.2806, r=0.9] run scoreboard players set @s is_sprinting 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Update Point</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Delete previous point</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e [type=leash_knot] at @s unless entity @s [y=-80, dy=9974] run kill @s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark current point</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute at @a positioned ~~10000~ run summon leash_knot ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_walking=0}] run say I&#39;m not walking</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_walking=1}] run say I&#39;m walking</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><img src="`+h+'" alt="commandBlockChain10"></p><p>All the commands function the same way as explained previously. The only difference being the values used in the distance arguments <code>r</code> &amp; <code>rm</code> for the walk/sprint detection commands.</p><p>Calculation for the values are given below:</p><table tabindex="0"><thead><tr><th style="text-align:center;">Movement Type</th><th style="text-align:center;">Average Speed in m/s<br>(blocks per second)</th><th style="text-align:center;">Average Speed<br>(blocks per game tick)</th></tr></thead><tbody><tr><td style="text-align:center;">Walking</td><td style="text-align:center;">4.317 m/s</td><td style="text-align:center;">4.317 / 20 = 0.21585</td></tr><tr><td style="text-align:center;">Sprinting</td><td style="text-align:center;">5.612 m/s</td><td style="text-align:center;">5.612 / 20 = 0.28060</td></tr><tr><td style="text-align:center;">Sprint-Jumping</td><td style="text-align:center;">7.127 m/s</td><td style="text-align:center;">7.127 / 20 = 0.35635</td></tr></tbody></table><blockquote><p>Note: We will not be able to properly use single-execution commands from the walk/sprint detection due to their varying speed. Hence, the commands for the two will be a bit simpler. Also note that jumping while walking has a speed that fluctuates between that of walk and sprint.</p></blockquote><ul><li><strong>Walk Detection Commands:</strong><ol><li>The player is marked as <em>not</em> walking (0) by default.</li><li>The player is marked as walking (1) if their displacement is between <code>0.21585</code> and <code>0.2805</code> blocks. <ul><li><code>0.2805</code> is just below sprinting speed.</li></ul></li></ol></li><li><strong>Sprint Detection Commands:</strong><ol><li>The player is marked as <em>not</em> sprinting (0) by default.</li><li>The player is marked as sprinting (1) if their displacement is between <code>0.2806</code> and <code>0.9</code> blocks. <ul><li>Change the value from <code>0.9</code> to <code>0.35635</code> if you wish to separate sprint-jumping from sprinting despite its fluctuating speed.</li></ul></li></ol></li></ul><h2 id="is-sleeping" tabindex="-1">is_sleeping <a class="header-anchor" href="#is-sleeping" aria-label="Permalink to &quot;is_sleeping&quot;">​</a></h2><p>This technique allows you to detect when the player is/isn&#39;t sleeping.</p><p><img src="'+g+'" alt=""></p><p>Note: When sleeping, the player&#39;s hitbox is reduced to 0.2 blocks.</p><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_sleeping</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_sleeping dummy</code></li></ul></li></ul>',13),F=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Sleep Detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as not sleeping</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s if entity @s [y=~0.3, dy=0] scoreboard players set @s is_sleeping 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as sleeping</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s unless entity @s [y=~0.3, dy=0] run scoreboard players add @s is_sleeping 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_sleeping=0}] run say I&#39;m not sleeping</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_sleeping=1}] run say I started sleeping</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_sleeping=1..}] run say I&#39;m still sleeping</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+t+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_sleeping=0</code></strong> player is <em>not</em> sleeping.</li><li><strong><code>is_sleeping=1</code></strong> player started sleeping. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_sleeping=1..</code></strong> player is still sleeping. (used for repeating actions)</li></ul><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.2 blocks, we mark them as <em>not</em> sleeping (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.2 blocks, we mark them as sleeping (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop sleeping. Allowing us to use single-execution commands each time they start sleeping.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="is-sneaking" tabindex="-1">is_sneaking <a class="header-anchor" href="#is-sneaking" aria-label="Permalink to &quot;is_sneaking&quot;">​</a></h2><p>This technique allows you to detect when the player is/isn&#39;t sneaking.</p><p><img src="'+u+'" alt=""></p><p>Thanks to the introduction of Short Sneaking parity in 1.20.10 which reduces the player hitbox to 1.5 blocks when sneaking, making a proper sneak-detection using just commands is now possible which previously required add-on assistance.</p><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_sneaking</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_sneaking dummy</code></li></ul></li></ul>',13),A=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Sneak Detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as not sneaking</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s if entity @s [y=~1.5, dy=0] run scoreboard players set @s is_sneaking 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as sneaking</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s unless entity @s [y=~1.5, dy=0] if entity @s [y=~0.7, dy=0] run scoreboard players add @s is_sneaking 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_sneaking=0}] run say I&#39;m not sneaking</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_sneaking=1}] run say I started sneaking</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_sneaking=1..}] run say I&#39;m still sneaking</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+t+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_sneaking=0</code></strong> player is <em>not</em> sneaking.</li><li><strong><code>is_sneaking=1</code></strong> player started sneaking. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_sneaking=1..</code></strong> player is still sneaking. (used for repeating actions)</li></ul><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 1.4 blocks, we mark them as <em>not</em> sneaking (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 1.4 blocks, we mark them as sneaking (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop sneaking. Allowing us to use single-execution commands each time they start sneaking.</li><li>To prevent false-triggers when sleeping or crawling, we will also require their hitbox to be higher than 0.6 blocks.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="is-crawling" tabindex="-1">is_crawling <a class="header-anchor" href="#is-crawling" aria-label="Permalink to &quot;is_crawling&quot;">​</a></h2><p>This technique allows you to detect when the player is/isn&#39;t crawling.</p><p><img src="'+k+'" alt=""></p><p>Note: When crawling, the player&#39;s hitbox is reduced to 0.6 blocks.</p><div class="warning custom-block"><p class="custom-block-title">Known Issue:</p><p>Swimming in water or gliding with Elytra will be detected as crawling.</p></div><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_crawling</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_crawling dummy</code></li></ul></li></ul>',14),x=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Crawl Detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as not crawling</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_crawling 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Mark as crawling</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s unless entity @s [y=~0.7, dy=0] if entity @s [y=~0.3, dy=0] run scoreboard players add @s is_crawling 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_crawling=0}] run say I&#39;m not crawling</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_crawling=1}] run say I started crawling</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_sneaking=1..}] run say I&#39;m still crawling</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+t+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_crawling=0</code></strong> player is <em>not</em> crawling.</li><li><strong><code>is_crawling=1</code></strong> player started crawling. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_crawling=1..</code></strong> player is still crawling. (used for repeating actions)</li></ul><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.6 blocks, we mark them as <em>not</em> crawling (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, we mark them as crawling (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop crawling. Allowing us to use single-execution commands each time they start crawling.</li><li>To prevent false-triggers when sleeping, we will require their hitbox to be higher than 0.2 blocks.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="differentiating-crawling-gliding-and-swimming" tabindex="-1">Differentiating Crawling, Gliding And Swimming <a class="header-anchor" href="#differentiating-crawling-gliding-and-swimming" aria-label="Permalink to &quot;Differentiating Crawling, Gliding And Swimming&quot;">​</a></h2><p>If you desperately need to detect all three states separately <strong>solely using commands</strong>, you may use this technique below.</p><div class="warning custom-block"><p class="custom-block-title">Known Issues:</p><ol><li>Gliding while touching the ground/ceiling or crashing straight into a wall will be detected as crawling.</li><li>Crawling from absolute corner of a block while wearing an Elytra, with no adjacent blocks above or below, will be detected as gliding. <ul><li><img src="'+b+'" alt="issue2"></li></ul></li><li>Swimming in a waterlogged block under another waterlogged block will be detected as crawling. <ul><li><img src="'+y+'" alt="issue3"></li></ul></li></ol></div>',10),D=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Set Player States</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Not gliding</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_gliding 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Not crawling</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_crawling 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Not swimming</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_swimming 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Detect Player States</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Gliding</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [hasitem={item=elytra,location=slot.armor.chest}] at @s unless entity @s [y=~0.7, dy=0] if entity @s [y=~0.3, dy=0] if block ~~1.01~ air if block ~~-0.01~ air rotated ~ 0 if block ^^1.01^-1 air if block ^^-0.01^-1 air if block ^^1.01^1 air if block ^^-0.01^1 air run scoreboard players add @s is_gliding 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Crawling</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_gliding=0}] at @s unless entity @s [y=~0.7, dy=0] if entity @s [y=~0.3, dy=0] unless block ~~~ water unless block ~~1.01~ water run scoreboard players add @s is_crawling 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Swimming</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_gliding=0,is_crawling=0}] at @s unless entity @s [y=~0.7, dy=0] if entity @s [y=~0.3, dy=0] run scoreboard players add @s is_swimming 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your Commands Here (Examples)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_swimming=0}] run say I&#39;m not swimming</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_crawling=1}] run say I started crawling</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a [scores={is_gliding=1..}] run say I&#39;m still gliding</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img src="`+_+'" alt="commandBlockChain9"></p><p><strong>Purpose of Each Command:</strong></p><ul><li><strong>Command 1, 2, 3:</strong> If the player&#39;s hitbox is higher than 0.6 blocks, we mark them as <em>not</em> gliding/crawling/swimming (0)</li><li><strong>Command 4:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, has equiped an elytra, and has no blocks above/below their head/chest/feet, we mark them as gliding (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop gliding. Allowing us to use single-execution commands each time they start gliding. We will employ the same for crawling/gliding.</li><li>To prevent false-triggers when sleeping, we will also require their hitbox to be higher than 0.2 blocks. We will employ the same for crawling/gliding.</li></ul></li><li><strong>Command 5:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, is not gliding, and has no water above/below them, we mark them as crawling (1) by adding a score.</li><li><strong>Command 6:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, is not gliding or crawling, we mark them as swimming (1) by adding a score.</li><li><strong>Command 7, 8, 9:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h2><p>If you are working with functions, your folder structure may look something like this:</p>',6);function T(B,E,I,S,q,P){const n=l("CodeHeader"),r=l("FolderView");return d(),c("div",null,[f,s(n,null,{default:a(()=>[i("BP/functions/states/player/is_moving.mcfunction")]),_:1}),v,s(n,null,{default:a(()=>[i("BP/functions/states/player/is_moving.mcfunction")]),_:1}),C,s(n,null,{default:a(()=>[i("BP/functions/states/player/is_sleeping.mcfunction")]),_:1}),F,s(n,null,{default:a(()=>[i("BP/functions/states/player/is_sneaking.mcfunction")]),_:1}),A,s(n,null,{default:a(()=>[i("BP/functions/states/player/is_crawling.mcfunction")]),_:1}),x,s(n,null,{default:a(()=>[i("BP/functions/states/player/is_crawling.mcfunction")]),_:1}),D,s(r,{paths:["BP","BP/functions","BP/manifest.json","BP/pack_icon.png","BP/functions/states","BP/functions/states/player","BP/functions/states/player/is_moving.mcfunction","BP/functions/states/player/is_sleeping.mcfunction","BP/functions/states/player/is_crawling.mcfunction","BP/functions/tick.json"]})])}const W=p(w,[["render",T]]);export{j as __pageData,W as default};
