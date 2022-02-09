require( "dotenv" ).config( {
    path: `.env.${process.env.NODE_ENV}`,
} );
module.exports = {
    siteMetadata: {
        title: `Samurai Blaze`,
        description: `Smoking Accessories`,
        author: `@bitbuilder.co`,
        siteUrl: `https://samuraiblaze.com`,
        menuLinks: [
            {
                page: 'home',
                link: '/',
            },

            {
                page: 'Terms of Service',
                link: '/shop/terms-of-service'
            },
            {
                page: 'Shipping',
                link: '/shop/shipping-policy'
            },
            {
                page: 'Contact Us',
                link: '/shop/contact-us'
            },

            {
                page: 'FAQ',
                link: '/shop/frequently-asked-questions'
            },
            {
                page: 'About Us',
                link: '/shop/about-us'
            },

        ]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: "7mm0wpb7pulu",
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: "a9Ko2R4l7LD85Q1DMuxP0iN1hTnwa4HhP2iDQ9TtVtg",
                //   host: `preview.contentful.com`,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/,
                },
            },
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

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
