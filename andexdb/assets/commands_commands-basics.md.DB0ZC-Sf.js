import{_ as i,k as l,a6 as r,A as t,I as n,l as e,J as o,E as d,j as c}from"./chunks/framework.Bul4SA1j.js";const w=JSON.parse('{"title":"Commands Basics","description":"The basics of the commands in this add-on.","frontmatter":{"title":"Commands Basics","page_title":"Commands Basics","description":"The basics of the commands in this add-on.","nav_order":1},"headers":[{"level":2,"title":"How to give players the permissions to use commands.","slug":"how-to-give-players-the-permissions-to-use-commands","link":"#how-to-give-players-the-permissions-to-use-commands","children":[]},{"level":2,"title":"Next","slug":"next","link":"#next","children":[]}],"relativePath":"commands/commands-basics.md","filePath":"commands/commands-basics.md"}'),h={name:"commands/commands-basics.md"};function u(p,a,f,g,y,b){const s=d("Spoiler"),m=d("Button");return c(),l("div",null,[a[3]||(a[3]=r('<p>For all built-in chat commands you can just type <code>\\help</code> cmd followed by the name of the command and it will display what the command does, the syntax of it, and what any flag parameters on the command do. For example if you wanted to see how to use the <code>\\giveb</code> command you would do <code>\\help cmd giveb</code> and for the <code>\\\\replace</code> command you would do <code>\\help cmd \\\\replace</code>.</p><h2 id="how-to-give-players-the-permissions-to-use-commands" tabindex="-1">How to give players the permissions to use commands. <a class="header-anchor" href="#how-to-give-players-the-permissions-to-use-commands" aria-label="Permalink to &quot;How to give players the permissions to use commands.&quot;">​</a></h2>',2)),t(s,{title:"If Ultra Security Mode is not Enabled (Default)"},{default:n(()=>a[0]||(a[0]=[e("p",null,[o("To use the majority of chat commands, you will first need to give yourself the "),e("code",null,"canUseChatCommands"),o(" tag.")],-1),e("p",null,[o("To get notified whenever a player runs a chat command then just give yourself the "),e("code",null,"getAllChatCommands"),o(" tag.")],-1),e("p",null,"Some chat commands require different tags than others, and some don't require any at all.",-1),e("p",null,"The tags required to use each chat command can be configured in the Manage Commands section of the Main Menu.",-1),e("p",null,[o("Most chat commands default to requiring the "),e("code",null,"canUseChatCommands"),o(" tag.")],-1),e("p",null,[o("Some commands like "),e("code",null,"\\home"),o(", "),e("code",null,"\\help"),o(", and "),e("code",null,"\\tpa"),o(" default to not requiring any tags to use them, so anyone can use them. However, if you don't want people using those commands you can either "),e("a",{href:"/andexdb/andexdb/commands/changing-command-required-tags.html"},"change the required tags for the command"),o(" or "),e("a",{href:"/andexdb/andexdb/commands/disabling-commands.html"},"disable the command"),o(".")],-1),e("p",null,"You can also disable individual commands completely in the Manage Commands section of the main menu.",-1)])),_:1}),t(s,{title:"If Ultra Security Mode is Enabled"},{default:n(()=>a[1]||(a[1]=[e("p",null,[o("If Ultra Security Mode is enabled then for someone to be able to use most of the chat commands you will first need to give them the correct permission level for the commands you want the to be able to use. Information on how to give players permissions in Ultra Security Mode is available "),e("a",{href:"/andexdb/andexdb/usm/giving-players-permissions.html"},"here"),o(".")],-1),e("p",null,[o("Each command has its own required permission level. Unlike in Standard Security Mode, when you are using Ultra Security Mode commands don't require specific tags to use, instead the owner or someone with the "),e("code",null,"andexdb.fullControl"),o(" permission has to go into the manage players menu, select the player, and give them the permission that way.")],-1),e("p",null,[o("Some commands can be used by everyone by default. However, if you don't want people using those commands you can either "),e("a",{href:"/andexdb/andexdb/usm/changing-command-required-permission-level.html"},"change the required permission level for the command"),o(" or "),e("a",{href:"/andexdb/andexdb/commands/disabling-commands.html"},"disable the command"),o(".")],-1)])),_:1}),a[4]||(a[4]=e("h2",{id:"next",tabindex:"-1"},[o("Next "),e("a",{class:"header-anchor",href:"#next","aria-label":'Permalink to "Next"'},"​")],-1)),t(m,{link:"./commands-parameters-basics"},{default:n(()=>a[2]||(a[2]=[o("Next: Commands Parameters Basics")])),_:1})])}const x=i(h,[["render",u]]);export{w as __pageData,x as default};
