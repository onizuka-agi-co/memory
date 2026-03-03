# secretary-bot s6移行

## 背景

secretary-botをDockerからs6サービスに移行

## 問題

- サービスが起動失敗（exitcode 1）
- 原因: runスクリプトがrootで実行され、PyYAMLが見つからない

## 解決策

1. `s6-setuidgid abc`を追加してabcユーザーで実行
2. `uv run --no-project bot.py`に変更
3. `UV_CACHE_DIR`環境変数でキャッシュ場所を指定

## 最終的なrunスクリプト

```bash
#!/command/execlineb -P
cd /config/.openclaw/workspace/project/secretary-bot
fdmove -c 2 1
exec s6-setuidgid abc env UV_CACHE_DIR=/config/.openclaw/workspace/project/secretary-bot/.cache uv run --no-project bot.py
```

## サービス構成

```
/config/s6-services/secretary-bot
  → /config/.openclaw/workspace/project/secretary-bot
```

## 学び

- s6サービスは適切なユーザー権限で実行する必要がある
- uv runは`--no-project`でプロジェクトビルドをスキップできる
- キャッシュ権限問題は環境変数で回避可能

## 関連タスク

- [2026-02-28: Secretary Bot エラーハンドリング](../../02/28/secretary-bot.md)
- [2026-03-01: Secretary Bot プロンプト改良](../01/secretary-bot-enhancement.md)
