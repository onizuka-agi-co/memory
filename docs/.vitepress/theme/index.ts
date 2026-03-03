import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    // ハッシュタグ検索機能はクライアントサイドで処理
    if (typeof window !== 'undefined') {
      // ページ読み込み後にハッシュタグをリンク化
      setTimeout(() => {
        convertHashtagsToLinks()
      }, 100)
      
      // ページ遷移後にも適用
      if (typeof document !== 'undefined') {
        const observer = new MutationObserver(() => {
          convertHashtagsToLinks()
        })
        observer.observe(document.body, { childList: true, subtree: true })
      }
    }
  }
} as Theme

function convertHashtagsToLinks() {
  if (typeof document === 'undefined') return
  
  const content = document.querySelector('.vp-doc') || document.querySelector('article')
  if (!content) return
  
  // 既に変換済みのハッシュタグはスキップ
  const hashtags = content.querySelectorAll('code')
  hashtags.forEach(code => {
    const text = code.textContent || ''
    if (text.startsWith('#') && !text.includes(' ') && !code.classList.contains('hashtag-link')) {
      const tag = text.slice(1)
      const link = document.createElement('a')
      link.href = `/memory/search/?q=${encodeURIComponent(tag)}`
      link.className = 'hashtag-link'
      link.innerHTML = `<code class="hashtag-code">#${tag}</code>`
      link.title = `"${tag}" で検索`
      code.replaceWith(link)
    }
  })
}
