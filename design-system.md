# HAF — Design System Specification

> Source of truth: `src/styles/tokens.css`
> Format reference: clive-website/design-system.md

**Project:** HAF (Hive Application Framework) — landing page
**Stack:** Astro 5 + Tailwind 4 (CSS-first `@theme`) + Shiki
**Status:** In development
**Site type:** Marketing landing
**Design direction:** Dark SaaS, developer-focused, database/infrastructure aesthetic
**Owner of brief:** design-engineer -> handoff to frontend-developer
**Tokens source of truth:** `src/styles/tokens.css`

---

## 1. Mood & Voice

HAF jest **PostgreSQL middleware** dla Hive blockchain — warstwa indeksujaca dajaca SQL dostep do danych blockchain. Target: blockchain developrzy, backend engineerzy.

Estetyka: **dark navy/slate** z **cyan/teal primary** — kojarzy sie z danymi, sieciami, infrastruktura. Czysta, nowoczesna, developer-focused. Bez nadmiernej animacji — solidnosc i profesjonalizm. Nie jest to TUI aesthetic (jak Clive) — jest to klasyczna dark SaaS z subtelnymi glow effects i gradientami.

Hive red (`#e31337`) wystepuje **tylko jako wskaznik przynaleznosci** do ekosystemu Hive (footer, favicon accent, logo companion).

Voice: techniczny ale przystepny. Konkretne benefity ("SQL access to blockchain data", "5M blocks in minutes"). Unikaj marketingowego pufu. Drugi person ("Query blockchain data", "Build faster").

---

## 2. Color Palette

### 2.1 Backgrounds

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0a0f1a` | Page background — deep navy/slate |
| `--color-bg-subtle` | `#0e1425` | Alternate section bg (zebra striping) |
| `--color-bg-surface` | `#131b2e` | Card/panel background |
| `--color-bg-surface-hover` | `#182239` | Card hover state |
| `--color-bg-elevated` | `#1a2440` | Elevated panels, dropdowns, modals |
| `--color-bg-code` | `#0d1220` | Code block background, terminal frame |

### 2.2 Primary (Cyan/Teal)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#06b6d4` | Primary brand, links, active states |
| `--color-primary-bright` | `#22d3ee` | Hover states, emphasis |
| `--color-primary-dim` | `#0891b2` | Pressed states, secondary emphasis |
| `--color-primary-muted` | `#164e63` | Subtle backgrounds, borders |
| `--color-primary-ghost` | `rgba(6, 182, 212, 0.08)` | Ghost button bg, subtle tint areas |
| `--color-primary-glow` | `rgba(6, 182, 212, 0.15)` | Card glow shadows, decorative |

### 2.3 Accent

| Token | Value | Usage |
|---|---|---|
| `--color-accent-green` | `#34d399` | Success states, "live" indicators |
| `--color-accent-amber` | `#fbbf24` | Warning states, highlights |
| `--color-accent-violet` | `#a78bfa` | Secondary accent, tags |
| `--color-accent-rose` | `#fb7185` | Error states, destructive |
| `--color-hive` | `#e31337` | Hive ecosystem brand (sparingly) |

### 2.4 Text

| Token | Value | Contrast vs bg | Usage |
|---|---|---|---|
| `--color-text` | `#f1f5f9` | 16.2:1 | Primary text, headings |
| `--color-text-muted` | `#94a3b8` | 7.1:1 | Secondary text, descriptions |
| `--color-text-subtle` | `#64748b` | 4.6:1 | Tertiary, captions, metadata |
| `--color-text-on-primary` | `#0a0f1a` | N/A | Text on primary-colored bg |

### 2.5 Borders

| Token | Value | Usage |
|---|---|---|
| `--color-border` | `rgba(148, 163, 184, 0.12)` | Default borders, dividers |
| `--color-border-bright` | `rgba(148, 163, 184, 0.25)` | Hover borders, active states |
| `--color-border-primary` | `rgba(6, 182, 212, 0.3)` | Primary-tinted borders (feature cards) |

### 2.6 Gradients

| Token | Value | Usage |
|---|---|---|
| `--gradient-text` | `linear-gradient(135deg, #06b6d4, #22d3ee, #a78bfa)` | Hero heading gradient |
| `--gradient-hero-bg` | `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.12), transparent)` | Hero background glow |
| `--gradient-card-glow` | `radial-gradient(ellipse at center, rgba(6,182,212,0.06), transparent 70%)` | Card background decoration |
| `--gradient-section-fade` | `linear-gradient(180deg, transparent, rgba(6,182,212,0.03), transparent)` | Section transition |

---

## 3. Typography

### 3.1 Font stack

| Role | Font | Token |
|---|---|---|
| Display/Headlines | Inter (variable) | `--font-display` |
| Body/UI | Inter (variable) | `--font-sans` |
| Code/Terminal | JetBrains Mono (variable) | `--font-mono` |

Fonty zaladowane przez `@fontsource-variable` — lokalne woff2 pliki. **Zakaz zewnetrznych CDN (Google Fonts etc.)**. `font-display: swap`, `<link rel="preload">` na oba fonty.

### 3.2 Type scale

| Token | Size | Usage |
|---|---|---|
| `--text-xs` | `0.75rem` (12px) | Captions, badges |
| `--text-sm` | `0.875rem` (14px) | Small UI text, metadata |
| `--text-base` | `1rem` (16px) | Body text |
| `--text-lg` | `1.125rem` (18px) | Lead paragraphs |
| `--text-xl` | `1.25rem` (20px) | Card titles |
| `--text-2xl` | `1.5rem` (24px) | Section subtitles |
| `--text-3xl` | `1.875rem` (30px) | H3 |
| `--text-4xl` | `2.25rem` (36px) | H2 mobile |
| `--text-5xl` | `3rem` (48px) | H2 desktop |
| `--text-6xl` | `3.75rem` (60px) | H1 mobile |
| `--text-7xl` | `4.5rem` (72px) | H1 desktop |

### 3.3 Font weights

| Token | Value | Usage |
|---|---|---|
| `--font-weight-normal` | `400` | Body text |
| `--font-weight-medium` | `500` | UI labels, nav items |
| `--font-weight-semibold` | `600` | Card titles, subtitles |
| `--font-weight-bold` | `700` | Headings |
| `--font-weight-extrabold` | `800` | Hero H1 |

### 3.4 Line heights

| Token | Value | Usage |
|---|---|---|
| `--leading-tight` | `1.1` | Display/hero headings |
| `--leading-snug` | `1.3` | H2/H3 |
| `--leading-normal` | `1.6` | Body text |
| `--leading-relaxed` | `1.75` | Long-form reading |

### 3.5 Letter spacing

| Token | Value | Usage |
|---|---|---|
| `--tracking-tight` | `-0.025em` | Hero heading |
| `--tracking-normal` | `0` | Body |
| `--tracking-wide` | `0.05em` | Eyebrow/overline text, badges |
| `--tracking-mono` | `-0.02em` | Code headings |

---

## 4. Spacing Scale

8px base grid system:

| Token | Value |
|---|---|
| `--space-0` | `0` |
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-5` | `1.25rem` (20px) |
| `--space-6` | `1.5rem` (24px) |
| `--space-8` | `2rem` (32px) |
| `--space-10` | `2.5rem` (40px) |
| `--space-12` | `3rem` (48px) |
| `--space-16` | `4rem` (64px) |
| `--space-20` | `5rem` (80px) |
| `--space-24` | `6rem` (96px) |
| `--space-32` | `8rem` (128px) |

Layout tokens:

| Token | Value | Usage |
|---|---|---|
| `--container-max` | `1200px` | Content container max-width |
| `--container-gutter` | `1.5rem` (24px) | Mobile gutter |
| `--container-gutter-lg` | `2rem` (32px) | Desktop gutter |
| `--section-y` | `5rem` (80px) | Section vertical padding mobile |
| `--section-y-lg` | `8rem` (128px) | Section vertical padding desktop |

---

## 5. Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-none` | `0` | Flat elements |
| `--radius-sm` | `4px` | Badges, small tags |
| `--radius-md` | `8px` | Buttons, inputs |
| `--radius-lg` | `12px` | Cards, panels |
| `--radius-xl` | `16px` | Modal, hero cards |
| `--radius-2xl` | `24px` | Large decorative |
| `--radius-full` | `9999px` | Pills, avatars |

---

## 6. Shadow Scale

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle depth |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -2px rgba(0,0,0,0.3)` | Cards resting |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -4px rgba(0,0,0,0.4)` | Elevated panels |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.4)` | Modals, overlays |
| `--shadow-glow-sm` | `0 0 15px rgba(6,182,212,0.1)` | Subtle primary glow |
| `--shadow-glow-md` | `0 0 30px rgba(6,182,212,0.12), 0 0 60px rgba(6,182,212,0.06)` | Card hover glow |
| `--shadow-glow-lg` | `0 0 40px rgba(6,182,212,0.15), 0 0 80px rgba(6,182,212,0.08)` | Hero/CTA emphasis |
| `--shadow-focus-ring` | `0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-primary)` | Focus-visible ring |

---

## 7. Layout Grid

| Property | Mobile | Desktop |
|---|---|---|
| Container max-width | 100% | 1200px (`--container-max`) |
| Gutter | 24px | 32px |
| Section vertical rhythm | 80px | 128px |
| Grid columns | 4 | 12 (CSS Grid) |
| Column gap | 16px | 24px |

**Hero height:** `min-height: clamp(560px, 80vh, 800px)` — NIE 100vh (dynamiczny viewport mobile).

**Sticky nav:** top sticky z `backdrop-filter: blur(12px)`, `bg: rgba(10,15,26,0.8)`, border-bottom `--color-border`.

---

## 8. Component Specs

### 8.1 `Button.astro`

Variants: `primary` | `secondary` | `ghost`. Sizes: `sm` (h: 36px, text-sm) | `md` (h: 44px, text-base) | `lg` (h: 52px, text-lg).

- **Primary:** bg `--color-primary`, color `--color-text-on-primary`, hover bg `--color-primary-bright` + `--shadow-glow-sm`, border-radius `--radius-md`. Font-weight `--font-weight-semibold`.
- **Secondary:** bg transparent, border 1px `--color-border-bright`, color `--color-text`, hover border `--color-primary` + color `--color-primary-bright`.
- **Ghost:** bg transparent, color `--color-primary`, hover bg `--color-primary-ghost`.

Focus-visible: `box-shadow: var(--shadow-focus-ring)`, border-radius `--radius-md`.

Active: `translateY(1px)`, duration 75ms.

### 8.2 `Card.astro`

Props: `title?`, `icon?`, `glow?` (boolean, default false), `class?`.

Struktura:
```html
<article class="card">
  <div class="card__icon"><!-- icon slot --></div>
  <h3 class="card__title"><!-- title --></h3>
  <p class="card__description"><slot /></p>
</article>
```

Resting: bg `--color-bg-surface`, border 1px `--color-border`, border-radius `--radius-lg`, `--shadow-md`.

Hover: border-color `--color-border-primary`, bg `--color-bg-surface-hover`, `--shadow-glow-md`, `translateY(-2px)`.

Variant `glow`: resting ma delikatny `--shadow-glow-sm`, hover wzmocniony do `--shadow-glow-lg`.

### 8.3 `Badge.astro`

Variants: `default` | `success` | `warning` | `danger` | `primary`.

Struktura: inline-flex, gap 6px, px 10px, py 4px, border-radius `--radius-full`, font-size `--text-xs`, font-weight `--font-weight-medium`, letter-spacing `--tracking-wide`, uppercase.

- **Default:** bg `rgba(148,163,184,0.1)`, border 1px `rgba(148,163,184,0.2)`, color `--color-text-muted`.
- **Primary:** bg `--color-primary-ghost`, border 1px `rgba(6,182,212,0.2)`, color `--color-primary-bright`.
- **Success:** bg `rgba(52,211,153,0.1)`, border 1px `rgba(52,211,153,0.2)`, color `--color-accent-green`.

### 8.4 `CodeBlock.astro`

Shiki `github-dark-default` theme. Container: bg `--color-bg-code`, border 1px `--color-border`, border-radius `--radius-lg`. Optional title bar (filename) z bg `--color-bg-surface`, border-bottom.

CopyButton top-right: ghost button, ikona clipboard -> check 1.5s.

Font: `--font-mono`, `--text-sm`, line-height `1.7`.

### 8.5 `TerminalFrame.astro`

`<figure>` z header bar (3 traffic light dots, optional title). Body: `<pre>` z bg `--color-bg-code`. Border 1px `--color-border`, border-radius `--radius-lg`.

Traffic lights: `aria-hidden="true"`, 3 kolka 12px (red `#ff5f56`, yellow `#ffbd2e`, green `#27c93f`), opacity 0.7.

### 8.6 `FeatureCard.astro`

Extended Card z:
- Icon area: 48x48px, bg `--color-primary-ghost`, border-radius `--radius-md`, centered icon w `--color-primary`.
- Title: `--text-xl`, `--font-weight-semibold`.
- Description: `--text-base`, `--color-text-muted`, max 3 linie.

Grid: 3 kolumny desktop, 2 tablet, 1 mobile. Gap `--space-6`.

---

## 9. Motion Spec

**Filozofia:** pure CSS transitions. Zero motion library. Subtlety > spectacle.

### 9.1 Transition tokens

| Token | Value | Usage |
|---|---|---|
| `--transition-fast` | `150ms ease-out` | Buttons, links, small UI |
| `--transition-base` | `250ms ease-out` | Cards, panels |
| `--transition-slow` | `400ms ease-out` | Section reveals |
| `--transition-spring` | `500ms cubic-bezier(0.34, 1.56, 0.64, 1)` | Emphasis (badge appear) |

### 9.2 Animations per element

| Element | Animation | Duration | Easing | Trigger |
|---|---|---|---|---|
| Hero H1 + sub + CTA | opacity 0->1, translateY 16px->0, stagger 80ms | 600ms | ease-out | onload |
| Card hover | translateY 0->-2px, border-color, shadow | 250ms | ease-out | hover |
| Card glow hover | shadow intensify | 250ms | ease-out | hover |
| Button primary hover | bg shift + glow appear | 150ms | ease-out | hover |
| Button press | translateY 0->1px | 75ms | ease-in | active |
| Nav scroll | backdrop-filter blur + bg opacity | 200ms | ease-out | scroll |
| Section reveal | opacity 0->1, translateY 24px->0 | 400ms | ease-out | IntersectionObserver |
| Badge appear | scale 0.9->1, opacity 0->1 | 300ms | spring | mount |
| Code block copy | icon swap, scale 0.9->1 | 150ms | ease-out | click |

### 9.3 Scroll reveal

Implementacja: CSS `@starting-style` feature (Astro static — no JS framework needed) lub lekki IntersectionObserver (<1kb inline script). Elementy wjezdzaja z `translateY(24px)` + `opacity: 0`. Stagger 80ms miedzy sekcjami.

### 9.4 NIE rob

- Brak parallax (perf + motion sickness)
- Brak ciaglych animacji (poza ewentualnego delikatnego pulse na live status)
- Brak animacji `top/left/width/height/margin/padding` — TYLKO `transform` + `opacity`
- Brak heavy entrance animations >800ms
- Brak animacji na kazdym hover — uzyj CSS transition

### 9.5 Reduced-motion

Globalny override w `tokens.css`: `@media (prefers-reduced-motion: reduce)` ustawia durations na `0.01ms`. Per-component: scroll reveals -> instant opacity 1, hero -> brak stagger, cards -> brak translateY.

---

## 10. Page Sections (Landing)

### 10.1 Nav (sticky)

"HAF" wordmark (text, font-weight bold) + nav links (Features / Architecture / Ecosystem / Getting Started / FAQ) + social icons (GitLab, Hive) + CTA "Get Started" (primary sm).

Mobile: hamburger -> fullscreen overlay, focus trap, ESC close.

### 10.2 Hero

Eyebrow badge: "Open Source" lub "PostgreSQL + Blockchain" w Badge primary.
H1: "SQL Access to Blockchain Data" — gradient text (`--gradient-text`), font-weight extrabold, text-7xl desktop / text-6xl mobile.
Subhead: max 60ch, `--color-text-muted`, `--text-lg`.
CTA group: primary "Get Started" (anchor `#getting-started`) + secondary "View on GitLab".
Background: `--gradient-hero-bg` radial glow + subtle grid pattern SVG `opacity: 0.04`.

### 10.3 Social Proof / Logos

"Trusted by Hive ecosystem" lub "Built on" — row of Hive ecosystem logos (5-8): HiveSQL, PeakD, Splinterlands, 3Speak, LeoFinance, Ecency. Grayscale, opacity 0.5 -> hover opacity 1.

### 10.4 Features Grid

Eyebrow: "Features". H2: "Everything you need to build on Hive".
6 FeatureCards w grid 3x2 desktop:
1. SQL Interface — query blockchain z PostgreSQL
2. Real-time Sync — live data od hived
3. Fork Management — automatic fork handling
4. App Isolation — kazda app ma wlasny context
5. Massive Scale — millions of blocks
6. Open Source — MIT licensed, community-driven

### 10.5 Architecture

Diagram/illustration sekcja: visual przedstawiajacy hived -> HAF -> PostgreSQL -> Apps flow. Moze byc TerminalFrame z ASCII art lub SVG schemat.

### 10.6 Ecosystem

Karty z aplikacjami zbudowanymi na HAF. Kazda z logo, nazwa, krotki opis. Link do repo.

### 10.7 Getting Started

TerminalFrame z code snippets. Tabs: Docker / Manual. Krok po kroku.

### 10.8 FAQ

Accordion z pytaniami. Semantic `<details>/<summary>`.

### 10.9 Footer

Logo + description. Links: Docs, GitLab, Hive.io, OpenHive. "Built for Hive blockchain" — "Hive" w `--color-hive`. Copyright.

---

## 11. Breakpoints

| Token | Value | Usage |
|---|---|---|
| `--bp-sm` | `640px` | Small mobile |
| `--bp-md` | `768px` | Tablet |
| `--bp-lg` | `1024px` | Desktop |
| `--bp-xl` | `1280px` | Wide desktop |

Mobile-first: base styles = mobile, media queries `min-width` up.

---

## 12. Accessibility Requirements (AA)

### 12.1 Contrast ratios (vs `--color-bg` `#0a0f1a`)

- `--color-text` `#f1f5f9`: 16.2:1 (pass AAA)
- `--color-text-muted` `#94a3b8`: 7.1:1 (pass AA)
- `--color-text-subtle` `#64748b`: 4.6:1 (pass AA)
- `--color-primary` `#06b6d4` na bg: 8.1:1 (pass AA)
- `--color-primary` as text na `--color-bg-surface` `#131b2e`: 7.5:1 (pass AA)

### 12.2 Focus management

- Focus-visible: `box-shadow: var(--shadow-focus-ring)`. Na `:focus-visible`, NIE `:focus`. NIGDY `outline: none` bez zamiennika.
- Tab order: logiczny, top-down, left-right.
- Skip link: `<a href="#main">Skip to content</a>` w BaseLayout.
- Escape zamyka mobile menu.

### 12.3 Semantic HTML

- `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- H1 raz na stronie.
- `aria-current="page"` na aktywnym linku nav.

### 12.4 Mobile nav

Focus trap + ESC + `aria-modal="true"` + body scroll lock.

### 12.5 Other

- Touch targets >= 44x44px.
- Decorative SVG/icons: `aria-hidden="true"`.
- Code blocks: `aria-label` na copy button.
- `prefers-reduced-motion` respected globalnie.
- `prefers-color-scheme`: dark only (no light mode).

---

## 13. Performance Budgets

| Metric | Budget | Notes |
|---|---|---|
| LCP | < 2.0s | Hero H1 text (Inter font preload) |
| CLS | < 0.05 | Aspect-ratio reserve na images/terminal |
| INP | < 200ms | Minimal JS islands |
| TBT | < 100ms | Static Astro + 2-3 islands |
| Total JS (gzipped) | < 40kb | Astro static, MobileMenu + CopyButton |
| Total CSS (gzipped) | < 15kb | Tailwind 4 JIT + tokens |

**Fonts:** Inter Variable + JetBrains Mono Variable, woff2 lokalne via `@fontsource-variable`, `font-display: swap`, `<link rel="preload">`.

**Images:** WebP/AVIF, hero image (jesli jest) <= 100KB. Ecosystem logos jako SVG.
