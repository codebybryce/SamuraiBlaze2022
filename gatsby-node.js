const path = require( `path` );

exports.createPages = async ( { graphql, actions } ) => {
    const { createPage } = actions;
    const result = await graphql( `
    {
        allContentfulLandingPage(filter: {node_locale: {eq: "en-US"}}) {
          edges {
            node {
              id
              contentText {
                contentText
              }
              contentful_id
              heroImage {
                gatsbyImageData
                createdAt(fromNow: true)
              }
              slug
              tags
              pageTitle
            }
          }
        }
      }
  `);

    const templatePath = path.resolve( `src/templates/landingPage.js` );


    result.data.allContentfulLandingPage.edges.forEach( ( edge ) => {

        createPage( {
            path: `/shop/${edge.node.slug}`,
            component: templatePath,
            context: {
                data: edge.node,

            }
        } );
    } );
};
