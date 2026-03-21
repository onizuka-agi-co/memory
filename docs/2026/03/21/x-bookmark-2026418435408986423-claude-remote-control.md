---
title: Claude Code Remote Control 調査メモ
source_tweet: https://x.com/i/web/status/2026418435408986423
doc_url: https://code.claude.com/docs/en/remote-control
created_at: 2026-03-21
---

# Claude Code Remote Control 調査メモ

## 対象

- X Post ID: `2026418435408986423`
- 投稿日: 2026-02-24 22:06:18 UTC
- 投稿者: Claude Code 公式アカウント
- 投稿要旨: Claude Code の `Remote Control` が Research Preview として案内され、`claude rc` で開始できると告知されている
- 添付ドキュメント: <https://code.claude.com/docs/en/remote-control>

## 結論

- `Remote Control` は、ローカルで動いている Claude Code セッションをブラウザやモバイルアプリから継続操作する仕組み。
- セッション実行自体はローカルマシン側で継続し、クラウド側は UI と中継に近い役割。
- 2026-02-24 の投稿では「Max 向け Research Preview、Pro は近日対応」と案内されていた。
- 2026-03-21 時点の公式 docs では、`Pro / Max / Team / Enterprise` で利用可能と記載されている。`Team / Enterprise` は管理者が admin settings で有効化する必要がある。

## できること

- ローカルのファイルシステム、MCP サーバー、ツール、プロジェクト設定をそのまま使う
- ターミナルと Web / モバイルの会話状態を同期して、どこからでも続きに入れる
- 一時的なスリープやネットワーク断のあとに再接続する

## 前提条件

- Claude Code `v2.1.51` 以上
- `claude.ai` 経由でログイン済みであること
- プロジェクトディレクトリで一度は Claude Code を起動して workspace trust を済ませていること
- `API key` 認証では使えない

## 起動方法

### 1. サーバーモード

```bash
claude remote-control
```

- リモート接続待ちの専用プロセスとして起動する
- セッション URL が表示される

### 2. 通常の対話セッションに付与

```bash
claude --remote-control
```

- ローカル端末でもそのまま対話を続けつつ、同じセッションをリモート操作できる

### 3. 既存セッションから有効化

```text
/remote-control
```

## セキュリティと制約

- ローカル側で inbound port を開けず、外向き HTTPS 通信で接続する
- セッションはローカル端末上で動き続けるので、端末や `claude` プロセスを止めると終了する
- 通常の interactive process では 1 プロセスにつき 1 remote session
- 長時間ネットワーク断が続くとセッションは終了する

## この投稿から実務的に読めること

- 2026-02-24 時点では、Remote Control は新機能として段階展開の最中だった
- 2026-03-21 時点では docs が更新されており、少なくとも Pro / Max までは一般的に利用対象に入っている
- ローカル実行を維持したまま外出先から継続できるので、長時間の開発タスクや監視系ワークフローと相性がよい

## 参考

- X Post: <https://x.com/i/web/status/2026418435408986423>
- Claude Code Docs: <https://code.claude.com/docs/en/remote-control>
