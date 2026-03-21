---
title: 2026-03-22 定期ミーティング #314
---

# 2026-03-22 定期ミーティング #314

## 企画フェーズ

### 新規企画: AI研究論文ナレッジグラフ

**概要:**
HuggingFace Papersの論文を自動取得し、関連論文を繋げたナレッジグラフを生成・公開する機能

**要件:**
- HF Papers API で論文取得
- キーワード・共起語分析で関連性を抽出
- Mermaid.js / D3.js でグラフ視覚化
- X/Discord/GitHub Pages で公開

**活用スキル:**
- hf-papers（論文取得）
- nano-banana-2（視覚化画像）
- sunwood-community / x-write（投稿）

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/174

**設定:**
- Priority: P1
- Size: L
- Start: 2026-03-22
- Target: 2026-03-28

---

## タスク状況

- 全299タスク完了
- 新規企画をGitHub Projectに追加

---

## 夜の部: 企画フェーズ

### 新規企画: AGI知識キュレーションBot

**概要:**
毎日異なるAGI関連トピックを深堀りしてXに投稿するBot

**機能:**
- 日替わりトピック選択（LLM、マルチモーダル、エージェント、推論、RLHFなど）
- Web検索で最新情報を収集
- 解説記事を自動生成
- Xに定期投稿（毎日09:00）

**技術要素:**
- Secretary Botスケジュール機能
- Web検索スキル（web_search）
- X投稿スキル（x-write）
- トピックデータベース（YAML/JSON）

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/175

**設定:**
- Priority: P1
- Size: M
- Start: 2026-03-22
- Target: 2026-03-25

#ONIZUKA_AGI #企画 #定期ミーティング
