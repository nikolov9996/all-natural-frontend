import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainGridBox = styled(Grid)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  margin: "auto auto",
}));
