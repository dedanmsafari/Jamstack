import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Button, IconButton, Chip, useMediaQuery } from "@material-ui/core"
import clsx from "clsx"

import Rating from "./Rating"

import featuredAdornment from "../../images/featured-adornment.svg"
import frame from "../../images/product-frame-grid.svg"
import explore from "../../images/explore.svg"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "100%",
    height: "180rem",
    padding: "0 2.5rem",
    [theme.breakpoints.down("md")]: {
      height: "220rem",
    },
  },
  featured: {
    height: "20rem",
    width: "20rem",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
      width: "15rem",
    },
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 0,
    height: "24.8rem",
    width: "25rem",
    boxSizing: "border-box",
    boxShadow: theme.shadows[5],
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      height: "19.8rem",
      width: "20rem",
    },
  },
  slide: {
    height: "20rem",
    width: "24.5rem",
    backgroundColor: theme.palette.primary.main,
    transition: "transform 0.5s ease",
    zIndex: 0,
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      height: "15.2rem",
      width: "19.5rem",
    },
  },
  slideLeft: {
    transform: "translate(-24.5rem,0px)",
  },
  slideRight: {
    transform: "translate(24.5rem,0px)",
  },
  slideDown: {
    transform: "translate(0px,17rem)",
  },
  productContainer: {
    margin: "5rem 0",
  },
  exploreContainer: {
    marginTop: "auto",
  },
  exploreButton: {
    textTransform: "none",
  },
  exploreIcon: {
    height: "1.5rem",

    marginLeft: "0.5rem",
  },
  chipLabel: {
    ...theme.typography.h5,
  },
  chipRoot: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const FeaturedProducts = () => {
  const classes = useStyles()
  const [slide, setSlide] = useState(null)

  const MatchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const data = useStaticQuery(graphql`
    query Featured {
      allStrapiProduct(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            variants {
              price
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      container
      direction="column"
      justifyContent={MatchesMD ? "space-between" : "center"}
      className={classes.background}
    >
      {data.allStrapiProduct.edges.map(({ node }, i) => {
        const alignment = MatchesMD
          ? "center"
          : i === 0 || i === 3
          ? "flex-start"
          : i === 1 || i === 4
          ? "center"
          : "flex-end"

        return (
          <Grid
            item
            container
            justifyContent={alignment}
            key={node.strapiId}
            classes={{ root: classes.productContainer }}
            alignItems="center"
          >
            <IconButton
              classes={{ root: classes.frame }}
              onClick={() => (slide === i ? setSlide(null) : setSlide(i))}
            >
              <img
                src={
                  process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url
                }
                alt={node.name}
                className={classes.featured}
              />
            </IconButton>
            <Grid
              item
              container
              direction="column"
              classes={{
                root: clsx(classes.slide, {
                  [classes.slideDown]: MatchesMD && slide === i,
                  [classes.slideLeft]:
                    !MatchesMD && slide === i && alignment === "flex-end",
                  [classes.slideRight]:
                    !MatchesMD &&
                    slide === i &&
                    (alignment === "center" || alignment === "flex-start"),
                }),
              }}
            >
              <Grid item>
                <Typography variant="h4">{node.name.split(" ")[0]}</Typography>
              </Grid>
              <Grid item>
                <Rating number={3.5} />
              </Grid>
              <Grid item>
                <Chip
                  classes={{ root: classes.chipRoot, label: classes.chipLabel }}
                  label={`$${node.variants[0].price}`}
                />
              </Grid>

              <Grid item classes={{ root: classes.exploreContainer }}>
                <Button classes={{ root: classes.exploreButton }}>
                  <Typography variant="h5">Details</Typography>
                  <img
                    className={classes.exploreIcon}
                    src={explore}
                    alt="go to product details"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FeaturedProducts
