# 2026-03-01 日報

## 🧪 Nested Sub-Agents実験

### 実験目的
オーケストレーターパターンで複数のCodex Workerを連携させる

### 実験1: GLM-5 → Codex5.3 Workers

**構成:**
```
Main (GLM-5)
  └── Orchestrator (GLM-4.7)
        ├── Developer (Codex5.3)
        ├── Designer (Codex5.3)
        └── QA (Codex5.3)
```

**結果:** ✅ 成功
- TODOアプリ作成完了
- 実行時間: ~2分
- 生成ファイル: 3つ

---

### 実験2: All-Codex (OrchestratorもCodex)

**構成:**
```
Main (GLM-5)
  └── Orchestrator (Codex5.3)
        ├── Developer (Codex5.3)
        ├── Reviewer (Codex5.3)
        └── Fixer (Codex5.3)
```

**結果:** ✅ 成功
- カウンターアプリ作成完了
- 全層Codex5.3で動作確認

---

## ⚙️ 設定変更

### Codexエージェント追加
```json
{
  "id": "codex",
  "name": "Codex",
  "model": "codex-cli/gpt-5.3-codex",
  "subagents": { "allowAgents": ["*"] }
}
```

### クロスエージェント履歴アクセス
```json
{
  "tools": {
    "agentToAgent": { "enabled": true, "allow": ["*"] }
  }
}
```

---

## 📝 Orchestratorプロンプトテンプレート

### パターン1: シリアル実行

```
あなたはオーケストレーターです。以下の手順で3つのCodex Workerを**順番に**spawnしてタスクを完了させてください。

### 手順（必ず1つずつ実行）:

**Step 1: Developer**
sessions_spawn(agentId: "codex", label: "Developer", mode: "run", task: "<実装タスク>")
→ 完了通知が来るまで待機

**Step 2: Reviewer**
Developer完了後:
sessions_spawn(agentId: "codex", label: "Reviewer", mode: "run", task: "<レビュータスク>")
→ 完了通知が来るまで待機

**Step 3: 最終報告**
全Workerの結果をまとめて報告
```

### パターン2: 並列実行

```
あなたはオーケストレーターです。3つのCodex Workerを**同時に**spawnして並列実行してください。

### 手順:
1. 3つを連続してspawn（完了を待たない）
2. 全員の完了通知を待つ
3. 結果をまとめて報告
```

### パターン3: 実践的Webアプリ開発

```
### Phase 1: 設計
- Architect Worker → 設計書作成

### Phase 2: 実装 (並列)
- Frontend Worker → UI実装
- Backend Worker → API実装

### Phase 3: 統合・テスト
- Integrator Worker → 統合テスト
```

---

## 🎯 重要な学び

1. **Nested Sub-Agentは正常動作** - 3層ネストまで確認
2. **シリアル実行でAPI制限回避** - 並列だとGLMのAPI制限に引っかかる
3. **CLIバックエンド履歴は保存されない** - JSONではなく直接実行
4. `maxSpawnDepth: 2` で3層までネスト可能

---

## 📁 作成したファイル

### experiments/nested-codex-test/ (TODOアプリ)
- `index.html` - 2KB
- `style.css` - 4KB
- `app.js` - 2.4KB

### experiments/all-codex-test/ (カウンターアプリ)
- `index.html` - 799B
- `style.css` - 1.6KB
- `app.js` - 688B
