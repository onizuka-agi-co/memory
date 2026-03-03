---
layout: page
title: 検索
---

# 🔍 検索

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vitepress'

const route = useRoute()
const searchQuery = ref('')
const searchResults = ref([])
const isSearching = ref(false)

// URLパラメータから検索クエリを取得
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const q = params.get('q')
  if (q) {
    searchQuery.value = q
    performSearch(q)
  }
})

// VitePressの検索インデックスを使用して検索
async function performSearch(query) {
  if (!query) {
    searchResults.value = []
    return
  }
  
  isSearching.value = true
  
  try {
    // VitePressのローカル検索APIを使用
    const { data } = await fetch('/memory/search-index.json').then(r => r.json())
    
    const results = []
    const lowerQuery = query.toLowerCase()
    
    // 各ドキュメントを検索
    for (const [path, content] of Object.entries(data)) {
      const title = content.title || path
      const text = (content.text || '').toLowerCase()
      const titleLower = title.toLowerCase()
      
      // タイトルまたは本文にマッチ
      if (titleLower.includes(lowerQuery) || text.includes(lowerQuery)) {
        // スコア計算（タイトルマッチは優先）
        const score = titleLower.includes(lowerQuery) ? 100 : 50
        
        results.push({
          path: path.replace(/\.md$/, ''),
          title: title,
          score
        })
      }
    }
    
    // スコア順にソート
    searchResults.value = results.sort((a, b) => b.score - a.score).slice(0, 20)
  } catch (e) {
    console.error('Search error:', e)
  }
  
  isSearching.value = false
}

// 入力変更時に検索
watch(searchQuery, (newQuery) => {
  if (newQuery.length >= 2) {
    performSearch(newQuery)
  } else {
    searchResults.value = []
  }
})

// URLを更新
function updateUrl(query) {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location)
    if (query) {
      url.searchParams.set('q', query)
    } else {
      url.searchParams.delete('q')
    }
    window.history.replaceState({}, '', url)
  }
}
</script>

<div class="search-container">
  <div class="search-input-wrapper">
    <input 
      v-model="searchQuery"
      type="text" 
      placeholder="検索キーワードを入力... (例: s6, secretary-bot)"
      class="search-input"
      @input="updateUrl($event.target.value)"
    />
    <span class="search-icon">🔍</span>
  </div>
  
  <div v-if="isSearching" class="search-status">
    検索中...
  </div>
  
  <div v-if="searchResults.length > 0" class="search-results">
    <p class="results-count">{{ searchResults.length }} 件の結果</p>
    <ul class="results-list">
      <li v-for="result in searchResults" :key="result.path" class="result-item">
        <a :href="result.path" class="result-link">{{ result.title }}</a>
        <span class="result-path">{{ result.path }}</span>
      </li>
    </ul>
  </div>
  
  <div v-else-if="searchQuery && !isSearching" class="no-results">
    「{{ searchQuery }}」に一致する結果が見つかりませんでした
  </div>
  
  <div v-else class="search-tips">
    <h3>💡 検索のヒント</h3>
    <ul>
      <li>ハッシュタグ（#s6, #uv など）で検索できます</li>
      <li>トピック名で検索（例: secretary-bot）</li>
      <li>日付で検索（例: 2026-03-02）</li>
    </ul>
  </div>
</div>

<style>
.search-container {
  margin-top: 2rem;
}

.search-input-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1.1rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
}

.search-status {
  color: var(--vp-c-text-2);
  padding: 1rem;
}

.results-count {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.results-list {
  list-style: none;
  padding: 0;
}

.result-item {
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: background-color 0.2s;
}

.result-item:hover {
  background: var(--vp-c-bg-soft);
}

.result-link {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.result-link:hover {
  text-decoration: underline;
}

.result-path {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.no-results {
  padding: 2rem;
  text-align: center;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.search-tips {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.search-tips h3 {
  margin-top: 0;
}

.search-tips ul {
  padding-left: 1.5rem;
}

.search-tips li {
  margin-bottom: 0.5rem;
}

.hashtag-link {
  text-decoration: none;
}

.hashtag-code {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.2s;
}

.hashtag-link:hover .hashtag-code {
  background: var(--vp-c-brand-1);
  color: white;
}
</style>
