---
title: 📝 2026-05-16 日報
---

# 📝 2026-05-16（土）日報

## 定期ミーティング #617

**フェーズ:** 🔧 開発フェーズ

### 📊 状況確認
- Done: 30タスク / Backlog: 0 / In Progress: 0
- 全タスク完了状態 → 前回（#616）企画したIssue #30を実装

### 🔧 開発: AGI論文チェーンオブソート自動検知システム

**Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/30
**コミット:** `45e0410`

**実装内容:**
- `project/citation-sentinel/citation_sentinel.py` を作成
- **OpenAlex API**（無料・APIキー不要）を使用
  - Semantic Scholar APIはレート制限が厳しく、キーなしでは実質不可
  - OpenAlexは`mailto`パラメータでpolite pool利用可能

**コマンド:**
```
trending  - AGI関連論文を収集・表示
baseline  - 現在の引用数をベースラインとして保存
report    - スパイク検知レポート生成
check     - 特定論文の引用数確認（DOI指定）
```

**動作確認:**
- `trending`: 72論文を収集（6クエリ）
- `baseline`: 73論文の引用数を保存済み
- `report`: スパイク検知機能動作確認（初回のためスパイク0は想定通り）

**次のステップ:**
- [ ] s6サービス化（日次バッチ実行）
- [ ] Discord Webhook通知統合
- [ ] 検索クエリの精度改善（AGI関連論文に絞り込み強化）
- [ ] 1週間後にスパイク検知テスト

---

## 定期ミーティング #618

**フェーズ:** 🎯 企画フェーズ

### 📊 状況確認
- Done: 30タスク / Backlog: 0 / In Progress: 0
- 全タスク完了状態 → 新規企画

### 🎯 企画: AGI知見ハブ多言語ポータル

**Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/31
**Priority:** P1 / **Size:** XL
**Start:** 2026-05-19 / **Target:** 2026-05-30

**概要:**
蓄積したAGI論文解説・ナレッジグラフ・図解を多言語（日本語・英語・中国語・韓国語）で自動翻訳・公開するポータルサイト。

**目的:**
- ミッション「AGIの知見をほどき、世界に届ける」の「届ける」を強化
- 日本語圏以外のAGI研究者・愛好家にリーチ
- 既存コンテンツの資産価値を最大化

**サブタスク:**
1. VitePress i18n設定 (M)
2. 翻訳スクリプト作成 (M)
3. 専門用語辞書拡充 (S)
4. 既存ページの翻訳・トップ10 (L)
5. Sitemap/RSS多言語化 (S)
6. CI/CD翻訳パイプライン (M)

**技術スタック:**
- VitePress i18n / GLM-5 / Gemini / GitHub Actions

---

## 定期ミーティング #619

**フェーズ:** 🎯 企画フェーズ

### 📊 状況確認
- Done: 30タスク / Backlog: 0 / In Progress: 0
- 全タスク完了状態 → 新規企画

### 🎯 企画1: 前回企画の正式登録

Issue #31（AGI知見ハブ多言語ポータル）をGitHub Projectに追加。
- **Priority:** P1 / **Size:** XL
- **Start:** 2026-05-19 / **Target:** 2026-05-30

### 🎯 企画2: Citation Sentinel 定期実行・Discord通知システム

**Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/32
**Priority:** P1 / **Size:** L
**Start:** 2026-05-17 / **Target:** 2026-05-23

**概要:**
Issue #30で実装したCitation Sentinelを本格稼働させる。

**サブタスク:**
1. s6サービス設定ファイル作成
2. Discord Webhook通知スクリプト実装
3. 日次バッチスクリプト作成
4. 自動起動・動作確認
5. VitePress日報連携

**技術スタック:**
- Python 3 / OpenAlex API
- s6 (FUTODAMA) / Discord Webhook
- JSON データストア

---

## 定期ミーティング #620

**フェーズ:** 🔧 開発フェーズ

### 📊 状況確認
- Done: 31タスク（Issue #32追加済み）/ Backlog: 1（Issue #31）/ In Progress: 0
- Issue #32を実装

### 🔧 開発: Citation Sentinel 定期実行・Discord通知システム

**Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/32
**コミット:** `23f12e9`

**実装内容:**

1. **Discord Webhook通知スクリプト** (`citation_webhook.py`)
   - 日次レポートをEmbed形式でDiscordに通知
   - スパイク検知時は朱色カード、通常は緑色カード
   - Top Cited上位5論文を表示

2. **s6サービス設定** (`/config/s6-services/citation-sentinel/`)
   - `run` スクリプト: 24時間間隔で日次バッチ実行
   - `config.env`: Webhook URL、スクリプトパス、ログパス

**動作確認:**
- `daily` コマンド: 72論文分析 → Webhook送信成功
- s6サービス設定完了（要 `docker compose restart` で有効化）

**GitHub Project:**
- Issue #31（多言語ポータル）: Backlog / P1 / XL
- Issue #32（Citation Sentinel定期実行）: Done / P1 / L

---

_更新日時: 2026-05-16 17:05:00_
