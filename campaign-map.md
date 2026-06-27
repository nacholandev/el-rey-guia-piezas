# campaign-map.md — Secuencia de lanzamiento

> Actualizar después de CADA ship.

## Estado
- Fase actual: **Construir identidad + presencia digital coherente**
- Primer hito objetivo: integración con la **Federación Venezolana de Ajedrez**

## Secuencia (orden de envío)
| # | Pieza | Estado | Notas |
|---|-------|--------|-------|
| 1 | brand.md (fundamento) | ✅ shipped | destilado del brief |
| 2 | Landing lead magnet "movimientos de las piezas" | ✅ shipped | live en Vercel |
| 3 | Sitio web MVP (Home/Nosotros/Programa/Contacto/Landing ads) | ✅ shipped | en web/, estático, 1 producto |
| 4 | Landing + lead magnet "El lenguaje del ajedrez" (notación) | ✅ shipped | /notacion → /notacion/guia, interactivo, Kit conectado |
| 5 | — definir — | ⬜ | reseñas reales en landing piezas; desplegar web/ |

## Shipped log
- 2026-06-03 — brand.md creado desde el Brief de Marca.
- 2026-06-03 — Design system El Rey implementado (tokens, fuentes, assets) en landing/.
- 2026-06-03 — Landing lead magnet desplegada: https://el-rey-guia-piezas.vercel.app
- 2026-06-12 — Sitio web MVP en web/ — 5 páginas (Home, Nosotros, Programa=producto único,
  Contacto, Landing ads) implementadas con el-rey-design-system. Estructura tipo Shopify
  "Refresh", 1 producto (Programa El Rey, $40/mes). Verificado: 0 enlaces rotos, JS OK.
  Pendiente: backend de formularios + deploy.
- 2026-06-27 — Landing + lead magnet de notación algebraica desplegados a producción.
  Landing /notacion (captura → Kit form 9615936, doble opt-in → redirige a la guía).
  Lead magnet interactivo /notacion/guia (tablero de coordenadas, constructor de
  jugada, tarjetas de símbolos, quiz de 5 preguntas). Vanilla JS sobre el design
  system. Verificado en desktop + móvil con navegador real, 0 errores de consola.
  La landing de movimientos de piezas sigue intacta en /.
