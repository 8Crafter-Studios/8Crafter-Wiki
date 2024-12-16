import{_ as t}from"./chunks/gametick.DL7JHEqe.js";import{_ as n}from"./chunks/4.DBwDyHIp.js";import{_ as c,e as i,O as l,d as m}from"./chunks/framework.BLb2Gtba.js";const s="/8Crafter-Wiki/andexdb/assets/images/commands/commandBlockUI.png",d="/8Crafter-Wiki/andexdb/assets/images/commands/impulseCommandBlock.png",e="/8Crafter-Wiki/andexdb/assets/images/commands/chainCommandBlock.png",a="/8Crafter-Wiki/andexdb/assets/images/commands/repeatingCommandBlock.png",r="/8Crafter-Wiki/andexdb/assets/images/commands/impulseConditionalCommandBlock.png",h="/8Crafter-Wiki/andexdb/assets/images/commands/chainConditionalCommandBlock.png",u="/8Crafter-Wiki/andexdb/assets/images/commands/repeatingConditionalCommandBlock.png",k="/8Crafter-Wiki/andexdb/assets/images/commands/hover_note.png",p="/8Crafter-Wiki/andexdb/assets/images/commands/pasteCommandButton.png",b="/8Crafter-Wiki/andexdb/assets/images/commands/correctCommandBlockPlacement.png",g="/8Crafter-Wiki/andexdb/assets/images/commands/incorrectCommandBlockPlacement.png",I=JSON.parse('{"title":"Intro to Command Blocks","description":"Introduction to MCBE command blocks.","frontmatter":{"title":"Intro to Command Blocks","category":"General","mentions":["BedrockCommands","zheaEvyline","jordanparki7"],"nav_order":1,"description":"Introduction to MCBE command blocks."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Obtaining","slug":"obtaining","link":"#obtaining","children":[]},{"level":2,"title":"Command Block UI","slug":"command-block-ui","link":"#command-block-ui","children":[]},{"level":2,"title":"Command Block Types","slug":"command-block-types","link":"#command-block-types","children":[]},{"level":2,"title":"Command Block Conditions","slug":"command-block-conditions","link":"#command-block-conditions","children":[]},{"level":2,"title":"Command Block Redstone States","slug":"command-block-redstone-states","link":"#command-block-redstone-states","children":[]},{"level":2,"title":"Command Block Tick Delay","slug":"command-block-tick-delay","link":"#command-block-tick-delay","children":[]},{"level":2,"title":"Command Block Hover Note","slug":"command-block-hover-note","link":"#command-block-hover-note","children":[]},{"level":2,"title":"Paste Button","slug":"paste-button","link":"#paste-button","children":[]},{"level":2,"title":"Command Block Output","slug":"command-block-output","link":"#command-block-output","children":[{"level":3,"title":"Disabling Command Messages in Chat","slug":"disabling-command-messages-in-chat","link":"#disabling-command-messages-in-chat","children":[]}]},{"level":2,"title":"Command Block Placement","slug":"command-block-placement","link":"#command-block-placement","children":[]},{"level":2,"title":"Troubleshooting Command Blocks","slug":"troubleshooting-command-blocks","link":"#troubleshooting-command-blocks","children":[]},{"level":2,"title":"What You Have Learned","slug":"what-you-have-learned","link":"#what-you-have-learned","children":[]}],"relativePath":"commands/intro-to-command-blocks.md","filePath":"commands/intro-to-command-blocks.md"}'),f={name:"commands/intro-to-command-blocks.md"};function C(y,o,w,v,B,x){return m(),i("div",null,o[0]||(o[0]=[l('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>Command Blocks are special blocks in Minecraft. The same commands (cheats) you type in chat can be run automatically using command blocks and it can be reused without needing to type all over again.</p><p>They can only be placed or destroyed by a player with the Operator permission in gamemode Creative.</p><h2 id="obtaining" tabindex="-1">Obtaining <a class="header-anchor" href="#obtaining" aria-label="Permalink to &quot;Obtaining&quot;">​</a></h2><ol><li>Open your world settings.</li><li>Under Cheats, toggle &quot;Activate Cheats&quot; setting ON.</li><li>Run <code>/give @s command_block</code> in chat.</li></ol><h2 id="command-block-ui" tabindex="-1">Command Block UI <a class="header-anchor" href="#command-block-ui" aria-label="Permalink to &quot;Command Block UI&quot;">​</a></h2><p><img src="'+s+'" alt="commandBlockUI"></p><h2 id="command-block-types" tabindex="-1">Command Block Types <a class="header-anchor" href="#command-block-types" aria-label="Permalink to &quot;Command Block Types&quot;">​</a></h2><p><img src="'+d+'" alt="impulseCommandBlock"> <strong>Impulse</strong> runs the command <strong>once</strong> each time it is powered.</p><p><img src="'+e+'" alt="chainCommandBlock"> <strong>Chain</strong> runs the command in a sequence, ie., only after the previous command block it is connecting from was run.</p><p><img src="'+a+'" alt="repeatingCommandBlock"> <strong>Repeat</strong> runs the command every game-tick. There are approximately 20 ticks per second. A delay can be applied to adjust how often the command is executed, explained <a href="/8Crafter-Wiki/andexdb/commands/intro-to-command-blocks.html#command-block-tick-delay">below</a>.</p><h2 id="command-block-conditions" tabindex="-1">Command Block Conditions <a class="header-anchor" href="#command-block-conditions" aria-label="Permalink to &quot;Command Block Conditions&quot;">​</a></h2><p><strong>Conditional</strong> command blocks will run the command only if the previous command block it was connecting from had an output that was successful. (<code>true</code>)</p><blockquote><p>Conditional command block states are shown by a small indent into the command block&#39;s arrow texture, as shown below:</p><ul><li><img src="'+r+'" alt="pasteCommandButton"> Impulse Conditional Command Block</li><li><img src="'+h+'" alt="chainConditionalCommandBlock"> Chain Conditional Command Block</li><li><img src="'+u+'" alt="repeatingConditionalCommandBlock"> Repeating Conditional Command Block</li></ul></blockquote><p><strong>Unconditional</strong> command blocks will run the command regardless of the outcome. Whether the previous command block it was connecting from had an output that was succesful (<code>true</code>) or failed (<code>false</code>) the command block will still run the command.</p><h2 id="command-block-redstone-states" tabindex="-1">Command Block Redstone States <a class="header-anchor" href="#command-block-redstone-states" aria-label="Permalink to &quot;Command Block Redstone States&quot;">​</a></h2><p><strong>Needs Redstone</strong> command block can only be activated with redstone power. Using buttons, levers, redstone torch, etc.</p><p><strong>Always Active</strong> command block will be activated as soon as you close the command block UI.</p><h2 id="command-block-tick-delay" tabindex="-1">Command Block Tick Delay <a class="header-anchor" href="#command-block-tick-delay" aria-label="Permalink to &quot;Command Block Tick Delay&quot;">​</a></h2><p>In this option, you may specify how much delay there should be before the command block runs the command.</p><p>The ticks refer to Minecraft game-ticks. A <strong>tick</strong> is simply a unit of measure for time, in games. 1 second in real life is approximately 20 game-ticks in Minecraft.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><img src="'+t+'" alt="gametick.png"></p></div><h2 id="command-block-hover-note" tabindex="-1">Command Block Hover Note <a class="header-anchor" href="#command-block-hover-note" aria-label="Permalink to &quot;Command Block Hover Note&quot;">​</a></h2><p>This option allows you to put a hovering text over your command blocks. It&#39;s useful for giving short-names for easy identification when working with multiple command-blocks-chains.</p><p>When a command is run, the hover note will be displayed along with the output in chat if gamerule <code>commandblockoutput</code> is enabled. <img src="'+k+'" alt="hover_note"></p><h2 id="paste-button" tabindex="-1">Paste Button <a class="header-anchor" href="#paste-button" aria-label="Permalink to &quot;Paste Button&quot;">​</a></h2><p><img src="'+p+'" alt="pasteCommandButton"></p><p>The paste button allows you to paste commands from your clipboard to the &#39;Command Input&#39; box.</p><h2 id="command-block-output" tabindex="-1">Command Block Output <a class="header-anchor" href="#command-block-output" aria-label="Permalink to &quot;Command Block Output&quot;">​</a></h2><ul><li><p>Toggle the &#39;Previous Output&#39; button in the command block UI to see command output and block details.</p></li><li><p>The <code>/</code> you type before the whole command is not required in a command block, but doing so will not cause any errors.</p></li><li><p>A redstone comparator can read command block outputs. If output is successful, it will return anywhere from 1 to 15 redstone signals depending on the output strength.</p></li><li><p>You can check if a command block output is <code>true</code>/<code>false</code> by running it in chat. An output in red text or an output of <code>0</code> indicate a syntax error or failed (<code>false</code>) output. And output in white text indicate that the command was run successfully.</p></li><li><p>You can also tell if a command was <code>true</code>/<code>false</code> by checking whether the action was performed or not.</p></li></ul><h3 id="disabling-command-messages-in-chat" tabindex="-1">Disabling Command Messages in Chat <a class="header-anchor" href="#disabling-command-messages-in-chat" aria-label="Permalink to &quot;Disabling Command Messages in Chat&quot;">​</a></h3><p>Run in Chat:</p><ul><li><code>/gamerule commandblockoutput false</code> to disable command block messages in chat.</li><li><code>/gamerule sendcommandfeedback false</code> to disable feedback from commands entered in chat.</li></ul><h2 id="command-block-placement" tabindex="-1">Command Block Placement <a class="header-anchor" href="#command-block-placement" aria-label="Permalink to &quot;Command Block Placement&quot;">​</a></h2><p>When placing command blocks in a chain (arranged to work in sequence) for any system, make sure the consecutive command blocks connect/begin from the head of the previous command block&#39;s arrow.</p><p>The arrow/facing direction can be observed from the command block texture on the sides.</p><p><strong>✅ Correct Placement</strong><img src="'+b+'" alt="correctCommandBlockPlacement"></p><p><strong>❌ Incorrect Placement</strong><img src="'+g+'" alt="incorrectCommandBlockPlacement"></p><h2 id="troubleshooting-command-blocks" tabindex="-1">Troubleshooting Command Blocks <a class="header-anchor" href="#troubleshooting-command-blocks" aria-label="Permalink to &quot;Troubleshooting Command Blocks&quot;">​</a></h2><ul><li><p>In world settings, under <strong>Cheats</strong>, make sure command blocks have not been disabled.</p></li><li><p>Make sure gamerule <code>maxcommandchainlength</code> is not set to 0</p></li><li><p>Make sure there are no unwanted redstone power that is interfering with the command block. It can be from redstone dust, lever, redstone torch, etc.</p></li><li><p>Try switching between &#39;Always Active&#39; &amp; &#39;Needs Redstone&#39;.</p></li><li><p>Double check the block type, condition, and the command syntax. After powering it, check the &#39;Previous Output&#39; again.</p></li><li><p>Just like redstone, command blocks must also be within loaded chunks for them to work. You can use a tickingarea to keep them loaded when players are not nearby. Refer to <a href="https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand" target="_blank" rel="noreferrer">/tickingarea</a> command documentation for more info.</p></li></ul><p>If nothing seems to work, simply break and replace that command block.</p><h2 id="what-you-have-learned" tabindex="-1">What You Have Learned <a class="header-anchor" href="#what-you-have-learned" aria-label="Permalink to &quot;What You Have Learned&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">What you have learned:</p><ul><li>How to obtain a command block in game.</li><li>How the different types of command blocks behave and what they look like.</li><li>What the different command block options are (including conditional, state and delay.)</li><li>How command blocks output data by redstone and chat messages.</li><li>How to properly place command block chains.</li><li>How to resolve &#39;command block not working&#39;</li></ul></div><p>To put what you have learned into practice, try making this simple <a href="/8Crafter-Wiki/andexdb/commands/entity-counter.html">Entity Counter</a> system.</p><blockquote><p>When setting up command block systems following codeblock/mcfunction, always keep in mind that the first command block will be <img src="'+a+'" alt="repeatingCommandBlock"> <strong><code>Unconditional Always Active</code></strong> and the rest of the command blocks will be <img src="'+e+'" alt="chainCommandBlock"> <strong><code>Unconditional Always Active</code></strong>. All set to 0 ticks delay, unless specified otherwise.</p><p><img src="'+n+'" alt="commandBlockChain4"></p></blockquote><p><strong>(Recommended) Read Next: <a href="/8Crafter-Wiki/andexdb/commands/selectors.html">Understanding Selectors</a></strong></p>',47)]))}const T=c(f,[["render",C]]);export{I as __pageData,T as default};
