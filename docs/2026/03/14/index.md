---
title: 🤝 2026-03-14 定期ミーティング
---

# 🤝 2026-03-14 定期ミーティング

## #145 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30タスク（確認済み）
- 未着手/進行中/レビュー: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/58

**概要:** 毎週金曜日にその週の活動をまとめるレポートを自動生成する機能

**フロー:**
1. memory/docsから日報を集約（過去7日分）
2. GitHub Projectから完了タスクを抽出
3. AIでまとめ記事を生成
4. Discord + Xに投稿

**技術要素:**
- memory/docsパース（daily-memoryスキル活用）
- gh project item-list（github-projectスキル活用）
- テキスト生成（LLM）
- 定期実行（secretary-bot連携）

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-14
- Target Date: 2026-03-17
- Status: Ready

**成功基準:**
- 毎週金曜日に自動実行
- レポートが正確で読みやすい
- Discord + Xに投稿完了

---

## タグ

#定期ミーティング #企画 #週間レポート #自動化 #secretary-bot

---

_更新日: 2026-03-14_
