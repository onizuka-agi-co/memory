# GeminiVRM v0.1.0 Release 調査レポート

**公開日時:** 2026-03-28T05:12:18Z
**Repository:** Sunwood-ai-labs/GeminiVRM
**Release URL:** https://github.com/Sunwood-ai-labs/GeminiVRM/releases/tag/v0.1.0

---

## 概要

GeminiVRM v0.1.0 は、pixiv/ChatVRM をフォークし、**Gemini Live native audio** を統合したブラウザファーストのVRMチャットアプリケーションの初回公開版。

OpenAI + Koeiromap の音声パイプラインを Gemini Live に置き換え、**ストリーミング音声再生**と**リアルタイムlip sync**を実現。

---

## 主な特徴

### 1. Gemini Live Native Audio
- OpenAI + Koeiromap → Gemini Live に移行
- 部分的なtranscriptとストリーミング音声が同じターン内で動作
- **16-bit PCM chunk** を先行スケジュール → 返答全体を待たずに音声再生開始

### 2. Browser-First設計
- すべてブラウザ上で動作（サーバー不要）
- Gemini APIキーをブラウザ側で入力（local-first）
- デフォルトで `public/Kiyoka.vrm` を同梱

### 3. カスタマイズ機能
- ローカルVRM差し替え対応
- Live model / voice / system prompt の調整
- Idle motion切り替え（default, stand, sway, wait）

### 4. YouTube Live連携
- 配信コメントの受信
- Broadcast選択
- Incoming preview
- Gemini自動応答（アプリ内のみ - YouTubeには返信しない）

### 5. 開発・配布環境
- VitePress docs（英語・日本語）
- GitHub Pages対応
- Smoke E2Eテスト（Playwright）
- CI/CDパイプライン完備

---

## 技術スタック

- **Framework:** Next.js 15 + React 18
- **AI:** @google/genai (Gemini Live API)
- **3D Avatar:** @pixiv/three-vrm
- **Styling:** Tailwind CSS
- **Testing:** Playwright
- **Docs:** VitePress

---

## 既知の制約

1. **APIキー管理:** ブラウザ側で入力（サーバー仲介なし）
2. **マイク入力:** Web Speech API依存、現状はja-JP固定
3. **YouTube Relay:**
   - 受信のみ（YouTubeへの返信不可）
   - 映像配信機能なし

---

## 利用者への影響

### メリット
- **低遅延:** ストリーミング音声でアバターが即座に話し始める
- **簡単セットアップ:** npm install & run だけで起動
- **カスタマイズ性:** VRMモデル、音声、システムプロンプトを自由に調整
- **配信連携:** YouTube Liveのコメントをリアルタイムで取り込める

### 注意点
- Gemini APIキーが必須（Google AI Studioで取得）
- 本番環境ではサーバーサイドでのキー管理を推奨

---

## 関連URL

- **Repository:** https://github.com/Sunwood-ai-labs/GeminiVRM
- **Release:** https://github.com/Sunwood-ai-labs/GeminiVRM/releases/tag/v0.1.0
- **Docs (EN):** https://sunwood-ai-labs.github.io/GeminiVRM/docs/
- **Docs (JA):** https://sunwood-ai-labs.github.io/GeminiVRM/docs/ja/
- **Release Notes (EN):** https://sunwood-ai-labs.github.io/GeminiVRM/docs/releases/v0.1.0
- **Release Notes (JA):** https://sunwood-ai-labs.github.io/GeminiVRM/docs/ja/releases/v0.1.0
- **Launch Guide (EN):** https://sunwood-ai-labs.github.io/GeminiVRM/docs/articles/v0.1.0-launch
- **Launch Guide (JA):** https://sunwood-ai-labs.github.io/GeminiVRM/docs/ja/articles/v0.1.0-launch

---

## 解説投稿用ポイントまとめ

1. **初回公開版** - pixiv/ChatVRMをGemini Live化したfork
2. **ストリーミング音声** - アバターが即座に話し始める低遅延体験
3. **Browser-first** - サーバー不要、ブラウザだけで完結
4. **YouTube Live連携** - 配信コメントをリアルタイムで取り込み
5. **バイリンガルdocs** - 英語・日本語両対応

---

_作成日: 2026-03-28_
