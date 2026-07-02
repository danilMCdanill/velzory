import type { Raffle } from "./types";

export const raffles: Raffle[] = [
  {
    title: 'Air Jordan 4 "Bred Reimagined"',
    brand: "Nike",
    price: "210 €",
    status: { text: "Cierra en 2 d", type: "warn" },
    stores: [
      { name: "Nike SNKRS", url: "#", affiliate: false },
      { name: "SVD", url: "#", affiliate: true },
    ],
  },
  {
    title: 'New Balance 1906R "Silver"',
    brand: "New Balance",
    price: "160 €",
    status: { text: "Abre mañana", type: "accent" },
    stores: [
      { name: "END. Clothing", url: "#", affiliate: true },
      { name: "Foot District", url: "#", affiliate: true },
    ],
  },
  {
    title: "Adidas Samba x Wales Bonner",
    brand: "Adidas",
    price: "180 €",
    status: { text: "Cierra en 5 d", type: "warn" },
    stores: [
      { name: "adidas Confirmed", url: "#", affiliate: false },
      { name: "SVD", url: "#", affiliate: true },
    ],
  },
  {
    title: 'Asics Gel-1130 "Cream"',
    brand: "Asics",
    price: "130 €",
    status: { text: "Abre en 3 d", type: "accent" },
    stores: [
      { name: "Asics", url: "#", affiliate: true },
      { name: "Foot District", url: "#", affiliate: true },
    ],
  },
];
