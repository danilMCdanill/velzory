export interface Store {
  name: string;
  url: string;
  affiliate: boolean;
}

export interface Raffle {
  title: string;
  brand: string;
  price: string;
  image?: string;
  status: {
    text: string;
    type: "warn" | "accent";
  };
  stores: Store[];
}

export interface Deal {
  title: string;
  brand: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  store: string;
  url: string;
  affiliate: boolean;
  image?: string;
}
