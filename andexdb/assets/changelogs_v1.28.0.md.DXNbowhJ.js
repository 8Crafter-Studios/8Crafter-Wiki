import{_ as i,k as a,a6 as n,j as e}from"./chunks/framework.Bul4SA1j.js";const c=JSON.parse('{"title":"v1.28.0","description":"The changelog for v1.28.0.","frontmatter":{"title":"v1.28.0","page_title":"v1.28.0 Changelog","description":"The changelog for v1.28.0."},"headers":[{"level":2,"title":"Critical Bug Fixes","slug":"critical-bug-fixes","link":"#critical-bug-fixes","children":[]},{"level":2,"title":"Additions","slug":"additions","link":"#additions","children":[{"level":3,"title":"Security","slug":"security","link":"#security","children":[]},{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]},{"level":3,"title":"UIs","slug":"uis","link":"#uis","children":[]},{"level":3,"title":"Technical","slug":"technical","link":"#technical","children":[]}]},{"level":2,"title":"Changes","slug":"changes","link":"#changes","children":[{"level":3,"title":"Player Data Save System","slug":"player-data-save-system","link":"#player-data-save-system","children":[]},{"level":3,"title":"UIs","slug":"uis-1","link":"#uis-1","children":[]},{"level":3,"title":"Technical","slug":"technical-1","link":"#technical-1","children":[{"level":4,"title":"Classes","slug":"classes","link":"#classes","children":[]},{"level":4,"title":"Other","slug":"other","link":"#other","children":[]}]}]},{"level":2,"title":"Fixes","slug":"fixes","link":"#fixes","children":[{"level":3,"title":"Items","slug":"items","link":"#items","children":[]},{"level":3,"title":"UIs","slug":"uis-2","link":"#uis-2","children":[]},{"level":3,"title":"Ban System","slug":"ban-system","link":"#ban-system","children":[]},{"level":3,"title":"Technical","slug":"technical-2","link":"#technical-2","children":[{"level":4,"title":"Classes","slug":"classes-1","link":"#classes-1","children":[]}]}]}],"relativePath":"changelogs/v1.28.0.md","filePath":"changelogs/v1.28.0.md"}'),l={name:"changelogs/v1.28.0.md"};function t(h,s,p,r,k,d){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="critical-bug-fixes" tabindex="-1">Critical Bug Fixes <a class="header-anchor" href="#critical-bug-fixes" aria-label="Permalink to &quot;Critical Bug Fixes&quot;">​</a></h2><ul><li>Fixed a bug where disabling the enable chat commands toggle would not disable chat commands (ANDEXDB-65).</li></ul><h2 id="additions" tabindex="-1">Additions <a class="header-anchor" href="#additions" aria-label="Permalink to &quot;Additions&quot;">​</a></h2><h3 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h3><ul><li>Added Ultra Security Mode, which makes the add-on a lot more locked down, in that players need to be given permissions by the owner to be able to use most of the features in the add-on. Instead of using tags for player permissions, instead the owner of the world/realm/server need to go into the Main Menu and go into the manage players menu, then find the player, click manage permissions, and give them the desired permissions. ONLY the owner can do this. To configure the owner, you just go to <a href="https://www.8crafter.com/andexdb-security-configurator-generator" target="_blank" rel="noreferrer">https://www.8crafter.com/andexdb-security-configurator-generator</a> and enter your username and click generate, it will generate a separate behavior pack that you add to your world/realm/server in addition to this add-on, that pack will hardcode who the owner is. To enable ultra security mode the owner has to go to Main Menu &gt; Security &gt; Settings &gt; Security Mode and then click on the button that says, &quot;Ultra Security Mode&quot;. NOTE: This is ONLY recommended for realms and servers, if you are on a private world with friends that you trust then this is not needed, this is only for realms and server where you have admins that you don&#39;t trust enough that they won&#39;t give random people the tags that would normally allow them to have the permissions. This basically eliminates the risk of admins giving random people permissions. However, if you do have a specific admin that you still want to be able to give other players permissions, then just give them the <code class="shiki"><span>andexdb.fullControl</span></code> permission, it will give them the ability to give players permissions, as well as use any other Ultra Security Mode features that would normally require the owner to use.</li></ul><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h3><ul><li>Added the <code class="shiki"><span>\\\\maze</span></code> command.</li><li>Added the <code class="shiki"><span>\\\\regenerateblocks</span></code> command.</li><li>Added the <code class="shiki"><span>\\\\savepos</span></code> command.</li><li>Added the <code class="shiki"><span>\\\\loadpos</span></code> command.</li><li>Added the <code class="shiki"><span>\\\\deletesavedpos</span></code> command.</li><li>Added the <code class="shiki"><span>\\remexpentity</span></code> command.</li></ul><h3 id="uis" tabindex="-1">UIs <a class="header-anchor" href="#uis" aria-label="Permalink to &quot;UIs&quot;">​</a></h3><p>Added the &quot;Security&quot; sub-menu to the Main Menu.</p><h3 id="technical" tabindex="-1">Technical <a class="header-anchor" href="#technical" aria-label="Permalink to &quot;Technical&quot;">​</a></h3><ul><li>Added some new functions to the <code class="shiki"><span>Array</span></code> prototype:</li></ul><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * Calls a defined async callback function on each element of an array, and returns an array that contains the awaited results.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> callbackfn</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> An async function that accepts up to three arguments. The map method calls and awaits the completion of the async callbackfn function one time for each element in the array.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> thisArg</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@async</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">mapAsync</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">U</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&gt;(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">callbackfn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">value</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">index</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">number</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">array</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[]) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> U</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">thisArg</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">any</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">): </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Awaited</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;">U</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&gt;[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">  * Awaits each element in the array.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@returns</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {Promise&lt;Awaited&lt;T&gt;[]&gt;}</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> The awaited array elements.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@async</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">awaitEach</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(): </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Awaited</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&gt;[]&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>Added the <code class="shiki"><span>world</span></code> and <code class="shiki"><span>system</span></code> classes from the <code class="shiki"><span>@minecraft/server</span></code> module to <code class="shiki"><span>globalThis</span></code>.</li><li>Added the following getter to <code class="shiki"><span>globalThis</span></code>:</li></ul><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * A class containing configuration detailing which functions, classes, and constants from the modules to import into their respective properties on the global modules object.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@see</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {https:</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">//github.com/link modules.main.moduleImportsConfig}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        static</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> get</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> moduleImportsConfig</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(): </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">typeof</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> import</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;init/classes/moduleImportsConfig&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">).</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">moduleImportsConfig</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>Added the <code class="shiki"><span>world</span></code> and <code class="shiki"><span>system</span></code> classes from the <code class="shiki"><span>@minecraft/server</span></code> module to <code class="shiki"><span>globalThis</span></code>.</li><li>Added <code class="shiki"><span>const optionalModuleObjectImportFilePaths</span></code>, <code class="shiki"><span>const moduleOptionalImportPathMap</span></code>, and <code class="shiki"><span>type optionalModuleObjectImportFilePathsImportMap</span></code> to directoryTree.</li><li><code class="shiki"><span>Player.prototype</span></code><ul><li>Added the following getters to the <code class="shiki"><span>Player</span></code> class prototype: <ul><li><code class="shiki"><span>get playerPermissions(): PlayerPermissions;</span></code></li><li><code class="shiki"><span>get worldEditSelection(): WorldEditSelection;</span></code></li></ul></li><li>Added <code class="shiki"><span>get ultraSecurityModeSecurityLevel(): &quot;owner&quot; | &quot;headAdmin&quot; | &quot;admin&quot; | &quot;moderator&quot; | &quot;WorldEdit&quot; | &quot;everyone&quot;</span></code> to the <code class="shiki"><span>modules.cmds.command</span></code> class.</li><li>Added <code class="shiki"><span>get playerPermissions(): PlayerPermissions;</span></code> to the <code class="shiki"><span>modules.cmds.executeCommandPlayerW</span></code> class.</li><li>Added <code class="shiki"><span>get worldEditSelection(): WorldEditSelection;</span></code> to the <code class="shiki"><span>modules.cmds.executeCommandPlayerW</span></code> class.</li><li>Added <code class="shiki"><span>get inputInfo(): InputInfo;</span></code> to the <code class="shiki"><span>modules.cmds.executeCommandPlayerW</span></code> class.</li><li>Added <code class="shiki"><span>lookAt(targetLocation: Vector3): void;</span></code> to the <code class="shiki"><span>modules.cmds.executeCommandPlayerW</span></code> class.</li></ul></li></ul><h2 id="changes" tabindex="-1">Changes <a class="header-anchor" href="#changes" aria-label="Permalink to &quot;Changes&quot;">​</a></h2><h3 id="player-data-save-system" tabindex="-1">Player Data Save System <a class="header-anchor" href="#player-data-save-system" aria-label="Permalink to &quot;Player Data Save System&quot;">​</a></h3><ul><li>Added the following new properties that are saved by the player data save system:</li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    inputPermissions</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: {</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">        /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">         * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@deprecated</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> Only exists in format versions below \`1.6.0\`.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">         * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@deprecated</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> Supercceeded by \`Camera\`.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">         */</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        cameraEnabled?</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">        /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">         * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@deprecated</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> Only exists in format versions below \`1.6.0\`.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">         * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@deprecated</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> Supercceeded by \`Movement\`.</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">         */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        movementEnabled</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        Camera</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        Movement</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        LateralMovement</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        Sneak</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        Jump</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        Mount</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        Dismount</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        MoveForward</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        MoveBackward</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        MoveLeft</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        MoveRight</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">boolean</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    };</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">    /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@since</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> format version 1.6.0</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@since</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> v1.28.0-preview.20+BUILD.1</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    inputInfo</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        lastInputModeUsed:</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> Player</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;inputInfo&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;lastInputModeUsed&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        touchOnlyAffectsHotbar</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Player</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;inputInfo&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;touchOnlyAffectsHotbar&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    };</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">    /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@since</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> format version 1.6.0</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@since</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> v1.28.0-preview.20+BUILD.1</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    playerPermissions</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">ReturnType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">PlayerPermissions</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;toJSON&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">    /**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@since</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> format version 1.6.0</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@since</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> v1.28.0-preview.20+BUILD.1</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">     */</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    onJoinActions</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">?: </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">SavedPlayerOnJoinActions</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="uis-1" tabindex="-1">UIs <a class="header-anchor" href="#uis-1" aria-label="Permalink to &quot;UIs&quot;">​</a></h3><ul><li>Started working on an edit module imports config menu, to allow for only importing specific modules or only specific functions and classes from those modules upon startup.</li></ul><h3 id="technical-1" tabindex="-1">Technical <a class="header-anchor" href="#technical-1" aria-label="Permalink to &quot;Technical&quot;">​</a></h3><h4 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h4><ul><li>The <code class="shiki"><span>command</span></code> and <code class="shiki"><span>commandSettings</span></code> classes now have a type parameter which specifies the command type: <code class="shiki"><span>&lt;T extends &quot;built-in&quot; | &quot;custom&quot; | &quot;unknown&quot; = &quot;unknown&quot;&gt;</span></code>.</li></ul><h4 id="other" tabindex="-1">Other <a class="header-anchor" href="#other" aria-label="Permalink to &quot;Other&quot;">​</a></h4><ul><li><code class="shiki"><span>globalThis</span></code><ul><li>Moved <code class="shiki"><span>function getPlayer(playerName: string): Player</span></code> from <code class="shiki"><span>modules.cmds</span></code> to <code class="shiki"><span>globalThis</span></code>.</li><li>Moved <code class="shiki"><span>function getPlayerById(playerId: string | number): Player</span></code> from <code class="shiki"><span>modules.cmds</span></code> to <code class="shiki"><span>globalThis</span></code>.</li></ul></li></ul><h2 id="fixes" tabindex="-1">Fixes <a class="header-anchor" href="#fixes" aria-label="Permalink to &quot;Fixes&quot;">​</a></h2><h3 id="items" tabindex="-1">Items <a class="header-anchor" href="#items" aria-label="Permalink to &quot;Items&quot;">​</a></h3><ul><li>Fixed a bug that has existed since the add-on was released where the Script Runner was not functional (ANDEXDB-66).</li><li>Fixed the interact button text for the Script Runner (<code class="shiki"><span>andexdb:script_runner</span></code>), old Main Menu item (<code class="shiki"><span>andexdb:selection_menu</span></code>), and Selection Tool (<code class="shiki"><span>andexdb:selection_tool</span></code>).</li></ul><h3 id="uis-2" tabindex="-1">UIs <a class="header-anchor" href="#uis-2" aria-label="Permalink to &quot;UIs&quot;">​</a></h3><ul><li>Fixed an issue where the command settings menu would give an error upon opening for custom command.</li></ul><h3 id="ban-system" tabindex="-1">Ban System <a class="header-anchor" href="#ban-system" aria-label="Permalink to &quot;Ban System&quot;">​</a></h3><ul><li>Fixed a bug that caused the name of the person who banned a player to not be displayed in the kick reason message.</li></ul><h3 id="technical-2" tabindex="-1">Technical <a class="header-anchor" href="#technical-2" aria-label="Permalink to &quot;Technical&quot;">​</a></h3><h4 id="classes-1" tabindex="-1">Classes <a class="header-anchor" href="#classes-1" aria-label="Permalink to &quot;Classes&quot;">​</a></h4><ul><li>Fixed a StackOverflow error with the setters for some of the properties in the <code class="shiki"><span>commandSettings</span></code> class.</li></ul>`,36)]))}const u=i(l,[["render",t]]);export{c as __pageData,u as default};
