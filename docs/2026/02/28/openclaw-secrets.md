## OpenClaw Secrets機能でAPIキーを安全に管理

### 調査内容
- OpenClaw 2026.2.26の新機能「Secrets」を調査
- 環境変数/ファイル/コマンド実行の3つのソースから選択可能
- 1Password, Vault, sopsなどの外部ツールと統合可能

### 実施した移行作業

#### 1. 環境変数プロバイダー設定
```json
"secrets": {
  "providers": {
    "default": { "source": "env" }
  }
}
```

#### 2. KIMI_API_KEY移行
- 変更前: `env.KIMI_API_KEY: "sk-kimi-..."`（平文）
- 変更後: `apiKey: { "source": "env", "provider": "default", "id": "KIMI_API_KEY" }`

#### 3. ZAI_API_KEY移行
auth-profiles.json（3ファイル）の平文パスワードをSecretRefに変更:
```json
"keyRef": { "source": "env", "provider": "default", "id": "ZAI_API_KEY" }
```

### 監査結果
```bash
openclaw secrets audit --check
# plaintext=0, unresolved=0, shadowed=0, legacy=0
```

### 注意点
- KIMI For Coding APIは直接呼び出せない（403エラー）
- Claude Code経由で使用可能

### ツイート投稿
https://x.com/hAru_mAki_ch/status/2027752340900745510

### リファレンス
- https://docs.openclaw.ai/gateway/secrets