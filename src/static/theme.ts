import { Theme, createTheme } from "@mui/material";

const mainTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
  },
  typography: {
    fontFamily: "OpenSans",
  },
});

export default mainTheme;
