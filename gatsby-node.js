/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve("./src/templates/Page.js")
  const result = await graphql(`
    {
      wpgraphql {
        pages {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
  }

  const pages = result.data.wpgraphql.pages.edges

  pages.forEach(page => {
    const { slug, id } = page.node

    createPage({
      path: `/${slug}`,
      component: pageTemplate,
      context: {
        id: id,
      },
    })
  })
}

// https://www.gatsbyjs.org/docs/schema-customization/#feeding-remote-images-into-gatsby-image
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let url = source.sourceUrl

          if (source.guid) {
            url = source.guid
          }

          return await createRemoteFileNode({
            url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
