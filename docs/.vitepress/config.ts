import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

export default defineConfig({
  title: "Memory",
  description: "Daily reports & memory - ONIZUKA AGI",
  base: "/memory/",
  ignoreDeadLinks: true,

  // i18n support
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      description: 'Daily reports & memory - ONIZUKA AGI (English)',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: '2026', link: '/en/2026/' },
          { text: '📚 Papers', link: '/en/papers/' },
        ],
        sidebar,
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      description: '每日报告与记忆 - ONIZUKA AGI (中文)',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '2026', link: '/zh/2026/' },
          { text: '📚 论文', link: '/zh/papers/' },
        ],
        sidebar,
      }
    }
  },
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '2026', link: '/2026/' },
      { text: '📚 Papers', link: '/papers/' },
      { text: 'Architecture', link: '/architecture/' }
    ],
    
    sidebar,
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onizuka-agi-co/memory' }
    ],
    
    search: {
      provider: 'local'
    },
    
    head: [
      ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/memory/rss.xml' }]
    ]
  }
})
