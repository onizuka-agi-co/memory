---
title: 🤝 2026-03-13 定期ミーティング
---

# 🤝 2026-03-13 定期ミーティング

## #109 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 134タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🔄 X Filtered Stream × 自動パイプライン連携

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/35

**概要:**
@hAru_mAki_ch の新規投稿をリアルタイム検知し、自動で解説生成・引用リツイートを行うシステム

**フロー:**
1. **検知**: X Filtered Stream で新規投稿を検知
2. **解説**: 自動パイプラインで解説テキスト生成
3. **図解**: nano-banana-2で図解画像生成
4. **投稿**: 引用リツイート形式でX投稿
5. **通知**: Discordに完了通知

**実施内容:**
- [ ] x_filtered_stream.py にWebhookトリガー追加
- [ ] 新規投稿検知で auto_content_pipeline.py を呼び出し
- [ ] 引用リツイート用のテンプレート作成
- [ ] s6サービスで常駐実行

**技術要素:**
- X Filtered Stream API
- auto_content_pipeline.py（既存）
- x-quote-explain スキル
- s6サービス

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-13
- Target Date: 2026-03-15
- Status: Ready

---

## タグ

#定期ミーティング #企画 #X #FilteredStream #自動化 #リアルタイム

---

---

## #110 夜の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- 完了: 134タスク
- 未着手: 0タスク
- 進行中: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：🔄 自動コンテンツ生成パイプライン定期実行化

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/36

**概要:**
完成済みの自動コンテンツ生成パイプラインをs6サービスとして毎日09:00に自動実行する。

**フロー:**
1. **論文取得**: hf-papersスキルでHuggingFace Daily Papersのトップ論文を取得
2. **図解生成**: nano-banana-2スキルで図解画像を生成
3. **解説生成**: LLMで論文内容の要約・解説を生成
4. **投稿**: X + Discordに自動投稿
5. **定期実行**: 毎日09:00に実行

**技術要素:**
- hf-papers スキル（完了）
- nano-banana-2 スキル（完了）
- x-quote-explain スキル（完了）
- secretary-bot（定期実行連携可能）

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-13
- Target Date: 2026-03-15
- Status: Backlog

---

## タグ

#定期ミーティング #企画 #自動化 #コンテンツ生成 #パイプライン

---

_更新日: 2026-03-13_
