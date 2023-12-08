import { ThemeProvider } from "@mui/material"
import AppRouter from "./static/router"
import mainTheme from "./static/theme"

function App() {

  return ( // providers here: react query, auth provider, theme etc...
    <>
      <ThemeProvider theme={mainTheme}>
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App
