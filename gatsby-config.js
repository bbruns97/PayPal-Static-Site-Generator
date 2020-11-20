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
        
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-image`,
        `gatsby-remark-relative-images`,

        {   //React-Cart
            resolve: `react-cart` 
        },
                  
        {   //Source-Filesystem (Content)
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content`,
            },
        },

        {   //Source-Filesystem (Images)
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },

        {   //Google-Fonts (Roboto)
            resolve: "gatsby-plugin-google-fonts",
            options: {
              fonts: [
                  `roboto\:400,700`,
              ],
              display: 'swap',
            },
        },
        
        {   //Transformer-Remark
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
