---
---

# 2026-03-26

## 定期ミーティング #287

### 状況確認
- Project 1: 全357タスク Done
- → 全タスク完了状態
- → **企画フェーズ**を実施

### 🎯 企画フェーズ

**Issue #18 をProjectに追加:フィールド設定:**

**GitHub Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/18

**設定:**
- Priority: P1
- Size: L
- Status: Backlog
- Start: 2026-03-26
- Target: 2026-04-02

**概要:**
HuggingFace Papers APIから最新のAGI関連論文を自動収集し、著者・機関・引用関係をナレッジグラフとして構築

**実装フェーズ:**
1. Phase 1: 基盤構築（Neo4j環境構築、スキーマ定義）
2. Phase 2: データ収集（API統合、グラフデータ投入）
3. Phase 3: 可視化（グラフUI実装）
4. Phase 4: 検索・分析（キーワード・著者・機関検索）
5. Phase 5: 自動化（日次s6サービス、週次レポート、Discord通知）

**技術スタック:**
- データ収集: Python + HuggingFace Papers API
- グラフDB: Neo4j
- 可視化: React + D3.js / Cytoscape.js

---

## 定期ミーティング #286

### 状況確認
- Project 1: 全30タスク Done
- → 全タスク完了状態
- → **企画フェーズ**を実施

### 🎯 企画フェーズ

**新規タスク:** 🧠 AGI論文ナレッジグラフ構築

**GitHub Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/18

**設定:**
- Priority: P1
- Size: XL
- Status: In progress
- Start: 2026-03-26
- Target: 2026-04-02

### 🔧 開発フェーズ開始

**Phase 1: 基盤構築**

作成ファイル:
```
project/agi-knowledge-graph/
├── README.md          # プロジェクト概要
├── schema.md          # Neo4jスキーマ定義
├── neo4j-setup.md     # Neo4j Aura設定ガイド
└── paper_collector.py # データ収集スクリプト基盤
```

**技術スタック:**
- データ収集: Python + HuggingFace Papers API
- グラフDB: Neo4j Aura Free
- 可視化: React + D3.js

**次のステップ:**
1. Neo4j Aura アカウント作成
2. 接続情報を `data/neo4j-credentials.json` に保存
3. スキーマ初期化スクリプト実行
4. HuggingFace Papers API統合

---

## 定期ミーティング #288

### 状況確認
- Project 1: 全30タスク Done
- → 全タスク完了状態
- → **企画フェーズ**を実施

### 🎯 企画フェーズ

**新規企画:** 📊 週間AGI論文まとめレポート

**GitHub Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/19

**設定:**
- Priority: P1
- Size: M
- Status: Backlog
- Start: 2026-03-26
- Target: 2026-03-28

**概要:**
毎週末にその週の主要なAGI論文をまとめてDiscordに投稿する機能

**機能:**
- HuggingFace Daily Papersから週間トップ論文を取得
- カテゴリ別に分類（LLM、Vision、Agents等）
- 要約・ハイライトを生成
- Discord Embed形式で投稿

**技術要素:**
- skills/hf-papers (既存)
- skills/nano-banana-2 (図解生成)
- Discord Webhook
- s6サービス (週次実行)

**サブタスク:**
1. 週間論文取得スクリプト作成
2. カテゴリ分類ロジック実装
3. Discord Embed生成
4. s6サービス設定
5. テスト・検証

---

## 定期ミーティング #289

### 状況確認
- Project 1: 全タスク Done
- → 全タスク完了状態
- → **企画フェーズ**を実施

### 🎯 企画フェーズ

**Issue #19 をProjectに追加: 週間AGI論文まとめレポート**

**GitHub Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/19

**設定:**
- Priority: P1
- Size: M
- Status: Todo
- Start: 2026-03-26
- Target: 2026-03-29

**概要:**
毎週末にHuggingFace Daily Papersから主要なAGI論文を取得し、カテゴリ別に分類・要約してDiscordに投稿する機能

**目的:**
- AGI研究の最新動向を効率的にキャッチアップ
- コミュニティへの情報共有
- 手動更新の負荷軽減

**機能:**
- 週間トップ論文を取得
- カテゴリ別分類（LLM、Vision、Agents等）
- 要約・ハイライト生成
- Discord Embed形式で投稿
- 図解付き（nano-banana-2使用）

**技術要素:**
- skills/hf-papers (既存)
- skills/nano-banana-2 (図解生成)
- Discord Webhook
- s6サービス (週次実行)

---

_更新日: 2026-03-26_
