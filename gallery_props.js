import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "gallery.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "gallery.html",
    'title': "ギャラリー",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>ギャラリー</h1>\n<nav class="toc"><ol><li><a href="#%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB">モジュール</a></li><li><a href="#web%E3%82%B5%E3%82%A4%E3%83%88">Webサイト</a></li></ol></nav><p>このページには、このサイトで紹介したことのあるDenoモジュールなどの一覧を掲載しています。</p>\n<h2 id="%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB">モジュール<a class="anchor" href="#%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th style="text-align:center">名前</th>\n<th style="text-align:center">概要</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/postgres">deno-postgres</a></td>\n<td style="text-align:center">PostgreSQLクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/mysql">deno_mysql</a></td>\n<td style="text-align:center">MySQLクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/dyedgreen/deno-sqlite">deno-sqlite</a></td>\n<td style="text-align:center">SQLiteライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/redis">deno-redis</a></td>\n<td style="text-align:center">Redisクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/deno_mongo">deno_mongo</a></td>\n<td style="text-align:center">MongoDBクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/jeremyBanks/database">x/database</a></td>\n<td style="text-align:center">データベースドライバの共通インターフェース</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/halvardssm/deno-nessie">Nessie</a></td>\n<td style="text-align:center">データベースマイグレーションツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/oakserver/oak">Oak</a></td>\n<td style="text-align:center">Webフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lucacasonato/fresh">fresh</a></td>\n<td style="text-align:center">Deno Deployで動作するPreactベースのフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/keroxp/servest">Servest</a></td>\n<td style="text-align:center">Webサーバ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/alosaur/alosaur">alosaur</a></td>\n<td style="text-align:center">Webフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/jurassiscripts/velociraptor">Velociraptor</a></td>\n<td style="text-align:center">タスクランナ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/crewdevio/Trex">Trex</a></td>\n<td style="text-align:center">パッケージマネージャ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/c4spar/deno-cliffy">Cliffy</a></td>\n<td style="text-align:center">CLIフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/dsherret/ts-morph">ts-morph</a></td>\n<td style="text-align:center">TypeScriptコンパイラAPIのラッパ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/dsherret/code-block-writer">code-block-writer</a></td>\n<td style="text-align:center">TypeScript/JavaScriptコードの生成をサポート</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/packup">packup</a></td>\n<td style="text-align:center">Parcelライクなビルドツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/cmorten/luath">luath</a></td>\n<td style="text-align:center">フロントエンドビルドツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/mizchi/swdev">swdev</a></td>\n<td style="text-align:center">Service Workerベースのフロントエンドビルドツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/cmorten/deno-rollup">deno-rollup</a></td>\n<td style="text-align:center">RollupのDenoポート</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/timreichen/Bundler">Bundler</a></td>\n<td style="text-align:center">フロントエンド開発向けのバンドラ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/twd">twd</a></td>\n<td style="text-align:center">Tailwind CSSライクなCLIツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/open-source-labs/vno">vno</a></td>\n<td style="text-align:center">Vue.jsアプリの開発ツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/crewdevio/Snel">Snel</a></td>\n<td style="text-align:center">Svelteアプリの開発ツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/alosaur/angular_deno">angular_deno</a></td>\n<td style="text-align:center">Angularのレンダリングエンジン</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/nanojsx/nano">Nano JSX</a></td>\n<td style="text-align:center">Deno・Node.jsで動作するJSXライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/xcatliu/pagic">Pagic</a></td>\n<td style="text-align:center">Reactベースのスタティックサイトジェネレータ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lumeland/lume">Lume</a></td>\n<td style="text-align:center">スタティックサイトジェネレータ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/eta-dev/eta">Eta</a></td>\n<td style="text-align:center">Deno・Node.jsなどで動作するテンプレートエンジン</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/oslabs-beta/sono.io">sono.io</a></td>\n<td style="text-align:center">WebSocketを使ったリアルタイムアプリケーション用のモジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/oslabs-beta/dashport">Dashport</a></td>\n<td style="text-align:center">Passport.jsライクな認証モジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/deno-libs/gql">deno-libs/gql</a></td>\n<td style="text-align:center">GraphQLサーバ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/b-fuze/deno-dom">deno-dom</a></td>\n<td style="text-align:center">DOM実装</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lucacasonato/deno-puppeteer">deno-puppeteer</a></td>\n<td style="text-align:center">PuppeteerのDenoポート</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/drashland/sinco">Sinco</a></td>\n<td style="text-align:center">ブラウザオートメーションツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/satyarohith/sift">Sift</a></td>\n<td style="text-align:center">Deno Deployのルーティングモジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/mandarineorg/little-crony">little_crony</a></td>\n<td style="text-align:center">CRONライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/littledivy/deno_sdl2">deno_sdl2</a></td>\n<td style="text-align:center">SDL2へのバインディング</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denosaurs/pngs">pngs</a></td>\n<td style="text-align:center">pngイメージのエンコード/デコード</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lowlighter/xml">xml</a></td>\n<td style="text-align:center">Denoで動作するXMLモジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kitsonk/xhr">xhr</a></td>\n<td style="text-align:center"><code>XMLHttpRequest</code>のポリフィル</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://deno.land/x/slack_web_api">slack_web_api</a></td>\n<td style="text-align:center">Slack APIのクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/deno-libs/wizard">wizard</a></td>\n<td style="text-align:center">BDDスタイルのテストライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/mikeal/estest">estest</a></td>\n<td style="text-align:center">Deno・Node.jsなどで動作するテストフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/githubocto/flat">Flat Data</a></td>\n<td style="text-align:center">HTTPエンドポイントまたはSQLクエリからデータを取得し、GitHubリポジトリに格納するためのGitHubアクション</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denoland/setup-deno">denoland/setup-deno</a></td>\n<td style="text-align:center">GitHub ActionsからDenoを使用する</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denosaurs/depsbot">depsbot</a></td>\n<td style="text-align:center">モジュールの更新状態をチェックしてくれるGitHubアクション</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/ebebbington/depcheck">depcheck</a></td>\n<td style="text-align:center">未使用モジュールの検出を行うツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/wperron/terraform-deploy-provider">terraform-deploy-provider</a></td>\n<td style="text-align:center">Deno DeployのTerraformプロパイダ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/deploy_dir">deploy_dir</a></td>\n<td style="text-align:center">Deno Deployへのデプロイツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/deno-bin">deno-bin</a></td>\n<td style="text-align:center">Node.jsからDenoを使用するためのツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/deno_license_checker">deno_license_checker</a></td>\n<td style="text-align:center">ライセンスヘッダのチェックツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/postui/land">land</a></td>\n<td style="text-align:center">deno.land/xで公開されているツールを保存せずに実行するツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/c4spar/deno-codeview">deno-codeview</a></td>\n<td style="text-align:center">カバレッジレポートの閲覧ツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denoland/vscode_deno">vscode_deno</a></td>\n<td style="text-align:center">Denoのvscode拡張</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/vim-denops/denops.vim">denops.vim</a></td>\n<td style="text-align:center">DenoでVimプラグインを書くためのエコシステム</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/emacs-ng/emacs-ng">emacs-ng</a></td>\n<td style="text-align:center">Denoを搭載したEmacsのフォーク</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="web%E3%82%B5%E3%82%A4%E3%83%88">Webサイト<a class="anchor" href="#web%E3%82%B5%E3%82%A4%E3%83%88">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th style="text-align:center">名前</th>\n<th style="text-align:center">概要</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><a href="https://wpt.deno.land/">wpt.deno.land</a></td>\n<td style="text-align:center">DenoのWPTの網羅率を掲載しています</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://status.deno.land/">status.deno.land</a></td>\n<td style="text-align:center">Denoのモジュールレジストリなどの稼働状況を掲載</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://crux.land/">crux.land</a></td>\n<td style="text-align:center">スクリプトレジストリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://zenn.dev/uki00a/books/effective-deno">Effective Deno</a></td>\n<td style="text-align:center">Denoの本</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://www.youtube.com/watch?v=LoknuwupOIE">Deno internals - how modern JavaScript runtime is built</a></td>\n<td style="text-align:center">Denoの内部構造について</td>\n</tr>\n</tbody>\n</table></div>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "\u30AE\u30E3\u30E9\u30EA\u30FC"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB">モジュール</a></li><li><a href="#web%E3%82%B5%E3%82%A4%E3%83%88">Webサイト</a></li></ol></nav><p>このページには、このサイトで紹介したことのあるDenoモジュールなどの一覧を掲載しています。</p>\n<h2 id="%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB">モジュール<a class="anchor" href="#%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th style="text-align:center">名前</th>\n<th style="text-align:center">概要</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/postgres">deno-postgres</a></td>\n<td style="text-align:center">PostgreSQLクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/mysql">deno_mysql</a></td>\n<td style="text-align:center">MySQLクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/dyedgreen/deno-sqlite">deno-sqlite</a></td>\n<td style="text-align:center">SQLiteライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/redis">deno-redis</a></td>\n<td style="text-align:center">Redisクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denodrivers/deno_mongo">deno_mongo</a></td>\n<td style="text-align:center">MongoDBクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/jeremyBanks/database">x/database</a></td>\n<td style="text-align:center">データベースドライバの共通インターフェース</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/halvardssm/deno-nessie">Nessie</a></td>\n<td style="text-align:center">データベースマイグレーションツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/oakserver/oak">Oak</a></td>\n<td style="text-align:center">Webフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lucacasonato/fresh">fresh</a></td>\n<td style="text-align:center">Deno Deployで動作するPreactベースのフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/keroxp/servest">Servest</a></td>\n<td style="text-align:center">Webサーバ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/alosaur/alosaur">alosaur</a></td>\n<td style="text-align:center">Webフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/jurassiscripts/velociraptor">Velociraptor</a></td>\n<td style="text-align:center">タスクランナ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/crewdevio/Trex">Trex</a></td>\n<td style="text-align:center">パッケージマネージャ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/c4spar/deno-cliffy">Cliffy</a></td>\n<td style="text-align:center">CLIフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/dsherret/ts-morph">ts-morph</a></td>\n<td style="text-align:center">TypeScriptコンパイラAPIのラッパ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/dsherret/code-block-writer">code-block-writer</a></td>\n<td style="text-align:center">TypeScript/JavaScriptコードの生成をサポート</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/packup">packup</a></td>\n<td style="text-align:center">Parcelライクなビルドツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/cmorten/luath">luath</a></td>\n<td style="text-align:center">フロントエンドビルドツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/mizchi/swdev">swdev</a></td>\n<td style="text-align:center">Service Workerベースのフロントエンドビルドツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/cmorten/deno-rollup">deno-rollup</a></td>\n<td style="text-align:center">RollupのDenoポート</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/timreichen/Bundler">Bundler</a></td>\n<td style="text-align:center">フロントエンド開発向けのバンドラ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/twd">twd</a></td>\n<td style="text-align:center">Tailwind CSSライクなCLIツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/open-source-labs/vno">vno</a></td>\n<td style="text-align:center">Vue.jsアプリの開発ツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/crewdevio/Snel">Snel</a></td>\n<td style="text-align:center">Svelteアプリの開発ツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/alosaur/angular_deno">angular_deno</a></td>\n<td style="text-align:center">Angularのレンダリングエンジン</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/nanojsx/nano">Nano JSX</a></td>\n<td style="text-align:center">Deno・Node.jsで動作するJSXライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/xcatliu/pagic">Pagic</a></td>\n<td style="text-align:center">Reactベースのスタティックサイトジェネレータ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lumeland/lume">Lume</a></td>\n<td style="text-align:center">スタティックサイトジェネレータ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/eta-dev/eta">Eta</a></td>\n<td style="text-align:center">Deno・Node.jsなどで動作するテンプレートエンジン</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/oslabs-beta/sono.io">sono.io</a></td>\n<td style="text-align:center">WebSocketを使ったリアルタイムアプリケーション用のモジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/oslabs-beta/dashport">Dashport</a></td>\n<td style="text-align:center">Passport.jsライクな認証モジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/deno-libs/gql">deno-libs/gql</a></td>\n<td style="text-align:center">GraphQLサーバ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/b-fuze/deno-dom">deno-dom</a></td>\n<td style="text-align:center">DOM実装</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lucacasonato/deno-puppeteer">deno-puppeteer</a></td>\n<td style="text-align:center">PuppeteerのDenoポート</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/drashland/sinco">Sinco</a></td>\n<td style="text-align:center">ブラウザオートメーションツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/satyarohith/sift">Sift</a></td>\n<td style="text-align:center">Deno Deployのルーティングモジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/mandarineorg/little-crony">little_crony</a></td>\n<td style="text-align:center">CRONライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/littledivy/deno_sdl2">deno_sdl2</a></td>\n<td style="text-align:center">SDL2へのバインディング</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denosaurs/pngs">pngs</a></td>\n<td style="text-align:center">pngイメージのエンコード/デコード</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/lowlighter/xml">xml</a></td>\n<td style="text-align:center">Denoで動作するXMLモジュール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kitsonk/xhr">xhr</a></td>\n<td style="text-align:center"><code>XMLHttpRequest</code>のポリフィル</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://deno.land/x/slack_web_api">slack_web_api</a></td>\n<td style="text-align:center">Slack APIのクライアント</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/deno-libs/wizard">wizard</a></td>\n<td style="text-align:center">BDDスタイルのテストライブラリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/mikeal/estest">estest</a></td>\n<td style="text-align:center">Deno・Node.jsなどで動作するテストフレームワーク</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/githubocto/flat">Flat Data</a></td>\n<td style="text-align:center">HTTPエンドポイントまたはSQLクエリからデータを取得し、GitHubリポジトリに格納するためのGitHubアクション</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denoland/setup-deno">denoland/setup-deno</a></td>\n<td style="text-align:center">GitHub ActionsからDenoを使用する</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denosaurs/depsbot">depsbot</a></td>\n<td style="text-align:center">モジュールの更新状態をチェックしてくれるGitHubアクション</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/ebebbington/depcheck">depcheck</a></td>\n<td style="text-align:center">未使用モジュールの検出を行うツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/wperron/terraform-deploy-provider">terraform-deploy-provider</a></td>\n<td style="text-align:center">Deno DeployのTerraformプロパイダ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/deploy_dir">deploy_dir</a></td>\n<td style="text-align:center">Deno Deployへのデプロイツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/deno-bin">deno-bin</a></td>\n<td style="text-align:center">Node.jsからDenoを使用するためのツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/kt3k/deno_license_checker">deno_license_checker</a></td>\n<td style="text-align:center">ライセンスヘッダのチェックツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/postui/land">land</a></td>\n<td style="text-align:center">deno.land/xで公開されているツールを保存せずに実行するツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/c4spar/deno-codeview">deno-codeview</a></td>\n<td style="text-align:center">カバレッジレポートの閲覧ツール</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/denoland/vscode_deno">vscode_deno</a></td>\n<td style="text-align:center">Denoのvscode拡張</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/vim-denops/denops.vim">denops.vim</a></td>\n<td style="text-align:center">DenoでVimプラグインを書くためのエコシステム</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://github.com/emacs-ng/emacs-ng">emacs-ng</a></td>\n<td style="text-align:center">Denoを搭載したEmacsのフォーク</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="web%E3%82%B5%E3%82%A4%E3%83%88">Webサイト<a class="anchor" href="#web%E3%82%B5%E3%82%A4%E3%83%88">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th style="text-align:center">名前</th>\n<th style="text-align:center">概要</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><a href="https://wpt.deno.land/">wpt.deno.land</a></td>\n<td style="text-align:center">DenoのWPTの網羅率を掲載しています</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://status.deno.land/">status.deno.land</a></td>\n<td style="text-align:center">Denoのモジュールレジストリなどの稼働状況を掲載</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://crux.land/">crux.land</a></td>\n<td style="text-align:center">スクリプトレジストリ</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://zenn.dev/uki00a/books/effective-deno">Effective Deno</a></td>\n<td style="text-align:center">Denoの本</td>\n</tr>\n<tr>\n<td style="text-align:center"><a href="https://www.youtube.com/watch?v=LoknuwupOIE">Deno internals - how modern JavaScript runtime is built</a></td>\n<td style="text-align:center">Denoの内部構造について</td>\n</tr>\n</tbody>\n</table></div>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB" }, "\u30E2\u30B8\u30E5\u30FC\u30EB")),
            React.createElement("li", null,
                React.createElement("a", { href: "#web%E3%82%B5%E3%82%A4%E3%83%88" }, "Web\u30B5\u30A4\u30C8")))),
    'author': "Yuki Tanaka",
    'contributors': [
        "Yuki Tanaka"
    ],
    'date': "2021-08-08T10:30:24.000Z",
    'updated': null,
    'excerpt': " 1. モジュール 2. Webサイト このページには、このサイトで紹介したことのあるDenoモジュールなどの一覧を掲載しています。 モジュール 名前 概要 deno-postgres PostgreSQLクライアント deno_mysql MySQLクライアント deno-s...",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
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
                "count": 32
            },
            {
                "name": "notice",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "deno",
                "count": 24
            },
            {
                "name": "deno_std",
                "count": 15
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
