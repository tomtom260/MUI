import React from "react"
import { AppBar, Tab, Tabs, Toolbar, useScrollTrigger } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import logo from "../../assets/images/logo.svg"

function Header() {
  const useStyles = makeStyles(theme => ({
    //setting min height of toolbar to div
    toolbarMargin: { ...theme.mixins.toolbar, marginBottom: "3rem" },
    logo: {
      height: "7rem",
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: "10rem",
      marginLeft: "25px",
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
        <AppBar color="primary">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt="company logo" />
            <Tabs className={classes.tabContainer}>
              <Tab disableRipple className={classes.tab} label="Home" />
              <Tab disableRipple className={classes.tab} label="Services" />
              <Tab disableRipple className={classes.tab} label="Revolution" />
              <Tab disableRipple className={classes.tab} label="About Us" />
              <Tab disableRipple className={classes.tab} label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
