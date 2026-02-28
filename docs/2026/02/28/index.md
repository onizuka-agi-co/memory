# 2026-02-28 日報

tags: [#nano-banana-2, #スキル, #開発, #ONIZUKA]

## 概要

**nanobanana2 スキル検証・修正・機能追加**

## 作業内容

### nanobanana2 スキル検証

**背景:**
- 新しいAPIキーが提供されたため検証を実施
- APIキー: `1e1f18b4-331d-4fa3-bcf7-95eccfc01bc9:5abf1da1016a294d446fb55c49314c85`

**発見した問題:**
- `generate.py` のポーリングロジックにバグ
- `/status` エンドポイントを使わずに結果を取得しようとして400エラー
- 202ステータスコード（処理中）をエラーとして扱っていた

**修正内容:**
1. `get_status()` 関数を追加 - `/status` エンドポイントをポーリング
2. 202ステータスコードを正常として扱うよう修正
3. `COMPLETED` ステータス時のみ結果を取得
4. **Image-to-Image (Edit) モード追加** - `--image` フラグで入力画像を指定可能

### ONIZUKA アセット追加

**追加ファイル:**
- `assets/onizuka-realistic.jpg` - リアル版（劇的・詳細）
- `assets/onizuka-chibi.jpg` - ちび版（可愛い・シンプル）
- `assets/onizuka-reference.md` - キャラクター詳細＆プロンプトテンプレート

### Image-to-Image テスト

```bash
# テストコマンド
uv run scripts/generate.py \
  --prompt "Transform this character into a dramatic scene..." \
  --image assets/onizuka-realistic.jpg \
  --aspect-ratio 3:4

# 結果: 成功
# https://v3b.fal.media/files/b/0a904cd6/7Y4l_yLiR9C3E5i6Ynpym_z0KF6A4u.png
```

**コミット:**
```
da3500e fix(nano-banana-2): correct polling logic for fal.ai API
6200ee6 feat(nano-banana-2): add ONIZUKA character assets and reference prompts
6ab1398 feat(nano-banana-2): add image-to-image (edit) mode support
0aaabd6 docs(nano-banana-2): update SKILL.md with image-to-image mode
```

## 学び

- fal.ai APIは非同期キュー方式
- ステータス確認は `/status` エンドポイントで行う
- 200 = 完了、202 = 処理中
- **Edit モードでもステータスURLは共通エンドポイントを使用**
  - Edit APIは `POST /edit` だが、ステータス確認は `/requests/{id}/status`

## 使い分け

```bash
# テキスト→画像（新規生成）
uv run scripts/generate.py --prompt "..." -a 3:4

# 画像→画像（編集）
uv run scripts/generate.py --prompt "..." -i input.jpg -a 3:4
```
