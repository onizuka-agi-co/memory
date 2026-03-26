# GitHub Release調査レポート

## 概要

| 項目 | 内容 |
|------|------|
| リポジトリ | Sunwood-ai-labs/android-termux-ssh-bootstrap-skill |
| Release | v1.0.0 (Initial Release) |
| 公開日時 | 2026-03-23T08:44:59Z |
| ライセンス | MIT |

## このリリースについて

**android-termux-ssh-bootstrap** は、Windows PCからADBとUSB経由でAndroid端末をTermux SSH環境にブートストラップするためのCodexスキル。

初回リリース（v1.0.0）として、完全な機能セットと検証体制を提供。

## 主な機能

### 1. Windows → Android SSH環境構築フロー
- ADB on Windowsの準備
- GitHub公式Termuxビルドのインストール
- Xiaomi / HyperOSのインストール制限への対応
- `run-as com.termux` の検証
- opensshのインストール
- 公開鍵認証の設定
- `adb forward` 経由でのSSH接続

### 2. Codex統合
- `agents/openai.yaml` でCodex向けインターフェースメタデータを提供
- `$android-termux-ssh-bootstrap` でスキルを呼び出し可能

### 3. 自動検証
- `scripts/validate-skill.ps1` - ローカル検証スクリプト
- `.github/workflows/validate-skill.yml` - GitHub Actionsワークフロー

### 4. ドキュメント
- バイリンガルREADME（英語・日本語）
- CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md
- Issue/PRテンプレート

## 対象ユーザー

- Windows PCユーザー
- Android端末をUSB接続できる環境
- Termux環境をリモート操作したい開発者
- Codexを活用した自動化を目指すユーザー

## サポート範囲外

- Google Play Termuxワークフロー
- root専用のAndroid変更
- Termux以外の汎用Linux SSHサーバー
- F-Droid版Termux

## 技術的詳細

### 必要な環境
- Windowsホスト + PowerShell
- Android端末（USB接続）
- ユーザーがロック解除とプロンプト承認可能
- GitHubリリース版Termuxが利用可能

### 検証済みパス
```
adb devices -l → device detected
adb shell run-as com.termux pwd → /data/user/0/com.termux
adb forward tcp:8022 tcp:8022 → success
ssh -p 8022 user@127.0.0.1 → whoami: u0_a202
```

## リポジトリ構成

```
.
├── SKILL.md           # Codexスキル定義
├── README.md          # 英語ドキュメント
├── README.ja.md       # 日本語ドキュメント
├── agents/
│   └── openai.yaml    # Codex向けメタデータ
├── scripts/
│   └── validate-skill.ps1
├── assets/            # アイコン・SVG
└── .github/           # ワークフロー・テンプレート
```

## 関連URL

- Release: https://github.com/Sunwood-ai-labs/android-termux-ssh-bootstrap-skill/releases/tag/v1.0.0
- Repository: https://github.com/Sunwood-ai-labs/android-termux-ssh-bootstrap-skill
- Account: https://github.com/Sunwood-ai-labs
