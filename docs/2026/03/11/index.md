---
title: 2026-03-11 定期ミーティング #057
---

# 2026-03-11 定期ミーティング #057

## 🎯 企画フェーズ

### GitHub Project 状況
- 全30タスク完了 ✓
- 新規タスクが必要

### 企画内容

#### 🎋 自動コンテンツ生成パイプライン

**概要:** 論文・ニュース→図解→投稿を完全自動化する仕組み

**背景:**
ONIZUKA AGI Co.のミッション「AGIの知見をほどき、世界に届ける」を実現するため、高品質なコンテンツを効率的に生成・発信する仕組みが必要。

**機能:**
1. **情報収集** - HuggingFace Papers, arXiv, AI ニュースサイト
2. **図解生成** - nano-banana-2で視覚的な解説画像
3. **解説作成** - Web検索で関連情報収集、充実した解説
4. **自動投稿** - X Community, Sunwood Community, Discord

**技術要素:**
- hf-papers スキル（論文取得）
- nano-banana-2 スキル（図解生成）
- x-write / x-community スキル（投稿）
- cron / s6 で定期実行

**サブタスク:**
- [ ] 情報収集モジュール設計
- [ ] 図解生成パイプライン構築
- [ ] 解説文章生成ロジック
- [ ] 投稿スケジュール設定
- [ ] テスト実行

**GitHub Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/6

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-11
- Target Date: 2026-03-15
- Status: Ready

---

## メモ

- 全タスク完了後の企画フェーズとして実施
- ONIZUKAのミッションに沿った次のステップを具体化
- 既存スキル（hf-papers, nano-banana-2）を活用

---

## #058 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🔧 X Filtered Stream スキル完成

**概要:** X（Twitter）のFiltered Stream APIでリアルタイムツイート監視機能を完成させる

**背景:**
- SKILL.md: 完成済み
- 設定ファイル: 準備済み（x-bearer-token.json, x-discord-webhook.json）
- スクリプト: 未実装

**タスク:**
- [ ] x_filtered_stream.py 実装
- [ ] ルール管理機能（add/list/clear）
- [ ] Discord Webhook通知統合
- [ ] PM2自動起動設定
- [ ] 動作テスト

**技術要素:**
- X Filtered Stream API
- Bearer Token認証
- Discord Webhook
- PM2プロセス管理

**GitHub Issue:** https://github.com/onizuka-agi-co/skills/issues/24

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-11
- Target Date: 2026-03-12
- Status: In progress

---

---

## #059 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 89タスク（全て完了）
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 自動コンテンツ生成パイプライン

**概要:** HuggingFace Daily Papers → nano-banana-2図解 → X/Discord投稿の完全自動化

**背景:**
- hf-papers スキルで論文取得は可能
- nano-banana-2 スキルで図解生成は可能
- secretary-bot で定期タスク実行は可能
- これらを統合して自動化パイプラインを構築

**機能:**
1. 定期取得: 毎日決まった時間にトップ論文を取得
2. 図解生成: nano-banana-2 で論文の図解画像を生成
3. 解説生成: AI でわかりやすい解説文章を生成
4. 自動投稿: X と Discord に自動投稿
5. 定期実行: secretary-bot の定期タスクとして統合

**サブタスク:**
- [ ] 定期タスク定義ファイル作成
- [ ] コンテンツ生成ロジック実装
- [ ] 投稿フォーマット設計
- [ ] テスト投稿実施

**技術要素:**
- hf-papers スキル（既存）
- nano-banana-2 スキル（既存）
- x-write スキル（既存）
- secretary-bot 定期タスク機能

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/19

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-11
- Target Date: 2026-03-14
- Status: Backlog

---

## タグ

#定期ミーティング #企画 #自動化 #コンテンツ生成 #X-Stream
