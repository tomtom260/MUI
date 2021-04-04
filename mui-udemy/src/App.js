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
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/website" component={() => <div>Websites</div>} />
          <Route exact path="/apps" component={() => <div>Mobile apps</div>} />
          <Route
            exact
            path="/custom"
            component={() => <div>Custom software</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
