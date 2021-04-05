import React, { useState } from "react"
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import MenuIcon from "@material-ui/icons/Menu"

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
  case "/app":
  case "/custom":
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
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3rem",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1rem",
      },
    },
    logo: {
      height: "6rem",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        height: "5rem",
      },
      [theme.breakpoints.down("xs")]: {
        height: "4rem",
      },
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

    menuIcon: {
      height: "2.5rem",
      width: "2.5rem",
      color: "white",
    },

    iconContainer: {
      marginLeft: "auto",

      "&:hover": {
        backgroundColor: "transparent",
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
  const menuItems = [
    {
      label: "Services",
      to: "/services",
    },
    {
      label: "Custom Software Development",
      to: "/custom",
    },
    {
      label: "Website Development",
      to: "/website",
    },
    {
      label: "Mobile app Development",
      to: "/app",
    },
  ]

  const [value, setValue] = useState(currentLocation)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [openDrawer, setOpenDrawer] = useState(false)

  const history = useHistory()
  const handleChange = (e, value) => {
    setValue(value)
  }

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const tabs = (
    <>
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
      <Button variant="contained" color="secondary" className={classes.button}>
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
        {menuItems.map((item, index) => (
          <MenuItem
            key={item}
            selected={index === selectedIndex && value === 1}
            classes={{ root: classes.menuItem }}
            component={Link}
            to={item.to}
            onClick={() => {
              handleClose()
              setValue(1)
              setSelectedIndex(index)
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        // onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        Swipeable Drawer
      </SwipeableDrawer>
      <IconButton
        disableRipple
        onClick={() => {
          setOpenDrawer(!openDrawer)
        }}
        className={classes.iconContainer}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </>
  )

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
