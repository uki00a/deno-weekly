import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Gtag from 'https://uki00a.github.io/deno-weekly/_gtag.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/09/19.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/09/19.html",
    'title': "2021/09/13〜2021/09/19の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-v2%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">Deno v2のリリースプランについて</a></li><li><a href="#deno-v1140">Deno v1.14.0</a></li><li><a href="#deno_std-v01070">deno_std v0.107.0</a></li><li><a href="#alephjs-v030-beta15">Aleph.js v0.3.0-beta.15</a></li><li><a href="#packup-v010">packup v0.1.0</a></li><li><a href="#deno-diplodocus">deno-diplodocus</a></li></ol></nav><h2 id="deno-v2%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"><a href="https://github.com/denoland/deno/issues/12110">Deno v2のリリースプランについて</a><a class="anchor" href="#deno-v2%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>Deno v2のリリースプランが公開されました。</p>\n<ul>\n<li><a href="https://github.com/denoland/deno/issues/12110">https://github.com/denoland/deno/issues/12110</a></li>\n</ul>\n<p>10/12にDeno v1.15, 11/22にDeno v2がリリース予定とのことです</p>\n<p>また、<a href="https://github.com/denoland/deno/discussions/12108">GitHub Discussions</a>にて、v2で実施予定の追加の変更点やDenoのエコシステムの拡大に関する議論内容などについて公開されています。</p>\n<p><strong>追加の変更点(今後、内容が変わる可能性があります！):</strong></p>\n<ul>\n<li><a href="https://github.com/denoland/deno/issues/7394">NotCapableエラーの導入</a>\n<ul>\n<li>DenoのパーミッションエラーとOSによって発生したパーミッションエラーを区別できるようにすることが目的のようです</li>\n</ul>\n</li>\n<li><a href="https://github.com/denoland/deno/issues/12107">Deno.read()のDeno.write()などの削除</a></li>\n<li><a href="https://github.com/denoland/deno/issues/7623">Import AssertionsとJSON Modules</a></li>\n<li><a href="https://github.com/denoland/deno/issues/12109">opメトリクスのリファクタリング/整頓</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/issues/12110">Deno 2.0 Release Plan</a></li>\n<li><a href="https://github.com/denoland/deno/discussions/12108">Design Meeting 2021-09-16</a></li>\n</ul>\n<h2 id="deno-v1140"><a href="https://github.com/denoland/deno/releases/tag/v1.14.0">Deno v1.14.0</a><a class="anchor" href="#deno-v1140">§</a></h2>\n<p>Deno v1.14.0がリリースされました。</p>\n<p>TypeScript v4.4への更新、<code>deno fmt</code>や<code>deno lint</code>で設定ファイルがサポート、Web Crypto APIの強化、<code>Deno.upgradeWebSocket</code>の安定化、<a href="https://wicg.github.io/urlpattern/">URLPattern</a>の実装、シグナルAPI(unstable)への破壊的変更などが実施されています。</p>\n<p>また、magurotunaさんによる日本語の紹介記事が公開されています(<a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-14-0">https://zenn.dev/magurotuna/articles/deno-release-note-1-14-0</a>)</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>deno fmt</code>/<code>deno lint</code>\n<ul>\n<li><code>deno fmt</code> でJSDocコメントへの基本的なサポートが追加されました</li>\n<li><code>deno fmt</code>と<code>deno lint</code>の挙動を設定ファイルやCLIオプションで変更できるようになりました</li>\n</ul>\n</li>\n<li>ネイティブHTTPサーバ\n<ul>\n<li><code>Deno.upgradeWebSocket</code>が安定化されました</li>\n<li><code>Deno.upgradeWebSocket</code> でUpgradeヘッダの大文字・小文字の違いを区別しないように修正されました</li>\n<li>ネイティブHTTPサーバでリクエストボディが消費されなかった場合に発生するリソースリークが修正されました</li>\n</ul>\n</li>\n<li>FFI\n<ul>\n<li><code>Deno.FFIPermissionDescriptor</code>が<code>Deno.FfiPermissionDescriptor</code>にリネームされました (<strong>破壊的変更</strong>)</li>\n<li><code>Deno.dlopen</code>の引数として<code>URL</code>オブジェクトがサポートされました</li>\n</ul>\n</li>\n<li>Web Crypto API\n<ul>\n<li><code>SubtleCrypto#generateKey</code> でAESキーの生成がサポートされました</li>\n<li><code>SubtleCrypto#exportKey</code> でRSAキーをPKCS #8形式でエクスポートできるようになりました</li>\n<li><code>SubtleCrypto#generateKey</code>でECDHがサポートされました</li>\n<li><code>SubtleCrypto#importKey/deriveBits</code> でHKDFとPBKDF2がサポートされました</li>\n<li><code>SubtleCrypto#encrypt/decrypt/generateKey</code>でRSA-OAEPがサポートされました</li>\n<li><code>SubtleCrypto#importKey</code>でRSAキーをPKCS #8フォーマットでインポートできるようになりました</li>\n<li><code>SubtleCrypto#importKey</code>でJWK形式のHMACキーのインポートがサポートされました</li>\n<li><code>SubtleCrypto#exportKey</code>でHMACキーをJWK形式でエクスポートできるようになりました</li>\n<li><code>SubtleCrypto.verify</code> でECDSAがサポートされました</li>\n</ul>\n</li>\n<li>Worker\n<ul>\n<li>Worker内でDeno名前空間がconfigurableに変更されました</li>\n<li>Worker内でDeno名前空間の<code>Object.freeze</code>による凍結が実施されなくなりました</li>\n<li><code>postMessage</code>の<code>transfer</code>引数で<code>ArrayBuffer</code>を指定した場合、それがコピーされずにWorkerに転送されるようになりました</li>\n<li><code>self.close</code> によってWorkerが閉じられると、それよりも前に送信されたメッセージが親のワーカーに送信されない問題が修正されました</li>\n</ul>\n</li>\n<li>シグナルAPI\n<ul>\n<li>Deno.SignalがenumからUnion型に変更されました (<strong>破壊的変更</strong>) それに合わせて、<code>Deno.Process#kill</code>の引数が<code>number</code>型から<code>string</code>型へ変更されています</li>\n<li><code>Deno.signals</code>が削除されました (<strong>破壊的変更</strong>)</li>\n<li><code>Deno.kill</code>の第２引数(<code>signal</code>パラメータ)が<code>number</code>型から<code>Deno.Signal</code>型へ変更されました (<strong>破壊的変更</strong>)</li>\n<li>Windows上でシグナルAPIを使用した際に、プロセスをパニックさせずにエラーを返却するように修正されました</li>\n</ul>\n</li>\n<li><code>deno test</code>\n<ul>\n<li><code>--ignore</code>オプションがサポートされました</li>\n<li>全テストケースの終了時に、未解決の<code>Promise</code>やopが存在する場合でもプロセスが終了するように変更されました</li>\n</ul>\n</li>\n<li>新規API\n<ul>\n<li>(unstable) <code>URLPattern</code> がサポートされました</li>\n<li>(unstable) <code>Deno.run</code>で<code>uid</code>や<code>gid</code>の指定がサポートされました</li>\n<li>(unstable) ファイルのロックAPIが実装されました (<code>Deno.flock/flockSync/funlock/funlockSync</code>)</li>\n</ul>\n</li>\n<li>その他\n<ul>\n<li>内部のTypeScriptが4.4に更新されました</li>\n<li><code>Deno.createHttpClient</code> でクライアント証明書を指定できるようになりました</li>\n<li><code>console.table</code> で数値のみを含む列が右寄せで表示されるように修正されました</li>\n<li><code>--watch</code>オプション使用時に、再起動前に<code>unload</code>イベントが発火しない問題が修正されました</li>\n<li><code>DENO_AUTH_TOKENS</code>環境変数でBASIC認証がサポートされました</li>\n<li><code>DOMException</code>が出力される際のフォーマットが改善されました</li>\n<li><code>DiagnosticMessageChain</code> の<code>message</code>プロパティが<code>messageText</code>にリネームされました</li>\n<li><code>FileReader</code>のWeb標準との互換性が向上しました</li>\n<li>Import mapsを使用している際に、import節で指定されたURLにクエリ文字列などが含まれていると、それがパーセントエンコードされてしまう問題が修正されました</li>\n<li><code>Deno.permissions.request</code>の使用時に、プロンプトを表示する前にstdinの内容がクリアされるように修正されました</li>\n</ul>\n</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-14-0">Deno 1.14.0 がリリースされたので新機能や変更点の紹介</a></li>\n<li><a href="https://deno.com/blog/v1.14">https://deno.com/blog/v1.14</a></li>\n</ul>\n<h2 id="deno_std-v01070"><a href="https://github.com/denoland/deno_std/releases/tag/0.107.0">deno_std v0.107.0</a><a class="anchor" href="#deno_std-v01070">§</a></h2>\n<p>deno_std v0.107.0がリリースされました。</p>\n<p><a href="https://zenn.dev/kawarimidoll/articles/db250a329c2f22">collectionsモジュールへの機能の追加</a>やhttp/cookieモジュールへの破壊的変更などが実施されています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>http/cookie</code>: 各関数が引数として<code>Headers</code>オブジェクトを受け取るように変更されました (破壊的変更)</li>\n<li><code>collections</code>: <code>findSingle</code>/<code>runningReduce</code>/<code>sample</code>/<code>dropWhile</code>/<code>maxWith</code>/<code>minWith</code>/<code>reduceGroups</code>/<code>slidingWindows</code>が実装されました</li>\n<li><code>collections/includesValue</code>: prototypeに設定されたプロパティを対象外とするように修正されました</li>\n<li><code>io/streams</code>: <code>readableStreamFromIterable</code>にジェネレータを渡した場合、返却された<code>ReadableStream</code>の<code>cancel</code>メソッドが呼ばれた際に、ジェネレータの<code>throw</code>メソッドを呼ぶように修正されました</li>\n<li><code>encoding/yaml</code>: セキュリティのため、<code>!!js/function</code>による関数のパースが無効化されました</li>\n<li><code>signal</code>: Deno v1.14のシグナルAPIの変更に合わせた修正が実施されました</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://zenn.dev/kawarimidoll/articles/db250a329c2f22">Deno標準ライブラリ0.107.0で増強されたcollectionsの紹介</a></li>\n<li><a href="https://github.com/denoland/deno_std/releases/tag/0.107.0">https://github.com/denoland/deno_std/releases/tag/0.107.0</a></li>\n</ul>\n<h2 id="alephjs-v030-beta15"><a href="https://github.com/alephjs/aleph.js/releases/tag/v0.3.0-beta.15">Aleph.js v0.3.0-beta.15</a><a class="anchor" href="#alephjs-v030-beta15">§</a></h2>\n<p>Aleph.js v0.3.0-beta.15がリリースされました。</p>\n<p><a href="https://github.com/alephjs/aleph.js/blob/v0.3.0-beta.15/plugins/json.ts">json-loaderプラグイン</a>が追加されています (<a href="https://github.com/denoland/deno/issues/7623">DenoでJSON Modulesがサポートされたら削除される予定のようです</a>)</p>\n<hr>\n<p><a href="https://github.com/alephjs/aleph.js/releases/tag/v0.3.0-beta.15">https://github.com/alephjs/aleph.js/releases/tag/v0.3.0-beta.15</a></p>\n<h2 id="packup-v010"><a href="https://github.com/kt3k/packup/releases/tag/v0.1.0">packup v0.1.0</a><a class="anchor" href="#packup-v010">§</a></h2>\n<p>packup v0.1.0がリリースされました。</p>\n<p><a href="https://github.com/kt3k/packup/tree/v0.1.0/examples/scss-no-import">Sassの基本的なサポート</a>が追加されています。</p>\n<hr>\n<p><a href="https://github.com/kt3k/packup/releases/tag/v0.1.0">https://github.com/kt3k/packup/releases/tag/v0.1.0</a></p>\n<h2 id="deno-diplodocus"><a href="https://github.com/kawarimidoll/deno-diplodocus">deno-diplodocus</a><a class="anchor" href="#deno-diplodocus">§</a></h2>\n<p>deno-diplodocusはDeno Deploy上にドキュメントサイトを構築するためのモジュールです。</p>\n<hr>\n<p><a href="https://github.com/kawarimidoll/deno-diplodocus">https://github.com/kawarimidoll/deno-diplodocus</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" }),
        React.createElement("meta", { content: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png", property: "og:image" }),
        React.createElement(Gtag, { id: "G-MK2K2MRMBF" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-v2%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">Deno v2のリリースプランについて</a></li><li><a href="#deno-v1140">Deno v1.14.0</a></li><li><a href="#deno_std-v01070">deno_std v0.107.0</a></li><li><a href="#alephjs-v030-beta15">Aleph.js v0.3.0-beta.15</a></li><li><a href="#packup-v010">packup v0.1.0</a></li><li><a href="#deno-diplodocus">deno-diplodocus</a></li></ol></nav><h2 id="deno-v2%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"><a href="https://github.com/denoland/deno/issues/12110">Deno v2のリリースプランについて</a><a class="anchor" href="#deno-v2%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>Deno v2のリリースプランが公開されました。</p>\n<ul>\n<li><a href="https://github.com/denoland/deno/issues/12110">https://github.com/denoland/deno/issues/12110</a></li>\n</ul>\n<p>10/12にDeno v1.15, 11/22にDeno v2がリリース予定とのことです</p>\n<p>また、<a href="https://github.com/denoland/deno/discussions/12108">GitHub Discussions</a>にて、v2で実施予定の追加の変更点やDenoのエコシステムの拡大に関する議論内容などについて公開されています。</p>\n<p><strong>追加の変更点(今後、内容が変わる可能性があります！):</strong></p>\n<ul>\n<li><a href="https://github.com/denoland/deno/issues/7394">NotCapableエラーの導入</a>\n<ul>\n<li>DenoのパーミッションエラーとOSによって発生したパーミッションエラーを区別できるようにすることが目的のようです</li>\n</ul>\n</li>\n<li><a href="https://github.com/denoland/deno/issues/12107">Deno.read()のDeno.write()などの削除</a></li>\n<li><a href="https://github.com/denoland/deno/issues/7623">Import AssertionsとJSON Modules</a></li>\n<li><a href="https://github.com/denoland/deno/issues/12109">opメトリクスのリファクタリング/整頓</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/issues/12110">Deno 2.0 Release Plan</a></li>\n<li><a href="https://github.com/denoland/deno/discussions/12108">Design Meeting 2021-09-16</a></li>\n</ul>\n<h2 id="deno-v1140"><a href="https://github.com/denoland/deno/releases/tag/v1.14.0">Deno v1.14.0</a><a class="anchor" href="#deno-v1140">§</a></h2>\n<p>Deno v1.14.0がリリースされました。</p>\n<p>TypeScript v4.4への更新、<code>deno fmt</code>や<code>deno lint</code>で設定ファイルがサポート、Web Crypto APIの強化、<code>Deno.upgradeWebSocket</code>の安定化、<a href="https://wicg.github.io/urlpattern/">URLPattern</a>の実装、シグナルAPI(unstable)への破壊的変更などが実施されています。</p>\n<p>また、magurotunaさんによる日本語の紹介記事が公開されています(<a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-14-0">https://zenn.dev/magurotuna/articles/deno-release-note-1-14-0</a>)</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>deno fmt</code>/<code>deno lint</code>\n<ul>\n<li><code>deno fmt</code> でJSDocコメントへの基本的なサポートが追加されました</li>\n<li><code>deno fmt</code>と<code>deno lint</code>の挙動を設定ファイルやCLIオプションで変更できるようになりました</li>\n</ul>\n</li>\n<li>ネイティブHTTPサーバ\n<ul>\n<li><code>Deno.upgradeWebSocket</code>が安定化されました</li>\n<li><code>Deno.upgradeWebSocket</code> でUpgradeヘッダの大文字・小文字の違いを区別しないように修正されました</li>\n<li>ネイティブHTTPサーバでリクエストボディが消費されなかった場合に発生するリソースリークが修正されました</li>\n</ul>\n</li>\n<li>FFI\n<ul>\n<li><code>Deno.FFIPermissionDescriptor</code>が<code>Deno.FfiPermissionDescriptor</code>にリネームされました (<strong>破壊的変更</strong>)</li>\n<li><code>Deno.dlopen</code>の引数として<code>URL</code>オブジェクトがサポートされました</li>\n</ul>\n</li>\n<li>Web Crypto API\n<ul>\n<li><code>SubtleCrypto#generateKey</code> でAESキーの生成がサポートされました</li>\n<li><code>SubtleCrypto#exportKey</code> でRSAキーをPKCS #8形式でエクスポートできるようになりました</li>\n<li><code>SubtleCrypto#generateKey</code>でECDHがサポートされました</li>\n<li><code>SubtleCrypto#importKey/deriveBits</code> でHKDFとPBKDF2がサポートされました</li>\n<li><code>SubtleCrypto#encrypt/decrypt/generateKey</code>でRSA-OAEPがサポートされました</li>\n<li><code>SubtleCrypto#importKey</code>でRSAキーをPKCS #8フォーマットでインポートできるようになりました</li>\n<li><code>SubtleCrypto#importKey</code>でJWK形式のHMACキーのインポートがサポートされました</li>\n<li><code>SubtleCrypto#exportKey</code>でHMACキーをJWK形式でエクスポートできるようになりました</li>\n<li><code>SubtleCrypto.verify</code> でECDSAがサポートされました</li>\n</ul>\n</li>\n<li>Worker\n<ul>\n<li>Worker内でDeno名前空間がconfigurableに変更されました</li>\n<li>Worker内でDeno名前空間の<code>Object.freeze</code>による凍結が実施されなくなりました</li>\n<li><code>postMessage</code>の<code>transfer</code>引数で<code>ArrayBuffer</code>を指定した場合、それがコピーされずにWorkerに転送されるようになりました</li>\n<li><code>self.close</code> によってWorkerが閉じられると、それよりも前に送信されたメッセージが親のワーカーに送信されない問題が修正されました</li>\n</ul>\n</li>\n<li>シグナルAPI\n<ul>\n<li>Deno.SignalがenumからUnion型に変更されました (<strong>破壊的変更</strong>) それに合わせて、<code>Deno.Process#kill</code>の引数が<code>number</code>型から<code>string</code>型へ変更されています</li>\n<li><code>Deno.signals</code>が削除されました (<strong>破壊的変更</strong>)</li>\n<li><code>Deno.kill</code>の第２引数(<code>signal</code>パラメータ)が<code>number</code>型から<code>Deno.Signal</code>型へ変更されました (<strong>破壊的変更</strong>)</li>\n<li>Windows上でシグナルAPIを使用した際に、プロセスをパニックさせずにエラーを返却するように修正されました</li>\n</ul>\n</li>\n<li><code>deno test</code>\n<ul>\n<li><code>--ignore</code>オプションがサポートされました</li>\n<li>全テストケースの終了時に、未解決の<code>Promise</code>やopが存在する場合でもプロセスが終了するように変更されました</li>\n</ul>\n</li>\n<li>新規API\n<ul>\n<li>(unstable) <code>URLPattern</code> がサポートされました</li>\n<li>(unstable) <code>Deno.run</code>で<code>uid</code>や<code>gid</code>の指定がサポートされました</li>\n<li>(unstable) ファイルのロックAPIが実装されました (<code>Deno.flock/flockSync/funlock/funlockSync</code>)</li>\n</ul>\n</li>\n<li>その他\n<ul>\n<li>内部のTypeScriptが4.4に更新されました</li>\n<li><code>Deno.createHttpClient</code> でクライアント証明書を指定できるようになりました</li>\n<li><code>console.table</code> で数値のみを含む列が右寄せで表示されるように修正されました</li>\n<li><code>--watch</code>オプション使用時に、再起動前に<code>unload</code>イベントが発火しない問題が修正されました</li>\n<li><code>DENO_AUTH_TOKENS</code>環境変数でBASIC認証がサポートされました</li>\n<li><code>DOMException</code>が出力される際のフォーマットが改善されました</li>\n<li><code>DiagnosticMessageChain</code> の<code>message</code>プロパティが<code>messageText</code>にリネームされました</li>\n<li><code>FileReader</code>のWeb標準との互換性が向上しました</li>\n<li>Import mapsを使用している際に、import節で指定されたURLにクエリ文字列などが含まれていると、それがパーセントエンコードされてしまう問題が修正されました</li>\n<li><code>Deno.permissions.request</code>の使用時に、プロンプトを表示する前にstdinの内容がクリアされるように修正されました</li>\n</ul>\n</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-14-0">Deno 1.14.0 がリリースされたので新機能や変更点の紹介</a></li>\n<li><a href="https://deno.com/blog/v1.14">https://deno.com/blog/v1.14</a></li>\n</ul>\n<h2 id="deno_std-v01070"><a href="https://github.com/denoland/deno_std/releases/tag/0.107.0">deno_std v0.107.0</a><a class="anchor" href="#deno_std-v01070">§</a></h2>\n<p>deno_std v0.107.0がリリースされました。</p>\n<p><a href="https://zenn.dev/kawarimidoll/articles/db250a329c2f22">collectionsモジュールへの機能の追加</a>やhttp/cookieモジュールへの破壊的変更などが実施されています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>http/cookie</code>: 各関数が引数として<code>Headers</code>オブジェクトを受け取るように変更されました (破壊的変更)</li>\n<li><code>collections</code>: <code>findSingle</code>/<code>runningReduce</code>/<code>sample</code>/<code>dropWhile</code>/<code>maxWith</code>/<code>minWith</code>/<code>reduceGroups</code>/<code>slidingWindows</code>が実装されました</li>\n<li><code>collections/includesValue</code>: prototypeに設定されたプロパティを対象外とするように修正されました</li>\n<li><code>io/streams</code>: <code>readableStreamFromIterable</code>にジェネレータを渡した場合、返却された<code>ReadableStream</code>の<code>cancel</code>メソッドが呼ばれた際に、ジェネレータの<code>throw</code>メソッドを呼ぶように修正されました</li>\n<li><code>encoding/yaml</code>: セキュリティのため、<code>!!js/function</code>による関数のパースが無効化されました</li>\n<li><code>signal</code>: Deno v1.14のシグナルAPIの変更に合わせた修正が実施されました</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://zenn.dev/kawarimidoll/articles/db250a329c2f22">Deno標準ライブラリ0.107.0で増強されたcollectionsの紹介</a></li>\n<li><a href="https://github.com/denoland/deno_std/releases/tag/0.107.0">https://github.com/denoland/deno_std/releases/tag/0.107.0</a></li>\n</ul>\n<h2 id="alephjs-v030-beta15"><a href="https://github.com/alephjs/aleph.js/releases/tag/v0.3.0-beta.15">Aleph.js v0.3.0-beta.15</a><a class="anchor" href="#alephjs-v030-beta15">§</a></h2>\n<p>Aleph.js v0.3.0-beta.15がリリースされました。</p>\n<p><a href="https://github.com/alephjs/aleph.js/blob/v0.3.0-beta.15/plugins/json.ts">json-loaderプラグイン</a>が追加されています (<a href="https://github.com/denoland/deno/issues/7623">DenoでJSON Modulesがサポートされたら削除される予定のようです</a>)</p>\n<hr>\n<p><a href="https://github.com/alephjs/aleph.js/releases/tag/v0.3.0-beta.15">https://github.com/alephjs/aleph.js/releases/tag/v0.3.0-beta.15</a></p>\n<h2 id="packup-v010"><a href="https://github.com/kt3k/packup/releases/tag/v0.1.0">packup v0.1.0</a><a class="anchor" href="#packup-v010">§</a></h2>\n<p>packup v0.1.0がリリースされました。</p>\n<p><a href="https://github.com/kt3k/packup/tree/v0.1.0/examples/scss-no-import">Sassの基本的なサポート</a>が追加されています。</p>\n<hr>\n<p><a href="https://github.com/kt3k/packup/releases/tag/v0.1.0">https://github.com/kt3k/packup/releases/tag/v0.1.0</a></p>\n<h2 id="deno-diplodocus"><a href="https://github.com/kawarimidoll/deno-diplodocus">deno-diplodocus</a><a class="anchor" href="#deno-diplodocus">§</a></h2>\n<p>deno-diplodocusはDeno Deploy上にドキュメントサイトを構築するためのモジュールです。</p>\n<hr>\n<p><a href="https://github.com/kawarimidoll/deno-diplodocus">https://github.com/kawarimidoll/deno-diplodocus</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-v2%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" }, "Deno v2\u306E\u30EA\u30EA\u30FC\u30B9\u30D7\u30E9\u30F3\u306B\u3064\u3044\u3066")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-v1140" }, "Deno v1.14.0")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno_std-v01070" }, "deno_std v0.107.0")),
            React.createElement("li", null,
                React.createElement("a", { href: "#alephjs-v030-beta15" }, "Aleph.js v0.3.0-beta.15")),
            React.createElement("li", null,
                React.createElement("a", { href: "#packup-v010" }, "packup v0.1.0")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-diplodocus" }, "deno-diplodocus")))),
    'author': "uki00a",
    'contributors': [
        "uki00a"
    ],
    'date': "2021/09/19",
    'updated': null,
    'excerpt': " 1. Deno v2のリリースプランについて 2. Deno v1.14.0 3. deno_std v0.107.0 4. Aleph.js v0.3.0-beta.15 5. packup v0.1.0 6. deno-diplodocus Deno v2のリリースプランについて Deno v2のリリースプランが公開されました。 ...",
    'cover': undefined,
    'tags': [
        "Deno",
        "deno_std",
        "Aleph.js",
        "packup"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
                "date": "2021/05/02",
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
                "date": "2021/04/25",
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
                "pagePath": "articles/2021/04/18.md",
                "title": "2021/04/12〜2021/04/18の最新情報",
                "link": "articles/2021/04/18.html",
                "date": "2021/04/18",
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
                "date": "2021/04/11",
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
                "pagePath": "articles/2021/04/04.md",
                "title": "2021/03/29〜2021/04/04の最新情報",
                "link": "articles/2021/04/04.html",
                "date": "2021/04/04",
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
                "pagePath": "articles/2021/03/28.md",
                "title": "2021/03/22〜2021/03/28の最新情報",
                "link": "articles/2021/03/28.html",
                "date": "2021/03/28",
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
                "pagePath": "articles/2021/03/21.md",
                "title": "2021/03/15〜2021/03/21の最新情報",
                "link": "articles/2021/03/21.html",
                "date": "2021/03/21",
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
                "pagePath": "articles/2021/03/14.md",
                "title": "2021/03/08〜2021/03/14の最新情報",
                "link": "articles/2021/03/14.html",
                "date": "2021/03/14",
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
                "pagePath": "articles/2021/03/07.md",
                "title": "2021/03/01〜2021/03/07の最新情報",
                "link": "articles/2021/03/07.html",
                "date": "2021/03/07",
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
            },
            {
                "pagePath": "articles/2021/02/28.md",
                "title": "2021/02/22〜2021/02/28の最新情報",
                "link": "articles/2021/02/28.html",
                "date": "2021/02/28",
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
                "pagePath": "articles/2021/02/21.md",
                "title": "2021/02/15〜2021/02/21の最新情報",
                "link": "articles/2021/02/21.html",
                "date": "2021/02/21",
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
                "pagePath": "articles/2021/02/14.md",
                "title": "2021/02/08〜2021/02/14の最新情報",
                "link": "articles/2021/02/14.html",
                "date": "2021/02/14",
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
                "pagePath": "articles/2021/02/07.md",
                "title": "2021/02/01〜2021/02/07の最新情報",
                "link": "articles/2021/02/07.html",
                "date": "2021/02/07",
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
                "pagePath": "articles/2021/01/31.md",
                "title": "2021/01/25〜2021/01/31の最新情報",
                "link": "articles/2021/01/31.html",
                "date": "2021/01/31",
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
                "date": "2021/01/24",
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
                "pagePath": "articles/2021/01/17.md",
                "title": "2021/01/11〜2021/01/17の最新情報",
                "link": "articles/2021/01/17.html",
                "date": "2021/01/17",
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
                "pagePath": "articles/2021/01/10.md",
                "title": "2021/01/04〜2021/01/10の最新情報",
                "link": "articles/2021/01/10.html",
                "date": "2021/01/10",
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
                "pagePath": "articles/2021/01/03.md",
                "title": "2020/12/28〜2021/01/03の最新情報",
                "link": "articles/2021/01/03.html",
                "date": "2021/01/03",
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
                "date": "2021/01/02",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
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
