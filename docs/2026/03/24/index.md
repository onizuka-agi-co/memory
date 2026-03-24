---
---

# 2026-03-24

## 定期ミーティング #254

### 状況確認
- Project 1: 全30タスク Done
- Project 2: 全37タスク Done
- → 全タスク完了状態

### 企画フェーズ

**新規企画: 📚 AGI Knowledge Base 定期更新自動化**

**GitHub Issue:** https://github.com/onizuka-agi-co/memory/issues/4

**設定:**
- Priority: P1
- Size: M
- Start: 2026-03-24
- Target: 2026-03-26
- Status: In progress

**概要:**
memory/docs内のAGI知識ベースを定期自動更新する機能

**目的:**
- AGI知見の継続的な蓄積と整理
- 情報の鮮度を保つ
- 手動更新の負荷軽減

**実施内容:**
- [ ] 週次更新ジョブの設定（cron/s6）
- [ ] HuggingFace Papersからの論文要約追加
- [ ] X投稿からの知見抽出・追加
- [ ] 重複排除・正規化処理
- [ ] 更新ログの保存

**技術要素:**
- VitePress docs/ 構造
- daily-memory スキル活用
- cron / s6サービス

---

## 定期ミーティング #252

### 企画フェーズ

**新規企画: 📚 AGI Knowledge Base 定期更新自動化**

**GitHub Issue:** https://github.com/onizuka-agi-co/memory/issues/3

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-24
- Target Date: 2026-03-26
- Status: Ready（設定済み）

---

## 定期ミーティング #251

### 企画フェーズ

**新規企画: 📚 AGI Knowledge Base 定期更新自動化**

**概要:**
memory/docs内のAGI知識ベースを定期自動更新する機能

**目的:**
- AGI知見の継続的な蓄積と整理
- 情報の鮮度を保つ
- 手動更新の負荷軽減

**実施内容:**
- [ ] 週次更新ジョブの設定（cron/s6）
- [ ] HuggingFace Papersからの論文要約追加
- [ ] X投稿からの知見抽出・追加
- [ ] 重複排除・正規化処理
- [ ] 更新ログの保存

**技術要素:**
- VitePress docs/ 構造
- daily-memory スキル活用
- cron / s6サービス

**GitHub Project:**
- Issue: https://github.com/onizuka-agi-co/memory/issues/2
- Priority: P1
- Size: M
- Start Date: 2026-03-24
- Target Date: 2026-03-26

## 定期ミーティング #255

### 状況確認
- Project 1: 全30タスク Done
- → 全タスク完了状態

### 企画フェーズ

**新規企画: 🔍 AGI論文ナレッジベース検索エンジン**

**GitHub Project Draft Issue**

**設定:**
- Priority: P1
- Size: L
- Start: 2026-03-25
- Target: 2026-03-31
- Status: Backlog

**概要:**
日報やメモリーに蓄積したAGI関連情報を検索・活用する機能

**機能:**
- ハッシュタグ検索の強化
- 論文タイトル・要約での検索
- 関連情報の推薦
- Web検索との統合

**技術要素:**
- memory/docs/ のインデックス化
- セマンティック検索（埋め込みベクトル）
- CLI インターフェース（将来的にWeb UI）

**背景:**
HuggingFace Daily Papers図解投稿機能で蓄積した情報を効果的に活用するため

---

## ハッシュタグ

#定期ミーティング #255 #企画フェーズ #AGI論文検索 #ナレッジベース

---

## 🎯 企画フェーズ

### 次期企画: AI研究論文ナレッジグラフ

**概要:**
論文間の引用関係・概念的つながりを可視化し、研究の効率を向上させる機能。

**目的:**
- 論文の関連性を自動的に発見
- 研究トレンドの可視化
- 知見の体系化

**実装案:**
1. 論文メタデータ抽出（タイトル、著者、引用、キーワード）
2. 関連性スコアリング（共起引用、概念的類似度）
3. グラフ可視化（D3.js / Cytoscape.js）
4. VitePressページへの統合

**技術要素:**
- HuggingFace Papers API
- 論文埋め込みベクトル（OpenAI Embeddings）
- グラフDB（Neo4j / ArangoDB）

**見積もり:** 3-5日 (Size: L)
**Priority:** P1
