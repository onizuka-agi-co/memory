---
title: 2026-03-16 定期ミーティング
---

# 2026-03-16 定期ミーティング

## #177 企画フェーズ

### 新規企画: 🎋 自動日報生成機能

**概要:**
毎日の活動を自動的に日報に追加する機能

**Issue:** https://github.com/onizuka-agi-co/secretary-bot/issues/80

---

## #183 開発フェーズ

### タスク: 🔄 自動コンテンツ生成 定期実行設定

**実装内容:**
- エラー時のDiscord通知機能を追加
- schedule-tasks.yamlにerror_notification設定を追加
- send_error_notification()関数を実装
- タスク実行失敗時にMakiにメンション通知

**コミット:**
- #31 feat: add error notification for auto content pipeline

**動作テスト:**
```
/test 自動コンテンツ生成パイプライン
```

---

## 🔗 関連リンク

- [GitHub Project](https://github.com/orgs/onizuka-agi-co/projects/1)

---

#定期ミーティング #開発 #自動化
