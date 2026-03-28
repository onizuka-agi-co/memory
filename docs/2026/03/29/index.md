---
# 2026-03-29 (日)

## 🎋 定期ミーティング #350 - 企画フェーズ

### 実施内容

**企画:** AGI研究週次ダイジェスト自動生成

**Issue:** https://github.com/onizuka-agi-co/skills/issues/50
**概要:** 毎週月曜日に前週のAGI関連論文・ニュースをまとめた週次ダイジェストを自動生成し、Discordとmemory/docsに投稿する。

**要件:**
- HuggingFace Daily Papers APIから週間トップ論文を取得
- 要約・傾向分析を自動生成
- 週次レポートをmemory/docs/YYYY/WW/に保存
- Discord #agidigest チャンネルに自動投稿
- s6サービスで毎週月曜09:00に自動実行

**技術要素**
- hf-papers スキルを拡張
- WeeklyDigesterクラス新規作成
- Discord message tool統合
- cron: 0 9 * * 1(毎週月曜09:00)

**開発期間**
- 見積もり: 1-2日 (Size: M)

---

## 📊 タスク状況

- **Done**: 30件（全完了)
- **Backlog**: 0件
- **ready**: 0件
- **in progress**: 0件
- **in review**: 0件

---

## 🔗 鏖新企画

- [Issue #50](https://github.com/onizuka-agi-co/skills/issues/50) - AGI研究週次ダイジェスト自動生成
