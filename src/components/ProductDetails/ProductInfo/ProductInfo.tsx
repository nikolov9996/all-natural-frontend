import React from "react";
import { ProductType } from "~/static/types";
import { MainContainer } from "./ProductInfo.style";
import { Chip, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetProducts } from "~/services/hooks";

const ProductInfo: React.FC<ProductType> = () => {
  const { id } = useParams();
  const { useGetProductDetails } = useGetProducts();
  const { data, isLoading } = useGetProductDetails(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainContainer>
      <Typography sx={{ fontWeight: "700" }} variant="h5">
        {data?.Product.name}
      </Typography>
      <Typography>{data?.Product.price}</Typography>
      <Chip label={data?.Product.stock} />
      <Typography variant="subtitle2" paragraph={true}>
        {data?.Product.description}
      </Typography>
    </MainContainer>
  );
};

export default ProductInfo;
