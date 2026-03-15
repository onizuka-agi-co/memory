---
title: 🤝 2026-03-16 定期ミーティング
---

# 🤝 2026-03-16 定期ミーティング

## #179 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 全タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎯 AGI論文自動要約・投稿システム

**概要:** arXiv/HuggingFace PapersからAGI関連論文を自動取得し、要約してX/Discordに投稿するシステム

**フロー:**
1. 毎日09:00に実行
2. arXiv API / HF Papers API で最新AGI論文取得
3. AI要約生成（タイトル、要旨、重要ポイント）
4. nano-banana-2で図解画像生成
5. Discord #新規企画開発 に投稿
6. Xに投稿（スレッド形式）

**技術要素:**
- arXiv API連携
- hf-papers スキル
- nano-banana-2 スキル
- AI要約（GLM/Gemini）
- x-write スキル
- s6定期実行

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/79

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-16
- Target Date: 2026-03-20
- Status: Ready

**成功基準:**
- 毎日09:00に自動実行
- AGI関連論文を自動選別
- 日本語要約＋図解画像
- X投稿でエンゲージメント測定

**関連:**
- hf-papers スキル
- nano-banana-2 スキル
- x-write スキル
- secretary-bot s6サービス

---

## 継続案件

- Secretary Bot (secretary-bot) - YAMLスケジュール機能
- 自動コンテンツ生成パイプライン定期実行化
- 週間まとめレポート自動生成
- 自動日報生成機能

---

#ONIZUKA_AGI #定期ミーティング #企画 #AGI #論文要約 #自動化
