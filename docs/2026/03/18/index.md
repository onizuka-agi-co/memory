---
title: 2026-03-18 定期ミーティング #247
---

# 2026-03-18 定期ミーティング #247

## 🎯 企画フェーズ

### 現状確認
- GitHub Project: 全30タスク完了
- Backlog/In progress/In review: なし

### 新規企画: 週間まとめレポート自動生成

**概要:**
memory/docs の内容から週次サマリーを自動生成し、Discordに定期投稿する機能。

**機能:**
- 日報から主要な出来事を抽出
- 週間の進捗をまとめる
- 毎週月曜09:00に自動投稿

**技術要素:**
- memory/docs のパース
- LLMでサマリー生成
- s6サービスで定期実行
- Discord Webhookで投稿

**サブタスク:**
- [ ] memory/docs パーサー実装
- [ ] LLMサマリー生成機能
- [ ] s6サービス設定
- [ ] Discord投稿テスト

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#118](https://github.com/onizuka-agi-co/secretary-bot/issues/118) |
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-19 |
| Target Date | 2026-03-20 |
| Status | Ready |

## タグ
#定期ミーティング #企画 #自動化
