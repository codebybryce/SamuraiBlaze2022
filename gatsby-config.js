require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
module.exports = {
  siteMetadata: {
    title: `Samurai Blaze`,
    description: `Smoking Accessories`,
    author: `@bitbuilder.co`,
    siteUrl: `https://samuraiblaze.com`,
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: '7mm0wpb7pulu',
          // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: 'a9Ko2R4l7LD85Q1DMuxP0iN1hTnwa4HhP2iDQ9TtVtg',
        //   host: `preview.contentful.com`,
        },
      },
      {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/
          }
        }
      },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
