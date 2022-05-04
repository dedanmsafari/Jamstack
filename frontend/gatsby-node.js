exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    {
      products: allStrapiProduct {
        edges {
          node {
            name
            strapiId
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
  if (results.errors) {
    throw results.errors
  }

  const products = results.data.products.edges
  const categories = results.data.categories.edges

  products.forEach(product => {
    createPage({
      path: `/products/${product.node.strapiId}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        id: product.node.strapiId,
        name: product.node.name,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.toLowerCase()}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        id: category.node.strapiId,
        name: category.node.name,
        description: category.node.description,
      },
    })
  })
}
