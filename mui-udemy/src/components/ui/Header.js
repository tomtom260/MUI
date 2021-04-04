import React, { useState } from "react"
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import logo from "../../assets/images/logo.svg"
import { Link, useHistory } from "react-router-dom"

function Header() {
  const useStyles = makeStyles(theme => ({
    //setting min height of toolbar to div
    toolbarMargin: { ...theme.mixins.toolbar, marginBottom: "3rem" },
    logo: {
      height: "6rem",
      cursor: "pointer",
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: "9rem",
      marginLeft: "8px",
    },
    button: {
      margin: "0  25px 0 50px",
      minWidth: "10rem",
      borderRadius: "50px",
      height: "45px",
      ...theme.typography.estimate,
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

  let currentLocation = 0
  switch (window.location.pathname) {
    case "/services":
      currentLocation = 1
      break
    case "/revolution":
      currentLocation = 2
      break
    case "/about":
      currentLocation = 3
      break
    case "/contact":
      currentLocation = 4
      break
    case "/":
    default:
      currentLocation = 0
      break
  }

  const [value, setValue] = useState(currentLocation)
  const history = useHistory()
  const handleChange = (e, value) => {
    setValue(value)
  }

  return (
    <>
      <ElevationScroll>
        <AppBar color="primary">
          <Toolbar disableGutters>
            <img
              onClick={() => {
                history.push("/")
                setValue(0)
              }}
              className={classes.logo}
              src={logo}
              alt="company logo"
            />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                disableRipple
                component={Link}
                to="/"
                className={classes.tab}
                label="Home"
              />
              <Tab
                disableRipple
                component={Link}
                to="/services"
                className={classes.tab}
                label="Services"
              />
              <Tab
                disableRipple
                component={Link}
                to="/revolution"
                className={classes.tab}
                label="Revolution"
              />
              <Tab
                disableRipple
                component={Link}
                to="/about"
                className={classes.tab}
                label="About Us"
              />
              <Tab
                disableRipple
                component={Link}
                to="/contact"
                className={classes.tab}
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
