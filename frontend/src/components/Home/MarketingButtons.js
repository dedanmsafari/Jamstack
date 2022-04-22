import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import marketingAdornment from "../../images/marketing-adornment.svg"
import morebyUs from "../../images/more-by-us.svg"
import store from "../../images/store.svg"

const useStyles = makeStyles(theme => ({
  button: {
    backgroundImage: `url(${marketingAdornment})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50rem",
    width: "50rem",
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("lg")]: {
      height: "40rem",
      width: "40rem",
      margin: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30rem",
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25rem",
      width: "25rem",
    },
  },
  marketingContainer: {
    padding: "10rem 0 ",
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
      width: "8rem",
    },
  },
  label: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem",
    },
  },
}))

const buttons = [
  { label: "store", image: store, link: "/hats" },
  { label: "morebyus", image: morebyUs, href: "https://www.localize.com/" },
]

const MarketingButtons = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justifyContent="space-around"
      classes={{ root: classes.marketingContainer }}
    >
      {buttons.map(({ label, image, link, href }) => (
        <Grid item key={label}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            classes={{ root: classes.button }}
            component={link ? Link : "a"}
            to={link ? link : undefined}
            href={href ? href : undefined}
            target={href ? "_blank" : undefined}
          >
            <Grid item>
              <img className={classes.icon} src={image} alt={label} />
            </Grid>

            <Grid item>
              <Typography classes={{ root: classes.label }} variant="h1">
                {label}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default MarketingButtons
