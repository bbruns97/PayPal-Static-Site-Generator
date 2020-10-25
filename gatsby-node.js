const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
                title
                keyword
            }
          }
        }
      }
    }
  `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/productDetails.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })

    const keywordsFound = []
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        node.frontmatter.keyword.forEach(key => {
            if (keywordsFound.indexOf(key) === -1) {
                keywordsFound.push(key)
            }
        })
    })
    categoriesFound.forEach(key => {
          createPage({
            path: `/${key}`,
            component: path.resolve(`./src/templates/Keyword.js`),
            context: {
              keyword: key,
            },
          })
        })
        return null
}