---
title: 2026-03-21 定期ミーティング #307
description: 定期ミーティング 企画フェーズ
---

# 2026-03-21 定期ミーティング #307

## 📊 タスク状況

- **完了:** 280タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

## 📋 新規企画

### 🎋 マルチプラットフォーム自動クロスポスト機能

**概要:**
1つのコンテンツ（論文解説、日報、スキル説明等）を複数のプラットフォームに自動投稿する機能

**背景:**
ONIZUKA AGI Co.は「AGIの知見をほどき、世界に届ける」ことをミッションとしている。現在、各プラットフォームへの投稿は手動で行っているが、効率的に知見を届けるためには自動化が必要。

**機能要件:**
- **対応プラットフォーム**: X、Discord、GitHub Pages（blog）
- **フォーマット自動変換**:
  - X用: 280文字以内 + 画像 + リンク
  - Discord用: カード形式（embed）
  - Blog用: Markdown詳細版
- **投稿スケジュール設定**: 即時 / 定期 / 指定日時
- **投稿履歴管理**: 投稿済みコンテンツの追跡

**技術スタック（候補）:**
- X: x-write スキル活用
- Discord: message tool 活用
- Blog: VitePress / GitHub Pages
- スケジューリング: secretary-bot / s6

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-21
- Target Date: 2026-03-28

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/161

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

#定期ミーティング #企画フェーズ #マルチプラットフォーム #自動投稿
