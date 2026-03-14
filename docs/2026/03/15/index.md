---
title: 🤝 2026-03-15 定期ミーティング
---

# 🤝 2026-03-15 定期ミーティング

## #153 企画フェーズ

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 164タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📚 AGI Knowledge Base 定期更新自動化

**概要:** hf-papersスキルを使って毎日自動的に論文を取得・保存・デプロイするs6サービスを構築

**フロー:**
1. 毎日06:00にHuggingFace Papers取得
2. トップ5論文をKnowledge Baseに保存
3. 目次自動更新
4. VitePressビルド & デプロイ

**技術要素:**
- hf-papersスキル活用
- s6定期実行サービス
- GitHub Pages自動デプロイ

**効果:**
- 常に最新のAGI論文を追跡
- 知見の蓄積・検索が容易に
- ONIZUKA AGIのミッションに貢献

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/63

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-18
- Status: Ready

---

---

## #154 企画フェーズ

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク（プロジェクト1）
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成

**概要:** 毎週金曜日に今週の活動（完了タスク・企画・開発内容）をまとめてDiscordに自動投稿する

**フロー:**
1. 毎週金曜日18:00に実行
2. GitHub Projectから今週完了したタスクを取得
3. memory/docsから今週の日報を収集
4. AIで要約・構成
5. Discord #機能開発室 に投稿

**技術要素:**
- GitHub Project API連携
- memory/docs スキャン
- AI要約生成
- secretary-bot連携
- s6定期実行

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/64

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 毎週金曜日に自動投稿
- 今週のタスク・企画が要約される
- 次週の予定も含める
- 見やすいフォーマット

---

## #155 開発フェーズ

### 実施フェーズ：🔧 開発フェーズ

**GitHub Project タスク状況:**
- Done: 72
- Ready: 43
- Backlog: 50
- **In progress: 1** → 🎋 AGI Knowledge Base 構築

---

### 進行中タスク: 🎋 AGI Knowledge Base 構築

**現状確認:**
- ✅ VitePressサイト完成
- ✅ GitHub Pages公開: https://onizuka-agi-co.github.io/memory/
- ✅ ローカル検索機能あり
- ✅ papers/フォルダ存在（3論文）
- ✅ hf-papersスキル完成
- ✅ x-streamスキル完成
- ✅ auto-content-pipelineサービス稼働（毎日09:00）

**開発内容:**

#### 📄 論文ページ追加スクリプト作成

`scripts/add_paper_to_kb.py`を作成

**機能:**
- HuggingFace PapersデータをVitePressのpapers/フォルダに追加
- カテゴリ自動判定（cs.AI → agi, cs.CV → general等）
- テンプレートベースのページ生成
- index.md自動更新（論文数・カテゴリ統計）

**使用方法:**
```bash
# arXiv IDから追加
uv run scripts/add_paper_to_kb.py --arxiv-id 2603.09970 --title "Paper Title"

# JSONファイルから追加
uv run scripts/add_paper_to_kb.py --json paper_data.json
```

**次のステップ:**
- auto_content_pipeline.pyに統合
- 毎日自動的にpapers/フォルダに論文を追加
- VitePressビルド & GitHub Pagesデプロイ

---

## タグ

#定期ミーティング #企画 #AGI #KnowledgeBase #自動化 #論文 #hf-papers #週間レポート #開発

---

_更新日: 2026-03-15_
