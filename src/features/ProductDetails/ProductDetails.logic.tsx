import { useGetProductByIdQuery } from "~/services/productsSlice";

type Props = {
  id: string;
};

const useProductDetails = ({ id }: Props) => {
  const { data, isLoading, error } = useGetProductByIdQuery(id as string);

  return {
    product: data?.Product,
    isLoading,
    error,
  };
};

export default useProductDetails;
