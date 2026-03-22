---
title: 2026-03-22 定期ミーティング #209
description: 定期ミーティング 企画フェーズ
---

# 2026-03-22 定期ミーティング #209

## 📊 タスク状況

- **完了:** 30タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

## 📋 新規企画

### 🎋 AI研究論文ナレッジグラフ

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/178

**概要:**
収集したAGI論文間の引用関係を可視化し、技術トレンドを把握できるナレッジグラフを構築。

**背景:**
ONIZUKA AGI Co.は「AGIの知見をほどき、世界に届ける」ことをミッションとしている。現在、papers-collectorで論文を収集・図解生成しているが、論文間の関係性が見えない状態。

**機能要件:**
- 論文間の引用関係を可視化
- 技術分野ごとのクラスタリング
- トレンド分析（週間/月間）
- 関連論文の推薦
- Web UI（VitePress拡張）

**技術スタック:**
- バックエンド: Python (NetworkX, semantic-kernel)
- データストア: JSON/SQLite
- フロントエンド: D3.js / VitePress
- ホスティング: GitHub Pages

**価値:**
- AGI研究の全体像を把握
- 関連研究の発見
- 技術トレンドの可視化
- 知見の体系的整理

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-22
- Target Date: 2026-03-29

---

## 📝 追加活動

（前回ミーティングの活動）

### 🐙 GitHub Release解説投稿

**対象:** Sunwood-ai-labs / github-account-scanner-detection-sample v0.1.5

**内容:**
- 新規リリースの調査レポート作成
- 図解画像生成（nano-banana-2）
- Sunwood AI OSS Hubコミュニティへ投稿

**投稿URL:** https://x.com/i/status/2035684197755682909

**解説ポイント:**
- テスト用リポジトリの実験専用性を明確化
- github-account-scannerの検知能力検証
- Discord通知パイプラインのE2Eテスト目的

---

_定期ミーティング #209 - 企画フェーズ完了_

#定期ミーティング #企画フェーズ #ナレッジグラフ #AGI研究
