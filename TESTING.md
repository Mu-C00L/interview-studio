# Validation record · edition 3

Validated September 18, 2026.

## Executed successfully

- Content validation: 140 unique lessons, 700 complete questions, 140 local SVG assets, 44 C++ download/snippet matches, acyclic prerequisite links, four learning paths covering every lesson, and four capstone briefs.
- Chapter/content checks: 34 ordered chapters, 420 exercises, Java download/snippet parity, and unchanged quiz fingerprints for all 95 existing lessons.
- All 44 C++ examples compiled with `g++ -std=c++17 -Wall -Wextra -pedantic -O1 -fsanitize=undefined`. Behavioral checks cover normal cases and relevant empty, duplicate, boundary, unreachable, and invalid-input cases. No sanitizer diagnostics occurred in the passing run.
- All seven runnable Java 17 example groups compiled. Assertions checked money/currency rules, pricing boundaries, notification counting, repeat confirmation, owner-checked seat release, LRU behavior, and injected payment behavior. The additional LLD sketches are explicitly labeled sketches.
- Six additional Java 17 chapter examples compiled and passed behavioral checks for encapsulation, arithmetic overflow, immutable snapshots, fixed-clock policy, in-memory file operations, and game transitions/errors.
- SQL join/window examples checked with SQLite for unmatched rows, paid-only aggregates, tied ranks, and deterministic running totals. This verifies the portable queries on the tested cases, not every PostgreSQL execution plan.
- Browser integration passed in headless Chromium 153 with Playwright 1.62.1:
  - All 140 lessons render their five questions, walkthrough, and decodable diagram asset.
  - Incomplete quiz submission, correct/incorrect grading, retry, best/latest scores, and reload persistence.
  - Notes rendered as text, bookmarks, study status, search, subject/level/status filters, and persistent theme.
  - Guided step navigation and visual dialog opening/closing.
  - Four role paths and persisted capstone checklists.
  - Chapter expand/collapse, course lesson jumps, three term cards and three practice exercises per lesson, saved practice checks and exported backup fields.
  - Big-O growth: n=8 and n=4 values, factorial count, and invalid-input handling.
  - Binary search: duplicates, absent target, empty array, invalid order.
  - LRU: recency promotion, eviction, zero capacity.
  - Capacity planner: arithmetic and invalid-input handling.
  - CPU scheduling: FCFS, SJF, round-robin metrics, invalid burst input.
  - Page replacement: known FIFO/LRU fault counts, empty reference input, invalid frame count.
  - TCP framing: partial frames, multiple frames, different read sizes, invalid non-ASCII input.
  - JSON export/import, rejected invalid backups without data loss, explicit reset.
  - Cross-track previous/next navigation, invalid routes, and deep-link reload under `/interview-studio/`.
  - Cross-tab progress updates without write loops.
  - Mobile navigation and document-width checks at 390px and 320px across overview, lessons, paths, projects, labs, and settings.
  - Edition-one migration preserves notes, bookmarks, study status, and legacy 3-question best scores. Expanded quizzes start unattempted; legacy scores survive reload.
  - Direct `file://` startup and blocked-localStorage fallback.
  - No page exceptions or failed local assets in the integration run.
- The visual dialog open/zoom/close behavior passes the browser suite; the full-size mobile interaction also received a separate check in edition 2.
- SVG text-bound checks found no text outside the 800×400 viewboxes. Representative technical diagrams, walkthrough infographics, desktop/mobile pages, and the architect path were visually reviewed; overlapping graph labels found during review were repositioned.

## Scope

Educational system designs and capstone briefs are not deployed or load-tested services. Quiz explanations were authored and reviewed, but the automated schema checks do not prove pedagogical correctness. No GitHub repository was published during delivery. Firefox, Safari, screen readers, and real mobile hardware were not exercised. Java contract tests do not constitute exhaustive concurrent stress testing.

Browser tools are optional development dependencies; no dependency installation is needed to host the website. See `README.md` for reproducible check commands. Generated test output and browser binaries are excluded from the ZIP.
