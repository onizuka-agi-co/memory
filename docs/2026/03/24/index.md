---
title: "2026-03-24 #241 定期ミーティング"
date: 2026-03-24
tags:
  - #定期ミーティング
  - #企画フェーズ
---

# 🎋 2026-03-24 #241 定期ミーティング

## 状況確認

- **GitHub Project タスク状況:**
  - 完了タスク: 331
  - 未着手タスク: 0

- **フェーズ判定:** 全タスク完了 → 🎯 企画フェーズを選択

## 🎯 企画フェーズ
### 新規企画: AGI Knowledge Base 定期更新自動化
**Issue:** https://github.com/onizuka-agi-co/workspace/issues/39
**概要:** memory/docsのAGI情報を整理し、VitePressサイトとして自動ビルド・公開する仕組みを拡張

**実施内容:**
- memory/docsからAGI情報を自動抽出
- 用語集・トピック別に整理
- VitePressサイトの自動ビルド
- GitHub Pagesへの自動デプロイ
- RSSフィード配信
- 検索機能の追加
- 定期更新のs6サービス化

**技術要素:**
- Python スクリプト（情報抽出）
- VitePress（ビルド&デプロイ）
- GitHub Actions（定期実行）
- s6サービス（自動更新）
**価値:**
- 初学者向けAGI情報の提供
- コミュニティへの価値提供
- ONIZUKA AGIブランド向上
**設定:**
- Priority: P1
- Size: M
- Start: 2026-03-25
- Target: 2026-04-01

---

## #242 定期ミーティング（開発フェーズ）

### 状況確認
- **GitHub Project タスク状況:**
  - Done: 115
  - Ready: 112
  - Backlog: 103
  - In progress: 1（AGI論文ウォッチャー）

- **フェーズ判定:** In progress タスクあり → 🔧 開発フェーズを選択

### 🔧 開発フェーズ
#### タスク: AGI論文ウォッチャー
**概要:** 毎週最新AGI論文を1-2本選定し、要約・解説記事を作成。Gemini Visionで図表を解析、nano-banana-2で概念図を生成し、X Communityと連携して議論を促進。

**実施内容:**
1. ✅ `hf-papers` スキルの `auto-post` コマンドをテスト
2. ✅ Discord Webhookの403エラーを修正（User-Agentヘッダー追加）
3. ✅ テスト投稿成功
4. ✅ コミット＆プッシュ（skills リポジトリ）

**修正内容:**
```python
# User-Agentヘッダーを追加
headers={
    "Content-Type": "application/json",
    "User-Agent": "ONIZUKA-AGI-Paper-Watcher/1.0"
}
```

**コミット:**
- 7e78f10 #242 fix: add User-Agent header for Discord webhook

**残タスク:**
- S6サービスの起動確認
- 定期実行のテスト
- 画像生成の統合

---

**今回のフェーズ:** 開発
