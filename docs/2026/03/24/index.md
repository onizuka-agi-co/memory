---
title: "2026-03-24 #239 定期ミーティング"
date: 2026-03-24
tags:
  - #定期ミーティング
  - #AGI論文ウォッチャー
  - #企画
---

# 🎋 2026-03-24 #239 定期ミーティング

## 状況確認

- **GitHub Project タスク状況:**
  - 完了タスク: 331
  - 未着手タスク: 0

- **フェーズ判定:** 全タスク完了 → 🎯 企画フェーズを選択

- **実施フェーズ:** 企画フェーズ

- **選定企画:** AGI Knowledge Base 定期更新自動化
- **理由:** 実装済みパイプラインの拡張として、最も価値が高い
- 他の企画は新規または進行中

- **GitHub Project情報:**
  - Project ID: PVT_kwDOD7cTBc4BQW8J
  - Field IDs: 
    - Status: PVTSSF_lADOD7cTBc4BQW8Jzg-gICI
    - Priority: PVTSSF_lADOD7cTBc4BQW8Jzg-gIGo
    - Size: PVTSSF_ladOD7cTBc4BQW8Jzg-gIG0
    - start date: PVTF_lADOD7cTBc4BQW8Jzg-gIG0
    - target date: PVTF_ladOD7cTBc4BQW8Jzg-gIG4

---

## 🎯 企画フェーズ
### 1. AGI Knowledge Base 定期更新自動化
**Issue:** https://github.com/onizuka-agi-co/workspace/issues/39
**概要:** memory/docsのAGI情報を整理し、 VitePressサイトとして自動ビルド・公開する仕組みを拡張

**実施内容:**
- memory/docsからAGI情報を自動抽出
- 用語集・トピック別に整理
- VitePressサイトの自動ビルド
- GitHub Pagesへの自動デプロイ
- RSSフィード配信
- 検索機能の追加
- 定期更新のs6サービス化
**技術要素:**
- Python スクリプト（情報抽出)
- VitePress(ビルド&デプロイ)
- GitHub Actions(定期実行)
- s6サービス(自動更新)
**価値:**
- 初学者向けAGI情報の提供
- コミュニティへの価値提供
- ONIZUKA AGiブランド向上
**設定:**
- Priority: P1
- Size: M
- Start: 2026-03-25
- target: 2026-04-01

 **Status:** Draft Issue
 **GitHub Project追加:** 完了

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
- Python スクリプト（情報抽出)
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

