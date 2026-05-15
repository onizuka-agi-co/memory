# TimberBoostControl v0.1.0 Release Investigation

## Summary

TimberBoostControl is a Timberborn DLL mod that introduces a **settings.json-driven generation pipeline** for blueprint overrides. Instead of hardcoding gameplay values, it reads numeric multipliers from a JSON config and regenerates `.blueprint.json` overrides dynamically.

## What's New in v0.1.0

**Initial Public Release** — the first public version with full shipped history.

### Key Features

1. **Bottom-bar Boost Launcher**
   - Adds a Boost button to Timberborn's bottom bar
   - Icon fallback system included
   - Read-only control panel shows resolved `settings.json` path

2. **Settings-driven Generation Pipeline**
   - Auto-creates `settings.json` if missing
   - Normalizes numeric values
   - Maps legacy boolean keys for backward compatibility
   - Regenerates building and character blueprint overrides
   - Tracks generated files in `.generated-files.txt` for clean replacement

3. **Supported Value Groups**
   - `CarryMultiplier` — carry capacity
   - `MoveSpeedPercent` — movement speed
   - `StorageMultiplier` — storage capacity
   - `BuildCostPercent` — construction cost
   - `ScienceCostPercent` — research cost
   - `PowerInputPercent` — power consumption
   - `FactoryWorkerMultiplier` — workplace worker count

4. **Developer Experience**
   - Windows build script (`build.ps1`)
   - Bilingual docs (English/Japanese)
   - GitHub Pages deployment
   - Repo QA workflows

## Architecture Overview

```
settings.json → [Load & Normalize] → [Generate Blueprints] → .blueprint.json overrides
                      ↓
              Bottom-bar Panel (read-only)
                      ↓
              Reload button → Restart game to apply
```

## Source Components

| File | Purpose |
|------|---------|
| `TimberBoostControlStarter.cs` | Startup bootstrap, initial regeneration |
| `TimberBoostControlSettingsStore.cs` | Settings load/save, normalization, legacy compatibility |
| `TimberBoostControlGenerator.cs` | Blueprint generation, tracked cleanup |
| `TimberBoostControlBottomBarButton.cs` | Bottom-bar UI with icon fallback |
| `TimberBoostControlPanel.cs` | Read-only panel, reload messaging |

## Use Case

Players who want to customize Timberborn gameplay without modifying DLL code directly:
- Edit `settings.json`
- Click "Reload settings.json" in-game
- Restart Timberborn
- New values applied via regenerated blueprints

## Technical Highlights

- **IModStarter pattern** for mod initialization
- **Configurator** for dependency injection
- **ILoadableSingleton** for runtime services
- **UILayout** for bottom-bar integration
- JSON-driven content generation approach

## Links

- Repository: https://github.com/Sunwood-ai-labs/TimberBoostControl
- Release: https://github.com/Sunwood-ai-labs/TimberBoostControl/releases/tag/v0.1.0
- Docs: https://sunwood-ai-labs.github.io/TimberBoostControl/
- Release Notes: https://sunwood-ai-labs.github.io/TimberBoostControl/releases/v0.1.0

---

*Investigation completed: 2026-03-29*
