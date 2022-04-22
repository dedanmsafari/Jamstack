import React from "react"

import { Typography, Grid, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Lottie from "react-lottie"
import animationData from "../../images/data.json"

const useStyles = makeStyles(theme => ({
  textContainer: {
    padding: "1rem",
  },
}))

const HeroBlock = () => {
  const classes = useStyles()

  const MatchesLG = useMediaQuery(theme => theme.breakpoints.down("lg"))
  const MatchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const MatchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item classes={{ root: classes.textContainer }}>
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h1">
              The Premier
              <br />
              Developer Clothing Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h3">
              high quality, custom-designed shirts, hats and hoodies
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie
          options={defaultOptions}
          width={
            MatchesXS
              ? "25rem"
              : MatchesMD
              ? "30rem"
              : MatchesLG
              ? "33rem"
              : "50rem"
          }
        />
      </Grid>
    </Grid>
  )
}
export default HeroBlock
