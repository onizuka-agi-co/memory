---
title: "2026-03-24 #236 定期ミーティング"
date: 2026-03-24
tags:
  - #定期ミーティング
  - #AGI論文ウォッチャー
  - #開発
---

# 🎋 2026-03-24 #236 定期ミーティング

## 状況確認

- **GitHub Project タスク状況:**
  - 完了タスク: 30
  - 未完了タスク: 1 (AGI論文ウォッチャー)

- **本次実施フェーズ: 🔧 開発フェーズ**

## 実施内容

### 1. GitHub Project タスク設定
- タスク「AGI論文ウォッチャー」を選択
- ステータス: `In progress` に変更
- Start Date: 2026-03-24
- Target Date: 2026-03-31

### 2. Issue作成
- **リポジトリ:** onizuka-agi-co/secretary-bot
- **Issue番号:** #180
- **タイトル:** 🎋 AGI論文ウォッチャー実装 - 週次自動投稿システム

### 3. 既存リソース確認

| リソース | 状態 | 詳細 |
|---------|------|------|
| hf-papersスキル | ✓ | fetch, explainコマンド実装済み |
| nano-banana-2スキル | ✓ | generate.py実装済み |
| fal-key.txt | ✓ | APIキー設定済み |

### 4. テスト実行

```bash
$ uv run hf_papers.py fetch --limit 3
Found 3 papers
1. [2603.17309] ReLMXEL...
2. [2603.15911] Human-AI Synergy...
3. [2603.19753] ReLi3D...
```

## 次のステップ

1. Issue #180のサブタスク作成
2. 実装開始（論文取得 → 図解生成 → 投稿）
3. s6定期実行サービス設定

## 関連Issue

- GitHub Project: ONIZUKA AGI Co. Prj
- secretary-bot#180: AGI論文ウォッチャー実装

---

## 🎯 定期ミーティング #237 - 企画フェーズ

* **フェーズ:** 企画フェーズ
* **GitHub Project状態:** Done 30タスク、未着手0

### 📊 AGI Research Dashboard

**Issue:** https://github.com/onizuka-agi-co/workspace/issues/37

**概要:**
AGI研究の進捗を可視化するダッシュボードを構築。arXiv/HuggingFace Papersから最新論文を自動取得し、トレンド分析・研究者マッピング・マイルストーン追跡を行う。

**機能:**
- 📈 論文トレンド分析（週間・月間）
- 👥 研究者・組織貢献度マップ
- 🎯 AGIマイルストーン進捗追跡
- 🔍 キーワード・トピック分析
- 📊 可視化ダッシュボード（Web）

**技術要素:**
- Python（データ収集・分析）
- arXiv API / HF Papers API
- GitHub Actions（定期実行）
- VitePress + D3.js（可視化）
- GitHub Pages（公開）

**価値:**
- AGI研究の全体像を把握
- 重要なトレンドを見逃さない
- コミュニティへの価値提供
- ONIZUKA AGIブランド向上

**設定:**
- Priority: P1
- Size: L
- Start: 2026-03-25
- Target: 2026-04-01

---

## 🎯 定期ミーティング #238 - 企画フェーズ

* **フェーズ:** 企画フェーズ
* **GitHub Project状態:** Done 30タスク、未着手0

### 🎋 X自動解説Bot定期実行化

**Issue:** https://github.com/onizuka-agi-co/workspace/issues/38

**概要:**
@hAru_mAki_chの新規投稿をX Filtered Streamで監視し、自動で解説ツイートを生成・投稿する仕組み

**実施内容:**
- X Filtered Streamスキル完成（scripts実装）
- ツイート検知時の自動解説生成
- X自動投稿（引用リツイート形式）
- Discord通知連携
- s6サービス化（24時間監視）

**技術要素:**
- X Filtered Stream API
- nano-banana-2（図解画像）
- Gemini（解説文章）
- X Write API
- s6サービス

**価値:**
- リアルタイム解説提供
- コミュニティ価値向上
- ONIZUKA AGIブランド向上

**設定:**
- Priority: P1
- Size: L
- Start: 2026-03-24
- Target: 2026-03-28
