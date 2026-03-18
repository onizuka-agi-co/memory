---
title: 2026-03-18 定期ミーティング #238
---

# 2026-03-18 定期ミーティング #238

## 🎯 企画フェーズ

### 現状分析
- **Done**: 30件
- **Backlog/Ready/In progress/In review**: 0件
- 全タスク完了状態

### 新規企画

#### 🎋 週間まとめレポート自動生成

**概要:**
GitHub Projectの完了タスクから週間まとめレポートを自動生成する機能

**実施内容:**
- 前週のDoneタスクを抽出
- カテゴリ別に分類（開発/企画/レビュー等）
- レポート形式でまとめ
- Discord #機能開発室 へ自動投稿
- 日報の週次まとめセクションに追加

**技術要素:**
- GitHub CLI (gh project item-list)
- Python/Shell スクリプト
- Discord Webhook または message tool
- cron/s6 で毎週月曜 09:00 実行

**設定:**
| 項目 | 値 |
|------|-----|
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-19 |
| Target Date | 2026-03-20 |
| Issue | [#112](https://github.com/onizuka-agi-co/secretary-bot/issues/112) |

**選択理由:**
- 週次で活動を振り返ることで方向性を確認
- GitHub Projectの完了タスクから自動抽出
- 継続的な改善サイクルを確立

---

_更新日: 2026-03-18_
