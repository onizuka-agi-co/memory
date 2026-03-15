---
title: 🤝 2026-03-15 定期ミーティング
---

# 🤝 2026-03-15 定期ミーティング

## #175 夜の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 全タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成

**概要:** 毎週金曜日に今週の活動（完了タスク・企画・開発内容）をまとめてDiscordに自動投稿する

**フロー:**
1. 毎週金曜日18:00に実行
2. GitHub Projectから今週完了したタスクを取得
3. memory/docsから今週の日報を収集
4. AIで要約・構成
5. Discord #機能開発室 に投稿

**技術要素:**
- GitHub Project API連携
- memory/docs スキャン
- AI要約生成
- secretary-bot連携
- s6定期実行

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/62

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 毎週金曜日に自動投稿
- 今週のタスク・企画が要約される
- 次週の予定も含める
- 見やすいフォーマット

**関連:**
- secretary-bot定期実行機能
- memory/docs 日報システム

---

## #176 夜の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 180タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 自動コンテンツ生成パイプライン定期実行化

**概要:** 完成済みのHuggingFace Papers図解パイプラインをs6サービスとして定期実行化する

**フロー:**
1. 毎日09:00に起動
2. HF Papers APIでトップ論文取得
3. nano-banana-2で図解画像生成
4. 解説文章生成
5. Discord #新規企画開発 に投稿
6. Xに引用リツイート形式で投稿

**実施内容:**
- [ ] s6サービスディレクトリ作成（/config/s6-services/hf-papers-daily/）
- [ ] runスクリプト作成（毎日09:00実行）
- [ ] config.env設定
- [ ] secretary-bot連携（Discord投稿）
- [ ] X自動投稿連携

**技術要素:**
- s6サービス管理
- hf-papersスキル
- nano-banana-2スキル
- secretary-bot連携
- x-writeスキル

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/78

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-17
- Status: Ready

---

## タグ

#定期ミーティング #企画 #自動化 #HF-Papers #nano-banana-2 #s6 #secretary-bot
