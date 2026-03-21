---
title: 2026-03-22 定期ミーティング #314
description: 定期ミーティング 企画フェーズ
---

# 2026-03-22 定期ミーティング #314

## 📊 タスク状況

- **完了:** 30タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

## 📋 新規企画

### 🎋 AI研究論文ナレッジグラフ

**概要:**
収集したAGI論文をナレッジグラフ化し、論文間の関係性を可視化・検索可能にするシステム

**背景:**
- 現在、papers-collectorで11+論文を蓄積済み
- 各論文は個別に管理されているが、相互の関係性が見えない
- 研究トレンドや技術の系譜を把握したい

**機能要件:**
- 論文メタデータの構造化（著者、引用、キーワード）
- 論文間の関係性抽出（引用関係、トピック類似度）
- ナレッジグラフの可視化
- インタラクティブな探索UI

**技術スタック（候補）:**
- バックエンド: Python + NetworkX
- フロントエンド: D3.js / Cytoscape.js
- データ形式: JSON Graph / GraphML
- ホスティング: GitHub Pages

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-22
- Target Date: 2026-03-29

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

## 🔗 関連

- papers-collector (既存)
- memory/docs (既存)
- AGI Knowledge Base (完了済み)

---

_定期ミーティング #314 - 企画フェーズ完了_
