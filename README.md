# Memory

日々の記録・気づき・進捗をまとめたリポジトリ。

VitePressで人間が見やすく、MarkdownでAIが読み書きしやすい。

## 使い方

### 開発サーバー起動

```bash
npm run docs:dev
```

### ビルド

```bash
npm run docs:build
```

## 構造

```
docs/
├── .vitepress/
│   └── config.ts
├── 2026/
│   ├── 02/
│   │   ├── 2026-02-23.md
│   │   ├── 2026-02-24.md
│   │   └── ...
├── index.md
```

## 日報フォーマット

```markdown
# YYYY-MM-DD

## 完了
- [x] タスクA
- [x] タスクB

## 進行中
- [ ] タスクC（進捗%）

## 気づき
- 〜について〜だと分かった

## Links
- [関連リンク](URL)
```

## License

ISC
