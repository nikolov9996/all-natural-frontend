import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "./api";

export function useGetProducts() {
    const queryClient = useQueryClient();

    const useGetManyProducts = (count: number) => useQuery({
        queryKey: ['many-products'],
        queryFn: () => API.getProducts(count),
        retry: false,
    });


    return {
        useGetManyProducts
    }
}