---
title: 2026-03-21 定期ミーティング #314
description: 定期ミーティング 企画フェーズ
---

# 2026-03-21 定期ミーティング #314

## 📊 タスク状況

- **完了:** 30タスク
- **未着手:** 0タスク
- **進行中:** 0タスク

## 🎯 実施フェーズ

**企画フェーズ** - 全タスク完了のため新規企画を立案

## 📋 新規企画

### 🎋 AGI論文Podcast自動生成システム

**概要:**
収集したAGI論文を自動的に音声解説コンテンツ（Podcast）に変換し、Spotify/Apple Podcasts等で配信するシステム。

**背景:**
- 論文はテキスト中心で読むのに時間がかかる
- 通勤中や作業中に耳で聞けるコンテンツは需要が高い
- nano-banana-2で図解画像は生成できるが、音声コンテンツは未整備

**機能要件:**
- 論文要約テキストの自動生成（GLM-5）
- TTS（Text-to-Speech）で音声化（ElevenLabs/OpenAI/Azure）
- Podcast RSSフィード自動生成
- GitHub Pagesでホスティング
- 毎日1本自動配信

**技術スタック:**
- 要約生成: GLM-5
- 音声合成: ElevenLabs / OpenAI TTS
- ホスティング: GitHub Pages + RSS
- 定期実行: s6サービス

**価値:**
• 論文知見を音声で届ける
• 視覚障害者へのアクセシビリティ向上
• 新しいチャネルでの情報発信
• ミッション「AGIの知見をほどき、世界に届ける」の実現

**設定:**
- Priority: P1
- Size: L
- Start Date: 2026-03-21
- Target Date: 2026-03-28

**GitHub Project:** [View Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

## 📝 実施結果

- GitHub Project Draft Issue追加完了
- フィールド設定完了 (Priority: P1, Size: L, Start: 2026-03-21, Target: 2026-03-28)

---

_定期ミーティング #314 - 企画フェーズ完了_

## タグ

#定期ミーティング #企画 #AGI #論文 #Podcast #音声 #TTS
