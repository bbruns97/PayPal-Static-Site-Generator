/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: "/PayPal-Static-Site-Generator/",

    plugins: [
        `gatsby-plugin-styled-components`,
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
