---
title: 🤝 2026-03-11 定期ミーティング
---

# 🤝 2026-03-11 定期ミーティング

## #062 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📊 週間AGIレポート自動生成機能

**概要:** 毎週、その週に投稿された重要なAGI論文をまとめたレポートを自動生成・投稿する機能

**機能:**
1. 週に1回、その週のHF Papersトップ論文を収集
2. LLMで重要度を評価・選定（5-10本）
3. まとめ記事を自動生成
4. X（スレッド形式）+ Discord（長文）に投稿
5. memory/ にアーカイブ

**技術要素:**
- hf-papers スキル（既存）
- テキスト生成（LLM）
- x-write スキル（既存）
- secretary-bot（定期実行）

**効果:**
- 読者が1週間の動向を把握しやすくなる
- 長期的なトレンドが見える化される
- アーカイブとして蓄積

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/20

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-11
- Target Date: 2026-03-15
- Status: Ready

---

## タグ

#定期ミーティング #企画 #週間レポート #AGI論文 #自動化

---

## #063 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 33タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 自動コンテンツ生成パイプライン v2

**概要:** 既存スキルを統合し、より高度な自動コンテンツ生成パイプラインを構築する

**現状:**
- HuggingFace Papers投稿機能: 完成
- nano-banana-2画像生成: 完成
- X投稿: 完成
- Discord投稿: 完成

**改善案:**
1. **マルチソース対応** - Papers以外のソース（arXiv、Tech Blog等）を追加
2. **スケジュール投稿** - 最適な時間帯に自動投稿
3. **Engagement分析** - 投稿の反応を追跡・分析
4. **コンテンツキュー** - 投稿予定のコンテンツを管理

**技術要素:**
- hf-papers スキル拡張
- cron/s6 での定期実行
- X API で engagement 取得
- SQLite/JSON でキューデータ管理

**Issue:** https://github.com/onizuka-agi-co/skills/issues/25

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-11
- Target Date: 2026-03-14
- Status: Ready

---

## #064 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 94タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🤖 自動コンテンツ生成パイプライン 定期実行化

**概要:** 毎日自動でHuggingFace Papersのトップ論文を図解投稿するs6サービスを作成

**機能:**
- 毎日指定時刻に自動実行（毎朝9時）
- HuggingFace Papers APIでトップ論文を取得
- nano-banana-2で図解画像を生成
- X + Discordに投稿
- ログ保存

**技術要素:**
- s6サービス（/config/s6-services/auto-content-pipeline/）
- config.envで設定管理
- secretary-bot連携

**成果物:**
- /config/s6-services/auto-content-pipeline/run
- /config/s6-services/auto-content-pipeline/config.env
- ログファイル

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/21

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-11
- Target Date: 2026-03-13
- Status: Ready

---

## #065 朝の部

### 実施フェーズ：🔧 開発フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ Issue #21 を選択して開発実施

---

### 対象タスク：🤖 自動コンテンツ生成パイプライン 定期実行化

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/21

**実施内容:**

1. **GitHub Project に追加** ✅
   - Priority: P1
   - Size: M
   - Start Date: 2026-03-11
   - Target Date: 2026-03-13

2. **s6サービス作成** ✅
   ```
   /config/s6-services/auto-content-pipeline/
   ├── config.env
   └── run
   ```

3. **パイプラインテスト** ✅
   - HuggingFace Papers取得: 成功
   - 解説テキスト生成: 成功
   - dry-runモード: 正常動作

4. **GitHub Project ステータス更新** ✅
   - Status: Done に変更

**成果物:**
- `/config/s6-services/auto-content-pipeline/run` - s6実行スクリプト
- `/config/s6-services/auto-content-pipeline/config.env` - 設定ファイル

**注意点:**
- シンボリックリンク登録にはroot権限が必要
- 手動実行: `uv run scripts/auto_content_pipeline.py`

---

## #066 定期ミーティング

### 実施フェーズ：🔧 開発フェーズ

**GitHub Project タスク状況:**
- 完了: 33タスク
- Backlog: 多数
- Ready: 10タスク

→ Readyタスクから基盤機能を選択して開発実施

---

### 対象タスク：🐦 X Filtered Stream 完成

**Issue:** (Draft Issue)

**実施内容:**

1. **x_filtered_stream.py 実装** ✅
   - Bearer Token認証
   - Filtered Stream API接続
   - ルール管理（setup, rules, clear, add）
   - Discord Webhook通知
   - 自動再接続処理
   - 環境変数サポート

2. **接続テスト** ✅
   ```
   ✅ 接続成功 - 現在のルール: 1件
   ✅ Webhookテスト成功
   📋 現在のルール:
     - [haru_maki_new_posts] from:hAru_mAki_ch -is:retweet -is:reply
   ```

3. **s6サービス確認** ✅
   - /config/s6-services/x-stream/ 存在
   - config.env 設定済み
   - run スクリプト存在

4. **コミット** ✅
   - skills リポジトリにコミット
   - メッセージ: `feat(x-stream): implement X Filtered Stream client script`

5. **GitHub Project ステータス更新** ✅
   - Status: Done に変更

**成果物:**
- `skills/x-stream/scripts/x_filtered_stream.py` - ストリーミングクライアント

**使用方法:**
```bash
# テスト
uv run skills/x-stream/scripts/x_filtered_stream.py test

# ルール設定
uv run skills/x-stream/scripts/x_filtered_stream.py setup

# ストリーム開始
uv run skills/x-stream/scripts/x_filtered_stream.py stream
```

---

## #067 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 95タスク
- Backlog: 0タスク
- Ready: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 自動コンテンツ生成パイプラインの定常運用化

**概要:** HuggingFace Papers + nano-banana-2 で論文図解投稿を自動化する定常運用パイプラインを構築

**背景:**
- hf-papers スキルで論文取得機能はDone
- nano-banana-2 スキルで画像生成機能はDone
- これらを組み合わせた自動投稿パイプラインを定常運用化

**実施内容:**
- [ ] s6サービス作成（定期的に論文取得・画像生成・投稿）
- [ ] 投稿スケジュール設定（毎日/毎週）
- [ ] X/Discordへの自動投稿
- [ ] エラーハンドリング・ログ

**技術要素:**
- hf-papers スキル
- nano-banana-2 スキル
- x-write スキル
- s6サービス（FUTODAMA）

**GitHub Project 設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-11
- Target Date: 2026-03-13
- Status: Ready

---

---

## #068 定期ミーティング

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🎋 自動コンテンツ生成パイプライン

**概要:** HuggingFace Papers + nano-banana-2 + X投稿を統合した自動コンテンツ生成パイプライン

**実施内容:**
- cron/s6サービスで定期実行
- HF Papers API でトップ論文取得
- nano-banana-2 で図解画像生成
- AI で解説文章生成（Web検索で関連情報収集）
- X（Twitter）に自動投稿
- Discord に通知

**技術要素:**
- hf-papers スキル（既存）
- nano-banana-2 スキル（既存）
- x-write スキル（既存）
- s6サービス / cron

**価値:**
- ONIZUKA AGI Co.のミッション「AGIの知見をほどき、世界に届ける」に直結
- 最新AGI論文の自動解説・発信
- 継続的なコンテンツ生成

**Issue:** https://github.com/onizuka-agi-co/skills/issues/26

**GitHub Project 設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-11
- Target Date: 2026-03-18
- Status: Backlog

---

## タグ

#定期ミーティング #企画 #自動化 #コンテンツ生成 #HuggingFace #s6

---

_更新日: 2026-03-11_
