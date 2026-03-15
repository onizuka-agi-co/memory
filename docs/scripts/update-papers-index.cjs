#!/usr/bin/env node
/**
 * papers/index.md の統計を実際のファイル数と同期させる
 * 
 * Usage:
 *   node scripts/update-papers-index.js
 */

const fs = require('fs');
const path = require('path');

const PAPERS_DIR = path.join(__dirname, '..', 'papers');
const INDEX_FILE = path.join(PAPERS_DIR, 'index.md');

function scanPapers() {
  const categories = [];
  const entries = fs.readdirSync(PAPERS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'category') continue; // categoryフォルダは除外

    const categoryPath = path.join(PAPERS_DIR, entry.name);
    const files = fs.readdirSync(categoryPath);
    const mdFiles = files.filter(f => f.endsWith('.md'));

    if (mdFiles.length > 0) {
      const papers = mdFiles.map(f => {
        const id = f.replace('.md', '');
        return {
          id,
          title: extractTitle(path.join(categoryPath, f), id)
        };
      });

      categories.push({
        name: entry.name,
        count: mdFiles.length,
        papers
      });
    }
  }

  return categories.sort((a, b) => b.count - a.count);
}

function extractTitle(filePath, defaultTitle) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1] : defaultTitle;
  } catch {
    return defaultTitle;
  }
}

function generateIndex(categories) {
  const totalCount = categories.reduce((sum, c) => sum + c.count, 0);

  let content = `---
layout: doc
---

# 📚 Papers Knowledge Base

AGI関連論文の図解・解説を蓄積するナレッジベース。

## カテゴリ

`;

  for (const cat of categories) {
    content += `### ${cat.name.toUpperCase()}\n\n`;
    for (const paper of cat.papers) {
      content += `- [${paper.title}](/memory/papers/${cat.name}/${paper.id})\n`;
    }
    content += '\n';
  }

  content += `---

## 統計

- 総論文数: ${totalCount}
- カテゴリ数: ${categories.length}

---

_このナレッジベースは自動的に更新されます。_
`;

  return content;
}

function main() {
  console.log('🔍 Scanning papers directory...');
  const categories = scanPapers();

  console.log('📂 Categories found:', categories.map(c => `${c.name}(${c.count})`).join(', '));

  const indexContent = generateIndex(categories);
  fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');

  console.log(`✅ Updated ${INDEX_FILE}`);
  console.log(`📊 Total papers: ${categories.reduce((sum, c) => sum + c.count, 0)}`);
}

main();
