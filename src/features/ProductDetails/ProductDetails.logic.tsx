import { useGetProductByIdQuery } from "~/services/APISlice";

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
