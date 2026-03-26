# bitnet-android-lab v0.1.0 Release Report

**Date:** 2026-03-25
**Repository:** Sunwood-ai-labs/bitnet-android-lab
**Release:** v0.1.0 (Initial Public Release)

## Overview

v0.1.0 is the **first public release** of bitnet-android-lab, a reproducible lab kit for running **QVAC Fabric BitNet LoRA** experiments on a real Android device through Termux.

## Key Features

### 1. Core Lab Components
- **Termux-side helper scripts** for fine-tuning and inference
- **Minimal Android-specific patches** for local Vulkan build
- **Sanitized evidence** with dated rerun snippets
- **Device scope documentation** (TQ1, TQ2 throughput references)

### 2. Monitoring Tools
- **Termux TUIs:** gotop, htop, bmon (optional)
- **Windows adb watcher:** Memory/swap bars, per-core CPU usage, dumpsys integration
- Important for Android 15+ where /proc access is limited

### 3. Documentation
- Bilingual VitePress docs site (EN/JA)
- CI-validated docs build
- GitHub Pages deployment
- Evidence manifest linking claims to runtime output

## Technical Highlights

| Component | Description |
|-----------|-------------|
| Setup Path | Windows → Termux SSH (android-termux-ssh-bootstrap skill) |
| Execution | adb forward + patched Vulkan build |
| Scope | Single real device, narrow reproducibility |
| Caveats | FORTIFY issues, intermediate checkpoints, non-benchmark tok/s |

## Why This Matters

This release demonstrates that **BitNet LoRA inference can run on consumer Android hardware**—but with explicit scope limitations:

- Not a "ready-to-run" Android bundle
- Single-run tok/s references, not benchmark medians
- Evidence-backed claims instead of prose assertions

## Links

- Repository: https://github.com/Sunwood-ai-labs/bitnet-android-lab
- Release: https://github.com/Sunwood-ai-labs/bitnet-android-lab/releases/tag/v0.1.0
- Docs (EN): https://sunwood-ai-labs.github.io/bitnet-android-lab/
- Docs (JA): https://sunwood-ai-labs.github.io/bitnet-android-lab/ja/

## Posting Strategy

- **Main post:** Explain significance of BitNet on Android, highlight reproducibility focus
- **Replies:** Release URL, Repository URL, Docs URL (separated)
- **Image:** Visual explainer showing Android → Termux → BitNet flow
