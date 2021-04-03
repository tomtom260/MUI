import { ThemeProvider } from "@material-ui/styles"
import Header from "./components/ui/Header"
import theme from "./components/ui/Theme"
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  )
}

export default App
