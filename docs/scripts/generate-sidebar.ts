/**
 * VitePress Sidebar Auto-Generator
 * 
 * memory/docs のディレクトリ構造から sidebar 設定を自動生成する
 * 
 * Usage:
 *   npx ts-node --esm scripts/generate-sidebar.ts
 *   npm run gen:sidebar
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '..');
const SIDEBAR_FILE = path.join(DOCS_DIR, '.vitepress', 'sidebar.ts');

interface SidebarItem {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: SidebarItem[];
}

interface DayInfo {
  date: string;
  topics: string[];
}

interface MonthInfo {
  month: string;
  days: DayInfo[];
}

/**
 * ファイル名から表示用テキストを生成
 */
function formatTopicName(fileName: string): string {
  const name = fileName.replace(/\.md$/, '');
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * 指定ディレクトリ内のトピックファイル一覧を取得
 */
function getTopicsInDay(dayDir: string): string[] {
  const files = fs.readdirSync(dayDir);
  return files
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .map(f => f.replace(/\.md$/, ''))
    .sort();
}

/**
 * 指定月ディレクトリ内の日一覧を取得
 */
function getDaysInMonth(monthDir: string): DayInfo[] {
  const days: DayInfo[] = [];
  if (!fs.existsSync(monthDir)) return days;
  
  const entries = fs.readdirSync(monthDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && /^\d{2}$/.test(entry.name)) {
      const dayPath = path.join(monthDir, entry.name);
      const indexPath = path.join(dayPath, 'index.md');
      if (fs.existsSync(indexPath)) {
        days.push({ date: entry.name, topics: getTopicsInDay(dayPath) });
      }
    }
  }
  return days.sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * 指定年ディレクトリ内の月一覧を取得
 */
function getMonthsInYear(yearDir: string): MonthInfo[] {
  const months: MonthInfo[] = [];
  if (!fs.existsSync(yearDir)) return months;
  
  const entries = fs.readdirSync(yearDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && /^\d{2}$/.test(entry.name)) {
      const monthPath = path.join(yearDir, entry.name);
      const days = getDaysInMonth(monthPath);
      if (days.length > 0) {
        months.push({ month: entry.name, days });
      }
    }
  }
  return months.sort((a, b) => a.month.localeCompare(b.month));
}

/**
 * 月番号から月名を取得
 */
function getMonthName(month: string): string {
  const names: Record<string, string> = {
    '01': 'January', '02': 'February', '03': 'March', '04': 'April',
    '05': 'May', '06': 'June', '07': 'July', '08': 'August',
    '09': 'September', '10': 'October', '11': 'November', '12': 'December'
  };
  return names[month] || month;
}

/**
 * SidebarItemをTypeScriptコードに変換
 */
function itemToCode(item: SidebarItem, indent: number = 2): string {
  const spaces = ' '.repeat(indent);
  const lines: string[] = [];
  
  lines.push(`${spaces}{`);
  lines.push(`${spaces}  text: '${item.text}',`);
  
  if (item.link) {
    lines.push(`${spaces}  link: '${item.link}',`);
  }
  if (item.collapsed !== undefined) {
    lines.push(`${spaces}  collapsed: ${item.collapsed},`);
  }
  if (item.items && item.items.length > 0) {
    lines.push(`${spaces}  items: [`);
    for (let i = 0; i < item.items.length; i++) {
      const child = item.items[i];
      lines.push(itemToCode(child, indent + 4) + (i < item.items.length - 1 ? ',' : ''));
    }
    lines.push(`${spaces}  ]`);
  }
  
  lines.push(`${spaces}}`);
  return lines.join('\n');
}

/**
 * sidebar.ts ファイルを生成
 */
function generateSidebarFile(): void {
  const year2026Path = path.join(DOCS_DIR, '2026');
  if (!fs.existsSync(year2026Path)) {
    console.log('No 2026 directory found');
    return;
  }
  
  const months = getMonthsInYear(year2026Path);
  if (months.length === 0) {
    console.log('No months found in 2026');
    return;
  }
  
  const yearItems: SidebarItem[] = [
    { text: 'Overview', link: '/2026/' }
  ];
  
  for (const monthInfo of months) {
    const monthName = getMonthName(monthInfo.month);
    const monthItems: SidebarItem[] = [];
    
    for (const dayInfo of monthInfo.days) {
      const dayText = `2026-${monthInfo.month}-${dayInfo.date}`;
      const dayLink = `/2026/${monthInfo.month}/${dayInfo.date}/`;
      
      const dayItems: SidebarItem[] = [
        { text: 'Overview', link: dayLink }
      ];
      
      for (const topic of dayInfo.topics) {
        dayItems.push({
          text: formatTopicName(topic),
          link: `/2026/${monthInfo.month}/${dayInfo.date}/${topic}`
        });
      }
      
      monthItems.push({
        text: dayText,
        collapsed: true,
        items: dayItems
      });
    }
    
    yearItems.push({
      text: monthName,
      collapsed: false,
      items: monthItems
    });
  }
  
  // TypeScriptコードを生成
  const code = `// Auto-generated by scripts/generate-sidebar.ts
// Do not edit manually - run 'npm run gen:sidebar' to regenerate

import type { DefaultTheme } from 'vitepress'

export const sidebar2026: DefaultTheme.SidebarItem[] = [
${yearItems.map(item => itemToCode(item, 2)).join(',\n')}
]

export const sidebar: DefaultTheme.Sidebar = {
  '/2026/': [{ text: '2026', items: sidebar2026 }],
  '/architecture/': [{ text: 'アーキテクチャ', items: [{ text: 'Overview', link: '/architecture/' }] }]
}
`;
  
  fs.writeFileSync(SIDEBAR_FILE, code, 'utf-8');
  console.log('✅ Generated .vitepress/sidebar.ts');
}

// メイン実行
console.log('🔍 Scanning memory/docs...');
generateSidebarFile();
console.log('✨ Done!');
