---
title: 2026-03-18 定期ミーティング
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

---

## 🤝 定期ミーティング #239

### タスク状況
- **Done**: 30件
- **未着手/進行中/レビュー**: 0件
- 全タスク完了状態

### 新規企画

#### 🐦 X Filtered Stream リアルタイム監視システム完成

**概要:**
X Filtered Stream APIを使って、リアルタイムでツイートを監視・通知するシステムを完成させる

**背景:**
- x-streamスキルはSKILL.mdのみ存在（スクリプト未実装）
- Bearer Token、Webhook設定は準備済み
- PM2自動起動スクリプトも準備済み

**機能:**
1. X Filtered Stream APIでリアルタイム監視
2. @hAru_mAki_chの新規ツイート検知
3. Discord Webhookで即時通知
4. オプション：自動で解説・画像生成

**技術要素:**
- X API Filtered Stream
- s6/PM2定期実行
- Discord Webhook
- 既存スキル連携（x-read, x-visual）

**サブタスク:**
- [ ] x_filtered_stream.py 実装
- [ ] s6サービス設定
- [ ] Discord通知テスト
- [ ] 自動再接続処理
- [ ] エラーハンドリング

**設定:**
| 項目 | 値 |
|------|-----|
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-18 |
| Target Date | 2026-03-21 |
| Issue | [#113](https://github.com/onizuka-agi-co/secretary-bot/issues/113) |

---

_更新日: 2026-03-18_
