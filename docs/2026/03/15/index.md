---
title: 🤝 2026-03-15 定期ミーティング
---

# 🤝 2026-03-15 定期ミーティング

## #159 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 168タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 自動コンテンツ生成パイプライン定期実行化

**概要:** hf-papers + nano-banana-2 + x-write の統合パイプラインを毎日09:00に自動実行するs6サービスを構築

**現状:**
- hf-papersスキル：実装済み（fetch, get, explain, saveコマンド）
- nano-banana-2スキル：実装済み（generate.py）
- x-writeスキル：実装済み

**タスク:**
- [ ] パイプライン統合スクリプト作成
- [ ] s6サービス設定（毎日09:00実行）
- [ ] エラーハンドリング・リトライ
- [ ] ログ保存
- [ ] テスト実行

**技術要素:**
- s6サービス
- Python統合スクリプト
- Discord/X投稿連携

**成功基準:**
- 毎日09:00にトップ論文の図解投稿が自動で行われる
- エラー時はリトライまたは通知
- ログで実行履歴を確認可能

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/67

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-17
- Status: Ready

**関連:**
- secretary-bot定期実行機能
- hf-papersスキル
- nano-banana-2スキル

---

## #160 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
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

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/68

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-17
- Status: Ready

**成功基準:**
- 毎週金曜日に自動投稿
- 今週のタスク・企画が要約される
- 次週の予定も含める
- 見やすいフォーマット

---

## #161 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🤖 自動コンテンツ生成パイプライン定期実行化

**概要:** HuggingFace Daily Papersから最新AI論文を取得し、図解付きでXに自動投稿するパイプラインを構築・定期実行化

**背景:** ONIZUKA AGI Co.のミッション「AGIの知見をほどき、世界に届ける」を実現するため、継続的なコンテンツ生成を自動化

**構成要素:**
1. HuggingFace Papers API取得 - 最新論文を取得
2. 図解生成 - nano-banana-2でビジュアル生成
3. 解説文生成 - AI要約・解説作成
4. X投稿 - x-writeスキルで投稿

**技術スタック:**
- s6サービス（定期実行）
- Python（メインスクリプト）
- 既存スキル活用（hf-papers, nano-banana-2, x-write）

**スケジュール:** 毎日09:00自動実行

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/69

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-15
- Target Date: 2026-03-22
- Status: Ready

**成功基準:**
- 毎日09:00に最新論文の図解投稿が自動で行われる
- エラー時はリトライまたは通知
- ログで実行履歴を確認可能

---

_更新日: 2026-03-15_
