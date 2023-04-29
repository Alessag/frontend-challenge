import { ProductCategory } from "./enums";

export interface Product {
  id: string;
  name: string;
  brand: string;
  reviews: number;
  originalPrice: number;
  currentPrice: number;
  image: string;
  category: ProductCategory;
  favorite?: boolean;
  discount?: number | undefined;
}
