import { React } from "./deps.ts";
import type { PagicLayout } from "./deps.ts";

const NotFoundPage: PagicLayout = ({ config }) => (
  <>
    <h1>ページが見つかりませんでした</h1>
    <ul>
      <li>
        <a href={`${config.root}index.html`}>TOPページ</a>
      </li>
      <li>
        <a href={`${config.root}tags/index.html`}>タグ一覧</a>
      </li>
      <li>
        <a href={`${config.root}archives/index.html`}>アーカイブ</a>
      </li>
    </ul>
  </>
);

export default NotFoundPage;
