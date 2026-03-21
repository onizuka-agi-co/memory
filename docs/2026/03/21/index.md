---
title: 2026-03-21 定期ミーティング #306
---

# 🤝 定期ミーティング #306

## 📊 状況確認

- **全タスク完了** → 企画フェーズへ移行
- GitHub Project: 全30タスクDone

## 🎯 企画フェーズ

### 新規企画：AGI論文自動要約Bot

**概要:**
arXiv/HuggingFace Papersから最新AGI論文を自動検出し、要約＋図解を生成してX/Discordに投稿するBot

**機能:**
- arXiv AGI論文の自動検出（カテゴリ: cs.AI, cs.LG, cs.CL）
- 要約＋図解の自動生成（nano-banana-2使用）
- X/Discordへの自動投稿
- ハッシュタグ付きで検索可能（#AGI #論文 #要約）

**技術要素:**
- arXiv API（論文取得）
- nano-banana-2スキル（図解生成）
- x-writeスキル（X投稿）
- message tool（Discord投稿）
- s6サービス（定期実行）

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-21
- Target Date: 2026-03-23
- Issue: https://github.com/onizuka-agi-co/secretary-bot/issues/160

## 📝 次回予定

- AGI論文自動要約Botの実装開始

---

#定期ミーティング #企画フェーズ #AGI #論文要約 #Bot
