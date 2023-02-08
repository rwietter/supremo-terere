type Product = {
  id: number,
  slug: string,
  title: string,
  price: number,
  image: string,
  text: string,
};

export type Products = {
  products: {
    principal?: {
      products: Array<Product>;
    }
    slider1?: {
      products: Array<Product>;
    }
    slider2?: {
      products: Array<Product>;
    }
    secondary?: {
      products: Array<Product>;
    }
  }
}