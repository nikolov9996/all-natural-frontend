import { styled } from "@mui/material/styles";
import Left from "@mui/icons-material/ArrowBackIosNew";
import Right from "@mui/icons-material/ArrowForwardIos";

export const SlideBox = styled("div")({
  height: 400,
  width: 400,
  justifyContent: "center",
});

export const ArrowLeft = styled(Left)(({ theme }) => ({
  fill: theme.palette.grey[500],
}));

export const ArrowRight = styled(Right)(({ theme }) => ({
  fill: theme.palette.grey[500],
}));

export const BigImage = styled("img")({
  objectFit: "cover",
  backgroundPosition: "center",
  height: 500,
  width: "auto",
  maxWidth: "calc(100% - 80px)",
  margin: "auto",
});

export const SmallImage = styled("img")({
  objectFit: "contain",
  maxWidth: "calc(100% - 30px)",
  height: 100,
});
