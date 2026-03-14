#!/usr/bin/env python3
"""
Add paper to AGI Knowledge Base

Usage:
    python add_paper_to_kb.py <arxiv_id>
    python add_paper_to_kb.py --top  # Add today's top paper
"""

import sys
import json
import subprocess
from pathlib import Path
from datetime import datetime

# Paths
BASE_DIR = Path(__file__).parent.parent / "docs" / "papers"
HF_PAPERS_SCRIPT = Path(__file__).parent.parent.parent / "skills" / "hf-papers" / "scripts" / "hf_papers.py"

def get_paper(arxiv_id: str) -> dict:
    """Get paper info from hf_papers.py"""
    result = subprocess.run(
        ["uv", "run", str(HF_PAPERS_SCRIPT), "get", arxiv_id],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        raise RuntimeError(f"Failed to get paper: {result.stderr}")
    return json.loads(result.stdout)

def get_top_paper() -> dict:
    """Get today's top paper"""
    result = subprocess.run(
        ["uv", "run", str(HF_PAPERS_SCRIPT), "top", "--limit", "1"],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        raise RuntimeError(f"Failed to get top paper: {result.stderr}")
    papers = json.loads(result.stdout)
    return papers[0] if papers else None

def categorize_paper(paper: dict) -> str:
    """Categorize paper based on keywords/title"""
    title_lower = paper.get("title", "").lower()
    summary_lower = paper.get("summary", "").lower()
    keywords = paper.get("ai_keywords", [])
    
    text = f"{title_lower} {summary_lower} {' '.join(keywords)}"
    
    if any(kw in text for kw in ["llm", "language model", "gpt", "chat", "text generation"]):
        return "llm"
    elif any(kw in text for kw in ["vision", "image", "video", "diffusion", "gan"]):
        return "vision"
    elif any(kw in text for kw in ["reasoning", "chain of thought", "logic", "planning"]):
        return "reasoning"
    elif any(kw in text for kw in ["agent", "autonomous", "tool use", "multi-agent"]):
        return "agents"
    elif any(kw in text for kw in ["training", "fine-tuning", "optimization", "learning"]):
        return "training"
    else:
        return "llm"  # Default

def generate_tags(paper: dict) -> list:
    """Generate tags for paper"""
    tags = []
    title_lower = paper.get("title", "").lower()
    summary_lower = paper.get("summary", "").lower()
    text = f"{title_lower} {summary_lower}"
    
    tag_keywords = {
        "#LLM": ["llm", "language model", "gpt", "transformer"],
        "#Vision": ["vision", "image", "video", "diffusion", "gan", "vae"],
        "#Reasoning": ["reasoning", "chain of thought", "logic", "planning"],
        "#Agents": ["agent", "autonomous", "tool use", "multi-agent"],
        "#Training": ["training", "fine-tuning", "optimization", "learning rate"],
        "#Inference": ["inference", "quantization", "distillation", "pruning"],
        "#Multimodal": ["multimodal", "cross-modal", "vision-language"],
        "#Safety": ["safety", "alignment", "red teaming", "harmful"],
    }
    
    for tag, keywords in tag_keywords.items():
        if any(kw in text for kw in keywords):
            tags.append(tag)
    
    return tags[:5] if tags else ["#AGI"]

def create_paper_page(paper: dict, category: str) -> Path:
    """Create paper page from template"""
    template_path = BASE_DIR / "paper-template.md"
    template = template_path.read_text()
    
    arxiv_id = paper.get("id", "unknown")
    title = paper.get("title", "Untitled")
    summary = paper.get("summary", "No summary available")
    authors = paper.get("authors", [])
    published = paper.get("published", "")
    year = published[:4] if published else datetime.now().strftime("%Y")
    
    tags = generate_tags(paper)
    tags_str = " ".join(tags)
    
    # Fill template
    content = template.format(
        title=title,
        arxiv_id=arxiv_id,
        published_date=published or "Unknown",
        categories=category.upper(),
        tags=tags_str,
        summary=summary,
        background="*自動生成予定*",
        contributions="*自動生成予定*",
        technical_details="*自動生成予定*",
        significance="*自動生成予定*",
        related_papers="*関連論文を調査中*",
        authors=", ".join(authors) if authors else "Unknown",
        year=year,
        tags_list="\n".join([f"- {tag}" for tag in tags])
    )
    
    # Save to category folder
    output_path = BASE_DIR / "category" / category / f"{arxiv_id}.md"
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(content)
    
    return output_path

def main():
    if len(sys.argv) < 2:
        print("Usage: python add_paper_to_kb.py <arxiv_id>")
        print("       python add_paper_to_kb.py --top")
        sys.exit(1)
    
    if sys.argv[1] == "--top":
        print("📊 Fetching today's top paper...")
        paper = get_top_paper()
        if not paper:
            print("❌ No papers found")
            sys.exit(1)
    else:
        arxiv_id = sys.argv[1]
        print(f"📄 Fetching paper {arxiv_id}...")
        paper = get_paper(arxiv_id)
    
    print(f"✅ Got: {paper.get('title', 'Unknown')}")
    
    # Categorize
    category = categorize_paper(paper)
    print(f"📁 Category: {category}")
    
    # Create page
    output_path = create_paper_page(paper, category)
    print(f"📝 Created: {output_path}")
    
    # Output info
    print("\n---\n")
    print(json.dumps({
        "arxiv_id": paper.get("id"),
        "title": paper.get("title"),
        "category": category,
        "path": str(output_path)
    }, indent=2))

if __name__ == "__main__":
    main()
