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

---

## #165 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30タスク（表示分）
- 未完了: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 週間まとめレポート自動生成

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/71

**概要:** 毎週日曜21:00に週間レポートを自動生成してDiscordに通知する機能

**通知内容:**
- 今週完了したタスク一覧（Status: Done）
- 新規追加された企画・Issue
- 進行中の案件（Status: In progress）
- 来週の予定（Target Dateが来週のタスク）

**実装方針:**
- secretary-botの新機能として追加
- YAMLスケジュール定義: every: sunday at 21:00
- GitHub Project APIから情報収集
- Discord Embed形式で見やすく表示
- #機能開発室 チャンネルに投稿

**技術要素:**
- GitHub Project API (gh project item-list)
- 期間フィルタリング（今週/来週）
- Discord Embed生成
- 定期実行（cron/s6）

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-17
- Status: Backlog

**成功基準:**
- 毎週日曜21:00に自動投稿
- タスク一覧が正確
- Embed形式で見やすい

**関連:**
- secretary-bot リポジトリ
- GitHub Project管理

---

## #166 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 30タスク
- 未完了: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🍌 nano-banana-2 スキル完成 - fal.ai画像生成

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/72

**概要:** fal.aiのnano-banana-2モデルを使ったテキストから画像生成スキルを完成させる

**現状:**
- SKILL.md作成済み
- scripts/generate.py 未実装
- references/api.md 未作成

**タスク:**
- [ ] scripts/generate.py 実装
- [ ] API認証設定（FAL_KEY）
- [ ] テスト実行
- [ ] ドキュメント整備

**技術要素:**
- fal.ai client SDK
- テキストプロンプト → 画像生成
- パラメータ: aspect_ratio, resolution, num_images

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-17
- Status: Ready

**成功基準:**
- テキストから画像が生成できる
- Discordで画像を表示できる
- パラメータ調整が可能

---

## タグ

#定期ミーティング #企画 #画像生成 #fal.ai #nano-banana-2

---

_更新日: 2026-03-15_
