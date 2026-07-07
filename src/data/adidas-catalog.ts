import type { CatalogProduct } from "./types";
import { awinLink, AWIN_MERCHANTS } from "./stores";

// Los más vendidos de Adidas, con enlace de afiliado de Awin. Aprobados por
// el usuario en julio de 2026 (flujo de CLAUDE.md: investigar → borrador en
// el chat → aprobación → publicar).
//
// Los enlaces apuntan a la página de FAMILIA del modelo en adidas.es (ej.
// /samba) y no a la ficha de un colorway concreto: las fichas mueren cuando
// se agota el stock (404 = clic de afiliado perdido) y las familias son
// estables durante años. El colorway y código de estilo de cada tarjeta
// corresponden a la foto/versión de referencia.
//
// TODO(fotos): faltan las fotos de 5 modelos (salen con placeholder 👟).
// Descargadlas (StockX u otra fuente, fondo blanco) en public/images/ con
// los nombres comentados abajo y añadid el campo `image` correspondiente.
const adidas = (path: string) => awinLink(AWIN_MERCHANTS.adidas, `https://www.adidas.es${path}`);

export const adidasCatalog: CatalogProduct[] = [
  {
    title: 'Samba OG "Cloud White"',
    brand: "Adidas",
    price: "120 €",
    url: adidas("/samba"),
    affiliate: true,
    image: "/images/adidas-samba-og-cloud-white.jpg",
    styleCode: "B75806",
    colorway: "Cloud White/Core Black",
  },
  {
    title: 'Gazelle "Core Black"',
    brand: "Adidas",
    price: "100 €",
    url: adidas("/gazelle"),
    affiliate: true,
    // image: "/images/adidas-gazelle-core-black.jpg",
    styleCode: "BB5476",
    colorway: "Core Black/Cloud White/Gold Metallic",
  },
  {
    title: 'Campus 00s "Core Black"',
    brand: "Adidas",
    price: "110 €",
    url: adidas("/campus"),
    affiliate: true,
    // image: "/images/adidas-campus-00s-core-black.jpg",
    styleCode: "HQ8708",
    colorway: "Core Black/Cloud White",
  },
  {
    title: 'Handball Spezial "Light Blue"',
    brand: "Adidas",
    price: "110 €",
    url: adidas("/spezial"),
    affiliate: true,
    // image: "/images/adidas-handball-spezial-light-blue.jpg",
    styleCode: "BD7632",
    colorway: "Light Blue/Cloud White/Gum",
  },
  {
    title: 'Superstar "Cloud White"',
    brand: "Adidas",
    price: "110 €",
    url: adidas("/superstar"),
    affiliate: true,
    // image: "/images/adidas-superstar-cloud-white.jpg",
    styleCode: "EG4958",
    colorway: "Cloud White/Core Black",
  },
  {
    title: 'Stan Smith "White/Green"',
    brand: "Adidas",
    price: "110 €",
    url: adidas("/stan_smith"),
    affiliate: true,
    // image: "/images/adidas-stan-smith-white-green.jpg",
    styleCode: "FX5502",
    colorway: "Cloud White/Green",
  },
];
