import{_ as i,k as e,a6 as t,A as n,I as p,E as r,j as l,J as h}from"./chunks/framework.Bul4SA1j.js";const y=JSON.parse('{"title":"Parameters Basics","description":"The basics of the command parameters in this add-on.","frontmatter":{"title":"Parameters Basics","page_title":"Parameters Basics","description":"The basics of the command parameters in this add-on.","nav_order":2},"headers":[{"level":2,"title":"Parameter Categories:","slug":"parameter-categories","link":"#parameter-categories","children":[{"level":3,"title":"Optional Parameters:","slug":"optional-parameters","link":"#optional-parameters","children":[]},{"level":3,"title":"Required Parameters:","slug":"required-parameters","link":"#required-parameters","children":[]},{"level":3,"title":"Ignorable Parameters:","slug":"ignorable-parameters","link":"#ignorable-parameters","children":[]},{"level":3,"title":"Flags Parameters:","slug":"flags-parameters","link":"#flags-parameters","children":[]}]},{"level":2,"title":"Parameter Format:","slug":"parameter-format","link":"#parameter-format","children":[{"level":3,"title":"Parameter Restrictions:","slug":"parameter-restrictions","link":"#parameter-restrictions","children":[]}]},{"level":2,"title":"Next","slug":"next","link":"#next","children":[]}],"relativePath":"commands/commands-parameters-basics.md","filePath":"commands/commands-parameters-basics.md"}'),o={name:"commands/commands-parameters-basics.md"};function k(d,s,c,C,g,m){const a=r("Button");return l(),e("div",null,[s[1]||(s[1]=t('<p>Some examples of parameters in a command would be <code class="shiki"><span>[-tfsa]</span></code>, <code class="shiki"><span>&lt;player: target&gt;</span></code>, and <code class="shiki"><span>[name: string]</span></code> in the following command syntax:</p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#CE9178;--shiki-dark:#CE9178;"> [-tfsa]</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#D7BA7D;--shiki-dark:#D7BA7D;">[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]]</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;"> [</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">string</span><span style="--shiki-light:#D7BA7D;--shiki-dark:#D7BA7D;">[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]]</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">]</span></code></p><p>In the syntax of a command there are multiple ways a parameter can be written out:</p><h2 id="parameter-categories" tabindex="-1">Parameter Categories: <a class="header-anchor" href="#parameter-categories" aria-label="Permalink to &quot;Parameter Categories:&quot;">​</a></h2><h3 id="optional-parameters" tabindex="-1">Optional Parameters: <a class="header-anchor" href="#optional-parameters" aria-label="Permalink to &quot;Optional Parameters:&quot;">​</a></h3><p>Optional parameters are enclosed in square brackets like this: <code class="shiki"><span>[name: string]</span></code></p><p>Note: Parameters written as a dash followed by a string of characters enclosed in square brackets (ex. <code class="shiki"><span>[-tfsa]</span></code> or <code class="shiki"><span>[-z]</span></code>) is not considered an optional parameter, this is a <a href="#flags-parameters">flags parameter</a>.</p><p>optional parameters are optional, you can either include them or not include them, however if you do not include them then any parameters after them cannot be included either, so in the following command:</p><p><code class="shiki"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\examplecommand </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [name: string] [escapeCodesEnabled: boolean]</span></code></p><p>If you choose not to include the name parameter, then you cannot include the escapeCodesEnabled parameter either.</p><p>So this means that this command syntax is actually like three separate syntaxes, you can do any of the following:</p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">string</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">escapeCodesEnabled</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">boolean</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">string</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><h3 id="required-parameters" tabindex="-1">Required Parameters: <a class="header-anchor" href="#required-parameters" aria-label="Permalink to &quot;Required Parameters:&quot;">​</a></h3><p>Required parameters are enclosed in arrow brackets like this: <code class="shiki"><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><p>Required parameters are required, the parameter must be included.</p><h3 id="ignorable-parameters" tabindex="-1">Ignorable Parameters: <a class="header-anchor" href="#ignorable-parameters" aria-label="Permalink to &quot;Ignorable Parameters:&quot;">​</a></h3><p>Ignorable parameters are enclosed in curly brackets like this: <code class="shiki"><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">{</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">includeEntities</span><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">boolean</span><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">}</span></code></p><p>Ignorable parameters are optional, but unlike optional parameters, if you don&#39;t include them, you can still include the parameters after them, so in the following command:</p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;"> {</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">string</span><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">}</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;"> [</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">escapeCodesEnabled</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">boolean</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">]</span></code></p><p>Even if you choose not to include the name parameter, you can still include the escapeCodesEnabled parameter either.</p><p>So this means that this command syntax is actually like four separate syntaxes, you can do any of the following:</p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">string</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">escapeCodesEnabled</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">boolean</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">string</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">escapeCodesEnabled</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">boolean</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><p><code class="shiki"><span style="--shiki-light:#569CD6;--shiki-dark:#569CD6;">\\examplecommand</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;"> &lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></p><h3 id="flags-parameters" tabindex="-1">Flags Parameters: <a class="header-anchor" href="#flags-parameters" aria-label="Permalink to &quot;Flags Parameters:&quot;">​</a></h3><p>Flags parameters are written as a dash followed by a string of characters enclosed in square brackets like this: <code class="shiki"><span style="--shiki-light:#CE9178;--shiki-dark:#CE9178;">[-tfsa]</span></code></p><p>For a flags parameter, it has no specified parameter type. Instead, you just either put nothing and ignore the parameter, or you put a dash followed by the flags you want to enable, each flag is its own unique character, you can type these characters in any order, and you can include any combination of them that you like, however if you put a dash there then you must include at least one flag.</p><p>So, for the parameter <code class="shiki"><span style="--shiki-light:#CE9178;--shiki-dark:#CE9178;">[-tfsa]</span></code> you could do any of the following examples:</p><p>Nothing, <code class="shiki"><span>-t</span></code>, <code class="shiki"><span>-f</span></code>, <code class="shiki"><span>-s</span></code>, <code class="shiki"><span>-a</span></code>, <code class="shiki"><span>-tf</span></code>, <code class="shiki"><span>-ts</span></code>, <code class="shiki"><span>-ta</span></code>, <code class="shiki"><span>-ft</span></code>, <code class="shiki"><span>-fs</span></code>, <code class="shiki"><span>-fa</span></code>, <code class="shiki"><span>-at</span></code>, <code class="shiki"><span>-af</span></code>, <code class="shiki"><span>-as</span></code>, <code class="shiki"><span>-tfs</span></code>, <code class="shiki"><span>-tfa</span></code>, <code class="shiki"><span>-tsf</span></code>, <code class="shiki"><span>-tsa</span></code>, <code class="shiki"><span>-taf</span></code>, <code class="shiki"><span>-tas</span></code>, <code class="shiki"><span>-fta</span></code>, <code class="shiki"><span>-fts</span></code>, <code class="shiki"><span>-fsa</span></code>, <code class="shiki"><span>-fst</span></code>, <code class="shiki"><span>-fat</span></code>, <code class="shiki"><span>-fas</span></code>, <code class="shiki"><span>-stf</span></code>, <code class="shiki"><span>-sta</span></code>, <code class="shiki"><span>-sft</span></code>, <code class="shiki"><span>-sfa</span></code>, <code class="shiki"><span>-saf</span></code>, <code class="shiki"><span>-sat</span></code>, <code class="shiki"><span>-atf</span></code>, <code class="shiki"><span>-ats</span></code>, <code class="shiki"><span>-aft</span></code>, <code class="shiki"><span>-afs</span></code>, <code class="shiki"><span>-ast</span></code>, <code class="shiki"><span>-asf</span></code>, <code class="shiki"><span>-tfsa</span></code>, <code class="shiki"><span>-tfas</span></code>, <code class="shiki"><span>-tsfa</span></code>, <code class="shiki"><span>-tsaf</span></code>, <code class="shiki"><span>-tafs</span></code>, <code class="shiki"><span>-tasf</span></code>, <code class="shiki"><span>-ftsa</span></code>, <code class="shiki"><span>-ftas</span></code>, <code class="shiki"><span>-fsta</span></code>, <code class="shiki"><span>-fsat</span></code>, <code class="shiki"><span>-fast</span></code>, <code class="shiki"><span>-fats</span></code>, <code class="shiki"><span>-stfa</span></code>, <code class="shiki"><span>-staf</span></code>, <code class="shiki"><span>-sfta</span></code>, <code class="shiki"><span>-sfat</span></code>, <code class="shiki"><span>-satf</span></code>, <code class="shiki"><span>-saft</span></code>, <code class="shiki"><span>-atfs</span></code>, <code class="shiki"><span>-atsf</span></code>, <code class="shiki"><span>-afts</span></code>, <code class="shiki"><span>-afst</span></code>, <code class="shiki"><span>-astf</span></code>, <code class="shiki"><span>-asft</span></code>.</p><h2 id="parameter-format" tabindex="-1">Parameter Format: <a class="header-anchor" href="#parameter-format" aria-label="Permalink to &quot;Parameter Format:&quot;">​</a></h2><p>For all parameter categories except for flags parameters, a parameter will be written in one of the following formats inside of the parameter category&#39;s bracket type:</p><p><code class="shiki"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parameterName: parameterType</span></code></p><p><code class="shiki"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parameterName: parameterType[parameterRestrictions]</span></code></p><p>Here are some examples:</p><ul><li><code class="shiki"><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&lt;</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">string</span><span style="--shiki-light:#4EC9B0;--shiki-dark:#4EC9B0;">&gt;</span></code></li><li><code class="shiki"><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">size</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">number</span><span style="--shiki-light:#D7BA7D;--shiki-dark:#D7BA7D;">[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">]</span></code></li><li><code class="shiki"><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">{</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">player</span><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">target</span><span style="--shiki-light:#D7BA7D;--shiki-dark:#D7BA7D;">[?=@s,maxTargets=1]</span><span style="--shiki-light:#C586C0;--shiki-dark:#C586C0;">}</span></code></li><li><code class="shiki"><span style="--shiki-light:#CE9178;--shiki-dark:#CE9178;">[-tfsa]</span></code></li></ul><h3 id="parameter-restrictions" tabindex="-1">Parameter Restrictions: <a class="header-anchor" href="#parameter-restrictions" aria-label="Permalink to &quot;Parameter Restrictions:&quot;">​</a></h3><p><strong>Parameter restrictions work as follows:</strong></p><p>Parameter restrictions are specified inside of square brackets after the parameter&#39;s type.</p><p>Parameter restrictions are a comma-separated list of restrictions, each restriction is formatted as <code class="shiki"><span>restrictionName=restrictionValue</span></code>.</p><p>An example of a parameter with parameter restrictions would be:<br><code class="shiki"><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#9CDCFE;--shiki-dark:#9CDCFE;">size</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#B5CEA8;--shiki-dark:#B5CEA8;">number</span><span style="--shiki-light:#D7BA7D;--shiki-dark:#D7BA7D;">[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]</span><span style="--shiki-light:#D4D4D4;--shiki-dark:#D4D4D4;">]</span></code></p><p>Some commonly used restrictions include:</p><p><strong>?=value</strong></p><p>This specifies the default value for the parameter, this will be used if it is not specified.</p><p><strong>??=value</strong></p><p>This specified the value to be used for the parameter in the event of an error when parsing the parameter.</p><p><strong>min=number</strong></p><p>The minimum value of the parameter.</p><p><strong>max=number</strong></p><p>The maximum value of the parameter.</p><p><strong>maxLength=int</strong></p><p>The maximum length of the list parameter type or string parameter type.</p><p><strong>maxElementLength=int</strong></p><p>The maximum length of the strings and/or lists inside of the list parameter type.</p><p><strong>maxStringElementLength=int</strong></p><p>The maximum length of the strings inside of the list parameter type.</p><p><strong>maxListElementLength=int</strong></p><p>The maximum length of the lists inside of the list parameter type.</p><p><strong>escapeCodesAllowed=boolean</strong></p><p>Indicates whether JаvaScript escape codes are allowed.</p><p><strong>allowInfinity=boolean</strong></p><p>Indicates whether the number parameter type allows for Infinity and -Infinity to be used.</p><p><strong>allowNaN=boolean</strong></p><p>Indicates whether the number parameter type allows for NaN to be used.</p><p><strong>allowNegatives=boolean</strong></p><p>Indicates whether negative number values are allowed in the number parameter type.</p><p><strong>precision=int</strong></p><p>Indicates the precision to be used when parsing the number parameter type. This means that the actually inputted number will be that same as that number with the JаvaScript toPrecision() function ran on it with the precision set to the value of this restriction.</p><p><strong>canError=boolean</strong></p><p>Indicates whether this parameter can throw an error.</p><p><strong>minTargets=int</strong></p><p>The minimum number of targets for a target parameter type.</p><p><strong>maxTargets=int</strong></p><p>The maximum number of targets for a target parameter type.</p><p><strong>mustBeLowercase=boolean</strong></p><p>Whether this string or boolean parameter must be in all lowercase.</p><p><strong>mustBeUppercase=boolean</strong></p><p>Whether this string or boolean parameter must be in all uppercase.</p><p><strong>mustBeLowercase=boolean</strong></p><p>Whether this string or boolean parameter must be in all lowercase.</p><p><strong>mustBeCamelcase=boolean</strong></p><p>Whether this string or boolean parameter must be in all camelcase.</p><p><strong>mustBeTitlecase=boolean</strong></p><p>Whether this string or boolean parameter must be in all titlecase.</p><p><strong>allowMultiple=boolean</strong></p><p>Whether this parameter type allows for multiple items.</p><p>For an array this would determine if the array could have more than one item in it.</p><p>For a target this would mean that it could have multiple targets.</p><p><strong>caseSensitive=boolean</strong></p><p>Whether or not this parameter is case-sensitive.</p><p><strong>playersOnly=boolean</strong></p><p>Whether or not this target parameter only allows targeting players.</p><h2 id="next" tabindex="-1">Next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;Next&quot;">​</a></h2>',95)),n(a,{link:"./parameter-types"},{default:p(()=>s[0]||(s[0]=[h("Next: Parameter Types")])),_:1})])}const B=i(o,[["render",k]]);export{y as __pageData,B as default};
