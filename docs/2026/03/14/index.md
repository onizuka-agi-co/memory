---
title: 🤝 2026-03-14 定期ミーティング
---

# 🤝 2026-03-14 定期ミーティング

## #145 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30タスク（確認済み）
- 未着手/進行中/レビュー: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/58

**概要:** 毎週金曜日にその週の活動をまとめるレポートを自動生成する機能

**フロー:**
1. memory/docsから日報を集約（過去7日分）
2. GitHub Projectから完了タスクを抽出
3. AIでまとめ記事を生成
4. Discord + Xに投稿

**技術要素:**
- memory/docsパース（daily-memoryスキル活用）
- gh project item-list（github-projectスキル活用）
- テキスト生成（LLM）
- 定期実行（secretary-bot連携）

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-14
- Target Date: 2026-03-17
- Status: Ready

**成功基準:**
- 毎週金曜日に自動実行
- レポートが正確で読みやすい
- Discord + Xに投稿完了

---

## タグ

#定期ミーティング #企画 #週間レポート #自動化 #secretary-bot

---

## #146 夜の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30タスク
- 未着手/進行中/レビュー: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/59

**概要:** 毎週金曜日にmemory/docsから週間サマリーを自動生成し、#機能開発室に投稿する機能

**実施内容:**
- memory/docsの1週間分の日報を集約
- GitHub Projectの完了タスクを集計
- 週間サマリーメッセージを生成
- secretary-botの定期タスクとして追加（毎週金曜日 21:00）

**技術要素:**
- Python集約スクリプト（weekly_summary.py）
- GitHub CLI（gh project item-list）
- secretary-botの定期タスクYAML

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-14
- Target Date: 2026-03-21

---

## #147 夜の部（2回目）

### 実施フェーズ：🔧 饭発フェーズ

**GitHub Project タスク状況:**
- Done: 128タスク
- Backlog: 3タスク（AGI Knowledge Base 構築含む）
- 未着手/進行中/レビュー: 1タスク

→ Backlogから「AGI Knowledge Base 構築」を選択して開発開始

---

### 開発内容

**🌳 AGI Knowledge Base 構築**

**実装完了こと:**
1. ✅ `/papers/` ディレクトリ構造作成
   - `index.md` - Papers Libraryトップページ
   - `category/` - カテゴリ別フォルダ（llm, vision, reasoning, agents, training）
   - `paper-template.md` - 論文テンプレート

2. ✅ `scripts/add_paper_to_kb.py` - 論文追加スクリプト
   - hf-papersスキルと連携
   - 自動カテゴリ分類
   - タグ生成
   - テンプレートからページ生成

3. ✅ VitePress設定更新
   - ナビゲーションに「📚 Papers」追加
   - サイドバーにpapersカテゴリ追加

**次のステップ:**
- [ ] 実際に論文を追加してテスト
- [ ] 画像生成機能統合（nano-banana-2）
- [ ] 自動情報報収集パイプライン構築
- [ ] GitHub Pages公開設定

**ステータス:** In progress → 継続開発中

---

---

## #148 夜の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30タスク
- 未着手/進行中/レビュー: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成機能

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/60

**概要:** 毎週日曜 21:00 にその週の完了タスク・進捗をまとめてDiscordに投稿する機能

**フロー:**
1. 毎週日曜 21:00 に自動実行
2. GitHub Project から週間完了タスクを取得
3. memory/docs の日報を参照
4. まとめレポートを生成
5. Discord #機能開発室 に投稿

**技術要素:**
- secretary-bot スケジュール機能
- GitHub Project API
- テンプレート生成

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-14
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 毎週自動でレポート投稿
- タスク数・進捗が正確
- 読みやすいフォーマット

---

_更新日: 2026-03-14_
