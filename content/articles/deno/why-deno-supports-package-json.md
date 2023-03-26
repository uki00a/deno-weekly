---
title: Denoでpackage.jsonやnpmパッケージのサポートが入った理由について
tags:
  - Deno
categories:
  - news
date: 2023-03-26
---

Denoの公式ブログで、[Deno v1.31](({{< ref "/articles/deno/v1.31.md" >}}))で`package.json`サポートが実装された背景に関する解説が公開されました。

- [Why We Added package.json Support to Deno](https://deno.com/blog/package-json-support)

このページでは、こちらの記事を参考に内容を要約していきます。

## 背景について

Denoにnpmパッケージや`package.json`のサポートが導入されたのは、以下における各課題の解決や既存のNode.jsプロジェクトを直接Denoで動作させられるようにすることが目的のようです。

### 依存関係の重複問題

例えば、アプリケーションが依存しているモジュールAとモジュールBがそれぞれ以下のモジュールに依存していたとします。

- https://deno.land/std@0.180.0/async/deferred.ts
- https://deno.land/std@0.181.0/async/deferred.ts

もし仮に`std/async/deferred.ts`の内容が`0.180.0`と`0.181.0`で同一であったとしても、URL importの性質上、これらの両方のバージョンがモジュールグラフの中に含まれてしまうという課題があります。

### 既存のリモートモジュール管理における課題

Denoでは`deps.ts`やImport mapsなどによってリモートモジュールを管理する方法がありますが、これらには以下のような課題があります。

- [deps.ts](https://deno.land/manual@v1.31.1/examples/manage_dependencies)
  - `package.json`などと比較すると冗長になってしまいがち
  - ただし、[Module Declarations](https://github.com/tc39/proposal-module-declarations)や[Module Source Imports](https://github.com/tc39/proposal-import-reflection)などの仕組みにより、ある程度改善の余地はある模様です
- Import Maps
  - [合成可能ではない](https://github.com/WICG/import-maps/issues/137)という欠点があること (プロセスにつき1つしかImport Mapsを使用できない)

### CDNに関する課題

Denoでは[esm.sh](https://github.com/esm-dev/esm.sh)などを活用することで一部のnpmパッケージを利用することはできるものの、性質上、どうしてもサポートができないnpmパッケージがでてきてしまうという課題があります。

対象のnpmパッケージがtarアーカイブ中に特定のテキストファイルなどが含まれていることを前提としている場合などは、動作させることが困難になってしまいます。

例としては、[bullmq](https://github.com/taskforcesh/bullmq/tree/v3.10.2/src/commands)などのように、パッケージ内でテキスト形式でLuaスクリプトを管理しているパッケージなども存在し、こういったパッケージをサポートすることが難しくなります。

## 今後について

npmパッケージや`package.json`などのサポートがDenoに入ったとしても、URL importなどの既存のDenoの仕組みは将来に渡ってもサポートが予定されているということが説明されています。

また、[新しいメジャーバージョン (Deno v2)](https://github.com/denoland/deno/issues/17475)を数カ月後にリリースすることを目標に開発が進められているようです。

Deno v2では、上記の依存関係の重複問題などの解消を目的に、`deno:`URLのサポートなどが検討されているようです。

```javascript
import $ from "deno:dax@24.0/mod.ts";

await $`echo foobar`;
```

Deno本体でsemverの解決をできるようにすることで、依存関係の重複問題などを緩和することなどが計画されているようです。
