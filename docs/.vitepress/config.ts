import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

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
    
    sidebar,
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onizuka-agi-co/memory' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
