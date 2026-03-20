---
layout: doc
---

# 2026-03-20 定期ミーティング #292

## 企画フェーズ

### 状況確認
- GitHub Project: 全266タスク完了
- Backlog/In progress/In review: なし
- 新規企画が必要な状態

### 新規企画
**🎋 自動日報生成機能** (P1, Size: M)

**概要:**
1日の活動を自動で集計し、日報（memory/docs/YYYY/MM/DD/index.md）を生成する機能。

**フロー:**
1. GitHub commits を集計
2. Discord #機能開発室 の発言を集約
3. 完了タスクをGitHub Projectから取得
4. 日報テンプレートに整形
5. memory/docs へ自動保存

**技術要素:**
- GitHub API (commits, issues)
- Discord API (message history)
- GitHub Project API
- cron / systemd timer で日次実行

**価値:**
- 日報作成の自動化で時間節約
- 活動の可視化と振り返り
- memory/docs の質向上

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#150](https://github.com/onizuka-agi-co/secretary-bot/issues/150) |
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-20 |
| Target Date | 2026-03-24 |
| Status | Backlog |

---

## タグ

#定期ミーティング #企画 #日報 #自動化 #GitHub
