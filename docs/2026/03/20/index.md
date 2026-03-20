---
layout: doc
---

# 2026-03-20 定期ミーティング #289 / #290

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

## タグ

#定期ミーティング #企画 #検索エンジン #VitePress #AGI知見
