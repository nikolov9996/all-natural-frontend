import axios from "axios";
import { API_BASE_URL_DEV, API_BASE_URL_PROD } from "./constants";
import { ProductDetailsResponse, ProductsResponse } from "./types";

const api_service = axios.create({
  // change ENV if needed
  baseURL:
    process.env.NODE_ENV === "production"
      ? API_BASE_URL_PROD
      : API_BASE_URL_DEV,
  timeout: 5000,
});

export const API = {
  getProducts: async (count: number): Promise<ProductsResponse> => {
    try {
      const response = await api_service.get(`/product?count=${count}`);
      return response?.data;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong in API function: getProducts");
    }
  },

  getProductDetails: async (
    id: string | undefined
  ): Promise<ProductDetailsResponse> => {
    try {
      const response = await api_service.get(`/product/${id}`);
      return response?.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        "Something went wrong in API function: getProductDetails"
      );
    }
  },
};
