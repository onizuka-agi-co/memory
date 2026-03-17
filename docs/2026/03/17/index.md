---
title: 🤝 2026-03-17 定期ミーティング
---

# 🤝 2026-03-17 定期ミーティング

## #221 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 全タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間まとめレポート自動生成

**概要:** 毎週日曜日にその週の成果をまとめたレポートを自動生成

**機能:**
1. 週の完了タスクを集計
2. 日報から主要な成果を抽出
3. 週間レポートを自動生成
4. Discordに通知
5. memory/docs/YYYY/MM/weekly/YYYY-MM-DD.md に保存

**技術要素:**
- secretary-bot定期実行
- GitHub Project API連携
- AI要約生成
- Discord通知

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/102

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-17
- Target Date: 2026-03-20
- Status: Ready

**成功基準:**
- 毎週日曜日21:00に自動実行
- 週間レポートが正しく生成される
- Discordに通知が届く

**関連:**
- daily-memoryスキル
- secretary-bot定期実行機能

---

## #222 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 全タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🐦 X Filtered Stream 完成計画

**概要:** リアルタイムツイート監視機能を完成させ、自動引用リツイート解説までを実装する

**機能:**
1. **Filtered Stream スクリプト実装** - X APIでリアルタイム監視
2. **Discord Webhook通知連携** - ツイート検知時に通知
3. **自動引用リツイート解説** - sunwood-communityスキル連携
4. **PM2/s6サービス化** - 自動起動・監視

**技術要素:**
- X Filtered Stream API
- Bearer Token認証
- Discord Webhook
- sunwood-communityスキル
- PM2プロセス管理

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/103

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-17
- Target Date: 2026-03-20
- Status: Ready

**成功基準:**
- hAru_mAki_chの新規投稿を検知
- Discordに通知が届く
- 自動で引用リツイート解説が投稿される
- サービスが自動起動・再起動する

**関連:**
- skills/x-stream/
- sunwood-communityスキル

---

## #223 定期ミーティング

### 実施フェーズ：🔧 開発フェーズ

**GitHub Project タスク状況:**
- Done: 84
- Ready: 70
- Backlog: 57
- In progress: 1

→ Readyタスクから「🎨 X投稿の図解自動生成機能」を選択

---

### 実装完了：🎨 X投稿の図解自動生成機能

**概要:** X（Twitter）投稿の図解画像を自動生成する機能

**実装内容:**

1. **x-visual スキル作成**
   - 場所: `skills/x-visual/`
   - 機能: ツイート内容を分析して図解画像を生成

2. **x_visual.py スクリプト実装**
   - ツイート取得（x-read連携）
   - コンテンツ分析（キーワード・ハッシュタグ抽出）
   - 画像生成プロンプト自動作成
   - nano-banana-2連携で画像生成
   - 解説文章自動生成

3. **プロンプトテンプレート**
   - references/prompts.md に複数のテンプレートを用意
   - テック/AI/ビジネス/ニュース等のカテゴリ別

**コマンド例:**
```bash
# ツイートの図解生成
uv run skills/x-visual/scripts/x_visual.py explain <tweet_id>

# プロンプトプレビュー
uv run skills/x-visual/scripts/x_visual.py preview <tweet_id>

# 保存付き生成
uv run skills/x-visual/scripts/x_visual.py explain <tweet_id> --save
```

**出力:**
- 生成画像URL
- 解説文章（日本語）
- ローカル保存オプション

**ステータス:** Done

---

_更新日: 2026-03-17_
