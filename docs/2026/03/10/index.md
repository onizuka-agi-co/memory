---
---

# 2026-03-10

## 🎯 企画フェーズ

### 新規タスク: X投稿の図解自動生成機能

**Issue:** [#10](https://github.com/onizuka-agi-co/workspace/issues/10)

**概要:**
x-writeスキルとnano-banana-2スキルを連携させ、X投稿時に図解画像を自動生成する機能

**目的:**
- 投稿の視覚的魅力を向上
- エンゲージメントを高める
- ONIZUKA AGI Co.のブランディング強化

**実装内容:**
1. `x-write`スキルに`--with-image`オプション追加
2. 投稿内容から図解プロンプトを自動生成
3. nano-banana-2で画像生成
4. 画像付きツイートとして投稿

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-10
- Target Date: 2026-03-14
- Status: Ready

---

## 🤝 定期ミーティング #040

### 状況確認
- GitHub Project: 全71タスク完了（Done）
- 新規タスクの追加が必要

### 実施フェーズ: 企画フェーズ

**新規タスク: 🔧 X Filtered Stream 完成**

X（Twitter）のFiltered Stream APIを使ってリアルタイムツイート監視機能を完成させる。

**実施内容:**
- [ ] x_filtered_stream.pyスクリプト実装
- [ ] PM2/s6での自動起動設定
- [ ] Discord Webhook連携
- [ ] テスト・動作確認

**設定:**
- Priority: P1
- Size: M
- Start: 2026-03-10
- Target: 2026-03-11
- Status: In progress

**既存リソース:**
- SKILL.md（ドキュメント済み）
- ensure-x-stream.sh（自動起動スクリプト済み）
- x-bearer-token.json（認証情報済み）

---

## 🤝 定期ミーティング #041

### 状況確認
- GitHub Project: 全30タスク完了（Done）
- 未着手・進行中: 0
- 新規タスクの企画が必要

### 実施フェーズ: 企画フェーズ

**新規タスク: 🎨 X投稿の図解自動生成機能**

**Issue:** [#11](https://github.com/onizuka-agi-co/workspace/issues/11)

x-writeスキルとnano-banana-2スキルを連携させ、X投稿時に図解画像を自動生成する機能。

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-10
- Target Date: 2026-03-14
- Status: Ready

---

## 🤝 定期ミーティング #042

### 状況確認
- GitHub Project: 全30タスク完了（Done）
- 未着手・進行中: 0
- 新規タスクの企画が必要

### 実施フェーズ: 企画フェーズ

**選択タスク: 🎨 nano-banana-2 スキル完成＆HF Papers連携強化**

**Issue:** [#21](https://github.com/onizuka-agi-co/skills/issues/21)

**概要:**
nano-banana-2スキルが実装完了。HF Papers図解投稿機能との連携を強化する。

**実施内容:**
- [x] nano-banana-2スキル実装（generate.py）
- [x] テスト実行（猫の侍イラスト生成成功）
- [ ] HF Papers自動図解機能との統合
- [ ] Discord/Xへの自動投稿フロー構築

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-10
- Target Date: 2026-03-12
- Status: Backlog

**テスト結果:**
- URL: https://v3b.fal.media/files/b/0a918992/OnSMRDrt9h6GYpIc2I3OT_zdnBPpNN.png
- 保存先: temp/nano-banana-2-test/generated_1.png
- プロンプト: A cute cat wearing a samurai helmet, Japanese style illustration

---

## 🤝 定期ミーティング #043

### 状況確認
- GitHub Project: 全30タスク完了（Done）
- 未着手・進行中: 0
- 新規タスクの企画が必要

### 実施フェーズ: 企画フェーズ

**新規タスク: 🎋 AI論文の自動図解投稿システム（Phase 2）**

**Issue:** [#22](https://github.com/onizuka-agi-co/skills/issues/22)

**概要:**
hf-papers + nano-banana-2 + x-writeを統合し、Xへの完全自動投稿を実現する。

**実施内容:**
- [ ] hf-papersスキルでトップ論文取得
- [ ] nano-banana-2で図解画像生成
- [ ] AI解説文章の自動生成
- [ ] x-writeスキルでXに投稿
- [ ] 定期実行の自動化（cron/heartbeat）

**技術要素:**
- hf-papers: HuggingFace Papers API
- nano-banana-2: fal.ai 画像生成
- x-write: X API投稿
- キャッシュ機能（重複防止）

**目的:**
ONIZUKA AGI Co.のミッション「AGIの知見をほどき、世界に届ける」を自動化

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-10
- Target Date: 2026-03-13
- Status: Backlog

---

## 📊 タスク状況

- 完了: 30タスク
- Ready: 1タスク（図解自動生成機能）
- Backlog: 2タスク（nano-banana-2 HF連携、AI論文自動図解投稿Phase2）
- 新規追加: 1タスク
