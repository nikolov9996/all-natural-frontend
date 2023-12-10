import axios from "axios";
import { API_BASE_URL_DEV, API_BASE_URL_PROD } from "./constants";

const api_service = axios.create({
  baseURL:// change ENV if needed
    process.env.NODE_ENV === "production"
      ? API_BASE_URL_PROD
      : API_BASE_URL_DEV,
  timeout: 5000,
});

export const API = {
  getProducts: async (count: number) => {
    try {
      const response = await api_service.get(`/product?count=${count}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong in API function: getProducts");
    }
  },
};
