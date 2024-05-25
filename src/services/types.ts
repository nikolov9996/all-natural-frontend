import { ProductType, SensorType } from "~/static/types";

export interface ProductsResponse {
  Products: ProductType[];
}

export interface ProductDetailsResponse {
  Product: ProductType;
}

export interface SensorResponse {
  Sensor: SensorType[];
}

export type SensorDataPaginated = {
  count: number;
  page: number;
};
