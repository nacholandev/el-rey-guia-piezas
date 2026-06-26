# landing-page-brief.md — El Rey

## Producto
- **Marca:** El Rey (academia de ajedrez). Nunca "Escuela El Rey".
- **Pieza:** Landing lead magnet — guía gratuita para padres.
- **Tema:** Cómo enseñar a los niños los movimientos de las piezas de ajedrez.
- **Modo:** Lead-magnet (una pantalla, captura de email). Gratis.
- **Idioma:** Español.

## Oferta (lead magnet)
- **Promesa:** En una tarde tu hijo aprende cómo se mueve cada pieza — y tú
  aprendes a enseñárselo, aunque no sepas jugar.
- **Entregable:** Guía descargable. Una pieza por página (rey, dama, torre,
  alfil, caballo, peón): el movimiento en lenguaje de niño + un mini-reto.
- **CTA único:** Descargar la guía (captura email).
- **Sin spam, sin precio, sin FAQ.**

## Audiencia
Padres de niños 5–14 que buscan estructura y un entorno sin juicio. El niño
tiene alto potencial, a veces dificultad de atención. El padre decide; muchas
veces no sabe jugar ajedrez.

## Voice Profile
Arquetipo Sabio. Institucional pero cercano y humano. Autoridad sin rigidez.
Primera persona plural ("acompañamos"). Sentence case. Sin emoji. Em-dash
cerrado (palabra—palabra). El ajedrez es el medio, no el fin. Habla al padre,
valida al niño, nunca infantiliza.

## Design
Sistema de marca El Rey (design_unpacked/el-rey-design-system).
- Tokens: project/colors_and_type.css (Verde Pino #1C3D34, Crema #F3EFE6,
  Malva #6B4966, Azul Marino #1B2A4A).
- Fuentes self-hosted: Nunito (display) + Inter (body).
- Logo: vertical completo O isotipo. NUNCA lockup horizontal isotipo+texto.
- Assets: piezas SVG (7 colorways), imágenes arquitectura+ajedrez (editorial,
  alto contraste, color natural).

## Tool Preferences
- Deploy: Vercel CLI (npx vercel, Node instalado vía winget). Proyecto:
  nacholandev/el-rey-guia-piezas.
- Email capture: ninguno aún → form funcional con TODO marcado en app.js.

## Live
- URL producción: https://el-rey-guia-piezas.vercel.app
- Desplegado: 2026-06-03. readyState READY.
- Re-deploy: `npx vercel deploy --prod --yes` desde la raíz del proyecto.
