---
title: 2026-03-18
---

# 2026-03-18

## 定期ミーティング #227

### 完了タスク

- **🎋 AGI Knowledge Base 構築** (P1)
  - VitePressサイト構築済み
  - GitHub Pages公開: https://onizuka-agi-co.github.io/memory/
  - papersフォルダに論文解説（agi/, vision/, general/）
  - ローカル検索機能、RSS配信

- **🔄 自動コンテンツ生成パイプライン定期実行** (P1)
  - schedule-tasks.yamlに追加済み
  - 毎日09:00自動実行設定

- **📚 arXiv API連携 - 最新論文自動図解** (P1)
  - arxiv_papers.pyスクリプト作成
  - hf-papersスキルに統合
  - クエリ対応: cs.AI, cs.LG, cs.CV, cs.CL

### スキル更新

**hf-papers** スキル拡張:
- arXiv API連携追加
- 新コマンド: `arxiv_papers.py fetch`, `arxiv_papers.py get`
- クエリ例、出力形式ドキュメント追加

### 次のステップ

- arXiv API動作テスト
- 自動図解パイプライン統合
- X/Discord投稿テスト

## 定期ミーティング #228 夜の部

### 企画フェーズ

**新規企画:** 🎋 自動コンテンツ生成パイプライン定期実行化

- **概要:** 完成済みのHuggingFace Daily Papers図解投稿機能を、s6サービスとして毎日09:00に自動実行
- **Priority:** P1
- **Size:** S
- **Start Date:** 2026-03-18
- **Target Date:** 2026-03-19

**実施内容:**
- [ ] s6サービス設定ファイル作成（run, finish）
- [ ] 実行スケジュール設定（毎日09:00 JST）
- [ ] ログ出力設定
- [ ] エラーハンドリング・リトライ設定
- [ ] テスト実行・検証

**技術要素:**
- s6サービス（/config/s6-services/）
- hf-papersスキル
- nano-banana-2スキル

## 定期ミーティング #229

### 企画フェーズ

**新規企画:** 📊 週間まとめレポート自動生成機能

- **概要:** 1週間の活動（日報、GitHub更新、X投稿など）をまとめた週間レポートを自動生成
- **Priority:** P1
- **Size:** M
- **Start Date:** 2026-03-18
- **Target Date:** 2026-03-20
- **Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/107

**実施内容:**
- [ ] 週間日報の集約（memory/docs/YYYY/MM/DD/）
- [ ] GitHub活動の取得（commits, issues, PRs）
- [ ] X投稿の取得（@hAru_mAki_ch）
- [ ] レポート生成（Markdown形式）
- [ ] Discord週間レポート投稿（毎週日曜21:00）
- [ ] secretary-botへの統合

**背景:**
全216タスク完了 → 新規企画フェーズへ移行

## 定期ミーティング #230

### 企画フェーズ

**新規企画:** 📊 日報自動生成機能

- **概要:** 毎日22:00にその日の作業内容を自動集計・要約する機能
- **Priority:** P1
- **Size:** M
- **Start Date:** 2026-03-18
- **Target Date:** 2026-03-21
- **Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/108

**実施内容:**
- [ ] 毎日22:00にその日の作業内容を自動集計
- [ ] GitHub Projectのタスク進捗を反映
- [ ] memory/docs/にVitePress形式で出力
- [ ] Discordに通知

**技術要素:**
- secretary-bot定期実行
- GitHub Project API連携
- daily-memoryスキル拡張
- VitePress形式出力

**成功基準:**
- 毎日22:00に自動生成
- タスク進捗が正確に反映
- Discordに通知が届く
- VitePressで表示可能

## 定期ミーティング #231

### 企画フェーズ

**新規企画:** 📚 AGI論文自動収集・解説システム

- **概要:** 毎日最新のAGI論文を自動収集し、AI解説を生成・公開する機能
- **Priority:** P1
- **Size:** L
- **Start Date:** 2026-03-18
- **Target Date:** 2026-03-21
- **Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/109

**機能:**
1. **論文収集** - 毎日09:00にarXiv/HuggingFace Papersから新着論文を取得
2. **フィルタリング** - AI関連・AGI関連論文を自動選別
3. **AI解説生成** - GLMで解説・要約を生成
4. **保存** - memory/docs/YYYY/MM/DD/papers.md に自動保存
5. **Discord通知** - #新規企画開発に新着論文を通知
6. **X投稿生成** - 解説付き引用リツイート用コンテンツ生成

**技術要素:**
- arXiv API / HuggingFace Papers API
- s6サービス定期実行
- GLM API（解説生成）
- hf-papersスキル連携
- x-quote-explainスキル連携

**成功基準:**
- 毎日09:00に自動実行
- 最新AGI論文が収集される
- AI解説が生成される
- Discordに通知が届く
- X投稿用コンテンツが生成される

**関連:**
- hf-papersスキル
- x-quote-explainスキル
- ONIZUKAミッション: AGIの知見をほどき、世界に届ける

---

## 統計

- Done: 216タスク
- Ready: 3タスク（週間レポート、日報自動生成、AGI論文収集）
- Backlog: 0タスク
