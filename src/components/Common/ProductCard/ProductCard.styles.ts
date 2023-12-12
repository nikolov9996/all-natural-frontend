import { Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavIconFilled from "@mui/icons-material/Favorite";
import FavIconBorder from "@mui/icons-material/FavoriteBorderSharp";

import { green, grey, red } from "@mui/material/colors";

export const StyledCard = styled(Card)({
  maxWidth: 360,
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

export const StyledName = styled(Typography)({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontWeight: 600,
});

export const CardFooter = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const PriceBox = styled("div")({
  display: "flex",
  alignItems: "baseline",
});

export const Price = styled(Typography)({
  fontWeight: 600,
  color: grey[700],
});

export const Currency = styled("span")({
  fontSize: 12,
  color: grey[700],
  fontWeight: 600,
  paddingLeft: 4,
});

export const Stock = styled(Typography)({
  fontSize: 15,
  fontWeight: 600,
  color: green[600],
});

export const Content = styled("div")({
    padding:12
});
