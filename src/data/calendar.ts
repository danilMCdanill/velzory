import type { CalendarEntry } from "./types";

// TODO(feed): igual que raffles.ts/deals.ts, este array es el "feed" del
// calendario por ahora. Está pensado para que, cuando tengáis una fuente
// externa (API de un partner, scraping propio, etc.), podáis sustituir este
// `export const calendarEvents = [...]` por una función `async` que la
// consulte en build time y devuelva un array con esta misma forma
// (CalendarEntry en types.ts) — los componentes que lo consumen no
// necesitarían cambiar.
//
// Los 3 ejemplos de abajo son productos reales ya publicados en raffles.ts
// (no son lanzamientos inventados). Las fechas exactas SÍ son ilustrativas:
// las calculé a partir del texto relativo que ya tenía cada raffle
// ("cierra en 2 d", "abre mañana"...) tomando como referencia la fecha de
// hoy (3 de julio de 2026) — no vienen de una fuente oficial. Corregidlas
// por la fecha real exacta (y añadid la hora si la sabéis) antes de daros
// por buenos estos 3 eventos; el resto de raffles reales los añadís
// vosotros siguiendo este mismo formato.
export const calendarEvents: CalendarEntry[] = [
  {
    id: "air-jordan-4-bred-reimagined-close",
    title: 'Air Jordan 4 "Bred Reimagined"',
    brand: "Nike",
    type: "raffle-close",
    date: "2026-07-05", // ejemplo: ajustar a la fecha/hora real de cierre
    price: "210 €",
    image: "/images/air-jordan-4-bred-reimagined.jpg",
    raffleSlug: "air-jordan-4-bred-reimagined",
    notes: "Cierre del raffle en Nike SNKRS y SVD.",
  },
  {
    id: "new-balance-1906r-silver-open",
    title: 'New Balance 1906R "Silver"',
    brand: "New Balance",
    type: "raffle-open",
    date: "2026-07-04", // ejemplo: ajustar a la fecha/hora real de apertura
    price: "160 €",
    image: "/images/new-balance-1906r-silver.jpg",
    raffleSlug: "new-balance-1906r-silver",
    notes: "Apertura de entradas en END. Clothing y Foot District.",
  },
  {
    id: "adidas-samba-wales-bonner-close",
    title: "Adidas Samba x Wales Bonner",
    brand: "Adidas",
    type: "raffle-close",
    date: "2026-07-08", // ejemplo: ajustar a la fecha/hora real de cierre
    price: "180 €",
    image: "/images/adidas-samba-wales-bonner.jpg",
    raffleSlug: "adidas-samba-wales-bonner",
    notes: "Cierre del raffle en adidas Confirmed y SVD.",
  },
];
