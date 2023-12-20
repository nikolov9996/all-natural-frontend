import React, { useState } from "react";
import {
  FavoriteIconFilled,
  FavoriteIconBorder,
  StyledIconButton,
} from "./ProductCard.styles";
import { ProductType } from "./ProductCard.static";

const FavoriteIcon: React.FC<ProductType> = (product) => {
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
      <div onClick={handleClick}>
        <FavoriteIconFilled />
      </div>
    );
  }

  return (
    <div onClick={handleClick}>
      <FavoriteIconBorder color="error" />
    </div>
  );
};
export default FavoriteIcon;
