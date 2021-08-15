import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/07/18.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/07/18.html",
    'title': "2021/07/12〜2021/07/18の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-v1120%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.12.0のリリース</a></li><li><a href="#deno_std-v01010%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.101.0のリリース</a></li><li><a href="#wptfyi%E3%81%ABdeno%E3%81%8C%E6%8E%B2%E8%BC%89">wpt.fyiにDenoが掲載</a></li><li><a href="#deno-unknownutil-v100%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-unknownutil v1.0.0のリリース</a></li></ol></nav><h2 id="deno-v1120%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.12.0">Deno v1.12.0のリリース</a><a class="anchor" href="#deno-v1120%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Deno v1.12.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><a href="https://developer.mozilla.org/ja/docs/Web/API/MessageChannel">MessageChannel</a>と<a href="https://developer.mozilla.org/ja/docs/Web/API/MessagePort">MessagePort</a>がサポートされました</li>\n<li><code>Deno</code>名前空間の<code>Object.freeze</code>による凍結が解除され、<code>configurable</code>になりました</li>\n<li><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming">WebAssembly.instantiateStreaming</a>がサポートされました</li>\n<li><code>tsconfig.json</code>や<code>Deno.emit</code>で<code>types</code>オプションがサポートされました</li>\n<li><code>/// &lt;reference types=&quot;...&quot; /&gt;</code>がサポートされました</li>\n<li><code>SharedArrayBuffer</code>のworker間での共有がサポートされました</li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey">SubtleCrypto.generateKey</a>と<a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign">SubtleCrypto.sign</a>、<a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/verify">SubtleCrypto.verify</a>がサポートされました</li>\n<li><code>Deno.createHttpClient</code>で<code>proxy</code>オプションがサポートされました</li>\n<li>ネイティブHTTPサーバでWebSocketがサポートされました (<code>Deno.upgradeWebSocket</code>)</li>\n<li>Denoのデバッグ機能(<code>--inspect/--inspect-brk</code>)が改善され、コンソールへの出力がDevToolsとターミナルの両方に出力されるようになりました</li>\n<li><code>deno lsp</code>の<code>textDocument/hover</code>メソッドで依存モジュールの情報を表示できるようになりました</li>\n<li>REPLの補完の挙動が改善されました</li>\n<li>REPLでimport宣言がサポートされました</li>\n<li>REPLでTypeScriptがサポートされました</li>\n<li>REPLなどで<code>Event</code>や<code>Request</code>などのクラスの<code>prototype</code>を評価しようとすると、プロセスがクラッシュする問題が修正されました</li>\n<li><code>deno test</code>で<code>--shuffle</code>と<code>--fail-fast=&lt;N&gt;</code>オプションがサポートされました</li>\n<li><code>DedicatedWorkerGlobalScope</code>のイベントハンドラが仕様通りに動作するように修正されました</li>\n<li><code>Deno.ppid</code>と<code>Deno.memoryUsage</code>がstableになりました</li>\n<li><code>console.table</code>の出力が改善されました</li>\n<li>fetch APIでユーザが指定したHOSTヘッダが無視されるようになりました</li>\n<li>fetch APIでOPTIONSリクエストを送信したときに、レスポンスボディが設定されるように修正されました</li>\n<li><a href="https://w3c.github.io/perf-timing-primer/">performance API</a>のWeb標準との互換性が向上しました</li>\n<li><code>SignalStream#dispose</code>を呼んだ後にも<code>SignalStream#then</code>で登録したコールバックが呼ばれてしまう問題が修正されました</li>\n<li><code>Deno.copy</code>が非推奨化されました</li>\n<li>循環依存の関係にある複数のモジュールを平行で動的importすると、プロセスがクラッシュする問題が修正されました</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.12.0">https://github.com/denoland/deno/releases/tag/v1.12.0</a></li>\n<li><a href="https://deno.com/blog/v1.12">https://deno.com/blog/v1.12</a></li>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-12-0">Deno 1.12.0 がリリースされたので新機能や変更点の紹介</a></li>\n</ul>\n<h2 id="deno_std-v01010%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.101.0">deno_std v0.101.0のリリース</a><a class="anchor" href="#deno_std-v01010%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>deno_stdのv0.101.0がリリースされました。</p>\n<p>このリリースにはいくつかの破壊的変更が含まれています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>encoding/hex: <code>encodedLen</code>, <code>encodeToString</code>, <code>decodedLen</code>, <code>decodeString</code>が削除され、<code>errInvalidByte</code>と<code>errLength</code>が非公開になりました (<strong>破壊的変更</strong>)</li>\n<li>mime/multipart: <code>MultipartReader#readForm</code>の戻り値である<code>MultipartFormData</code>の各メソッドが配列を返却するように変更されました。それに合わせて、<code>file</code>と<code>value</code>メソッドがそれぞれ<code>files</code>と<code>values</code>にリネームされています (<strong>破壊的変更</strong>)</li>\n<li>uuid/v4: <code>generate</code>関数が非推奨化されました (Web Crypto APIが実装されたため)</li>\n<li>uuid/v5: Web Crypto APIの実装に合わせ、<code>generate</code>関数のシグネチャが変更されました (<strong>破壊的変更</strong>)</li>\n<li>async: <code>deadline</code>関数と<code>debounce</code>関数が追加されました</li>\n<li>encoding/toml: 不適切な形式の文字列が適切に取り扱われるよう修正されました</li>\n<li>encoding/toml: <code>stringify</code>で複数の型が混在した配列が適切にシリアライズされない問題が修正されました</li>\n<li>encoding/toml: 不適切な空白文字が含まれていた際に、例外が投げられるように修正されました</li>\n<li>hash: BLAKE3ハッシュ関数がサポートされました</li>\n<li>http/cookie: Domain属性に不適切な形式の値が設定されていないかチェックされるようになりました</li>\n<li>http/cookie: <code>deleteCookie</code>でPath属性とDomain属性の指定がサポートされました</li>\n<li>http/cookie: <code>setCookie</code>で<code>maxAge</code>オプションに<code>0</code>を指定するとエラーが発生する問題が修正されました</li>\n<li>io/bufio: <code>readLines</code>関数で、EOFに達した際に余分な空文字列が<code>yield</code>される問題が修正されました</li>\n<li>io/util: Deno v1.12.0における<code>Deno.copy</code>の非推奨化に合わせ、<code>copy</code>関数が追加されました</li>\n<li>io/streams: <code>writableStreamFromWriter</code>に<code>autoClose</code>オプションが追加され、ストリームが閉じた際に<code>Writer</code>も自動で閉じるかを制御できるようになりました</li>\n<li>node/module: <code>createRequire</code>に不正なURLを指定した際のエラーメッセージが親切になりました</li>\n<li>path/glob: <code>?</code>で任意の文字へのマッチがサポートされました</li>\n<li>testing/asserts: <code>fail</code>の戻り値の型が<code>never</code>に変更されました</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.101.0">https://github.com/denoland/deno_std/releases/tag/0.101.0</a></p>\n<h2 id="wptfyi%E3%81%ABdeno%E3%81%8C%E6%8E%B2%E8%BC%89"><a href="https://wpt.fyi/results/url?label=master&amp;label=experimental&amp;product=chrome&amp;product=firefox&amp;product=safari&amp;product=deno&amp;aligned">wpt.fyiにDenoが掲載</a><a class="anchor" href="#wptfyi%E3%81%ABdeno%E3%81%8C%E6%8E%B2%E8%BC%89">§</a></h2>\n<p><a href="https://wpt.fyi/results/url?label=master&amp;label=experimental&amp;product=chrome&amp;product=firefox&amp;product=safari&amp;product=deno&amp;aligned">wpt.fyi</a>にDenoが掲載されました。</p>\n<p>このサイトでは、ブラウザなどの各プラットフォームにおける<a href="https://web-platform-tests.org/">web platform tests</a>への準拠度を確認することが出来ます。</p>\n<hr>\n<ul>\n<li><a href="https://deno.com/blog/v1.12">https://deno.com/blog/v1.12</a></li>\n<li><a href="https://wpt.fyi/results/url?label=master&amp;label=experimental&amp;product=chrome&amp;product=firefox&amp;product=safari&amp;product=deno&amp;aligned">wpt.fyi</a></li>\n</ul>\n<h2 id="deno-unknownutil-v100%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/lambdalisue/deno-unknownutil">deno-unknownutil v1.0.0のリリース</a><a class="anchor" href="#deno-unknownutil-v100%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p><code>deno-unknownutil</code>はDenoで<code>unknown</code>型を取り扱うためのユーティリティです。</p>\n<p><a href="https://github.com/vim-denops/denops.vim">denops.vim</a>のプラグイン開発など、<code>unknown</code>型を頻繁に取り扱う必要があるケースにおいて便利そうです。</p>\n<hr>\n<p><a href="https://github.com/lambdalisue/deno-unknownutil">https://github.com/lambdalisue/deno-unknownutil</a></p>'
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
            __html: '<nav class="toc"><ol><li><a href="#deno-v1120%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.12.0のリリース</a></li><li><a href="#deno_std-v01010%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.101.0のリリース</a></li><li><a href="#wptfyi%E3%81%ABdeno%E3%81%8C%E6%8E%B2%E8%BC%89">wpt.fyiにDenoが掲載</a></li><li><a href="#deno-unknownutil-v100%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-unknownutil v1.0.0のリリース</a></li></ol></nav><h2 id="deno-v1120%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.12.0">Deno v1.12.0のリリース</a><a class="anchor" href="#deno-v1120%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Deno v1.12.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><a href="https://developer.mozilla.org/ja/docs/Web/API/MessageChannel">MessageChannel</a>と<a href="https://developer.mozilla.org/ja/docs/Web/API/MessagePort">MessagePort</a>がサポートされました</li>\n<li><code>Deno</code>名前空間の<code>Object.freeze</code>による凍結が解除され、<code>configurable</code>になりました</li>\n<li><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming">WebAssembly.instantiateStreaming</a>がサポートされました</li>\n<li><code>tsconfig.json</code>や<code>Deno.emit</code>で<code>types</code>オプションがサポートされました</li>\n<li><code>/// &lt;reference types=&quot;...&quot; /&gt;</code>がサポートされました</li>\n<li><code>SharedArrayBuffer</code>のworker間での共有がサポートされました</li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey">SubtleCrypto.generateKey</a>と<a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign">SubtleCrypto.sign</a>、<a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/verify">SubtleCrypto.verify</a>がサポートされました</li>\n<li><code>Deno.createHttpClient</code>で<code>proxy</code>オプションがサポートされました</li>\n<li>ネイティブHTTPサーバでWebSocketがサポートされました (<code>Deno.upgradeWebSocket</code>)</li>\n<li>Denoのデバッグ機能(<code>--inspect/--inspect-brk</code>)が改善され、コンソールへの出力がDevToolsとターミナルの両方に出力されるようになりました</li>\n<li><code>deno lsp</code>の<code>textDocument/hover</code>メソッドで依存モジュールの情報を表示できるようになりました</li>\n<li>REPLの補完の挙動が改善されました</li>\n<li>REPLでimport宣言がサポートされました</li>\n<li>REPLでTypeScriptがサポートされました</li>\n<li>REPLなどで<code>Event</code>や<code>Request</code>などのクラスの<code>prototype</code>を評価しようとすると、プロセスがクラッシュする問題が修正されました</li>\n<li><code>deno test</code>で<code>--shuffle</code>と<code>--fail-fast=&lt;N&gt;</code>オプションがサポートされました</li>\n<li><code>DedicatedWorkerGlobalScope</code>のイベントハンドラが仕様通りに動作するように修正されました</li>\n<li><code>Deno.ppid</code>と<code>Deno.memoryUsage</code>がstableになりました</li>\n<li><code>console.table</code>の出力が改善されました</li>\n<li>fetch APIでユーザが指定したHOSTヘッダが無視されるようになりました</li>\n<li>fetch APIでOPTIONSリクエストを送信したときに、レスポンスボディが設定されるように修正されました</li>\n<li><a href="https://w3c.github.io/perf-timing-primer/">performance API</a>のWeb標準との互換性が向上しました</li>\n<li><code>SignalStream#dispose</code>を呼んだ後にも<code>SignalStream#then</code>で登録したコールバックが呼ばれてしまう問題が修正されました</li>\n<li><code>Deno.copy</code>が非推奨化されました</li>\n<li>循環依存の関係にある複数のモジュールを平行で動的importすると、プロセスがクラッシュする問題が修正されました</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.12.0">https://github.com/denoland/deno/releases/tag/v1.12.0</a></li>\n<li><a href="https://deno.com/blog/v1.12">https://deno.com/blog/v1.12</a></li>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-12-0">Deno 1.12.0 がリリースされたので新機能や変更点の紹介</a></li>\n</ul>\n<h2 id="deno_std-v01010%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.101.0">deno_std v0.101.0のリリース</a><a class="anchor" href="#deno_std-v01010%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>deno_stdのv0.101.0がリリースされました。</p>\n<p>このリリースにはいくつかの破壊的変更が含まれています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>encoding/hex: <code>encodedLen</code>, <code>encodeToString</code>, <code>decodedLen</code>, <code>decodeString</code>が削除され、<code>errInvalidByte</code>と<code>errLength</code>が非公開になりました (<strong>破壊的変更</strong>)</li>\n<li>mime/multipart: <code>MultipartReader#readForm</code>の戻り値である<code>MultipartFormData</code>の各メソッドが配列を返却するように変更されました。それに合わせて、<code>file</code>と<code>value</code>メソッドがそれぞれ<code>files</code>と<code>values</code>にリネームされています (<strong>破壊的変更</strong>)</li>\n<li>uuid/v4: <code>generate</code>関数が非推奨化されました (Web Crypto APIが実装されたため)</li>\n<li>uuid/v5: Web Crypto APIの実装に合わせ、<code>generate</code>関数のシグネチャが変更されました (<strong>破壊的変更</strong>)</li>\n<li>async: <code>deadline</code>関数と<code>debounce</code>関数が追加されました</li>\n<li>encoding/toml: 不適切な形式の文字列が適切に取り扱われるよう修正されました</li>\n<li>encoding/toml: <code>stringify</code>で複数の型が混在した配列が適切にシリアライズされない問題が修正されました</li>\n<li>encoding/toml: 不適切な空白文字が含まれていた際に、例外が投げられるように修正されました</li>\n<li>hash: BLAKE3ハッシュ関数がサポートされました</li>\n<li>http/cookie: Domain属性に不適切な形式の値が設定されていないかチェックされるようになりました</li>\n<li>http/cookie: <code>deleteCookie</code>でPath属性とDomain属性の指定がサポートされました</li>\n<li>http/cookie: <code>setCookie</code>で<code>maxAge</code>オプションに<code>0</code>を指定するとエラーが発生する問題が修正されました</li>\n<li>io/bufio: <code>readLines</code>関数で、EOFに達した際に余分な空文字列が<code>yield</code>される問題が修正されました</li>\n<li>io/util: Deno v1.12.0における<code>Deno.copy</code>の非推奨化に合わせ、<code>copy</code>関数が追加されました</li>\n<li>io/streams: <code>writableStreamFromWriter</code>に<code>autoClose</code>オプションが追加され、ストリームが閉じた際に<code>Writer</code>も自動で閉じるかを制御できるようになりました</li>\n<li>node/module: <code>createRequire</code>に不正なURLを指定した際のエラーメッセージが親切になりました</li>\n<li>path/glob: <code>?</code>で任意の文字へのマッチがサポートされました</li>\n<li>testing/asserts: <code>fail</code>の戻り値の型が<code>never</code>に変更されました</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.101.0">https://github.com/denoland/deno_std/releases/tag/0.101.0</a></p>\n<h2 id="wptfyi%E3%81%ABdeno%E3%81%8C%E6%8E%B2%E8%BC%89"><a href="https://wpt.fyi/results/url?label=master&amp;label=experimental&amp;product=chrome&amp;product=firefox&amp;product=safari&amp;product=deno&amp;aligned">wpt.fyiにDenoが掲載</a><a class="anchor" href="#wptfyi%E3%81%ABdeno%E3%81%8C%E6%8E%B2%E8%BC%89">§</a></h2>\n<p><a href="https://wpt.fyi/results/url?label=master&amp;label=experimental&amp;product=chrome&amp;product=firefox&amp;product=safari&amp;product=deno&amp;aligned">wpt.fyi</a>にDenoが掲載されました。</p>\n<p>このサイトでは、ブラウザなどの各プラットフォームにおける<a href="https://web-platform-tests.org/">web platform tests</a>への準拠度を確認することが出来ます。</p>\n<hr>\n<ul>\n<li><a href="https://deno.com/blog/v1.12">https://deno.com/blog/v1.12</a></li>\n<li><a href="https://wpt.fyi/results/url?label=master&amp;label=experimental&amp;product=chrome&amp;product=firefox&amp;product=safari&amp;product=deno&amp;aligned">wpt.fyi</a></li>\n</ul>\n<h2 id="deno-unknownutil-v100%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/lambdalisue/deno-unknownutil">deno-unknownutil v1.0.0のリリース</a><a class="anchor" href="#deno-unknownutil-v100%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p><code>deno-unknownutil</code>はDenoで<code>unknown</code>型を取り扱うためのユーティリティです。</p>\n<p><a href="https://github.com/vim-denops/denops.vim">denops.vim</a>のプラグイン開発など、<code>unknown</code>型を頻繁に取り扱う必要があるケースにおいて便利そうです。</p>\n<hr>\n<p><a href="https://github.com/lambdalisue/deno-unknownutil">https://github.com/lambdalisue/deno-unknownutil</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-v1120%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Deno v1.12.0\u306E\u30EA\u30EA\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno_std-v01010%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.101.0\u306E\u30EA\u30EA\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#wptfyi%E3%81%ABdeno%E3%81%8C%E6%8E%B2%E8%BC%89" }, "wpt.fyi\u306BDeno\u304C\u63B2\u8F09")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-unknownutil-v100%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno-unknownutil v1.0.0\u306E\u30EA\u30EA\u30FC\u30B9")))),
    'author': "Yuki Tanaka",
    'contributors': [
        "Yuki Tanaka"
    ],
    'date': "2021/07/18",
    'updated': null,
    'excerpt': " 1. Deno v1.12.0のリリース 2. deno_std v0.101.0のリリース 3. wpt.fyiにDenoが掲載 4. deno-unknownutil v1.0.0のリリース Deno v1.12.0のリリース Deno v1.12.0がリリースされました。 変更点: - MessageChannelとMessageP...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std"
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
