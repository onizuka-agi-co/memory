---
---

# 2026-03-25

## 定期ミーティング #263

### 状況確認
- Project 1: 全354タスク Done
- Project 2: 全30タスク Done
- → 全タスク完了状態

### 🎯 企画フェーズ

**新規企画: 🔍 AGI知識ベース可視化ダッシュボード**

**GitHub Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/16

**設定:**
- Priority: P1
- Size: L
- Start: 2026-03-26
- Target: 2026-03-29
- Status: Backlog

**概要:**
蓄積したAGI論文・知見を視覚的に探索できるダッシュボード

**目的:**
- 蓄積した知見の有効活用
- 関連論文の発見・接続
- 研究効率の向上

**機能:**
- 論文ナレッジグラフ可視化
- タグ・キーワードでフィルタ
- 関連論文の発見
- VitePressページとして統合

**技術要素:**
- D3.js / Cytoscape.js
- 論文埋め込みベクトル
- memory/docs/ のインデックス
- セマンティック検索

**サブタスク:**
1. データ構造設計（論文メタデータ・関連性） - Size: M
2. ナレッジグラフ生成ロジック - Size: M
3. D3.js可視化実装 - Size: L
4. VitePress統合 - Size: S
5. テスト・検証 - Size: S

**見積もり:**
3-4日 (Size: L)

---

## 定期ミーティング #264

### 状況確認
- Project 1: 全30タスク Done
- → 全タスク完了状態
- → **企画フェーズ**を実施

### 🎯 企画フェーズ

**新規企画: 📊 週間AGI論文まとめレポート**

**概要:**
毎週末にその週の主要なAGI論文をまとめてDiscordに投稿する機能

**目的:**
- AGI研究の最新動向を効率的にキャッチアップ
- コミュニティへの情報共有
- 手動更新の負荷軽減

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

**見積もり:** 1-2日 (Size: M)
**Priority:** P1
**Start Date:** 2026-03-26
**Target Date:** 2026-03-28

---

## ハッシュタグ

#定期ミーティング #263 #264 #企画フェーズ #AGI論文 #週間レポート
