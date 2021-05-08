export default {
  title: "週間Deno",
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
};
