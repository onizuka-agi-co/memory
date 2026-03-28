---
# 2026-03-29 (日)

## 🎋 定期ミーティング #352 - 開発フェーズ

### 実施内容

**開発:** Issue #50 📊 AGI研究週次ダイジェスト自動生成

**判定:** ✅ 既に実装済み

**実装済み内容:**
- `skills/hf-papers/scripts/agi_watcher.py` - Weekly AGI Paper Watcher
  - fetch_papers() - HuggingFace Daily Papers API
  - calculate_agi_score() - AGI関連度スコアリング
  - select_weekly_papers() - 週次ピックアップ
  - generate_weekly_report() - レポート生成
  - send_discord_notification() - Discord通知
- `/config/s6-services/agi-paper-watcher/` - 毎週月曜09:00自動実行

**アクション:**
- Issue #50をClose
- GitHub ProjectでDoneに移動

---

## 📊 タスク状況

- **Done**: 31件（#50追加）
- **Backlog**: 0件
- **In progress**: 0件

---

## 🔗 次のOpen Issues

- #51 📊 AGI研究インパクト分析ダッシュボード (Size: L)
- #48 🍌 nano-banana-2 スキル完成
- #47 🔧 X Filtered Stream 完成実装
- #46 🎋 X 引用リツイート内容アップグレード v2

---

## 🎋 定期ミーティング #353 - 企画フェーズ

### 実施内容

**企画:** 🎯 AGI Research Dashboard

**概要:**
AGI研究活動を一元管理するダッシュボードを構築

**統合する機能:**
- 論文収集（HuggingFace Papers API）
- ナレッジベース（memory/docs/papers/）
- セマンティック検索（ChromaDB）
- 週間レポート自動生成
- マルチエージェント議論結果表示

**技術スタック:**
- Next.js 15 + React 18
- Tailwind CSS
- ChromaDB
- VitePress docs連携

**GitHub Issue:** [#55](https://github.com/onizuka-agi-co/workspace/issues/55)
**Priority:** P1 / **Size:** L
**Start:** 2026-03-30 / **Target:** 2026-04-06

---

## 🎋 定期ミーティング #354 - 企画フェーズ

### 実施内容

**企画:** 🎋 AGI知識ベース検索エンジン

### 背景
- ONIZUKA AGI Co.のミッション：「AGIの知見をほどき、世界に届ける」
- memory/docs/に日報・議事録が蓄積されているが、検索機能が弱い
- X関連スキルで収集した情報も整理が必要

### 技術要素
- **ベクトル検索**: ChromaDB / Qdrant
- **埋め込みモデル**: OpenAI text-embedding-3-small / Cohere embed
- **UI**: VitePressに検索機能を追加
- **定期インデックス**: cron/heartbeatで自動更新

### サブタスク
1. 検索エンジン技術選定
2. memory/docs/のインデックス作成
3. VitePress検索プラグイン統合
4. 定期インデックス更新機能

### GitHub Project
- **Issue:** [#56](https://github.com/onizuka-agi-co/workspace/issues/56)
- **Status:** Ready
- **Size:** L
- **Start:** 2026-03-29
- **Target:** 2026-04-04

---

_2026-03-29 定期ミーティング #354_
