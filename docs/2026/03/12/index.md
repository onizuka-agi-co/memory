---
title: 2026-03-12 定期ミーティング #085
---

# 2026-03-12 定期ミーティング #085

## 🎋 実施フェーズ: 開発フェーズ

### 選択タスク
🔄 **X Filtered Stream 復活** (P1)

### 完了内容

1. **スクリプト実装**
   - `skills/x-stream/scripts/x_filtered_stream.py` 作成
   - X Filtered Stream API接続
   - Discord Webhook通知機能
   - ルール管理機能

2. **テスト完了**
   - ✅ Discord Webhook テスト成功
   - ✅ ルール確認 (from:hAru_mAki_ch)
   - ✅ ストリーム接続テスト成功

3. **s6サービス常駐化**
   - `/config/s6-services/x-filtered-stream/run` 作成
   - 自動再起動・ログ出力設定

### 使用方法

```bash
# テスト
uv run skills/x-stream/scripts/x_filtered_stream.py test

# ルール確認
uv run skills/x-stream/scripts/x_filtered_stream.py rules

# ストリーム開始
uv run skills/x-stream/scripts/x_filtered_stream.py stream
```

### スキル更新

- `skills/x-stream/scripts/x_filtered_stream.py` 新規作成
- `/config/s6-services/x-filtered-stream/run` 新規作成

---

## 🎯 実施フェーズ: 企画フェーズ (#086)

### GitHub Project状況
- 完了: 30タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

### 新規企画

**🔄 自動コンテンツ生成パイプライン定期実行化**

完成した自動コンテンツ生成パイプラインをs6サービスとして常駐させ、毎日自動でコンテンツ生成・投稿を行う。

**タスク:**
- [ ] s6サービス設定ファイル作成
- [ ] 毎日朝9時自動実行設定
- [ ] 実行ログ保存機能
- [ ] エラー通知機能（Discord）
- [ ] 動作テスト

**設定:**
- Priority: P1
- Size: M
- Start: 2026-03-12
- Target: 2026-03-14
- Status: Ready

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/27

---

## 🎯 実施フェーズ: 企画フェーズ (#087)

### GitHub Project状況
- 完了: 30タスク
- 未着手: 0タスク

→ 全タスク完了のため、企画フェーズを実施

### 新規企画

**🎋 自動コンテンツ生成パイプライン（AGI Content Pipeline）**

HuggingFace論文 → 図解生成 → 解説作成 → 投稿 の全フローを自動化する。

**実施内容:**
- スケジュール実行基盤構築（cron/s6サービス）
- 論文選定ロジック（Top Papers、カテゴリフィルタ）
- 図解生成フロー（nano-banana-2連携）
- 解説文章生成（AI要約）
- 投稿フロー統合（X, Discord, Bluesky）

**技術要素:**
- hf-papers スキル（論文取得）
- nano-banana-2 スキル（図解生成）
- x-write スキル（X投稿）
- message tool（Discord投稿）
- s6サービス（定期実行）

**設定:**
- Priority: P1
- Size: L
- Start: 2026-03-12
- Target: 2026-03-17
- Status: Backlog

**ONIZUKA Mission:**
「AGIの知見をほどき、世界に届ける」の自動化実現

---

#定期ミーティング #X #開発 #企画 #自動化 #パイプライン #AGI
