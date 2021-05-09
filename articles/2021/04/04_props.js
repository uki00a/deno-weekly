import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/04/04.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/04/04.html",
    'title': "2021/03/29〜2021/04/04の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>2021/03/29〜2021/04/04の最新情報</h1>\n<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v183%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.8.3がリリース</a></li><li><a href="#deno_std-v0920%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.92.0がリリース</a></li><li><a href="#deno-deploy%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">Deno Deployが公開された</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#snel---deno%E3%81%A7svelte%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB">Snel - DenoでSvelteアプリを開発するためのツール</a></li><li><a href="#sift---deno-deploy%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA">Sift - Deno Deployのルーティングライブラリ</a></li><li><a href="#deno-dom---deno%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8Bdom-api%E3%81%AE%E5%AE%9F%E8%A3%85">deno-dom - Denoで利用できるDOM APIの実装</a></li><li><a href="#trex-v160%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Trex v1.6.0がリリース</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v183%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.8.3">Deno v1.8.3がリリース</a><a class="anchor" href="#deno-v183%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.3がリリースされました。このリリースでは、<code>deno lsp</code>への機能の追加やバグ修正などが行われています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>deno lsp</code>でimportの補完がサポートされた</li>\n<li><code>deno lsp</code>で<code>textDocument/selectionRange</code>が実装された</li>\n<li><code>WebSocket#close</code>ですでに閉じているコネクションを再び閉じようとしたときに、例外が投げられないように修正された</li>\n<li><code>AbortController.abort()</code>が追加された</li>\n<li>TypeScriptのlibとして<code>dom.asynciterable</code>が追加された(Denoのいずれかのバージョンで誤って削除されてしまったようです)</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno/releases/tag/v1.8.3">https://github.com/denoland/deno/releases/tag/v1.8.3</a></p>\n<h3 id="deno_std-v0920%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.92.0">deno_std v0.92.0がリリース</a><a class="anchor" href="#deno_std-v0920%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/denoland/deno_std">deno_std</a>のv0.92.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>io/bufio</code>: Deno Deployに対応した</li>\n<li><code>node/fs</code>: <code>symlink</code>と<code>symlinkSync</code>が実装された</li>\n<li><code>node/util</code>: <code>format</code>関数が実装された</li>\n<li><code>io</code>: <code>io/buffer</code>及び<code>io/util</code>が追加された (Deno v2.0に向けて、Deno.Buffer/readAll/readAllSync/writeAll/writeAllSyncをDeno名前空間からstdへ移行することが目的のようです)</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.92.0">https://github.com/denoland/deno_std/releases/tag/0.92.0</a></p>\n<h3 id="deno-deploy%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F"><a href="https://deno.com/deploy/docs">Deno Deployが公開された</a><a class="anchor" href="#deno-deploy%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">§</a></h3>\n<p>Deno Deployが公開されました。</p>\n<p>Deno DeployはCDN Edge上でTypeScriptやWebAssemblyなどを動作させることができるサービスです。Cloudflare WorkersのAPIと互換性があります。</p>\n<hr>\n<ul>\n<li><a href="https://deno.com/deploy/docs">https://deno.com/deploy/docs</a></li>\n</ul>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="snel---deno%E3%81%A7svelte%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/crewdevio/Snel">Snel</a> - DenoでSvelteアプリを開発するためのツール<a class="anchor" href="#snel---deno%E3%81%A7svelte%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p><a href="https://github.com/crewdevio/Snel">Snel</a>はDenoでSvelteアプリを開発するためのツール/フレームワークです。</p>\n<p><code>.svelte</code>ファイルをJavaScriptファイルへコンパイルしたり、HMRを搭載したdevサーバなどが提供されています。</p>\n<p>将来的にはSSRやSSGなどの機能も提供される予定のようです。</p>\n<hr>\n<p><a href="https://github.com/crewdevio/Snel">https://github.com/crewdevio/Snel</a></p>\n<h3 id="sift---deno-deploy%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA"><a href="https://github.com/satyarohith/sift">Sift</a> - Deno Deployのルーティングライブラリ<a class="anchor" href="#sift---deno-deploy%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA">§</a></h3>\n<p><a href="https://github.com/satyarohith/sift">Sift</a>はDeno Deployのルーティングライブラリです。</p>\n<p><a href="https://github.com/pillarjs/path-to-regexp">path-to-regexp</a>でサポートされている形式で、ルーティングを定義することができます。</p>\n<p>他にも、静的ファイルの配信やJSXのレンダリングなどがサポートされています。</p>\n<hr>\n<p><a href="https://github.com/satyarohith/sift">https://github.com/satyarohith/sift</a></p>\n<h3 id="deno-dom---deno%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8Bdom-api%E3%81%AE%E5%AE%9F%E8%A3%85"><a href="https://github.com/b-fuze/deno-dom">deno-dom</a> - Denoで利用できるDOM APIの実装<a class="anchor" href="#deno-dom---deno%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8Bdom-api%E3%81%AE%E5%AE%9F%E8%A3%85">§</a></h3>\n<p><a href="https://github.com/b-fuze/deno-dom">deno-dom</a>は、Denoから利用することのできるDOM APIの実装を提供しています。</p>\n<p>WebAssembly及びDeno Pluginの2種類のバックエンドを提供しており、用途などに応じて使い分けることができます。(Deno Pluginベースのバックエンドの方がパフォーマンスが高いようですが、まだunstableであるDeno Pluginに依存しているなどの欠点もあります)</p>\n<hr>\n<p><a href="https://github.com/b-fuze/deno-dom">https://github.com/b-fuze/deno-dom</a></p>\n<h3 id="trex-v160%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/crewdevio/Trex/releases/tag/v1.6.0">Trex v1.6.0がリリース</a><a class="anchor" href="#trex-v160%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Denoのモジュールマネージャである<a href="https://github.com/crewdevio/Tre">Trex</a>のv1.6.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>trex setup</code>コマンドの削除</li>\n<li><code>trex install</code>コマンドでライフサイクルフック(<code>preinstall</code>/<code>postinstall</code>)がサポートされた</li>\n</ul>\n<hr>\n<p><a href="https://github.com/crewdevio/Trex/releases/tag/v1.6.0">https://github.com/crewdevio/Trex/releases/tag/v1.6.0</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "G-MK2K2MRMBF" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" }),
            React.createElement("meta", { content: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png", property: "og:image" }),
            React.createElement("meta", { content: "summary", name: "twitter:card" }),
            React.createElement("meta", { content: "@uki00a", name: "twitter:site" }),
            React.createElement("meta", { content: "@uki00a", name: "twitter:creator" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "2021/03/29\u301C2021/04/04\u306E\u6700\u65B0\u60C5\u5831"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v183%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.8.3がリリース</a></li><li><a href="#deno_std-v0920%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.92.0がリリース</a></li><li><a href="#deno-deploy%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">Deno Deployが公開された</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#snel---deno%E3%81%A7svelte%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB">Snel - DenoでSvelteアプリを開発するためのツール</a></li><li><a href="#sift---deno-deploy%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA">Sift - Deno Deployのルーティングライブラリ</a></li><li><a href="#deno-dom---deno%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8Bdom-api%E3%81%AE%E5%AE%9F%E8%A3%85">deno-dom - Denoで利用できるDOM APIの実装</a></li><li><a href="#trex-v160%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Trex v1.6.0がリリース</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v183%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.8.3">Deno v1.8.3がリリース</a><a class="anchor" href="#deno-v183%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.3がリリースされました。このリリースでは、<code>deno lsp</code>への機能の追加やバグ修正などが行われています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>deno lsp</code>でimportの補完がサポートされた</li>\n<li><code>deno lsp</code>で<code>textDocument/selectionRange</code>が実装された</li>\n<li><code>WebSocket#close</code>ですでに閉じているコネクションを再び閉じようとしたときに、例外が投げられないように修正された</li>\n<li><code>AbortController.abort()</code>が追加された</li>\n<li>TypeScriptのlibとして<code>dom.asynciterable</code>が追加された(Denoのいずれかのバージョンで誤って削除されてしまったようです)</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno/releases/tag/v1.8.3">https://github.com/denoland/deno/releases/tag/v1.8.3</a></p>\n<h3 id="deno_std-v0920%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.92.0">deno_std v0.92.0がリリース</a><a class="anchor" href="#deno_std-v0920%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/denoland/deno_std">deno_std</a>のv0.92.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>io/bufio</code>: Deno Deployに対応した</li>\n<li><code>node/fs</code>: <code>symlink</code>と<code>symlinkSync</code>が実装された</li>\n<li><code>node/util</code>: <code>format</code>関数が実装された</li>\n<li><code>io</code>: <code>io/buffer</code>及び<code>io/util</code>が追加された (Deno v2.0に向けて、Deno.Buffer/readAll/readAllSync/writeAll/writeAllSyncをDeno名前空間からstdへ移行することが目的のようです)</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.92.0">https://github.com/denoland/deno_std/releases/tag/0.92.0</a></p>\n<h3 id="deno-deploy%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F"><a href="https://deno.com/deploy/docs">Deno Deployが公開された</a><a class="anchor" href="#deno-deploy%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">§</a></h3>\n<p>Deno Deployが公開されました。</p>\n<p>Deno DeployはCDN Edge上でTypeScriptやWebAssemblyなどを動作させることができるサービスです。Cloudflare WorkersのAPIと互換性があります。</p>\n<hr>\n<ul>\n<li><a href="https://deno.com/deploy/docs">https://deno.com/deploy/docs</a></li>\n</ul>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="snel---deno%E3%81%A7svelte%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/crewdevio/Snel">Snel</a> - DenoでSvelteアプリを開発するためのツール<a class="anchor" href="#snel---deno%E3%81%A7svelte%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p><a href="https://github.com/crewdevio/Snel">Snel</a>はDenoでSvelteアプリを開発するためのツール/フレームワークです。</p>\n<p><code>.svelte</code>ファイルをJavaScriptファイルへコンパイルしたり、HMRを搭載したdevサーバなどが提供されています。</p>\n<p>将来的にはSSRやSSGなどの機能も提供される予定のようです。</p>\n<hr>\n<p><a href="https://github.com/crewdevio/Snel">https://github.com/crewdevio/Snel</a></p>\n<h3 id="sift---deno-deploy%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA"><a href="https://github.com/satyarohith/sift">Sift</a> - Deno Deployのルーティングライブラリ<a class="anchor" href="#sift---deno-deploy%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA">§</a></h3>\n<p><a href="https://github.com/satyarohith/sift">Sift</a>はDeno Deployのルーティングライブラリです。</p>\n<p><a href="https://github.com/pillarjs/path-to-regexp">path-to-regexp</a>でサポートされている形式で、ルーティングを定義することができます。</p>\n<p>他にも、静的ファイルの配信やJSXのレンダリングなどがサポートされています。</p>\n<hr>\n<p><a href="https://github.com/satyarohith/sift">https://github.com/satyarohith/sift</a></p>\n<h3 id="deno-dom---deno%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8Bdom-api%E3%81%AE%E5%AE%9F%E8%A3%85"><a href="https://github.com/b-fuze/deno-dom">deno-dom</a> - Denoで利用できるDOM APIの実装<a class="anchor" href="#deno-dom---deno%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8Bdom-api%E3%81%AE%E5%AE%9F%E8%A3%85">§</a></h3>\n<p><a href="https://github.com/b-fuze/deno-dom">deno-dom</a>は、Denoから利用することのできるDOM APIの実装を提供しています。</p>\n<p>WebAssembly及びDeno Pluginの2種類のバックエンドを提供しており、用途などに応じて使い分けることができます。(Deno Pluginベースのバックエンドの方がパフォーマンスが高いようですが、まだunstableであるDeno Pluginに依存しているなどの欠点もあります)</p>\n<hr>\n<p><a href="https://github.com/b-fuze/deno-dom">https://github.com/b-fuze/deno-dom</a></p>\n<h3 id="trex-v160%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/crewdevio/Trex/releases/tag/v1.6.0">Trex v1.6.0がリリース</a><a class="anchor" href="#trex-v160%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Denoのモジュールマネージャである<a href="https://github.com/crewdevio/Tre">Trex</a>のv1.6.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>trex setup</code>コマンドの削除</li>\n<li><code>trex install</code>コマンドでライフサイクルフック(<code>preinstall</code>/<code>postinstall</code>)がサポートされた</li>\n</ul>\n<hr>\n<p><a href="https://github.com/crewdevio/Trex/releases/tag/v1.6.0">https://github.com/crewdevio/Trex/releases/tag/v1.6.0</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "Deno\u672C\u4F53\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-v183%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Deno v1.8.3\u304C\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno_std-v0920%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.92.0\u304C\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-deploy%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F" }, "Deno Deploy\u304C\u516C\u958B\u3055\u308C\u305F")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E2\u30B8\u30E5\u30FC\u30EB\u306A\u3069\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#snel---deno%E3%81%A7svelte%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB" }, "Snel - Deno\u3067Svelte\u30A2\u30D7\u30EA\u3092\u958B\u767A\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#sift---deno-deploy%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA" }, "Sift - Deno Deploy\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30E9\u30A4\u30D6\u30E9\u30EA")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-dom---deno%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8Bdom-api%E3%81%AE%E5%AE%9F%E8%A3%85" }, "deno-dom - Deno\u3067\u5229\u7528\u3067\u304D\u308BDOM API\u306E\u5B9F\u88C5")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#trex-v160%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Trex v1.6.0\u304C\u30EA\u30EA\u30FC\u30B9")))))),
    'author': "uki00a",
    'contributors': [
        "uki00a"
    ],
    'date': "2021-05-09T10:23:57.000Z",
    'updated': null,
    'excerpt': " 1. Deno本体の最新情報 1. Deno v1.8.3がリリース 2. deno_std v0.92.0がリリース 3. Deno Deployが公開された 2. サードパーティモジュールなどの最新情報 1. Snel - DenoでSvelteアプリを開発するためのツール 2. Sift - De...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std",
        "Deno Deploy",
        "Snel",
        "Sift",
        "deno-dom",
        "Trex"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/05/09.md",
                "title": "2021/05/03〜2021/05/09の最新情報",
                "link": "articles/2021/05/09.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "alosaur",
                    "book",
                    "Oak"
                ],
                "excerpt": " 1. alosaur v0.31.0がリリース 2. alosaur-lite 3. Oak v7.4.0がリリース 4. Effective Deno alosaur v0.31.0がリリース DenoのWebフレームワークであるalosaurのv0.31.0がリリースされました。 変更点: - ContextがHttpConte..."
            },
            {
                "pagePath": "articles/2021/05/02.md",
                "title": "2021/04/26〜2021/05/02の最新情報",
                "link": "articles/2021/05/02.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "gql",
                    "deno-libs/tinyhttp",
                    "crux.land",
                    "terraform-deploy-provider"
                ],
                "excerpt": " 1. gql - DenoのGraphQLサーバモジュール 2. deno-libs/tinyhttp - tinyhttpのDenoポート 3. crux.land 4. terraform-deploy-provider - Deno Deploy向けのTerraformプロパイダ gql - DenoのGraphQLサーバモジュール gqlはDen..."
            },
            {
                "pagePath": "articles/2021/04/25.md",
                "title": "2021/04/19〜2021/04/25の最新情報",
                "link": "articles/2021/04/25.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "deno-puppeteer",
                    "deno-postgres",
                    "land"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.9.1/1.9.2のリリース 2. deno_std v0.94.0/0.95.0のリリース 2. サードパーティモジュールなどの最新情報 1. deno-puppeteer v9.0.0のリリース 2. deno-postgres v0.11.0/v0.11.1がリリース..."
            },
            {
                "pagePath": "articles/2021/04/04.md",
                "title": "2021/03/29〜2021/04/04の最新情報",
                "link": "articles/2021/04/04.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Deno Deploy",
                    "Snel",
                    "Sift",
                    "deno-dom",
                    "Trex"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.3がリリース 2. deno_std v0.92.0がリリース 3. Deno Deployが公開された 2. サードパーティモジュールなどの最新情報 1. Snel - DenoでSvelteアプリを開発するためのツール 2. Sift - De..."
            },
            {
                "pagePath": "articles/2021/04/18.md",
                "title": "2021/04/12〜2021/04/18の最新情報",
                "link": "articles/2021/04/18.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Oak",
                    "Servest",
                    "esbuild"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.9.0がリリース 2. deno_std v0.93.0がリリース 2. サードパーティモジュールなどの最新情報 1. Oak v7.0.0及びv7.1.0のリリース 2. Servest v1.3.0がリリース 3. esbuildがDenoへの実験的サ..."
            },
            {
                "pagePath": "articles/2021/04/11.md",
                "title": "2021/04/05〜2021/04/11の最新情報",
                "link": "articles/2021/04/11.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "denoland/setup-deno",
                    "deno-postgres",
                    "rollup-plugin-deno"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.9.0のリリースについて 2. サードパーティモジュールなどの最新情報 1. denoland/setup-deno 2. deno-postgres v0.9.0及びv0.10.0がリリース 3. rollup-plugin-deno Deno本体の最新情報 Den..."
            },
            {
                "pagePath": "articles/2021/01/10.md",
                "title": "2021/01/04〜2021/01/10の最新情報",
                "link": "articles/2021/01/10.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "vno",
                    "Lume"
                ],
                "excerpt": " 1. vno 2. Lume 3. bench - DenoとNode.jsフレームワークのベンチマーク vno vnoはDenoでVue.jsを用いた開発を行うためのビルドツールです。 現時点では以下のような機能が提供されているようです。 - シングルファイルコンポ..."
            },
            {
                "pagePath": "articles/2021/01/17.md",
                "title": "2021/01/11〜2021/01/17の最新情報",
                "link": "articles/2021/01/17.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "excerpt": " 1. Deno in 2020 2. Obsidian - GraphQLクライアント/サーバモジュール 3. Sinco - ブラウザのオートメーション・テストツール Deno in 2020 Denoの公式ブログポストにて、Deno in 2020という記事が公開されました。 この記事..."
            },
            {
                "pagePath": "articles/2021/01/31.md",
                "title": "2021/01/25〜2021/01/31の最新情報",
                "link": "articles/2021/01/31.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno-postgres"
                ],
                "excerpt": " 1. Deno v1.7.1がリリース 2. deno-postgresのv0.5.0/v0.6.0がリリース 3. Harmony - Discord APIライブラリ Deno v1.7.1がリリース Denoのv1.7.1がリリースされました。 このリリースに合わせて、stdのv0.85.0もリリースされ..."
            },
            {
                "pagePath": "articles/2021/01/24.md",
                "title": "2021/01/18〜2021/01/24の最新情報",
                "link": "articles/2021/01/24.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno-rollup"
                ],
                "excerpt": " 1. Deno v1.7.0がリリース 2. deno-rollup - RollupのDenoポート 3. code-block-writer - JavaScript/TypeScriptコードの生成をサポートするモジュール Deno v1.7.0がリリース Deno v1.7.0がリリースされました。 以下は変更点..."
            },
            {
                "pagePath": "articles/2021/01/03.md",
                "title": "2020/12/28〜2021/01/03の最新情報",
                "link": "articles/2021/01/03.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno"
                ],
                "excerpt": " 1. Deno@v1.6.3がリリースされた 1. ハイライト 2. deno-puppeteerが公開された Deno@v1.6.3がリリースされた Denoのv1.6.3がリリースされました。 ハイライト - deno lspにtextDocument/renameやcacheコマンドが実装されまし..."
            },
            {
                "pagePath": "articles/2021/01/02.md",
                "title": "はじめに",
                "link": "articles/2021/01/02.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "notice"
                ],
                "excerpt": "このサイトでは、Denoに関する最新情報を定期的に発信しようと思います。 日頃からDenoに関するリポジトリや情報などをウォッチしており、どうせならそれに関する情報をアウトプットしてみようと思い、始めた試みです。 これか..."
            },
            {
                "pagePath": "articles/2021/02/28.md",
                "title": "2021/02/22〜2021/02/28の最新情報",
                "link": "articles/2021/02/28.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "Dashport",
                    "pngs",
                    "deno_license_checker",
                    "deno-redis"
                ],
                "excerpt": " 1. Deno本体の最新情報 2. サードパーティモジュールの最新情報 1. Dashport - Passport.jsライクな認証モジュール 3. pngs 4. deno_license_checker - ライセンスヘッダーのチェックを行うツール 1. deno-redis v0.19.0がリリ..."
            },
            {
                "pagePath": "articles/2021/02/14.md",
                "title": "2021/02/08〜2021/02/14の最新情報",
                "link": "articles/2021/02/14.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "denops.vim",
                    "slack_web_api",
                    "deno-redis",
                    "deno-postgres"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.7.3/v1.7.4がリリースされました 2. deno_std v0.87.0がリリースされました 2. サードパーティモジュールの最新情報 1. denops.vim - DenoでVim/Neovimプラグインを書くためのエコシステム ..."
            },
            {
                "pagePath": "articles/2021/02/21.md",
                "title": "2021/02/15〜2021/02/21の最新情報",
                "link": "articles/2021/02/21.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "vscode_deno",
                    "deno_mysql",
                    "Sinco",
                    "little_crony"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.7.5がリリース 2. deno_std v0.88.0がリリース 3. vscode_deno v3.0.0がリリース 2. サードパーティモジュールの最新情報 1. deno_mysql v2.8.0がリリース 2. Sinco v1.1.0がリリース 3. li..."
            },
            {
                "pagePath": "articles/2021/02/07.md",
                "title": "2021/02/01〜2021/02/07の最新情報",
                "link": "articles/2021/02/07.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "emacs-ng",
                    "deno-postgres",
                    "Trex"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.7.2がリリース 2. deno_stdのリポジトリがdeno本体のリポジトリから分離された 2. サードパーティモジュールの最新情報 1. emacs-ng 2. deno-postgres v0.7.0がリリースされた 3. Trex v1.5..."
            },
            {
                "pagePath": "articles/2021/03/28.md",
                "title": "2021/03/22〜2021/03/28の最新情報",
                "link": "articles/2021/03/28.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "swdev",
                    "deno-sqlite",
                    "deno-redis"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.2がリリース 2. deno_std v0.91.0がリリース 3. status.deno.landが公開された 2. サードパーティモジュールなどの最新情報 1. swdev - Service WorkerベースのNo bundleビルドツール 2. ..."
            },
            {
                "pagePath": "articles/2021/03/14.md",
                "title": "2021/03/08〜2021/03/14の最新情報",
                "link": "articles/2021/03/14.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "nano",
                    "depsbot",
                    "wizard",
                    "deno-redis",
                    "deno-codeview"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.1のリリース 2. deno_std v0.90.0のリリース 2. サードパーティモジュールなどの最新情報 1. nano 2. depsbot 3. wizard 4. deno-redis v0.20.0 5. deno-codeview Deno本体の最新情報 Den..."
            },
            {
                "pagePath": "articles/2021/03/21.md",
                "title": "2021/03/15〜2021/03/21の最新情報",
                "link": "articles/2021/03/21.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "luath",
                    "estest",
                    "Servest",
                    "deno-bin"
                ],
                "excerpt": " 1. サードパーティモジュールなどの最新情報 1. luath - Vite/WMRライクなフロントエンドビルドツール 2. estest - DenoやNode.jsなどで動作するテストフレームワーク 3. Servest v1.2.0 4. deno-bin 2. その他の情報 1. 第10..."
            },
            {
                "pagePath": "articles/2021/03/07.md",
                "title": "2021/03/01〜2021/03/07の最新情報",
                "link": "articles/2021/03/07.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "ts_morph",
                    "vno",
                    "elsa",
                    "x/database"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.0がリリースされました 2. deno_std v0.89.0がリリース 2. サードパーティモジュールなどの最新情報 1. ts_morphがDenoをサポート 2. vnoがVue 3をサポート 3. elsaの開発が再開されました..."
            }
        ],
        "categories": [
            {
                "name": "news",
                "count": 19
            },
            {
                "name": "notice",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "deno",
                "count": 13
            },
            {
                "name": "deno_std",
                "count": 7
            },
            {
                "name": "deno-postgres",
                "count": 5
            },
            {
                "name": "deno-redis",
                "count": 4
            },
            {
                "name": "Oak",
                "count": 2
            },
            {
                "name": "Servest",
                "count": 2
            },
            {
                "name": "Trex",
                "count": 2
            },
            {
                "name": "vno",
                "count": 2
            },
            {
                "name": "alosaur",
                "count": 1
            },
            {
                "name": "book",
                "count": 1
            },
            {
                "name": "crux.land",
                "count": 1
            },
            {
                "name": "Dashport",
                "count": 1
            },
            {
                "name": "Deno Deploy",
                "count": 1
            },
            {
                "name": "deno-bin",
                "count": 1
            },
            {
                "name": "deno-codeview",
                "count": 1
            },
            {
                "name": "deno-dom",
                "count": 1
            },
            {
                "name": "deno-libs/tinyhttp",
                "count": 1
            },
            {
                "name": "deno-puppeteer",
                "count": 1
            },
            {
                "name": "deno-rollup",
                "count": 1
            },
            {
                "name": "deno-sqlite",
                "count": 1
            },
            {
                "name": "deno_license_checker",
                "count": 1
            },
            {
                "name": "deno_mysql",
                "count": 1
            },
            {
                "name": "denoland/setup-deno",
                "count": 1
            },
            {
                "name": "denops.vim",
                "count": 1
            },
            {
                "name": "depsbot",
                "count": 1
            },
            {
                "name": "elsa",
                "count": 1
            },
            {
                "name": "emacs-ng",
                "count": 1
            },
            {
                "name": "esbuild",
                "count": 1
            },
            {
                "name": "estest",
                "count": 1
            },
            {
                "name": "gql",
                "count": 1
            },
            {
                "name": "land",
                "count": 1
            },
            {
                "name": "little_crony",
                "count": 1
            },
            {
                "name": "luath",
                "count": 1
            },
            {
                "name": "Lume",
                "count": 1
            },
            {
                "name": "nano",
                "count": 1
            },
            {
                "name": "pngs",
                "count": 1
            },
            {
                "name": "rollup-plugin-deno",
                "count": 1
            },
            {
                "name": "Sift",
                "count": 1
            },
            {
                "name": "Sinco",
                "count": 1
            },
            {
                "name": "slack_web_api",
                "count": 1
            },
            {
                "name": "Snel",
                "count": 1
            },
            {
                "name": "swdev",
                "count": 1
            },
            {
                "name": "terraform-deploy-provider",
                "count": 1
            },
            {
                "name": "ts_morph",
                "count": 1
            },
            {
                "name": "vscode_deno",
                "count": 1
            },
            {
                "name": "wizard",
                "count": 1
            },
            {
                "name": "x/database",
                "count": 1
            }
        ]
    }
};
