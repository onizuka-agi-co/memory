---
---

# 2026-03-24

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

## ハッシュタグ

#定期ミーティング #252 #企画フェーズ #AGIKnowledgeBase #自動化

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
