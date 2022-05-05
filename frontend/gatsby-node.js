exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      products: allStrapiProduct {
        edges {
          node {
            name
            strapiId
            category {
              name
            }
          }
        }
      }
      categories: allStrapiCategory {
        edges {
          node {
            strapiId
            name
            description
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  const products = result.data.products.edges
  const categories = result.data.categories.edges

  products.forEach(product => {
    createPage({
      path: `/${product.node.category.name.toLowerCase()}/${
        product.node.name.split(" ")[0]
      }`,
      component: require.resolve(`./src/templates/productDetail.js`),
      context: {
        id: product.node.strapiId,
        name: product.node.name,
        category: product.node.category.name,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.toLowerCase()}`,
      component: require.resolve(`./src/templates/productList.js`),
      context: {
        id: category.node.strapiId,
        name: category.node.name,
        description: category.node.description,
      },
    })
  })
}
