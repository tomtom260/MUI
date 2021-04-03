import React from "react"
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core"

function Header() {
  function ElevationScroll(props) {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>Arc Development</Toolbar>
        </AppBar>
      </ElevationScroll>
      Hello
    </>
  )
}

export default Header
