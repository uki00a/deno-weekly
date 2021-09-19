import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/Deno/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/Deno/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'title': "Deno",
    'content': null,
    'blog': {
        "isPost": false,
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
