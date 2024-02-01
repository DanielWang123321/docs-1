import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c,a as t,b as e,d as n,w as a,e as d}from"./app-fcUJjNM4.js";const u={},h=d(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>Page</span></a></h1><p>VuePress is markdown-centered. Each markdown file inside your project is a standalone page.</p><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing"><span>Routing</span></a></h2><p>By default, the route path of a page is determined by the relative path of your markdown file.</p><p>Assuming this is the directory structure of your markdown files:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m=t("code",null,"docs",-1),p=t("code",null,"vuepress dev docs",-1),f=d("<table><thead><tr><th>Relative Path</th><th>Route Path</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/getting-started.md</code></td><td><code>/guide/getting-started.html</code></td></tr></tbody></table>",1),_={class:"hint-container tip"},g=t("p",{class:"hint-container-title"},"Tips",-1),v=t("p",null,[e("By default, both "),t("code",null,"README.md"),e(" and "),t("code",null,"index.md"),e(" would be converted to "),t("code",null,"index.html"),e(" and generate a slash-ending route path. However, it might cause conflicts if you want to keep both of the two files.")],-1),k=t("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),b=t("code",null,"README.md",-1),y=t("code",null,":",-1),w=t("code",null,"+",-1),x={href:"https://router.vuejs.org/guide/essentials/route-matching-syntax.html",target:"_blank",rel:"noopener noreferrer"},E=t("h2",{id:"frontmatter",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#frontmatter"},[t("span",null,"Frontmatter")])],-1),M={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},R=d(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token key atrule">title</span><span class="token punctuation">:</span> Title of this page
<span class="token key atrule">description</span><span class="token punctuation">:</span> Description of this page</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=t("code",null,"lang",-1),V=t("code",null,"title",-1),T=t("code",null,"description",-1),D=t("p",null,"Also, VuePress has built-in support for some frontmatter fields, and your theme may have its own special frontmatter, too.",-1),P={class:"hint-container tip"},C=t("p",{class:"hint-container-title"},"Tips",-1),L={href:"https://ecosystem.vuejs.press/themes/default/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},B=t("h2",{id:"content",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#content"},[t("span",null,"Content")])],-1),F=t("p",null,[e("The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as "),t("code",null,"<template>"),e(" of Vue SFC.")],-1),N={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function S(H,j){const o=r("RouterLink"),s=r("ExternalLinkIcon");return l(),c("div",null,[h,t("p",null,[e("Take the "),m,e(" directory as your "),n(o,{to:"/reference/cli.html"},{default:a(()=>[e("sourceDir")]),_:1}),e(", e.g. you are running "),p,e(" command. Then the route paths of your markdown files would be:")]),f,t("div",_,[g,v,t("p",null,[e("In such case, you can set the "),n(o,{to:"/reference/config.html#pagepatterns"},{default:a(()=>[e("pagePatterns")]),_:1}),e(" to avoid one of them being processed by VuePress, e.g. use "),k,e(" to exclude all "),b,e(" files.")]),t("p",null,[e("Also, some symbols like "),y,e(" and "),w,e(" may have special meanings for vue-router, so you should avoid using them, see "),t("a",x,[e("vue-router docs"),n(s)]),e(" for more details.")])]),E,t("p",null,[e("A markdown file could contain a "),t("a",M,[e("YAML"),n(s)]),e(" frontmatter. The frontmatter must be at the top of the Markdown file and must be wrapped with a couple of triple-dashed lines. Here is a basic example:")]),R,t("p",null,[e("You must have noticed that those fields are similar with the "),n(o,{to:"/guide/configuration.html#site-config"},{default:a(()=>[e("Site Config")]),_:1}),e(" in the "),n(o,{to:"/guide/configuration.html#config-file"},{default:a(()=>[e("Config File")]),_:1}),e(". You can override "),A,e(", "),V,e(", "),T,e(", etc., of current page via frontmatter. So you can take frontmatter as page scope config.")]),D,t("div",P,[C,t("p",null,[e("Check out the "),n(o,{to:"/reference/frontmatter.html"},{default:a(()=>[e("Frontmatter Reference")]),_:1}),e(" for a full list of VuePress built-in frontmatter.")]),t("p",null,[e("Check out the "),t("a",L,[e("Default Theme > Frontmatter Reference"),n(s)]),e(" for the frontmatter of default theme.")])]),B,F,t("p",null,[e("With the power of "),t("a",N,[e("markdown-it"),n(s)]),e(" and Vue template syntax, the basic Markdown can be extended a lot. Next, check out the "),n(o,{to:"/guide/markdown.html"},{default:a(()=>[e("Markdown")]),_:1}),e(" guide for all the extensions of Markdown in VuePress.")])])}const U=i(u,[["render",S],["__file","page.html.vue"]]);export{U as default};
