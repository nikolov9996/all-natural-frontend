import { ThemeProvider } from "@mui/material"
import AppRouter from "./static/router"
import mainTheme from "./static/theme"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return ( // providers here: react query, auth provider, theme etc...
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={mainTheme}>
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>

    </>
  )
}

export default App
