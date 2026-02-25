# X Filtered Stream 構築

X（Twitter）のFiltered Stream APIを使って、リアルタイムにツイートを監視・通知するシステムを構築した。

## 🎯 実装内容

### X Filtered Stream スキル作成
- **場所:** `skills/x-stream/`
- **機能:** XのFiltered Stream APIでリアルタイムツイート監視
- **監視対象:** hAru_mAki_ch の新規投稿（リプライ・リツイート除外）

### Discord Webhook統合
ツイート検知 → Discord通知 → エージェント反応 → タスク実行のフローを構築。

**重要な設定:**
- `allowBots: true` が必要（WebhookはBotとして扱われる）
- `groupPolicy: "allowlist"` でギルドを許可
- `requireMention: true` でメンション時のみ反応

### sunwood-community スキル連携
ツイート検知時に自動で引用リツイート解説を実行：
1. ツイート内容を分析（キーワード・技術用語抽出）
2. Web検索で関連情報収集
3. 充実した解説を作成

## 📁 作成ファイル

| ファイル | 説明 |
|---------|------|
| `skills/x-stream/scripts/x_filtered_stream.py` | Filtered Stream クライアント |
| `skills/x-stream/SKILL.md` | スキル説明書 |
| `data/x/x-bearer-token.json` | Bearer Token |
| `data/x/x-discord-webhook.json` | Discord Webhook URL |

## ⚙️ 設定変更

```json
// openclaw.json
{
  "channels": {
    "discord": {
      "allowBots": true,
      "guilds": {
        "1188045372526964796": {
          "requireMention": true
        }
      }
    }
  }
}
```

## 📋 監視ルール

```
from:hAru_mAki_ch -is:retweet -is:reply
```

- `from:user` - 特定ユーザーの投稿
- `-is:retweet` - リツイート除外
- `-is:reply` - リプライ除外

## 🚀 使い方

```bash
# テスト通知
uv run skills/x-stream/scripts/x_filtered_stream.py test-webhook

# 監視開始
uv run skills/x-stream/scripts/x_filtered_stream.py stream
```

## 🔗 関連リンク

- [X Filtered Stream API Docs](https://developer.x.com/en/docs/twitter-api/tweets/filtered-stream/introduction)
- [Discord Webhook Docs](https://discord.com/developers/docs/resources/webhook)
- [OpenClaw Discord Docs](/usr/lib/node_modules/openclaw/docs/channels/discord.md)
