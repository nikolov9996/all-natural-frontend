import { Card, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavIconFilled from "@mui/icons-material/Favorite";
import FavIconBorder from "@mui/icons-material/FavoriteBorderSharp";

import { red } from "@mui/material/colors";

export const StyledCard = styled(Card)({
  maxWidth: 240,
  borderRadius: 0,
  margin: 20,
  position: "relative",
});

export const FavoriteIconFilled = styled(FavIconFilled)({
  color: red[400],
});

export const FavoriteIconBorder = styled(FavIconBorder)({
  color: "black",
  "&:hover": {
    color: red[400],
  },
});

export const StyledIconButton = styled(IconButton)({
  backgroundColor: "whitesmoke",
  position: "absolute",
  top: 8,
  right: 8,
  "&:hover": {
    backgroundColor: "whitesmoke",
    color: red[400],
  },
});
