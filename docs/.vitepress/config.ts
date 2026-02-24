import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Memory",
  description: "Daily reports & memory - ONIZUKA AGI",
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '2026', link: '/2026/' }
    ],
    
    sidebar: {
      '/2026/': [
        {
          text: '2026',
          items: [
            { text: 'Overview', link: '/2026/' },
            {
              text: 'February',
              collapsed: false,
              items: [
                { text: '2026-02-23', link: '/2026/02/2026-02-23' },
                { text: '2026-02-24', link: '/2026/02/2026-02-24' }
              ]
            }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onizuka-agi-co/memory' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
