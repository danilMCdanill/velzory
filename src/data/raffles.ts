import type { Raffle } from "./types";

export const raffles: Raffle[] = [
  {
    slug: "air-jordan-4-bred-reimagined",
    title: 'Air Jordan 4 "Bred Reimagined"',
    brand: "Nike",
    price: "210 €",
    image: "/images/air-jordan-4-bred-reimagined.jpg",
    description:
      'Reinterpretación del icónico Air Jordan 4 "Bred" con detalles renovados en el diseño original de Tinker Hatfield. Una de las colaboraciones más buscadas del año.',
    styleCode: "FV5029-006",
    colorway: "Black/Fire Red-Cement Grey-Summit White",
    sizes: "EU 38.5 – 47.5",
    status: { text: "Cierra en 2 d", type: "warn" },
    stores: [
      { name: "Nike SNKRS", url: "#", affiliate: false },
      { name: "SVD", url: "#", affiliate: true },
    ],
  },
  {
    slug: "new-balance-1906r-silver",
    title: 'New Balance 1906R "Silver"',
    brand: "New Balance",
    price: "160 €",
    image: "/images/new-balance-1906r-silver.jpg",
    description:
      "El 1906R combina la amortiguación ABZORB con un diseño retro-futurista. Este colorway plateado es uno de los lanzamientos más esperados de la línea.",
    styleCode: "M1906RB",
    colorway: "Silver/Grey",
    sizes: "EU 39 – 46",
    status: { text: "Abre mañana", type: "accent" },
    stores: [
      { name: "END. Clothing", url: "#", affiliate: true },
      { name: "Foot District", url: "#", affiliate: true },
    ],
  },
  {
    slug: "adidas-samba-wales-bonner",
    title: "Adidas Samba x Wales Bonner",
    brand: "Adidas",
    price: "180 €",
    image: "/images/adidas-samba-wales-bonner.jpg",
    description:
      "La colaboración entre adidas Originals y la diseñadora Grace Wales Bonner reinventa la Samba clásica con materiales premium y detalles artesanales.",
    styleCode: "IF6942",
    colorway: "Core Black/Cream White/Gold Metallic",
    sizes: "EU 36 – 45",
    status: { text: "Cierra en 5 d", type: "warn" },
    stores: [
      { name: "adidas Confirmed", url: "#", affiliate: false },
      { name: "SVD", url: "#", affiliate: true },
    ],
  },
  {
    slug: "asics-gel-1130-cream",
    title: 'Asics Gel-1130 "Cream"',
    brand: "Asics",
    price: "130 €",
    image: "/images/asics-gel-1130-cream.jpg",
    description:
      "El Gel-1130 recupera el ADN running de los 2000 con una paleta de tonos crema muy versátil, fácil de combinar con cualquier look.",
    styleCode: "1201A255-102",
    colorway: "Cream/Birch",
    sizes: "EU 38 – 46",
    status: { text: "Abre en 3 d", type: "accent" },
    stores: [
      { name: "Asics", url: "#", affiliate: true },
      { name: "Foot District", url: "#", affiliate: true },
    ],
  },
];
