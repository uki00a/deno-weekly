export default {
    root: "https://uki00a.github.io/deno-weekly",
    title: "週間Deno",
    description: "このサイトでは、毎週Denoに関わる最新情報を発信しています。",
    srcDir: ".",
    theme: "blog",
    plugins: ["blog", "ga"],
    head: React.createElement("link", { rel: "icon", href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico" }),
    blog: {
        root: "/articles",
        social: {
            github: "uki00a/deno-weekly",
            email: "uki00a@gmail.com",
            twitter: "uki00a",
        },
    },
    ga: typeof Deno === "undefined" ? undefined : {
        id: Deno.env.get("TRACKING_ID"),
    },
    tools: {
        editOnGitHub: true,
        backToTop: true,
    },
    md: {
        tocEnabled: true,
    },
    nav: [
        {
            text: "ホーム",
            link: "https://uki00a.github.io/deno-weekly",
        },
        {
            text: "タグ一覧",
            link: "https://uki00a.github.io/deno-weekly/tags",
        },
        {
            text: "カテゴリ一覧",
            link: "https://uki00a.github.io/deno-weekly/categories",
        },
        {
            text: "アーカイブ",
            link: "https://uki00a.github.io/deno-weekly/archives",
        },
        {
            text: "このサイトについて",
            link: "https://uki00a.github.io/deno-weekly/about/index.html",
        },
    ],
};
