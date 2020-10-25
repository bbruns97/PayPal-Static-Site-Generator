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
    return graphql(`
    {
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
  `).then(result => {
    if (result.errors) {
        throw result.errors
    }
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
            if (keywordsFound.indexOf(node.frontmatter.keyword) === -1) {
                keywordsFound.push(node.frontmatter.keyword)
                createPage({
                                path: node.frontmatter.keyword,
                                component: path.resolve(`./src/templates/Keyword.js`),
                                context: {
                                    key: node.frontmatter.keyword,
                                },
                            })
            }
        })


  })
  return null

}