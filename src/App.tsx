import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import AppRouter from "./static/router";
import mainTheme from "./static/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store,persistor } from "./app/store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    // providers here: react query, auth provider, theme etc...
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
              <ThemeProvider theme={mainTheme}>
            <StyledEngineProvider injectFirst>
              <AppRouter />
            </StyledEngineProvider>
          </ThemeProvider>
          </PersistGate>
        
        </Provider>
      </LocalizationProvider>
    </>
  );
}

export default App;
