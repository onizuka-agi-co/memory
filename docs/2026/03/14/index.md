---
title: 2026-03-14 定期ミーティング #144
---

# 2026-03-14 定期ミーティング #144

## 企画フェーズ

### タスク状況
- **全30タスク完了** ✓
- 未着手: 0
- 進行中: 0

### 新規企画

#### 📊 週間まとめレポート自動生成

**概要:**
毎週月曜朝に前週の活動をまとめてレポート自動生成・投稿する機能

**収集対象:**
- memory/docs の日報（前週分）
- GitHub commits（onizuka-agi-co org全体）
- X投稿（#ONIZUKA_AGI）
- Discord活動ログ

**出力先:**
- X投稿（ハイライト版、#ONIZUKA_AGI #週報）
- Discord #機能開発室（詳細版）

**技術要素:**
- memory/docs パース（daily-memoryスキル活用）
- GitHub API（commits取得）
- X API（投稿取得、ローカルキャッシュ活用）
- message tool（Discord投稿）
- cron/s6で毎週月曜09:00自動実行

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-14
- Target Date: 2026-03-18

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/57

## 関連リンク

- [GitHub Project](https://github.com/orgs/onizuka-agi-co/projects/1)
