---
title: 2026-03-27 定期ミーティング
---

# 2026-03-27 定期ミーティング

## #303 企画フェーズ

### 新規企画: 🔍 AGI知識ベース検索エンジン

**Issue:** https://github.com/onizuka-agi-co/skills/issues/44

**設定:**
- Priority: P1
- Size: L
- Status: Ready
- Start: 2026-03-27
- Target: 2026-03-30

**概要:**
蓄積した日報・メモリー・スキルを検索可能にし、知見を素早く活用できるようにする。

---

## #304 企画フェーズ

### 新規企画: 🧠 AGI論文ナレッジグラフ構築

**Issue:** https://github.com/onizuka-agi-co/onizuka-agi-co/issues/18

**設定:**
- Priority: P1
- Size: L
- Status: Ready
- Start: 2026-03-27
- Target: 2026-04-03

**概要:**
HuggingFace Papers APIから最新AGI関連論文を自動収集し、著者・機関・引用関係をナレッジグラフとして構築。

**技術スタック:**
- データ収集: Python + HuggingFace Papers API
- グラフDB: Neo4j (Aura Free)
- 可視化: React + D3.js

**フェーズ:**
1. 基盤構築（Neo4j環境）
2. データ収集（API統合）
3. 可視化UI
4. 検索・分析
5. 自動化（s6サービス）

---

---

## #305 企画フェーズ

### 新規企画: 🔍 AGI知識ベース検索エンジン

**Issue:** https://github.com/onizuka-agi-co/skills/issues/45

**設定:**
- Priority: P1
- Size: L
- Status: Ready
- Start: 2026-03-27
- Target: 2026-04-03

**概要:**
論文・技術記事を体系的に整理し、検索可能なナレッジベースを構築

**実装内容:**
- 論文メタデータの自動抽出（タイトル、著者、日付、 arXiv ID）
- ローカルストレージへの保存
- 検索インデックスの構築
- Web UI または CLI での検索
- 定期更新（毎日/毎週）

**技術要素:**
- ArXiv API / HuggingFace Papers
- SQLite / Elasticsearch（検索用）
- GitHub Pages / VitePress（Web UI）

---

## #306 開発フェーズ

### 完了: 📄 arXiv論文監視Bot - 新着論文の自動要約・解説

**Status:** Ready → **Done**

**実装内容:**
1. `agi_watcher.py` にDiscord通知機能を追加
2. `send_discord_notification()` 関数を実装
3. 新着AGI論文を自動選択 → 要約 → Discord通知
4. テスト成功: 2論文を選択してDiscord通知送信

**変更ファイル:**
- `skills/hf-papers/scripts/agi_watcher.py` - Discord通知機能追加

**動作確認:**
```
🎋 AGI Paper Watcher - 2026-03-27 05:04
📋 Step 1: Fetching papers... (50 papers)
🎯 Step 2: Selecting AGI-relevant papers... (2 papers)
📝 Step 3: Generating weekly report...
🎨 Step 4: Skipped (--skip-images)
🔔 Step 5: Sending Discord notification... ✅
```

---

## #307 企画フェーズ

### 状況確認
- GitHub Project: 全369タスク完了
- 未解決Issue多数を発見（skills: 19件、onizuka-agi-co: 13件）
- Issueを整理し、GitHub Projectに追加

### 追加タスク

**1. AGI知識ベース検索エンジン**
- Issue: https://github.com/onizuka-agi-co/skills/issues/45
- Priority: P1 / Size: L
- 期間: 3/27 〜 4/3

**2. AGI論文ナレッジグラフ構築**
- Issue: https://github.com/onizuka-agi-co/onizuka-agi-co/issues/18
- Priority: P1 / Size: L
- 期間: 3/27 〜 4/10

**3. X自動解説Bot完全稼働**
- Issue: https://github.com/onizuka-agi-co/skills/issues/43
- Priority: P1 / Size: M
- 期間: 3/27 〜 3/29

---

#AGI #企画 #ナレッジグラフ #検索エンジン #知識ベース #開発 #Discord通知 #定期ミーティング
