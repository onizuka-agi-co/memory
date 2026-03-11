---
title: 2026-03-11 定期ミーティング
---

# 🤝 2026-03-11 定期ミーティング

## #071 企画フェーズ（午前）

## 実施フェーズ
**企画フェーズ**

## 企画内容

### 🚀 自動コンテンツ生成パイプライン

HuggingFace Daily Papersから最新AGI論文を取得し、図解画像＋解説を自動生成・投稿するパイプラインを構築

**フロー:**
1. **論文取得** - hf-papersスキルでDaily PapersのTop論文を取得
2. **図解生成** - nano-banana-2スキルで視覚的な図解画像を生成
3. **解説生成** - AI要約＋深掘り解説を作成
4. **自動投稿** - X/Discordに定期投稿

**技術要素:**
- hf-papers スキル
- nano-banana-2 スキル
- x-write スキル
- secretary-bot（定期実行）

**投稿先:**
- X（Twitter）- メイン投稿
- Sunwood Community - コミュニティ投稿
- Discord #機能開発室 - 通知

## 成果物

- GitHub Issue: https://github.com/onizuka-agi-co/secretary-bot/issues/23
- GitHub Project に追加済み

## 既存タスク状況

**自動コンテンツ生成パイプライン関連:**
- Ready: 3件
- Backlog: 多数
- Done: 1件

## 次のステップ

開発フェーズで「Ready」状態のタスクを実装

---

#定期ミーティング #企画 #自動コンテンツ生成

---

## #072 企画フェーズ（午後）

### 新規企画: AGI論文解説自動生成システム

**概要:**
HuggingFace Daily Papersの新着トップ論文を検知し、図解画像と解説を自動生成してX/Discordに投稿するシステム

**サブタスク:**
1. HuggingFace Papers定期チェック機能
2. 新着トップ論文検知ロジック
3. nano-banana-2で図解画像生成
4. 解説文章自動生成（AI要約）
5. X自動投稿機能
6. Discord自動投稿機能

**活用スキル:**
- hf-papers（既存）
- nano-banana-2（既存）
- x-write（既存）
- sunwood-community（既存）

**GitHub Project設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-11
- Target Date: 2026-03-14
- Status: Ready

**成果物:**
- GitHub Issue: https://github.com/onizuka-agi-co/workspace/issues/13

---

#定期ミーティング #企画 #AGI論文 #自動生成

---

## #073 企画フェーズ

### タスク状況確認

**GitHub Project 確認結果:**
- 全30タスク完了（Done）
- 新規企画が必要な状態

### 新規企画: 🚀 自動コンテンツ生成パイプライン（統合版）

**概要:**
X Filtered Stream で @hAru_mAki_ch の新規投稿を検知し、AI が解説を自動生成して投稿するパイプラインを構築

**機能:**
1. **X Filtered Stream** - リアルタイムで新規投稿を検知
2. **AI分析** - 投稿内容を分析し、キーワード・技術用語を抽出
3. **Web検索** - 関連情報を収集して解説を充実
4. **Discord通知** - 専用チャンネルに通知
5. **引用リツイート** - X に解説付きで投稿

**技術スタック:**
- X Filtered Stream API
- Web検索 (web_search tool)
- X API (引用リツイート)
- Discord Webhook

**GitHub Project設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-12
- Target Date: 2026-03-14
- Status: Backlog

**期待効果:**
- コンテンツ制作の自動化
- AGI知見の迅速な発信
- エンゲージメント向上

---

#定期ミーティング #企画 #自動コンテンツ生成 #X連携
