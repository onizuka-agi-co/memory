#!/usr/bin/env npx ts-node
/**
 * papers/index.md の統計を実際のファイル数と同期させる
 */

import * as fs from 'fs';
import * as path from 'path';

const PAPERS_DIR = path.join(__dirname, '../papers');
const INDEX_FILE = path.join(PAPERS_DIR, 'index.md');

interface Category {
  name: string;
  count: number;
  papers: string[];
}

function scanPapers(): Category[] {
  const categories: Category[] = [];
  const entries = fs.readdirSync(PAPERS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== 'category') {
      const categoryPath = path.join(PAPERS_DIR, entry.name);
      const files = fs.readdirSync(categoryPath)
        .filter(f => f.endsWith('.md'));
      
      categories.push({
        name: entry.name,
        count: files.length,
        papers: files.map(f => f.replace('.md', ''))
      });
    }
  }

  return categories.sort((a, b) => b.count - a.count);
}

function generateIndex(categories: Category[]): string {
  const totalCount = categories.reduce((sum, c) => sum + c.count, 0);
  
  let content = `---
layout: doc
---

# 📚 Papers Knowledge Base

AGI関連論文の図解・解説を蓄積するナレッジベース。

## カテゴリ

`;

  for (const cat of categories) {
    if (cat.count > 0) {
      content += `### ${cat.name.toUpperCase()}\n\n`;
      for (const paper of cat.papers) {
        content += `- [${paper}](/${cat.name}/${paper})\n`;
      }
      content += '\n';
    }
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
  console.log('Scanning papers directory...');
  const categories = scanPapers();
  
  console.log('Categories found:', categories.map(c => `${c.name}(${c.count})`).join(', '));
  
  const indexContent = generateIndex(categories);
  fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');
  
  console.log(`Updated ${INDEX_FILE}`);
  console.log(`Total papers: ${categories.reduce((sum, c) => sum + c.count, 0)}`);
}

main();
