# GitHub Release Report: github-account-scanner v0.1.0

## Overview

**Repository:** Sunwood-ai-labs/github-account-scanner  
**Release:** v0.1.0 (Initial Release)  
**Published:** 2026-03-22T13:19:36Z  
**License:** MIT

## What is github-account-scanner?

A **local-first Python CLI** for monitoring GitHub accounts. It tracks:
- Newly created public repositories
- Newly published GitHub releases
- Discord notifications with per-event threads

Designed for **local scheduled execution** rather than CI-based production monitoring.

## Key Features

### 1. Repository & Release Monitoring
- Snapshots all public repositories under a target user/organization
- Scans up to the latest **100 releases per repository**
- Detects draft-to-published release transitions
- Single API request per repository (efficient for recurring scans)

### 2. Safe API Behavior
- **Unauthenticated scan guardrail** for large accounts
- Authenticated runs recommended for accounts with 700+ repos
- Respects GitHub REST API rate limits

### 3. Discord Integration
- Compact parent messages in target channel
- Dedicated threads for each event
- Detailed embeds inside threads
- Optional **AgentAGI mention prompts** for downstream explainer workflows

### 4. Tooling & Automation
- Validation-only GitHub Actions workflow
- `uv` for dependency management
- Unit test suite included
- Built as installable Python CLI package

## Technical Stack

| Component | Technology |
|-----------|------------|
| Language | Python 3.11+ |
| Package Manager | uv |
| API | GitHub REST API |
| Notifications | Discord Bot API |
| CI | GitHub Actions (validation only) |

## Use Case: Sunwood-ai-labs Monitoring

As of March 21, 2026, Sunwood-ai-labs has **700+ public repositories**. This scanner enables:
- Automated detection of new OSS releases
- Discord alerts for community awareness
- Integration with AgentAGI for automated explainer posts

## Quick Start

```bash
# Install dependencies
uv sync

# Set GitHub token (required for large accounts)
export GITHUB_TOKEN="ghp_xxx"

# Create initial baseline
uv run github-scan check Sunwood-ai-labs

# Generate reports
uv run github-scan check Sunwood-ai-labs \
  --state-file state/sunwood-ai-labs.json \
  --json-report state/last-report.json \
  --markdown-report state/last-report.md

# Discord notification (requires .env setup)
uv run github-scan notify-discord --report-file state/last-report.json
```

## Why Local-First?

GitHub doesn't provide webhooks for monitoring another account's entire public repository surface. This tool uses **periodic polling** with state comparison:

1. Fetch current snapshot via REST API
2. Compare against saved local state
3. Report detected changes
4. Update local state

## Significance

This is the **first public release** of a tool designed specifically for:
- OSS community managers tracking multiple repositories
- Automated Discord notification pipelines
- Integration with AI explainer workflows (AgentAGI)

---

**Source:** https://github.com/Sunwood-ai-labs/github-account-scanner/releases/tag/v0.1.0
