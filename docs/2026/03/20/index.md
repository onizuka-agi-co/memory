---
layout: doc
---

# 2026-03-20 定期ミーティング #289 / #290 / #291

## 企画フェーズ (#289)

### 状況確認
- GitHub Project: 全タスク完了
- Backlog/In progress/In review: なし
- 新規企画が必要な状態

### 新規企画
**🎋 AGI知識ベース検索エンジン** (P1, Size: M)

**概要:**
memory/docsに蓄積されたAGI関連知見をWeb UIで検索・活用できる機能を実装する。

**価値:**
- ONIZUKAミッション「AGIの知見をほどき、世界に届ける」に直結
- 蓄積した知見の再利用性を最大化
- コミュニティへの価値提供

**実施内容:**
- [ ] 検索エンジン選定（Algolia / Meilisearch / FlexSearch）
- [ ] VitePress検索プラグイン導入
- [ ] インデックス作成・更新自動化
- [ ] UI/UX調整
- [ ] GitHub Pages で公開

**技術要素:**
- VitePress + 検索機能拡張
- memory/docs のMarkdown解析
- GitHub Actions でインデックス更新

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#149](https://github.com/onizuka-agi-co/secretary-bot/issues/149) |
| Priority | P1 |
| Size | M |
| Start Date | 2026-03-20 |
| Target Date | 2026-03-24 |
| Status | Ready |

---

## レビューフェーズ (#290)

### 対象タスク
1. **🐦 X自動解説Bot定期実行化（s6サービス化）**
2. **🎋 論文図解のX自動投稿機能**

### レビューチェックリスト

**1. X自動解説Bot定期実行化**
- ✅ コードが正常に動作する
- ✅ ロジックに穴や不備がない（再接続処理10秒後）
- ✅ APIキー、トークン、認証情報が漏洩していない
  - Bearer Token: 外部ファイルから読み込み
- ✅ コミットに機密情報が含まれていない

**2. 論文図解のX自動投稿機能**
- ✅ コードが正常に動作する
- ✅ ロジックに穴や不備がない（エラーハンドリングあり）
- ✅ APIキー、トークン、認証情報が漏洩していない
  - config.envには機密情報なし
- ✅ コミットに機密情報が含まれていない

### 判定
両タスクとも問題なし → **Done** に移動

---

## 企画フェーズ (#291)

### 状況確認
- GitHub Project: 全30タスク完了
- Backlog/In progress/In review: なし
- 新規企画が必要な状態

### 新規企画
**🎋 AGI知識ベース検索エンジン**

**概要:**
memory/docs/ に蓄積されたAGI知見を検索・活用するためのエンジン

**価値:**
- ONIZUKAミッション「AGIの知見をほどき、世界に届ける」の実現
- 蓄積した知見を誰でも検索・活用可能に

**実施内容:**
- [ ] VitePressの全文検索機能を実装
- [ ] タグ・カテゴリでのフィルタリング
- [ ] キーワード・トピックでの検索
- [ ] 関連ドキュメントの推薦機能

**技術要素:**
- VitePress + flexsearch / algolia
- memory/docs/ のインデックス化
- Web UI / CLI での検索

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Item ID | PVTI_lADOD7cTBc4BQW8Jzgn6U3s |
| Priority | P1 |
| Size | L |
| Start Date | 2026-03-20 |
| Target Date | 2026-03-23 |
| Status | Backlog |

---

---

## 企画フェーズ (#293)

### 状況確認
- GitHub Project: 全268タスク完了
- Backlog/In progress/In review: なし
- 新規企画が必要な状態

### 新規企画
**🎋 マルチプラットフォーム自動クロスポスト機能** (P1, Size: L)

**概要:**
X（Twitter）での情報発信をDiscord・Blog（GitHub Pages）に自動でクロスポストする機能

**価値:**
- 情報発信の効率化（1回の投稿で複数プラットフォームへ）
- リーチの最大化
- 一貫したブランド体験の提供

**フロー:**
X投稿 → Webhook受信 → Discord通知 → Blog自動更新

**実施内容:**
- [ ] X Filtered Stream で投稿を監視
- [ ] Discord Webhook で通知
- [ ] GitHub Actions でBlog更新
- [ ] VitePress でページ生成
- [ ] クロスポスト設定のYAML化

**技術要素:**
- X Filtered Stream API
- Discord Webhook
- GitHub Actions
- VitePress

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#151](https://github.com/onizuka-agi-co/secretary-bot/issues/151) |
| Priority | P1 |
| Size | L |
| Start Date | 2026-03-20 |
| Target Date | 2026-03-25 |
| Status | Ready |

---

---

## 企画フェーズ (#294)

### 状況確認
- GitHub Project: 全30タスク完了
- Backlog/In progress/In review: なし
- 新規企画が必要な状態

### 新規企画
**🔍 AGI知識ベース検索エンジン** (P1, Size: L)

**概要:**
ONIZUKAのミッション「AGIの知見をほどき、世界に届ける」に直結する機能。
日報・メモリー・スキルの情報を統合検索し、自然言語クエリで回答する。

**機能:**
- 日報・メモリー・スキルの情報を統合検索
- 自然言語で質問 → 関連情報を返す
- RAGベースの知識検索

**技術スタック:**
- OpenClaw memory_search機能
- GitHub Pages で公開
- VitePress でドキュメント化

**受け入れ基準:**
- [ ] 検索UIが動作する
- [ ] 日報・メモリーから検索可能
- [ ] 自然言語クエリに対応

### GitHub Project 設定

| 項目 | 値 |
|------|-----|
| Issue | [#152](https://github.com/onizuka-agi-co/secretary-bot/issues/152) |
| Priority | P1 |
| Size | L |
| Start Date | 2026-03-21 |
| Target Date | 2026-03-28 |
| Status | Backlog |

---

## タグ

#定期ミーティング #企画 #検索エンジン #VitePress #AGI知見 #クロスポスト #RAG
