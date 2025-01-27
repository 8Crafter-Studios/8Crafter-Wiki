import{_ as a,k as s,a6 as n,j as i}from"./chunks/framework.Bul4SA1j.js";const u=JSON.parse('{"title":"v1.28.4","description":"The changelog for v1.28.4.","frontmatter":{"title":"v1.28.4","page_title":"v1.28.4 Changelog","description":"The changelog for v1.28.4."},"headers":[{"level":2,"title":"Critical Bug Fixes","slug":"critical-bug-fixes","link":"#critical-bug-fixes","children":[{"level":3,"title":"Player Data Auto Save System","slug":"player-data-auto-save-system","link":"#player-data-auto-save-system","children":[]}]},{"level":2,"title":"Additions","slug":"additions","link":"#additions","children":[{"level":3,"title":"Technical","slug":"technical","link":"#technical","children":[]}]},{"level":2,"title":"Changes","slug":"changes","link":"#changes","children":[{"level":3,"title":"Ultra Security Mode","slug":"ultra-security-mode","link":"#ultra-security-mode","children":[]},{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]},{"level":3,"title":"UIs","slug":"uis","link":"#uis","children":[]}]},{"level":2,"title":"Fixes","slug":"fixes","link":"#fixes","children":[{"level":3,"title":"UIs","slug":"uis-1","link":"#uis-1","children":[]},{"level":3,"title":"Commands","slug":"commands-1","link":"#commands-1","children":[]}]}],"relativePath":"changelogs/v1.28.4.md","filePath":"changelogs/v1.28.4.md"}'),r={name:"changelogs/v1.28.4.md"};function t(l,e,o,p,c,d){return i(),s("div",null,e[0]||(e[0]=[n('<h2 id="critical-bug-fixes" tabindex="-1">Critical Bug Fixes <a class="header-anchor" href="#critical-bug-fixes" aria-label="Permalink to &quot;Critical Bug Fixes&quot;">​</a></h2><h3 id="player-data-auto-save-system" tabindex="-1">Player Data Auto Save System <a class="header-anchor" href="#player-data-auto-save-system" aria-label="Permalink to &quot;Player Data Auto Save System&quot;">​</a></h3><ul><li>Fixed a bug where the player data auto save system would stop and give a stack overflow error after a period of time.</li></ul><h2 id="additions" tabindex="-1">Additions <a class="header-anchor" href="#additions" aria-label="Permalink to &quot;Additions&quot;">​</a></h2><h3 id="technical" tabindex="-1">Technical <a class="header-anchor" href="#technical" aria-label="Permalink to &quot;Technical&quot;">​</a></h3><ul><li>Added <code class="shiki"><span>var errorLog: {playerDataAutoSave: {time: number, error: Error}[] ; [logCategory: string]: {time: number, error: Error}[];};</span></code> to <code class="shiki"><span>globalThis</span></code>.</li><li>Added the following methods to the <code class="shiki"><span>Entity</span></code> class prototype: - ```ts /**</li></ul><ul><li>Retrieves a concatenated string from an entity&#39;s dynamic properties.</li><li></li><li>@param {string} propertyName - The base name of the dynamic property to retrieve.</li><li>@param {string} zeroLengthPlaceholder - A placeholder string to return if the dynamic property length is zero. Defaults to an empty string.</li><li>@returns {string} The concatenated string from the entity&#39;s dynamic properties, or the zeroLengthPlaceholder if the length is zero.</li><li>@throws {TypeError} If the propertyName is not a string. */ getStringFromDynamicProperties(propertyName: string, zeroLengthPlaceholder?: string): string</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    - ```ts</span></span>\n<span class="line"><span>/**</span></span>\n<span class="line"><span> * Saves a string to an entity&#39;s dynamic properties, optionally clearing old properties first.</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * @param {string} string - The string to save to the entity&#39;s dynamic properties.</span></span>\n<span class="line"><span> * @param {string} propertyName - The base name of the dynamic property where the string will be saved.</span></span>\n<span class="line"><span> * @param {boolean} clearOldProperties - Whether to clear old properties before saving the new string. Defaults to `true`.</span></span>\n<span class="line"><span> * @param {number | bigint} chunkSize - The size of each chunk of the string to save. Defaults to `32760`.</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * @throws {TypeError} If `propertyName` is not a string.</span></span>\n<span class="line"><span> * @throws {TypeError} If `clearOldProperties` is not a boolean.</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span>saveStringToDynamicProperties(string: string, propertyName: string, clearOldProperties?: boolean, chunkSize?: number | bigint): void</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>Added the following methods to the <code class="shiki"><span>World</span></code> class prototype: - ```ts /**</li></ul><ul><li>Retrieves a concatenated string from dynamic properties based on the provided property name.</li><li></li><li>@param {string} propertyName - The base name of the dynamic property to retrieve the string from.</li><li>@param {string} zeroLengthPlaceholder - A placeholder string to return if the length of the dynamic property is zero. Defaults to an empty string.</li><li>@returns {string} The concatenated string from the dynamic properties, or the zeroLengthPlaceholder if the length is zero.</li><li>@throws {TypeError} If the provided propertyName is not a string. */ getStringFromDynamicProperties(propertyName: string, zeroLengthPlaceholder?: string): string;</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    - ```ts</span></span>\n<span class="line"><span>/**</span></span>\n<span class="line"><span> * Saves a string to dynamic properties, optionally clearing old properties first and splitting the string into chunks.</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * @param {string} string - The string to save to dynamic properties.</span></span>\n<span class="line"><span> * @param {string} propertyName - The name of the property to save the string under.</span></span>\n<span class="line"><span> * @param {boolean} clearOldProperties - Whether to clear old properties before saving the new string. Defaults to true.</span></span>\n<span class="line"><span> * @param {number | bigint} chunkSize - The size of each chunk to split the string into. Defaults to 32760.</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * @throws {TypeError} If `propertyName` is not a string.</span></span>\n<span class="line"><span> * @throws {TypeError} If `clearOldProperties` is not a boolean.</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span>saveStringToDynamicProperties(string: string, propertyName: string, clearOldProperties?: boolean, chunkSize?: number | bigint): void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="changes" tabindex="-1">Changes <a class="header-anchor" href="#changes" aria-label="Permalink to &quot;Changes&quot;">​</a></h2><h3 id="ultra-security-mode" tabindex="-1">Ultra Security Mode <a class="header-anchor" href="#ultra-security-mode" aria-label="Permalink to &quot;Ultra Security Mode&quot;">​</a></h3><ul><li>Reworked the permissions system.</li></ul><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h3><ul><li>Slightly sped up the <code class="shiki"><span>\\snapshot rollback</span></code> subcommand when the world has a large amount of structures saved.</li></ul><h3 id="uis" tabindex="-1">UIs <a class="header-anchor" href="#uis" aria-label="Permalink to &quot;UIs&quot;">​</a></h3><ul><li>Updated the Security Settings menu.</li></ul><h2 id="fixes" tabindex="-1">Fixes <a class="header-anchor" href="#fixes" aria-label="Permalink to &quot;Fixes&quot;">​</a></h2><h3 id="uis-1" tabindex="-1">UIs <a class="header-anchor" href="#uis-1" aria-label="Permalink to &quot;UIs&quot;">​</a></h3><ul><li>Fixed a bug where when viewing raw player data in the manage players menu, you wouldn&#39;t be able to see the <code class="shiki"><span>inputInfo</span></code> property.</li></ul><h3 id="commands-1" tabindex="-1">Commands <a class="header-anchor" href="#commands-1" aria-label="Permalink to &quot;Commands&quot;">​</a></h3><ul><li>Fixed the <code class="shiki"><span>\\but</span></code> alias of the <code class="shiki"><span>\\butcher</span></code> command.</li><li>Fixed the <code class="shiki"><span>\\butdes</span></code> alias of the <code class="shiki"><span>\\butcherdespawn</span></code> command.</li><li>Fixed the \\ec alias of the \\enderchest command.</li></ul>',23)]))}const m=a(r,[["render",t]]);export{u as __pageData,m as default};
