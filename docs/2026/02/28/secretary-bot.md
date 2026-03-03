# Secretary Bot エラーハンドリング強化

## Issue #3: エラーハンドリング強化

### 実装内容

**ログ基盤の整備:**
- `logging` モジュールによる構造化ログ出力
- エラー種別定義（NETWORK_ERROR, RATE_LIMIT, YAML_PARSE, DISCORD_API, UNKNOWN）
- エラーログファイル `logs/errors.log` への永続化

**リトライロジック:**
- ネットワークエラー（500以上）: 指数バックオフで最大3回リトライ
- レート制限（429）: `Retry-After` ヘッダーを参照して待機後リトライ
- タイムアウト: 最大3回リトライ

**YAML構文エラー処理:**
- `yaml.YAMLError` のキャッチ
- 不正なcron構文の検出（`CroniterBadCronError`）
- エラーログへの記録とスキップ

**Discord API エラー処理:**
- `HTTPException`: ステータスコード別の処理
- `Forbidden`: 権限エラーのログ記録
- `NotFound`: リソース不在のログ記録

**新規コマンド:**
- `/errors`: 最近のエラーログを表示（最大10件）

### コミット

```
🛡️ feat: add comprehensive error handling (closes #3)
```

### 関連

- Issue: https://github.com/onizuka-agi-co/secretary-bot/issues/3
- Commit: `27686cb`

---

## Issue #4: 通知履歴機能（進行中）

### 実装内容

**実行ログ:**
- `logs/executions.log`: 全タスク実行をJSON Lines形式で記録
- タスク名、チャンネルID、スレッドID、成功/失敗を保存

**Streaks（連続実行記録）:**
- `logs/streaks.json`: タスクごとの統計を管理
- 総実行回数、成功回数、現在のストリーク、最長ストリーク
- 日次実行カウント（30日間保持）

**ログ関数:**
- `log_execution()`: 実行ログへの追記 + streaks更新
- `update_streaks()`: 統計の更新
- `load_streaks()`: 統計の読み込み

### 残タスク

- [ ] `/streaks` コマンドの実装
- [ ] `/history` コマンドの実装
- [ ] テストとデバッグ
- [ ] README.mdの更新

### 関連

- Issue: https://github.com/onizuka-agi-co/secretary-bot/issues/4

## 関連タスク

- [2026-03-01: プロンプト改良](../../03/01/secretary-bot-enhancement.md)
- [2026-03-02: s6サービス移行](../../03/02/secretary-bot-s6.md)
