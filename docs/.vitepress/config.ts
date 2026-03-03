import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Memory",
  description: "Daily reports & memory - ONIZUKA AGI",
  base: "/memory/",
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '2026', link: '/2026/' },
      { text: 'Architecture', link: '/architecture/' }
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
                },
                {
                  text: '2026-02-25',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/2026/02/25/' },
                    { text: 'Test', link: '/2026/02/25/test' },
                    { text: 'OpenClaw Skills', link: '/2026/02/25/openclaw-skills' },
                    { text: 'Kimi CLI', link: '/2026/02/25/kimi-cli' },
                    { text: 'Nested Sub-Agents', link: '/2026/02/25/nested-sub-agents-experiment' },
                    { text: 'X Filtered Stream', link: '/2026/02/25/x-filtered-stream' },
                    { text: 'X Read Skill', link: '/2026/02/25/x-read-skill' },
                    { text: 'Background Image', link: '/2026/02/25/background-image' },
                    { text: 'Documentation', link: '/2026/02/25/documentation' },
                    { text: 'idea-dev Skill', link: '/2026/02/25/idea-dev-skill' },
                    { text: 'Idea Proposal System', link: '/2026/02/25/idea-proposal-system' },
                    { text: 'Theme Customization', link: '/2026/02/25/theme-customization' }
                  ]
                },
                {
                  text: '2026-02-26',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/2026/02/26/' },
                    { text: 'idea-dev', link: '/2026/02/26/idea-dev' },
                    { text: 'Kimi Code CLI', link: '/2026/02/26/kimi-code-cli' },
                    { text: 'TinyClaw', link: '/2026/02/26/tinyclaw' },
                    { text: 'Topic', link: '/2026/02/26/topic' },
                    { text: 'Webhook', link: '/2026/02/26/webhook' },
                    { text: 'X Filtered Stream + Discord', link: '/2026/02/26/x-filtered-stream-discord-webhook' },
                    { text: 'X Community Skill', link: '/2026/02/26/x' }
                  ]
                },
                {
                  text: '2026-02-28',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/2026/02/28/' },
                    { text: 'GitHub Project', link: '/2026/02/28/github-project' },
                    { text: 'nano-banana-2', link: '/2026/02/28/nano-banana-2' },
                    { text: 'Notification History', link: '/2026/02/28/notification-history' },
                    { text: 'OpenClaw Secrets', link: '/2026/02/28/openclaw-secrets' },
                    { text: 'Secretary Bot', link: '/2026/02/28/secretary-bot' },
                    { text: 'Secret Scan', link: '/2026/02/28/secret-scan-recommendation' },
                    { text: 'Task Cron', link: '/2026/02/28/task-cron' },
                    { text: 'Task Migration', link: '/2026/02/28/task-migration' },
                    { text: 'Tweet', link: '/2026/02/28/tweet' }
                  ]
                }
              ]
            },
            {
              text: 'March',
              collapsed: false,
              items: [
                {
                  text: '2026-03-01',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/2026/03/01/' },
                    { text: 'GitHub Project', link: '/2026/03/01/github-project' },
                    { text: 'Secretary Bot Enhancement', link: '/2026/03/01/secretary-bot-enhancement' }
                  ]
                },
                {
                  text: '2026-03-02',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/2026/03/02/' },
                    { text: 'Secretary Bot s6', link: '/2026/03/02/secretary-bot-s6' },
                    { text: 'Vision', link: '/2026/03/02/vision' },
                    { text: 'Vision Changes', link: '/2026/03/02/vision-changes' },
                    { text: 'Topic', link: '/2026/03/02/topic' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/architecture/': [
        {
          text: 'アーキテクチャ',
          items: [
            { text: 'Overview', link: '/architecture/' }
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
