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
