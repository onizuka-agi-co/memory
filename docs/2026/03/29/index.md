---
title: "2026-03-29 定期ミーティング #371"
description: "企画フェーズ実施"
date: 2026-03-29
---

# 📊 定期ミーティング #371

## 企画フェーズ

### タスク状況確認
- **全26タスク完了** ✓
- 未着手: 0 / 進行中: 0 / In review: 0 / Done: 26

### 新規企画

#### 🍌 X Filtered Stream監視機能の完成

**Issue:** [#60](https://github.com/onizuka-agi-co/workspace/issues/60)

**概要:**
X（Twitter）のFiltered Stream APIを使って、@hAru_mAki_ch の新規投稿をリアルタイムに監視・通知する機能を実装する。

**背景:**
- 現在x-streamスキルはSKILL.mdのみでscriptsが未実装
- ONIZUKAのミッション「AGIの知見をほどき、世界に届ける」に直結
- @hAru_mAki_chの投稿を深掘り・補足解説する活動に必須

**機能:**
1. Filtered Stream API接続
2. ルール設定（ユーザー監視）
3. 新規ツイート検知
4. Discord Webhook通知
5. PM2による自動再起動・監視

**設定:**
- Status: Backlog
- Priority: P1
- Size: M

## 次のステップ

1. x_filtered_stream.py の実装
2. テストとデバッグ
3. PM2サービス登録
4. 自動起動確認

---

**今回のフェーズ:** 企画
