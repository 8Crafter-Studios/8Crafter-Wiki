import{_ as r,k as u,a6 as s,A as t,l as i,J as n,I as c,E as a,j as p}from"./chunks/framework.B-wRDWk2.js";const d="/main/assets/images/contribute/setting_up_software/vscode/vsc_download.png",h="/main/assets/images/contribute/setting_up_software/ghdesktop/ghd_download.png",g="/main/assets/images/contribute/setting_up_software/ghdesktop/ghd_login.png",m="/main/assets/images/contribute/setting_up_software/ghdesktop/ghd_configure.png",b="/main/assets/images/contribute/setting_up_software/nodejs/njs_download.png",k="/main/assets/images/contribute/setting_up_local/setup_fork.png",y="/main/assets/images/contribute/setting_up_local/setup_clone.png",w="/main/assets/images/contribute/setting_up_local/setup_clone_2.png",_="/main/assets/images/contribute/setting_up_local/setup_vsc.png",f="/main/assets/images/contribute/committing_changes/committing.png",v="/main/assets/images/contribute/committing_changes/committing_push.png",q="/main/assets/images/contribute/creating_pr/pr.png",C="/main/assets/images/contribute/creating_pr/pr_2.png",S="/main/assets/images/contribute/updating_local/updating.png",T="/main/assets/images/contribute/updating_local/updating_pull.png",I="/main/assets/images/contribute/troubleshooting/merge/merge_merge.png",P="/main/assets/images/contribute/troubleshooting/merge/merge_branch.png",G="/main/assets/images/contribute/troubleshooting/merge/merge_open.png",H="/main/assets/images/contribute/troubleshooting/merge/merge_accept.png",x="/main/assets/images/contribute/troubleshooting/merge/merge_continue.png",F=JSON.parse('{"title":"How to Contribute","description":"Make your first contribution!","frontmatter":{"title":"How to Contribute","hidden":true,"mentions":["TheItsNameless","QuazChick"],"description":"Make your first contribution!"},"headers":[{"level":2,"title":"About This Guide","slug":"about-this-guide","link":"#about-this-guide","children":[]},{"level":2,"title":"Steps to Edit the Wiki","slug":"steps-to-edit-the-wiki","link":"#steps-to-edit-the-wiki","children":[]},{"level":2,"title":"Setting Up the Software","slug":"setting-up-the-software","link":"#setting-up-the-software","children":[{"level":3,"title":"Visual Studio Code","slug":"visual-studio-code","link":"#visual-studio-code","children":[{"level":4,"title":"Installation","slug":"installation","link":"#installation","children":[]}]},{"level":3,"title":"GitHub Desktop","slug":"github-desktop","link":"#github-desktop","children":[{"level":4,"title":"Installation","slug":"installation-1","link":"#installation-1","children":[]}]},{"level":3,"title":"NodeJS","slug":"nodejs","link":"#nodejs","children":[{"level":4,"title":"Installation","slug":"installation-2","link":"#installation-2","children":[]}]}]},{"level":2,"title":"Set Up Your Local Environment","slug":"set-up-your-local-environment","link":"#set-up-your-local-environment","children":[]},{"level":2,"title":"Committing Your Changes","slug":"committing-your-changes","link":"#committing-your-changes","children":[]},{"level":2,"title":"Creating a Pull Request","slug":"creating-a-pull-request","link":"#creating-a-pull-request","children":[]},{"level":2,"title":"Updating Local Environment","slug":"updating-local-environment","link":"#updating-local-environment","children":[{"level":3,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[{"level":4,"title":"Fixing It","slug":"fixing-it","link":"#fixing-it","children":[]}]}]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"relativePath":"contribute-how-to.md","filePath":"contribute-how-to.md"}'),D={name:"contribute-how-to.md"};function N(A,e,j,V,R,Y){const o=a("WikiImage"),l=a("Button");return p(),u("div",null,[e[1]||(e[1]=s('<h2 id="about-this-guide" tabindex="-1">About This Guide <a class="header-anchor" href="#about-this-guide" aria-label="Permalink to &quot;About This Guide&quot;">​</a></h2><p>This guide will walk you through how to get started editing the wiki. While it is possible to edit the wiki &quot;in-place&quot; on the github website, this guide will instead teach you the proper technique. This is a valuable and transferable skill, and will set you up for additional knowledge beyond just editing the wiki.</p><p>This article will teach you how to use GitHub Desktop, the easiest way to manage your local Repositories. Its possible to do this without GitHub Desktop just by using Git, but this is more advanced than just using GitHub Desktop and we won&#39;t be covering this in this guide.</p><p>If you already know some of the steps we cover in this guide, feel free to use the Table of Contents on the right side to skip to the sections you don&#39;t know!</p><p>And if you want to learn more about our fancy styling-features, continue with our <a href="/main/contribute-style.html">Contribute-Style-Guide</a>!</p><h2 id="steps-to-edit-the-wiki" tabindex="-1">Steps to Edit the Wiki <a class="header-anchor" href="#steps-to-edit-the-wiki" aria-label="Permalink to &quot;Steps to Edit the Wiki&quot;">​</a></h2><p>To edit the wiki, there are 5 major steps that you need to follow (downloading and setting up the software is just done the first time):</p><ol><li>Fork the Repository</li><li>Clone the Repository</li><li>Edit the Wiki</li><li>Commit your local changes and sync with GitHub</li><li>Create a Pull Request</li></ol><p>If you see this the first time, it might look a little overwhelming, but don&#39;t worry! Its very easy and we guide you through this step by step.</p><h2 id="setting-up-the-software" tabindex="-1">Setting Up the Software <a class="header-anchor" href="#setting-up-the-software" aria-label="Permalink to &quot;Setting Up the Software&quot;">​</a></h2><p>To edit our wiki, you need to download and install the following software:</p><ul><li>GitHub Desktop</li><li>NodeJS</li><li>Visual Studio Code</li></ul><p>If you want to edit the wiki more frequently, you might want to start using Git, as its more powerful than GitHub Desktop. But don&#39;t worry, GitHub Desktop is enough for us!</p><h3 id="visual-studio-code" tabindex="-1">Visual Studio Code <a class="header-anchor" href="#visual-studio-code" aria-label="Permalink to &quot;Visual Studio Code&quot;">​</a></h3><p><a href="https://code.visualstudio.com/Download" target="_blank" rel="noreferrer">Visual Studio Code (VSCode)</a> is a great environment to edit all your files, code something, etc. You can use other editors too, but in this tutorial we will guide you trough the installation of VSCode.</p><p><img src="'+d+'" alt=""></p><h4 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h4><p>Go to your folder where you saved the .exe and double-click it. The setup window will open. You can click on <code class="shiki"><span>next</span></code> most of the time, just make sure on the &quot;additional tasks&quot; window, that <code class="shiki"><span>add to PATH</span></code> is selected.</p><p>On the last page, just click <code class="shiki"><span>install</span></code>.</p><p>After the installation has finished, just click <code class="shiki"><span>Finish</span></code>. VSCode should now start. If it doesn&#39;t start, open it manually.</p><p>Now you can customize the look of your VSCode. If you are done or don&#39;t want to customize it, click &quot;Next Section&quot;.</p>',21)),t(o,{src:"/assets/images/contribute/setting_up_software/vscode/vsc_look.png",width:"210"}),e[2]||(e[2]=i("p",null,'Now you can learn some fundamentals for VSCode. As before, if you are done, just click "Next Section".',-1)),t(o,{src:"/assets/images/contribute/setting_up_software/vscode/vsc_fundamentals.png",width:"210"}),e[3]||(e[3]=i("p",null,'On the last page, as before, click "Mark Done" if you are ready.',-1)),t(o,{src:"/assets/images/contribute/setting_up_software/vscode/vsc_productivity.png",width:"210"}),e[4]||(e[4]=s('<p>We are finished with the installation of VSCode. You can close it for now.</p><h3 id="github-desktop" tabindex="-1">GitHub Desktop <a class="header-anchor" href="#github-desktop" aria-label="Permalink to &quot;GitHub Desktop&quot;">​</a></h3><p><a href="https://desktop.github.com" target="_blank" rel="noreferrer">GitHub Desktop</a> is used to download GitHub Repositories, so you can edit them locally. Its possible to do this with Git, a command line tool, instead, but this is a bit more advanced and won&#39;t be covered in this tutorial.</p><p><img src="'+h+'" alt=""></p><h4 id="installation-1" tabindex="-1">Installation <a class="header-anchor" href="#installation-1" aria-label="Permalink to &quot;Installation&quot;">​</a></h4><p>As before, go to your folder where you saved the .exe and double-click it. The Setup will open and automatically install GitHub Desktop. When its done, GitHub Desktop will automatically start.</p>',6)),t(o,{src:"/assets/images/contribute/setting_up_software/ghdesktop/ghd_install.png",width:"210"}),e[5]||(e[5]=s('<p>Next it asks you to sign in. If you already have a GitHub Account, just click <code class="shiki"><span>Sign in to GitHub.com</span></code>. In the browser tab, just sign in to your account. If you don&#39;t have a GitHub Account, click on <code class="shiki"><span>Create your free account</span></code> and create an account. Then continue normally.</p><p><img src="'+g+'" alt=""></p><p>Now in GitHub Desktop, don&#39;t change anything and click &quot;Finish&quot;.</p><p><img src="'+m+'" alt=""></p><p>For now, you can close GitHub Desktop.</p><h3 id="nodejs" tabindex="-1">NodeJS <a class="header-anchor" href="#nodejs" aria-label="Permalink to &quot;NodeJS&quot;">​</a></h3><p>With <a href="https://www.nodejs.org" target="_blank" rel="noreferrer">NodeJS</a> we can view the wiki locally, as it would appear on the web. Its great to get typos or errors before you push it and we get an error on merging it.</p><p><img src="'+b+'" alt=""></p><h4 id="installation-2" tabindex="-1">Installation <a class="header-anchor" href="#installation-2" aria-label="Permalink to &quot;Installation&quot;">​</a></h4><p>Now, again, just go to your download folder and double-click the nodejs setup file. For our setup, you don&#39;t need to change anything. Just make sure you don&#39;t add <code class="shiki"><span>Tools for native modules</span></code>, as we don&#39;t need them. On the last page, just click <code class="shiki"><span>Install</span></code>. Wait for the installation to finish and click <code class="shiki"><span>Finish</span></code>.</p><h2 id="set-up-your-local-environment" tabindex="-1">Set Up Your Local Environment <a class="header-anchor" href="#set-up-your-local-environment" aria-label="Permalink to &quot;Set Up Your Local Environment&quot;">​</a></h2><p>Now as we have installed all of our necessary programs, we can start to contribute to the wiki. Well, at first we have to setup our local working environment. Don&#39;t worry, its very easy. Just follow the steps below:</p><p>Open our <a href="https://github.com/Bedrock-OSS/bedrock-wiki" target="_blank" rel="noreferrer">GitHub Repository</a> and click on <code class="shiki"><span>Fork</span></code>. If you already forked it, no problem! Just continue below.</p><p><img src="'+k+'" alt=""></p><p>Open GitHub Desktop and click on <code class="shiki"><span>Clone a repository from the Internet</span></code>.</p><p><img src="'+y+'" alt=""></p><p>Now select your fork and click on &quot;Clone&quot;. Your repository will automatically be cloned.</p><p><img src="'+w+'" alt=""></p><p>After that, you will see an overview over your clone. To work on it, just click on &quot;Open in Visual Studio Code&quot;. VSCode will automatically open with our wiki. If VSCode asks you if it should trust the folder, just click on <code class="shiki"><span>Yes, I trust the authors</span></code>.</p><p><img src="'+_+'" alt=""></p><p>Now you have successfully cloned the wiki to your local device and you can edit all files!</p><h2 id="committing-your-changes" tabindex="-1">Committing Your Changes <a class="header-anchor" href="#committing-your-changes" aria-label="Permalink to &quot;Committing Your Changes&quot;">​</a></h2><p>Once you finished working on the wiki, you can now commit and push your changes directly to our repository!</p><p>Switch to GitHub Desktop and you should see your changes. If you can&#39;t see them, make sure you saved your files and opened the right repository in GitHub Desktop.</p><p>Once you confirmed your changes in GitHub Desktop, you can give your commit a name and a description (but both aren&#39;t necessary) and click on <code class="shiki"><span>commit to main</span></code>.</p><p><img src="'+f+'" alt=""></p><p>After you committed your changes, you need to push your local clone to GitHub. Just click on <code class="shiki"><span>Push commits to the origin remote</span></code>.</p><p><img src="'+v+'" alt=""></p><p>GitHub will now send your local clone to their servers.</p><h2 id="creating-a-pull-request" tabindex="-1">Creating a Pull Request <a class="header-anchor" href="#creating-a-pull-request" aria-label="Permalink to &quot;Creating a Pull Request&quot;">​</a></h2><p>Now that GitHub has your edits on their servers, you need to create a <code class="shiki"><span>&quot;Pull Request&quot;</span></code> (PR), so that we can merge your changes.</p><p>There are many ways to do this. For now, just click on <code class="shiki"><span>Create Pull Request</span></code> in GitHub Desktop.</p><p><img src="'+q+'" alt=""></p><p>GitHub Desktop will open your PR in your browser. You can edit your PR, but you don&#39;t need to. Everything should already be correct and enough for us to merge it. Just click on <code class="shiki"><span>Create Pull Request</span></code>.</p><p><img src="'+C+'" alt=""></p><p>You are done! Now its our turn to merge your changes in our wiki!</p><h2 id="updating-local-environment" tabindex="-1">Updating Local Environment <a class="header-anchor" href="#updating-local-environment" aria-label="Permalink to &quot;Updating Local Environment&quot;">​</a></h2><p>Since you are not the only person who works on the wiki, there might be some changes that you currently don&#39;t have in your local clone. To update your local clone, you need to update your fork. Don&#39;t worry, its really easy!</p><p>With GitHub opened in your browser, open your fork. You will see a field that shows you, that you are out of date. Just click on <code class="shiki"><span>Fetch upstream</span></code> and then on <code class="shiki"><span>Fetch and merge</span></code>.</p><p><img src="'+S+'" alt=""></p><p>Now in GitHub Desktop you need to pull the origin by clicking on <code class="shiki"><span>Pull Origin</span></code>. Your local clone should automatically update.</p><p><img src="'+T+'" alt=""></p><p>Your local clone is now up-to-date!</p><h3 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h3><p>This process has to be done every time someone else updates our wiki. If you forget to to that, you might get some problems, like we can&#39;t automatically merge your PR. (You see this, when you try to open a PR)</p><p><img src="'+I+'" alt=""></p><p>If this happens, don&#39;t worry. You can easily fix this problem.</p><h4 id="fixing-it" tabindex="-1">Fixing It <a class="header-anchor" href="#fixing-it" aria-label="Permalink to &quot;Fixing It&quot;">​</a></h4><p>Update your fork like we did in the previous step. After that, you can&#39;t just pull the changes to your local clone in GitHub Desktop, because this would cause problems. Instead, click on <code class="shiki"><span>Current branch</span></code>.</p><p><img src="'+P+'" alt=""></p><p>Now click on <code class="shiki"><span>Choose a branch to merge into ...</span></code>.</p>',51)),t(o,{src:"/assets/images/contribute/troubleshooting/merge/merge_choose_branch.png",width:"250"}),e[6]||(e[6]=i("p",null,[n("Select the default branch (it should already be selected) and click on "),i("code",{class:"shiki"},[i("span",null,"Create a merge commit")]),n(".")],-1)),t(o,{src:"/assets/images/contribute/troubleshooting/merge/merge_commit.png",width:"260"}),e[7]||(e[7]=s('<p>Now open in VSCode.</p><p><img src="'+G+'" alt=""></p><p>Click on <code class="shiki"><span>Accept Current Change</span></code>, because you want your changes to be updated, not someone elses. This step has to be done for every problem that exists. If you don&#39;t do this for every problem, we can&#39;t merge your PR.</p><p><img src="'+H+'" alt=""></p><p>Otherwise, you can <code class="shiki"><span>Accept Incoming Change</span></code> to accept the changes someone else made. Then save and return to GitHub Desktop. There you just click on <code class="shiki"><span>continue merge</span></code>.</p><p><img src="'+x+'" alt=""></p><p>And now this problem is solved! You can continue safely, commit to your branch and create a PR.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Now you have all the software installed and learned all the skills you need to edit our wiki! If you wan&#39;t to learn more about styling your articles, please read our guide on</p>',9)),t(l,{link:"/contribute-style"},{default:c(()=>e[0]||(e[0]=[n("How to edit pages on our wiki")])),_:1})])}const J=r(D,[["render",N]]);export{F as __pageData,J as default};
