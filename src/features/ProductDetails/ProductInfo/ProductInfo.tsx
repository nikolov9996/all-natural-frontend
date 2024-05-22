import React from "react";
import { ProductType } from "~/static/types";
import { MainContainer } from "./ProductInfo.style";
import { Chip, Typography } from "@mui/material";

const ProductInfo: React.FC<ProductType> = (product) => {
  return (
    <MainContainer>
      <Typography sx={{ fontWeight: "700" }} variant="h5">
        {product.name}
      </Typography>
      <Typography>{product.price}</Typography>
      <Chip label={product.stock} />
      <Typography variant="subtitle2" paragraph={true}>
        {product.description}
      </Typography>
    </MainContainer>
  );
};

export default ProductInfo;
