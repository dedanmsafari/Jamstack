import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Grid,
  IconButton,
  Button,
  useMediaQuery,
} from "@material-ui/core"
import Carousel from "react-spring-3d-carousel"
import clsx from "clsx"

import { makeStyles } from "@material-ui/core/styles"

import promoAdornment from "../../images/promo-adornment.svg"
import explore from "../../images/explore.svg"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "100%",
    height: "70rem",
    padding: "30rem 10rem 10rem 10rem",
    [theme.breakpoints.down("lg")]: {
      padding: "20rem 2rem 2rem 2rem ",
    },
    [theme.breakpoints.down("xs")]: {
      overflow: "hidden",
    },
  },
  IconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  carouselImage: {
    width: "25rem",
    height: "30rem",
    backgroundColor: theme.palette.common.white,
    borderRadius: 20,
    boxShadow: theme.shadows[20],
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      height: "25rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
      height: "20rem",
    },
  },
  CarouselContainer: {
    marginLeft: "20rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      height: "30rem",
    },
  },
  productName: {
    color: theme.palette.common.white,
  },
  spacing: {
    margin: "0 15rem 10rem 15rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 8rem 10rem 8rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 5rem 10rem 5rem",
    },
  },
  explore: {
    textTransform: "none",
    marginRight: "2rem",
  },
  descriptionContainer: {
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}))

const PromotionalBlock = () => {
  const [selectedSlide, setSelectedSlide] = useState(0)
  const classes = useStyles()

  const MatchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const data = useStaticQuery(graphql`
    query Promo {
      allStrapiProduct(filter: { promo: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            description
            variants {
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  let slides = []

  data.allStrapiProduct.edges.forEach(({ node }, i) =>
    slides.push({
      key: i,
      content: (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <IconButton
              disableRipple
              onClick={() => setSelectedSlide(i)}
              classes={{
                root: clsx(classes.IconButton, {
                  [classes.spacing]: i !== selectedSlide,
                }),
              }}
            >
              <img
                src={
                  process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url
                }
                alt={`Image -${i}`}
                className={classes.carouselImage}
              />
            </IconButton>
          </Grid>
          <Grid item>
            {selectedSlide === i ? (
              <Typography variant="h1" classes={{ root: classes.productName }}>
                {node.name.split(" ")[2]}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      ),
      description: node.description,
    })
  )

  return (
    <Grid
      container
      justifyContent={MatchesMD ? "space-around" : "space-between"}
      alignItems="center"
      direction={MatchesMD ? "column" : "row"}
      classes={{ root: classes.mainContainer }}
    >
      <Grid item classes={{ root: classes.CarouselContainer }}>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h2" paragraph>
          {slides[selectedSlide].description}{" "}
        </Typography>
        <Button>
          <Typography variant="h4" classes={{ root: classes.explore }}>
            Explore
          </Typography>
          <img src={explore} alt="go to product page" />
        </Button>
      </Grid>
    </Grid>
  )
}

export default PromotionalBlock
