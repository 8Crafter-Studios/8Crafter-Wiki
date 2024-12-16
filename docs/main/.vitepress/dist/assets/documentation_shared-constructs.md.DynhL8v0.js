import{_ as r,e as o,f as e,E as a,t,D as i,O as l,A as p,d}from"./chunks/framework.BGJJ8CDY.js";const C=JSON.parse('{"title":"Shared Constructs","description":"Shared JSON constructs.","frontmatter":{"title":"Shared Constructs","nav_order":1,"mentions":["Ciosciaa","ThomasOrs"],"description":"Shared JSON constructs."},"headers":[{"level":2,"title":"Range Objects","slug":"range-objects","link":"#range-objects","children":[]},{"level":2,"title":"Fraction Objects","slug":"fraction-objects","link":"#fraction-objects","children":[]}],"relativePath":"documentation/shared-constructs.md","filePath":"documentation/shared-constructs.md"}'),c={name:"documentation/shared-constructs.md"};function h(u,s,m,b,k,g){const n=p("CodeHeader");return d(),o("div",null,[s[2]||(s[2]=e("p",null,"A few JSON constructs are expressible in multiple locations in the add-ons system.",-1)),s[3]||(s[3]=e("h2",{id:"range-objects",tabindex:"-1"},[a("Range Objects "),e("a",{class:"header-anchor",href:"#range-objects","aria-label":'Permalink to "Range Objects"'},"​")],-1)),s[4]||(s[4]=e("p",null,"Range objects define a spread between two numbers.",-1)),t(n,null,{default:i(()=>s[0]||(s[0]=[a("Range Object Example")])),_:1}),s[5]||(s[5]=l(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;min&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;max&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>When provided, a random value will be selected inclusively between the minimum and maximum. Rolls are not retained; a new random value will be rolled each instance the range object would be used. The maximum must not be less than the minimum, but they may be equal to affix rolls to a specific value.</p><h2 id="fraction-objects" tabindex="-1">Fraction Objects <a class="header-anchor" href="#fraction-objects" aria-label="Permalink to &quot;Fraction Objects&quot;">​</a></h2><p>Fraction objects define a fraction using a numerator and denominator.</p>`,4)),t(n,null,{default:i(()=>s[1]||(s[1]=[a("Fraction Object Example")])),_:1}),s[6]||(s[6]=l(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;numerator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;denominator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The value used in place of the object will be the computed division, <code>numerator</code> ÷ <code>denominator</code>. Both the numerator and denominator must be at least <code>1</code>, and the denominator cannot be equal to the numerator.</p>`,2))])}const v=r(c,[["render",h]]);export{C as __pageData,v as default};
