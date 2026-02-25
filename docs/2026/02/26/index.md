# 2026-02-26

## 完了
- [x] リポジトリ展開計画策定
- [x]  TASK.md作成
- [x]  .gitignore設計（mdファイルのみ追跡）

## 進行中
- [ ] skills/workspaceリポジトリ作成準備

## 気づき
- ## リポジトリ構成案

### onizuka-agi-co/skills
- 現在のworkspace/skills/をそのままリポジトリ化
- 追跡対象: *.mdファイルのみ

### onizuka-agi-co/workspace
- 現在のworkspace/をそのままリポジトリ化
- 追跡対象: *.mdファイルのみ

### .gitignore設定
```gitignore
# 基本すべて無視
*

# ただし md ファイルは追跡
!*.md
!**/*.md

# ディレクトリ構造を維持
!*/
```

### 注意点
- トークンファイル（*-tokens.json）は自動除外
- コミット前に機密情報を確認
- secret scanツール導入検討

## 詳細

[← 戻る](../)
