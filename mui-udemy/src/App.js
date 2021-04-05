import { ThemeProvider } from "@material-ui/styles"
import Header from "./components/ui/Header"
import theme from "./components/ui/Theme"
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route path="/services" component={() => <div>Services</div>} />
          <Route
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route path="/about" component={() => <div>About Us</div>} />
          <Route path="/contact" component={() => <div>Contact Us</div>} />
          <Route path="/website" component={() => <div>Websites</div>} />
          <Route path="/app" component={() => <div>Mobile apps</div>} />
          <Route
            path="/custom"
            component={() => <div>Custom Software Development</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
