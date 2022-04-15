import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Hidden } from "@material-ui/core"
import { useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import search from "../../images/search.svg"
import account from "../../images/account-header.svg"
import cart from "../../images/cart.svg"
import menu from "../../images/menu.svg"

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: theme.palette.common.white,
  },
  logoText: {
    color: theme.palette.common.offBlack,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  imgIcon: {
    width: "3rem",
    height: "3rem",
  },
}))

export default function Header({ categories }) {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: `1234${Math.random()}` } },
  ]

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const tabs = (
    <Tabs
      value={0}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(r => {
        return <Tab label={r.node.name} key={r.node.strapiId} />
      })}
    </Tabs>
  )
  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <List disablePadding>
        {routes.map(r => (
          <ListItem divider button key={r.node.strapiId}>
            <ListItemText primary={r.node.name} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h1">
          <span className={classes.logoText}>VAR </span> X
        </Typography>
        {matchesMD ? drawer : tabs}
        <IconButton>
          <img className={classes.imgIcon} src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img className={classes.imgIcon} src={cart} alt="cart" />
        </IconButton>
        <IconButton onClick={() => (matchesMD ? setDrawerOpen(true) : null)}>
          <img
            className={classes.imgIcon}
            src={matchesMD ? menu : account}
            alt={matchesMD ? "menu" : "account"}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
