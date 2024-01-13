import { ProductType } from "~/static/types";

export interface ProductsResponse {
  Products: ProductType[];
}

export interface ProductDetailsResponse {
  Product: ProductType;
}
