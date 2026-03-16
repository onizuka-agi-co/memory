---
title: 🤝 2026-03-16 定期ミーティング
---

# 🤝 2026-03-16 定期ミーティング

## #191 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30件
- 未着手: 0件
- 進行中: 0件

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📝 日報自動生成機能

**概要:** 毎日の作業内容を自動で日報（memory/docs）にまとめる機能

**フロー:**
1. 毎日23:00に実行
2. GitHub Projectから今日完了したタスクを取得
3. memory/docsから今日の作業ログを収集
4. AIで日報形式に整形
5. memory/docs/YYYY/MM/DD/index.mdに保存

**技術要素:**
- GitHub Project API連携
- memory/docs スキャン
- AI要約生成
- s6定期実行
- daily-memoryスキル拡張

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/87

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-16
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 毎日23:00に自動実行
- タスク・作業ログが日報に反映
- 手動での編集も可能
- VitePressビルド自動実行

**関連:**
- daily-memoryスキル
- secretary-bot定期実行機能
- memory/docs日報システム

---

## タグ

#定期ミーティング #企画 #自動化 #日報 #daily-memory #s6 #secretary-bot

---

---

## #192 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30件
- 未着手: 0件
- 進行中: 0件

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 自動日報生成機能

**概要:** 1日の活動（Discord発言、GitHub更新、タスク完了等）を自動で集約し、日報として生成・保存する機能

**機能:**
- Discordでの発言を集約（#自動開発室など）
- GitHub Projectから完了タスクを自動取得
- 日報Markdown自動生成
- memory/docs/YYYY/MM/DD/index.md に保存

**活用インフラ:**
- Secretary Bot → 定期トリガー（毎日21:00）
- daily-memory → 日報保存フォーマット
- GitHub Project API → タスク状態取得

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/88

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-17
- Target Date: 2026-03-18
- Status: Backlog

---

_更新日: 2026-03-16_
