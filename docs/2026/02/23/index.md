# 2026-02-23

## 完了
- [x] Claude Code + GLM設定
- [x] X API スキル作成（x-read / x-write / x-community）
- [x] X OAuth 2.0 認証フロー完成
- [x] UV インストール
- [x] X コミュニティ投稿機能実装

## 気づき
- X OAuth 2.0 のscopeには `tweet.read` が必須
- PKCE verifierは `+` と `/` を削除して生成
- X API: `community_id` と `quote_tweet_id` の併用は403エラー
- コミュニティ投稿は `share_with_followers: true` が推奨

## 詳細

- [Claude Code + GLM 設定](./claude-code-glm)
- [X API スキル作成](./x-api-skills)
- [X OAuth 2.0 認証](./x-oauth2)
- [UV インストール](./uv-install)
- [X コミュニティ投稿スキル](./x-community)
- [テスト済み一覧](./tested)
