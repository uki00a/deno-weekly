import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Gtag from 'https://uki00a.github.io/deno-weekly/_gtag.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/03/07.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/03/07.html",
    'title': "2021/03/01〜2021/03/07の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>2021/03/01〜2021/03/07の最新情報</h1>\n<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v180%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">Deno v1.8.0がリリースされました</a></li><li><a href="#deno_std-v0890%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.89.0がリリース</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#ts_morph%E3%81%8Cdeno%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">ts_morphがDenoをサポート</a></li><li><a href="#vno%E3%81%8Cvue-3%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">vnoがVue 3をサポート</a></li><li><a href="#elsa%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%8C%E5%86%8D%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">elsaの開発が再開されました</a></li><li><a href="#xdatabasesql">x/database/sql</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v180%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">Deno v1.8.0がリリースされました<a class="anchor" href="#deno-v180%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">§</a></h3>\n<p>Deno v1.8.0がリリースされました。</p>\n<p><a href="https://zenn.dev/magurotuna">magurotunaさん</a>による<a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-8-0">Deno v1.8.0のまとめ</a>が公開されていますので、よろしければそちらも参照ください。</p>\n<p><strong>主な変更点</strong>:</p>\n<ul>\n<li>WebGPUがサポートされました(experimental)</li>\n<li>ICUサポートが追加されました。</li>\n<li>テストカバレッジの収集と集計が個別のコマンドに分離されました(収集は<code>deno test --coverage</code>、集計は<code>deno coverage</code>コマンドで行います)</li>\n<li>lcov形式でのカバレッジの集計がサポートされました。</li>\n<li>Import maps/<code>Deno.permissions</code>/<code>Deno.link</code>/<code>Deno.symlink</code>/<code>deno lsp</code>が安定化されました(<code>--unstable</code>オプションが不要になった)</li>\n<li>リモートモジュールをダウンロードする際に、<code>Authorization</code>ヘッダにトークンを設定できるようになりました(<code>DENO_AUTH_TOKENS</code>)</li>\n<li>テストコード中で<code>Deno.exit()</code>の呼び出しがチェックされるようになりました(exitサニタイザ)</li>\n<li><code>Deno.metrics()</code>で収集できる情報がより詳細化されました(<code>--unstable</code>を付与したときのみ)</li>\n<li><code>deno fmt</code>でJSONファイルのフォーマットがサポートされました。</li>\n<li><code>Deno.emit</code>でIIFE形式の出力サポートされました。</li>\n<li>TypeScriptが4.2にアップグレードされました。</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.8.0">https://github.com/denoland/deno/releases/tag/v1.8.0</a></li>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-8-0">https://zenn.dev/magurotuna/articles/deno-release-note-1-8-0</a></li>\n</ul>\n<h3 id="deno_std-v0890%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.89.0がリリース<a class="anchor" href="#deno_std-v0890%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.0のリリースに合わせ、deno_stdのv0.89.0がリリースされました。</p>\n<p><code>std/node</code>への機能追加などに加え、<code>std/io/streams</code>モジュールに破壊的変更が加わっています。</p>\n<p><strong>主な変更点:</strong></p>\n<ul>\n<li><code>io/streams</code>: <code>readableStreamFromAsyncIterator()</code>が削除され、代わりに<code>readableStreamFromIterable()</code>が追加されました。</li>\n<li><code>node</code>: <code>constants</code>モジュールが追加されました。</li>\n<li><code>node/crypto</code>: <code>createHash()</code>関数が実装されました。</li>\n<li><code>node</code>: <code>process.hrtime()</code>が実装されました。</li>\n<li><code>node/fs</code>: <code>truncate</code>/<code>truncateSync</code>が実装されました。</li>\n<li><code>node/util</code>: <code>callbackify</code>/<code>promisify</code>/<code>types</code>が公開されました。</li>\n<li><code>node/events</code>: <code>require(\'events\').EventEmitter</code>が<code>undefined</code>になる問題が修正されました。</li>\n<li><code>node</code>: <code>require</code>でshebangの書かれたJSファイルを読めるようになりました。</li>\n<li><code>node</code>: <code>process.argv</code>が<code>Proxy</code>から配列へ変更されました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/pull/780">https://github.com/denoland/deno_std/pull/780</a></p>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="ts_morph%E3%81%8Cdeno%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88"><a href="https://github.com/dsherret/ts-morph/releases/tag/10.0.1">ts_morphがDenoをサポート</a><a class="anchor" href="#ts_morph%E3%81%8Cdeno%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">§</a></h3>\n<p><a href="https://github.com/dsherret/ts-morph">ts_morph</a>にDenoのサポートが追加されました。</p>\n<p>ts_morphは<a href="https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API">TypeScriptのコンパイラAPI</a>のラッパライブラリです。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/dsherret/ts-morph/releases/tag/10.0.1">https://github.com/dsherret/ts-morph/releases/tag/10.0.1</a></li>\n<li><a href="https://deno.land/x/ts_morph@10.0.1">https://deno.land/x/ts_morph@10.0.1</a></li>\n</ul>\n<h3 id="vno%E3%81%8Cvue-3%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88"><a href="https://github.com/open-source-labs/vno/releases/tag/v1.1.0">vnoがVue 3をサポート</a><a class="anchor" href="#vno%E3%81%8Cvue-3%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">§</a></h3>\n<p><a href="https://github.com/open-source-labs/vno">vno</a>にVue 3のサポートが追加されました。</p>\n<p><code>vno.config.json</code>で<code>&quot;vue&quot;: 3</code>の設定を記述すると、Vue 3が使用できるようになります。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/open-source-labs/vno/releases/tag/v1.1.0">https://github.com/open-source-labs/vno/releases/tag/v1.1.0</a></li>\n<li><a href="https://twitter.com/vno_land/status/1366762314309984261">https://twitter.com/vno_land/status/1366762314309984261</a></li>\n</ul>\n<h3 id="elsa%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%8C%E5%86%8D%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F"><a href="https://github.com/elsaland/elsa/issues/113">elsaの開発が再開されました</a><a class="anchor" href="#elsa%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%8C%E5%86%8D%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">§</a></h3>\n<p>elsaは<a href="https://bellard.org/quickjs/">QuickJS</a>とGoをベースにしたTypeScript/JavaScriptランタイムです。</p>\n<p>ここ数ヶ月程開発が若干停滞している状況でしたが、先週より徐々に開発が再開されています。</p>\n<p>詳しくは<a href="https://github.com/elsaland/elsa">こちら</a>のGitHub issueを参照ください。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/elsaland/elsa">https://github.com/elsaland/elsa</a></li>\n<li><a href="https://github.com/elsaland/elsa/issues/113">https://github.com/elsaland/elsa/issues/113</a></li>\n</ul>\n<h3 id="xdatabasesql"><a href="https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md">x/database/sql</a><a class="anchor" href="#xdatabasesql">§</a></h3>\n<p>データベースドライバの共通インターフェースを定めることを目的として、有志により<a href="https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md">x/database/sql</a>の仕様の策定が始まりました。</p>\n<p>DenoでGoの<a href="https://golang.org/src/database/sql/doc.txt">database/sql</a>に相当するパッケージを提供する試みのようです。</p>\n<hr>\n<p><a href="https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md">https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" }),
        React.createElement("meta", { content: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png", property: "og:image" }),
        React.createElement(Gtag, { id: "G-MK2K2MRMBF" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "2021/03/01\u301C2021/03/07\u306E\u6700\u65B0\u60C5\u5831"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v180%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">Deno v1.8.0がリリースされました</a></li><li><a href="#deno_std-v0890%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.89.0がリリース</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#ts_morph%E3%81%8Cdeno%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">ts_morphがDenoをサポート</a></li><li><a href="#vno%E3%81%8Cvue-3%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">vnoがVue 3をサポート</a></li><li><a href="#elsa%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%8C%E5%86%8D%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">elsaの開発が再開されました</a></li><li><a href="#xdatabasesql">x/database/sql</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v180%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">Deno v1.8.0がリリースされました<a class="anchor" href="#deno-v180%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">§</a></h3>\n<p>Deno v1.8.0がリリースされました。</p>\n<p><a href="https://zenn.dev/magurotuna">magurotunaさん</a>による<a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-8-0">Deno v1.8.0のまとめ</a>が公開されていますので、よろしければそちらも参照ください。</p>\n<p><strong>主な変更点</strong>:</p>\n<ul>\n<li>WebGPUがサポートされました(experimental)</li>\n<li>ICUサポートが追加されました。</li>\n<li>テストカバレッジの収集と集計が個別のコマンドに分離されました(収集は<code>deno test --coverage</code>、集計は<code>deno coverage</code>コマンドで行います)</li>\n<li>lcov形式でのカバレッジの集計がサポートされました。</li>\n<li>Import maps/<code>Deno.permissions</code>/<code>Deno.link</code>/<code>Deno.symlink</code>/<code>deno lsp</code>が安定化されました(<code>--unstable</code>オプションが不要になった)</li>\n<li>リモートモジュールをダウンロードする際に、<code>Authorization</code>ヘッダにトークンを設定できるようになりました(<code>DENO_AUTH_TOKENS</code>)</li>\n<li>テストコード中で<code>Deno.exit()</code>の呼び出しがチェックされるようになりました(exitサニタイザ)</li>\n<li><code>Deno.metrics()</code>で収集できる情報がより詳細化されました(<code>--unstable</code>を付与したときのみ)</li>\n<li><code>deno fmt</code>でJSONファイルのフォーマットがサポートされました。</li>\n<li><code>Deno.emit</code>でIIFE形式の出力サポートされました。</li>\n<li>TypeScriptが4.2にアップグレードされました。</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.8.0">https://github.com/denoland/deno/releases/tag/v1.8.0</a></li>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-8-0">https://zenn.dev/magurotuna/articles/deno-release-note-1-8-0</a></li>\n</ul>\n<h3 id="deno_std-v0890%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.89.0がリリース<a class="anchor" href="#deno_std-v0890%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.0のリリースに合わせ、deno_stdのv0.89.0がリリースされました。</p>\n<p><code>std/node</code>への機能追加などに加え、<code>std/io/streams</code>モジュールに破壊的変更が加わっています。</p>\n<p><strong>主な変更点:</strong></p>\n<ul>\n<li><code>io/streams</code>: <code>readableStreamFromAsyncIterator()</code>が削除され、代わりに<code>readableStreamFromIterable()</code>が追加されました。</li>\n<li><code>node</code>: <code>constants</code>モジュールが追加されました。</li>\n<li><code>node/crypto</code>: <code>createHash()</code>関数が実装されました。</li>\n<li><code>node</code>: <code>process.hrtime()</code>が実装されました。</li>\n<li><code>node/fs</code>: <code>truncate</code>/<code>truncateSync</code>が実装されました。</li>\n<li><code>node/util</code>: <code>callbackify</code>/<code>promisify</code>/<code>types</code>が公開されました。</li>\n<li><code>node/events</code>: <code>require(\'events\').EventEmitter</code>が<code>undefined</code>になる問題が修正されました。</li>\n<li><code>node</code>: <code>require</code>でshebangの書かれたJSファイルを読めるようになりました。</li>\n<li><code>node</code>: <code>process.argv</code>が<code>Proxy</code>から配列へ変更されました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/pull/780">https://github.com/denoland/deno_std/pull/780</a></p>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="ts_morph%E3%81%8Cdeno%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88"><a href="https://github.com/dsherret/ts-morph/releases/tag/10.0.1">ts_morphがDenoをサポート</a><a class="anchor" href="#ts_morph%E3%81%8Cdeno%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">§</a></h3>\n<p><a href="https://github.com/dsherret/ts-morph">ts_morph</a>にDenoのサポートが追加されました。</p>\n<p>ts_morphは<a href="https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API">TypeScriptのコンパイラAPI</a>のラッパライブラリです。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/dsherret/ts-morph/releases/tag/10.0.1">https://github.com/dsherret/ts-morph/releases/tag/10.0.1</a></li>\n<li><a href="https://deno.land/x/ts_morph@10.0.1">https://deno.land/x/ts_morph@10.0.1</a></li>\n</ul>\n<h3 id="vno%E3%81%8Cvue-3%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88"><a href="https://github.com/open-source-labs/vno/releases/tag/v1.1.0">vnoがVue 3をサポート</a><a class="anchor" href="#vno%E3%81%8Cvue-3%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88">§</a></h3>\n<p><a href="https://github.com/open-source-labs/vno">vno</a>にVue 3のサポートが追加されました。</p>\n<p><code>vno.config.json</code>で<code>&quot;vue&quot;: 3</code>の設定を記述すると、Vue 3が使用できるようになります。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/open-source-labs/vno/releases/tag/v1.1.0">https://github.com/open-source-labs/vno/releases/tag/v1.1.0</a></li>\n<li><a href="https://twitter.com/vno_land/status/1366762314309984261">https://twitter.com/vno_land/status/1366762314309984261</a></li>\n</ul>\n<h3 id="elsa%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%8C%E5%86%8D%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F"><a href="https://github.com/elsaland/elsa/issues/113">elsaの開発が再開されました</a><a class="anchor" href="#elsa%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%8C%E5%86%8D%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F">§</a></h3>\n<p>elsaは<a href="https://bellard.org/quickjs/">QuickJS</a>とGoをベースにしたTypeScript/JavaScriptランタイムです。</p>\n<p>ここ数ヶ月程開発が若干停滞している状況でしたが、先週より徐々に開発が再開されています。</p>\n<p>詳しくは<a href="https://github.com/elsaland/elsa">こちら</a>のGitHub issueを参照ください。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/elsaland/elsa">https://github.com/elsaland/elsa</a></li>\n<li><a href="https://github.com/elsaland/elsa/issues/113">https://github.com/elsaland/elsa/issues/113</a></li>\n</ul>\n<h3 id="xdatabasesql"><a href="https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md">x/database/sql</a><a class="anchor" href="#xdatabasesql">§</a></h3>\n<p>データベースドライバの共通インターフェースを定めることを目的として、有志により<a href="https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md">x/database/sql</a>の仕様の策定が始まりました。</p>\n<p>DenoでGoの<a href="https://golang.org/src/database/sql/doc.txt">database/sql</a>に相当するパッケージを提供する試みのようです。</p>\n<hr>\n<p><a href="https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md">https://github.com/jeremyBanks/database/blob/0.1.0-dev/docs/rfcs/0003-initial.md</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "Deno\u672C\u4F53\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-v180%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F" }, "Deno v1.8.0\u304C\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u307E\u3057\u305F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno_std-v0890%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.89.0\u304C\u30EA\u30EA\u30FC\u30B9")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E2\u30B8\u30E5\u30FC\u30EB\u306A\u3069\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#ts_morph%E3%81%8Cdeno%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88" }, "ts_morph\u304CDeno\u3092\u30B5\u30DD\u30FC\u30C8")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#vno%E3%81%8Cvue-3%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88" }, "vno\u304CVue 3\u3092\u30B5\u30DD\u30FC\u30C8")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#elsa%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%8C%E5%86%8D%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F" }, "elsa\u306E\u958B\u767A\u304C\u518D\u958B\u3055\u308C\u307E\u3057\u305F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#xdatabasesql" }, "x/database/sql")))))),
    'author': "Yuki Tanaka",
    'contributors': [
        "Yuki Tanaka"
    ],
    'date': "2021/03/07",
    'updated': null,
    'excerpt': " 1. Deno本体の最新情報 1. Deno v1.8.0がリリースされました 2. deno_std v0.89.0がリリース 2. サードパーティモジュールなどの最新情報 1. ts_morphがDenoをサポート 2. vnoがVue 3をサポート 3. elsaの開発が再開されました...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std",
        "ts_morph",
        "vno",
        "elsa",
        "x/database"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/08/15.md",
                "title": "2021/08/09〜2021/08/15の最新情報",
                "link": "articles/2021/08/15.html",
                "date": "2021/08/15",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "esm.sh"
                ],
                "excerpt": " 1. Deno v1.13.0 2. deno_std v0.104.0 3. esm.sh v44 Deno v1.13.0 Deno v1.13.0がリリースされました。 大きな変更点として、ネイティブHTTPサーバ(Deno.serveHttp)の安定化やTLS関連の機能の強化、プラグインシステムの廃止..."
            },
            {
                "pagePath": "articles/2021/08/08.md",
                "title": "2021/08/02〜2021/08/08の最新情報",
                "link": "articles/2021/08/08.html",
                "date": "2021/08/08",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno-sqlite",
                    "Velociraptor"
                ],
                "excerpt": " 1. deno-sqlite v3.0.0がリリース 2. Velociraptor v1.1.0がリリース 3. deno_sdl2 deno-sqlite v3.0.0がリリース deno-sqliteのv3.0.0がリリースされました。 このリリースではRowsタイプへの破壊的変更やパフォーマンスの向..."
            },
            {
                "pagePath": "articles/2021/08/01.md",
                "title": "2021/07/26〜2021/08/01の最新情報",
                "link": "articles/2021/08/01.html",
                "date": "2021/08/01",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "deno-sqlite",
                    "Deno Deploy"
                ],
                "excerpt": " 1. Deno v1.12.2がリリース 2. deno_std v0.103.0がリリース 3. deno-sqlite v2.5.0がリリース 4. depcheck 5. deno-github-contributions-api Deno v1.12.2がリリース Deno v1.12.2がリリースされました。 今回のリリースでは..."
            },
            {
                "pagePath": "articles/2021/07/25.md",
                "title": "2021/07/19〜2021/07/25の最新情報",
                "link": "articles/2021/07/25.html",
                "date": "2021/07/25",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Oak",
                    "deno_mongo"
                ],
                "excerpt": " 1. Deno v1.12.1がリリース 2. deno_std v0.102.0がリリース 3. Oak v8.0.0がリリース 4. deno_mongo v0.24.0がリリース Deno v1.12.1がリリース Deno v1.12.1がリリースされました。このリリースではバグの修正が中心に行われ..."
            },
            {
                "pagePath": "articles/2021/07/18.md",
                "title": "2021/07/12〜2021/07/18の最新情報",
                "link": "articles/2021/07/18.html",
                "date": "2021/07/18",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std"
                ],
                "excerpt": " 1. Deno v1.12.0のリリース 2. deno_std v0.101.0のリリース 3. wpt.fyiにDenoが掲載 4. deno-unknownutil v1.0.0のリリース Deno v1.12.0のリリース Deno v1.12.0がリリースされました。 変更点: - MessageChannelとMessageP..."
            },
            {
                "pagePath": "articles/2021/07/11.md",
                "title": "2021/07/05〜2021/07/11の最新情報",
                "link": "articles/2021/07/11.html",
                "date": "2021/07/11",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno-redis",
                    "Bundler"
                ],
                "excerpt": " 1. Denoのデフォルトの型チェックの挙動について 2. Bundler v0.8.0 3. deno-redis v0.23.0がリリース 4. xhr Denoのデフォルトの型チェックの挙動について DenoのGitHubリポジトリにて、Denoのデフォルトの型チェックの挙動を..."
            },
            {
                "pagePath": "articles/2021/07/04.md",
                "title": "2021/06/28〜2021/07/04の最新情報",
                "link": "articles/2021/07/04.html",
                "date": "2021/07/04",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Oak",
                    "Trex",
                    "Nessie"
                ],
                "excerpt": " 1. Deno v1.11.3のリリース 2. Denoの2021年Q3ロードマップが公開 3. deno_std v0.100.0のリリース 4. Oak v7.7.0 5. Trex v1.8.0 6. Nessie v2.0.0のリリース Deno v1.11.3のリリース Denoのv1.11.3がリリースされました。 こ..."
            },
            {
                "pagePath": "articles/2021/06/27.md",
                "title": "2021/06/21〜2021/06/27の最新情報",
                "link": "articles/2021/06/27.html",
                "date": "2021/06/27",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "Deno Deploy",
                    "fresh"
                ],
                "excerpt": " 1. Deno v1.11.2がリリースされました 2. Deno DeployのBeta 1がリリースされました 3. fresh - Deno Deployで動作するWebフレームワーク 4. xml - Denoで動作するXMLモジュール Deno v1.11.2がリリースされました Deno v1.11..."
            },
            {
                "pagePath": "articles/2021/06/20.md",
                "title": "2021/06/14〜2021/06/20の最新情報",
                "link": "articles/2021/06/20.html",
                "date": "2021/06/20",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Oak"
                ],
                "excerpt": " 1. Deno v1.11.1がリリースされました 2. deno_std v0.99.0がリリースされました 3. Oak v7.6.0がリリースされました 4. Deno internals - how modern JavaScript runtime is built Deno v1.11.1がリリースされました Denoのv..."
            },
            {
                "pagePath": "articles/2021/06/13.md",
                "title": "2021/06/07〜2021/06/13の最新情報",
                "link": "articles/2021/06/13.html",
                "date": "2021/06/13",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "twd"
                ],
                "excerpt": " 1. Deno v1.11.0がリリースされました 2. deno_std v0.98.0がリリースされました 3. denoland/deno_docker 4. twd v0.3.0及びv0.4.0がリリース Deno v1.11.0がリリースされました Deno v1.11.0がリリースされました。 このリリ..."
            },
            {
                "pagePath": "articles/2021/06/06.md",
                "title": "2021/06/01〜2021/06/06の最新情報",
                "link": "articles/2021/06/06.html",
                "date": "2021/06/06",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "twd",
                    "Eta"
                ],
                "excerpt": " 1. Deno v1.10.3がリリース 2. wpt.deno.land 3. twd 4. Eta Deno v1.10.3がリリース Deno v1.10.3がリリースされました。 deno lspの効率化や新機能の追加などを中心に、様々な変更が実施されています。 変更点: - deno lspで..."
            },
            {
                "pagePath": "articles/2021/05/30.md",
                "title": "2021/05/24〜2021/05/30の最新情報",
                "link": "articles/2021/05/30.html",
                "date": "2021/05/30",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "Sinco",
                    "Deno Deploy",
                    "Velociraptor",
                    "Cliffy"
                ],
                "excerpt": " 1. Sinco v2.0.0のリリース 2. Velociraptor v1.0.0のリリース 3. zeno.zsh 4. Cliffy v0.19.0のリリース 5. deploy_dir Sinco v2.0.0のリリース ブラウザのオートメーション・テスト用モジュールであるSincoのv2.0.0がリリー..."
            },
            {
                "pagePath": "articles/2021/05/23.md",
                "title": "2021/05/17〜2021/05/23の最新情報",
                "link": "articles/2021/05/23.html",
                "date": "2021/05/23",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Flat Data",
                    "packup",
                    "luath"
                ],
                "excerpt": " 1. Deno v1.10.2がリリース 2. deno_std v0.97.0がリリース 3. denoland/setup-deno v1.0.0がリリース 4. Flat Data 5. packup - Parcelライクなビルドツール 6. luath v0.6.0/v0.7.0/v0.8.0がリリース Deno v1.10.2がリリース..."
            },
            {
                "pagePath": "articles/2021/05/16.md",
                "title": "2021/05/10〜2021/05/16の最新情報",
                "link": "articles/2021/05/16.html",
                "date": "2021/05/16",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "angular_deno",
                    "sono.io",
                    "pagic"
                ],
                "excerpt": " 1. Deno v1.10.1がリリース 2. deno_std v0.96.0がリリース 3. angular_deno 4. sono.io 5. Pagic v1.3.0がリリース Deno v1.10.1がリリース Deno v1.10.0及びv1.10.1がリリースされました。 このリリースでは、deno testコマ..."
            },
            {
                "pagePath": "articles/2021/05/09.md",
                "title": "2021/05/03〜2021/05/09の最新情報",
                "link": "articles/2021/05/09.html",
                "date": "2021/05/09",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021/05/02",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021/04/25",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/04/18.md",
                "title": "2021/04/12〜2021/04/18の最新情報",
                "link": "articles/2021/04/18.html",
                "date": "2021/04/18",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021/04/11",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/04/04.md",
                "title": "2021/03/29〜2021/04/04の最新情報",
                "link": "articles/2021/04/04.html",
                "date": "2021/04/04",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/03/28.md",
                "title": "2021/03/22〜2021/03/28の最新情報",
                "link": "articles/2021/03/28.html",
                "date": "2021/03/28",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/03/21.md",
                "title": "2021/03/15〜2021/03/21の最新情報",
                "link": "articles/2021/03/21.html",
                "date": "2021/03/21",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/03/14.md",
                "title": "2021/03/08〜2021/03/14の最新情報",
                "link": "articles/2021/03/14.html",
                "date": "2021/03/14",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/03/07.md",
                "title": "2021/03/01〜2021/03/07の最新情報",
                "link": "articles/2021/03/07.html",
                "date": "2021/03/07",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
            },
            {
                "pagePath": "articles/2021/02/28.md",
                "title": "2021/02/22〜2021/02/28の最新情報",
                "link": "articles/2021/02/28.html",
                "date": "2021/02/28",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/02/21.md",
                "title": "2021/02/15〜2021/02/21の最新情報",
                "link": "articles/2021/02/21.html",
                "date": "2021/02/21",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/02/14.md",
                "title": "2021/02/08〜2021/02/14の最新情報",
                "link": "articles/2021/02/14.html",
                "date": "2021/02/14",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/02/07.md",
                "title": "2021/02/01〜2021/02/07の最新情報",
                "link": "articles/2021/02/07.html",
                "date": "2021/02/07",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/01/31.md",
                "title": "2021/01/25〜2021/01/31の最新情報",
                "link": "articles/2021/01/31.html",
                "date": "2021/01/31",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021/01/24",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/01/17.md",
                "title": "2021/01/11〜2021/01/17の最新情報",
                "link": "articles/2021/01/17.html",
                "date": "2021/01/17",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "excerpt": " 1. Deno in 2020 2. Obsidian - GraphQLクライアント/サーバモジュール 3. Sinco - ブラウザのオートメーション・テストツール Deno in 2020 Denoの公式ブログポストにて、Deno in 2020という記事が公開されました。 この記事..."
            },
            {
                "pagePath": "articles/2021/01/10.md",
                "title": "2021/01/04〜2021/01/10の最新情報",
                "link": "articles/2021/01/10.html",
                "date": "2021/01/10",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/01/03.md",
                "title": "2020/12/28〜2021/01/03の最新情報",
                "link": "articles/2021/01/03.html",
                "date": "2021/01/03",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021/01/02",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "notice"
                ],
                "excerpt": "このサイトでは、Denoに関する最新情報を定期的に発信しようと思います。 日頃からDenoに関するリポジトリや情報などをウォッチしており、どうせならそれに関する情報をアウトプットしてみようと思い、始めた試みです。 これか..."
            }
        ],
        "categories": [
            {
                "name": "news",
                "count": 33
            },
            {
                "name": "notice",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "deno",
                "count": 25
            },
            {
                "name": "deno_std",
                "count": 16
            },
            {
                "name": "deno-postgres",
                "count": 5
            },
            {
                "name": "deno-redis",
                "count": 5
            },
            {
                "name": "Oak",
                "count": 5
            },
            {
                "name": "Deno Deploy",
                "count": 4
            },
            {
                "name": "deno-sqlite",
                "count": 3
            },
            {
                "name": "Trex",
                "count": 3
            },
            {
                "name": "luath",
                "count": 2
            },
            {
                "name": "Servest",
                "count": 2
            },
            {
                "name": "Sinco",
                "count": 2
            },
            {
                "name": "twd",
                "count": 2
            },
            {
                "name": "Velociraptor",
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
                "name": "angular_deno",
                "count": 1
            },
            {
                "name": "book",
                "count": 1
            },
            {
                "name": "Bundler",
                "count": 1
            },
            {
                "name": "Cliffy",
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
                "name": "deno_license_checker",
                "count": 1
            },
            {
                "name": "deno_mongo",
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
                "name": "esm.sh",
                "count": 1
            },
            {
                "name": "estest",
                "count": 1
            },
            {
                "name": "Eta",
                "count": 1
            },
            {
                "name": "Flat Data",
                "count": 1
            },
            {
                "name": "fresh",
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
                "name": "Lume",
                "count": 1
            },
            {
                "name": "nano",
                "count": 1
            },
            {
                "name": "Nessie",
                "count": 1
            },
            {
                "name": "packup",
                "count": 1
            },
            {
                "name": "pagic",
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
                "name": "slack_web_api",
                "count": 1
            },
            {
                "name": "Snel",
                "count": 1
            },
            {
                "name": "sono.io",
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
