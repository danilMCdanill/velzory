# DropAlert ES

Agregador de sneakers en español: raffles/lanzamientos y chollos/ofertas, con monetización por afiliados. Sitio estático (Astro), sin base de datos ni backend.

## Estructura de datos

- `src/data/types.ts` — interfaces `Raffle`, `Deal`, `Store`.
- `src/data/raffles.ts` — array `raffles`.
- `src/data/deals.ts` — array `deals`.

Cada entrada necesita un `slug` único (ej. `"air-jordan-4-bred-reimagined"`) — a partir de él Astro genera automáticamente su subpágina en `/raffles/[slug]/` o `/chollos/[slug]/` (ver `src/pages/raffles/[slug].astro` y `src/pages/chollos/[slug].astro`). No hace falta crear una página por cada zapatilla a mano.

Campos opcionales para la ficha completa: `description`, `styleCode`, `colorway`, `sizes`, `images` (array de URLs; si se omite, se usa un emoji de zapatilla como placeholder).

## Flujo para añadir zapatillas nuevas

Acordado explícitamente con el usuario (fase 3 del proyecto):

1. Cuando se pida buscar próximos lanzamientos o chollos, Claude investiga (búsqueda web) y **propone un borrador en el chat** con los datos encontrados.
2. El usuario revisa y aprueba (o corrige) el borrador.
3. Solo entonces se añade la entrada a `raffles.ts`/`deals.ts`.

**No publicar directamente sin revisión humana.** Motivo: los enlaces de tienda pueden ser de afiliado (monetización real) y un precio, fecha o enlace erróneo publicado sin revisar tiene coste económico, no es un error cosmético.

Al redactar descripciones, usar texto propio a partir de datos objetivos (nombre, fecha, colorway, precio, código de estilo) en vez de copiar literalmente el contenido editorial de otros sitios (ej. SoleRetriever), para evitar problemas de derechos de autor.

## Enlaces pendientes de rellenar

- `TELEGRAM_URL` y `WHATSAPP_URL` en `src/pages/index.astro` — placeholders hasta tener los canales reales.
- URLs `"#"` en `raffles.ts`/`deals.ts` — sustituir por los enlaces reales de cada tienda.
