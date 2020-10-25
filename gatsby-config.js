/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
function links()
{
    var fs = require('fs');
    var textByLine = fs.readFileSync('Input.txt').toString().split("\n");
    return textByLine;
}

module.exports = {
    siteMetadata: {
        title: `Acme Bakery`,
        linksList: links(),
    },
    plugins: [
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