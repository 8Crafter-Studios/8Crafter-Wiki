import{_ as e,r as o,c as r,a,w as t,e as n,o as l,d as p}from"./404.md.291ad9a6.js";const kn='{"title":"Intro to JSON UI","description":"","frontmatter":{"title":"Intro to JSON UI","nav_order":1,"tags":["guide"],"mention":["sermah","KalmeMarq"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"UI Defs","slug":"ui-defs"},{"level":2,"title":"Global Variables","slug":"global-variables"},{"level":2,"title":"Namespaces","slug":"namespaces"},{"level":2,"title":"Screens","slug":"screens"},{"level":2,"title":"UI Elements","slug":"ui-elements"},{"level":2,"title":"Notations","slug":"notations"},{"level":3,"title":"Variables","slug":"variables"},{"level":3,"title":"Deriving","slug":"deriving"},{"level":2,"title":"Animations","slug":"animations"},{"level":2,"title":"Operators","slug":"operators"},{"level":2,"title":"Bindings","slug":"bindings"},{"level":2,"title":"Conditional Rendering","slug":"conditional-rendering"},{"level":3,"title":"Conditional Rendering with Variables","slug":"conditional-rendering-with-variables"},{"level":3,"title":"Conditional Rendering with Bindings","slug":"conditional-rendering-with-bindings"},{"level":2,"title":"Button Mappings","slug":"button-mappings"},{"level":2,"title":"Modifications","slug":"modifications"},{"level":3,"title":"Examples","slug":"examples"}],"relativePath":"json-ui/json-ui-intro.md","lastUpdated":1642426935788}',c={},u=n('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>All editable vanilla UI files are stored in <code>RP/ui/</code> in <code>.json</code> files.</p><p>They can be divided into three groups:</p><ul><li>System files: <ul><li><code>_global_varibles.json</code> - for variables used in multiple files</li><li><code>_ui_defs.json</code> - for referencing the files used on the UI.</li></ul></li><li>Screens: <ul><li><code>hud_screen.json</code></li><li><code>inventory_screen.json</code></li><li>etc.</li></ul></li><li>Additional files: (templates, like <code>ui_common.json</code>, <code>ui_templates_*.json</code> etc.</li></ul><h2 id="ui-defs" tabindex="-1">UI Defs <a class="header-anchor" href="#ui-defs" aria-hidden="true">#</a></h2><p>In <code>_ui_defs.json</code> you add all the files that will be used on the UI.</p><p>Imagine I created the files <code>RP/ui/button.json</code> and <code>RP/my_ui/main_menu.json</code>:</p>',7),i=p("RP/ui/_ui_defs.json"),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;ui_defs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ui/button.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;my_ui/main_menu.json&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Three things to notice:</p><ul><li>You have to add the whole directory starting from the RP folder</li><li>You can have files wherever you want. Even <code>RP/textures/folder_1/papers/sound/scrollpane.json</code></li><li>The <code>_ui_defs.json</code> in your RP doesn&#39;t need to have the vanilla files because all related UI files will not be replaced. Only overwritten.</li></ul><p>The files can have any extension since they will always be read as JSON files.</p><h2 id="global-variables" tabindex="-1">Global Variables <a class="header-anchor" href="#global-variables" aria-hidden="true">#</a></h2><p>Let&#39;s say you have a variable <code>&quot;$info_text_color&quot;: [0.8, 0.8, 0.8]</code> that stores a color for the information texts. If you use the same value in multiple files instead of repeatedly writing <code>&quot;color&quot;: [0.8, 0.8, 0.8]</code>, you can just reference the variable (<code>&quot;color&quot;: &quot;$info_text_color&quot;</code>) and put the variable on the <code>_global_variables.json</code> file. Another good advantage of doing that is you only need to change in one place, and all the elements that use the variable will have the value updated.</p>`,6),k=p("RP/ui/_global_variables.json"),d=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;$info_text_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),m=p("vanilla/my_ui/file1.json"),q=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;some_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hey&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$info_text_color&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1),_=p("vanilla/my_ui/file2.json"),g=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$info_text_color&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-hidden="true">#</a></h2><p>Namespaces are identifiers for the UI files. They are used to access elements in some files across all other files. They must be unique and short if possible because you may use them a lot of times.</p><p>An example:</p>`,4),h=p("vanilla/ui/file_a.json"),y=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span><span class="token string">&quot;stuff&quot;</span><span class="token punctuation">,</span>
  ...
  <span class="token property">&quot;foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span> <span class="token comment">// some UI element</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,1),v=p("vanilla/ui/file_b.json"),f=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;fizzbuzz@stuff.foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
  <span class="token comment">// &quot;fizzbuzz&quot; extends &quot;foobar&quot; from &quot;stuff&quot; namespace</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="screens" tabindex="-1">Screens <a class="header-anchor" href="#screens" aria-hidden="true">#</a></h2><p>Screen files contain UIs which are shown in appropriate situations:</p><ul><li><code>hud_screen</code> is used in HUD</li><li><code>inventory_screen</code> is used in the Inventory screen</li><li>etc.</li></ul><p>All files are pretty self-explanatory. An important thing to notice is that <strong>different screens can access other variables</strong>. More about that later.</p><h2 id="ui-elements" tabindex="-1">UI Elements <a class="header-anchor" href="#ui-elements" aria-hidden="true">#</a></h2><p>All the elements must have the <code>type</code> property because its value will define what kind of element it is.</p><p>Here&#39;s an example:</p>`,8),x=p("vanilla/ui/example_file.json"),w=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;example_element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>
    ...
  <span class="token punctuation">}</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Here the element is <code>type</code> <code>label</code>. So it will render a text.</p><h2 id="notations" tabindex="-1">Notations <a class="header-anchor" href="#notations" aria-hidden="true">#</a></h2><p>So, what are variables, and how can elements derive from others?</p><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><p>Everything that has <code>$</code> as the first letter of its name is a variable. Variables can store numbers, booleans, strings, and arrays.</p>`,6),T=p("vanilla/ui/example_file.json"),I=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;cool_element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;$foo&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>         <span class="token comment">// a number variable</span>
    <span class="token property">&quot;$bar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// a string variable</span>
    <span class="token property">&quot;$arr&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>     <span class="token comment">// an array variable</span>
    <span class="token property">&quot;$elem&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_button.template_button&quot;</span> <span class="token comment">// a string pointing at the element</span>
    ...
    <span class="token comment">// How to use</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$arr&quot;</span>           <span class="token comment">// puts the value of $arr into the size property</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$bar&quot;</span>   <span class="token comment">// sets text to the value of $bar</span>
    <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token property">&quot;tplt_element@$elem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="deriving" tabindex="-1">Deriving <a class="header-anchor" href="#deriving" aria-hidden="true">#</a></h3><p>To derive some element from another you should use <code>new@super</code> notation. An example:</p>`,3),S=p("vanilla/ui/example_file.json"),A=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;$cool_variable&quot;</span><span class="token operator">:</span> <span class="token number">777</span><span class="token punctuation">,</span>
    <span class="token property">&quot;$fixbugs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// &quot;fizzbuzz&quot; extends &quot;foobar&quot;</span>
  <span class="token comment">// and replaces $cool_variable value with 666.</span>
  <span class="token comment">// $fixbugs is still false for fizzbuzz, because it wasn&#39;t changed</span>
  <span class="token property">&quot;fizzbuzz@foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;$cool_variable&quot;</span><span class="token operator">:</span> <span class="token number">666</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Any property you add to the derived element will completely replace the superior one. Also, you can use a string variable after <code>@</code>. Its value will be interpreted as a superior element name. You may use it before <code>@</code> as well. Its value will become the derived element name.</p><h2 id="animations" tabindex="-1">Animations <a class="header-anchor" href="#animations" aria-hidden="true">#</a></h2><p><code>offset</code> animation example.</p>`,4),j=p("vanilla/ui/example_file.json"),P=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;anim_offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offset&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_offset&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><code>Wait</code> animation example. It&#39;s used when you want no animation between two other animations.</p>`,2),C=p("vanilla/ui/example_file.json"),V=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;anim_size_0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100% + 3px&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_wait&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;anim_wait&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wait&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_size_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;anim_size_1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100% + 3px&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_size_0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_size_0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><code>flip_book</code> animation example.</p>`,2),$=p("RP/ui/example_file.json"),R=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;anim_flip_book&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flip_book&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_uv&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;frame_count&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;frame_step&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fps&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
    ...
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;uv&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_flip_book&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Instead of saying <code>&quot;offset&quot;: &quot;@...&quot;</code>, <code>&quot;size&quot;: &quot;@...&quot;</code>, <code>&quot;alpha&quot;: &quot;@...&quot;</code>, etc., you can reference the animations that will be applied to the element using the <code>anims</code> property.</p>`,2),z=p("RP/ui/example_file.json"),N=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;anim_size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100% + 3px&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@...&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;anim_alpha&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alpha&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@...&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;anims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;@example_nm.anim_size&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;@example_nm.anim_alpha&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="operators" tabindex="-1">Operators <a class="header-anchor" href="#operators" aria-hidden="true">#</a></h2><table><thead><tr><th>Operator Name</th><th>Operator</th><th>Examples</th></tr></thead><tbody><tr><td>Addition</td><td>+</td><td><code>&quot;100% + 420px&quot;</code> <code>($text + &#39; my&#39;)</code> <code>($index + 2)</code> <code>(&#39;#&#39; + $bdg_nm + &#39;_name&#39;)</code></td></tr><tr><td>Subtraction</td><td>-</td><td><code>&quot;100% - 69px&quot;</code> <code>($text - &#39; my&#39;)</code> <code>($index - 13)</code></td></tr><tr><td>Division</td><td>/</td><td><code>($var / 12)</code> <code>(#value / 2)</code></td></tr><tr><td>Equal to</td><td>=</td><td><code>($var = 12)</code> <code>($var = &#39;this_text&#39;)</code> <code>(#name = &#39;Wither&#39;)</code></td></tr><tr><td>Greater than</td><td>&gt;</td><td><code>(#value &gt; 13)</code></td></tr><tr><td>Less than</td><td>&lt;</td><td><code>($var &lt; 4)</code></td></tr><tr><td>Greater or equal than</td><td>&gt; or =</td><td><code>(#value &gt; 2 or #value = 2)</code></td></tr><tr><td>Less or equal than</td><td>&lt; or =</td><td><code>(#value &lt; 2 or #value = 2)</code></td></tr><tr><td>Logical AND</td><td>and</td><td><code>($is_school and $is_open)</code></td></tr><tr><td>Logical OR</td><td>or</td><td><code>($is_cool or $is_awesome)</code></td></tr><tr><td>Logical NOT</td><td>not</td><td><code>(not #name)</code> <code>(not #name = &#39;text&#39;)</code></td></tr></tbody></table><h2 id="bindings" tabindex="-1">Bindings <a class="header-anchor" href="#bindings" aria-hidden="true">#</a></h2><p><code>bindings</code> is used to bind a hardcoded value to the element and use it for conditions, for example.</p><p>Here&#39;s an example of a label using a hardcoded text. The <code>text</code> property value is <code>#hardtext</code>. By using <code>bindings</code>, I can get the value of the hardcoded variable <code>#hardtext</code> so the <code>text</code> property can use it. Here it&#39;s directly assigning the <code>#hardtext</code> value to the <code>text</code> property.</p>`,6),E=p("RP/ui/example_file.json"),D=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hardtext&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hardtext&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Talking more about the <code>label</code> example, it can also appear in another way. Let&#39;s see:</p>`,2),U=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hardtext&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>In this case, the <code>#hardtext</code> value is assigned to the <code>#text</code> binding property name that will then be assigned to the <code>text</code> property.</p><p>This happens a lot with the <code>visible</code> and <code>enabled</code> properties. Here&#39;s an example with both of them:</p>`,3),B=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;send_button&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#using_touch&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#visible&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;play_button&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#play_button_enabled&quot;</span>
        <span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#enabled&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code>#using_touch</code> and <code>#play_button_enabled</code> in this case store boolean values. If you&#39;re playing on a touch device, <code>#using_touch</code> will be <code>true</code> else <code>false.</code> <code>#play_button_enabled</code> is used in the <code>Add External Server</code> screen. So, in this case, it will be <code>true</code> if all text fields (<code>server name</code>, <code>server ip</code> and <code>server_port</code>) have text inside them. <br> So the <code>#using_touch</code> value will override the <code>#visible</code> binding property value, which, in this case, is also a property (<code>#visible</code> is used inside <code>property_bag</code>, which would be the same as setting <code>visible</code> to something). And <code>#play_button_enabled</code> will override the <code>#enabled</code> binding property value, which will then set its value to <code>enabled</code> property.</p><p>Let&#39;s say you want to show a panel with some content when a specific toggle is selected/checked. You&#39;ll need a different type of binding structure. We have to tell the source element where the value will come from, tell which property of that source element we want to get the value from and which property we want to override its value.</p>`,3),H=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;panel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;binding_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;source_control_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_toggle&quot;</span><span class="token punctuation">,</span> <span class="token comment">// the name of the source element</span>
        <span class="token property">&quot;source_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#toggle_state&quot;</span> <span class="token comment">// We want this property value which tells in which state the toggle is in</span>
        <span class="token property">&quot;target_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#visible&quot;</span> <span class="token comment">// the target property to be overrided</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;my_toggle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>When the toggle is checked, the <code>#toggle_state</code> will be checked (<code>1</code> or <code>true</code>), and it will override the <code>visible</code> property value of the element to true. When you uncheck, it will be unchecked (<code>0</code> or <code>false</code>) and once again override the <code>visible</code> value.</p><h2 id="conditional-rendering" tabindex="-1">Conditional Rendering <a class="header-anchor" href="#conditional-rendering" aria-hidden="true">#</a></h2><p>It is challenging to manipulate Bedrock&#39;s current UI system when things are visible on-screen using standard properties. However, variables and bindings are exceptional in JSON UI because they contain data coming directly from the Bedrock Engine. Using a couple of clever UI techniques, it is possible to have complete control over the conditions in which a UI control is rendered. The methods are split into two categories: conditional rendering with variables and conditional rendering with bindings.</p><h3 id="conditional-rendering-with-variables" tabindex="-1">Conditional Rendering with Variables <a class="header-anchor" href="#conditional-rendering-with-variables" aria-hidden="true">#</a></h3><p>Variables can be used to render UI controls conditionally. Recall that UI variables are properties with <code>$</code> in front of them. An example of a variable that carries engine data in <code>hud_screen.json</code> is <code>$actionbar_text</code>. Looking at <code>hud_actionbar_text</code>, we can see that <code>$actionbar_text</code> is used to display the actionbar text.</p>`,6),O=p("vanilla/ui/hud_screen.json"),L=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
...
  <span class="token property">&quot;hud_actionbar_text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;100%c + 12px&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100%c + 5px&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;50%-68px&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/hud_tip_text_background&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_actionbar_text_background_alpha_out&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;actionbar_message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;anchor_from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;anchor_to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$tool_tip_text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$actionbar_text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;localize&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_actionbar_text_alpha_out&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>The <code>ignored</code> property is used to conditionally render a UI control when working with variables that carry bedrock engine data. Consider the below example. The <code>ignored</code> property added is the same as saying &quot;ignore the text label if the actionbar text is equal to <code>hello world</code>&quot;.</p>`,2),M=p("vanilla/ui/hud_screen.json"),W=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
...
  <span class="token property">&quot;hud_actionbar_text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;100%c + 12px&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100%c + 5px&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;50%-68px&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/hud_tip_text_background&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_actionbar_text_background_alpha_out&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;actionbar_message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;anchor_from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;anchor_to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$tool_tip_text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$actionbar_text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;localize&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_actionbar_text_alpha_out&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;ignored&quot;</span><span class="token operator">:</span> <span class="token string">&quot;($actionbar_text = &#39;hello world&#39;)&quot;</span> <span class="token comment">// ignore the text label if the actionbar text is equal to &quot;hello world&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Modifying the above JSON into an unintrusive UI file used in a resource pack should look identical to this:</p>`,2),Y=p("RP/ui/hud_screen.json"),J=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;hud_actionbar_text/actionbar_message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;ignored&quot;</span><span class="token operator">:</span> <span class="token string">&quot;($actionbar_text = &#39;hello world&#39;)&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>When you log into a world with the resource pack enabled, try executing <code>/title @s actionbar hello world</code>. You should notice that no message appears! Running any other actionbar title should show the other messages.</p><p>Here&#39;s a more complicated example of conditional rendering with variables. In this case, it is necessary to use the actionbar factory as it turns out the <code>$actionbar_text</code> data is only accessible in the factory controls.</p>`,3),G=p("RP/ui/hud_screen.json"),F=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;black_conditional_image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/Black&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ignored&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(not ($actionbar_text = &#39;hello world&#39;))&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token property">&quot;black_conditional_image_factory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;panel&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;factory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hud_actionbar_text_factory&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;control_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;hud_actionbar_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black_conditional_image@hud.black_conditional_image&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token property">&quot;root_panel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;modifications&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controls&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_front&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;black_conditional_image_factory@hud.black_conditional_image_factory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>The above example shows a 16x16 black square on the HUD screen when the actionbar text string is equal to <code>hello world</code>. You may also apply animations to your image to make it more dynamic. Conditional rendering with variables is not limited to images and labels. You may use any object type in conditional rendering with variables. You can imagine pairing your UI code with the actionbar text allows for a high degree of manipulation of JSON UI (at least in <code>hud_screen.json</code>). The <code>ignored</code> property has support for UI operators, so you have even more control. Anywhere where there is a variable that carries bedrock engine data allows for conditional rendering with variables.</p><h3 id="conditional-rendering-with-bindings" tabindex="-1">Conditional Rendering with Bindings <a class="header-anchor" href="#conditional-rendering-with-bindings" aria-hidden="true">#</a></h3><p>Following the above example with the actionbar, you might logically assume that the title also uses variables. This is not the case. The title uses bindings for its data, as shown below.</p>`,4),K=p("vanilla/ui/hud_screen.json"),Q=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
...
  <span class="token property">&quot;hud_title_text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stack_panel&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;orientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">-19</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_title_text_alpha_in&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;propagate_alpha&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;title_frame&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;panel&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100%cm&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;title_background&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;100%sm + 30px&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100%sm + 6px&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/hud_tip_text_background&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_title_background_alpha_in&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;anchor_from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top_middle&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;anchor_to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top_middle&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$title_command_text_color&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;localize&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">&quot;font_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extra_large&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;variables&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;requires&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(not $title_shadow)&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;$show_shadow&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;requires&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$title_shadow&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;$show_shadow&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;shadow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$show_shadow&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text_alignment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hud_title_text_string&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;binding_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;global&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>You will need to add another binding object to the text to control its visibility. Recall that <code>#visible</code> contains the visibility of the thing directly through bindings. The following example will not render the title string <code>hello world</code> but will render all other strings. Try typing <code>/title @s title hello world</code> to see it in-game.</p>`,2),X=p("vanilla/ui/hud_screen.json"),Z=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
...
  <span class="token property">&quot;hud_title_text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stack_panel&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;orientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">-19</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_title_text_alpha_in&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;propagate_alpha&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;title_frame&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;panel&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100%cm&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;title_background&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;100%sm + 30px&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100%sm + 6px&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/hud_tip_text_background&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;alpha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@hud.anim_title_background_alpha_in&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;anchor_from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top_middle&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;anchor_to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top_middle&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$title_command_text_color&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;localize&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">&quot;font_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extra_large&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;variables&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;requires&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(not $title_shadow)&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;$show_shadow&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;requires&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$title_shadow&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;$show_shadow&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;shadow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$show_shadow&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text_alignment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hud_title_text_string&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;binding_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;global&quot;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;binding_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span><span class="token punctuation">,</span> <span class="token comment">// make this a viewing binding</span>
                    <span class="token property">&quot;source_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(not (#text = &#39;hello world&#39;))&quot;</span><span class="token punctuation">,</span> <span class="token comment">// detect when the title text string is not equal to &quot;hello world&quot;</span>
                    <span class="token property">&quot;target_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#visible&quot;</span> <span class="token comment">// override the #visibility property depending on if &quot;source_property_name&quot; is true or false</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><p>Modifying the above JSON into an unintrusive UI file used in a resource pack should look identical to this:</p>`,2),nn=p("RP/ui/hud_screen.json"),sn=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;hud_title_text/title_frame/title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;modifications&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_back&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;binding_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;source_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(not (#text = &#39;hello world&#39;))&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;target_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#visible&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Like before, here&#39;s a more complicated example of conditional rendering with bindings below. In this case, the 16x16 black image will only render when the title text string equals <code>hello world</code>. While you don&#39;t need to use the title factory in this case, you should if you are going to use UI animations.</p>`,2),an=p("RP/ui/hud_screen.json"),tn=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;black_conditional_image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/Black&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;layer&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
		<span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hud_title_text_string&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;binding_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;source_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(#hud_title_text_string = &#39;hello world&#39;)&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;target_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#visible&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token property">&quot;black_conditional_image_factory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;panel&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;factory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hud_title_text_factory&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;control_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;hud_title_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black_conditional_image@hud.black_conditional_image&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token property">&quot;root_panel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;modifications&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controls&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_front&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;black_conditional_image_factory@hud.black_conditional_image_factory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="button-mappings" tabindex="-1">Button Mappings <a class="header-anchor" href="#button-mappings" aria-hidden="true">#</a></h2><h2 id="modifications" tabindex="-1">Modifications <a class="header-anchor" href="#modifications" aria-hidden="true">#</a></h2><table><thead><tr><th>Modification</th><th>Description</th></tr></thead><tbody><tr><td><code>insert_back</code></td><td><strong>insert</strong> at end of array</td></tr><tr><td><code>insert_front</code></td><td><strong>insert</strong> at start of array</td></tr><tr><td><code>insert_after</code></td><td><strong>insert</strong> after target in array</td></tr><tr><td><code>insert_before</code></td><td><strong>insert</strong> before target in array</td></tr><tr><td><code>move_back</code></td><td><strong>move</strong> target to end of array</td></tr><tr><td><code>move_front</code></td><td><strong>move</strong> target to start of array</td></tr><tr><td><code>move_after</code></td><td><strong>move</strong> target after second target</td></tr><tr><td><code>move_before</code></td><td><strong>move</strong> target before second target</td></tr><tr><td><code>swap</code></td><td><strong>swap</strong> first target with second target</td></tr><tr><td><code>replace</code></td><td><strong>replace</strong> first target with second target</td></tr><tr><td><code>remove</code></td><td><strong>remove</strong> target</td></tr></tbody></table><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><h4 id="front-back" tabindex="-1">Front/Back <a class="header-anchor" href="#front-back" aria-hidden="true">#</a></h4><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controls&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_front&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controls&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_back&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controls&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_front&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_front&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controls&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_back&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_back&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="after-before" tabindex="-1">After/Before <a class="header-anchor" href="#after-before" aria-hidden="true">#</a></h4><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;control_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;second_target&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_after&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_after&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#my_binding_1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;control_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;second_target&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_before&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_before&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#my_binding_1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;control_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;second_target&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_after&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_after&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;control_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;second_target&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_before&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;foo@example.bar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move_before&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="swap-replace-remove" tabindex="-1">Swap/Replace/Remove <a class="header-anchor" href="#swap-replace-remove" aria-hidden="true">#</a></h4><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;swap&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;replace&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#replacement_binding&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;array_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bindings&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remove&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#example_binding_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,25);function pn(en,on,rn,ln,cn,un){const s=o("CodeHeader");return l(),r("div",null,[u,a(s,null,{default:t(()=>[i]),_:1}),b,a(s,null,{default:t(()=>[k]),_:1}),d,a(s,null,{default:t(()=>[m]),_:1}),q,a(s,null,{default:t(()=>[_]),_:1}),g,a(s,null,{default:t(()=>[h]),_:1}),y,a(s,null,{default:t(()=>[v]),_:1}),f,a(s,null,{default:t(()=>[x]),_:1}),w,a(s,null,{default:t(()=>[T]),_:1}),I,a(s,null,{default:t(()=>[S]),_:1}),A,a(s,null,{default:t(()=>[j]),_:1}),P,a(s,null,{default:t(()=>[C]),_:1}),V,a(s,null,{default:t(()=>[$]),_:1}),R,a(s,null,{default:t(()=>[z]),_:1}),N,a(s,null,{default:t(()=>[E]),_:1}),D,a(s),U,a(s),B,a(s),H,a(s,null,{default:t(()=>[O]),_:1}),L,a(s,null,{default:t(()=>[M]),_:1}),W,a(s,null,{default:t(()=>[Y]),_:1}),J,a(s,null,{default:t(()=>[G]),_:1}),F,a(s,null,{default:t(()=>[K]),_:1}),Q,a(s,null,{default:t(()=>[X]),_:1}),Z,a(s,null,{default:t(()=>[nn]),_:1}),sn,a(s,null,{default:t(()=>[an]),_:1}),tn])}var dn=e(c,[["render",pn]]);export{kn as __pageData,dn as default};
