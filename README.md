# Reichman Class

This repository is structured to support an **offline-first Filing Explorer** workflow with optional live SEC data fetching.

## Install / Run / Test

> If your local project already includes a package manager setup, keep using it. The commands below are a practical default for a JavaScript/TypeScript app.

```bash
# install dependencies
npm install

# run development UI
npm run dev

# run tests
npm test
```

If your local setup uses another toolchain (for example `pnpm`, `yarn`, or Python tooling), replace these commands with your project-specific equivalents.

## Architecture Overview (Data Flow)

The intended data path is:

1. **`src/data`**  
   Stores offline fixture files (for example `alphabet_2025_10k.txt`) and static seed inputs.
2. **`src/lib/finance`**  
   Parses and transforms filing text/records into normalized finance/domain models consumed by application logic.
3. **UI layer**  
   Reads processed data from `src/lib/finance` and renders Filing Explorer views, summaries, and metrics.

In short: **fixtures/raw text (`src/data`) -> finance parsing + normalization (`src/lib/finance`) -> presentation (UI)**.

## Replacing Fixture Values with New Filing Data

Use this workflow when swapping in a newer filing snapshot:

1. Get the new filing text (or extracted sections) for the target company/year.
2. Save it in `src/data` (for example, replacing or versioning alongside `alphabet_2025_10k.txt`).
3. Keep file naming explicit by issuer + period + form type (for example: `alphabet_2026_10k.txt`).
4. Update any fixture lookup table/constants in `src/lib/finance` so the parser selects the new file.
5. Re-run tests and validate the UI output for expected metric/section changes.

Recommended practice:
- Keep prior fixture files committed for reproducibility.
- Version fixture changes and parser changes in the same PR.
- If parsed section boundaries shift, update parser assumptions before updating snapshots.

## Filing Explorer Behavior When `alphabet_2025_10k.txt` Is Absent

When `src/data/alphabet_2025_10k.txt` is missing, Filing Explorer should degrade gracefully:

- Do **not** crash the app.
- Show an empty/error state in the UI indicating the fixture is unavailable.
- Return a structured "data unavailable" response from `src/lib/finance` (or equivalent) so the UI can render a helpful message.
- Log a clear, actionable warning for developers (missing fixture path and expected filename).

This keeps offline development predictable even when fixture files are intentionally removed or renamed.

## Optional SEC EDGAR Connector (CIK `0001652044`)

Add an optional connector interface for SEC EDGAR access tied to Alphabet's CIK (`0001652044`) with these constraints:

- **Disabled by default** (opt-in via configuration/flag).
- **Interface-only coupling from core parser path**: offline fixture loading must remain the default code path.
- **Isolated from offline fixtures**: EDGAR fetch logic should not be required for reading `src/data` files.
- **Deterministic fallback**: when disabled or unavailable, the app should continue to use local fixtures without behavior changes.

Suggested interface shape:

- `getFilingByCik(cik: string, formType: string, period?: string): Promise<string | null>`
- Adapter implementation for EDGAR HTTP retrieval.
- A separate offline adapter that reads local fixture files.

Use dependency injection (or a provider switch) so Filing Explorer can choose between:

- default: **offline fixture adapter**
- optional: **EDGAR adapter for CIK 0001652044**

without mixing responsibilities in the `src/data` fixture path.
