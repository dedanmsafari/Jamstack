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

import { Link, navigate } from "gatsby"

import search from "../../images/search.svg"
import account from "../../images/account-header.svg"
import cart from "../../images/cart.svg"
import menu from "../../images/menu.svg"

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: theme.palette.common.white,
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: theme.palette.common.white,
  },
  logoText: {
    color: theme.palette.common.offBlack,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
    fontSize: "1rem",
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  imgIcon: {
    width: "1.5rem",
    height: "1.5rem",
  },
}))

export default function Header({ categories }) {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const routes = [
    ...categories,
    {
      node: {
        name: "Contact Us",
        strapiId: `1234${Math.random()}`, //Geek way of creating random number lol!
        link: "/contact",
      },
    },
  ]

  const actions = [
    { icon: search, alt: "search", visible: true },
    { icon: cart, alt: "cart", visible: true, link: "/cart" },
    { icon: account, alt: "account", visible: !matchesMD, link: "/account" },
    {
      icon: menu,
      alt: "menu",
      visible: matchesMD,
      onClick: () => setDrawerOpen(true),
    },
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
        return (
          <Tab
            component={Link}
            to={r.node.link || `/${r.node.name.toLowerCase()}`}
            classes={{ root: classes.tab }}
            label={r.node.name}
            key={r.node.strapiId}
          />
        )
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
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {routes.map(r => (
          <ListItem divider button key={r.node.strapiId}>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={r.node.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button classes={{ root: classes.logoContainer }}>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR </span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        {actions.map(action => {
          if (action.visible) {
            return (
              <IconButton key={action.alt} component={Link} to={action.link}>
                <img
                  onClick={action.onClick}
                  className={classes.imgIcon}
                  src={action.icon}
                  alt={action.alt}
                />
              </IconButton>
            )
          }
        })}
      </Toolbar>
    </AppBar>
  )
}
