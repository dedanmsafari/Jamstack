import React from "react"
import { makeStyles } from "@material-ui/core"

import fullStar from "../../images/full-star.svg"
import halfStar from "../../images/half-star.svg"
import emptyStar from "../../images/empty-star.svg"

const useStyles = makeStyles(theme => ({
  size: {
    width: "2rem",
    height: "2rem",
  },
}))

const Rating = ({ number }) => {
  const classes = useStyles()

  let diff = 5 - Math.ceil(number) // get the number of empty stars

  return (
    <>
      {[...Array(Math.floor(number))].map((_, i) => (
        <img src={fullStar} alt="full star" key={i} className={classes.size} />
      ))}
      {number % 1 !== 0 ? <img src={halfStar} alt="half star" /> : null}
      {[...Array(diff)].map((_, i) => (
        <img src={emptyStar} alt="empty star" key={`${i}${diff}`} />
      ))}
    </>
  )
}

export default Rating
