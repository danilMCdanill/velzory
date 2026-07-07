// URLs de cada tienda, centralizadas aquí para no repetir el enlace en cada
// raffle/chollo. Por defecto son las webs normales de cada tienda (NO de
// afiliado); cuando entréis en el programa de afiliados de una tienda en
// Awin, envolved su URL con awinLink(merchantId, url) como se hace con
// "adidas Confirmed" — al cambiarlo aquí se actualiza automáticamente en
// todas las fichas que usan esa tienda, sin tocar raffles.ts ni deals.ts.

// Vuestro ID de afiliado en Awin (el mismo para todos los anunciantes).
const AWIN_AFFILIATE_ID = "2970519";

// Arma un enlace de afiliado de Awin: awinmid identifica al anunciante
// (cada tienda tiene el suyo, se ve en su ficha de programa dentro de Awin),
// awinaffid es siempre vuestro AWIN_AFFILIATE_ID, y "p" es la URL de
// destino (se codifica automáticamente).
export function awinLink(merchantId: string, destinationUrl: string): string {
  return `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_AFFILIATE_ID}&clickref=&p=${encodeURIComponent(destinationUrl)}`;
}

// Merchant IDs de los anunciantes que os han aceptado en Awin.
// Añadid aquí cada nuevo anunciante conforme os vayan aceptando.
export const AWIN_MERCHANTS = {
  adidas: "77008",
} as const;

export const STORE_URLS = {
  "Nike SNKRS": "https://www.nike.com/launch",
  SVD: "https://www.sivasdescalzo.com",
  "END. Clothing": "https://www.endclothing.com",
  "Foot District": "https://www.footdistrict.com",
  // Awin: Adidas os aceptó en julio de 2026. Destino genérico a /confirmed
  // por ahora; si queréis enlazar a la ficha de un producto concreto,
  // cambiad la segunda URL de abajo.
  "adidas Confirmed": awinLink(AWIN_MERCHANTS.adidas, "https://www.adidas.com/confirmed"),
  Asics: "https://www.asics.com",
  Zalando: "https://www.zalando.es",
  "JD Sports": "https://www.jdsports.es",
  "Foot Locker": "https://www.footlocker.es",
} as const;
