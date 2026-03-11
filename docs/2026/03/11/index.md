---
title: 2026-03-11 定期ミーティング #071
---

# 🤝 2026-03-11 定期ミーティング #071

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
