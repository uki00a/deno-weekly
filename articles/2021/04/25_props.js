import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/04/25.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/04/25.html",
    'title': "2021/04/19〜2021/04/25の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>2021/04/19〜2021/04/25の最新情報</h1>\n<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v191192%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.9.1/1.9.2のリリース</a></li><li><a href="#deno_std-v09400950%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.94.0/0.95.0のリリース</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#deno-puppeteer-v900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-puppeteer v9.0.0のリリース</a></li><li><a href="#deno-postgres-v0110v0111%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-postgres v0.11.0/v0.11.1がリリース</a></li><li><a href="#land---denolandx%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB">land - deno.land/xで公開されているモジュールを直接実行するツール</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v191192%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.9.1/1.9.2のリリース<a class="anchor" href="#deno-v191192%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Denoのv1.9.1とv1.9.2がリリースされました。</p>\n<p><strong>v1.9.1の変更点:</strong></p>\n<ul>\n<li><code>deno lsp</code>で<code>textDocument/documentSymbol</code>, <code>textDocument/prepareCallHierarchy</code>, <code>textDocument/semanticTokens/full</code>がサポートされた</li>\n<li><code>deno lsp</code>で<code>X-TypeScript-Types</code>と<code>import type</code>/<code>export type</code>の組み合わせがうまく機能しない問題が修正された</li>\n<li>v1.9.0で実施された<code>Deno.Conn</code>型への変更がリバートされた</li>\n<li><code>Deno.serveHttp</code>が<code>Worker</code>内で動作しない問題が修正された</li>\n<li><code>Deno.serveHttp</code>でレスポンスの返却中にハングが起きうる問題が修正された</li>\n<li><code>Worker</code>は停止しているがterminateメッセージをまだ受信していない場合、<code>postMessage</code>で競合状態に陥る問題が修正された</li>\n</ul>\n<p><strong>v1.9.2の変更点:</strong></p>\n<ul>\n<li>WebSocketメッセージが適切にパースされない問題が解消された</li>\n<li>M1 Mac上で<code>deno compile</code>で生成されたバイナリを再び<code>deno compile</code>で上書きすると、壊れたバイナリが生成される問題が修正された</li>\n<li><code>Response</code>オブジェクトを<code>console.log</code>などで表示しようとすると、エラーが発生する問題が修正された</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.9.1">https://github.com/denoland/deno/releases/tag/v1.9.1</a></li>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.9.2">https://github.com/denoland/deno/releases/tag/v1.9.2</a></li>\n</ul>\n<h3 id="deno_std-v09400950%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.94.0/0.95.0のリリース<a class="anchor" href="#deno_std-v09400950%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>deno_std v0.94.0とv0.95.0がリリースされました。</p>\n<p><strong>v0.94.0の変更点:</strong></p>\n<ul>\n<li>node/fs: <code>fstat()</code>が実装された</li>\n<li>io/streams: <code>Deno.Reader</code>から<code>ReadableStream</code>を作成するために、<code>readableStreamFromReader()</code>が実装された</li>\n<li>testing: <code>assertEquals</code>で<code>undefined</code>が設定されたキーと存在しないキーが区別されない問題が修正された</li>\n</ul>\n<p><strong>v0.95.0の変更点:</strong></p>\n<ul>\n<li>node/child_process: <code>spawn()</code>の基本的なサポート</li>\n<li>path/glob: <code>globToRegExp()</code>に<code>caseInsensitive</code>オプションが追加された</li>\n<li>node/fs: すでに実装されている多くのAPIがexportされていなかった問題が修正された</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno_std/releases/tag/0.94.0">https://github.com/denoland/deno_std/releases/tag/0.94.0</a></li>\n<li><a href="https://github.com/denoland/deno_std/releases/tag/0.95.0">https://github.com/denoland/deno_std/releases/tag/0.95.0</a></li>\n</ul>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-puppeteer-v900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/lucacasonato/deno-puppeteer/releases/tag/9.0.0">deno-puppeteer v9.0.0</a>のリリース<a class="anchor" href="#deno-puppeteer-v900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/lucacasonato/deno-puppeteer">deno-puppeteer</a>のv9.0.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>内部のpuppeteerのバージョンが9.0.0へ更新された</li>\n<li>Macで<a href="https://github.com/lucacasonato/deno-puppeteer/blob/9.0.0/install.ts">install.ts</a>経由でインストールしたChromeがdeno-puppeteerで起動できない問題が修正された</li>\n</ul>\n<hr>\n<p><a href="https://github.com/lucacasonato/deno-puppeteer/releases/tag/9.0.0">https://github.com/lucacasonato/deno-puppeteer/releases/tag/9.0.0</a></p>\n<h3 id="deno-postgres-v0110v0111%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-postgres v0.11.0/v0.11.1がリリース<a class="anchor" href="#deno-postgres-v0110v0111%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/denodrivers/postgres">deno-postgres</a>のv0.11.0とv0.11.1がリリースされました。</p>\n<p><strong>v0.11.0の変更点:</strong></p>\n<ul>\n<li><code>Pool</code>クラスから直接SQLを実行できないよう変更された。\n<ul>\n<li>今後は、<code>Pool#connect</code>経由で<code>PoolClient</code>オブジェクトを取得し、それを使ってSQLを実行する必要があります。</li>\n</ul>\n</li>\n</ul>\n<p><strong>v0.11.1の変更点:</strong></p>\n<ul>\n<li><code>--unstable</code>フラグを指定しなくても利用できるようになった</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denodrivers/postgres/releases/tag/v0.11.0">https://github.com/denodrivers/postgres/releases/tag/v0.11.0</a></li>\n<li><a href="https://github.com/denodrivers/postgres/releases/tag/v0.11.1">https://github.com/denodrivers/postgres/releases/tag/v0.11.1</a></li>\n</ul>\n<h3 id="land---denolandx%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/postui/land">land</a> - deno.land/xで公開されているモジュールを直接実行するツール<a class="anchor" href="#land---denolandx%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p><code>land</code>という<a href="https://deno.land/x">deno.land/x</a>で公開されているモジュールを<code>deno install</code>でインストールせずに実行できるツールが公開されました。</p>\n<hr>\n<p><a href="https://github.com/postui/land">https://github.com/postui/land</a></p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "2021/04/19\u301C2021/04/25\u306E\u6700\u65B0\u60C5\u5831"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v191192%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.9.1/1.9.2のリリース</a></li><li><a href="#deno_std-v09400950%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.94.0/0.95.0のリリース</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#deno-puppeteer-v900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-puppeteer v9.0.0のリリース</a></li><li><a href="#deno-postgres-v0110v0111%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-postgres v0.11.0/v0.11.1がリリース</a></li><li><a href="#land---denolandx%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB">land - deno.land/xで公開されているモジュールを直接実行するツール</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v191192%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.9.1/1.9.2のリリース<a class="anchor" href="#deno-v191192%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Denoのv1.9.1とv1.9.2がリリースされました。</p>\n<p><strong>v1.9.1の変更点:</strong></p>\n<ul>\n<li><code>deno lsp</code>で<code>textDocument/documentSymbol</code>, <code>textDocument/prepareCallHierarchy</code>, <code>textDocument/semanticTokens/full</code>がサポートされた</li>\n<li><code>deno lsp</code>で<code>X-TypeScript-Types</code>と<code>import type</code>/<code>export type</code>の組み合わせがうまく機能しない問題が修正された</li>\n<li>v1.9.0で実施された<code>Deno.Conn</code>型への変更がリバートされた</li>\n<li><code>Deno.serveHttp</code>が<code>Worker</code>内で動作しない問題が修正された</li>\n<li><code>Deno.serveHttp</code>でレスポンスの返却中にハングが起きうる問題が修正された</li>\n<li><code>Worker</code>は停止しているがterminateメッセージをまだ受信していない場合、<code>postMessage</code>で競合状態に陥る問題が修正された</li>\n</ul>\n<p><strong>v1.9.2の変更点:</strong></p>\n<ul>\n<li>WebSocketメッセージが適切にパースされない問題が解消された</li>\n<li>M1 Mac上で<code>deno compile</code>で生成されたバイナリを再び<code>deno compile</code>で上書きすると、壊れたバイナリが生成される問題が修正された</li>\n<li><code>Response</code>オブジェクトを<code>console.log</code>などで表示しようとすると、エラーが発生する問題が修正された</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.9.1">https://github.com/denoland/deno/releases/tag/v1.9.1</a></li>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.9.2">https://github.com/denoland/deno/releases/tag/v1.9.2</a></li>\n</ul>\n<h3 id="deno_std-v09400950%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.94.0/0.95.0のリリース<a class="anchor" href="#deno_std-v09400950%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>deno_std v0.94.0とv0.95.0がリリースされました。</p>\n<p><strong>v0.94.0の変更点:</strong></p>\n<ul>\n<li>node/fs: <code>fstat()</code>が実装された</li>\n<li>io/streams: <code>Deno.Reader</code>から<code>ReadableStream</code>を作成するために、<code>readableStreamFromReader()</code>が実装された</li>\n<li>testing: <code>assertEquals</code>で<code>undefined</code>が設定されたキーと存在しないキーが区別されない問題が修正された</li>\n</ul>\n<p><strong>v0.95.0の変更点:</strong></p>\n<ul>\n<li>node/child_process: <code>spawn()</code>の基本的なサポート</li>\n<li>path/glob: <code>globToRegExp()</code>に<code>caseInsensitive</code>オプションが追加された</li>\n<li>node/fs: すでに実装されている多くのAPIがexportされていなかった問題が修正された</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno_std/releases/tag/0.94.0">https://github.com/denoland/deno_std/releases/tag/0.94.0</a></li>\n<li><a href="https://github.com/denoland/deno_std/releases/tag/0.95.0">https://github.com/denoland/deno_std/releases/tag/0.95.0</a></li>\n</ul>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-puppeteer-v900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/lucacasonato/deno-puppeteer/releases/tag/9.0.0">deno-puppeteer v9.0.0</a>のリリース<a class="anchor" href="#deno-puppeteer-v900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/lucacasonato/deno-puppeteer">deno-puppeteer</a>のv9.0.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>内部のpuppeteerのバージョンが9.0.0へ更新された</li>\n<li>Macで<a href="https://github.com/lucacasonato/deno-puppeteer/blob/9.0.0/install.ts">install.ts</a>経由でインストールしたChromeがdeno-puppeteerで起動できない問題が修正された</li>\n</ul>\n<hr>\n<p><a href="https://github.com/lucacasonato/deno-puppeteer/releases/tag/9.0.0">https://github.com/lucacasonato/deno-puppeteer/releases/tag/9.0.0</a></p>\n<h3 id="deno-postgres-v0110v0111%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-postgres v0.11.0/v0.11.1がリリース<a class="anchor" href="#deno-postgres-v0110v0111%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/denodrivers/postgres">deno-postgres</a>のv0.11.0とv0.11.1がリリースされました。</p>\n<p><strong>v0.11.0の変更点:</strong></p>\n<ul>\n<li><code>Pool</code>クラスから直接SQLを実行できないよう変更された。\n<ul>\n<li>今後は、<code>Pool#connect</code>経由で<code>PoolClient</code>オブジェクトを取得し、それを使ってSQLを実行する必要があります。</li>\n</ul>\n</li>\n</ul>\n<p><strong>v0.11.1の変更点:</strong></p>\n<ul>\n<li><code>--unstable</code>フラグを指定しなくても利用できるようになった</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denodrivers/postgres/releases/tag/v0.11.0">https://github.com/denodrivers/postgres/releases/tag/v0.11.0</a></li>\n<li><a href="https://github.com/denodrivers/postgres/releases/tag/v0.11.1">https://github.com/denodrivers/postgres/releases/tag/v0.11.1</a></li>\n</ul>\n<h3 id="land---denolandx%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/postui/land">land</a> - deno.land/xで公開されているモジュールを直接実行するツール<a class="anchor" href="#land---denolandx%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p><code>land</code>という<a href="https://deno.land/x">deno.land/x</a>で公開されているモジュールを<code>deno install</code>でインストールせずに実行できるツールが公開されました。</p>\n<hr>\n<p><a href="https://github.com/postui/land">https://github.com/postui/land</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "Deno\u672C\u4F53\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-v191192%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Deno v1.9.1/1.9.2\u306E\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno_std-v09400950%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.94.0/0.95.0\u306E\u30EA\u30EA\u30FC\u30B9")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E2\u30B8\u30E5\u30FC\u30EB\u306A\u3069\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-puppeteer-v900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno-puppeteer v9.0.0\u306E\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-postgres-v0110v0111%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno-postgres v0.11.0/v0.11.1\u304C\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#land---denolandx%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB" }, "land - deno.land/x\u3067\u516C\u958B\u3055\u308C\u3066\u3044\u308B\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u76F4\u63A5\u5B9F\u884C\u3059\u308B\u30C4\u30FC\u30EB")))))),
    'author': "uki00a",
    'contributors': [
        "uki00a"
    ],
    'date': "2021-05-08T18:55:30.000Z",
    'updated': null,
    'excerpt': " 1. Deno本体の最新情報 1. Deno v1.9.1/1.9.2のリリース 2. deno_std v0.94.0/0.95.0のリリース 2. サードパーティモジュールなどの最新情報 1. deno-puppeteer v9.0.0のリリース 2. deno-postgres v0.11.0/v0.11.1がリリース...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std",
        "deno-puppeteer",
        "deno-postgres",
        "land"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/05/02.md",
                "title": "2021/04/26〜2021/05/02の最新情報",
                "link": "articles/2021/05/02.html",
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "date": "2021-05-08T18:55:30.000Z",
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
                "count": 18
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
                "name": "Oak",
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
