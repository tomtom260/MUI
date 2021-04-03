import React from "react"
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import logo from "../../assets/images/logo.svg"

function Header() {
  const useStyles = makeStyles(theme => ({
    //setting min height of toolbar to div
    toolbarMargin: { ...theme.mixins.toolbar, marginBottom: "3rem" },
    logo: {
      height: "7rem",
      //   width: "",
    },
  }))

  const classes = useStyles()

  function ElevationScroll({ children }) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }

  return (
    <>
      <ElevationScroll>
        <AppBar color="secondary">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt="company logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
