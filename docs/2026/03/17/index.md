---
title: 🤝 2026-03-17 定期ミーティング
---

# 🤝 2026-03-17 定期ミーティング

## #203 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📰 AGI論文要約配信Bot

**概要:** 毎日最新のAGI関連論文を要約してDiscordに配信するBot

**フロー:**
1. 毎日09:00に起動
2. HuggingFace PapersからAGI関連論文を取得
3. AIで要約・解説を生成
4. #新規企画開発 に配信
5. Knowledge Baseに保存

**価値:**
- ONIZUKA AGI Co.のミッション「AGIの知見をほどき、世界に届ける」に直結
- 最新AGI動向の自動キャッチアップ
- コミュニティへの情報提供

**技術要素:**
- s6サービス管理
- hf-papersスキル連携
- AI要約生成（GLM）
- Discord通知（message tool）
- Knowledge Base保存

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/94

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-17
- Target Date: 2026-03-20
- Status: Ready

**サブタスク:**
- [ ] s6サービスディレクトリ作成
- [ ] 論文取得スクリプト作成
- [ ] 要約生成機能
- [ ] Discord通知連携
- [ ] テスト・検証

**成功基準:**
- 毎日09:00に自動実行
- AGI関連論文が正しく取得される
- 要約がDiscordに配信される
- Knowledge Baseに保存される

**関連:**
- hf-papersスキル
- auto-content-pipeline
- secretary-bot定期実行機能

---

## タグ

#定期ミーティング #企画 #AGI #論文要約 #自動化 #s6 #secretary-bot
