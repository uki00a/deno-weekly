import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Gtag from 'https://uki00a.github.io/deno-weekly/_gtag.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/03/14.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/03/14.html",
    'title': "2021/03/08〜2021/03/14の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>2021/03/08〜2021/03/14の最新情報</h1>\n<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v181%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.8.1のリリース</a></li><li><a href="#deno_std-v0900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.90.0のリリース</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#nano">nano</a></li><li><a href="#depsbot">depsbot</a></li><li><a href="#wizard">wizard</a></li><li><a href="#deno-redis-v0200">deno-redis v0.20.0</a></li><li><a href="#deno-codeview">deno-codeview</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v181%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.8.1">Deno v1.8.1のリリース</a><a class="anchor" href="#deno-v181%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.1がリリースされました。このリリースでは、バグの修正を中心に実施されています。</p>\n<p><strong>主な変更点:</strong></p>\n<ul>\n<li>importsNotUsedAsValuesオプションがswcに渡されるようになりました。</li>\n<li>Windows上で<code>deno compile</code>を実行すると、ターゲットに関わらず常に.exeが拡張子として付与される問題が修正されました。</li>\n<li><code>Worker</code>内でトップレベルawaitが使用されていると、ブロックが発生する問題が修正されました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno/releases/tag/v1.8.1">https://github.com/denoland/deno/releases/tag/v1.8.1</a></p>\n<h3 id="deno_std-v0900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/commit/3f9714bf05a75303355fddd22cad9794be50e47d">deno_std v0.90.0のリリース</a><a class="anchor" href="#deno_std-v0900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><code>deno_std</code> v0.90.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>node: <a href="https://nodejs.org/api/module.html">module</a>モジュールを<code>require</code>で読み込めるようになりました。</li>\n<li>node: Node.jsで書かれたスクリプトを実行するためのCLIツールが実装されました。(<code>node/cli.ts</code>)</li>\n<li>node: <code>assert</code>モジュールの互換性が向上しました。</li>\n<li>http: v0.88.0で発生したパフォーマンスに関する問題が修正されました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/commit/3f9714bf05a75303355fddd22cad9794be50e47d">https://github.com/denoland/deno_std/commit/3f9714bf05a75303355fddd22cad9794be50e47d</a></p>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="nano"><a href="https://github.com/nanojsx/nano">nano</a><a class="anchor" href="#nano">§</a></h3>\n<p><code>nano</code>は軽量のJSXライブラリです。以下のような機能をサポートしています:</p>\n<ul>\n<li>SSRをサポート(DenoとNode.jsの両方で動作します)</li>\n<li>組み込みのRouterやStoreなどを提供</li>\n<li>コンポーネントのpre-fetch</li>\n</ul>\n<hr>\n<p><a href="https://github.com/nanojsx/nano">https://github.com/nanojsx/nano</a></p>\n<h3 id="depsbot"><a href="https://github.com/denosaurs/depsbot">depsbot</a><a class="anchor" href="#depsbot">§</a></h3>\n<p>モジュールなどの依存関係の更新状態をチェックをしてくれるGitHub actionです。</p>\n<p>npmにも公開されており、コマンドラインから直接実行することもできます。</p>\n<hr>\n<p><a href="https://github.com/denosaurs/depsbot">https://github.com/denosaurs/depsbot</a></p>\n<h3 id="wizard"><a href="https://github.com/deno-libs/wizard">wizard</a><a class="anchor" href="#wizard">§</a></h3>\n<p><code>wizard</code>というBDDスタイルのAPIを提供するテストライブラリが公開されました。</p>\n<p>まだ開発が開始したばかりではありますが、<code>Deno.test()</code>をベースにしているため、各種サニタイザやDenoのCLIをそのまま利用することができます。</p>\n<hr>\n<p><a href="https://github.com/deno-libs/wizard">https://github.com/deno-libs/wizard</a></p>\n<h3 id="deno-redis-v0200"><a href="https://github.com/denodrivers/redis/releases/tag/v0.20.0">deno-redis v0.20.0</a><a class="anchor" href="#deno-redis-v0200">§</a></h3>\n<p><code>deno-redis</code> v0.20.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>CLIENT PAUSE</code>コマンドでMODEを指定できるようになりました</li>\n<li>以下のコマンドがサポートされました:\n<ul>\n<li><code>CLIENT UNBLOCK</code></li>\n<li><code>CLIENT UNPAUSE</code></li>\n<li><code>CLIENT INFO</code></li>\n<li><code>CLIENT TRACKINGINFO</code></li>\n<li><code>CLIENT LIST</code></li>\n</ul>\n</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denodrivers/redis/releases/tag/v0.20.0">https://github.com/denodrivers/redis/releases/tag/v0.20.0</a></p>\n<h3 id="deno-codeview"><a href="https://github.com/c4spar/deno-codeview">deno-codeview</a><a class="anchor" href="#deno-codeview">§</a></h3>\n<p><code>deno-codeview</code>は、<code>deno test --coverage</code>によって生成されたカバレッジプロファイルを解析し、<a href="https://github.com/webview/webview_deno">WebView</a>にカバレッジレポートを表示するツールです。</p>\n<hr>\n<p><a href="https://github.com/c4spar/deno-codeview">https://github.com/c4spar/deno-codeview</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" }),
        React.createElement("meta", { content: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png", property: "og:image" }),
        React.createElement(Gtag, { id: "G-MK2K2MRMBF" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "2021/03/08\u301C2021/03/14\u306E\u6700\u65B0\u60C5\u5831"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v181%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.8.1のリリース</a></li><li><a href="#deno_std-v0900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.90.0のリリース</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#nano">nano</a></li><li><a href="#depsbot">depsbot</a></li><li><a href="#wizard">wizard</a></li><li><a href="#deno-redis-v0200">deno-redis v0.20.0</a></li><li><a href="#deno-codeview">deno-codeview</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v181%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.8.1">Deno v1.8.1のリリース</a><a class="anchor" href="#deno-v181%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.1がリリースされました。このリリースでは、バグの修正を中心に実施されています。</p>\n<p><strong>主な変更点:</strong></p>\n<ul>\n<li>importsNotUsedAsValuesオプションがswcに渡されるようになりました。</li>\n<li>Windows上で<code>deno compile</code>を実行すると、ターゲットに関わらず常に.exeが拡張子として付与される問題が修正されました。</li>\n<li><code>Worker</code>内でトップレベルawaitが使用されていると、ブロックが発生する問題が修正されました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno/releases/tag/v1.8.1">https://github.com/denoland/deno/releases/tag/v1.8.1</a></p>\n<h3 id="deno_std-v0900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/commit/3f9714bf05a75303355fddd22cad9794be50e47d">deno_std v0.90.0のリリース</a><a class="anchor" href="#deno_std-v0900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><code>deno_std</code> v0.90.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>node: <a href="https://nodejs.org/api/module.html">module</a>モジュールを<code>require</code>で読み込めるようになりました。</li>\n<li>node: Node.jsで書かれたスクリプトを実行するためのCLIツールが実装されました。(<code>node/cli.ts</code>)</li>\n<li>node: <code>assert</code>モジュールの互換性が向上しました。</li>\n<li>http: v0.88.0で発生したパフォーマンスに関する問題が修正されました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/commit/3f9714bf05a75303355fddd22cad9794be50e47d">https://github.com/denoland/deno_std/commit/3f9714bf05a75303355fddd22cad9794be50e47d</a></p>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="nano"><a href="https://github.com/nanojsx/nano">nano</a><a class="anchor" href="#nano">§</a></h3>\n<p><code>nano</code>は軽量のJSXライブラリです。以下のような機能をサポートしています:</p>\n<ul>\n<li>SSRをサポート(DenoとNode.jsの両方で動作します)</li>\n<li>組み込みのRouterやStoreなどを提供</li>\n<li>コンポーネントのpre-fetch</li>\n</ul>\n<hr>\n<p><a href="https://github.com/nanojsx/nano">https://github.com/nanojsx/nano</a></p>\n<h3 id="depsbot"><a href="https://github.com/denosaurs/depsbot">depsbot</a><a class="anchor" href="#depsbot">§</a></h3>\n<p>モジュールなどの依存関係の更新状態をチェックをしてくれるGitHub actionです。</p>\n<p>npmにも公開されており、コマンドラインから直接実行することもできます。</p>\n<hr>\n<p><a href="https://github.com/denosaurs/depsbot">https://github.com/denosaurs/depsbot</a></p>\n<h3 id="wizard"><a href="https://github.com/deno-libs/wizard">wizard</a><a class="anchor" href="#wizard">§</a></h3>\n<p><code>wizard</code>というBDDスタイルのAPIを提供するテストライブラリが公開されました。</p>\n<p>まだ開発が開始したばかりではありますが、<code>Deno.test()</code>をベースにしているため、各種サニタイザやDenoのCLIをそのまま利用することができます。</p>\n<hr>\n<p><a href="https://github.com/deno-libs/wizard">https://github.com/deno-libs/wizard</a></p>\n<h3 id="deno-redis-v0200"><a href="https://github.com/denodrivers/redis/releases/tag/v0.20.0">deno-redis v0.20.0</a><a class="anchor" href="#deno-redis-v0200">§</a></h3>\n<p><code>deno-redis</code> v0.20.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>CLIENT PAUSE</code>コマンドでMODEを指定できるようになりました</li>\n<li>以下のコマンドがサポートされました:\n<ul>\n<li><code>CLIENT UNBLOCK</code></li>\n<li><code>CLIENT UNPAUSE</code></li>\n<li><code>CLIENT INFO</code></li>\n<li><code>CLIENT TRACKINGINFO</code></li>\n<li><code>CLIENT LIST</code></li>\n</ul>\n</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denodrivers/redis/releases/tag/v0.20.0">https://github.com/denodrivers/redis/releases/tag/v0.20.0</a></p>\n<h3 id="deno-codeview"><a href="https://github.com/c4spar/deno-codeview">deno-codeview</a><a class="anchor" href="#deno-codeview">§</a></h3>\n<p><code>deno-codeview</code>は、<code>deno test --coverage</code>によって生成されたカバレッジプロファイルを解析し、<a href="https://github.com/webview/webview_deno">WebView</a>にカバレッジレポートを表示するツールです。</p>\n<hr>\n<p><a href="https://github.com/c4spar/deno-codeview">https://github.com/c4spar/deno-codeview</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "Deno\u672C\u4F53\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-v181%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Deno v1.8.1\u306E\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno_std-v0900%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.90.0\u306E\u30EA\u30EA\u30FC\u30B9")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E2\u30B8\u30E5\u30FC\u30EB\u306A\u3069\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#nano" }, "nano")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#depsbot" }, "depsbot")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#wizard" }, "wizard")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-redis-v0200" }, "deno-redis v0.20.0")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-codeview" }, "deno-codeview")))))),
    'author': "Yuki Tanaka",
    'contributors': [
        "Yuki Tanaka"
    ],
    'date': "2021/03/14",
    'updated': null,
    'excerpt': " 1. Deno本体の最新情報 1. Deno v1.8.1のリリース 2. deno_std v0.90.0のリリース 2. サードパーティモジュールなどの最新情報 1. nano 2. depsbot 3. wizard 4. deno-redis v0.20.0 5. deno-codeview Deno本体の最新情報 Den...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std",
        "nano",
        "depsbot",
        "wizard",
        "deno-redis",
        "deno-codeview"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/09/19.md",
                "title": "2021/09/13〜2021/09/19の最新情報",
                "link": "articles/2021/09/19.html",
                "date": "2021/09/19",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "Deno",
                    "deno_std",
                    "Aleph.js",
                    "packup"
                ],
                "excerpt": " 1. Deno v2のリリースプランについて 2. Deno v1.14.0 3. deno_std v0.107.0 4. Aleph.js v0.3.0-beta.15 5. packup v0.1.0 6. deno-diplodocus Deno v2のリリースプランについて Deno v2のリリースプランが公開されました。 ..."
            },
            {
                "pagePath": "articles/2021/09/12.md",
                "title": "2021/09/06〜2021/09/12の最新情報",
                "link": "articles/2021/09/12.html",
                "date": "2021/09/12",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "Deno",
                    "deno_mongo"
                ],
                "excerpt": " 1. Deno 2.0のスコープについて 1. Deno 2.0に向けて検討中の機能の例 (今後、変更される可能性がありますので参考程度に...) 2. vercel-deno v1.0.0 3. deno_mongo v0.26.0 Deno 2.0のスコープについて GitHub Discussionsに..."
            },
            {
                "pagePath": "articles/2021/09/05.md",
                "title": "2021/08/30〜2021/09/05の最新情報",
                "link": "articles/2021/09/05.html",
                "date": "2021/09/05",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "Deno Deploy",
                    "Aleph.js",
                    "Ultra"
                ],
                "excerpt": " 1. Aleph.js v0.3.0-beta.9 2. Deno Deploy Beta2 3. deployctl v0.4.0 4. Ultra Aleph.js v0.3.0-beta.9 Aleph.jsのv0.3.0-beta.9がリリースされました。 主な変更点として、サーバから返却されるCache-Controlの値がpublic,..."
            },
            {
                "pagePath": "articles/2021/08/29.md",
                "title": "2021/08/23〜2021/08/29の最新情報",
                "link": "articles/2021/08/29.html",
                "date": "2021/08/29",
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
                    "Aleph.js"
                ],
                "excerpt": " 1. Deno v1.13.2 2. deno_std v0.106.0 3. MDNでDenoがサポートされました 4. Aleph.js v0.3.0 betaバージョン Deno v1.13.2 Deno v1.13.2がリリースされました。 このリリースではバグ修正を中心に行われています。 変更点: ..."
            },
            {
                "pagePath": "articles/2021/08/22.md",
                "title": "2021/08/16〜2021/08/22の最新情報",
                "link": "articles/2021/08/22.html",
                "date": "2021/08/22",
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
                    "deno_doc",
                    "Oak",
                    "alosaur",
                    "deno-postgres",
                    "deno_mongo",
                    "djwt"
                ],
                "excerpt": " 1. Deno v1.13.1 2. deno_std v0.105.0 3. deno_doc v0.11.0 4. Oak v9.0.0 5. Alosaur v0.33.0 6. djwt v2.3 7. deno_postgres v0.12.0 8. deno_mongo v0.25.0 Deno v1.13.1 Deno v1.13.1がリリースされました。 deno testや..."
            },
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
                "count": 38
            },
            {
                "name": "notice",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "deno",
                "count": 27
            },
            {
                "name": "deno_std",
                "count": 19
            },
            {
                "name": "deno-postgres",
                "count": 6
            },
            {
                "name": "Oak",
                "count": 6
            },
            {
                "name": "Deno Deploy",
                "count": 5
            },
            {
                "name": "deno-redis",
                "count": 5
            },
            {
                "name": "Aleph.js",
                "count": 3
            },
            {
                "name": "deno-sqlite",
                "count": 3
            },
            {
                "name": "deno_mongo",
                "count": 3
            },
            {
                "name": "Trex",
                "count": 3
            },
            {
                "name": "alosaur",
                "count": 2
            },
            {
                "name": "Deno",
                "count": 2
            },
            {
                "name": "luath",
                "count": 2
            },
            {
                "name": "packup",
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
                "name": "deno_doc",
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
                "name": "djwt",
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
                "name": "Ultra",
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
