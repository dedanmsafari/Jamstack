import React from "react"
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import cta from "../../images/cta.svg"

const useStyles = makeStyles(theme => ({
  paragraph: {
    maxWidth: "45rem",
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  container: {
    marginBottom: "15rem",
  },
  headingContainer: {
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  icon: {
    [theme.breakpoints.down("xs")]: {
      height: "18rem",
    },
  },
  buttonContainer: {
    marginTop: "3rem",
  },
  containedbutton: {
    color: theme.palette.common.white,
    marginLeft: "2rem",
  },
}))

const CallToAction = () => {
  const classes = useStyles()
  const MatchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      direction={MatchesMD ? "column" : "row"}
      classes={{ root: classes.container }}
    >
      <Grid item>
        <img src={cta} className={classes.icon} alt="Commited Icon" />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item classes={{ root: classes.headingContainer }}>
            <Typography align={MatchesMD ? "center" : undefined} variant="h1">
              {" "}
              Committed to Quality
            </Typography>
          </Grid>
          <Grid item classes={{ root: classes.paragraph }}>
            {" "}
            <Typography
              align={MatchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              At VAR X our mission is to provide comfortable, durable, premium,
              designer clothing and clothing accessories to developers and
              technology enthusiasts.
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={MatchesMD ? "center" : undefined}
            classes={{ root: classes.buttonContainer }}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/contact"
              >
                Contact Us
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                classes={{ root: classes.containedbutton }}
                color="primary"
                component={Link}
                to="/account"
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CallToAction
