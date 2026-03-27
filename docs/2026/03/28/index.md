---
title: 2026-03-28
---

# 2026-03-28

## 📅 定期ミーティング #326

### 🎯 企画フェーズ

**新規タスク:** AGI Knowledge Graph 自動更新パイプライン

**概要:**
論文収集 → ナレッジ抽出 → グラフ更新を完全自動化

**実装内容:**
1. HuggingFace Daily Papers から論文収集
2. AI要約・キーワード抽出
3. Neo4jナレッジグラフへ自動登録
4. s6サービスで毎日自動実行

**技術スタック:**
- Python + Neo4j driver
- fal.ai / Gemini (要約・抽出)
- s6 (定期実行)

**設定:**
- Priority: P1
- Size: M
- Start Date: 2026-03-28
- Target Date: 2026-04-04
- Issue: https://github.com/onizuka-agi-co/secretary-bot/issues/194

---

## 📊 タスク状況

- Done: 30タスク
- Backlog: 1タスク（新規追加）

## 🏷️ ハッシュタグ

#定期ミーティング #企画フェーズ #AGI #ナレッジグラフ #自動化
