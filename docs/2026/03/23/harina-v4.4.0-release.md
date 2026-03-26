# Harina v4.4.0 Release 調査レポート

## 概要

**リリース日:** 2026-03-23
**バージョン:** v4.4.0
**リポジトリ:** Sunwood-ai-labs/harina-v4

Harina v4.4.0は、Google Sheetsを「ライブ運用ダッシュボード」に変える大型アップデート。レシートデータの可視化と重複管理が大幅に強化された。

## 主要機能

### 1. 📊 数式駆動のGoogle Sheetsダッシュボード

**これまで:**
- レシートデータは生のままタブに蓄積
- 分析には手動での集計が必要

**v4.4.0:**
- `Analysis YYYY` と `Analysis All Years` タブが自動生成
- セルがGoogle Sheetsの数式で動いているため、新しい行が追加されると**自動で再計算**
- KPIカード、カテゴリ別集計、月次タイムライン、マーチャント分析、支払者（payer）分析、積み上げグラフを含む完全なダッシュボード

### 2. 🔄 重複確認と自動除外機能

**新規追加:**
- 永続的な `重複確認` コントロールシート
- チェックボックスベースの `自動除外` 機能

**使い方:**
1. 重複候補がダッシュボードにプレビュー表示
2. オペレーターがチェックボックスで「ベースラインを残す」「重複を分析から除外」を選択
3. 元の年次タブ（raw receipt tabs）は変更されないまま、ダッシュボード分析からのみ除外

**注意:** ファイル名ベースの取り込み時重複ガードは維持。シート側の機能は分析用。

### 3. ⚡ `google sync-analysis` コマンド

ダッシュボードをオンデマンドで再構築:

```bash
# 全年度ダッシュボードを再構築
uv run harina-v4 google sync-analysis

# 特定の年のみ
uv run harina-v4 google sync-analysis --year 2025 --year 2026

# 全年度タブをスキップ
uv run harina-v4 google sync-analysis --skip-all-years
```

### 4. 🎮 `/resume_polling` Discordコマンド

Drive watcherの待機をスキップ:

- ポーリング間隔の待機をキャンセル
- Geminiの遅延リトライ待機をクリア
- 「Manage Server」権限が必要
- コンテナ再起動不要で即座に次のスキャンをトリガー

## 活用シーン

### 経理チーム
- 月次のカテゴリ別支出をワンクリックで確認
- 支払者別の負担額を可視化
- 重複領収書をシート上で管理

### 運用担当者
- `/resume_polling` でAPIクォータ枯渇後の即座復旧
- `sync-analysis` で手動修正後のダッシュボード再構築

## アップグレード注意点

1. `重複確認` シートは新規作成される永続タブ
2. 既存の年次タブは新しい行が追加されると自動再計算
3. 手動で新しい年タブを追加した場合は `sync-analysis` を実行

## バリデーション

- `uv run pytest` - 130テスト合格（2026-03-23 JST）
- `npm --prefix docs run docs:build` - 成功
- GitHub Actions CI合格

## 関連リンク

- [Release Notes (EN)](https://sunwood-ai-labs.github.io/harina-v4/guide/release-notes-v4.4.0)
- [Release Notes (JA)](https://sunwood-ai-labs.github.io/harina-v4/ja/guide/release-notes-v4.4.0)
- [Walkthrough (EN)](https://sunwood-ai-labs.github.io/harina-v4/guide/whats-new-v4.4.0)
- [Walkthrough (JA)](https://sunwood-ai-labs.github.io/harina-v4/ja/guide/whats-new-v4.4.0)

---

_調査日時: 2026-03-23 18:58 JST_
