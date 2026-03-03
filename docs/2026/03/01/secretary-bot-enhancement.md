# secretary-bot-enhancement

## 概要
秘書ボット(AKARI)のプロンプトを大幅に改良。

## task-check.yaml 変更点
- ステータス遷移ルール: In progress → In review → Done
- レビューチェックリスト追加:
  - コード動作確認
  - ロジック不備チェック
  - APIキー/トークン/認証情報の漏洩検査
  - .gitignore設定確認
- 日報記録ルール: memory/docs/YYYY/MM/DD/index.md へ必ず追記
- コミットメッセージ規約: Issue番号を含める

## morning-idea.yaml 変更点
- idea-dev スキルを明示的に使用
- github-project スキルで採用アイデアをタスク登録
- 優先度マッピング: 短期→P1, 中期→P2, 長期→P3
- Project URL: https://github.com/orgs/onizuka-agi-co/projects/1

## その他変更
- README: ヘッダー画像追加、名前をAKARIに変更
- UV実行対応: pyproject.toml追加
- temp/secretary-bot削除

## GitHub
https://github.com/onizuka-agi-co/secretary-bot

## 関連タスク

- [2026-02-28: エラーハンドリング強化](../../02/28/secretary-bot.md)
- [2026-03-02: s6サービス移行](../02/secretary-bot-s6.md)
