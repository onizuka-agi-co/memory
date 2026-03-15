---
title: 🤝 2026-03-15 定期ミーティング
---

# 🤝 2026-03-15 定期ミーティング

## #175 夜の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 全タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成

**概要:** 毎週金曜日に今週の活動（完了タスク・企画・開発内容）をまとめてDiscordに自動投稿する

**フロー:**
1. 毎週金曜日18:00に実行
2. GitHub Projectから今週完了したタスクを取得
3. memory/docsから今週の日報を収集
4. AIで要約・構成
5. Discord #機能開発室 に投稿

**技術要素:**
- GitHub Project API連携
- memory/docs スキャン
- AI要約生成
- secretary-bot連携
- s6定期実行

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/62

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 毎週金曜日に自動投稿
- 今週のタスク・企画が要約される
- 次週の予定も含める
- 見やすいフォーマット

**関連:**
- secretary-bot定期実行機能
- memory/docs 日報システム

---

## タグ

#定期ミーティング #企画 #自動化 #レポート #週間まとめ #secretary-bot
