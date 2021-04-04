import React, { useState } from "react"
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import logo from "../../assets/images/logo.svg"
import { Link, useHistory } from "react-router-dom"

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

let currentLocation = ""
switch (window.location.pathname) {
  case "/website":
  case "/apps":
  case "custom":
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
    currentLocation = 0
    break
  default:
    // currentLocation = 0
    break
}

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
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: "0",
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: "0.7",
      "&:hover": {
        opacity: "1",
      },
    },
  }))

  const classes = useStyles()

  const tabItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Services",
      to: "/services",
    },
    {
      label: "The Revolution",
      to: "/revolution",
    },
    {
      label: "About Us",
      to: "/about",
    },
    {
      label: "Contact Us",
      to: "/contact",
    },
  ]

  const [value, setValue] = useState(currentLocation)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const history = useHistory()
  const handleChange = (e, value) => {
    setValue(value)
  }

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
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
              {tabItems.map(item => (
                <Tab
                  onMouseOver={e => {
                    if (item.label === "Services") {
                      setAnchorEl(e.currentTarget)
                      setOpen(true)
                    }
                  }}
                  key={item}
                  disableRipple
                  component={Link}
                  to={item.to}
                  className={classes.tab}
                  label={item.label}
                />
              ))}
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              MenuListProps={{ onMouseLeave: handleClose }}
              onClose={handleClose}
              anchorEl={anchorEl}
              open={open}
              classes={{ paper: classes.menu }}
              disableGutters
              elevation={0}
            >
              <MenuItem
                classes={{ root: classes.menuItem }}
                component={Link}
                to="/services"
                onClick={() => {
                  handleClose()
                  setValue(1)
                }}
              >
                Services
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                component={Link}
                to="/custom"
                onClick={() => {
                  handleClose()
                  setValue(1)
                }}
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose()
                  setValue(1)
                }}
                component={Link}
                to="/website"
              >
                Website Development
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose()
                  setValue(1)
                }}
                component={Link}
                to="/apps"
              >
                App Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
