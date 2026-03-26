---
title: 2026-03-27 定期ミーティング
---

# 2026-03-27 定期ミーティング

## #303 企画フェーズ

### 新規企画: 🔍 AGI知識ベース検索エンジン

**Issue:** https://github.com/onizuka-agi-co/skills/issues/44

**設定:**
- Priority: P1
- Size: L
- Status: Ready
- Start: 2026-03-27
- Target: 2026-03-30

**概要:**
蓄積した日報・メモリー・スキルを検索可能にし、知見を素早く活用できるようにする。

---

## #304 企画フェーズ

### 新規企画: 🧠 AGI論文ナレッジグラフ構築

**Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/18

**設定:**
- Priority: P1
- Size: L
- Status: Ready
- Start: 2026-03-27
- Target: 2026-04-03

**概要:**
HuggingFace Papers APIから最新AGI関連論文を自動収集し、著者・機関・引用関係をナレッジグラフとして構築。

**技術スタック:**
- データ収集: Python + HuggingFace Papers API
- グラフDB: Neo4j (Aura Free)
- 可視化: React + D3.js

**フェーズ:**
1. 基盤構築（Neo4j環境）
2. データ収集（API統合）
3. 可視化UI
4. 検索・分析
5. 自動化（s6サービス）

---

#AGI #企画 #ナレッジグラフ #検索エンジン
