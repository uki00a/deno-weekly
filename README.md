# deno-weekly

## ビルド

全ての記事をビルドする:

```shell
$ make generate
```

記事を個別でビルドする:

```shell
$ deno run -A cli.ts articles/2021/01/10.md
```

## サーバの起動

ビルドを実行後に、下記を実行するとサーバが起動します。

http://localhost:4507 から記事を閲覧できます。

```shell
$ make serve
```

## ビルドによって生成されたファイルの削除

```shell
$ make clean
```
