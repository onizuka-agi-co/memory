import { writeFileSync } from 'fs'
import { join } from 'path'
import { globSync } from 'glob'

interface Paper {
  title: string
  description: string
  link: string
  date: string
  category: string
}

const SITE_URL = 'https://onizuka-agi-co.github.io/memory/'
const RSS_PATH = join(process.cwd(), '.vitepress/dist/rss.xml')

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function formatDate(dateStr: string): string {
  // arXiv ID format: YYMM.NNNNN
  const match = dateStr.match(/^(\d{2})(\d{2})\.(\d{5})$/)
  if (match) {
    const year = 2000 + parseInt(match[1])
    const month = match[2]
    const day = '01' // Default to first day of month
    return new Date(`${year}-${month}-${day}`).toUTCString()
  }
  return new Date().toUTCString()
}

function generateRSS(papers: Paper[]): string {
  const items = papers.map(paper => `
    <item>
      <title>${escapeXml(paper.title)}</title>
      <link>${SITE_URL}${paper.link}</link>
      <description>${escapeXml(paper.description)}</description>
      <category>${escapeXml(paper.category)}</category>
      <pubDate>${paper.date}</pubDate>
      <guid>${SITE_URL}${paper.link}</guid>
    </item>
  `).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ONIZUKA AGI Memory - Papers</title>
    <link>${SITE_URL}</link>
    <description>AGI関連論文の図解・解説を蓄積するナレッジベース</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`
}

async function main() {
  const papersDir = join(process.cwd(), 'papers')
  const categories = ['agi', 'vision', 'general']
  const papers: Paper[] = []

  for (const category of categories) {
    const files = globSync(join(papersDir, category, '*.md'))
    
    for (const file of files) {
      const content = require('fs').readFileSync(file, 'utf-8')
      const filename = file.split('/').pop()?.replace('.md', '') || ''
      
      // Extract title from frontmatter or first heading
      const titleMatch = content.match(/^#\s+(.+)$/m)
      const title = titleMatch ? titleMatch[1] : filename
      
      // Extract description
      const descMatch = content.match(/^>\s*(.+)$/m)
      const description = descMatch ? descMatch[1] : ''
      
      papers.push({
        title,
        description,
        link: `papers/${category}/${filename}`,
        date: formatDate(filename),
        category: category.toUpperCase()
      })
    }
  }

  // Sort by date (newest first)
  papers.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const rss = generateRSS(papers)
  
  // Ensure dist directory exists
  require('fs').mkdirSync(join(process.cwd(), '.vitepress/dist'), { recursive: true })
  
  writeFileSync(RSS_PATH, rss)
  console.log(`✅ RSS feed generated: ${papers.length} papers`)
}

main().catch(console.error)
