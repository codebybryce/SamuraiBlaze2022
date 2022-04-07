const path = require( `path` );

exports.createPages = async ( { graphql, actions } ) => {
    const { createPage } = actions;

    // Create Landing Pages
    const landingPages = await graphql( `
    {
      allContentfulLandingPage(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            childrenContentfulLandingPageContentTextTextNode {
              childMarkdownRemark {
                html
                rawMarkdownBody
                timeToRead
              }
            }
            heroImage {
              gatsbyImageData
              description
            }
            pageTitle
            slug
            updatedAt(difference: "")
            tags
            createdAt(locale: "")
          }
        }
      }
    }
    `).then( result => {

        result.data.allContentfulLandingPage.edges.forEach( ( edge ) => {

            createPage( {
                path: `/shop/${ edge.node.slug }`,
                component: path.resolve( `src/templates/landingPage.js` ),
                context: {
                    data: edge.node,

                }
            } );
        } );
    }

    );
    // Create Category Pages
    const category = await graphql( `
    {
      allContentfulCategoryPage(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            categoryImage {
              gatsbyImageData
              description
            }
            categoryTitle
            contentful_id
            slug
            categoryDescription {
              categoryDescription
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `).then( result => {
        result.data.allContentfulCategoryPage.edges.forEach( ( edge ) => {
            createPage( {
                path: `/category/${ edge.node.slug }`,
                component: path.resolve( `src/templates/categoryPage.js` ),
                context: {
                    data: edge.node,

                }
            } );
        } );
    } );

    return Promise.all( [landingPages, category] );

};
