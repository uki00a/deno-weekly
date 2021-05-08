const baseURL = Deno.env.get("URL") ?? "http://localhost:8000";

export default {
  urls: {
    home: new URL("/", baseURL).href,
    about: new URL("/about", baseURL).href,
    feed: new URL("/feed", baseURL).href,
  },
  srcDir: "./articles",
  theme: "blog",
  plugins: ["blog", "ga"],
  title: "週間Deno",
  ga: {
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
