# Hellmaker i18n keys

Maps `hm.*` keys in `hellmaker.js` to `Hellmaker.html` snippets. Use `data-i18n` for plain text; `data-i18n-html` where the value contains markup; `data-i18n-title` for `hm.meta.title`.

| Key | HTML target (brief) |
| --- | --- |
| `hm.meta.title` | `<title>` / document title |
| `hm.fig.editor` | First `<figure class="shot">` figcaption (editor screenshot) |
| `hm.lead` | `<p class="lead">` under h1 |
| `hm.meta.role` | project-meta `<dt>` Role |
| `hm.meta.roleVal` | project-meta `<dd>` Engine tools programmer |
| `hm.meta.team` | project-meta `<dt>` Team |
| `hm.meta.teamVal` | project-meta `<dd>` 9 — Team Infernumb |
| `hm.meta.pair` | project-meta `<dt>` Pair |
| `hm.meta.pairVal` | project-meta `<dd>` (HTML link to Death's Refrain) |
| `hm.meta.courses` | project-meta `<dt>` Courses |
| `hm.meta.coursesVal` | project-meta `<dd>` GAM200 / GAM250 line |
| `hm.meta.timeline` | project-meta `<dt>` Timeline |
| `hm.meta.timelineVal` | project-meta `<dd>` date range |
| `hm.meta.stack` | project-meta `<dt>` Stack |
| `hm.meta.stackVal` | project-meta `<dd>` C++20, Dear ImGui, spdlog |
| `hm.scan.debug` | scan-strip li — Debug layer (HTML `<strong>`) |
| `hm.scan.console` | scan-strip li — Debug console |
| `hm.scan.gui` | scan-strip li — GUI manager |
| `hm.scan.browser` | scan-strip li — Asset browser |
| `hm.scan.notMine` | scan-strip li — Not mine |
| `hm.p.intro` | Intro `<p>` after scan-strip (HTML link) |
| `hm.h.why` | `<h3>` Why I asked for the tools job |
| `hm.p.why1` | First why paragraph (HTML link to Overseas) |
| `hm.p.why2` | Second why paragraph |
| `hm.h.engine` | `<h3>` The engine, in brief |
| `hm.p.engine1` | Engine overview p1 (CMake targets) |
| `hm.p.engine2` | Engine overview p2 (same library) |
| `hm.p.engine3` | Engine overview p3 (YAML / Lua) |
| `hm.p.engineNote` | `<p class="authored">` architecture credit |
| `hm.fig.debug` | system-diagram figcaption |
| `hm.h.debug` | `<h3>` Debug layer |
| `hm.p.debug1` | Debug layer p1 |
| `hm.p.debug2` | Debug layer p2 |
| `hm.p.debug3` | Debug layer p3 |
| `hm.fig.log` | Log output shot figcaption |
| `hm.h.console` | `<h3>` Debug console |
| `hm.p.console1` | Console p1 |
| `hm.p.console2` | Console p2 |
| `hm.fig.console` | Console GIF figcaption |
| `hm.h.gui` | `<h3>` Editor GUI manager |
| `hm.p.gui1` | GUI manager p1 |
| `hm.p.gui2` | GUI manager p2 (ImGui wrap) |
| `hm.h.browser` | `<h3>` Asset browser |
| `hm.p.browser1` | Asset browser p1 |
| `hm.p.browser2` | Asset browser p2 (spawn-at-mouse) |
| `hm.p.browser3` | Asset browser p3 (YAML loop) |
| `hm.p.browser4` | Asset browser p4 (arithmetic ? pointing) |
| `hm.fig.drag` | Drag-spawn GIF figcaption |
| `hm.fig.sprites` | Asset Browser PNG figcaption |
| `hm.h.support` | `<h3>` How it supported the game |
| `hm.p.support1` | Support p1 |
| `hm.p.support2` | Support p2 (HTML link to Death's Refrain) |
| `hm.h.outcome` | `<h3>` Outcome and reflection |
| `hm.p.outcome1` | Outcome p1 (HTML link) |
| `hm.p.outcome2` | Outcome p2 (engine/game seam) |
| `hm.p.outcome3` | Outcome p3 (tile rotation) |
| `hm.p.outcome4` | Outcome p4 (assumption drift) |
| `hm.p.outcome5` | Outcome p5 (HTML link to Overseas) |
| `hm.p.outcome6` | Outcome p6 (five-second loop) |
| `hm.h.role` | `<h4>` Role |
| `hm.role.1` | Role list item 1 — debug layer |
| `hm.role.2` | Role list item 2 — debug console |
| `hm.role.3` | Role list item 3 — GUI manager |
| `hm.role.4` | Role list item 4 — asset browser |
| `hm.h.collab` | `<h4>` Engine collaborators |
| `hm.collab.1` | Collaborator li — Timothy |
| `hm.collab.2` | Collaborator li — Alfred |
| `hm.collab.3` | Collaborator li — Jaeden |
| `hm.exit.game` | case-exit-label Game |
| `hm.exit.gameBody` | case-exit Game body (HTML link) |
| `hm.exit.before` | case-exit-label Before |
| `hm.exit.beforeBody` | case-exit Before body (HTML link) |

## Already covered by shared chrome (do not redefine)

| Key | HTML |
| --- | --- |
| `chrome.questions` | case-exit Questions label |
| `chrome.back` | Back to Projects button |

## Suggested `data-i18n-html` keys

`hm.meta.pairVal`, `hm.scan.*`, `hm.p.intro`, `hm.p.why1`, `hm.p.support2`, `hm.p.outcome1`, `hm.p.outcome5`, `hm.exit.gameBody`, `hm.exit.beforeBody`
