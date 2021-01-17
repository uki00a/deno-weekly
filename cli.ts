import { dejs, ensureDir, Feed, frontMatter, marked, path } from "./deps.ts";

const rootDir = path.dirname(path.fromFileUrl(import.meta.url));
const articlesDir = path.join(rootDir, "articles");
const distDir = path.join(rootDir, "dist");
const template = await Deno.readTextFile(path.join(rootDir, "template.html"));
const url = Deno.env.get("URL") ?? "http://localhost:4507";
const trackingID = Deno.env.get("TRACKING_ID");

interface Page {
  path: string;
  title: string;
  description: string;
  contents: string;
  type: string;
}

interface Article extends Page {
  id: number;
  publishedAt?: Date | null;
  summary?: string;
}

async function main() {
  const articleFiles = Deno.args.length === 0 // TODO Use `std/flags`.
    ? sortStringsDesc(await collectFiles(articlesDir))
    : [path.resolve(Deno.args[0])];
  const articles = await Promise.all(articleFiles.map(createArticle));
  for (const article of articles) {
    await writePage(article);
    console.info(`[info] Generated ${article.path}`);
  }
  const indexPage = createIndex(articles);
  await writePage(indexPage);
  console.info(`[info] Generated ${indexPage.path}`);

  const feed = generateFeed(articles);
  await write("feed", feed);
  console.info(`[info] Generated feed`);

  const aboutPage = createAbout();
  await writePage(aboutPage);
  console.info(`[info] Generated about.html`);
}

function sortStringsDesc(items: string[]): string[] {
  return items.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function replaceExtname(fileName: string, newExtname: string): string {
  const extname = path.extname(fileName);
  return fileName.slice(0, -extname.length) + newExtname;
}

async function writePage(page: Page): Promise<void> {
  await write(page.path, await generateHTML(page));
}

async function write(filename: string, contents: string): Promise<void> {
  const distFilename = path.join(distDir, filename);
  await ensureDir(path.dirname(distFilename));
  await Deno.writeTextFile(distFilename, contents);
}

function generateHTML(page: Page): Promise<string> {
  return dejs.renderToString(template, {
    ...page,
    home: url,
    about: buildURL("/about.html"),
    feed: feedURL(),
    trackingID,
  });
}

function buildURL(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const normalizedURL = url.endsWith("/") ? url.slice(0, -1) : url;
  return normalizedURL + normalizedPath;
}

function feedURL(): string {
  return buildURL("/feed");
}

function generateFeed(articles: Article[]): string {
  const author = {
    name: "uki00a",
    email: "uki00a@gmail.com",
    link: "https://github.com/uki00a",
  };
  const image =
    "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png";
  const favicon =
    "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico";
  const feed = new Feed({
    title: "Deno Weekly",
    description: "Weekly News for Deno",
    id: url,
    link: url,
    language: "ja",
    image,
    favicon,
    copyright: "All rights reserved 2021, uki00a",
    feedLinks: {
      atom: feedURL(),
    },
    author,
  });
  for (const article of articles.slice(0, 20)) {
    feed.addItem({
      id: String(article.id),
      title: article.title,
      link: buildURL(article.path),
      description: article.description,
      content: article.summary ?? null,
      author: [author],
      contributor: [],
      date: article.publishedAt,
    });
  }
  feed.addCategory("IT");
  return feed.atom1();
}

async function collectFiles(dir: string): Promise<string[]> {
  const pages = [] as Array<string>;
  await iterate(dir, (fileName) => {
    pages.push(fileName);
  });
  return pages;
}

async function createArticle(
  articleFile: string,
): Promise<Article> {
  const contents = await Deno.readTextFile(articleFile);
  const { attributes, body } = frontMatter(contents);
  const {
    id,
    title = path.basename(articleFile),
    description = title,
    type = "article",
    publishedAt,
    summary = "",
  } = attributes as Partial<Article>;

  validateArticle(attributes as Article);

  return {
    id: Number(id),
    path: replaceExtname(path.relative(articlesDir, articleFile), ".html"),
    contents: marked(`# #${id} ${title}

${body}`),
    description,
    title: `${title}`,
    summary,
    publishedAt: publishedAt ? new Date(publishedAt) : null,
    type,
  };
}

function validateArticle(article: Partial<Article>): void {
  const {
    id,
    title,
    summary,
    publishedAt,
  } = article;

  if (id == null) {
    throw new Error(title + ': "id" is missing');
  }

  if (title == null) {
    throw new Error(`Article ${id}: "title" is missing`);
  }

  if (publishedAt == null) {
    throw new Error(`Article ${id}: "publishedAt" is missing`);
  }
}

function createIndex(articles: Article[]): Page {
  const links = articles.map((article) => {
    const link = `#### ${generateLink(article)}`;
    return article.summary == null ? link : link + `\n${article.summary}`;
  });

  return {
    path: "index.html",
    contents: marked(links.join("\n")),
    description: "Deno Weekly",
    title: "TOP",
    type: "website",
  };
}

function createAbout(): Page {
  const contents = marked(`## このサイトについて

隔週でDenoに関する最新情報を発信しています。

## 指摘や誤りについて

もしこのサイトについて気になる点(記述の誤り、タイポなど)や改善事項などがありましたら、以下などの手段で連絡いただけると幸いです😊

* [GitHub issue](https://github.com/uki00a/deno-weekly/issues)
* [Twitter](https://twitter.com/uki00a)
`);

  return {
    path: "about.html",
    contents,
    description: "About",
    title: "About",
    type: "website",
  };
}

function generateLink(article: Article): string {
  return `#${article.id} [${article.title}](${article.path})`;
}

async function iterate(
  dir: string,
  fn: (fileName: string) => Promise<void> | void,
): Promise<void> {
  for await (const entry of Deno.readDir(dir)) {
    const entryName = path.join(dir, entry.name);
    if (entry.isDirectory) {
      await iterate(entryName, fn);
    } else {
      await fn(entryName);
    }
  }
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error);
    Deno.exit(1);
  });
}
