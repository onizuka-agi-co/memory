# 🎋 AGI Knowledge Base 定期更新自動化

## Issue
- onizuka-agi-co/skills#42
- GitHub Project: In progress, P1

## 概要
毎日09:00にHuggingFace Daily Papersを取得し、nano-banana-2で図解・Discord投稿するs6サービスを構築。

## 技術要素
- `skills/hf-papers/scripts/hf_papers.py` - 論文取得
- `skills/nano-banana-2/scripts/generate.py` - 画像生成（未実装）
- s6サービス（毎日09:00 cron）
- Discord Webhook投稿

## タスク
- [ ] s6サービス用スクリプト作成
- [ ] cron設定（毎日09:00）
- [ ] Discord投稿テスト

## 進捗
- 2026-03-26: GitHub Projectに追加、In progressに設定
