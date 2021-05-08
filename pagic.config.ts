export default {
  title: "週間Deno",
  description: "このサイトでは、毎週Denoに関わる最新情報を発信しています。",
  srcDir: ".",
  theme: "blog",
  plugins: ["blog", "ga"],
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
      link: "/",
      icon: "czs-home-l",
    },
    {
      text: "タグ一覧",
      link: "/tags",
      icon: "czs-tag-l",
    },
    {
      text: "カテゴリ一覧",
      link: "/categories",
      icon: "czs-category-l",
    },
    {
      text: "アーカイブ",
      link: "/archives",
      icon: "czs-box-l",
    },
    {
      text: "このサイトについて",
      link: "/about/index.html",
      icon: "czs-about-l",
    },
  ],
};
