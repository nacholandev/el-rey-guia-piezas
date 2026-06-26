# El Rey — Design System

**Escuela de Ajedrez El Rey** — *Formamos mentes estratégicas en un entorno humano, cercano y estimulante.*

A space where children learn to think strategically through chess. The brand is institutional yet close & human; modern, elegant, minimal. Voice mixes the gravitas of a school with the warmth of a mentor who walks alongside the student.

> "El Rey es un lugar donde el fracaso no define, sino que enseña."
> *— Guía de Marca, p. 2*

## Sources

- `uploads/Guía de Marca - El Rey.pdf` — 21-page official brand guide (concept, colors, typography, logo hierarchy, do's and don'ts).
- Logo SVGs in 7 monochrome variants (Verde, Blanco, Crema, Malva, Azul, Gris, Negro) — full lockup + isotype.
- 5 chess piece icons × 7 colors (Rey, Reina, Alfil, Caballo, Torre, Peón) — used as proxies for hierarchy and decoration.
- 6 brand value icons (Acompañamiento, Cercanía, Confianza, Crecimiento, Formación, Pensamiento Estratégico).

> Note: the chess piece and value icons were exported as **Material Symbols Outlined** glyphs (24px, viewBox `0 -960 960 960`). The brand uses Material Symbols as its icon system rather than custom-drawn chess imagery.

---

## Index

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest for portable use
├── colors_and_type.css        ← CSS custom properties: palette + type + spacing
├── fonts/                     ← Inter TTFs (self-hosted, 18pt optical, w300–700)
├── assets/
│   ├── logos/                 ← combination mark + isotype in all 7 colorways
│   ├── pieces/                ← 5 chess pieces × 7 colors (Material Symbols)
│   └── values/                ← 6 brand value icons
├── preview/                   ← Design System tab cards (small HTML specimens)
├── assets/images/             ← reference photography (architecture + chess)
├── Galería Referencial.html   ← photographic art-direction moodboard
├── ui_kits/
│   └── web/                   ← Marketing website UI kit (Inicio, Programa, etc.)
└── uploads/                   ← original source files
```

---

## Content fundamentals

- **Brand name:** **El Rey.** Never "Escuela El Rey" — *escuela* is what we do, not what we're called. In running prose it's fine to write "la escuela" (lowercase, as a common noun: *"la escuela acompaña…"*) but the proper brand name is always and only "El Rey".
- **Language:** Spanish (Spain/Latin neutral). The brand operates in Spanish; do not translate to English unless asked.
- **Voice:** *Institucional pero cercano y humano.* It sounds like a thoughtful school director, not a marketer. Reflective, calm, intentional.
- **Person:** First-person plural — **"nosotros"** ("acompañamos", "formamos", "creemos"). The school speaks as a team that walks beside the family.
- **Casing:** Sentence case for headings and UI. **Avoid ALL-CAPS** except in eyebrow labels with letterspacing. Avoid title case.
- **Sentence length:** Short, declarative. Often one idea per sentence. Comfortable with white space. Avoid long compound sentences.
- **Vocabulary:** *acompañar, formar, criterio, carácter, pensar, paso, propósito, mente, ritmo.* Avoid corporate jargon ("solución", "transformación digital", "synergy"). Avoid hype ("revolucionario", "increíble").
- **Emoji & exclamation:** Almost never. A single exclamation point is permissible for warmth ("¡Bienvenidos!") but the default is calm prose. No emoji.
- **Numerals:** Spell out one through nine inline; numerals for ages, class sizes, hours.
- **Punctuation note:** Spanish opening punctuation always (`¿`, `¡`).
- **Examples (canonical):**
  - ✓ *"Aquí no se trata de memorizar jugadas, sino de entender, analizar y tomar decisiones propias."*
  - ✓ *"Acompañamos cada paso del aprendizaje para construir confianza, carácter y propósito."*
  - ✓ *"Donde cada niño puede encontrar su lugar."*
  - ✗ *"¡Aprende ajedrez con los mejores! 🔥"* — too sales-y, breaks tone.

---

## Visual foundations

### Colors

7-color institutional palette. **Verde Pino Oscuro (#1C3D34)** is the primary brand color and the default text color on light surfaces; **Crema (#F3EFE6)** is the primary light surface (used in preference to pure white for warmth); **Blanco** and **Negro** are functional. The remaining three (Malva, Azul Marino, Gris Frío) are secondary accents to be used with restraint per the brand guide.

| Token | Hex | Use |
|---|---|---|
| `--er-verde-pino` | `#1C3D34` | Primary brand · text on light · dark surfaces |
| `--er-crema` | `#F3EFE6` | Primary light surface · preferred over pure white |
| `--er-malva` | `#6B4966` | Editorial accent · warm contrast on dark |
| `--er-azul-marino` | `#1B2A4A` | Premium / depth · secondary dark surface |
| `--er-gris-frio` | `#8C8F94` | Tertiary text · footer · low-hierarchy marks |
| `--er-blanco` | `#FFFFFF` | Functional / print / max contrast |
| `--er-negro` | `#000000` | Functional / print — *prefer Verde Pino for identity* |

### Logo lockup rule (important)

**There is no horizontal variant of the logo.** The official lockup is square/vertical (isotipo above wordmark). When vertical space isn't available, do **not** invent a horizontal lockup by placing the isotipo next to a typeset "El Rey". Instead, use **one** of these two:

1. **Isotipo alone** — the strongest fallback. Recognizable as a standalone mark.
2. **"El Rey" wordmark alone** — typeset in Nunito 800 (or whichever brand weight fits the context). Use only when iconography is inappropriate.

Examples:
- Site header (tight horizontal space) → isotipo only.
- Footer / signature blocks (vertical space available) → full vertical lockup at ≥ 80px tall.
- Email signature / favicon → isotipo only.

### Typography

- **Primary (display / headings):** **Nunito** — rounded humanist sans, used for brand presence. Weights 400–900 + italics. **Self-hosted** from `fonts/Nunito-*.ttf`.
- **Secondary (body / UI):** **Inter** — neutral workhorse for body, UI, captions. Weights 300–700 + italics. **Self-hosted** from `fonts/Inter_18pt-*.ttf` (18pt optical size).

### Spacing & layout

- 4-point spacing scale (`--sp-1`…`--sp-10`). Generous breathing room; the brand is minimalist — let things breathe.
- Editorial layout sensibility: wide outer margins, narrow text measure (≈ 60–72ch for body), clear vertical rhythm.
- Cards: soft `--radius-md` (12px) to `--radius-lg` (20px); rarely sharp corners, rarely pill-shaped except CTAs.

### Photography

The brand's photographic reference is the **fusion of architecture and chess**: sculptural piece sets (Bauhaus, Man Ray, skyline sets) and classical architecture (Roman) that teach proportion, rhythm and permanence. Editorial and elegant, **full natural color, no filters** — the environment supplies the tone, not a post effect.

- **Art direction:** reduced form (piece as pure volume), geometry (the board grid as a through-line), high contrast (black + wood, light + shadow), generous negative space.
- **Treatment:** images run at full natural color. When a photo sits under text (e.g. hero), a subtle verde-pino *protection gradient* is allowed **only** in the text zone — never a full-image tint.
- **Reference library:** `assets/images/` holds the 8 reference shots. See `Galería Referencial.html` for the categorized moodboard + usage rules.
- **Don'ts:** no saturated filters or color casts, no busy backgrounds, no chaotic angles, no glossy plastic pieces that break the sober tone.

### Backgrounds

- Solid color blocks are the **default**. Crema on top, Verde Pino for inverse / hero, occasional Malva or Azul for editorial pieces.
- No gradients except very subtle protection gradients over photography. No bluish-purple gradients. No patterns or textures.
- Photography (when used) is warm, soft-focus, human — kids playing chess, hands on pieces, intergenerational. Not stocky.
- Chess pieces (the Material Symbol icons in brand colors) may be used as oversized decorative marks at low opacity (8–14%) or as small accents.

### Corner radii

Cards and inputs are gently rounded (12–20px). Buttons use 12px or pill. Avatars are circular. **Avoid the rounded-corners-plus-colored-left-border card trope.**

### Borders & lines

Hairlines only — `--line` (a deeper crema) for separators on crema, `--line-strong` (verde-pino @ 16%) for emphasis. No heavy borders.

### Shadows

Four-tier elevation, all tinted toward verde pino (not neutral black) for warmth. `--shadow-1` for resting cards, `--shadow-3` for hover/lift, `--shadow-4` for floating menus and modals.

### Animation

Subtle, never bouncy. Default `--dur-base` (220ms) with `--ease-standard`. Fade + tiny y-translate for entrances. No spring physics, no scale-up bounces. Page transitions are simple cross-fades.

### Hover / press

- **Hover:** primary buttons → slight darkening of fill (-6% lightness) + `--shadow-2`. Secondary buttons → fill becomes `--er-verde-pino-10`. Links → underline appears or thickens.
- **Press:** subtle `transform: translateY(1px)` and shadow flattens. No aggressive scale-down.
- **Focus:** 2px `--focus-ring` offset by 2px — the verde-pino at 32% opacity.

### Transparency & blur

Used sparingly. Modal backdrops use a verde-pino tint at 40% with `backdrop-filter: blur(8px)`. Sticky headers may use crema at 80% with backdrop-blur. Otherwise prefer solid color.

### Layout rules

- Header is sticky on scroll; condenses with backdrop blur.
- Body content lives in a max 1200px container with comfortable side gutters.
- Hero sections use full-bleed color blocks with the content in the centered container.

---

## Iconography

The brand uses **Material Symbols Outlined** as its icon system. Evidence: all chess piece and value SVGs in the source materials are 24px icons with `viewBox="0 -960 960 960"` and filled with brand colors. Stroke weight is the default Material "Outlined" style.

### How to draw icons

- **Preferred:** Material Symbols Outlined font, weight 400, optical size 24, grade 0.
- **CDN:** `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />` — then `<span class="material-symbols-outlined">school</span>`.
- **Colors:** match foreground — verde-pino on light, crema on dark. Match the brand's monochrome restraint; **do not** use colored icons.
- **Sizes:** 16, 20, 24, 32, 48px. Default 24px.
- **Chess pieces** (Rey, Reina, Alfil, Caballo, Torre, Peón) are pre-exported as SVGs in `assets/pieces/` for each colorway — these are large decorative usages, not inline icons.
- **Brand value icons** (`assets/values/`) are pre-exported Material Symbols mapped to each pillar:
  - Acompañamiento → *handshake / supportive duo*
  - Cercanía → *home / proximity*
  - Confianza → *shield with person*
  - Crecimiento → *growth / sprout*
  - Formación → *graduation cap*
  - Pensamiento Estratégico → *psychology / brain*

### Emoji & unicode

**Never.** Emoji break the institutional tone. Unicode glyphs (★, →) are acceptable as functional ornaments but use Material Symbols where you can.

---

## How to use this system

1. Link `colors_and_type.css` at the top of any page.
2. Use brand value tokens (`--er-verde-pino`, etc.) and semantic tokens (`--fg-1`, `--bg`) for everything. Avoid raw hex.
3. Pull logos and icons from `assets/`. Do not redraw the king.
4. For composed UI patterns, see `ui_kits/web/` — copy components from there rather than re-inventing.
5. Match the voice. Read the Content Fundamentals section before writing any copy.

---

## UI Kits

- **`ui_kits/web/`** — marketing website kit (Inicio, Programa, Metodología, Contacto). Header, hero, value grid, testimonial, footer, CTA, form fields, buttons.

---

## Open questions for the designer

- **Both brand fonts are self-hosted** from the TTFs in `fonts/` — Nunito (display, 400–900 + italics) and Inter (body, 300–700 + italics).
- **Reference photography provided.** 8 architecture+chess references live in `assets/images/` with a categorized moodboard in `Galería Referencial.html`. These define the *style* — actual El Rey lifestyle/classroom photography (kids at the board) is still welcome to complement them.
- **No sample slides or product screenshots** — the website UI kit is built from brand-guide first principles, not from existing screens. If there is a live site or Figma, share it and we'll align the kit pixel-for-pixel.
- **Tagline/marketing copy** beyond the brand-guide quotes — we've written placeholder copy in the brand voice. Replace as needed.
