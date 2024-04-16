import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import AppRouter from "./static/router";
import mainTheme from "./static/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    // providers here: react query, auth provider, theme etc...
    <>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <StyledEngineProvider injectFirst>
            <AppRouter />
          </StyledEngineProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
