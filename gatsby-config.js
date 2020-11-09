/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Acme Bakery`,
        address: `9852 N Acme Way Tempe, AZ 85281`,
        phoneNumber: `(480)-453-8754`,
        email: `bakery@example.com`,
        twitterLink: `https://twitter.com/`,
        facebookLink: `https://facebook.com/`,
        instagramLink: `https://instagram.com/`
    },
    plugins: [
        
            { resolve: `react-cart` } ,
            
          
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-image`,
        `gatsby-remark-relative-images`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                ],
            },
        },

    ],
}
