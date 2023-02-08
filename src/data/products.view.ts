import { products as pages } from "./products";

export const viewProducts = {
  principal: {
    products: pages.slice(0, 3),
  },
  slider1: {
    products: pages.slice(1, 6),
  },
  slider2: {
    products: pages.slice(6, 12),
  },
  secondary: {
    products: pages.slice(9, 12),
  },
} as const;