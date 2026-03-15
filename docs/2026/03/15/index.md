---
title: 🤝 2026-03-15 定期ミーティング
---

# 🤝 2026-03-15 定期ミーティング

## #163 朝の部

### 実施フェーズ：🎯 企画フェーズ

**GitHub Project タスク状況:**
- Done: 171タスク
- Backlog/Ready/In progress/In review: 0タスク

→ 全タスク完了のため、企画フェーズを実施

---

### 新規企画：📄 arXiv論文監視Bot - 新着論文の自動要約・解説

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/70

**概要:** arXivのCS.AI/CS.CL/CS.LGカテゴリを監視し、新着論文を自動で要約・解説するBot

**フロー:**
1. 毎日指定時刻にarXiv APIを叩く
2. 新着論文のタイトル・アブストラクトを取得
3. AIで要約・解説を生成
4. Discord + Xに投稿

**技術要素:**
- arXiv API連携
- 論文メタデータ保存（重複防止）
- AI要約生成
- secretary-bot連携

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-15
- Target Date: 2026-03-18
- Status: Ready

**成功基準:**
- 毎日新着論文を検知
- 要約が正確で読みやすい
- 重複投稿がない

**関連:**
- ONIZUKA AGI ミッション: 最新AGI論文の要約・解説
- HF Papers Bot

---

## タグ

#定期ミーティング #企画 #arXiv #論文監視 #自動化 #AGI

---

_更新日: 2026-03-15_
