# 2026-02-25

## 完了
- [x] daily-memoryスキルのテスト
- [x] OpenClaw Skills調査
- [x] Discordスラッシュコマンドの表示・認可・タイムアウト問題を解消
- [x] Kimi CLI が非rootユーザーで使えない問題を修正

## 進行中
- [ ] 

## 気づき
- Discordのスキルコマンド名は `-` が `_` に正規化される（例: `daily-memory` → `/daily_memory`）
- DM pairingで通っても、Guild slash認可は `channels.discord.allowFrom` を別参照している
- `/tmp/jiti` のroot所有キャッシュ混在で OpenClaw Gateway のプラグイン読み込みが `EACCES` になることがある
- Kimi CLI を `/root/.local` 配下に入れると非rootユーザーでは実行できない

## 詳細

- [テスト](./test)
- [OpenClaw Skills 調査](./openclaw-skills)
- [Kimi CLI 修正](./kimi-cli)

[← 戻る](../)
