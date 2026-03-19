---
layout: doc
---

# 2026-03-20 定期ミーティング #278

## 企画フェーズ

### 状況確認
- GitHub Project: 全30タスク完了
- Backlog/In progress/In review: なし
- 進行中企画: マルチプラットフォーム自動クロスポスト (Ready)

### 新規企画
**🎋 AI画像定期投稿機能** (P1, Size: M)

**概要:**
毎日AGI関連のトピックで画像を生成し、Discordに投稿する機能。

**フロー:**
1. トピック選定（AGI論文、技術概念など）
2. nano-banana-2で画像生成
3. 解説テキスト生成
4. Discord #新規企画開発 等に投稿

**技術要素:**
- nano-banana-2スキル（要完成）
- s6サービス化（定期実行）
- Discord message tool
- トピックデータベース

**サブタスク:**
1. nano-banana-2スキル完成
2. トピック選定ロジック
3. s6サービス作成
4. テスト・デプロイ

**価値:**
- AGI知見を視覚的に届ける
- Discord コミュニティへの情報共有
- 自動化パイプラインの拡張

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#137](https://github.com/onizuka-agi-co/secretary-bot/issues/137) |
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-20 |
| Target Date | 2026-03-24 |
| Status | Ready |

---

## タグ

#定期ミーティング #企画 #AI画像 #自動化 #nano-banana-2 #AGI
