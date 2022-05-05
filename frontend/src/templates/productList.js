import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Layout from "../components/ui/layout"

import DynamicToolbar from "../components/product-list/DynamicToolbar"

const ProductList = () => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar />
      </Grid>
    </Layout>
  )
}

export default ProductList
