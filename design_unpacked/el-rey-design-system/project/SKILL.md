---
name: el-rey-design
description: Use this skill to generate well-branded interfaces and assets for El Rey (chess school for kids, Spanish-language), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# El Rey — Design Skill

Read the `README.md` file at the root of this skill for full guidelines (voice, colors, type, iconography, layout rules, dos & don'ts). Then explore the other available files:

- `colors_and_type.css` — drop-in CSS custom properties for palette + type + spacing + shadows. Link this at the top of any HTML you produce.
- `fonts/` — self-hosted Inter (18pt) TTFs. Nunito is loaded via Google Fonts.
- `assets/logos/` — combination mark + isotype in all 7 brand colorways.
- `assets/pieces/` — chess piece icons (Rey, Reina, Torre, Alfil, Caballo, Peón) × 7 colors.
- `assets/values/` — six brand pillar icons (Material Symbols glyphs).
- `preview/` — small specimen cards for each design token group.
- `ui_kits/web/` — full marketing-site UI kit with reusable React components.

## How to use this skill

If creating visual artifacts (slides, mocks, throwaway prototypes, marketing pages, decks, etc.):
1. Copy assets out of this skill into your project.
2. Link `colors_and_type.css` and use semantic tokens (`--fg-1`, `--bg`, `--er-verde-pino`, etc.) — never raw hex.
3. Match the voice: institutional but close & human, Spanish, first-person plural ("acompañamos…"). No emoji. Sentence case.
4. Pull components from `ui_kits/web/` rather than reinventing.

If working on production code, copy assets in and read the brand rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build or design (a landing page? an admissions form? a class brochure? a parent email?), ask a few clarifying questions about audience and length, and act as an expert designer who outputs HTML artifacts or production code, depending on the need. Default to Spanish copy unless told otherwise.
