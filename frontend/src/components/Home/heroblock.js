import React from "react"
import { Link, navigate } from "gatsby"
import { Typography, Grid, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Lottie from "react-lottie"
import animationData from "../../images/data.json"

const useStyles = makeStyles(theme => ({}))

const HeroBlock = () => {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item>
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
        <Lottie options={defaultOptions} width="48rem" />
      </Grid>
    </Grid>
  )
}
export default HeroBlock
