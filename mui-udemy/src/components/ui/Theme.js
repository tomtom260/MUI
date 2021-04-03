import { createMuiTheme } from "@material-ui/core"

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

export default createMuiTheme({
  palette: {
    type: "light",
    common: {
      arcBlue,
      arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
})
