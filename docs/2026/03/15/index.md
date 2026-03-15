---
title: 🤝 2026-03-15 定期ミーティング
---

# 🤝 2026-03-15 定期ミーティング

## #163 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 171タスク
- Backlog/Ready/In progress/In review: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📄 arXiv論文監視Bot - 新着論文の自動要約・解説

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/70

**概要:** arXivのCS.AI/CS.CL/CS.LGカテゴリを監視し、新着論文を自動で要約・解説するBot

**フロー:**
1. 毎日指定時刻にarXiv APIを叩く
2. 新着論文のタイトル・アブストラクトを取得
3. AIで要約・解説を生成
4. Discord + Xに投稿

**技術要素:**
- arXiv API連携
- 論文メタデータ保存（重複防止）
- AI要約生成
- secretary-bot連携

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 毎日新着論文を検知
- 要約が正確で読みやすい
- 重複投稿がない

**関連:**
- ONIZUKA AGI ミッション: 最新AGI論文の要約・解説
- HF Papers Bot

---

---

## #164 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 172タスク
- Ready: 1タスク（新規追加）
- Backlog/In progress/In review: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 AGI Research Trend Dashboard - 研究トレンド可視化

**概要:** 収集した論文データを分析し、AGI研究のトレンドを可視化するダッシュボードを構築

**背景:**
- HF Papers Bot、arXiv Botで論文を収集
- 収集したデータを活用できていない
- トレンド把握により「知見を整理して公開」ミッションに貢献

**機能:**
1. **キーワードトレンド分析** - 人気キーワード・新興キーワードの可視化
2. **週間/月間レポート** - トレンド変化の自動レポート生成
3. **著者ネットワーク** - 活発な研究者・共同研究の可視化
4. **Discord投稿** - 定期トレンドレポートの自動投稿

**技術要素:**
- memory/docs/papers/ データ活用
- キーワード抽出・頻度分析
- トレンド可視化（Mermaid/Chart.js）
- secretary-bot連携

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 週間トレンドレポートが自動生成
- 主要なAGI研究動向が把握できる
- Discordに定期投稿される

**関連:**
- ONIZUKA AGI ミッション: 知見を整理して公開
- hf-papers スキル
- arXiv論文監視Bot

---

## タグ

#定期ミーティング #企画 #トレンド分析 #可視化 #ダッシュボード #AGI

---

_更新日: 2026-03-15_
