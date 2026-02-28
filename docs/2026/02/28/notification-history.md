# 通知履歴機能

## 概要

Secretary Bot に通知履歴機能を追加（Issue #4）。

## 実装内容

### ログファイル

- `logs/executions.log`: 実行ログ（JSON Lines形式）
- `logs/streaks.json`: タスク別統計

### 新規コマンド

| コマンド | 説明 |
|---------|------|
| `/history` | 実行履歴を表示 |
| `/streaks` | タスク別統計を表示 |

### 統計情報

- 総実行回数
- 成功回数
- 現在のストリーク（連続成功回数）
- 最長ストリーク
- 日次実行カウント（30日間保持）

## 関連

- Issue: https://github.com/onizuka-agi-co/secretary-bot/issues/4
- コミット: `c048667`
