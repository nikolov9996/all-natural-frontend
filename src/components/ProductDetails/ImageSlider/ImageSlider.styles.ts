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

export const BigImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  backgroundPosition: "center",
  height: 500,
  maxWidth: "calc(100% - 80px)",
  margin: "auto",

  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(100% - 10px)",
    height: 300,
  },
}));

export const SmallImage = styled("img")(({ theme }) => ({
  objectFit: "cover",
  maxWidth: "calc(100% - 3px)",
  alignSelf: "center",
  height: 120,
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    height: 100,
  },
}));

export const SliderBox = styled("div")({
  paddingLeft: 20,
  paddingRight: 20,
  margin: 20,
});

export const MainContainer = styled("div")({
  paddingTop: 10,
});

export const FadingImageBox = styled("div")(({ theme }) => ({
  height: 500,
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    height: 300,
  },
}));
