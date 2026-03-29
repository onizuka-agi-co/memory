---
title: "2026-03-29 定期ミーティング #372"
description: "企画フェーズ実施 - AGI知識ベース検索エンジン"
date: 2026-03-29
---

# 📊 定期ミーティング #372

## 企画フェーズ

### タスク状況確認
- **全424タスク完了** ✓
- 未着手: 0 / 進行中: 0 / In review: 0 / Done: 424

### 新規企画

#### 🔍 AGI知識ベース検索エンジン

**Issue:** [#61](https://github.com/onizuka-agi-co/workspace/issues/61)

**概要:**
memory/docs/に蓄積された290+のmdファイルを活用し、セマンティック検索可能な知識ベースを構築する。

**目的:**
- 論文要約・技術記事・日報を統合検索
- ONIZUKAのミッション「AGIの知見をほどき、世界に届ける」を具現化
- 長期資産としての知識ベース

**機能:**
1. セマンティック検索（意味ベース）
2. タグ・カテゴリフィルタ
3. 関連記事レコメンド
4. Web UI（VitePress拡張）

**技術要素:**
- Embedding: OpenAI text-embedding-3-small
- Vector Store: ローカルFAISS または Qdrant
- Frontend: VitePress + カスタム検索コンポーネント
- 自動インデックス更新（cron/heartbeat）

**設定:**
| 項目 | 値 |
|------|-----|
| Status | Ready |
| Priority | P1 |
| Size | L |
| Start Date | 2026-03-30 |
| Target Date | 2026-04-06 |

**サブタスク:**
- [ ] embedding生成スクリプト作成
- [ ] vector store構築
- [ ] 検索API実装
- [ ] VitePress検索コンポーネント
- [ ] 自動更新設定

## 次のステップ

1. embedding生成スクリプトの実装
2. FAISS/Qdrantでのvector store構築
3. 検索APIの実装
4. VitePressへの統合

---

**今回のフェーズ:** 企画

#定期ミーティング #企画フェーズ #AGI知識ベース #セマンティック検索
