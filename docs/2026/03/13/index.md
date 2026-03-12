---
title: 🤝 2026-03-13 定期ミーティング
---

# 🤝 2026-03-13 定期ミーティング

## #107 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 サービス監視ダッシュボード

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/33

**概要:**
FUTODAMAコンテナ内のs6サービスの状態を一元管理するダッシュボード

**機能:**
- s6サービス稼働状況のリアルタイム表示
- CPU/メモリ使用率の監視
- 異常検知時のDiscord通知
- ログ閲覧機能

**監視対象:**
- secretary-bot-shutogarasu
- auto-content-pipeline
- x-filtered-stream
- discord-webhook-heartbeat
- task-check-webhook

**技術要素:**
- s6-svstat コマンド
- Python Flask/FastAPI
- Discord Webhook
- cron定期チェック

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-13
- Target Date: 2026-03-16
- Status: Ready

---

## タグ

#定期ミーティング #企画 #監視ダッシュボード #s6 #運用

---

## #108 夜の部 (03:01)

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 130タスク
- Backlog: 3タスク
- 進行中: 0

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🔧 自動コンテンツ生成パイプライン定期実行化

**Issue:** https://github.com/onizuka-agi-co/workspace/issues/17

**概要:**
既存のHF Papers図解投稿機能をs6サービスとして毎日09:00に自動実行

**実施内容:**
- s6サービス設定ファイル作成
- 毎日09:00にHF Papers取得
- nano-banana-2で図解生成
- X/Discord自動投稿
- ログ・監視機能

**技術要素:**
- s6サービス (futodama-s6-serviceスキル活用)
- hf-papers スキル
- nano-banana-2 スキル
- x-write スキル
- message tool

**効果:**
- 完全自動化で手間ゼロ
- 毎日最新AGI論文を解説
- ミッション「AGIの知見をほどき、世界に届ける」の自動実行
- オペレーションコスト削減

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-13
- Target Date: 2026-03-15
- Status: Ready

---

_更新日: 2026-03-13 03:05 JST_
