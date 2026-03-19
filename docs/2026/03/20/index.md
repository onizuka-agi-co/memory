---
layout: doc
---

# 2026-03-20 定期ミーティング #279

## 企画フェーズ

### 状況確認
- GitHub Project: 全30タスク完了
- Backlog/In progress/In review: なし
- 進行中企画: マルチプラットフォーム自動クロスポスト (Ready)

### 新規企画（朝の部）
**🎨 AI画像定期投稿機能** (P1, Size: M)
- Issue: [#137](https://github.com/onizuka-agi-co/secretary-bot/issues/137)
- Target Date: 2026-03-24

### 新規企画（夜の部）
**🎨 AI画像定期投稿機能** (P1, Size: M)

**概要:**
nano-banana-2スキルを使ってAGI関連の概念図を生成し、毎日X/Discordに自動投稿する機能。

**実施内容:**
- 投稿テーマの決定（AGI概念、未来予測、技術トレンド等）
- s6サービスとして定期実行設定（毎日09:00）
- X API連携（x-write スキル活用）
- Discord Webhook連携
- 投稿履歴・統計管理

**技術要素:**
- nano-banana-2 スキル（完成済み）
- s6 サービス
- X API / Discord Webhook
- テーマ自動選択ロジック

**期待効果:**
- 視覚的コンテンツによる高いエンゲージメント
- 「AGIの知見をほどき、世界に届ける」ミッションの推進
- ブランド認知度向上

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#138](https://github.com/onizuka-agi-co/secretary-bot/issues/138) |
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-20 |
| Target Date | 2026-03-22 |
| Status | Ready |

---

## タグ

#定期ミーティング #企画 #AI画像 #自動化 #nano-banana-2 #AGI
