import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { StyledCard } from "./ProductCard.styles";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";
import { ProductType } from "~/static/types";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <StyledCard>
      <Link to={`/product/${product._id}`}>
        <ImageListItem>
          <img
            style={{ height: 200 }}
            src={`${product.photos[0]}`}
            alt={product.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={product.name}
            actionIcon={<FavoriteIcon {...product} />}
            // subtitle={item.author}
          ></ImageListItemBar>
        </ImageListItem>
      </Link>
    </StyledCard>
  );
};

export default ProductCard;
