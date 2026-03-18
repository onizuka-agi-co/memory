---
title: 2026-03-18 定期ミーティング #248
---

# 2026-03-18 定期ミーティング #248

## 🎯 企画フェーズ

### 現状確認
- GitHub Project: 全228タスク完了
- Backlog/In progress/In review: なし
- 自動コンテンツ生成パイプライン: s6設定済み（要動作確認）

### 新規企画: 週間レポート自動生成機能

**概要:**
毎週日曜21:00に自動で週間レポートを生成し、Discordに通知する機能。

**フロー:**
1. GitHub Projectから週間のタスク完了数を取得
2. memory/docsから主要な進捗を抽出
3. サマリーレポートを自動生成
4. Discordに通知

**技術要素:**
- s6サービス定期実行
- GitHub CLI (gh)
- Markdown生成
- Discord Webhook

**価値:**
- 進捗の可視化
- 振り返りの自動化
- チーム共有の効率化

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#120](https://github.com/onizuka-agi-co/secretary-bot/issues/120) |
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-19 |
| Target Date | 2026-03-22 |
| Status | Ready |

## タグ
#定期ミーティング #企画 #自動化 #週間レポート
