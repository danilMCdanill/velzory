// URLs reales (NO de afiliado) de cada tienda, centralizadas aquí para no
// repetir el enlace en cada raffle/chollo. Cuando tengáis contratos de
// afiliación, sustituid el valor correspondiente por el enlace/deeplink de
// afiliado que os dé la red (Awin, CJ, etc.) — al cambiarlo aquí se
// actualiza automáticamente en todas las fichas que usan esa tienda, sin
// tener que tocar raffles.ts ni deals.ts.
export const STORE_URLS = {
  "Nike SNKRS": "https://www.nike.com/launch",
  SVD: "https://www.sivasdescalzo.com",
  "END. Clothing": "https://www.endclothing.com",
  "Foot District": "https://www.footdistrict.com",
  "adidas Confirmed": "https://www.adidas.com/confirmed",
  Asics: "https://www.asics.com",
  Zalando: "https://www.zalando.es",
  "JD Sports": "https://www.jdsports.es",
  "Foot Locker": "https://www.footlocker.es",
} as const;
