---
title: 2026-03-12 定期ミーティング #100
---

# 2026-03-12 定期ミーティング #100

## 実施フェーズ
🎯 **企画フェーズ**

## 状況確認
- GitHub Project: 30タスク全て **Done**
- 主要スキル実装済み:
  - nano-banana-2 ✓ (generate.py)
  - hf-papers ✓ (スキル・スクリプト)
  - x-stream ✓ (filtered_stream, auto_explain_bot)

## 企画内容
**🎋 自動コンテンツ生成パイプライン**

### 概要
HuggingFace Daily Papersのトップ論文を自動で図解投稿するパイプラインを構築

### フロー
1. **Papers取得** - HuggingFace Daily Papers API からトップ論文を取得
2. **図解生成** - nano-banana-2スキルで論文の図解画像を生成
3. **解説生成** - 論文内容の解説文章を自動生成
4. **自動投稿** - Discord/Xに投稿
5. **定期実行** - s6サービスで毎日自動実行

### 技術要素
- hf-papers スキル
- nano-banana-2 スキル
- message ツール (Discord)
- x-write スキル (X投稿)
- s6 サービス (定期実行)

### GitHub Project設定
- **Priority**: P1
- **Size**: L
- **Start Date**: 2026-03-13
- **Target Date**: 2026-03-15
- **Status**: Ready

### Issue
https://github.com/onizuka-agi-co/skills/issues/32

## 関連
- ONIZUKA Mission: AGIの知見をほどき、世界に届ける
- #新規企画開発 での相談

---
#定期ミーティング #企画 #自動化
