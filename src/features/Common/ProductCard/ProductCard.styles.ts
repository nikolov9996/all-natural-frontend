import { Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavIconFilled from "@mui/icons-material/Favorite";
import FavIconBorder from "@mui/icons-material/FavoriteBorderSharp";
import { green, red } from "@mui/material/colors";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)({
  position: "relative",

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
    backgroundColor: "whitesmoke",
  },
});

export const StyledProductInfo = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledProductName = styled("p")(({ theme }) => ({
  marginTop: 10,
  marginBottom: 0,

  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    height: 50,
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
}));

export const StyledPrice = styled("span")({
  color: green[600],
  fontWeight: 700,
  fontSize: 14,
});

export const FavoriteIconFilled = styled(FavIconFilled)({
  color: red[400],
});

export const FavoriteIconBorder = styled(FavIconBorder)({
  color: "ActiveBorder",
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
