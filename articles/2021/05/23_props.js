import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/05/23.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/05/23.html",
    'title': "2021/05/17〜2021/05/23の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-v1102%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.10.2がリリース</a></li><li><a href="#deno_std-v0970%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.97.0がリリース</a></li><li><a href="#denolandsetup-deno-v100%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">denoland/setup-deno v1.0.0がリリース</a></li><li><a href="#flat-data">Flat Data</a></li><li><a href="#packup---parcel%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">packup - Parcelライクなビルドツール</a></li><li><a href="#luath-v060v070v080%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">luath v0.6.0/v0.7.0/v0.8.0がリリース</a></li></ol></nav><h2 id="deno-v1102%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.10.2">Deno v1.10.2がリリース</a><a class="anchor" href="#deno-v1102%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Denoのv1.10.2がリリースされました。</p>\n<p>このリリースではCVE-2021-32619へのセキュリティ上の修正が含まれるため、できるだけ早くこのバージョンへアップグレードすることを推奨されています。</p>\n<p><strong>その他の変更点:</strong></p>\n<ul>\n<li><code>.vscode/settings.json</code>などで<code>deno.config</code>に相対パスが設定されていた場合、<code>deno lsp</code>で適切に設定が読まれない問題が修正されました。</li>\n<li>TypeScriptファイルをimportする際は、<code>X-TypeScript-Types</code>ヘッダが無視されるようになりました。</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.10.2">https://github.com/denoland/deno/releases/tag/v1.10.2</a></li>\n<li><a href="https://twitter.com/deno_land/status/1394353166863454213">https://twitter.com/deno_land/status/1394353166863454213</a></li>\n</ul>\n<h2 id="deno_std-v0970%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.97.0">deno_std v0.97.0がリリース</a><a class="anchor" href="#deno_std-v0970%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<ul>\n<li>io/buffer: Deno Deployでも型エラーなしで使えるようになりました。</li>\n<li>io: <code>types.d.ts</code>が追加されました。</li>\n<li>io/bufio: <code>readDelim</code>や<code>readStringDelim</code>でデリミタが内部で複数のチャンクにまたがった際に、誤った結果を返す問題が修正されました。</li>\n<li>node/events: <code>EventEmitter#on</code>などにリスナとして関数以外の値を渡すと、エラーが発生するようになりました。</li>\n<li>testing: <code>assertObjectMatch</code>で配列が適切に取り扱われるようになりました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.97.0">https://github.com/denoland/deno_std/releases/tag/0.97.0</a></p>\n<h2 id="denolandsetup-deno-v100%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/setup-deno/releases/tag/v1.0.0">denoland/setup-deno v1.0.0がリリース</a><a class="anchor" href="#denolandsetup-deno-v100%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p><code>denoland/setup-deno</code>はGitHub ActionsからDenoを利用するためのアクションです。</p>\n<p>v1.0.0がリリースされたため、すでに<a href="https://github.com/denolib/setup-deno">denolib/setup-deno</a>をお使いの場合は、そちらから移行するとよさそうです。</p>\n<hr>\n<p><a href="https://github.com/denoland/setup-deno/releases/tag/v1.0.0">https://github.com/denoland/setup-deno/releases/tag/v1.0.0</a></p>\n<h2 id="flat-data"><a href="https://github.com/githubocto/flat">Flat Data</a><a class="anchor" href="#flat-data">§</a></h2>\n<p><a href="https://github.com/githubocto/flat">Flat Data</a>は、HTTPエンドポイントまたはSQLクエリからデータを取得し、GitHubリポジトリに格納するためのGitHubアクションです。</p>\n<p>Denoを使用したJavaScript/TypeScriptファイルの実行がサポートされており、ダウンロードされたデータを変換することができます。</p>\n<p>また、GitHubリポジトリに格納されたデータを可視化するために、<a href="https://flatgithub.com/">Flat Viewer</a>というツールも提供されています。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/githubocto/flat">https://github.com/githubocto/flat</a></li>\n<li><a href="https://octo.github.com/projects/flat-data">Flat Dataについて</a></li>\n<li><a href="https://flatgithub.com/">Flat Viewer</a></li>\n</ul>\n<h2 id="packup---parcel%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/kt3k/packup">packup</a> - Parcelライクなビルドツール<a class="anchor" href="#packup---parcel%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">§</a></h2>\n<p>packupという<a href="https://parceljs.org/">Parcel</a>ビルドツールが公開されました。</p>\n<p>Parcelに影響を受けているようで、以下のような特徴があります。</p>\n<ul>\n<li>設定なしでアプリケーションコードをバンドルできる</li>\n<li>TypeScriptをサポート</li>\n<li>esbuildを使用した高速なビルド</li>\n</ul>\n<hr>\n<p><a href="https://github.com/kt3k/packup">https://github.com/kt3k/packup</a></p>\n<h2 id="luath-v060v070v080%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">luath v0.6.0/v0.7.0/v0.8.0がリリース<a class="anchor" href="#luath-v060v070v080%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Denoで実装されたフロントエンドビルドツールである<a href="https://github.com/cmorten/luath">luath</a>のv0.6.0/v0.7.0/v0.8.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>プロダクションアセットを生成するために、<code>luath build</code>コマンドが実装されました。</li>\n<li>プロダクションアセットを配信するために、<code>luath run</code>コマンドが実装されました。</li>\n<li>Import mapsの基本的なサポート</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/cmorten/luath/releases/tag/0.8.0">https://github.com/cmorten/luath/releases/tag/0.8.0</a></li>\n<li><a href="https://github.com/cmorten/luath/releases/tag/0.7.0">https://github.com/cmorten/luath/releases/tag/0.7.0</a></li>\n<li><a href="https://github.com/cmorten/luath/releases/tag/0.6.0">https://github.com/cmorten/luath/releases/tag/0.6.0</a></li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "G-MK2K2MRMBF" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" }),
            React.createElement("meta", { content: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png", property: "og:image" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-v1102%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.10.2がリリース</a></li><li><a href="#deno_std-v0970%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.97.0がリリース</a></li><li><a href="#denolandsetup-deno-v100%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">denoland/setup-deno v1.0.0がリリース</a></li><li><a href="#flat-data">Flat Data</a></li><li><a href="#packup---parcel%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">packup - Parcelライクなビルドツール</a></li><li><a href="#luath-v060v070v080%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">luath v0.6.0/v0.7.0/v0.8.0がリリース</a></li></ol></nav><h2 id="deno-v1102%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.10.2">Deno v1.10.2がリリース</a><a class="anchor" href="#deno-v1102%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Denoのv1.10.2がリリースされました。</p>\n<p>このリリースではCVE-2021-32619へのセキュリティ上の修正が含まれるため、できるだけ早くこのバージョンへアップグレードすることを推奨されています。</p>\n<p><strong>その他の変更点:</strong></p>\n<ul>\n<li><code>.vscode/settings.json</code>などで<code>deno.config</code>に相対パスが設定されていた場合、<code>deno lsp</code>で適切に設定が読まれない問題が修正されました。</li>\n<li>TypeScriptファイルをimportする際は、<code>X-TypeScript-Types</code>ヘッダが無視されるようになりました。</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.10.2">https://github.com/denoland/deno/releases/tag/v1.10.2</a></li>\n<li><a href="https://twitter.com/deno_land/status/1394353166863454213">https://twitter.com/deno_land/status/1394353166863454213</a></li>\n</ul>\n<h2 id="deno_std-v0970%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.97.0">deno_std v0.97.0がリリース</a><a class="anchor" href="#deno_std-v0970%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<ul>\n<li>io/buffer: Deno Deployでも型エラーなしで使えるようになりました。</li>\n<li>io: <code>types.d.ts</code>が追加されました。</li>\n<li>io/bufio: <code>readDelim</code>や<code>readStringDelim</code>でデリミタが内部で複数のチャンクにまたがった際に、誤った結果を返す問題が修正されました。</li>\n<li>node/events: <code>EventEmitter#on</code>などにリスナとして関数以外の値を渡すと、エラーが発生するようになりました。</li>\n<li>testing: <code>assertObjectMatch</code>で配列が適切に取り扱われるようになりました。</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.97.0">https://github.com/denoland/deno_std/releases/tag/0.97.0</a></p>\n<h2 id="denolandsetup-deno-v100%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/setup-deno/releases/tag/v1.0.0">denoland/setup-deno v1.0.0がリリース</a><a class="anchor" href="#denolandsetup-deno-v100%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p><code>denoland/setup-deno</code>はGitHub ActionsからDenoを利用するためのアクションです。</p>\n<p>v1.0.0がリリースされたため、すでに<a href="https://github.com/denolib/setup-deno">denolib/setup-deno</a>をお使いの場合は、そちらから移行するとよさそうです。</p>\n<hr>\n<p><a href="https://github.com/denoland/setup-deno/releases/tag/v1.0.0">https://github.com/denoland/setup-deno/releases/tag/v1.0.0</a></p>\n<h2 id="flat-data"><a href="https://github.com/githubocto/flat">Flat Data</a><a class="anchor" href="#flat-data">§</a></h2>\n<p><a href="https://github.com/githubocto/flat">Flat Data</a>は、HTTPエンドポイントまたはSQLクエリからデータを取得し、GitHubリポジトリに格納するためのGitHubアクションです。</p>\n<p>Denoを使用したJavaScript/TypeScriptファイルの実行がサポートされており、ダウンロードされたデータを変換することができます。</p>\n<p>また、GitHubリポジトリに格納されたデータを可視化するために、<a href="https://flatgithub.com/">Flat Viewer</a>というツールも提供されています。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/githubocto/flat">https://github.com/githubocto/flat</a></li>\n<li><a href="https://octo.github.com/projects/flat-data">Flat Dataについて</a></li>\n<li><a href="https://flatgithub.com/">Flat Viewer</a></li>\n</ul>\n<h2 id="packup---parcel%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/kt3k/packup">packup</a> - Parcelライクなビルドツール<a class="anchor" href="#packup---parcel%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">§</a></h2>\n<p>packupという<a href="https://parceljs.org/">Parcel</a>ビルドツールが公開されました。</p>\n<p>Parcelに影響を受けているようで、以下のような特徴があります。</p>\n<ul>\n<li>設定なしでアプリケーションコードをバンドルできる</li>\n<li>TypeScriptをサポート</li>\n<li>esbuildを使用した高速なビルド</li>\n</ul>\n<hr>\n<p><a href="https://github.com/kt3k/packup">https://github.com/kt3k/packup</a></p>\n<h2 id="luath-v060v070v080%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">luath v0.6.0/v0.7.0/v0.8.0がリリース<a class="anchor" href="#luath-v060v070v080%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Denoで実装されたフロントエンドビルドツールである<a href="https://github.com/cmorten/luath">luath</a>のv0.6.0/v0.7.0/v0.8.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>プロダクションアセットを生成するために、<code>luath build</code>コマンドが実装されました。</li>\n<li>プロダクションアセットを配信するために、<code>luath run</code>コマンドが実装されました。</li>\n<li>Import mapsの基本的なサポート</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/cmorten/luath/releases/tag/0.8.0">https://github.com/cmorten/luath/releases/tag/0.8.0</a></li>\n<li><a href="https://github.com/cmorten/luath/releases/tag/0.7.0">https://github.com/cmorten/luath/releases/tag/0.7.0</a></li>\n<li><a href="https://github.com/cmorten/luath/releases/tag/0.6.0">https://github.com/cmorten/luath/releases/tag/0.6.0</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-v1102%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Deno v1.10.2\u304C\u30EA\u30EA\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno_std-v0970%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.97.0\u304C\u30EA\u30EA\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#denolandsetup-deno-v100%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "denoland/setup-deno v1.0.0\u304C\u30EA\u30EA\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#flat-data" }, "Flat Data")),
            React.createElement("li", null,
                React.createElement("a", { href: "#packup---parcel%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB" }, "packup - Parcel\u30E9\u30A4\u30AF\u306A\u30D3\u30EB\u30C9\u30C4\u30FC\u30EB")),
            React.createElement("li", null,
                React.createElement("a", { href: "#luath-v060v070v080%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "luath v0.6.0/v0.7.0/v0.8.0\u304C\u30EA\u30EA\u30FC\u30B9")))),
    'author': "Yuki Tanaka",
    'contributors': [
        "Yuki Tanaka"
    ],
    'date': "2021-05-23T08:33:03.000Z",
    'updated': null,
    'excerpt': " 1. Deno v1.10.2がリリース 2. deno_std v0.97.0がリリース 3. denoland/setup-deno v1.0.0がリリース 4. Flat Data 5. packup - Parcelライクなビルドツール 6. luath v0.6.0/v0.7.0/v0.8.0がリリース Deno v1.10.2がリリース...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std",
        "Flat Data",
        "packup",
        "luath"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/05/16.md",
                "title": "2021/05/10〜2021/05/16の最新情報",
                "link": "articles/2021/05/16.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/05/23.md",
                "title": "2021/05/17〜2021/05/23の最新情報",
                "link": "articles/2021/05/23.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/05/02.md",
                "title": "2021/04/26〜2021/05/02の最新情報",
                "link": "articles/2021/05/02.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/03/07.md",
                "title": "2021/03/01〜2021/03/07の最新情報",
                "link": "articles/2021/03/07.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/03/21.md",
                "title": "2021/03/15〜2021/03/21の最新情報",
                "link": "articles/2021/03/21.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/03/28.md",
                "title": "2021/03/22〜2021/03/28の最新情報",
                "link": "articles/2021/03/28.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/01/10.md",
                "title": "2021/01/04〜2021/01/10の最新情報",
                "link": "articles/2021/01/10.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/01/17.md",
                "title": "2021/01/11〜2021/01/17の最新情報",
                "link": "articles/2021/01/17.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/01/03.md",
                "title": "2020/12/28〜2021/01/03の最新情報",
                "link": "articles/2021/01/03.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/01/31.md",
                "title": "2021/01/25〜2021/01/31の最新情報",
                "link": "articles/2021/01/31.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/01/02.md",
                "title": "はじめに",
                "link": "articles/2021/01/02.html",
                "date": "2021-05-23T08:33:03.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "notice"
                ],
                "excerpt": "このサイトでは、Denoに関する最新情報を定期的に発信しようと思います。 日頃からDenoに関するリポジトリや情報などをウォッチしており、どうせならそれに関する情報をアウトプットしてみようと思い、始めた試みです。 これか..."
            },
            {
                "pagePath": "articles/2021/04/25.md",
                "title": "2021/04/19〜2021/04/25の最新情報",
                "link": "articles/2021/04/25.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "date": "2021-05-23T08:33:03.000Z",
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
                "date": "2021-05-23T08:33:03.000Z",
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
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/02/07.md",
                "title": "2021/02/01〜2021/02/07の最新情報",
                "link": "articles/2021/02/07.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/02/21.md",
                "title": "2021/02/15〜2021/02/21の最新情報",
                "link": "articles/2021/02/21.html",
                "date": "2021-05-23T08:33:03.000Z",
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
                "date": "2021-05-23T08:33:03.000Z",
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
                "pagePath": "articles/2021/02/28.md",
                "title": "2021/02/22〜2021/02/28の最新情報",
                "link": "articles/2021/02/28.html",
                "date": "2021-05-23T08:33:03.000Z",
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
            }
        ],
        "categories": [
            {
                "name": "news",
                "count": 21
            },
            {
                "name": "notice",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "deno",
                "count": 15
            },
            {
                "name": "deno_std",
                "count": 9
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
                "name": "luath",
                "count": 2
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
                "name": "angular_deno",
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
                "name": "Flat Data",
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
