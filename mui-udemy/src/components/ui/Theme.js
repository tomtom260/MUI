import { createMuiTheme } from "@material-ui/core"

const blue = "#0B72B9"
const orange = "#FFBA60"

export default createMuiTheme({
  palette: {
    type: "light",
    common: {
      blue,
      orange,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: orange,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "1rem",
    },
    estimate: {
      textTransform: "none",
      fontSize: "1rem",
      fontFamily: "Pacifico",
      color: "white",
    },
  },
})
