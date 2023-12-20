import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import AppRouter from "./static/router";
import mainTheme from "./static/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout/Layout";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const queryClient = new QueryClient();

function App() {
  return (
    // providers here: react query, auth provider, theme etc...
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={mainTheme}>
          <StyledEngineProvider injectFirst>
            <Layout>
              <AppRouter />
            </Layout>
          </StyledEngineProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
