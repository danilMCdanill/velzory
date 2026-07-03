import type { Deal } from "./types";
import { STORE_URLS } from "./stores";

// TODO(feed): este array estático es el "feed" de chollos por ahora. Cuando
// tengáis una fuente externa (scraping propio, API de un partner de
// afiliación, etc.), lo natural es sustituir este `export const deals = [...]`
// por una función que llame a esa fuente en build time (Astro sigue siendo
// estático) y devuelva objetos con esta misma forma (ver Deal en types.ts),
// para no tener que tocar los componentes que ya consumen `deals`.
//
// TODO(afiliados): el campo `url` de cada chollo viene de STORE_URLS
// (stores.ts) y hoy es la web normal de la tienda, NO un enlace de afiliado.
// Cuando tengáis contratos de afiliación, actualizad STORE_URLS — no hace
// falta tocar este array. `affiliate` ya está puesto en `true` para cuando
// llegue ese momento.
export const deals: Deal[] = [
  {
    slug: "adidas-samba-og-cloud-white",
    title: 'Adidas Samba OG "Cloud White"',
    brand: "Adidas",
    oldPrice: "120 €",
    newPrice: "83 €",
    discount: "-31%",
    store: "Zalando",
    url: STORE_URLS.Zalando,
    affiliate: true,
    image: "/images/adidas-samba-og-cloud-white.jpg",
    description:
      "El modelo más buscado de adidas Originals, en su colorway blanco más versátil. Un básico de fondo de armario que rara vez baja de precio.",
    styleCode: "B75806",
    colorway: "Cloud White/Core Black",
    sizes: "EU 36 – 46",
  },
  {
    slug: "nike-air-force-1-07-triple-white",
    title: 'Nike Air Force 1 \'07 "Triple White"',
    brand: "Nike",
    oldPrice: "119 €",
    newPrice: "94 €",
    discount: "-21%",
    store: "JD Sports",
    url: STORE_URLS["JD Sports"],
    affiliate: true,
    image: "/images/nike-air-force-1-07-triple-white.jpg",
    description:
      "El clásico atemporal de Nike. El colorway 'Triple White' combina con todo y es de los más repuestos, pero rara vez tiene descuento tan alto.",
    styleCode: "315122-111",
    colorway: "White/White",
    sizes: "EU 36 – 47.5",
  },
  {
    slug: "air-jordan-1-low-bred-toe",
    title: 'Air Jordan 1 Low "Bred Toe"',
    brand: "Nike",
    oldPrice: "130 €",
    newPrice: "99 €",
    discount: "-24%",
    store: "Foot Locker",
    url: STORE_URLS["Foot Locker"],
    affiliate: true,
    image: "/images/air-jordan-1-low-bred-toe.jpg",
    description:
      'Versión low del popular colorway "Bred Toe", con el bloque de colores rojo y negro característico sobre base blanca.',
    styleCode: "553558-612",
    colorway: "White/Black-Varsity Red",
    sizes: "EU 38 – 45",
  },
  {
    slug: "adidas-gazelle-bold-pink-glow",
    title: 'Adidas Gazelle Bold "Pink Glow"',
    brand: "Adidas",
    oldPrice: "110 €",
    newPrice: "72 €",
    discount: "-35%",
    store: "Zalando",
    url: STORE_URLS.Zalando,
    affiliate: true,
    image: "/images/adidas-gazelle-bold-pink-glow.jpg",
    description:
      "La versión plataforma de la Gazelle clásica, en un tono rosa vibrante que se ha convertido en tendencia entre el público más joven.",
    styleCode: "IE0877",
    colorway: "Pink Glow/Cloud White",
    sizes: "EU 36 – 41.5",
  },
];
