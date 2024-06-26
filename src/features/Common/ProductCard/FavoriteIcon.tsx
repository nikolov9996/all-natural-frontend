import React, { useState } from "react";
import { FavoriteIconFilled, FavoriteIconBorder } from "./ProductCard.styles";
import { IconButton } from "@mui/material";
import { ProductType } from "~/static/types";

const FavoriteIcon: React.FC<ProductType> = () => {
  const [liked, setLiked] = useState<boolean>(false);
  // temp solution before saving in localStorage
  // or cookie before sync with account

  // liked flag will be used here

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event && event.preventDefault();
    setLiked(!liked);
  };

  if (liked) {
    return (
      <IconButton onClick={handleClick}>
        <FavoriteIconFilled />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={handleClick}>
      <FavoriteIconBorder color="error" />
    </IconButton>
  );
};
export default FavoriteIcon;
