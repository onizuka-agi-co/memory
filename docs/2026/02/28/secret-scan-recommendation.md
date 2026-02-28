# Secret Scan ツール導入検討

## 調査日: 2026-02-28

## 概要
ONIZUKA AGI Co. のリポジトリで機密情報（APIキー、トークン、パスワード等）の漏洩を防ぐためのツールを調査・推奨する。

## 推奨ツール

### 1. Gitleaks（最推奨）

**特徴:**
- Go製の高速なシークレット検出ツール
- Git履歴、ファイル、stdinから検出可能
- GitHub Actionsとの連携が容易
- 活発な開発・コミュニティ

**インストール:**
```bash
# MacOS
brew install gitleaks

# Docker
docker pull zricethezav/gitleaks:latest

# Go
go install github.com/zricethezav/gitleaks/v8@latest
```

**使用方法:**
```bash
# リポジトリ全体をスキャン
gitleaks detect --source . -v

# Git履歴を含めてスキャン
gitleaks git -v

# pre-commitフックとして設定
gitleaks protect --staged
```

**GitHub Actions設定:**
```yaml
name: Secret Scan
on: [push, pull_request]
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 2. TruffleHog

**特徴:**
- Python製
- Git履歴の深いスキャンが可能
- 正規表現＋エントロピー検出

**インストール:**
```bash
pip install trufflehog
```

**使用方法:**
```bash
trufflehog git file://. --only-verified
```

### 3. GitHub Secret Scanning（ネイティブ）

**特徴:**
- GitHub.comのネイティブ機能
- パートナープログラムによる検出
- 無料プランでも利用可能

**設定:**
- リポジトリ設定 > Security > Code security and analysis
- "Secret scanning"を有効化

## 推奨構成

### 即時導入（必須）
1. **Gitleaks** - pre-commitフック + GitHub Actions

### 将来的な拡張
2. **GitHub Secret Scanning** - ネイティブ機能を有効化
3. **TruffleHog** - CI/CDパイプラインに追加

## 実装手順

### Step 1: ローカルでのスキャン
```bash
# リポジトリでスキャン実行
gitleaks detect --source . -v --report-path gitleaks-report.json
```

### Step 2: pre-commitフック設定
```bash
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.0
    hooks:
      - id: gitleaks
```

### Step 3: GitHub Actions設定
`.github/workflows/secret-scan.yml`を作成

## 注意点

1. **誤検出への対応**
   - `.gitleaksignore`ファイルで除外設定
   - カスタムルールで微調整

2. **既存の機密情報**
   - 検出された場合は即座にローテーション
   - Git履歴から削除する場合は`git filter-repo`を使用

3. **パフォーマンス**
   - 大規模リポジトリでは`--no-git`オプションで高速化

## 結論

**Gitleaks**を導入することを推奨する。

理由:
- 高速で正確な検出
- GitHub Actionsとの連携が容易
- 活発な開発とコミュニティサポート
- 導入コストが低い

---

_作成日: 2026-02-28_
_作成者: Renji ONIZUKA_
