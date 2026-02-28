# nano-banana-2 スキル作成

## 概要

fal.ai の nano-banana-2 モデルを使用した画像生成スキルを作成。

## API情報

- **エンドポイント:** `fal-ai/nano-banana-2`
- **認証:** `FAL_KEY` 環境変数

## パラメータ

| パラメータ | 説明 | デフォルト |
|------------|------|------------|
| `prompt` | テキストプロンプト（必須） | - |
| `num_images` | 生成する画像数 | 1 |
| `aspect_ratio` | アスペクト比 | auto |
| `resolution` | 解像度（0.5K/1K/2K/4K） | 1K |
| `output_format` | 出力形式（jpeg/png/webp） | png |
| `seed` | ランダムシード | - |
| `enable_web_search` | Web検索を有効化 | false |

## スキル構成

```
skills/nano-banana-2/
├── SKILL.md
├── scripts/
│   └── generate.py
└── references/
    └── api.md
```

## 関連

- リポジトリ: https://github.com/onizuka-agi-co/skills
- API Docs: https://fal.ai/models/fal-ai/nano-banana-2/api
