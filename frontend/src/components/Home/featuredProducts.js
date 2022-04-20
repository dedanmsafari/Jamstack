import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Button, IconButton } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({}))

const FeaturedProducts = () => {
  const classes = useStyles()

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
  console.log(data.allStrapiProduct.edges)
  return <div>FeaturedProducts</div>
}

export default FeaturedProducts
