# nano-banana-2 スキル作成

## 概要
fal.ai nano-banana-2 を使用した画像生成スキルを作成し、GitHubリポジトリにプッシュした。

## 作成したファイル

```
skills/nano-banana-2/
├── SKILL.md              # スキル定義・使用方法
├── scripts/
│   └── generate.py       # 画像生成スクリプト
└── references/
    └── api.md            # fal.ai API リファレンス
```

## 機能

| 機能 | 説明 |
|------|------|
| テキスト→画像生成 | fal.ai nano-banana-2モデル使用 |
| アスペクト比指定 | auto, 21:9, 16:9, 3:2, 4:3, 5:4, 1:1, 4:5, 3:4, 2:3, 9:16 |
| 解像度指定 | 0.5K, 1K, 2K, 4K |
| 出力形式 | PNG, JPEG, WebP |
| ローカル保存 | --download オプション |

## 使用方法

```bash
# 基本的な使用
uv run skills/nano-banana-2/scripts/generate.py \
  --prompt "A serene mountain landscape at sunset"

# オプション付き
uv run skills/nano-banana-2/scripts/generate.py \
  --prompt "A cyberpunk city at night" \
  --aspect-ratio 16:9 \
  --resolution 2K \
  --num-images 2 \
  --output-format png \
  --download
```

## 認証

`FAL_KEY` 環境変数または `~/fal-key.txt` にAPIキーを設定。

## コミット情報

```
commit 0017194
feat: add nano-banana-2 skill for AI image generation

A nano-banana-2/SKILL.md
A nano-banana-2/references/api.md
A nano-banana-2/scripts/generate.py
```

## リンク

- [GitHubリポジトリ](https://github.com/onizuka-agi-co/skills/tree/main/nano-banana-2)
- [fal.ai nano-banana-2 API](https://fal.ai/models/fal-ai/nano-banana-2/api)

[← 戻る](./)
