---
title: Denoのロードマップ (2023年 Q1)
tags:
  - Deno
categories:
  - news
date: 2023-01-22
---

Denoの2023年 Q1のロードマップが公開されました。

* https://github.com/denoland/deno/issues/17475

このページでは、新しく実装が検討されている機能などについて紹介いたします。

## `deno.json`での`imports`フィールドのサポート

今までDenoでImport Mapsを利用するには、専用のファイルを用意しておき、それを`--import-map`オプションで読むこむ必要がありました。

現在、`deno.json`で直接Import Mapsを定義できるようにするため、`imports`オプションの追加が検討されています。

これが実現されれば、以下のように`deno.json`で直接マッピングを定義できるようになります。

```json
{
  "imports": {
    "redis": "https://deno.land/x/redis@v0.29.0/mod.ts",
    "dax": "https://deno.land/x/dax@0.24.0/mod.ts"
  },
  "tasks": {
    "start": "deno run --allow-net --allow-env ./main.ts"
  }
}
```

Deno公式が公開している[02-deno-canonical-app](https://github.com/denoland/experimental-deno-specifiers-example/tree/e84d01d68edec91493e2beab99f373a7b14d92e9/02-deno-canonical-app)にも使用例があるため、よろしければそちらも参照いただければと思います。

## `deno:`URLのサポート

`deno:`という新しいURLスキームの導入が検討されており、これにより、[deno.land/x](https://deno.land/x)からのモジュールの読み込みを簡略化できます。

```typescript
import $ from "deno:dax@24.0/mod.ts";

await $`echo foobar`;
```

また、[deno.land/x](https://deno.land/x)でも機能の拡張が予定されているようで，`/x/some-package`にアクセスされた際は`/x/some-package/mod.ts`にリダイレクトさせることが検討されているようです。

例えば、`deno:dax@24.0`と記述した場合、[/x/dax@0.24.0/mod.ts](https://deno.land/x/dax@0.24.0/mod.ts)が読み込まれます。

## `package.json`のサポート

Deno本体で`package.json`のサポートが検討されているようです。

例えば、以下のような内容の`package.json`があったとします。

```json
{
  "type": "module",
  "scripts": {
    "main": "deno run -A main.ts"
  },
  "dependencies": {
    "chalk": "^5.0",
    "deno-redis": "deno:redis@~0.29.0/mod.ts"
  }
}
```

Denoは`package.json`の`"dependencies"`で定義された依存関係を元に、コード中のbare specifierを解釈します。(もしImport Mapsファイルまたは`deno.json`でもマッピングが定義されている場合は、`package.json`よりもそれらのファイルの設定が優先されます)

例えば、以下のようなスクリプトが存在する場合、`deno-redis`は[https://deno.land/x/redis@v0.29.0/mod.ts](https://deno.land/x/redis@v0.29.0/mod.ts)として解釈され、`chalk`についてはnpmレジストリからv5.xがダウンロードされます。

```typescript
import { connect } from "deno-redis";
import chalk from "chalk";

const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});
const value = await redis.get("foo");
console.log(chalk.blue.bold(value));
```

また、`deno task`による`package.json`の`scripts`の実行もサポートが検討されているようです。

例えば、以下のコマンドによって、`package.json`の`scripts.main`で定義されたスクリプトを実行できるようになりそうです。

```shell
$ deno task main
```

将来的には`{ "type": "commonjs" }`もサポートし、CommonJS形式で書かれたアプリも動かせるようにすることが検討されているようです。

また、まだ未確定ではあるものの、`deno from-node`コマンドを実装し、`package.json`から`deno.json`の生成を自動化できるようにすることなども検討されているようです。

---

- [01-deno-node-compat-app (Deno公式の使用例)](https://github.com/denoland/experimental-deno-specifiers-example/tree/e84d01d68edec91493e2beab99f373a7b14d92e9/01-deno-node-compat-app)

## `node:`URLのサポート

ユーザーコードからNode.jsの組み込みモジュールを`import`できるようにするために、`node:`のサポートが検討されています。

例えば、以下はNode.jsの`events`パッケージを利用する例です。

```typescript
import { EventEmitter } from "node:events";

const emitter = new EventEmitter();
emitter.on("foo", (x) => console.log(x));
emitter.emit("foo", "bar");
```

## `deno bundle`コマンドの非推奨化

`deno bundle`コマンドの非推奨化が予定されています。

以前に`deno bundle`コマンドの代替として検討されていた[deno packコマンド]({{< ref "/articles/2022/08/14.md" >}})の導入については、今のところ行われない予定のようです。

その代わり、ユーザーランドで同じ問題が解決できるような手段の提供は検討されているようです。

例えば、[deno_graph](https://github.com/denoland/deno_graph)などのように、Deno公式のパッケージとして[deno.land/x](https://deno.land/x)からパッケージが提供される可能性なども考えられそうです。

## おわりに

以上となりますが、以下のissueでこのロードマップについて活発に議論が行われています。

* https://github.com/denoland/deno/issues/17475

議論やフィードバックの内容次第では、方針などが変更される可能性もあるかもしれません。

もし今後の動きなどに興味がありましたら、こちらのissueをSubscribeするとよさそうです。
