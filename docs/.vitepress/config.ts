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
                {
                  text: '2026-02-23',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/2026/02/23/' },
                    { text: 'Claude Code + GLM', link: '/2026/02/23/claude-code-glm' },
                    { text: 'X API Skills', link: '/2026/02/23/x-api-skills' },
                    { text: 'X OAuth 2.0', link: '/2026/02/23/x-oauth2' },
                    { text: 'UV Install', link: '/2026/02/23/uv-install' },
                    { text: 'X Community', link: '/2026/02/23/x-community' },
                    { text: 'Tested', link: '/2026/02/23/tested' }
                  ]
                },
                {
                  text: '2026-02-24',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/2026/02/24/' },
                    { text: 'Task Management', link: '/2026/02/24/task-management' },
                    { text: 'VitePress Setup', link: '/2026/02/24/vitepress-setup' },
                    { text: 'GitHub Pages', link: '/2026/02/24/github-pages' },
                    { text: 'Security', link: '/2026/02/24/security' },
                    { text: 'Restructure', link: '/2026/02/24/restructure' }
                  ]
                }
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
