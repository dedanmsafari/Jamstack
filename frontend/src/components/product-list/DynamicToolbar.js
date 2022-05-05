import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FunctionContainer from "./functionContainer"

const useStyles = makeStyles(theme => ({
  toolBar: {
    width: "95%",
    height: "20rem",
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
  },
}))

const DynamicToolbar = () => {
  const classes = useStyles()

  return (
    <Grid item container direction="column" classes={{ root: classes.toolBar }}>
      <FunctionContainer />
    </Grid>
  )
}

export default DynamicToolbar
