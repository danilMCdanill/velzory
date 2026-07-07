export interface Store {
  name: string;
  url: string;
  affiliate: boolean;
}

export interface Raffle {
  slug: string;
  title: string;
  brand: string;
  price: string;
  image?: string;
  images?: string[];
  description?: string;
  styleCode?: string;
  colorway?: string;
  sizes?: string;
  status: {
    text: string;
    type: "warn" | "accent";
  };
  stores: Store[];
}

// Un evento del calendario de raffles: la fecha en la que abre/cierra un
// sorteo o cae un lanzamiento. Se separa de Raffle porque un mismo raffle
// puede tener varias fechas relevantes (apertura de entradas, cierre,
// lanzamiento) y porque este es el formato pensado para recibirse desde un
// feed externo en el futuro — ver el comentario en calendar.ts.
export interface CalendarEntry {
  id: string;
  title: string;
  brand: string;
  type: "raffle-open" | "raffle-close" | "release";
  date: string; // formato ISO 8601: "YYYY-MM-DD"
  time?: string; // hora local opcional, formato "HH:MM"
  timezone?: string; // ej. "Europe/Madrid"; si se omite, se asume hora española
  price?: string;
  image?: string;
  raffleSlug?: string; // si ya existe ficha en /raffles/[slug], para enlazarla
  sourceUrl?: string; // enlace a la tienda o fuente original del dato
  notes?: string;
}

// Un producto de catálogo permanente (no ligado a un drop ni a una oferta
// puntual): los "más vendidos" de una marca, con enlace de afiliado directo
// a la tienda. Lo usan las páginas de marca como /adidas.
export interface CatalogProduct {
  title: string;
  brand: string;
  price: string;
  url: string;
  affiliate: boolean;
  image?: string;
  styleCode?: string;
  colorway?: string;
}

export interface Deal {
  slug: string;
  title: string;
  brand: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  store: string;
  url: string;
  affiliate: boolean;
  image?: string;
  images?: string[];
  description?: string;
  styleCode?: string;
  colorway?: string;
  sizes?: string;
}
