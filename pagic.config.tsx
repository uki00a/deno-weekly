import { React } from "./deps.ts";

export default {
  root: "https://uki00a.github.io/deno-weekly/",
  title: "週間Deno",
  description: "このサイトでは、毎週Denoに関わる最新情報を発信しています。",
  srcDir: ".",
  theme: "blog",
  plugins: ["blog", "ga"],
  head: (
    <>
      <link
        rel="icon"
        href="https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico"
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@uki00a" />
      <meta name="twitter:creator" content="@uki00a" />
    </>
  ),
  blog: {
    root: "/articles",
    social: {
      github: "uki00a",
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
      icon: "czs-home-l",
    },
    {
      text: "タグ一覧",
      link: "https://uki00a.github.io/deno-weekly/tags",
      icon: "czs-tag-l",
    },
    {
      text: "カテゴリ一覧",
      link: "https://uki00a.github.io/deno-weekly/categories",
      icon: "czs-category-l",
    },
    {
      text: "アーカイブ",
      link: "https://uki00a.github.io/deno-weekly/archives",
      icon: "czs-box-l",
    },
    {
      text: "このサイトについて",
      link: "https://uki00a.github.io/deno-weekly/about/index.html",
      icon: "czs-about-l",
    },
  ],
};
