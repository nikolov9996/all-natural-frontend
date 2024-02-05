import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import AppRouter from "./static/router";
import mainTheme from "./static/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout/Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

function App() {
  return (
    // providers here: react query, auth provider, theme etc...
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={mainTheme}>
          <StyledEngineProvider injectFirst>
            <AppRouter />
          </StyledEngineProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
