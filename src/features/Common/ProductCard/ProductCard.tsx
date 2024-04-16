import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import {
  StyledCard,
  StyledLink,
  StyledPrice,
  StyledProductInfo,
  StyledProductName,
} from "./ProductCard.styles";
import FavoriteIcon from "./FavoriteIcon";
import { ProductType } from "~/static/types";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {

  return (
    <StyledLink to={`/product/${product._id}`}>
      <StyledCard>
        <ImageListItem>
          <img
            style={{ height: 200 }}
            src={`${product.photos[0]}`}
            alt={product.name}
            loading="lazy"
          />
        </ImageListItem>
      </StyledCard>
      <StyledProductName>{product.name}</StyledProductName>
      <StyledProductInfo>
        <StyledPrice>{product.price.toFixed(2)} BGN</StyledPrice>
        <FavoriteIcon {...product} />
      </StyledProductInfo>
    </StyledLink>
  );
};

export default ProductCard;
