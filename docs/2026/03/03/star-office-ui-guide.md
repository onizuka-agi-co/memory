---
title: Star Office UI 使い方ガイド（初心者向け）
description: Star Office UI を Docker または手動でセットアップし、状態変更や言語切り替えまで行うための実践ガイド
---

# Star Office UI 使い方ガイド（初心者向け）

## 概要（Star Office UIとは）

Star Office UI は、AIアシスタントの作業状態をオフィス風の画面でリアルタイム可視化するダッシュボードです。

- アクセスURL: `http://localhost:18888`
- 主な状態: `idle` / `writing` / `researching` / `executing` / `syncing` / `error`
- 言語切り替え: `EN / JP / ZH`
- `backend/app.py` がフロントエンド静的ファイルも配信するため、通常はフロントの別ビルド不要

## 必要な環境

### Dockerで使う場合（推奨）

- Docker
- Docker Compose

### 手動で使う場合

- Python 3
- `pip`（`backend/requirements.txt` をインストール可能）
- Git（リポジトリ取得時）

確認コマンド例:

```bash
python3 --version
docker --version
docker compose version
```

## インストール方法（Docker / 手動）

### Docker（推奨）

```bash
git clone https://github.com/onizuka-agi-co/Star-Office-UI-JP.git
cd Star-Office-UI-JP
docker compose up -d
```

### 手動

```bash
git clone https://github.com/onizuka-agi-co/Star-Office-UI-JP.git
cd Star-Office-UI-JP
python3 -m pip install -r backend/requirements.txt
```

`state.json` は既存ファイルを上書きしない形で初期化してください。

```bash
if [ ! -f state.json ]; then
  cp state.sample.json state.json
else
  echo "state.json は既に存在するため初期化をスキップしました"
fi
```

## 起動方法

### Docker起動

```bash
docker compose up -d
```

### 手動起動

```bash
cd backend && python3 app.py
```

### 起動確認（推奨）

```bash
docker compose ps
curl -fsS http://localhost:18888/health
curl -fsS http://localhost:18888/status
```

停止・再起動:

```bash
# Docker

docker compose stop
docker compose restart
docker compose down

# 手動起動時は実行中ターミナルで Ctrl + C で停止
```

## 基本的な使い方

1. ブラウザで `http://localhost:18888` を開く
2. 画面上のキャラクター位置・吹き出しで現在の状態を確認する
3. 「Yesterday memo」カードで前日の要点を確認する
4. 必要に応じて `/agents` API で参加エージェント一覧を確認する

## 状態変更の方法

プロジェクトルートで `set_state.py` を実行します。

```bash
python3 set_state.py writing "文書整理中"
python3 set_state.py syncing "同期中"
python3 set_state.py error "問題調査中"
python3 set_state.py idle "待機中"
```

有効な状態:

- `idle`
- `writing`
- `researching`
- `executing`
- `syncing`
- `error`

反映確認:

```bash
curl -fsS http://localhost:18888/status
```

## 多言語切り替え

- UI上部の `EN / JP / ZH` ボタンで言語を切り替え
- 選択した言語は `localStorage` に保存され、次回アクセス時も維持
- 意図しない言語に固定された場合は、ブラウザのサイトデータ削除または `localStorage` の言語キー削除で初期化可能

## トラブルシューティング

### 1. 画面が開かない

```bash
curl -i http://localhost:18888/health
docker compose ps
```

- `200 OK` ならバックエンドは起動済み
- 応答なしなら起動手順を再実行

### 2. Docker起動後に表示されない

```bash
docker compose logs --tail=200
```

- エラー内容を確認し、修正後 `docker compose up -d` を再実行

### 3. ポート `18888` が使用中

```bash
lsof -i :18888
ss -ltnp | grep 18888
```

- 既存プロセス停止、または `docker-compose.yml` の公開ポートを別番号へ変更

### 4. 状態変更が反映されない

```bash
python3 set_state.py writing "文書整理中"
cat state.json
curl -fsS http://localhost:18888/status
```

- `state.json` 更新と `/status` の値が一致するか確認
- ブラウザを再読み込みして表示更新

## 作成体制ログ

- 🏗️ Writer: 初稿を作成し、初心者向けの導入フローを構成
- 😈 Devil's Advocate: 手順の抜け漏れを反証し、改善点を指摘
- 📋 Editor: 反証内容を反映し、事実確認済みの最終原稿へ整理
- 📊 Publisher: 指定パス保存、VitePressビルド検証、コミット実施
