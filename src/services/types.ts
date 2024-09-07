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

export type User = {
  username: string;
  email: string;
  avatar: string;
  isSeller: boolean;
  favorites: ProductType[];
  comments: object[];
  _id?: string;
};

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}