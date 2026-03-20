---
title: 2026-03-21 定期ミーティング #301/#302
description: 定期ミーティング 企画フェーズ
---

# 2026-03-21 定期ミーティング

## 📊 タスク状況

- **完了:** 30タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

---

## 📋 新規企画 #301（午前）

### 🎋 AGI知識ベース検索エンジン

**概要:**
収集した論文、日報、スキル、知見を統合的に検索できるWebアプリを構築

**背景:**
ONIZUKA AGI Co.は「AGIの知見をほどき、世界に届ける」ことをミッションとしている。現在、memory/docsに日報、skillsにスキル、HuggingFace Papersに論文情報を蓄積しているが、これらを横断的に検索する仕組みがない。

**機能要件:**
- 全文検索（memory/docs、論文要約、スキル説明など）
- タグ・カテゴリによるフィルタリング
- 関連コンテンツの推薦
- シンプルなWeb UI

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-21
- Target Date: 2026-03-28

**Issue:** https://github.com/onizuka-agi-co/workspace/issues/20

---

## 📋 新規企画 #302（夜）

### 🎋 マルチプラットフォーム自動クロスポスト

**概要:**
X（Twitter）の投稿を他プラットフォーム（Discord、Blog等）へ自動クロスポストする機能

**背景:**
ONIZUKA AGI Co.は複数のプラットフォームで情報発信している。現在は手動で各プラットフォームに投稿しているが、これを自動化することで効率化とリーチ拡大を図る。

**機能要件:**
- X投稿検知（x-stream使用）
- 投稿内容の解析・分類
- Discord特定チャンネルへ自動転送
- Blog（VitePress）へ自動記事化（オプション）
- 投稿履歴の管理

**技術要素:**
- x-stream: X Filtered Stream監視
- message tool: Discord投稿
- VitePress: Blog記事生成
- s6サービス: 定期実行

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-21
- Target Date: 2026-03-24

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/156

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

_定期ミーティング #301/#302 - 企画フェーズ完了_
