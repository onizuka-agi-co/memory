# GitHub Event Report: github-account-scanner v0.1.0

**Target:** Sunwood-ai-labs  
**Event Type:** Release  
**Version:** v0.1.0 (Initial Release)  
**Published:** 2026-03-22T13:19:36Z  
**Repository:** https://github.com/Sunwood-ai-labs/github-account-scanner

---

## Summary

**github-account-scanner** is a local-first Python CLI tool that monitors a GitHub account for newly created public repositories and published releases, then sends Discord alerts with per-event threads.

This is the **initial release (v0.1.0)**, covering the full shipped history.

---

## Key Features

### Core Functionality
- **Repository Monitoring**: Tracks all public repositories under a target user or organization
- **Release Scanning**: Scans up to the latest 100 releases per repository
- **Change Detection**: Detects newly created repositories and newly published releases
- **Draft-to-Published Detection**: Ignores draft releases until they become published

### Discord Integration
- **Compact Parent Messages**: Posts a summary in the target channel
- **Event Threads**: Creates dedicated threads for each event
- **Detailed Embeds**: Posts rich embeds inside threads
- **AgentAGI Prompts**: Optional explainer prompts for downstream workflows

### Safety & Performance
- **Large Account Support**: Safe API behavior for accounts with 700+ repositories
- **Unauthenticated Guardrail**: Protection for repository-plus-release polling
- **Single API Request**: 100-release window per repository for efficiency

---

## Technical Stack

- **Language**: Python 3.11+
- **Package Manager**: uv
- **License**: MIT
- **API**: GitHub REST API
- **Notification**: Discord Bot API (preferred) or Webhook

---

## Design Philosophy

> "This repository is intended for **local scheduled execution** rather than CI-based production monitoring."

The tool is designed for:
- Windows Task Scheduler
- cron jobs
- Local recurring execution

GitHub Actions is used **only for validation** (tests, CLI entrypoint check).

---

## Use Case Example

**Target:** Sunwood-ai-labs (700+ public repositories as of March 2026)

```bash
# Initial setup
uv sync

# Create baseline
uv run github-scan check Sunwood-ai-labs

# Send Discord notification
uv run github-scan notify-discord --report-file state/last-report.json
```

---

## Explainer Integration

The tool includes **structured prompt templates** for AgentAGI workflows:

- `discord_explainer_request.md` - Main request template
- `discord_explainer_repository.md` - Repository event template
- `discord_explainer_release.md` - Release event template

These prompts assume the downstream bot can resolve `skills/sunwood-community/prompts/*` paths.

---

## Validation Performed

- Unit test suite passed
- CLI entrypoint verified
- Wheel built and installed in isolated environment
- `github-scan --help` confirmed
- `github-scan check octocat` baseline created
- `notify-discord --dry-run` preview tested

---

## Impact for Users

### For Developers
- Easy local monitoring of any GitHub account
- No need for complex CI/CD infrastructure
- Simple setup with uv

### For Teams
- Discord integration for team notifications
- Per-event threads for organized discussions
- Optional AI explainer integration

### For Large Accounts
- Designed for 700+ repository accounts
- Authenticated API recommended
- Efficient single-request release scanning

---

## Links

- **Repository:** https://github.com/Sunwood-ai-labs/github-account-scanner
- **Release:** https://github.com/Sunwood-ai-labs/github-account-scanner/releases/tag/v0.1.0
- **Account:** https://github.com/Sunwood-ai-labs

---

*Report generated: 2026-03-22 22:35 JST*
