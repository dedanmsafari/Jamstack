import React, { useState } from "react"
import { Grid, Typography, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Sort from "./sort"

import filter from "../../images/filter.svg"
import sort from "../../images/sort.svg"

const useStyles = makeStyles(theme => ({
  functionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "6rem",
    borderRadius: "10px 10px 0px 0px",
  },
}))

const FunctionContainer = () => {
  const classes = useStyles()
  const [option, setOption] = useState(null)
  const content = () => {
    switch (option) {
      case null:
        const items = [
          { alt: "filter", icon: filter },
          { alt: "sort", icon: sort },
        ]
        return (
          <Grid item container justify="space-around" alignItems="center">
            {items.map(item => (
              <Grid item key={item.alt}>
                <IconButton onClick={() => setOption(item.alt)}>
                  <img src={item.icon} alt={item.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        )

      case "sort":
        return <Sort setOption={setOption} />
      default:
        return null
    }
  }

  return (
    <Grid item container classes={{ root: classes.functionContainer }}>
      {content()}
    </Grid>
  )
}

export default FunctionContainer
