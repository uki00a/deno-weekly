import { dejs, ensureDir, frontMatter, marked, path } from "./deps.ts";

const rootDir = path.dirname(path.fromFileUrl(import.meta.url));
const articlesDir = path.join(rootDir, "articles");
const distDir = path.join(rootDir, "dist");
const template = await Deno.readTextFile(path.join(rootDir, "template.html"));
const url = Deno.env.get("URL") ?? "http://localhost:4507";

interface Page {
  path: string;
  title: string;
  description: string;
  contents: string;
  type: string;
}

interface Article extends Page {
  id: number;
}

async function main() {
  const articleFiles = sortStringsDesc(await collectFiles(articlesDir));
  const articles = await Promise.all(articleFiles.map((file, index) => {
    const id = articleFiles.length - index;
    return createArticle(id, file);
  }));
  for (const article of articles) {
    await writePage(article);
    console.info(`[info] Generated ${article.path}`);
  }
  const indexPage = createIndex(articles);
  await writePage(indexPage);
  console.info(`[info] Generated ${indexPage.path}`);
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
  const distFilename = path.join(distDir, page.path);
  await ensureDir(path.dirname(distFilename));
  await Deno.writeTextFile(distFilename, await generateHTML(page));
}

function generateHTML(page: Page): Promise<string> {
  return dejs.renderToString(template, {
    ...page,
    top: url,
  });
}

async function collectFiles(dir: string): Promise<string[]> {
  const pages = [] as Array<string>;
  await iterate(dir, (fileName) => {
    pages.push(fileName);
  });
  return pages;
}

async function createArticle(
  id: number,
  articleFile: string,
): Promise<Article> {
  const contents = await Deno.readTextFile(articleFile);
  const { attributes, body } = frontMatter(contents);
  const {
    title = path.basename(articleFile),
    description = title,
    type = "article",
  } = attributes as {
    description: string;
    title: string;
    type?: string;
  };

  return {
    id,
    path: replaceExtname(path.relative(articlesDir, articleFile), ".html"),
    contents: marked(`# #${id} ${title}

${body}`),
    description,
    title: `${title}`,
    type,
  };
}

function createIndex(articles: Article[]): Page {
  const links = articles.map((article) => {
    return `* ${generateLink(article)}`;
  });

  return {
    path: "index.html",
    contents: marked(`# Deno Weekly

${links.join("\n")}`),
    description: "Deno Weekly",
    title: "TOP",
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
  const entries = [] as Array<Deno.DirEntry>;
  for await (const entry of Deno.readDir(dir)) {
    entries.push(entry);
  }

  for (const entry of entries) {
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
