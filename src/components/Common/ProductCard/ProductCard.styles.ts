import { Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavIconFilled from "@mui/icons-material/Favorite";
import FavIconBorder from "@mui/icons-material/FavoriteBorderSharp";
import { green, red } from "@mui/material/colors";

export const StyledCard = styled(Card)({
  position: "relative",

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
    backgroundColor: "whitesmoke",
  },
});

export const FavoriteIconFilled = styled(FavIconFilled)({
  color: red[400],
});

export const FavoriteIconBorder = styled(FavIconBorder)({
  color: "whitesmoke",
  "&:hover": {
    color: red[400],
  },
});

export const StyledIconButton = styled(IconButton)({
  boxShadow: "0px 0px 8px 5px rgba(0,0,0,0.1)",
  backgroundColor: "whitesmoke",
  top: 8,
  right: 8,
  "&:hover": {
    backgroundColor: "whitesmoke",
    color: red[400],
  },
});

export const Stock = styled(Typography)({
  fontSize: 15,
  fontWeight: 600,
  color: green[600],
});

export const Content = styled("div")({
  padding: 12,
});

export const StyledImg = styled("img")({
  height: 200,
});
