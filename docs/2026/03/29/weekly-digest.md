---
# Weekly Digest 自自動生成

## 概要
毎週月曜日に前週のAGI関連論文・ニュースをまとめた週次ダイジェストを自動生成し、Discordとmemory/docsに投稿する機能。

## 要件
- HuggingFace Daily Papers APIから週間トップ論文を取得
- 要約・傾向分析を自動生成
- 週次レポートを `memory/docs/YYYY/WW/` に保存
- Discord #agidigest チャンネルに自動投稿
- s6サービスで毎週月曜09:00に自動実行

## 技術要素
- hf-papers スキルを拡張
- WeeklyDigester クラス新規作成
- Discord message tool統合
- cron: `0 9 * * 1` (毎週月曜09:00)

## 開発期間
- 見積もり: 1-2日 (Size: M)

## 技術フロー
```
hf-papers (拡張)
  └── WeeklyDigester (新規)
```

