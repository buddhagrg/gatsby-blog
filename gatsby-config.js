module.exports = {
  siteMetadata: {
    title: "John Doe",
    description: "Blog by John Doe",
    author: "@johndoe"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true,
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `5`,
              elements: [`h2`, `h3`, `h4`, `h5`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 730,
              linkImagesToOriginal: false
            }
          }
        ],
      },
    },
  ]
}