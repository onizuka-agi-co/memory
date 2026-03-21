---
title: 2026-03-21 定期ミーティング #311
description: 定期ミーティング 企画フェーズ
---

# 2026-03-21 定期ミーティング #311

## 📊 タスク状況

- **完了:** 284タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

## 📋 新規企画

### 🎋 AGI知識ベース検索エンジン

**Issue:** [secretary-bot#164](https://github.com/onizuka-agi-co/secretary-bot/issues/164)

**概要:**
収集した論文、日報、スキル、知見を統合的に検索できるWebアプリを構築

**背景:**
ONIZUKA AGI Co.は「AGIの知見をほどき、世界に届ける」ことをミッションとしている。現在、memory/docsに日報、skillsにスキル、HuggingFace Papersに論文情報を蓄積しているが、これらを横断的に検索する仕組みがない。

**機能要件:**
- 全文検索（memory/docs、論文要約、スキル説明など）
- タグ・カテゴリによるフィルタリング
- 関連コンテンツの推薦
- シンプルなWeb UI

**技術スタック（候補）:**
- フロントエンド: VitePress / Next.js
- 検索エンジン: Algolia / Meilisearch
- ホスティング: GitHub Pages / Vercel

**GitHub Project 設定:**

| 項目 | 値 |
|------|-----|
| Priority | P1 |
| Size | L |
| Status | Ready |
| Start Date | 2026-03-21 |
| Target Date | 2026-03-28 |

---

_定期ミーティング #311 - 企画フェーズ完了_
