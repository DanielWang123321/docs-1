import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as p,c as i,d as s,a as e,b as n,w as d,e as o}from"./app-fcUJjNM4.js";const u={},h=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack"},[e("span",null,"Webpack")])],-1),_={href:"https://www.npmjs.com/package/@vuepress/bundler-webpack",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>安装打包工具：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-webpack@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在配置文件中指定打包工具：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/config.ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webpackBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-webpack&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vue<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack"><span>configureWebpack</span></a></h3><ul><li><p>类型： <code>(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) =&gt; WebpackConfiguration | void</code></p></li><li><p>详情：</p><p>用于修改内部的 Webpack 配置。</p><p>该配置项接收一个函数，该函数的第一个参数是 Webpack 配置对象，第二个参数是 <code>isServer</code> 标志位，第三个参数是 <code>isBuild</code> 标志位。</p></li></ul><h3 id="chainwebpack" tabindex="-1"><a class="header-anchor" href="#chainwebpack"><span>chainWebpack</span></a></h3>`,9),k=e("li",null,[e("p",null,[n("类型： "),e("code",null,"(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void")])],-1),v=e("p",null,"详情：",-1),f={href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[n("该配置项接收一个函数，该函数的第一个参数是由 "),e("code",null,"webpack-chain"),n(" 提供的 "),e("code",null,"Config"),n(" 实例，第二个参数是 "),e("code",null,"isServer"),n(" 标志位，第三个参数是 "),e("code",null,"isBuild"),n(" 标志位。")],-1),g=e("h3",{id:"devserversetupmiddlewares",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#devserversetupmiddlewares"},[e("span",null,"devServerSetupMiddlewares")])],-1),w=e("li",null,[e("p",null,[n("类型： "),e("code",null,"(middlewares: Middleware[], devServer: Server) => Middleware[]")])],-1),x=e("li",null,[e("p",null,"详情："),e("p",null,[n("在 Webpack 的 "),e("code",null,"devServer.setupMiddlewares"),n(" 中调用的 Hook 。")]),e("p",null,[n("函数的参数即是 "),e("code",null,"devServer.setupMiddlewares"),n(" 的参数。")])],-1),S=e("p",null,"参考：",-1),y={href:"https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares",target:"_blank",rel:"noopener noreferrer"},W=e("h3",{id:"vue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue"},[e("span",null,"vue")])],-1),B=e("li",null,[e("p",null,[n("类型： "),e("code",null,"VueLoaderOptions")])],-1),C=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"vue-loader"),n(" 的配置项。")])],-1),L=e("p",null,"参考：",-1),O={href:"https://vue-loader.vuejs.org/zh/options.html",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"postcss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#postcss"},[e("span",null,"postcss")])],-1),N=e("li",null,[e("p",null,[n("类型： "),e("code",null,"PostcssLoaderOptions")])],-1),V=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"postcss-loader"),n(" 的配置项。")])],-1),P=e("p",null,"参考：",-1),j={href:"https://github.com/webpack-contrib/postcss-loader#options",target:"_blank",rel:"noopener noreferrer"},z=e("h3",{id:"stylus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylus"},[e("span",null,"stylus")])],-1),E=e("li",null,[e("p",null,[n("类型： "),e("code",null,"StylusLoaderOptions")])],-1),D=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"stylus-loader"),n(" 的配置项。")])],-1),H=e("p",null,"参考：",-1),I={href:"https://github.com/webpack-contrib/stylus-loader#options",target:"_blank",rel:"noopener noreferrer"},R=e("h3",{id:"scss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scss"},[e("span",null,"scss")])],-1),U=e("li",null,[e("p",null,[n("类型： "),e("code",null,"SassLoaderOptions")])],-1),A=e("li",null,[e("p",null,"详情："),e("p",null,[n("针对 "),e("code",null,".scss"),n(" 文件的 "),e("code",null,"sass-loader"),n(" 的配置项。")])],-1),T=e("p",null,"参考：",-1),q={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},F=e("h3",{id:"sass",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sass"},[e("span",null,"sass")])],-1),G=e("li",null,[e("p",null,[n("类型： "),e("code",null,"SassLoaderOptions")])],-1),J=e("li",null,[e("p",null,"详情："),e("p",null,[n("针对 "),e("code",null,".sass"),n(" 文件的 "),e("code",null,"sass-loader"),n(" 的配置项。")])],-1),K=e("p",null,"参考：",-1),Q={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},X=e("h3",{id:"less",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#less"},[e("span",null,"less")])],-1),Y=e("li",null,[e("p",null,[n("类型： "),e("code",null,"LessLoaderOptions")])],-1),Z=e("li",null,[e("p",null,"详情："),e("p",null,[e("code",null,"less-loader"),n(" 的配置项。")])],-1),$=e("p",null,"参考：",-1),ee={href:"https://github.com/webpack-contrib/less-loader#options",target:"_blank",rel:"noopener noreferrer"},ne=o('<h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen"><span>evergreen</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 <code>true</code> 。这将会禁用一些转译过程和 Polyfills ，带来更快的构建速度和更小的文件体积。</p></li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="在修改-base-后引用-public-文件" tabindex="-1"><a class="header-anchor" href="#在修改-base-后引用-public-文件"><span>在修改 <code>base</code> 后引用 Public 文件</span></a></h3>',4),se=e("code",null,"base",-1),le=e("code",null,"base",-1),ae=e("h3",{id:"使用默认主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用默认主题"},[e("span",null,"使用默认主题")])],-1),oe={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},te={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://www.npmjs.com/package/sass-loader",target:"_blank",rel:"noopener noreferrer"};function ce(pe,ie){const t=a("NpmBadge"),l=a("ExternalLinkIcon"),r=a("RouterLink");return p(),i("div",null,[h,s(t,{package:"@vuepress/bundler-webpack"}),e("p",null,[n("Webpack 打包工具是由 "),e("a",_,[n("@vuepress/bundler-webpack"),s(l)]),n(" 包提供的。")]),b,e("ul",null,[k,e("li",null,[v,e("p",null,[n("通过 "),e("a",f,[n("webpack-chain"),s(l)]),n(" 来修改内部的 Webpack 配置。")]),m])]),g,e("ul",null,[w,x,e("li",null,[S,e("ul",null,[e("li",null,[e("a",y,[n("Webpack > Configuration > DevServer > devServer.setupMiddlewares"),s(l)])])])])]),W,e("ul",null,[B,C,e("li",null,[L,e("ul",null,[e("li",null,[e("a",O,[n("vue-loader > 选项参考"),s(l)])])])])]),M,e("ul",null,[N,V,e("li",null,[P,e("ul",null,[e("li",null,[e("a",j,[n("postcss-loader > Options"),s(l)])])])])]),z,e("ul",null,[E,D,e("li",null,[H,e("ul",null,[e("li",null,[e("a",I,[n("stylus-loader > Options"),s(l)])])])])]),R,e("ul",null,[U,A,e("li",null,[T,e("ul",null,[e("li",null,[e("a",q,[n("sass-loader > Options"),s(l)])])])])]),F,e("ul",null,[G,J,e("li",null,[K,e("ul",null,[e("li",null,[e("a",Q,[n("sass-loader > Options"),s(l)])])])])]),X,e("ul",null,[Y,Z,e("li",null,[$,e("ul",null,[e("li",null,[e("a",ee,[n("less-loader > Options"),s(l)])])])])]),ne,e("p",null,[n("与 Vite 不同， Webpack 不会为 Public 文件自动处理 "),se,n("。因此如果你修改了网站的 "),le,n("，建议你在引用 Public 图片文件时使用 "),s(r,{to:"/zh/guide/assets.html#base-helper"},{default:d(()=>[n("Base Helper")]),_:1}),n("。")]),ae,e("p",null,[n("默认主题使用 "),e("a",oe,[n("SASS"),s(l)]),n(" 作为 CSS 预处理器，因此你在使用 Webpack 时（特别是在使用 "),e("a",te,[n("pnpm"),s(l)]),n(" 时）可能需要手动安装 "),e("a",re,[n("sass-loader"),s(l)]),n(" 来确保其正常工作。")])])}const he=c(u,[["render",ce],["__file","webpack.html.vue"]]);export{he as default};
