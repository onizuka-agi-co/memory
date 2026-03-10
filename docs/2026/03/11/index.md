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

## タグ

#定期ミーティング #企画 #自動化 #コンテンツ生成
