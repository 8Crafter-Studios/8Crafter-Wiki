import{_ as r,e as c,t as a,C as n,f as s,Q as e,E as i,D as p,d as u}from"./chunks/framework.DWeOSq3P.js";const z=JSON.parse(`{"title":"Intro to Blocks","description":"A Hello world guide in making blocks. Learn the block format and how to create basic custom blocks.","frontmatter":{"title":"Intro to Blocks","description":"A Hello world guide in making blocks. Learn the block format and how to create basic custom blocks.","category":"General","nav_order":1,"tags":["guide","beginner"],"mentions":["SirLich","solvedDev","Joelant05","Dreamedc2015","sermah","yanasakana","aexer0e","SmokeyStack","MedicalJewel105","stirante","ChibiMango","Hatchibombotar","FrankyRay","Ciosciaa","Sprunkles137","ThomasOrs","QuazChick"]},"headers":[{"level":2,"title":"Registering Blocks","slug":"registering-blocks","link":"#registering-blocks","children":[{"level":3,"title":"Block Description","slug":"block-description","link":"#block-description","children":[]}]},{"level":2,"title":"Adding Components","slug":"adding-components","link":"#adding-components","children":[]},{"level":2,"title":"Applying Textures","slug":"applying-textures","link":"#applying-textures","children":[{"level":3,"title":"Per-Face Textures","slug":"per-face-textures","link":"#per-face-textures","children":[]}]},{"level":2,"title":"Defining Names","slug":"defining-names","link":"#defining-names","children":[]},{"level":2,"title":"Result","slug":"result","link":"#result","children":[]},{"level":2,"title":"What's Next?","slug":"what-s-next","link":"#what-s-next","children":[]}],"relativePath":"blocks/blocks-intro.md","filePath":"blocks/blocks-intro.md"}`),d={name:"blocks/blocks-intro.md"},E=e("",8),b=e("",7),g=e("",5),m={class:"tip custom-block"},y={class:"custom-block-title"},_=s("p",null,[s("a",{href:"/8Crafter-Wiki/blocks/block-sounds.html"},"Block sounds"),i(" can also be defined within "),s("code",null,"RP/blocks.json"),i(".")],-1),F=s("p",null,[i("For our basic 16×16×16 pixel block, textures should be defined in "),s("code",null,"RP/blocks.json"),i(".")],-1),C=s("p",null,[i("If you'd like to apply a custom model, the "),s("a",{href:"/8Crafter-Wiki/blocks/block-components.html#geometry"},"geometry"),i(" and "),s("a",{href:"/8Crafter-Wiki/blocks/block-components.html#material-instances"},"material instances"),i(" components should be used instead.")],-1),q=e("",2),f=e("",3),B=s("p",null,[s("code",null,"textures/blocks/compass_block_down.png")],-1),x=s("p",null,[s("code",null,"textures/blocks/compass_block_up.png")],-1),v=s("p",null,[s("code",null,"textures/blocks/compass_block_north.png")],-1),w=s("p",null,[s("code",null,"textures/blocks/compass_block_east.png")],-1),T=s("p",null,[s("code",null,"textures/blocks/compass_block_south.png")],-1),A=s("p",null,[s("code",null,"textures/blocks/compass_block_west.png")],-1),D=s("p",null,[i("The "),s("code",null,"blocks.json"),i(" entry would look like this:")],-1),P=e("",2),S=e("",2),I=e("",3),W=e("",7),R=s("p",null,[i("Learn about the available block "),s("a",{href:"/8Crafter-Wiki/blocks/block-components.html"},"components"),i(" to craft unique gameplay.")],-1),j=s("p",null,[i("Why not give your block a custom model with the "),s("a",{href:"/8Crafter-Wiki/blocks/block-components.html#geometry"},"geometry"),i(" component? You could also configure your own "),s("a",{href:"/8Crafter-Wiki/blocks/block-components.html#collision-box"},"collision"),i(" and "),s("a",{href:"/8Crafter-Wiki/blocks/block-components.html#selection-box"},"selection"),i(" boxes to match!")],-1),N=s("p",null,[i("Make use of block "),s("a",{href:"/8Crafter-Wiki/blocks/block-states.html"},"states"),i(" and "),s("a",{href:"/8Crafter-Wiki/blocks/block-permutations.html"},"permutations"),i(" to conditionally enable components on your blocks.")],-1),V=s("p",null,"For example, you could add liquid depth levels to your custom tank block, with support for multiple liquid types.",-1),M=s("p",null,[i("Browse several complete replicas of existing blocks in the "),s("strong",null,"Vanilla Re-Creations"),i(" category.")],-1),O=s("p",null,[i("Start simple with "),s("a",{href:"/8Crafter-Wiki/blocks/custom-glass-blocks.html"},"custom glass blocks"),i(", making use of "),s("a",{href:"/8Crafter-Wiki/blocks/block-components.html#material-instances"},"material instances"),i("!")],-1);function H(Y,G,L,$,J,Q){const l=p("CodeHeader"),h=p("nbsp"),t=p("WikiImage"),o=p("Card"),k=p("CardGrid");return u(),c("div",null,[E,a(l,null,{default:n(()=>[i("BP/blocks/custom_block.json")]),_:1}),b,a(l,null,{default:n(()=>[i("BP/blocks/custom_block.json")]),_:1}),g,s("div",m,[s("p",y,[a(h)]),_]),F,C,a(l,null,{default:n(()=>[i("RP/blocks.json")]),_:1}),q,a(l,null,{default:n(()=>[i("RP/textures/terrain_texture.json")]),_:1}),f,s("ul",null,[s("li",null,[B,a(t,{src:"/assets/images/blocks/blocks-intro/compass_block_down.png",pixelated:"",width:"64"})]),s("li",null,[x,a(t,{src:"/assets/images/blocks/blocks-intro/compass_block_up.png",pixelated:"",width:"64"})]),s("li",null,[v,a(t,{src:"/assets/images/blocks/blocks-intro/compass_block_north.png",pixelated:"",width:"64"})]),s("li",null,[w,a(t,{src:"/assets/images/blocks/blocks-intro/compass_block_east.png",pixelated:"",width:"64"})]),s("li",null,[T,a(t,{src:"/assets/images/blocks/blocks-intro/compass_block_south.png",pixelated:"",width:"64"})]),s("li",null,[A,a(t,{src:"/assets/images/blocks/blocks-intro/compass_block_west.png",pixelated:"",width:"64"})])]),D,a(l,null,{default:n(()=>[i("RP/blocks.json")]),_:1}),P,a(l,null,{default:n(()=>[i("minecraft:block > components")]),_:1}),S,a(l,null,{default:n(()=>[i("RP/textures/terrain_texture.json")]),_:1}),I,a(l,null,{default:n(()=>[i("RP/texts/en_US.lang")]),_:1}),W,a(k,null,{default:n(()=>[a(o,{title:"Add Functionality",image:"/assets/images/homepage/crafting_table_0.png"},{default:n(()=>[R,j]),_:1}),a(o,{title:"Create Variants",image:"/assets/images/homepage/scripting.png"},{default:n(()=>[N,V]),_:1}),a(o,{title:"Replicate Vanilla",image:"/assets/images/homepage/diamond_ore_0.png"},{default:n(()=>[M,O]),_:1})]),_:1})])}const K=r(d,[["render",H]]);export{z as __pageData,K as default};
