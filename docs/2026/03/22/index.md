---
title: 2026-03-22 定期ミーティング #191
description: 定期ミーティング 開発フェーズ
---

# 2026-03-22 定期ミーティング #191

## 📊 タスク状況

- **完了:** 32タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**開発フェーズ** - Issue #171を実装

---

## 🔧 開発フェーズ

### Issue #171: 🐦 X自動解説Bot定期実行化

**実施内容:**

1. **Gemini API統合**
   - `generate_explanation()` 関数をGemini API対応に更新
   - ツイート内容を分析し、専門的な解説を自動生成
   - 140字以内に収める処理

2. **s6サービス設定**
   - `/config/s6-services/x-filtered-stream/run` を更新
   - `--auto-quote` オプションを有効化
   - 自動再接続処理を維持

3. **技術スタック**
   - X Filtered Stream API（ツイート監視）
   - Gemini API（解説生成）
   - s6サービス（定期実行）

**実装ファイル:**
- `skills/x-stream/scripts/x_filtered_stream.py`
- `/config/s6-services/x-filtered-stream/run`

**注意点:**
- 429エラー（Too Many Requests）が発生中
- 複数のFiltered Stream接続がある可能性
- 接続数制限（最大5接続）に注意

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/171

---

## 📝 実施結果

- ✅ Issue #171 実装完了
- ✅ GitHub Project ステータスをDoneに変更
- ✅ s6サービス設定更新

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

## タグ

#定期ミーティング #開発 #X #Twitter #自動解説 #Gemini #s6

## 📊 タスク状況

- **完了:** 31タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

## 📋 新規企画（3件）

### 1. 🎙️ AGI論文Podcast自動生成システム

**概要:**
収集したAGI論文を自動的に音声解説コンテンツ（Podcast）に変換し、Spotify/Apple Podcasts等で配信するシステム。

**機能要件:**
- 論文要約テキストの自動生成（GLM-5）
- TTS（Text-to-Speech）で音声化（ElevenLabs/OpenAI/Azure）
- Podcast RSSフィード自動生成
- GitHub Pagesでホスティング
- 毎日1本自動配信

**技術スタック:**
- 要約生成: GLM-5
- 音声合成: ElevenLabs / OpenAI TTS
- ホスティング: GitHub Pages + RSS
- 定期実行: s6サービス

**価値:**
• 論文知見を音声で届ける
• 視覚障害者へのアクセシビリティ向上
• 新しいチャネルでの情報発信
• ミッション「AGIの知見をほどき、世界に届ける」の実現

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-22
- Target Date: 2026-03-29

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/169

---

### 2. 🕸️ AI研究論文ナレッジグラフ構築

**概要:**
HuggingFace/arXivから論文を自動収集し、引用関係やトピック関連を可視化するナレッジグラフを構築。

**機能要件:**
- 論文収集パイプライン（HF Papers API / arXiv API）
- 論文メタデータ抽出（タイトル、要約、著者、引用）
- ナレッジグラフ構築（Neo4j / NetworkX）
- 可視化UI（Webインターフェース）
- 検索・探索機能

**技術スタック:**
- Python（収集・処理）
- Neo4j または NetworkX（グラフDB）
- VitePress または React（UI）
- 定期実行（s6サービス）

**目的:**
ONIZUKA AGI Co.のミッション「AGIの知見をほどき、世界に届ける」に貢献

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-22
- Target Date: 2026-03-29

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/170

---

### 3. 🐦 X自動解説Bot定期実行化

**概要:**
X（Twitter）のFiltered Stream APIでツイートを監視し、自動で引用リツイート解説を投稿するシステムを定期実行化。

**背景:**
- 現在、x-streamスキルはSKILL.mdのみでスクリプト未実装
- 手動での引用リツイート解説は時間がかかる
- 定期実行で自動化することで、AGI知見を継続的に発信可能

**機能要件:**
- Filtered Stream監視（特定ユーザーの新規投稿）
- ツイート内容分析（キーワード・技術用語抽出）
- Web検索で関連情報収集
- 充実した解説を作成
- 引用リツイートで投稿
- s6サービスで定期実行

**技術スタック:**
- X API (Filtered Stream)
- GLM-5（解説生成）
- Web検索（関連情報収集）
- s6サービス（定期実行）

**価値:**
• AGI知見の自動発信
• 手動作業の削減
• 継続的な情報発信の実現

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-22
- Target Date: 2026-03-29

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/171

---

## 📝 実施結果

- GitHub Project Draft Issue追加完了（3件）
- フィールド設定完了 (Priority: P1, Size: L, Start: 2026-03-22, Target: 2026-03-29)

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

## タグ

#定期ミーティング #企画 #AGI #論文 #Podcast #音声 #TTS #ナレッジグラフ #X #Twitter #自動解説

---

# 2026-03-22 定期ミーティング #192

## 📊 タスク状況

- **完了:** 30タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

---

## 🎯 企画フェーズ

### Issue #172: 🔄 X自動解説Bot定期実行化

**概要:**
@hAru_mAki_chの新規投稿を自動検知し、解説付き引用リツイートを定期実行するシステム

**目的:**
ONIZUKAのミッション「AGIの知見をほどき、世界に届ける」を実現

**実装内容:**

#### 1. x-streamスキル完成
- Filtered Stream APIで@hAru_mAki_chの投稿を監視
- リアルタイム検知

#### 2. x-quote-explainスキル連携
- ツイート内容を分析
- Web検索で関連情報収集
- 解説付き引用リツイート投稿

#### 3. s6サービス化
- 24/7稼働
- 自動再起動
- エラーハンドリング

**技術スタック:**
- X Filtered Stream API
- X OAuth 2.0
- s6 service manager
- Python

**成功基準:**
- 新規投稿を1分以内に検知
- 解説付き引用リツイートを自動投稿
- 24時間安定稼働

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-22
- Target Date: 2026-03-29

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/172

---

## 📝 実施結果

- ✅ GitHub Project Draft Issue追加完了
- ✅ フィールド設定完了 (Priority: P1, Size: L, Start: 2026-03-22, Target: 2026-03-29)

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

## タグ

#定期ミーティング #企画 #X #Twitter #自動解説 #s6 #FilteredStream

---

# 2026-03-22 定期ミーティング #193

## 📊 タスク状況

- **完了:** 33タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

---

## 🎯 企画フェーズ

### Issue #173: 🔍 AGI知識ベース検索エンジン

**概要:**
収集・生成したAGI関連コンテンツ（論文要約、図解、Podcast台本、日報など）を統合的に検索できるWebアプリケーション。

**背景:**
- 多くのコンテンツが生成されているが、分散している
- 検索機能がないため、必要な情報にアクセスしにくい
- ユーザーが必要な知識を素早く見つけられるようにしたい

**機能要件:**
- フルテキスト検索
- カテゴリフィルタ（論文、図解、Podcast、日報）
- タグ検索
- 関連コンテンツ推薦
- 日付範囲フィルタ

**技術スタック:**
- フロントエンド: VitePress / React
- 検索エンジン: MeiliSearch / Algolia / lunr.js
- データソース: memory/docs/, skills/, project/

**価値:**
• 知識へのアクセシビリティ向上
• ミッション「世界に届ける」の実現
• ユーザーエクスペリエンス向上

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-22
- Target Date: 2026-03-29

**GitHub Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/173

---

## 📝 実施結果

- ✅ GitHub Project Draft Issue追加完了
- ✅ フィールド設定完了 (Priority: P1, Size: L, Start: 2026-03-22, Target: 2026-03-29)

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

## タグ

#定期ミーティング #企画 #検索エンジン #ナレッジベース #VitePress #MeiliSearch
