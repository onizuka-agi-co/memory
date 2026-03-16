---
title: 🤝 2026-03-16 定期ミーティング
---

# 🤝 2026-03-16 定期ミーティング

## #186 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 全タスク
- 未着手: 0タスク
- 進行中: 0タスク
- Ready: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📝 自動日報生成機能

**概要:** 毎日の活動を自動的に日報として memory/docs に保存

**フロー:**
1. 毎日21:00に起動
2. GitHub Projectから当日完了したタスクを取得
3. Discord #機能開発室 の会話から重要な議論を抽出
4. AIで日報形式に構成
5. memory/docs/YYYY/MM/DD/index.md に自動保存
6. コミット＆プッシュ

**技術要素:**
- GitHub Project API連携
- Discord会話ログ取得
- AI要約生成（memory/docs形式）
- s6定期実行
- Git自動コミット

**期待効果:**
- 手動日報作成の自動化
- 継続的な記録の保証
- 一貫したフォーマット

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/83

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-16
- Target Date: 2026-03-18
- Status: Ready

---

## タグ

#定期ミーティング #企画 #自動化 #日報 #AI生成 #s6
